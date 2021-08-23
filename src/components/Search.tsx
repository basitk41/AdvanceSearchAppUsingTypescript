import React from "react";
import { connect } from "react-redux";
import * as ActionsCreator from "../store/actions/Index";
import Spinner from "./UI/Spinner";
import Card from "./UI/Card";
import { Artist } from "../utils/Interfaces";
import { paginate } from '../utils/pagination';
import Pages from "./UI/Pages";
export interface Props {
  setSearch:(text:string)=>void,
  searchResult:Artist[],
  inputField:string,
  updateInput:(text:string)=>void,
  loading:boolean,
  currentPage:number,
  pageSize:number,
  setCurrentPage:(page:number)=>void,
  initPages:()=>void,
}
const Search: React.FC<Props> = ({
  setSearch,
  updateInput,
  searchResult,
  inputField,
  loading,
  currentPage,
  pageSize,
  setCurrentPage,
  initPages
  }) => {
    const paginatedData = paginate(searchResult, currentPage, pageSize);
    const searchHandler = () => {
      initPages();
      setSearch(inputField);
      };
    return ( 
        <div>
        <h3 style={{ textAlign: "center", color: "blue" }}>Search</h3>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Artists Search"
                  value={inputField}
                  onChange={(e) => updateInput(e.target.value)}
                />
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={searchHandler}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
            <div className="row">
          {loading ? (
              <Spinner />
              ) : (
                paginatedData.map((item) => {
                      return ( <div key={item.name} className="col-sm-3 mb-3"><Card item={item} /></div> );
                    })
                    )}
            </div>
              <Pages 
              setCurrentPage={setCurrentPage} 
              currentPage={currentPage} 
              length={searchResult.length} 
              pageSize={pageSize} 
              />
        </div>
      </div>
     );
}
const mapStateToProps = (state:any) => {
    return {
      searchResult: state.search.search,
      inputField: state.search.input,
      loading: state.search.loading,
      currentPage: state.pages.currentPage,
      pageSize: state.pages.pageSize,
    };
  };
  const mapDispatchToProps = (dispatch:any) => {
    return {
      setSearch: (search:string) => dispatch(ActionsCreator.setSearch(search)),
      updateInput: (input:string) => dispatch(ActionsCreator.updateInput(input)),
      setCurrentPage: (page:number) => dispatch(ActionsCreator.setCurrentPage(page)),
      initPages: () => dispatch(ActionsCreator.initPages()),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Search);
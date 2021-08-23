import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/UI/Header';
import Home from './components/Home';
import Search from './components/Search';
import FavoriteArtist from './components/FavoriteArtists';
import Biography from './components/Biography';
import { connect } from "react-redux";
import * as ActionsCreator from "./store/actions/Index";
export interface Props {
  initSearch:()=>void,
  initPages:()=>void,
}
const App: React.FC<Props> = ({ initPages, initSearch}) => {
  useEffect(()=>{
    initPages();
    initSearch()
    //eslint-disable-next-line
  },[])
  return (
    <div className="container">
      <Header />
      <hr></hr>
      <div className="tab-content">
        <div className="tab-pane fade show active">
          {
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/favoriteArtists" component={FavoriteArtist} />
              <Route path="/biography/:name" component={Biography} />
              <Redirect from="/" to="/home" />
            </Switch>
          }
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch:any) => {
  return {
    initSearch: () => dispatch(ActionsCreator.initSearch()),
    initPages: () => dispatch(ActionsCreator.initPages()),
  };
};
export default connect(null, mapDispatchToProps)(App);
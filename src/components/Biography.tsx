import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as ActionsCreator from "../store/actions/Index";
import { BioGraphy, Artist } from '../utils/Interfaces'; 
import Spinner from './UI/Spinner';
import parse from "html-react-parser";
export interface Props {
    initBio:(name:string)=>void,
    loading:boolean,
    biography:BioGraphy,
    artist:Artist
    history:any,
}
const Biography: React.FC<Props> = ({ loading, biography, initBio, artist,history }) => {
    useEffect(()=>{
        initBio(artist?.name);
    },[artist.name,initBio])
    return ( 
        <div>
            <p style={{textAlign:'right'}}>
            <button className="btn btn-info" onClick={()=>history.goBack()}>Back</button>
            </p>
            {loading ?
            <Spinner />
            :
            <div className="card">
                <h5 className="card-header">Biography</h5>
                <div className="card-body">
                    <h5 className="card-title">{artist?.name}</h5>
                    <p className="card-text"><span style={{fontFamily:"monospace"}}>Published: </span>{biography?.published}</p>
                    <p className="card-text"><span style={{fontFamily:"monospace"}}>Content: </span>{biography && parse(biography?.content)}</p>
                    <p className="card-text"><span style={{fontFamily:"monospace"}}>Summary: </span>{biography && parse(biography?.summary)}</p>
                </div>
            </div>
         }
        </div>
     );
}
const mapStateToProps = (state:any) => {
    return {
      biography: state.biography.biography,
      loading: state.biography.loading,
      artist: state.biography.artist,
    };
  };
  const mapDispatchToProps = (dispatch:any) => {
    return {
      initBio: (name:string) => dispatch(ActionsCreator.initBio(name))
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Biography);
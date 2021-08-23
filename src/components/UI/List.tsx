import React from 'react';
import { Artist } from '../../utils/Interfaces'; 
import { connect } from "react-redux";
import * as ActionsCreator from "../../store/actions/Index";
import { Link } from 'react-router-dom';
export interface Props {
    item:Artist,
    unFav:(artist:Artist)=>void,
    setArtist:(artist:Artist)=>void,
}
const List: React.FC<Props> = ({item,unFav,setArtist}) => {
    return ( 
        <li className="list-group-item d-flex justify-content-between align-items-center">
      {item.name}
      <span
        className="badge"
        style={{ cursor: "pointer" }}
      ><Link to={`/biography/${item.name}`} className="btn btn-primary" onClick={()=>setArtist(item)}>Biography</Link>
       &nbsp;&nbsp;&nbsp;&nbsp;
        <span
              className="badge bg-danger rounded-pill"
              onClick={()=>unFav(item)}
              style={{padding:'10px',fontSize:'12px'}}
              >X</span>
      </span>
    </li>
     );
}
const mapDispatchToProps = (dispatch:any) => {
  return {
    unFav: (artist:Artist) => dispatch(ActionsCreator.unFav(artist)),
    setArtist: (artist:Artist) => dispatch(ActionsCreator.setArtist(artist)),
  };
};
export default connect(null,mapDispatchToProps)(List);
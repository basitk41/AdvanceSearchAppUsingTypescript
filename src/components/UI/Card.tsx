import React from 'react';
import { Artist } from '../../utils/Interfaces';
import FontAwesome from 'react-fontawesome'
import { connect } from "react-redux";
import * as ActionsCreator from "../../store/actions/Index";
import { Link } from 'react-router-dom';
export interface Props {
    item:Artist,
    favorites:Artist[],
    setFav:(artist:Artist)=>void,
    unFav:(artist:Artist)=>void,
    setArtist:(artist:Artist)=>void,
}
const Card: React.FC<Props> = ({item,favorites,setFav,unFav,setArtist}) => {
    return ( 
        <div className="card" style={{width: "19rem"}}>
            <img src={item?.image[1]['#text']} className="card-img-top" alt="..." height="220px"/>
            <div className="card-body">
              <p style={{textAlign:'center'}}><span style={{fontWeight:'bold'}}>{item.name}</span></p>
              <Link to={`/biography/${item.name}`} className="btn btn-primary" onClick={()=>setArtist(item)}>Biography</Link>
              {favorites.filter((x)=>x.name===item.name).length>0?
              <FontAwesome 
              name="" 
              className="fa fa-heart" 
              size="2x"
              spin 
              style={{ marginLeft:'130px',cursor:'pointer' }}
              onClick={()=>unFav(item)}
              />
              :
              <FontAwesome 
              name="" 
              className="fa fa-heart-o" 
              size="2x"
              style={{ marginLeft:'130px',cursor:'pointer' }}
              onClick={()=>setFav(item)}
              />
              } 
            </div>
        </div>
     );
}
const mapStateToProps = (state:any) => {
    return {
        favorites: state.favorite.favorites,
    };
  };
  const mapDispatchToProps = (dispatch:any) => {
    return {
      setFav: (artist:Artist) => dispatch(ActionsCreator.setFav(artist)),
      unFav: (artist:Artist) => dispatch(ActionsCreator.unFav(artist)),
      setArtist: (artist:Artist) => dispatch(ActionsCreator.setArtist(artist)),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Card);
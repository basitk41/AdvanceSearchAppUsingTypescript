import React from 'react';
import { connect } from "react-redux";
import { Artist } from '../utils/Interfaces'; 
import List from './UI/List';
export interface Props {
    favorites:Artist[]
}
const FavoriteArtist: React.FC<Props> = ({favorites}) => {
    return ( 
        <div>
            <h3 style={{textAlign:'center'}}>Favorite Artists</h3>
            {favorites.length>0?
            favorites.map((item)=><List key={item.mbid} item={item}/>)
            :
            <h6 style={{textAlign:'center'}}>No favorite artist yet.</h6>
        }
        </div>
     );
}
const mapStateToProps = (state:any) => {
    return {
        favorites: state.favorite.favorites,
    };
  };
export default connect(mapStateToProps)(FavoriteArtist);
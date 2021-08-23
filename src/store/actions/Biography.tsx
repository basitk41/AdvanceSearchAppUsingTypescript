import * as Actions from "../constants/Index";
import { Artist, BioGraphy } from "../../utils/Interfaces";
import axios from "axios";

export const setArtist = (artist:Artist) => {
  return {
    type: Actions.SETARTIST,
    artist,
  };
};
export const setBio = (bio:BioGraphy) => {
    return {
        type: Actions.SETBIO,
        bio,
      };
};
export const loading = (value:boolean) => {
    return {
      type: Actions.LOADING,
      value,
    };
  };
export const initBio = (inputField:string) => {
    return (dispatch:any) => {
      dispatch(loading(true));
      axios
        .get(
            `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${inputField}&api_key=${process.env.REACT_APP_API_KEY}&format=json`
        )
        .then((response) => {
          dispatch(setBio(response.data.artist.bio));
          // console.log(response.data);
          dispatch(loading(false));
        })
        .catch((error) => {
          console.log("Something went wrong!");
          console.log(error);
          dispatch(loading(false));
        });
    };
  };
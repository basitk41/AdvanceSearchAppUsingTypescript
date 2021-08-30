import * as Actions from "../constants/Index";
import axios from "axios";
import { Artist } from "../../utils/Interfaces";
export const initSearch = () => {
  return {
    type: Actions.INITSEARCH
  }
}
export const emptySearch = () => {
  return {
    type: Actions.EMPTYSEARCH
  }
}
export const setSearchResult = (search:Artist[]) => {
  return {
    type: Actions.SETSEARCH,
    search,
  };
};
export const updateInput = (input:string) => {
  return {
    type: Actions.SETINPUT,
    input,
  };
};
export const loading = (value:boolean) => {
  return {
    type: Actions.LOADING,
    value,
  };
};
export const setSearch = (inputField:string) => {
  return (dispatch:any) => {
    dispatch(emptySearch());
    dispatch(loading(true));
    axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${inputField}&api_key=${process.env.REACT_APP_API_KEY || '66d23e719b268600568a2fe8b59132fc'}&format=json`
      )
      .then((response) => {
        dispatch(setSearchResult(response.data.results.artistmatches.artist));
        // console.log(response.data.results.artistmatches.artist);
        dispatch(loading(false));
      })
      .catch((error) => {
        console.log("Something went wrong!");
        console.log(error);
        dispatch(loading(false));
      });
  };
};

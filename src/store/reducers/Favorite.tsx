import { Artist } from "../../utils/Interfaces";
import * as Actions from "../constants/Index";
const initialState = {
  favorites: [],
};
const Reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case Actions.SETFAV:
      return {
        ...state,
        favorites: [...state.favorites,action.artist],
      };
    case Actions.UNFAV:
      return {
        ...state,
        favorites: [...state.favorites.filter((item:Artist)=>item.name!==action.artist.name)],
      };
    default:
      return state;
  }
};
export default Reducer;

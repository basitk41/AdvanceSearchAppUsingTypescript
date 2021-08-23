import * as Actions from "../constants/Index";
import { Artist } from "../../utils/Interfaces"; 
export const setFav = (artist:Artist) => {
  return {
    type: Actions.SETFAV,
    artist,
  };
};
export const unFav = (artist:Artist) => {
    return {
        type: Actions.UNFAV,
        artist,
      };
};

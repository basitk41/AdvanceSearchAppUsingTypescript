import * as Actions from "../constants/Index";
const initialState = {
  artist: null,
  biography:null,
  loading: true,
};
const Reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case Actions.SETARTIST:
      return {
        ...state,
        artist: action.artist,
      };
    case Actions.SETBIO:
      return {
        ...state,
        biography: action.bio,
      };
    case Actions.LOADING:
      return {
        ...state,
        loading: action.value,
      };
    default:
      return state;
  }
};
export default Reducer;
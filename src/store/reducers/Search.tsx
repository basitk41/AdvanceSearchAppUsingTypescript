import * as Actions from "../constants/Index";
const initialState = {
  search: [],
  input: "",
  loading: false,
};
const Reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case Actions.INITSEARCH:
      return {
        ...state,
        search: [],
        input:'',
        loading:false
      };
    case Actions.EMPTYSEARCH:
      return {
        ...state,
        search: [],
      };
    case Actions.SETSEARCH:
      return {
        ...state,
        search: [...action.search],
      };
    case Actions.SETINPUT:
      return {
        ...state,
        input: action.input,
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
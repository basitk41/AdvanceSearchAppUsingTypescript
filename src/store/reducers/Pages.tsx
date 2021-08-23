import * as Actions from "../constants/Index";
const initialState = {
  pageSize:8,
  currentPage:1,
};
const Reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case Actions.INITPAGES:
      return {
        ...state,
        currentPage:1,
      };
    case Actions.SETCURRENTPAGE:
      return {
        ...state,
        currentPage:action.page
      };
    default:
      return state;
  }
};
export default Reducer;
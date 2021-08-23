import * as Actions from "../constants/Index";
export const setCurrentPage = (page:number) => {
  return {
    type: Actions.SETCURRENTPAGE,
    page,
  };
};
export const initPages = () => {
  return {
    type: Actions.INITPAGES
  }
}
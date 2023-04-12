import { createSelector } from "react-redux";
import { PAGE_DATA } from "../store";

export const getPageDataObj = (state) => state[PAGE_DATA];


export const getPageTitle = (state) => getPageDataObj(state).title;
export const getPageData = (state) => getPageDataObj(state).data;
export const getTotalDataCount = (state) => getPageDataObj(state).totalItems;
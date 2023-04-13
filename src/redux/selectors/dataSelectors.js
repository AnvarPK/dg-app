import { createSelector } from "react-redux";
import { PAGE_DATA } from "../../app-const";

export const getPageDataState = (state) => state[PAGE_DATA];

export const getPageTitle = (state) => getPageDataState(state).title;
export const getPageData = (state) => getPageDataState(state).data;
export const getTotalDataCount = (state) => getPageDataState(state).totalItems;
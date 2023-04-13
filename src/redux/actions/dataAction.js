import { fetchData } from "../../services/api";
import { ADD_DATA, RESET_DATA } from "./actionTypes";

// Action creator to fetch response to store
export const addData = (data, searchInput) => ({
    type: ADD_DATA,
    payload: data,
    searchInput
});

export const fetchDataAction = (nextPage, searchInput) => {
    return (dispatch) => fetchData(nextPage).then((response) => {
        dispatch(addData(response, searchInput))
    })
}

export const resetData = () => ({
    type: RESET_DATA
})
import { fetchData } from "../../services/api";
import { ADD_DATA } from "./actionTypes";

// Action creator to fetch response to store
export const addData = (data) => ({
    type: ADD_DATA,
    payload: data,
});

export const fetchDataAction = (nextPage) => {
    return (dispatch) => fetchData(nextPage).then((response) => {
        dispatch(addData(response))
    })
}
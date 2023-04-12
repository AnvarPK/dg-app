import { ADD_DATA } from "../actions/actionTypes";
import initialData from "./initialData"

// page related data
const dataReducer = (state = initialData.pageData, action) => {
    switch (action.type) {
        case ADD_DATA:
            //  destructuring falues from fetch response
            const { page: { title, 'content-items': { content }, 'total-content-items': totalItems } } = action.payload;
            return {
                ...state,
                data: [...state.data, ...content],
                title,
                totalItems,
            }
        default:
            return state
    }
}

export default dataReducer;
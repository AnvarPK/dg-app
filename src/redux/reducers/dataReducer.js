import { ADD_DATA, RESET_DATA } from "../actions/actionTypes";
import initialData from "./initialData"

// page related data
const dataReducer = (state = initialData.pageData, action) => {
    switch (action.type) {
        case ADD_DATA:
            const { payload, searchInput } = action;
            //  destructuring falues from fetch response
            const { page: { title, 'content-items': { content }, 'total-content-items': totalItems } } = payload;
            console.log({content})
            const filteredContent = searchInput ? content.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase())) : content;
            return {
                ...state,
                data: [...state.data, ...filteredContent],
                title,
                totalItems,
            }
        case RESET_DATA:
            return {
                ...state,
                ...initialData.pageData,
            }
        default:
            return state
    }
}

export default dataReducer;
import {
    FETCH_BREWERY_DATA_START,
    FETCH_BREWERY_DATA_SUCCESS,
} from '../actions'

const initialState = {
    brewery: [],
    isLoading: false, 
    error: ''
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BREWERY_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
        };
        case FETCH_BREWERY_DATA_SUCCESS: 
            return {
                ...state,
                isLoading:false,
                brewery: action.payload,
                error: ''
            }
        default:
            return state;
    }
}
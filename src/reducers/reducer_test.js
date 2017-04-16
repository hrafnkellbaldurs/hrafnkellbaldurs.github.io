import actionTypes from '../actions/actionTypes';

export default function(state = [], action) {
    
    switch(action.type) {
        
        case actionTypes.TEST_ACTION:
            return [ action.payload.data, ...state ];

        default:
            return state;
    }
}
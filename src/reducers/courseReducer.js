export default function courseReducer(state = [], action){
    switch (state.type) {
        case 'CREATE_COURSE':
            state.push(action.course);
            return [...state,
                Object.assign({}, action.course)
            ];
            break;
    
        default:
            return state;
            break;
    }
}
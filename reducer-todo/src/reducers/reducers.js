export const initialState = {
    todos: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Work on Redux',
        completed: false,
        id: 3892987590
    }
    ],

};
export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_TODO":
            return {
                todos: [...state.todos]
            }

        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, { item: action.payload, id: Date.now(), completed: false }],
            };
        default:
            return state;
    }
}
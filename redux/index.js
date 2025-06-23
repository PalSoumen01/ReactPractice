import { createStore } from 'redux';

let initialState = {
    post: 0,
    name: "Soumen Pal",
    email: "soumen@gmail.com"
}

const INCREMENT = 'post/increment';
const DECREMENT = 'post/decrement';
const INCREASE_BY = 'post/increaseby';
const DECREASE_BY = 'post/decreaseby';

function reducer(state = initialState, action) {
    // if (action.type === INCREMENT) {
    //     return { ...state, post: state.post + 1 }
    // } else if (action.type === DECREMENT) {
    //     return { ...state, post: state.post - 1 }
    // } else if (action.type === INCREASE_BY) {
    //     return { ...state, post: state.post + action.payload }
    // } else if (action.type === DECREASE_BY) {
    //     return { ...state, post: state.post - action.payload }
    // } else {
    //     return state;
    // }

    switch (action.type) {
        case INCREMENT:
            return { ...state, post: state.post + 1 };
        case DECREMENT:
            return { ...state, post: state.post - 1 };
        case INCREASE_BY:
            return { ...state, post: state.post + action.payload };
        case DECREASE_BY:
            return { ...state, post: state.post - action.payload };
        default:
            return state;
    }

}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.subscribe(() => {
    console.log("State changed:", store.getState());
})

// let reduxState;
// initialState = reducer(initialState, { type: 'post/increment', payload: 1 })
// console.log(initialState)
// initialState = reducer(initialState, { type: 'post/increment', payload: 1 })
// console.log(initialState)
// initialState = reducer(initialState, { type: 'post/increment', payload: 1 })
// console.log(initialState)
// initialState = reducer(initialState, { type: 'post/increment', payload: 1 })
// console.log(initialState)
// initialState = reducer(initialState, { type: 'nothing' })
// console.log(initialState)

store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: INCREASE_BY, payload: 5 });
store.dispatch({ type: DECREASE_BY, payload: 2 });

import { createStore } from "redux";

const INITIAL_STORE = {
    counter: 0
}

const reducer = (store = INITIAL_STORE, action) => {
    let newStore = store;
    if (action.type === "INCREMENT") {
        newStore = { counter: store.counter + 1 };
    }
    else if (action.type === "DECREMENT") {
        newStore = { counter: store.counter - 1 };
    }
    return newStore;
}

const counterStore = createStore(reducer);

export default counterStore;


import { createStore } from "redux";

const INITIAL_STORE = {
    counter: 0,
    privacy: false
}

const reducer = (store = INITIAL_STORE, action) => {
    let newStore = store;
    if (action.type === "INCREMENT") {
        newStore = { ...store, counter: store.counter + 1 };
    }
    else if (action.type === "DECREMENT") {
        newStore = { ...store, counter: store.counter - 1 };
    }
    else if (action.type === "INCREMENT_BY_X") {
        newStore = { ...store, counter: store.counter + Number(action.payload) };
    }
    else if (action.type === "DECREMENT_BY_X") {
        newStore = { ...store, counter: store.counter - Number(action.payload) };
    }
    else if (action.type === "TOGGLE_PRIVACY") {
        newStore = { ...store, privacy: !store.privacy }
    }
    return newStore;
}

const counterStore = createStore(reducer);

export default counterStore;


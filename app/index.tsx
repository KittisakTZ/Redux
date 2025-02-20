import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CounterScreen from "./screens/CounterScreens";

export default function App() {
    return (
        <Provider store={store}>
         <CounterScreen />
        </Provider>
    )
}
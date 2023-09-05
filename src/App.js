import "./App.css";
import LayOut from "./components/router/Router";
import { apiSlice } from "./api/apiSlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <ApiProvider api={apiSlice}>
      <Provider store={store}>
        <LayOut />
      </Provider>
    </ApiProvider>
  );
}

export default App;

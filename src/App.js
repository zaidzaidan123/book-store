import "./App.css";
import LayOut from "./components/router/Router";
import { apiSlice } from "./api/apiSlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

function App() {
  return (
    <ApiProvider api={apiSlice}>
      <LayOut />
    </ApiProvider>
  );
}

export default App;

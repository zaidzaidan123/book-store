import "./App.css";
import LayOut from "./components/router/Router";
import { DarkModeProvider } from "./context";
import { apiSlice } from "./api/apiSlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

function App() {
  return (
    <DarkModeProvider>
      <ApiProvider api={apiSlice}>
        <LayOut />
      </ApiProvider>
    </DarkModeProvider>
  );
}

export default App;

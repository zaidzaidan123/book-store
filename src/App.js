import "./App.css";
import LayOut from "./components/router/Router";
import { DarkModeProvider } from "./context";

function App() {
  return (
    <DarkModeProvider>
      <LayOut />
    </DarkModeProvider>
  );
}

export default App;

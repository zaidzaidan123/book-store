import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { MainContent } from "./components/mainContent/MainContent";
import WelcomeWebsite from "./components/welcomeWebsite/WelcomeWebsite";

function App() {
  return (
    <>
      <Header />
      <WelcomeWebsite />
      <MainContent />
      <Footer/>
    </>
  );
}

export default App;

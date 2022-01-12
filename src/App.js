import Cards from "./components/cards/Cards";
import store from './redux/store'
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import NavbarP from "./components/navbarP/navbarP";
import Home from "./components/Pages/Home";
import Questing from "./components/Pages/Questing";
import Skilling from "./components/Pages/Skilling";

import {Provider } from "react-redux"

function App() {

  return (
    <Provider store={store}>
      <>
        <Skilling/>
      </>
    </Provider>

  );
}

export default App;

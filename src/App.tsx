import React from "react";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes/Routes";

function App() {
  return (
    <Provider store={appStore}>
      <Routes />
    </Provider>
  );
}

export default App;

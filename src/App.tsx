import React from "react";
import Auth from "./pages/Auth";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Provider store={appStore}>
      <Toaster />
      <Header />
      <Auth/>
      <Footer />
    </Provider>
  );
}

export default App;

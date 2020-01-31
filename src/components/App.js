import React from "react";
import Routes from "./routes";
import "semantic-ui-css/semantic.min.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./app.scss";

const App = () => {
  return (
    <div className="App-main">
      <Header />
      <div className="App-content">
        <Routes />
      </div>
      <div className='App-footer'>
        <Footer />
      </div>
    </div>
  );
};

export default App;

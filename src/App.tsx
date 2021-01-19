import React from 'react';
import './App.css';
import {BlogDetail} from "./components/BlogDetail/BlogDetail";
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {css, jsx} from "@emotion/react";

const App = () => {


  return (
    <div className="App">
      <Header>

      </Header>
      <Content />
      <Footer>

      </Footer>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { useStateValue } from "./StateProvider";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widget from "./Widget";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            {/* Sidebar */}
            <Sidebar />
            {/* <Feed /> */}
            <Feed />
            {/* Widgets */}
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

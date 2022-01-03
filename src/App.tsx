import React from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="mt-5">
        <div>
          <h2>Schedule One</h2>
          <h5>Schedule one description</h5>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

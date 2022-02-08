import { Component } from "react";
import Header from "./components/header";
import Modal from "./components/modal";
import Navigation from "./navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Modal />
      </div>
    );
  }
}

export default App;

import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Product from "./pages/product";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
      </Switch>
    </div>
  );
}

export default App;

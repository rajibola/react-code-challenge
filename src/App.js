import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Modal from "./components/modal";
import CartPage from "./pages/cart-page";
import CollectionPage from "./pages/collection";
import Details from "./pages/details";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/collection/all" />}
        />
        <Route
          exact
          path="/collection/:collectionId"
          component={CollectionPage}
        />
        <Route
          path="/collection/:collectionId/:productId"
          component={Details}
        />
        <Route exact path="/cart" component={CartPage} />
      </Switch>
      <Modal />
    </div>
  );
}

export default App;

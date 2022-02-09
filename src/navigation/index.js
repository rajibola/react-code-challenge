import { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Error404 from "../components/404";
import CartPage from "../pages/cart-page";
import CollectionPage from "../pages/collection";
import Details from "../pages/details";

export default class Navigation extends Component {
  render() {
    return (
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

        <Route component={Error404} />
      </Switch>
    );
  }
}

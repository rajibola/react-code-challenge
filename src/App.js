import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import CollectionPage from "./pages/collection";
import Details from "./pages/details";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/all" />} />
        <Route exact path="/:collectionId" component={CollectionPage} />
        <Route path="/:collectionId/:productId" component={Details} />
      </Switch>
    </div>
  );
}

export default App;

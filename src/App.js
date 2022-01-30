import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import CollectionPage from "./pages/collection";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/all" />} />
        <Route path="/:collectionId" component={CollectionPage} />
      </Switch>
    </div>
  );
}

export default App;

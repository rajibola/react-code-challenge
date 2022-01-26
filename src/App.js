import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import CollectionPage from "./pages/collection";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:collectionId" component={CollectionPage} />
      </Switch>
    </div>
  );
}

export default App;

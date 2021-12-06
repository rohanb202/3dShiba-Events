import { Route, Switch } from "react-router-dom";
import Gal from "./EventGallay/Gal";
import Max from "./max";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Max />
        </Route>
        <Route path="/Home" exact>
          <Max />
        </Route>
        <Route path="/Events">
          <Gal />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

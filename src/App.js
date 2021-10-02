import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Puzzle from './Puzzle';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/puzzle/:id" component={Puzzle} />
    </Switch>
  );
}

export default App;

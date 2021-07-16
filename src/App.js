import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cart from './cart';

function App() {
  return (
    <>
      <Router>
        <div className="bg-dark">
        {/* navbar */}
        <nav class="navbar navbar-light bg-secondary">
          <a class="navbar-brand text-light">
            <img src="https://i.pinimg.com/originals/23/1c/4d/231c4dfc6667cb79907c06d8615daeaa.jpg"  width="30" height="30" class="d-inline-block align-top" alt="" />
            Makeup
          </a>
        </nav>
        {/* end of navbar */}
        <div className="container">
          <Switch>
            <Route path="/" component={Cart} exact />
          </Switch>
        </div>
        </div>
      </Router>
    </>
  );
}

export default App;
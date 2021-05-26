import "../src/style/App.scss";
import User from "./components/User";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Route exact path="/" component={User} />
        </Router>
      </div>
    </>
  );
}

export default App;

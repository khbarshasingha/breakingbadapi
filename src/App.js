import logo from "./logo.svg";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomeScreen } from "./Screens/HomeScreen";
import { EpisodeScreen } from "./Screens/EpisodeScreen";
import { Header } from "./Components/Header";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import { CharacterScreen } from "./Screens/CharacterScreen";
import { Login } from "./Components/Login";
import { SignUp } from "./Components/Signup";
function App() {
  return (
    <Router>
      <Header />
      <main className="text-style">
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/characters" exact component={CharacterScreen} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/episodes" exact component={EpisodeScreen} />
        </Switch>
      </main>
      <footer>
        {" "}
        <Footer />
      </footer>
    </Router>
  );
}

export default App;

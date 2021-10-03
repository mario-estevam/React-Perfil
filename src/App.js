import NavBar from "./components/Navbar/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "pages/Inicio";
import Curiosidades from "pages/Curiosidades";
import "./App.css";
import Informacoes from "pages/Informações";
import Contato from "pages/Contato";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route path="/curiosidades" component={Curiosidades} />
            <Route path="/informacoes" component={Informacoes} />
            <Route path="/contato" component={Contato} />
          </Switch>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
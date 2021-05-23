import { ChakraProvider } from "@chakra-ui/react";
import Header from "components/Header";
import { TeamProvider } from "context/TeamPokemonContext";
import Home from "pages/Home";
import Team from "pages/Team";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Routes(): JSX.Element {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <TeamProvider>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/team" component={Team} exact />
          </Switch>
        </TeamProvider>
      </Router>
    </ChakraProvider>
  );
}

export default Routes;

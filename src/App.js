import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import store from "./redux/store";
import RecipesPage from "./containers/RecipesPage";
import AddRecipePage from "./containers/AddRecipePage";

const useStyles = makeStyles((_) => ({
  root: {
    flexGrow: 1,
  }
}));

function App() {
  const classes = useStyles();

  return (
    <ReduxProvider store={store}>
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>

              {/* <Button color="inherit" component={Link} to={"/recipes/ingredient"}>
                Search Recipe By Ingredient
              </Button>
              <Button color="inherit" component={Link} to={"/recipes/:id"}>
                Search Recipes by Name
              </Button> */}
              <Button color="inherit" component={Link} to={"/recipes"}>
                All Saved Recipes
              </Button>
              <Button color="inherit" component={Link} to={"/add-recipe"}>
                Add a New Recipe
              </Button>



            </Toolbar>
          </AppBar>

          <Switch>

            <Route path="/recipes">
              <RecipesPage />
            </Route>

            <Route path="/add-recipe">
              <AddRecipePage />
            </Route>

          </Switch>
        </div>
      </Router>
    </ReduxProvider>
  );
}

export default App;
import { connect } from "react-redux";
import AddRecipePage from "../components/AddRecipePage";
import { addRecipe } from "../redux/actions/recipeActions";

const dispatchStateToProps = {
  //[key]: value
  //  addRecipe: addRecipe,
  addRecipe,
};

//the store has to state whatever it gets saved (ex. recipes: []  that is in my state.js) in order to allow the dumb component to know about recipes:[] it has to expose the state
//the function connect comes from import { connect } from "react-redux";
//the connect requires two parameters: first param is what you want to expose to your dumb component into your store (in my case recipes:[]). Second params is what allows you to make modifications to the store through dispatching actions


//dispath --> action --> reducer --> new State (aka. new values inside,in my case, recipes:[] )

//I am creating an object called dispatchSateToProps, that file contains all the potential actions I can perform into the store

export default connect(null, dispatchStateToProps)(AddRecipePage);
import { connect } from "react-redux";
import RecipesPage from "../components/RecipesPage";
import { loadRecipes, deleteRecipe } from "../redux/actions/recipeActions";

function mapStateToProps(state) {
  return {
    recipes: state.recipes, //the array
  };
}

const dispatchStateToProps = {
  loadRecipes, 
  deleteRecipe, //function
};

export default connect(mapStateToProps, dispatchStateToProps)(RecipesPage);

// const props = connect(mapStateToProps, dispatchStateToProps);
// the result of connrect will be:

// {recipes, loadRecipes}
// export default RecipesPage(props)

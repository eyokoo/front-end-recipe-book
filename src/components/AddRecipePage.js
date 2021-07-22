import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import AddIngredients from "./AddIngredients";


const useStyles = makeStyles({
  paper: {
    margin: "auto",
    padding: 50,
    width: 650,
  },
  title: {
    marginBottom: 8,
  },
  textField: {
    display: "block",
    marginBottom: 20,
  },
  button: {
    marginRight: 20,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

function AddRecipePage(props) {
  const classes = useStyles();
  let history = useHistory(); //defined to push a new entry onto the history stack
  const [recipe, setRecipe] = useState({ recipeName: "", instructionsBox: "", ingredients: [{ measurement: "", ingredient: "", addtlInfo: "" }] })

  function handleInputChanges(event) {
    const { name, value } = event.target;

    setRecipe((previousRecipe) => ({
      ...previousRecipe,
      [name]: value,
    }));
  }

  function handleFormSubmit(event) { //when handleFormSubmit is clicked it will add the recipe to the AddRecipePage function
    event.preventDefault(); //prevent from page to reload

    props.addRecipe(recipe) //.addRecipe is a black box function
      .then(() => history.push("/recipes"));


    // .then((results) => {
    // console.log(results.insertId)}

    //add the recipe id to the ingredients
    //then call props.addIngredients()

    //addRecipe is a function in actions/recipeActions which runs the POST API command and returns if postRecipeSuccess was a success or caused an error. This line of code is saying, run the POST API command to add the new recipe and once thats done then push it into history stack in "/recipes"

  }

  function moreIngredients() {
    setRecipe({ ingredients: [...recipe.ingredients, { measurement: "", ingredient: "", addtlInfo: "" }] })
  }

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography className={classes.recipeName} variant="h5">
        Add a new recipe
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <TextField
          required
          className={classes.textField}
          fullWidth
          name="recipeName"
          label="Recipe Name"
          variant="outlined"
          value={recipe.recipeName}
          onChange={handleInputChanges}
        />

        {/* each ingreatiant get added with the index so that you know what ingredient we are talking about */}
        {
          recipe.ingredients.map((i, index) => {
            return (
              <AddIngredients index={index} />

            )
          })
        }

        <button onClick={moreIngredients}>Add another ingredient</button>

        <TextField
          className={classes.textField}
          fullWidth
          name="instructionsBox"
          label="Instructions"
          variant="outlined"
          value={recipe.instructionsBox}
          onChange={handleInputChanges}
        />
        <div>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            type="submit"
          >
            Save
          </Button>

          <Button variant="outlined" component={Link} to={"/recipes"}>
            Cancel
          </Button>

        </div>
      </form>
    </Paper>
  );
}

export default AddRecipePage;

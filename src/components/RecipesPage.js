import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import FormControl from '@material-ui/core/FormControl';
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  paper: {
    margin: "auto",
    width: 650,
  },
});

const RecipesPage = (props) => {
  // props will contain {recipes, loadRecipes}
  const classes = useStyles();

  //ComponentDidMount() { }
  useEffect(() => {
    if (props.recipes.length === 0) {
      props.loadRecipes(); //this function is like a black box to the dumb component
    }
  }, []); //[] means on load of the page



  const handleDeleteRecipe = (recipeId) => {
    props.deleteRecipe(recipeId)
  }

  return (
    <TableContainer className={classes.paper} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.recipes.map((recipe) => (
            <TableRow key={recipe.id}>
              <TableCell>{recipe.id}</TableCell>
              <TableCell>{recipe.recipe_name}</TableCell>
              <TableCell>
                <IconButton
                className ={classes.deleteButton}
                color="primary"
                aria-label="delete book"
                component="span"
                onClick={() => handleDeleteRecipe(recipe.id)} //by adding another set of paramenters it will not automatically run the onclick event unless it is called
                /> 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>


      </Table>
    </TableContainer>
  );
}

export default RecipesPage;

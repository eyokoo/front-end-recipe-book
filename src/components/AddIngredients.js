import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";

function AddIngredients(props) {
  return (
    <Grid container spacing={2}>
    <Grid item xs={4}>
      <TextField
       
        fullWidth
        name="measurement"
        label="Measurement"
        variant="outlined"
       
      />
    </Grid>

    <Grid item xs={4}>
      <TextField
       
        fullWidth
        name="ingredient"
        label="Ingredient"
        variant="outlined"
       
      />
    </Grid>

    <Grid item xs={4}>
      <TextField
       
        fullWidth
        name="addtlInfo"
        label="Additional Info"
        variant="outlined"
        
      />
    </Grid>
    {/* add button to delete based on the index */}
  </Grid>
  );
}

export default AddIngredients;
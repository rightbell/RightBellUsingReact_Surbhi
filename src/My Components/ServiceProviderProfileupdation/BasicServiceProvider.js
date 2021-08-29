import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(8),
      fontSize:'10px'
     
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      width:'30%',
    },
}));

function Basic() {
    const classes = useStyles();

    return (
        <div>
     
    <Container className="Main-content" >
    <div className={classes.root}>
      <Grid container spacing={3}>
        
       
        <Grid item xs={12} >
          <Paper className={classes.paper}>
          <form className={classes.form} noValidate>
          <Grid container spacing={4}>
            <Grid item xs={12} >
            <h1 className="heading" style={{margin:'auto'}}>Basic Details:</h1>
            </Grid>
            <Grid item xs={10} >
              <TextField
                autoComplete="Name"
                name="Employer's Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Employer's Name"
                className="Text-field"
                />
          </Grid>
            
            <Grid item xs={10}  >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Address"
                label="Company's full Address"
                name="Address"
                autoComplete="Address"
               
               />
               </Grid>
              <Grid item xs={10} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Industry Type"
                label="Industry Type"
                name="Industry Type"
                autoComplete="Industry Type"
              />
            </Grid>
            <Grid item xs={10} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Company's Strength"
                label="Company's Strength"
                name="Company's Strength"
                autoComplete="Company's Strength"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Description"
                label="Describe about your Company in brief"
                name="Description"
                autoComplete="Description"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          
          >
            Edit
            <EditIcon/>
          </Button>
            </Grid>
          </Grid>
        </form>
      
      
    
          </Paper>
        </Grid>
        
      </Grid>
    </div>
    </Container>
         
        </div>
    )
}

export default Basic;

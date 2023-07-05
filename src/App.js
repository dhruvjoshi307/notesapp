import './App.css';
import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import NotesList from './NotesList';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <h1>Notes List</h1>
      <NotesList />
    </Container>
  );
};

export default App;


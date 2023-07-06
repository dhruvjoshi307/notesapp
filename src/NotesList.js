import React, { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'; // Import makeStyles from @material-ui/styles
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  card: {
    transition: 'transform 0.3s',
    backgroundColor: '#6b9ae0',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
      
    },
  },
}));
const Capitalize = (word) => {
  let lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

const NotesList = () => {
  const classes = useStyles(); // Use useStyles hook to access the classes variable
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(
        'https://api.gyanibooks.com/library/get_dummy_notes'
      );
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  return (
    <Grid container spacing={2}>
      {notes.map((note) => (
        <Grid item xs={12} sm={6} md={4} key={note.id}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6">{ Capitalize(note.title) }</Typography>
              <Typography style={{color:"white"}}>{note.category}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default NotesList;

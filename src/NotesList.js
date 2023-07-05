
import React, { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import axios from 'axios';

const NotesList = () => {
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
          <Card>
            <CardContent>
              <Typography variant="h6">{note.title}</Typography>
              <Typography>{note.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default NotesList;
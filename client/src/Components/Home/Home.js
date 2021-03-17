import React, { useEffect, useState }from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid } from '@material-ui/core';

import { getPosts } from '../../actions/postActions'
import useStyles from './stylesHome'
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {

  // Home.js the common parent to Posts and Form. At the start, id = null
  // These are passed to components from here and accepted in components as props
  const [currentId, setCurrentId] = useState(null);

  // Styling w MUI and styles file. Connected to component via "classname"
  const classes = useStyles(); 

  // Allows dispatch of redux actions
  const dispatch = useDispatch(); 

  // useDispatch hook is used inside useEffect hook
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>          
        <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form className={classes.form} currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
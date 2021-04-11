import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid } from '@material-ui/core';

import { getPosts } from '../../actions/postActions'
import useStyles from './stylesHome'
import Posts from './Posts/Posts';
import Form from './Form/Form';

const Home = () => {

  // Home.js the common parent to Posts and Form. 
  // These are passed to components from here and accepted in components as props
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles(); 
  const dispatch = useDispatch(); 

  // useDispatch (dispatch redux actions) hook is used inside useEffect hook
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container maxWidth={false}>          
        <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} md={9}>
            <Posts setCurrentId={setCurrentId}/>
          </Grid>
          <Grid item xs={12} md={3}>
            <Form className={classes.form} currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
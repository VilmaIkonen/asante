import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './stylesForm';
import { createPost, updatePost } from '../../actions/postActions';

const postInitialState = {recipient: '', message: '', selectedFile: ''};

const Form = ({currentId, setCurrentId}) => {
  
  const [ postData, setPostData ] = useState(postInitialState);
  const classes = useStyles();
  const dispatch = useDispatch();
  // Fetching data for the update of a post and Populate the values of the Form
  const post = useSelector((state) => currentId ? state.posts.find((message) => message._id === currentId) : null);
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if(post) setPostData(post);
  }, [post])
   

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(currentId === 0) {
      dispatch(createPost({...postData, name: user?.result?.name})); // info to backend which name to use (based on login)
      clear();
    }
    else {
      dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
    }   
    clear(); 
  }

  // Clear the form after editing and posting
  const clear = () => {
    setCurrentId(0);
    setPostData({
      recipient: '',
      message: '',
      selectedFile: '' 
    })
  }

  // shown to user if not logged in:
  if(!user?.result?.name)  {
    return (
      <Paper className={classes.paper}>
        <Typography variant='h6' align='center'>
          If you want to create or like a post, please sign in.
        </Typography>
      </Paper>
    )
  }

  return (
    <Paper className={classes.paper} elevation={5}>
    {/* classes.root/classes.form --> Multiple templates w template string to get styling from MUI to both root and form (see styles.css) */}
      <form autoComplete='off' className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> 
        <Typography className={classes.heading} variant='h6'>{currentId ? 'Edit the' : 'Create a'} message</Typography>
        <TextField 
          required
          name='recipient' 
          variant='outlined' 
          label='To' 
          fullWidth 
          value={postData.recipient} 
          onChange={(e) => setPostData({...postData, recipient: e.target.value})} 
        />
        <TextField 
          required
          name='message' 
          variant='outlined' 
          label='Message' 
          fullWidth 
          multiline={true}
          value={postData.message} 
          onChange={(e) => setPostData({...postData, message: e.target.value})} 
        />
        <div className={classes.fileInput}>
          <FileBase 
            type='file'
            multiple={false}
            onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
          />        
        </div>
        <Button 
          className={classes.buttonSubmit} 
          variant='contained'
          size='large'
          type='submit'
          fullWidth>Submit
        </Button>
        <Button 
          className={classes.buttonClear}
          variant='contained' 
          size='large'
          onClick={clear}
          fullWidth>Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Form;
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './stylesForm';
import { createPost, updatePost } from '../../actions/postActions';

const Form = ({currentId, setCurrentId}) => {
  
  const [ postData, setPostData ] = useState({
    creator: '',
    recipient: '',
    message: '',
    selectedFile: ''    
  })

  const classes = useStyles();
  const dispatch = useDispatch(); // allows dipatch of actions

  // Fetching data for the update of a post and Populate the values of the Form
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

  useEffect(() => {
    if(post) setPostData(post);
  }, [post])
   

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(currentId) {
      dispatch(updatePost(currentId, postData));
    }
    else {
      dispatch(createPost(postData));
    }   
    clear(); 
  }

  // Clear the form after editing and posting
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: '',
      recipient: '',
      message: '',
      selectedFile: '' 
    })
  }

  return (
    <Paper className={classes.paper}>
    {/* classes.root/classes.form --> Multiple templates w template string to get styling from MUI to both root and form (see styles.css) */}
      <form autoComplete='off' className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> 
        <Typography className={classes.heading} variant='h6'>{currentId ? 'Edit the' : 'Create a'} message</Typography>
        <TextField 
          required
          name='creator' 
          variant='outlined' 
          label='From' 
          fullWidth 
          value={postData.creator} 
          onChange={(e) => setPostData({...postData, creator: e.target.value})} 
        /> 
          {/* 'spread + creator: Keep other data, change only a specific property of text field' */}       
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
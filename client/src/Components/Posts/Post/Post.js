import React from 'react';
import useStyles from './stylesPost';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment'; // To set timestamp for the post --> .fromNow --> eg. "5 minutes ago"
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/postActions'

const Post = ({post, setCurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card} elevation={5}>
      <CardMedia className={classes.media} image={post.selectedFile} recipient={post.recipient} />
      <div className={classes.overlay}>
        <Typography className={classes.creatorCreatedEdit} variant="h6">From: {post.creator}</Typography>
        <Typography className={classes.creatorCreatedEdit} variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button className={classes.creatorCreatedEdit} style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="default" />
          Edit
        </Button>
      </div>     
      <Typography className={classes.recipient} variant="h4" gutterTop>To: {post.recipient}</Typography>    
      <CardContent>
        <Typography className={classes.message} variant="body1" gutterBottom>{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button className={classes.likeDeleteButton} size="small" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small"/>
          &nbsp;Like&nbsp;{post.likeCount}
        </Button>
        <Button className={classes.likeDeleteButton}  size="small" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small"/>
          &nbsp;Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post;
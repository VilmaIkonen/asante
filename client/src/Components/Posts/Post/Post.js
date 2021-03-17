import React from 'react';
import useStyles from './stylesPost';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment'; // To set timestamp for the post --> .fromNow --> eg. "5 minutes ago"
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/postActions'

const Post = ({post, setCurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  // logic for handling likes:
  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
      ? (
        <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
      ) : (
        <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
      );
    }
    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  return (
    <Card className={classes.card} elevation={5}>
      <CardMedia className={classes.media} image={post.selectedFile} recipient={post.recipient} />
      <div className={classes.overlay}>
        <Typography className={classes.creatorCreatedEdit} variant="h6">From: {post.name}</Typography>
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
        <Button className={classes.likeDeleteButton} size="small" onClick={() => dispatch(likePost(post._id))} disabled={!user?.result}><Likes/></Button>
        <Button className={classes.likeDeleteButton}  size="small" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small"/>
          &nbsp;Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post;
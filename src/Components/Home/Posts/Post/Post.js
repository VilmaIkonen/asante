import React from 'react';
import useStyles from './stylesPost';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment'; // To set timestamp for the post --> .fromNow --> eg. "5 minutes ago"
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../../actions/postActions'

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
      <CardMedia className={classes.media} image={`${post.url}` || post.selectedFile || 'https://source.unsplash.com/bq6Gd7pQznU/640x799'} src='img' recipient={post.recipient} />
      <div className={classes.overlay}>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>

        {/* Enable/dispable edit based on user login */}
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) ? (          
            <Button  style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" />Edit</Button>         
        ) : null } 
      </div>
      <CardContent className={classes.container}>
        <Typography className={classes.recipient} variant="h4">To: {post.recipient}</Typography>  
        <Typography className={classes.message} variant="body1">{post.message}</Typography>       
        <Typography className={classes.creator} variant="h5">BR, {post.name}</Typography>
        <CardActions className={classes.cardActions}>

          {/* Enable/dispable liking based on user login */}
          <Button className={classes.likeDelete} size="small" onClick={() => dispatch(likePost(post._id))} disabled={(!user?.result || user?.result?.googleId === post?.creator || user?.result?._id === post?.creator)}><Likes/></Button>

          {/* Enable/dispable delete based on user login */}
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) ? (
            <Button className={classes.likeDelete} size="small" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small"/> &nbsp;Delete</Button>
          ) : null }
    
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default Post;
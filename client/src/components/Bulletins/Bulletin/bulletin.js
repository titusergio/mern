import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Bulletin = ({ post: bulletin, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={bulletin.picture || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={bulletin.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{bulletin.creator}</Typography>
        
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(bulletin._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{bulletin.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{bulletin.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(bulletin._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Bulletin;
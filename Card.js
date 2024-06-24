import React from 'react';
import { useDispatch } from 'react-redux';
import { removePost } from '../redux/Action/action';
import { Card as MuiCard, CardContent, IconButton, Typography } from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';

const Card = ({ post }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removePost(post.id));
  };

  return (
    <MuiCard>
      <CardContent>
        <IconButton onClick={handleRemove} style={{ float: 'right' }}>
          {/* <CloseIcon color="error" /> */}
        </IconButton>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2">{post.body}</Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;

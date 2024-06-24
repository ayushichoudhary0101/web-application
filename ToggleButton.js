import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setViewMode } from '../redux/Action/action';
import { Button } from '@material-ui/core';

const ToggleButton = () => {
  const dispatch = useDispatch();
  const viewMode = useSelector(state => state.viewMode);

  const handleToggle = () => {
    dispatch(setViewMode(viewMode === 'grid' ? 'list' : 'grid'));
  };

  return (
    <Button onClick={handleToggle}>
      view Toggle
    </Button>
  );
};

export default ToggleButton;

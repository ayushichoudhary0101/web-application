export const SET_POSTS = 'SET_POSTS';
export const REMOVE_POST = 'REMOVE_POST';
export const SET_VIEW_MODE = 'SET_VIEW_MODE';

export const setPosts = (posts) => ({ type: SET_POSTS, posts });
export const removePost = (postId) => ({ type: REMOVE_POST, postId });
export const setViewMode = (viewMode) => ({ type: SET_VIEW_MODE, viewMode });

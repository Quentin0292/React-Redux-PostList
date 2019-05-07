import { combineReducers } from 'redux';
import ReducerPosts from './reducer-posts'
import reducerActivePost from './reducer-active-post'
import {reducer as ReducerForm} from 'redux-form'

const rootReducer = combineReducers({
  posts : ReducerPosts,
  activePost : reducerActivePost,
  form : ReducerForm
});

export default rootReducer;

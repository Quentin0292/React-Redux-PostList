import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import PostList from './containers/PostList'
import PostForm from './containers/PostForm'
import Post from './containers/Post'
import NotFound from './components/NotFound'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={PostList} />
          <Route path="create-post" component={PostForm} />
          <Route path="post/:id" component={Post} />
          <Route path="*" component={NotFound} />
        </Router>
      </div>
    )
  }
}

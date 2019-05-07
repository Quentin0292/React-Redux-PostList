import React from 'react'
import {Link} from 'react-router'

const PostListItem = (props) => {
  const {post} = props

  function deletePost(post){
    props.deletePostCallBack(post)
  }

  return (
    <tr>
      <td><Link to={`post/${post.id}`}>{post.title}</Link></td>
      <td><button className="btn btn-danger" onClick={() => deletePost(post)}>Supprimer</button></td>
    </tr>
  )
}

export default PostListItem

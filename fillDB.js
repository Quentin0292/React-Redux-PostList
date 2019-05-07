var casual = require('casual')

// generate random data
module.exports = () => {
  const data = { posts: [] }
  // Create 1000 users
  for (let i = 0; i < 25; i++ ) {
    data.posts.push({ id: i, title: casual.title, content: casual.sentences(n=50), author: casual.name })
  }
  return data
}

// il faut ensuite dans la console lancé cette commande
// json-server --watch fillDB.js
// cela va nous créer nos 25 posts dans notre fausse API

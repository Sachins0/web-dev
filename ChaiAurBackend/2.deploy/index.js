require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData={
  "login": "Sachins0",
  "id": 149316445,
  "node_id": "U_kgDOCOZjXQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/149316445?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Sachins0",
  "html_url": "https://github.com/Sachins0",
  "followers_url": "https://api.github.com/users/Sachins0/followers",
  "following_url": "https://api.github.com/users/Sachins0/following{/other_user}",
  "gists_url": "https://api.github.com/users/Sachins0/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Sachins0/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Sachins0/subscriptions",
  "organizations_url": "https://api.github.com/users/Sachins0/orgs",
  "repos_url": "https://api.github.com/users/Sachins0/repos",
  "events_url": "https://api.github.com/users/Sachins0/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Sachins0/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-10-29T15:05:11Z",
  "updated_at": "2024-02-21T13:39:06Z"
  } 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('sachindotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai Aur Code</h2>')
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


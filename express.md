# Express

```javascript
const express = require('express')

const app =express();

app.get('/',(req,res) => {
  res.sendFile(__dirname+'./views/index.html');
  // or 
  res.sendFile('./views/index.html',{root: __dirname});
})

//redirect
app.get('/about',(req,res) => {
  res.sendFile(__dirname+'./views/about.html');
  // or 
  res.sendFile('./views/about.html',{root: __dirname});
})

app.get('/about-me',(req,res) => {
  res.redirect('/about');
})

//note that the href in html file need to change based on the get request

//404 page: goes to this page once there are no corresponding page
app.use((req,res) => {
  res.status('404').sendFile(__dirname + './views/404.html');
})

app.listen('3000',() => {
  console.log('app listening on port 3000');
})

```

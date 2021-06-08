# Ejs
```javascript
const express = require('express');

const app = express();

//register view engine
app.set('view engine','ejs');
//put ejs files in views default
//if want to change the default use the following code
app.set('views','folder-name');

//when using view engines we use render in res
app.get('/',(req,res) => {
  res.render('index');
})
```

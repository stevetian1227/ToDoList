# Request and Response 

```javascript
const http = require('http');

const server = http.createServer((req,res) => {
  console.log(req.url,req.method);
  
  //send header content type
  
  res.setHeader('Content-type','text/plain');
  
  res.write('text you want to send');
  res.end();
});

server.listen(3000,'localhost',() =>{
  console.log('App listening on port 3000');
})
```
## Send Html file
```javascript
const http = require('http');

const server = http.createServer((req,res) => {
  console.log(req.url,req.method);
  
  //send header content type
  
  res.setHeader('Content-type','text/plain');
  
  //send an Html file
  
  fs.readFile('path of the html file',(err,data) => {
    if(err){
      console.log(err);
    }else{
      res.write(data);
      res.end();
    }
  })
});

server.listen(3000,'localhost',() =>{
  console.log('App listening on port 3000');
})
```

## If only the html to send
```javascript
const http = require('http');

const server = http.createServer((req,res) => {
  console.log(req.url,req.method);
  
  //send header content type
  
  res.setHeader('Content-type','text/plain');
  
  //send an Html file
  
  fs.readFile('path of the html file',(err,data) => {
    if(err){
      console.log(err);
    }else{
      res.end(data);
    }
  })
});

server.listen(3000,'localhost',() =>{
  console.log('App listening on port 3000');
})
```

## Different pages
```javascript
const http = require('http');

const server = http.createServer((req,res) => {
  console.log(req.url,req.method);
  
  path="./views/";
  
  switch(req.url){
    case('/'):
      path+='index.html';
      break;
    case('/about'):
      path+='about.html');
      break;
    default:
      path+='404.html');
      break;
  }
  
  //send header content type
  
  res.setHeader('Content-type','text/plain');
  
  //send an Html file
  
  fs.readFile(path,(err,data) => {
    if(err){
      console.log(err);
    }else{
      res.end(data);
    }
  })
});

server.listen(3000,'localhost',() =>{
  console.log('App listening on port 3000');
})
```


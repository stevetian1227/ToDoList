# fs module in node

## read files
```javascript
fs.readFile('location of file',() => {
  if(err){
    console.log(err);
  }
  console.log(data.toString());
});
```

## write files
```javascript
fs.writeFile('path of the file', 'text to be written', () => {
  console.log('Finish written')
})
```

## directories
```javascript
fs.mkdir('location of the directory',(err) => {
  if(err){
    console.log(err);
  }
  console.log('folder created')
});
```
> if already exist then err occur

```javascript
if (!fs.existsSync('location of the path')
```
> use this funciton to check if exists

```javascript
fs.rmdir('location of the directory', (err) => {
  if(err){
    console.log(err)
  }
  console.log('removed');
});
```
> use this to remove dir

## deleting files
```javascript
if(fs.existsSync('location of file'){
  fs.unlink('location of file',() => {
    if(err){
      console.log(err);
    }
    console.log('file deleted');
  })
}
```

 note that all these functions take time to trigger which means the functions after them may run before the callback funciton in them


## Streams

### read data before fully load

```javascript
const readStream = fs.createReadStream('location of file');

readStream.on('data',(chunk) =>{
  console.log('--------');
  console.log(chunk);
}
```
> Here data is an event which means everytime user receive data from the file, the callback function runs. And chunk here is a buffer.

```javascript
const readStream = fs.createReadStream('location of file', {encoding: 'utf8'});

readStream.on('data',(chunk) =>{
  console.log('--------');
  console.log(chunk);
}
```
> Or we can add encoding to change the buffer into readable strings

### writeStream
```javascript
const readStream = fs.createReadStream('location of file', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('location of the file');

readStream.on('data',(chunk) =>{
  console.log('----New Chunk----');
  console.log(chunk);
  writeStream.write('what want to be write');
}
```
> If file not exist then will be created.

### Passing readable string to writable string using pipe
```javascript
const readStream = fs.createReadStream('location of file', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('location of the file');

readStream.pipe(writeStream);
```

> This works the same as the previous one which means when read the stream then write stream to a file.




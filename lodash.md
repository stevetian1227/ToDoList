## Lodash

```javascript
//npm install lodash

const _=require('lodash');

//run the function once

const greet = _.once(() => {
  console.log('hello');
})

greet();
greet();

//note that it will only run once
```
## One way to install all the dependencies in package.json is to simply use npm install

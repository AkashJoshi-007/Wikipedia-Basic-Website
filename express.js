const express = require('express');
//const { request } = require('http');
const app =express();

app.get('/',(request,response)=>{
  console.log(request);
  response.send('Hello World!');

});

app.listen(3000);

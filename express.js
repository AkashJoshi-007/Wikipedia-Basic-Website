const express = require('express');
//const { request } = require('http');
const app =express();

app.get('/',(request,response)=>{
  response.send('Hello World!');

});

app.listen(3000);

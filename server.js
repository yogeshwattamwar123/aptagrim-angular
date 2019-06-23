const express= require('express'),
    path = require('path');

const app =express();

app.use(express.static('./dist/aptagrim-site'));

app.get('/*', (req,res)=>{

res.sendFile(path.join(_dirname,'/dist/aptagrim-site/index.html'));

});

app.listen(preocess.env.PORT || 8080, ()=>{
console.log('server started');

})
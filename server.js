const express= require('express'),
    path = require('path');

const app =express();

app.use(express.static('./dist/aptagrim-angular'));

app.get('/*', (req,res)=>{

res.sendFile(path.join(_dirname,'/dist/aptagrim-angular/index.html'));

});

app.listen(preocess.env.PORT || 8080, ()=>{
xonsole.log('server started');

})
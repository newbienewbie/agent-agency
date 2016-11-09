const domain=require('../lib/domain/domain');


domain.sequelize.sync({force:true})
    .then(
        ()=>{ console.log("installed"); },
        (reason)=>{ console.log(`rejected：${reason}`); }
    )
    .catch((err)=>{
        console.log(err);
    });
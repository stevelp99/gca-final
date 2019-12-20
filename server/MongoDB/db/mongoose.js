const mongoose =require("mongoose");
const {databasePassword,databaseUsername} =require("../config");
mongoose.set('useCreateIndex', true);

mongoose.Promise= global.Promise;
//Database Connection
mongoose.connect(`mongodb+srv://${databaseUsername}:${databasePassword}@authrn-uyopk.mongodb.net/test?retryWrites=true`,
    { useNewUrlParser: true, useUnifiedTopology: true},
    ()=>console.log('connected to db')
);


module.exports=mongoose;

    
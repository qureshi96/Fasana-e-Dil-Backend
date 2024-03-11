const mongoose = require('mongoose')
const commentSchema =mongoose.Schema({
    
    postid:String,
    text:String,
    username:String,
    photoUrl:String,
    email:String,
    time:Date
    }
    ,{
        timestamps:false
    }
)

const comment=mongoose.model('comment',commentSchema);
module.exports=comment;
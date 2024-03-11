const mongoose = require('mongoose')
const blogSchema =mongoose.Schema({
    
    author: String,    
    isUrdu:{
        type:Boolean,
        default:false
    },
    Created_date:String,
    id:String,
    title:String,
    subtitle:String,
    content:{
        type:[String]
    }
    },{
        timestamps:false
    }
)

const Blog=mongoose.model('Blog',blogSchema);
module.exports=Blog;
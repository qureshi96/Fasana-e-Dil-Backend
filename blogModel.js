const mongoose = require('mongoose')
const blogSchema =mongoose.Schema({
    
    author: String,    
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
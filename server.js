const Blog=require('./blogModel');
const comment=require('./commentModel')
const express= require('express');
var ObjectID=require('mongodb').ObjectId
const mongoose=require('mongoose');
var cors=require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const PORT=process.env.PORT ||10000;
app.listen(PORT, ()=>{
    console.log('node running on port 3000')
})


//database connection
mongoose.connect('mongodb+srv://usmanahmed:laeKr5lwa22Tk3yr@fasanaedil.bjzmysh.mongodb.net/fasanaedil?retryWrites=true&w=majority&appName=fasanaedil')
const con=mongoose.connection;
con.on('open',function(){
    console.log('connected');
})

// api functions
//get list of all blogs
app.get('/getblogs',async (request,response)=>{
    try {
        const blogs = await Blog.find({});
        response.json(blogs);
        console.log("success");
    } catch (error) {
        response.send(error)
    }
})
 //insert a blog 
app.post('/postblog', async(req,res)=>{
    const blog= new Blog({
        Created_date:req.body.Created_date,
        author:req.body.author,
        content:req.body.content,
        id:req.body.id,
        subtitle:req.body.subtitle,
        title:req.body.title,
        isUrdu:req.body.isUrdu

    })

    try {
    const b1= await blog.save()
    res.json(b1)

    } catch (error) {
        res.send(error);
    }
})

//insert a comment
app.post('/postcomment', async(req,res)=>{
    const Comment= new comment({
        postid:req.body.postid,
        text:req.body.text,
        username:req.body.username,
        photoUrl:req.body.photoUrl,
        email:req.body.email,
        time:req.body.time

    })

    try {
    const c1= await Comment.save()
    res.json(c1)

    } catch (error) {
        res.send(error);
    }
})
//get comments for a post
app.get('/getcomments/:id',async (request,response)=>{
    try {
        const Comment = await comment.find({postid:request.params.id});
        response.json(Comment);
        
    } catch (error) {
        response.send(error)
    }
})

//delete a comment
app.get('/deletecomment/:id', async(request,response)=>{
    try{
        console.log(request.params.id);
       const deleted= await comment.findByIdAndDelete(request.params.id);

        response.json(deleted);
     }
    catch(error){
        response.send(error)
    }
})

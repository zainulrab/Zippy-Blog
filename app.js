const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./Models/blog");
require('dotenv').config();

const app = express();

const dbUri = process.env.MONGO_URI;
const port = process.env.PORT || 3000; 
mongoose.connect(dbUri)
  .then((result) => app.listen(port))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));
  

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended : true}));
app.use(morgan('dev'));

//set ejs engine
app.set("view engine","ejs");

//redirect to blogs
app.get("/",(req,res)=>{

    res.redirect("/blogs")
});

//all blogs
app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt : -1})
    .then((result)=>{
        res.render('index',{title: 'Blogs', blogs : result});

    })
    .catch((err) => {
        console.log(err);
    })

});

app.post('/blogs',(req,res)=>{
    const blog = new Blog(req.body);
    //console.log(blog)
    blog.save()
    .then(()=>{
        res.redirect('/blogs');
    })
    .catch((error)=>{
        console.log(error);
    })
})

app.get('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('details',{title: 'Blog details' , blog : result});
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.delete('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({ redirect :'/blogs'});
    })
    .catch((error)=>{
        console.log(error);
    })
})


//about ejs
app.get("/about",(req,res)=>{
    res.render("about",{title : 'About'});
});

//create ejs
app.get("/create/blog",(req,res)=>{
    res.render("create",{title:'Create-Blog'});
});

//error 404 ejs
app.use((req,res)=>{
    res.status(404).render("404",{title:'404'});
});
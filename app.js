const Express=require("express")
const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")
var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
var markmodel=Mongoose.model("marks",
new Mongoose.Schema({
name:String,
admin:String,
cgpa:String
}))
Mongoose.connect("mongodb+srv://mzcbook:807826@cluster0.2sbk9.mongodb.net/markDb")



app.post("/api/markapp",(req,res)=>
{
    var getname=req.body.name
  var getadmin=req.body.admin
  var getcgpa=req.body.cgpa
  data={"name":getname,"admin":getadmin,"cgpa":getcgpa}
  let mymark=new markmodel(data)
  mymark.save((error,data)=>{
      if(error)
      {
          res.send({"status":"error","data":error})
      }
      else
      {
        res.send({"status":"success","data":data})
      }
  })

  
})
app.get("/api/markapp",(req,res)=>
{
    res.send("welcome")
})
app.listen(5000,()=>{
    console.log("server running")
})
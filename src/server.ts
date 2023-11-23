import app from "./app";









app.get('/',(req,res)=>{
  res.send({success:true})
})




app.listen(5000, () => {
    console.log(`Server started on port ${5000}`);
  });
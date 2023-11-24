import app from "./app";
import { port } from './config';


app.get('/',(req, res)=>{
res.status(200).json({success:true,message:"Server Working Successfully"})
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });








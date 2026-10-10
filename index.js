import express from "express";
import {Server} from "socket.io";
import { createServer } from "http";
import { DemoFunction } from "./API/testFun.js";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: { origin: "*" }
});

app.get("/:id",async(req,res)=>{
    
  const data =  await DemoFunction(10,20);
    const id = req.params.id;
    io.emit("data",{success: true,data: id,sum: data,message: "success"});
    res.json({
    message: "Working"
    });
});

io.on("connection",async (socket) => {
    console.log(`socket ${socket.id} connected`);

    
    socket.emit("hello", "connection success");
      /*setTimeout(() => {
          socket.disconnect();
      }, 5000);*/
    socket.on("disconnect", (reason) => {
      console.log(`socket ${socket.id} disconnected due to ${reason}`);
    });
});


httpServer.listen(5050,()=>{
    console.log("Server running on http://localhost:5050");
})
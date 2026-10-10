import { io } from "socket.io-client";

const socket = io("http://localhost:5050");

/*setTimeout(() => {
    console.log("disconnected");
    
    socket.disconnect();
}, 5000);*/
socket.on("connect", () => {
  console.log("connected with id:", socket.id);
});

socket.on("connect_error", (err) => {
  console.log("connection error:", err.message);
});

socket.on("hello", (data) => {
  
  console.log("received:", data);
});

socket.on("data",(data)=>{
  const response = data.sum;
  console.log("Data received:", response);
});

socket.on("data2",(data)=>{
  console.log("Data2 received:", data.id);
})
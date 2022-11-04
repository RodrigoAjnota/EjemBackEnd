import Express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/viewsRouter.js";
import { Server } from "socket.io";

const app = Express();

app.engine('handlebars',handlebars.engine())
app.use('views',__dirname+'/views');
app.use('view engine','handlebars');

app.use('/',viewsRouter)


const server = app.listen(8080,()=>console.log("Listening...."))
const io = new Server(server)

io.on('connection',socket => {
    console.log('socket connected');
}) 
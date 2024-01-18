import express from "express";

const app = express();
const port =3000;

const day = new Date("14 Jan,2024").getDay();
console.log(day)
app.get("/",(req,res) => {
   let whichday = "It's Weekday";
   let whattodo = "It's time to work hard";

    if (day == 0 || day == 6){
        whichday = "It's Weekend";
        whattodo = "It's time to have some fun !!"
    }

    res.render("index2.ejs",{
        dayType:whichday,
        activity:whattodo
    });
});



app.listen(port, ()=>{
    console.log("Started the server")
})


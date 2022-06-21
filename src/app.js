require('dotenv').config();
const exress = require('express');
const app = exress();
// const barberRatingRouter = require('./routers/barber.rating.router');
// const barberRouter = require('./routers/barber.router');
// const ownerRouter = require('./routers/owner.router');
// const saloonRatingRouter = require('./routers/saloon.rating.router');
// const saloonRouter = require('./routers/saloon.router');
// const userRouter = require('./routers/user.router');

app.use(exress.urlencoded({extended:true}));
app.use(exress.json());

app.get('/',(req,res)=>{
    res.send('hello')
})

// app.use('/barberRating',barberRatingRouter);
// app.use('/barber',barberRouter);
// app.use('/owner',ownerRouter);
// app.use('/saloonRating',saloonRatingRouter);
// app.use('/saloon',saloonRouter);
// app.use('/user',userRouter);

const port = process.env.PORT;
console.log(port);
app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
});

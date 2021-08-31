import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { mongoURI } from './key';

const app = express();

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect to MongoDB
mongoose
  .connect(mongoURI)
  //   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err: any) => console.log(err));

//Check Production Mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (res: any) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Running On Port ${port}`));

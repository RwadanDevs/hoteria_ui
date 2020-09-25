import path from 'path';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const publicPath = path.join(__dirname, '../', 'dist');
const app = express();

const PORT = process.env.PORT || 8000;

app.use( express.static(publicPath) );

app.get('*', (req,res)=>{
    res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.listen(PORT, ()=>{
    console.log(`App is running on server port: ${ PORT }`);
});

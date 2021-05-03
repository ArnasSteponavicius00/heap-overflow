const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const postRoutes = require('./routes/posts.js')

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use('/posts', postRoutes);

// connect to mongo database
const DATABASE_URL = "mongodb+srv://arnas:arnasadmin@overflow.bsmn6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

// remove deprecation warning
mongoose.set('useFindAndModify', false);

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error) => console.log(error.message));




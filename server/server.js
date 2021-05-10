const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv'); 

const postRoutes = require('./routes/posts.js');
const userRoutes = require('./routes/users.js');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
 res.send("heap-overflow");
});

const PORT = process.env.PORT || 5000;

// remove deprecation warning
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error) => console.log(error.message));




require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); 
const cors = require('cors');
const contactsRoutes = require('./routes/contacts'); 

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

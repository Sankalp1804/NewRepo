const express = require('express');
const cors = require('cors');
const contactsRouter = require('./routes/contacts');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/contacts', contactsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

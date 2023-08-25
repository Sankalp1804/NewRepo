const db = require('../utils/database');

const Contact = {
  getAllContacts: () => {
    return db.any('SELECT * FROM contacts');
  },
  getContactById: id => {
    return db.one('SELECT * FROM contacts WHERE id = $1', id);
  },
  // methods for creating, updating, and deleting contacts here
};

module.exports = Contact;

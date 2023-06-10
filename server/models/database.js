const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://20pwcse1895:DBMS2023@dbms.ixgor25.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');
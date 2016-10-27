'use strict';

const Config = require('./config/development');


const Main = require('./routes/main');

var app = require('./utils/server');

//router
app.use('/', Main);

app.listen(Config.port, () => {
  console.log('app running on port => ', Config.port);
});



const express = require ('express')
const { engine } = require ('express-handlebars')
const Sequelize = require('sequelize')
const session = require('express-session')
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//paramètre express
const app = express();
const router = require('./API/router');
const sequelize = require('./config');

//parametre css
//app.use('/css', express.static(path.join(__dirname, 'assets')))

//paramètre sequelize
const db = require('./config')
try {
    db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

//parametre express session
  app.use(session({
    secret: 'keyboard cat',
    store: new SequelizeStore({
      db:db
    }),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

//parametre local storage
app.use('*', (req, res, next) => {
  if (req.session) {
    console.log( req.session)
    res.locals.userPk = req.session.userPk
    res.locals.firstName = req.session.firstName
}
  next()
}),

  //paramètres handlebar
app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');
app.set('views', './views');

//parametre bodyparser
app.use(express.urlencoded({extended: true}))



//fonctionnement du serveur
app.use('/', router)

app.listen(3000, function () {
    console.log(`le serveur tourne sur http://localhost:3000`)
    
});
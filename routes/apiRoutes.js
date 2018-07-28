var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/getUser", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.post("/api/createEvent", function(req, res) {
    db.Event.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/createUser", function(req, res) {

  });


  app.put("/api/modifyEvent", function(req, res) {

  });

  app.post("/api/newVote", function(req, res) {


  });

    // Delete an event by id
    app.delete("/api/event/:id", function(req, res) {

  });

  //Login in routes using facebook
    app.get('/',
      function(req, res) {
      res.render('index', { user: req.user });
    });

    // called using a modal
    app.get('/login',
      function(req, res){
        res.render('login');
    });

    app.get('/login/facebook',
      passport.authenticate('facebook'));

    app.get('/login/facebook/return', 
      passport.authenticate('facebook', { failureRedirect: '/login' }),
      function(req, res) {
        res.redirect('/');
    });

    app.get('/profile',
      require('connect-ensure-login').ensureLoggedIn(),
      function(req, res){
        //in our case it will probably call the create event html
      res.render('profile', { user: req.user });
    });

  }
  typo
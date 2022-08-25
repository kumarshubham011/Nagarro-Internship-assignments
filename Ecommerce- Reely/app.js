const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const { request } = require('express');

const app = express();

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));
app.use(express.static("public"));
app.get('/computer', (req,res) => {
  let user = req.user
  if(user==null|| user.length<=0){
    res.redirect('/dashboard'); 
  }
  else{
    res.render('computer', {user})
  }
})
app.get('/laptops', (req,res) => {
  let user = req.user
  if(user==null|| user.length<=0){
    res.redirect('/dashboard'); 
  }
  else{
    res.render('laptops', {user})
  }
})
app.get('/smartphone', (req,res) => {
  let user = req.user
  if(user==null|| user.length<=0){
    res.redirect('/dashboard'); 
  }
  else{
    res.render('smartphone', {user})
  }
})
app.get('/c1', (req,res) => {
  let user = req.user
  if(user==null|| user.length<=0){
    res.redirect('/dashboard'); 
  }
  else{
    res.render('c1', {user})
  }
})
app.get('/c2', (req,res) => {
  let user = req.user
  if(user==null|| user.length<=0){
    res.redirect('/dashboard'); 
  }
  else{
    res.render('c2', {user})
  }
})

app.get('/c3', (req,res) => {
  let user = req.user
  if(user==null|| user.length<=0){
    res.redirect('/dashboard'); 
  }
  else{
    res.render('c3', {user})
  }
})

app.get('/c4', (req,res) => {
  let user = req.user
  if(user==null|| user.length<=0){
    res.redirect('/dashboard'); 
  }
  else{
    res.render('c4', {user})
  }
})

app.get('/l1', (req,res) => {
  let user = req.user
  if(user==null|| user.length<=0){
    res.redirect('/dashboard'); 
  }
  else{
    res.render('l1', {user})
  }
})

app.get('/l2', (req,res) => {
  let user = req.user
  if(user==null|| user.length<=0){
    res.redirect('/dashboard'); 
  }
  else{
    res.render('l2', {user})
  }
})

app.get('/l3', (req,res) => {
  let user = req.user
  if(user==null|| user.length<=0){
    res.redirect('/dashboard'); 
  }
  else{
    res.render('l3', {user})
  }
})

app.get('/l4', (req,res) => {
  let user = req.user
  if(user==null|| user.length<=0){
    res.redirect('/dashboard'); 
  }
  else{
    res.render('l4', {user})
  }
})

app.get('/s1', (req,res) => {
  let user = req.user
  if(user==null|| user.length<=0){
    res.redirect('/dashboard'); 
  }
  else{
    res.render('s1', {user})
  }
})

app.get('/s2', (req,res) => {
  let user = req.user
  if(user==null|| user.length<=0){
    res.redirect('/dashboard'); 
  }
  else{
    res.render('s2', {user})
  }
})

app.get('/s3', (req,res) => {
  let user = req.user
  if(user==null|| user.length<=0){
    res.redirect('/dashboard'); 
  }
  else{
    res.render('s3', {user})
  }
})

app.get('/s4', (req,res) => {
  let user = req.user
  if(user==null|| user.length<=0){
    res.redirect('/dashboard'); 
  }
  else{
    res.render('s4', {user})
  }
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));

// import express from 'express';
// import { addCourse, getAllCourses, getCourseById } from './controller/courses.js';
// import { logger, userAuth, printBody, myCors } from './middleware/middlewares.js';
// import cors from 'cors';

// const app = express();


// /* middlewares */
// //app.use(cors({origin: 'http://localhost:3000'}))
// app.use(myCors)
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(printBody)
// app.use('/course', userAuth);
// //app.use(logger);


// /* routes */
// app.get('/courses/list',/* middleware, */ getAllCourses);
// app.get('/course/:cid', getCourseById);
// app.post('/courses/add', addCourse);
// app.get('/course/list', getAllCourses);



/** EXTERNAL DEPENDENCIES */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

/** ROUTERS */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const recordRouter = require('./routes/record');

/** INIT */
const app = express();
const {setCors} = require('./middleware/security.js')

/** LOGGING */
app.use(logger('dev'));

/** SETTING UP LOWDB */
const adapter = new FileSync("data/db.json");
const db = low(adapter);
db.defaults({ records: [] }).write();


/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(setCors);

/** STATIC FILES*/
app.use(express.static(path.join(__dirname, 'public')));

/** ROUTES */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/records', recordRouter);
/** EXPORT PATH */


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server running on port:', port);
})


module.exports = app;
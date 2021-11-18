// import db from "../db/db.js";
// import url from "url";



// //get list of all courses
// export const getAllCourses = (req, res) => {
//   // console.log(url.parse(req.url, true).query)
//   res.send(db.data.courses);
// };




// // get one specific course
// export const getCourseById = (req, res) => {


//   //http://localhost:8080/courses/1
//   const course = db.data.courses.find((crs) => crs.id === req.params.cid);

//   course
//     ? res.send(course)
//     : res.send({ msg: `course with id:${req.params.cid} not found` });
// };




// // add one course
// export const addCourse = async (req, res) => {

//   db.data.courses.push(req.body);
//   await db.write();

//   res.send(db.data.courses);
// };

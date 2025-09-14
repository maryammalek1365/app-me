import  {User} from "./User";
import  Course from "./Course";
import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  const [courseList,setCourseList]=useState([]);
  const [newCourse,setNewcourse]=useState("");
  const handleChange=(event)=>{
    setNewcourse(event.target.value)
  };
  const addCourse=()=>{
    const course={
      id:courseList.length===0?1:courseList[courseList.length-1].id+1,
      courseName:newCourse,
  isCompleted:false
    }

  setCourseList([...courseList,course])
  console.log(courseList)
    
  }

  const deleteCourse=(courseId)=>{
    setCourseList(courseList.filter((course)=>courseId!==course.id))
  };
 const completeCourse=(courseId)=>{
  const newCourseList=courseList.map((course)=>{
    if(course.id===courseId)return{...course,isCompleted:!course.isCompleted}
    else{ return(course)
}
  })
  setCourseList(newCourseList)
 }
  ///

 //setCourseList([...courseList,newCourse])
 //console.log(courseList)
//
  return (
 <div className="App">
   <div className="add-Course">
   <input type="text" onChange={handleChange}></input>
  <button  onClick={addCourse}>add course </button>
  </div>


<div className="list">
  {courseList.map((course,index)=>{
    return( 
      <Course key={index} course={course} deleteCourse={deleteCourse}
      completeCourse={completeCourse}/>
     )
  })}
    </div>
   </div>
  )
}

export default App;

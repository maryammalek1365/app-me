const Course =(props)=>{


return(<div  style={{backgroundColor:
  props.course.isCompleted ?"green" :"white"
}}> 
      <h1 >{props.course.courseName}</h1>
      <button  onClick={()=>props.deleteCourse(props.course.id)}>x</button>
  <button  onClick={()=>props.completeCourse(props.course.id)}>completeCourse</button>
</div>
    )
   } 
   export default Course;
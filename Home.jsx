import "./Home.css";
import { STUDENT_DATA } from "./src/component/configs/student.jsx";
import StudentCard from "./src/component/StudentCard/StudentCard.jsx";
import { APP_NAME,APP_DESCRIPTION , PRIMARY_COLOR,SECONDARY_COLOR } from "./src/component/configs/app.js";


function Home() {
  return (

    <div>
      <h1 className="app-name" style={{color : PRIMARY_COLOR }}>{APP_NAME}</h1>
    {APP_DESCRIPTION ? (
      <p className="app-description" style={{color:SECONDARY_COLOR }}>{APP_DESCRIPTION}</p> ): null}

    <div className="student-container">
           {STUDENT_DATA.map((student) => {
            const {name, email, city, gender} = student;
            const avatar = gender === "Female" ? "./public/Student.img/boy.png" : "./public/Student.img/girl.png";
            return (
            <StudentCard name={name} email={email} city={city} avatar={avatar} key={email} />
          );
      })}
    </div>
        
    </div>
  );
}

export default Home;

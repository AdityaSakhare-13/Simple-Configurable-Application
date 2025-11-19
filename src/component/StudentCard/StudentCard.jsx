import "./StudentCard.css";
import { Building2, Mail } from "lucide-react";
import { PRIMARY_COLOR , LIGHT_COLOR} from "../configs/app";

function StudentCard({name, email,city, avatar}) {
return (
    <div className="student-card"  style={{borderColor:PRIMARY_COLOR , backgroundColor:LIGHT_COLOR}}>

            <h1 className="student-name">{name}

            <p className="student-info"><Mail className="student-info-icon"/>: {email} </p>

            <p className="student-info"> <Building2 className="student-info-icon"/>: {city} </p>

            <img src = {avatar}  className="student-gender-icon"/>


            </h1>
        </div>
  );
}

export default StudentCard

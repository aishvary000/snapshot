import classes from './EditNote.module.css';
import { useLocation } from "react-router-dom";
export default function EditNote({route,navigation})
{
    const location = useLocation();

    console.log(location.state.note);
    // console.log(title+":"+date);

}
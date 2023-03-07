import classes from './EditNote.module.css';
import { useParams } from "react-router-dom";
export default function EditNote()
{
    const params = useParams();
    console.log(params.id);

}
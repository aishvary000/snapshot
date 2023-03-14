import classes from './Card.module.css';
import deleteIcon from '../Assets/remove.png';
import editIcon from '../Assets/edit.png';
import  {useNavigate} from "react-router-dom"
import  {useDispatch} from 'react-redux';
import { noteActions } from '../store/note';
const Card = (props) => {
    
    const MONTH = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const DATE = props.note.date;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const removeItemHandler = () => {
        //console.log("removing item : "+props.note.key);
        console.log("Aish",props.note.key);
        dispatch(noteActions.removeNote(props.note.key));
        
    }
    
    const editItemHandler = () => {
       //here i will dispatch
        navigate(`/edit/${props.note.key}`,{state:{note:props.note}});
            
    }
    const month = MONTH[DATE.month];
    const fullDate = DATE.date+" "+month+", "+DATE.year;
    return(
        <div className={classes.container}>
            <div className={classes.title}>
                <p>{props.note.title}</p>
                <img src={editIcon} onClick={editItemHandler}></img>
            </div>
            <div className={classes.description}>
               <p>{props.note.description}</p>

            </div>
            <div className={classes.footer}>
                <p>{fullDate}</p>
                <img src={deleteIcon} onClick={removeItemHandler}></img>



            </div>
           
        </div>

    );
}
export default Card;
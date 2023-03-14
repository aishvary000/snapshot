import classes from './AddTaskButton.module.css';
import {useDispatch,useSelector} from "react-redux";
import { uIActions } from '../store/UI';
import { noteActions } from '../store/note';
const AddTaskButton = (props) => {

    const dispatch = useDispatch();
     const showAddDialogBox = () => {
      console.log("firing");
        dispatch(uIActions.setVisibiliy(true));
     }
     return (
        <>
            <div className={classes.container}>
            <button className={classes.btn} onClick={showAddDialogBox}>{props.children}</button>

            </div>
        </>
     )
}
export default AddTaskButton;
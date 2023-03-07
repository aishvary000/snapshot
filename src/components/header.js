import user from '../Assets/user.png';
import classes from './header.module.css'
export default function Header()
{

    return(
        <div className={classes['header--title']}>
        <p className={classes.name}>Notes</p>
        <img src={user} className={classes.img}/>
        
      </div>
    );

}
import classes from './Newcards.module.css'
const Newcards =props=>{
 return(
   <div className={classes.card}>
    {props.children}
    </div>
 );
}
export default Newcards;

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'
const MealIteamForm = (props) => {

  const submitHandler = (event) => { 
    event.preventDefault();
  }

    return (
      <form className={classes.form} onSubmit={submitHandler}  >
          <Input label="amount" input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
          }}/>
          <button> + add</button>
      </form>    
    );

};
export default MealIteamForm;


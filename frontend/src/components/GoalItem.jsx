import { useDispatch } from 'react-redux'
import { deleteGoal, updateGoal } from '../features/goals/goalSlice'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
const GoalItem=({ goal }) =>{
  const dispatch = useDispatch()

  return (
    <div
      className="goal" >
      <div>{new Date(goal.updatedAt).toLocaleString("en-US")}</div>
      <h2 style={{color:"white"}}>{goal.text}</h2>
      <button className="close" >
        <AiOutlineDelete
          onClick={() => dispatch(deleteGoal(goal._id))}
          style={{ marginRight: "10px", marginLeft: "10px" }}
          color="white"
        />
        <AiOutlineEdit onClick={() => dispatch(updateGoal(goal._id))}
        color='white'
        />
      </button>
    </div>
  );
}

export default GoalItem

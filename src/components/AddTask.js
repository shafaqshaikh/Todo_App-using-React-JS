import React , {useContext , useState}from 'react'
import {Form , FormGroup , Label , Input , Button} from 'reactstrap'
import {Link , useHistory} from 'react-router-dom'
import {GlobalContext} from '../context/GlobalState'
import {v4 as uuid} from 'uuid'
const AddUser =()=>{
	const {addTask} = useContext(GlobalContext)
	const history = useHistory()
	const [task , setTask] = useState('')
	const [date , setDate] = useState('')
	const onSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      task,
      date,
    }
    addTask(newTask);
    console.log(newTask)
    history.push("/");
  }
	return (
		
		<Form onSubmit={onSubmit}>
			<FormGroup>
				<h1>Add Task</h1>
				<Label>Task : </Label>
				<Input type="text" value={task}placeholder="Enter Your Task" name="task" onChange={(e)=>setTask(e.target.value)}/>
				<Label>Date : </Label>
				<Input type="date" value={date}placeholder="Enter Date" name="date" onChange={(e)=>setDate(e.target.value)}/>
			</FormGroup>
			<Button type="submit">Submit</Button>		
			<Link to="/" className="btn btn-danger ml-2">Cancel</Link>
		</Form>
		)
}

export default AddUser
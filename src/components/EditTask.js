import React , {useContext , useState, useEffect } from 'react'
import {Form , FormGroup , Label , Input , Button} from 'reactstrap'
import {Link , useHistory} from 'react-router-dom'
import {GlobalContext} from '../context/GlobalState'

const EditUser = (props) => {
  const { tasks ,editTask } = useContext(GlobalContext);
  const [selectedTask, setSelectedTask] = useState({
  	id:'',
  	task:'',
  	date:''
  })
  const history = useHistory();
  const currentTaskId = props.match.params.id
 

  useEffect(() => {
    const taskId = currentTaskId;
    const selectedTask =( tasks.find(task => task.id ===taskId))
    setSelectedTask(selectedTask);
  }, [currentTaskId, tasks])

  const onChange1 = (e) => {
    setSelectedTask({ ...selectedTask, [e.target.task]: e.target.value })
  }
  const onChange2 = (e) => {
    setSelectedTask({ ...selectedTask, [e.target.date]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editTask(selectedTask);
    history.push("/")
  }
	return (
		<Form onSubmit={onSubmit}>
			<FormGroup>
				<h1>Edit Task</h1>
				<Label>Task : </Label>
				<Input type="text" placeholder="Enter Your Task" name="task"value={selectedTask.task} onChange={onChange1}/>
				<Label>Date : </Label>
				<Input type="date" placeholder="Enter Date" name="date"value={selectedTask.date} onChange={onChange2} />
			</FormGroup>
			<Button type="submit">Edit</Button>		
			<Link to="/" className="btn btn-danger ml-2">Cancel</Link>
		</Form>
		)
}

export default EditUser
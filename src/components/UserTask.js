import React , {useState , useContext} from 'react'
import {Link} from 'react-router-dom'
import {ListGroup , ListGroupItem , Button} from 'reactstrap'
import {GlobalContext} from '../context/GlobalState'
const UserList =()=>{
	const {tasks , removeTask} = useContext(GlobalContext)
	const [checked, setChecked] = useState(true);

	return (

		<ListGroup className="mt-4">

		{
			tasks.map((item)=>{
				return(
			<ListGroupItem className="d-flex">
			<strong>{item.task}</strong>
			<strong className="ml-5">{item.date}</strong>

			<div className="ml-auto">
			<input className="mr-2" type="checkbox" value={checked} onChange={()=>setChecked(!checked)}/>
			<Link className="btn btn-warning mr-1" to={`/edit/${item.id}`}>Edit</Link>
			<Button onClick={()=>removeTask(item.id)}color="danger">Delete</Button>
			</div>
		</ListGroupItem>
					)
			})
		}
		
		</ListGroup>
		)
}

export default UserList
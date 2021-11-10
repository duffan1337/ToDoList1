import React, { useState } from 'react'
import ChangeTask from './ChangeTask'
import { useDispatch} from 'react-redux'
import deleteTextAC from '../../Redux/Actions/deleteTaskAC';
import "./TasksList.scss"

let fff=null

const TasksList=({taskText})=>{

const [editMode, setEditMode] = useState(false);
const dispatch = useDispatch();


const onTaskClick=(index)=>{
    setEditMode(true)
    fff=index;
}

const onDeleteTask=(id)=>{
    dispatch(deleteTextAC(id))
}
    
     return( <div>
         {!editMode ? 
         <ul className="Task">
             
        { taskText && taskText.map((element, index)=> <li id={element.id} key={`${element}_${index}`}> 
        <input id={element.id} type="checkbox" onClick={()=>{(onDeleteTask(element.id))}}/>
        <span onClick={()=>{(onTaskClick(element.id))}}>{element.message}</span> 
        </li>)}
         </ul>
    : <ChangeTask id={fff} editMode={editMode} setEditMode={setEditMode}/>}
    </div> )

}

export default TasksList

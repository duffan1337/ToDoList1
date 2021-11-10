import React, {useState} from 'react'
import setTextAC from '../../Redux/Actions/setTextAC';
import './Main.scss';
import { useDispatch, useSelector} from 'react-redux'
import TasksList from '../TasksList/TasksList';

const Main=()=> {

    const [id, setId] = useState(0);

    const {taskText, count, maxCount}=useSelector((state)=>{
        return{
            taskText:state.tasks.tasks,
            count:state.tasks.count,
            maxCount:state.tasks.maxCount
        };
      });

    const dispatch = useDispatch();

    let textInput=React.createRef()

    const onTextSubmit=()=>{
        const Text = textInput.current.value
        dispatch(setTextAC(Text, id));
        setId(id+1)
        if(count===maxCount)
        {
            alert("Ой, похоже вы набрали слижком много заданий")
        }
    }
    return (
        <div className="Main">
            <div >
                <TasksList taskText={taskText} />
            </div>
            <div className="Text">
                <input ref={textInput}></input>
            </div>
            <div className="Button">
                <button onClick={onTextSubmit} >submit</button>
            </div>
        </div>
    )
}

export default Main

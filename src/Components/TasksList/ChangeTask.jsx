import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import changeTextAC from '../../Redux/Actions/changeTextAC';
import "./ChangeTask.scss"

const ChangeTask=({editMode, setEditMode, id})=>{

    const dispatch = useDispatch();

    let textInput=React.createRef()

    const onNewTextSubmit=()=>{
        const Text = textInput.current.value
        dispatch(changeTextAC(Text,id));
        setEditMode(false)
    }

return (
    <div className="parent_popup">
    <div  className="modalWindow"> 
            <div>
                <input ref={textInput}></input>
            </div>
            <div >
                <button onClick={onNewTextSubmit} >submit</button>
            </div>
        </div>
        </div>)
}

export default ChangeTask

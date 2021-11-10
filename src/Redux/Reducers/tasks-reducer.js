const SET_TEXT="SET_TEXT"
const CHANGE_TEXT="CHANGE_TEXT"
const DELETE_TASK="DELETE_TASK"

const initialState={
    tasks:[],
    count:0,
    maxCount:10
}

const textReducer=(state=initialState, action)=>{
    if(action.type===SET_TEXT)
    {
        if(state.count<state.maxCount)
        { 
        return {...state,
             tasks:[...state.tasks, { id:action.payload.id, message:action.payload.message}],
             count: state.count+1
            }
        }
        else
        {
            return state
        }
    }
    else if(action.type===CHANGE_TEXT)
    {
        return {...state,
            tasks: state.tasks.map(item=>{
                if(item.id===action.payload.id){
                    return{
                        ...item,
                        message: action.payload.message,
                    }
                }
                return item;
            })
    
    }}
    else if(action.type===DELETE_TASK)
    { 
        const newTasks = state.tasks.filter((item) => item.id !== action.payload)
        return { ...state, tasks: newTasks, count: state.count-1}
    }
    return state

}

export default textReducer

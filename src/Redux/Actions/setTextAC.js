const setTextAC=(Text, id)=>({
        type:"SET_TEXT",
        payload:{message:Text, id:id}
})
export default setTextAC
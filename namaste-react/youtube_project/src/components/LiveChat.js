import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils/chatSlice";
import {generateName, generateText } from "../utils/helper";

 
const LiveChat = () => {
  const dispatch=useDispatch();

  const [liveMessage,setLiveMessage]=useState("");

  const chatMessages=useSelector((store)=>store.chat.messages)

  useEffect(()=>{
    const i=setInterval(()=>{
      //API polling
      //console.log("API polling");

      dispatch(
        addMessage({
          name:generateName(),
          message:generateText(20)
        })
      )
    },1000)

    return ()=>clearInterval(i);
  },[])

  return (
    <>
    <div className='w-full h-[680px] ml-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse'>

    {//Don't use index as key
    chatMessages.map((c,i)=>(
      <ChatMessage key={i} name={c.name} message={c.message}/>
    ))
    }

    </div>
    <form className="w-full p-2 ml-2 border border-black" onSubmit={
      (e)=>{
        e.preventDefault();
        //console.log(liveMessage)
        dispatch(
          addMessage({
            name:"Sachin Singh",
            message:liveMessage,
          })
        )
        setLiveMessage("")
      }
    }>
      <input className="w-60 border border-black" type="text" value={liveMessage} onChange={
        (e)=>{
          setLiveMessage(e.target.value)
        }}/>
      <button className="m-2 bg-green-100">Send</button>
    </form>
    </>
  )
}

export default LiveChat 
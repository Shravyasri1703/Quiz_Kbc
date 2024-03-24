import { useRef } from "react"


function Start({ setUsername }){
    const inputRef = useRef()

    const handleClick = ()=>{
        inputRef.current.value && setUsername(inputRef.current.value)
    }
   
    return(
        <>
        <div className="start">

            <input placeholder="Enter Your Name" className="startInput" ref={inputRef}/>
            <button className="startButton bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 font-mono text-yellow-300 shadow-2xl rounded-xl" onClick={handleClick}>Start</button>
        </div>
        
        </>
    )
}

export default Start
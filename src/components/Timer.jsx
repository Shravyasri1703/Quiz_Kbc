import { useEffect, useState } from "react"


function Timer({ setTimeout, questionNumber}){
  const [timer,setTimer] = useState(30)
  useEffect(()=>{
    if (timer === 0) return setTimeout(true)
     const interval = setInterval(() => {
        setTimer((prev)=>prev-1)
     },1000);
     return ()=> clearInterval(interval)
  },[timer, setTimeout])

  useEffect(()=>{
      setTimer(3)
  },[questionNumber])
  
    return timer
    
}

export  default Timer
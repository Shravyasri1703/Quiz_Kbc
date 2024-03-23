import { useEffect, useState } from "react"


function Trivia({data,setTimeout,questionNumber,setQuestionNumber}){
    
    const[question,setQuestion] = useState(null)
    const[selectAnswer,setSelectedAnswer]= useState(null)
    const[className, setClassName] = useState("answer")
    useEffect(()=>{
        setQuestion(data[questionNumber-1])
    },[data, questionNumber])


    const delay = (duration, callback) =>{
       setTimeout(()=>{
        callback()},
       duration)
    }

    const handleClick = (a) =>{
      setSelectedAnswer(a)
      setClassName("answer active")
      delay(()=>{
        setClassName(a.correct ? "answer.correct" : "answer.wrong")
      },3000)

      delay(()=>{
        if(a.correct){
          setQuestionNumber((prev)=> prev + 1)
          setSelectedAnswer(null)
        }else{
          setStop(true)
        }
      },6000)
    }
    
    return(
        <div className="flex flex-col h-max align-middle space-y-5 pb-3">
          <div className="questions bg-gradient-to-b from-purple-950 to-purple-900 p-2 rounded-xl text-yellow-300 mt-9 border-4 border-white text-2xl">{question?.question}</div>
          <div className="answers flex w-full flex-col  items-center  text-l sm:text-md ">
               {question?.answers.map((a)=>(
                     <div className=" bg-purple-800 mb-4 rounded-2xl text-yellow-200 shadow-xl w-1/3 border-4 border-indigo-200 hover:cursor-pointer hover:bg-indigo-500  active:bg-orange-300 active:text-black"onClick={()=>handleClick(a)} {...selectAnswer === a ? className : "answer"}>{a.text}</div>
               ))}
         
         
          
          </div>
        
        </div>
    )
}

export default Trivia
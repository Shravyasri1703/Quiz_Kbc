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
        callback()
      },
       duration)
    }

    const handleClick = (a) =>{
      setSelectedAnswer(a)
      setClassName("answer active")
      delay(3000, ()=>{
        setClassName(a.correct ? "answer.correct" : "answer.wrong")
      })

      delay(5000, ()=>{
        if(a.correct){
            delay(1000,()=>{
              setQuestionNumber((prev)=> prev + 1)
              setSelectedAnswer(null)
            })
        
        }else{
          delay(1000, ()=>{
            setTimeout(true)
          })
        }
        
      })
    }
    
    return(
        <div className="trivia flex flex-col h-max align-middle space-y-5 pb-3">
          <div className="questions bg-gradient-to-b from-purple-950 to-purple-900 p-2 rounded-xl text-yellow-300 mt-9 border-4 border-white text-2xl">{question?.question}</div>
          <div className="answers">
               {question?.answers.map((a)=>(
                     <div 
                     className={selectAnswer === a ? className : "answer"} onClick={() => !selectAnswer && handleClick(a)}>
                      {a.text}
                     </div>
               ))}
         
         
          
          </div>
        
        </div>
    )
}

export default Trivia
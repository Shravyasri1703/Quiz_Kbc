import { useEffect, useMemo, useState } from "react"
import Trivia from "./components/components"
import Timer from "./components/Timer"
import Start from "./components/Start"

function App() {
  const [userName,setUserName] = useState(null)
  const[questionNumber,setQuestionNumber] = useState(1)
  const[timeOut, setTimeout] = useState(false)
  const [earned, setEarned] = useState("0 Rs")
   const data = [

    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
   ]
   const moneyPyramid = useMemo(()=>
    [
      {id:1, amount:"1000 Rs"},
      {id:2, amount:"2000 Rs"},
      {id:3, amount:"3000 Rs"},
      {id:4, amount:"5000 Rs"},
      {id:5, amount:"10000 Rs"},
      {id:6, amount:"20000 Rs"},
      {id:7, amount:"40000 Rs"},
      {id:8, amount:"80000 Rs"},
      {id:9, amount:"160000 Rs"},
      {id:10, amount:"320000 Rs"},
      {id:11, amount:"640000 Rs"},
      {id:12, amount:"1250000 Rs"},
      {id:13, amount:"2500000 Rs"},
      {id:14, amount:"5000000 Rs"},
      {id:15, amount:"10000000 Rs"}
     ].reverse()
   ,[])
   

   useEffect(()=>{
       questionNumber > 1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber-1).amount)
   },[moneyPyramid,questionNumber])
{/*"moneyListItem active:bg-yellow-500 active:text-yellow-950 p-1 active:rounded-3xl"*/}
  return (
    <>
     <h1 className='font-extrabold text-3xl sm:text-5xl  text-center p-4 text-yellow-400 mb-2'>Quiz App</h1>

     <div className="app flex flex-row p-3">
      {userName ? (<>
        <div className="main font-bold text-yellow-500  w-3/4 bg-gradient-to-r from-indigo-950 via-indigo-800 to-indigo-900 p-2 mr-2 rounded-md shadow-2xl text-center">
       {stop ?( <h1>You Earned : {earned}</h1>) : (
        <>
        <div className="top h-1/5 flex justify-center text-center p-3">
          <div className="font-bold text-xl text-indigo-950  h-[1.5cm] w-[1.5cm] rounded-full border-4 border-indigo-200 items-center felx justify-center pt-2"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
        </div>
        <div className="bottom h-1/2"><Trivia data={data} setTimeout={setTimeout} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/></div>
        </>)}
     
      </div>
     
      <div className="pyramid w-1/4 max-h-max bg-gradient-to-r from-violet-950 via-violet-900 to-violet-950 p-2 rounded-md shadow-lg text-center font-semibold text-[#ffcf40] text-md sm:text-sm ">
        <ul className="moneyList">
          {moneyPyramid.map((m)=>(
          <li className={questionNumber === m.id ? "moneyListItem active:bg-yellow-600 active": "moneyListItem"}>
            <span className="moneyListItemNumber mr-[20%] pl-1">
               {m.id}
            </span>
            <span className="moneyListItemAmount">
                 {m.amount}
            </span>
          </li>
        
         ))}
        </ul>
      </div>
      
      </>) : <Start setUserName={setUserName}/>}
      


       
     </div>
  


    </>

  )
          }

export default App

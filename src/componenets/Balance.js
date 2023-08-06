import React, { useState } from 'react'
import AddTransaction from './AddTransaction'



function Balance(props) {
  const [isAddTVisible , setToggle] = useState(true)


  return (
    <>
    <div className='top-[100px] left-[550px] w-[400px] h-[40px] border-[1px] absolute border-rose-200'>
     <h3 className='my-px ml-[20px] text-red-50 font-semibold text-2xl'>Balnace:  ${props.income - props.expense}</h3>
     <button className='top-[3px] font-serif left-[330px] w-[60px] justify-end rounded-full bg-blue-500 md:bg-purple-500 h-[30px] border-[2px] text-red-50 absolute'
     onClick={()=>setToggle(!isAddTVisible)} >
      {isAddTVisible ? "cancel" : "Add"} 
     </button>
     {isAddTVisible && <AddTransaction setToggle={setToggle} 
     PlusTransaction={props.PlusTransaction} />}

    </div>

    <div className='top-[150px] left-[550px] w-[400px] h-[75px]  absolute'>
      <div className='top-[5px] left-[5px] w-[190px] text-center  h-[60px] absolute flex flex-col border-[1px]  border-rose-200'
      isIncome = {"false"} >
        <span className='font-serif text-red-50 font-bold'>Expense</span><span className="font-bold text-[red] ">${props.expense}</span></div>

      <div className='top-[5px] left-[200px] w-[190px] h-[60px] text-center absolute flex flex-col border-[1px]  border-rose-200 '
      isExpense={"true"}>
        <span className='font-serif text-red-50 font-bold'>Income</span><span className='font-bold text-[green]'>${props.income}</span></div>
    </div>

    
    
    
    </>
    
  )
}

export default Balance
import React, { useEffect, useState } from 'react'

function Transaction(props) {

  const [filterTransaction, updateTxn] = useState(props.transactions)
  const [searchText , updateSearchText] = useState("")

  const filterData= () =>{
    if(!searchText || !searchText.trim.length){
      updateTxn(props.transaction)
      return;
    }
    let txn = [...props.transactions]
    txn = txn.filter((payload)=> 
    payload.desc.toLowerCase().includes(searchText.toLowerCase().trim()))
    updateTxn(txn)
  }

  const TransactionCell=() =>{
    return(
      <div className='top-[300px] left-[550px] w-[400px] h-[30px] ${type == "Expense" ? "bg-red-400" : " bg-teal-800"}  border-r-2 rounded border-[2px] border-black flex'
      isExpense ={props.payload ?.type === "Expense"  }
       >
        <span>{props.payload.desc}</span>
        <span>${props.payload.amount}</span>
      </div>
    )
  }

  

  useEffect(()=>filterData(searchText), [props.transactions])
      
  return (
    
    <div>
      <h2 className='top-[425px] left-[550px] font-serif font-bold text-2xl absolute'>Transaction Details</h2>
      <input className='top-[460px] left-[550px] w-[400px] h-[50px] py-px pl-px text-black rounded border-[1px]  absolute'
      placeholder='Search'
      value={searchText}
      onChange={(e)=>{
        updateSearchText(e.target.value)
        filterData(e.target.value)
      }}
      />

      {filterTransaction ?.length
      ? filterTransaction.map((payload)=>(
        <TransactionCell payload={payload}/>
      ))  :""
      }

    </div>
  )
}

export default Transaction

 
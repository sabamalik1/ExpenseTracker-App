
import './App.css';
import './componenets/style.css'
import Transaction from './componenets/Transaction';
import Balance from './componenets/Balance';

import { useEffect, useState } from 'react';


function App() {

  const [transactions ,updateTransaction] =useState([])
  const [expense ,updateExpence] =useState(0)
  const [income ,updateIncome] =useState(0)

  const PlusTransaction = (payload)=>{
    
    const transactionArray =[...transactions]
    transactionArray.push(payload)
    updateTransaction(transactionArray)
  }

  const calculateBalnce = () =>{
    let exp = 0;
    let inc = 0;
    transactions.map((payload)=>{
      payload.type==="Expense" 
      ? (exp= exp+payload.amount) 
      : (inc= inc+payload.amount)
    })
    updateExpence(exp)
    updateIncome(inc)
  }
  useEffect(()=> calculateBalnce(), [transactions])


  return (
    <>
    <div className='w-[600px] h-[700px] background bg-fuchsia-300 text-red-50 rounded-3xl mx-[450px] my-8 '  >
      
      <div className='text-center style font-bold  font-sarif text-5xl justify-center'>
      <h1 >Expense Tracker</h1>
      </div>
      <Balance  PlusTransaction={updateTransaction}
       expense={expense}
       income= {income}
       />
      <Transaction transactions={transactions} updateTransaction={updateTransaction} />
      
    
    </div>
      
    </>
  );
}

export default App;

import React, { useState } from "react";
import Transaction from "./Transaction";

function AddTransaction(props) {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("Expense");

  const TransactionAdd = () => {
    if (amount && desc) {
      const newTransaction = {
        amount: Number(amount),
        desc,
        type,
        id: Date.now(),
      };
      props.PlusTransaction((prevTransactions) => [
        ...prevTransactions,
        newTransaction,
      ]);
      setAmount("");
      setDesc("");
      setType("Expense");
      props.setToggle();
    }
  };

  //   props.PlusTransaction({
  //     amount: Number(amount),
  //     desc,
  //     type,
  //     id: Date.now(),
  //   });
  //   props.setToggle();
  //   console.log(amount, desc, type);
  // };

  return (
    <div>
      <div className="top-[130px] left-[2px] w-[400px] h-[180px] absolute border-[1px] border-rose-200">
        <input
          className="top-[10px] w-[385px] h-[30px] left-[5px]  text-black px-2 py-2  absolute"
          placeholder="Amount"
          value={amount}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          className="top-[50px] w-[385px] h-[30px] left-[5px] px-2 py-2 text-black absolute"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <div className="top-[90px] left-[5px] w-[385px] h-[30px] justify-center gap-5 border-[1px] border-rose-200 absolute">
          <input
            type="radio"
            value="Expense"
            name="type"
            checked={type === "Expense"}
            onChange={(e) => setType(e.target.value)}
          />
          Expense
          <input
            className="left-[100px] border-[1px] border-rose-200 px-1 py-1"
            type="radio"
            value="Income"
            name="type"
            checked={type === "Income"}
            onChange={(e) => setType(e.target.value)}
          />
          Income
        </div>

        <div>
          <button
            className="top-[130px] px-1 py-1 font-serif font-[24px] left-[2px] w-[390px] text-red-50 rounded-full bg-blue-500 md:bg-purple-500 h-[40px] border-[2px] absolute"
            onClick={TransactionAdd}
          >
            Add Transaction
          </button>
        </div>
      </div>

      <Transaction desc={desc} amount={amount} />
    </div>
  );
}

export default AddTransaction;
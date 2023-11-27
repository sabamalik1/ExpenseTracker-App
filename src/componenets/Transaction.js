import React from "react";

function Transaction(props) {
  console.log(props.transactions);

  const handleDeleteTransaction = (id) => {
    // Filter out the transaction with the specified id and update the transactions state
    const updatedTransactions = props.transactions.filter(
      (transaction) => transaction.id !== id
    );
    props.updateTransaction(updatedTransactions);
  };

  const TransactionCell = (props) => {
    return (
      <div
        className={`w-[400px] border rounded h-[40px] my-2  ml-24  ${
          props.payload.type === "Expense" ? "bg-red-400" : "bg-teal-800"
        } flex flex-col `}
      >
        <div className="flex flex-row px-2 py-2 ">
          <span>{props.payload.desc}</span>
          <span className="ml-auto">${props.payload.amount}</span>
          <button
            className="w-8 h-5 bg-slate-50 border rounded-sm ml-1 text-black px-1 "
            onClick={() => handleDeleteTransaction(props.payload.id)}
          >
            del
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2 className="top-[425px] left-[550px] font-serif font-bold text-3xl absolute  ">
        Transaction Details
      </h2>
      <div className="top-[380px] relative overflow-y-auto h-48">
        {props.transactions?.length
          ? props.transactions.map((payload) => (
              <TransactionCell
                key={payload.id}
                payload={payload}
                onDelete={handleDeleteTransaction}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

export default Transaction;
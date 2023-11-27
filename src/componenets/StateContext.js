import React, { createContext, useReducer } from "react";

const initialState = {
  transactions: [],
  amount: "",
  desc: "",
  type: "Expense",
  expense: 0,
  income: 0,
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_AMOUNT":
      return {
        ...state,
        amount: action.payload,
      };
    case "ADD_DESC":
      return {
        ...state,
        desc: action.payload,
      };
    case "ADD_TYPE":
      return {
        ...state,
        type: action.payload,
      };
    case "ADD_TRANSACTIONS":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "UPDATE_BALANCE":
      const transactions = action.payload;
      let expense = 0;
      let income = 0;
      transactions.map((payload) => {
        payload.type === "Expense"
          ? (expense += payload.amount)
          : (income += payload.amount);
      });
      return {
        ...state,
        transactions,
        expense,
        income,
      };
    case "ADD_FORM":
      return {
        ...state,
        amount: "",
        desc: "",
        type: "Expense",
      };
    case "DELETE_ITEM":
      const updatedTransactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
      return {
        ...state,
        transactions: updatedTransactions,
      };
    default:
      return state;
  }
};

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);
  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

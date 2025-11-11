import { useState } from 'react'
import React from 'react'
import { ExpenseContext } from '../Context/ExpenseContext';

function ExpenseTracker() {
    const [expense, setExpense] = useState([]);
    const [total,setTotal]=useState(0);
  return (
    <div>
      <ExpenseContext.Provider value={{expense,setExpense,total,setTotal}}>
        
      </ExpenseContext.Provider>
    </div>
  )
}

export default ExpenseTracker

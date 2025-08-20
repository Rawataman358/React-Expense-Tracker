import React, { useEffect, useState } from 'react'
import '../Styles/Transactions.css'
import { useNavigate } from 'react-router-dom';

function Transaction() {
  const navigate = useNavigate()
 
  // console.log(existingtransactions);

  const [transaction,setTransaction]=useState([]);
  const CategoryEmojis = {
    Salary: "💰",
    Groceries: "🛒",
    Dining: "🍽️",
    Transport: "🚗",
    Entertainment: "🎭",
    Other: "➕"

  };
  useEffect(()=>{
     const existingtransactions 
     = JSON.parse(localStorage.getItem("transactions")) || []
  setTransaction(existingtransactions);
    },[])

  // console.log(CategoryEmojis[tx.Category]);

  function handleEdit(index) {
    const editTransaction = transaction[index];
    navigate ('/add transaction', 
      { state: { transaction: { ...editTransaction, index } },
     });

  }
  function handleDelete(index) {
const updatedTransaction= transaction.filter((data,i)=>i!==index);
setTransaction(updatedTransaction)
localStorage.setItem("transactions",JSON.stringify(updatedTransaction))  
}



  return (
    <div className='transactions-container'>
      <h2>All Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>         
            <th>Date</th>
            <th>type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((tx, index) => (
            <tr key={index}>
              <td >{CategoryEmojis[tx.category]} {tx.category}</td>
              <td>{tx.description || 'No Description'}</td>
              <td className={tx.type == 'Income' ? 'income' : 'expense'}>{tx.amount.toLocaleString('en-In', { style: 'currency', currency: 'INR' })}</td>
              <td>{tx.date}</td>
              <td>{tx.type}</td>
              <td>
                <div className='action-buttons'>
                  <button className='edit-button' onClick={() => handleEdit(index)}>Edit</button>
                  <button className='delete-button' onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </td>

            </tr>

          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transaction

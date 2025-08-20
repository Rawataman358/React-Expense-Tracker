import React, { useEffect, useState } from 'react'
import '../Styles/AddTransaction.css'
import { useLocation, useNavigate } from 'react-router-dom'

function AddTransaction() {
  const [type, settype] = useState("Expense")
  const [amount, setamount] = useState("")
  const [category, setcategory] = useState("")
  const [description, setdescription] = useState("")
  const [date, setdate] = useState("")
  const [transaction, setTransaction] = useState();
  const [editIndex, seteditIndex] = useState(null);
  const location = useLocation();


  function handleaddtransaction() {

    if (!amount || !category || !date) {
      console.log(type, amount, category, description, date);
      return alert("please fill the form")

    }
    const currentTransaction = {
      type,
      amount: parseFloat(amount),
      category,
      description,
      date
    }
    let newTransactions;
    if (editIndex == null) {
      newTransactions = [...transaction, currentTransaction];
    }
    else{
      newTransactions=[...transaction];
      newTransactions[editIndex]=currentTransaction;
    }
    console.log(transaction);
    console.log(newTransactions);


    localStorage.setItem("transactions", JSON.stringify(newTransactions));//local storage
   if(editIndex==null){
    alert(`${type} added successfully`)
  }
  else{
     alert(`${type} updated successfully`)

   }
   
   
    
    settype("Expense");
    setamount("");
    setcategory("");
    setdescription("");
    setdate("");

  }
  useEffect(() => {
    const existingtransactions = JSON.parse(localStorage.getItem("transactions")) || []
    setTransaction(existingtransactions)
    console.log(location.state);
    if (location.state && location.state.transaction) {
      const transaction = location.state.transaction;
      settype(transaction.type)
      setamount(transaction.amount)
      setcategory(transaction.category)
      setdescription(transaction.description)
      setdate(transaction.date)
      seteditIndex(transaction.index)
    }

  }, [])
  return (
    <div className="add-transaction-container">
      <h2>Add Transaction</h2>
      <div className='transaction-box'>
        <div className='transaction-type'>
          <label>
            <input type='radio' checked={type == "Expense"} value="Expense" onChange={() => settype("Expense")} /> Expense
          </label>
          <label>
            <input type='radio' checked={type == "Income"} value="Income" onChange={() => settype("Income")} /> Income
          </label>
        </div>

        <input type='number' value={amount} placeholder='Amount($)' onChange={(e) => setamount(e.target.value)} />
        <select value={category} onChange={(e) => setcategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Salary">Salary</option>
          <option value="Groceries">Groceries</option>
          <option value="Dining">Dining</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
        <textarea value={description} placeholder='Description' onChange={(e) => setdescription(e.target.value)}></textarea>
        <input type='date' value={date} onChange={(e) => setdate(e.target.value)} />
        <button onClick={handleaddtransaction}>{editIndex!==null ?'update transaction':'add transacion'}</button>

      </div>
    </div>
  )
}

export default AddTransaction

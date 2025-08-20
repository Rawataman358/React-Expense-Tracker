import React, { useEffect, useState } from 'react'
import '../Styles/Dashboard.css'
import Transactioncard from '../Components/Transactioncard'
import RecentTransaction from './RecentTransaction';
import { useNavigate } from 'react-router-dom';
import NoTransaction from '../Components/NoTransaction';

function Dashboard() {
  const [transaction, setTransaction] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, SetTotalExpense] = useState(0);
  const [balance, setBalanace] = useState(0);
  

  const navigate = useNavigate()


  useEffect(() => {
    const existingtransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransaction(existingtransactions);
    let income = 0;
    let expense = 0;
    

    existingtransactions.forEach(tx => {
      if (tx.type == "Income") {
        income += tx.amount;
      }
      else {
        expense += tx.amount;
      }
    });
    SetTotalExpense(expense);
    setTotalIncome(income);
    setBalanace(income - expense);
  
  }, []);
  
  function handleclick() {
    navigate('/add transaction')
  }

  return (
    <div className='dashboard'>
      <div className="dashboard-inner">
        <h2>Dashboard</h2>
        <button className='add-transaction' onClick={handleclick}>
          + Add Transaction
        </button>
      </div>
      <Transactioncard balance={balance} income={totalIncome} expense={totalExpense} />     {/* //passing */}
      <div className='transactions-chart-row'>
        <div className='transactions half-width'>
          <h3>Recent Transaction</h3> 
          {transaction.length==0?<NoTransaction/>: <RecentTransaction transactions={transaction} />}
         
        </div>

      </div>
    </div>
  )
}

export default Dashboard

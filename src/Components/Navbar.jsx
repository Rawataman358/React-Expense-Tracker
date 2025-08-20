import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../Styles/Navbar.css'
import Transaction from '../Pages/Transaction';


const Navbar = () => {
  const location = useLocation();
  const [quote, setquote] = useState(null)
  const [Ismodalopen, setIsmodalopen] = useState(false)
  const navigate = useNavigate()


  const fetchquote = async () => {

    try {
      const response = await fetch('https://quotes-api-self.vercel.app/quote')
      const data = await response.json();
      console.log(data);
      setquote(data.quote)
      setIsmodalopen(true)

    }

    catch (error) {
      console.log(error);

    }

  }
  function handlereset(){
    localStorage.clear();
    navigate("/");
   
  }

  return (
    <nav className='navbar'>
      <h1 className='logo'>Expense Tracker</h1>
      <ul className='nav-links'>
        <li className={location.pathname == '/' ? "active" : ""}>
          <Link to='/'>📊Dashboard</Link>
        </li>
        <li className={location.pathname == '/transaction' ? "active" : ""}>
          <Link to='/transaction'>📄Transaction</Link>
        </li>
        {/* <li className={location.pathname == '/report' ? "active" : ""}>
          <Link to='/report'>Report</Link>
        </li> */}
        <li>

          <div className='quote-btn' onClick={fetchquote}>💡Get Quote</div>
        </li>
        <li>
          <div className="reset-btn"  onClick={handlereset}>🔄Reset</div>
 
        </li>
      </ul>
      {
        Ismodalopen && (
          <div className='modal-overlay'>
            <div className='modal-content'>
              <p>{quote}</p>
              <button className='cls-btn' onClick={() => setIsmodalopen(false)}>close</button>
            </div>
          </div>
        )
      }
    </nav>
  )
}
export default Navbar;

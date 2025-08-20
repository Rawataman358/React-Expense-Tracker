import React from 'react'

function RecentTransaction({ transactions }) {
    const CategoryEmojis = {
        Salary: "💰",
        Groceries: "🛒",
        Dining: "🍽️",
        Transport: "🚗",
        Entertainment: "🎭",
        Other: "➕"

    };


    return (
        <>
        <ul>

            {transactions.slice(-10).reverse().map((tx, index) => (
                <li key={index} className='transaction-item'>
                    <span className='transaction-category'>
                        {CategoryEmojis[tx.category]} {tx.category}
                    </span>
                    <span className={`transaction-amount ${
                        tx.type==='Income' ? "income" : "expense"
                    }`}>
                        {tx.amount.toLocaleString()}
                    </span>

                </li>
            ))}
            {/* {transactions.slice(-10).reverse().map((tx, index) => (
    <li key={index} className='transaction-item'>
        <span className='transaction-category'>
            {CategoryEmojis[tx.category] || ""} {tx.category}
        </span>
        <span className={`transaction-amount ${
            tx.type === 'Income' ? "income" : "expense"
        }`}>
            {tx.amount.toLocaleString()}
        </span>
    </li>
))} */}

</ul>
        </>
    )
}

export default RecentTransaction

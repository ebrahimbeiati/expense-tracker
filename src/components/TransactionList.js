
import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import Transaction from './Transaction';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
   
  return (
    <>
      <h2>Transaction History</h2>
        <ul id='list' className='list'>
        {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}
        amount={transaction.amount} />
       ))}
        </ul>
    </>
  )
}

export default TransactionList
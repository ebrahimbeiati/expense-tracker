import React from 'react'

const TransactionList = () => {
  return (
    <div>
      <h2>Transaction History</h2>
        <ul id='list' className='list'>
            <li className='minus'>
            Cash <span>-$400</span><button className='delete-btn'>x</button>
            </li>
            <li className='minus'>
            Rent <span>-$1200</span><button className='delete-btn'>x</button>
            </li>
            <li className='plus'>
            Work <span>+$400</span><button className='delete-btn'>x</button>
            </li>
        </ul>
    </div>
  )
}

export default TransactionList
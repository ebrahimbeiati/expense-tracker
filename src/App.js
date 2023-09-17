import Header from './components/Header';
import Balance from './components/Balance';
 import IncomeExpenses from './components/IncomeExpenses'
// import Transactions from './components/Transactions'
// import AddTransaction from './components/AddTransaction'

import './App.css';

function App() {
  return (
    <div className="App">
   <Header />
   <div className="container">
      <Balance />
      <IncomeExpenses />
   </div>
  
    </div>
  );
}

export default App;

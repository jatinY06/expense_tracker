import { useState, useEffect } from 'react';
import AddExpense from './AddExpense';
import ExpenseHistory from './ExpenseHistory';
import './ExpenseTracker.css';
import createdSound from '../assets/i-see-money-181273.mp3';
import deletedSound from '../assets/money-180238.mp3';


function ExpenseTracker() {
   
    const [enteredData, setEnteredData] = useState(() => {
        const savedExpenses = localStorage.getItem("expenses");
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

   
    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(enteredData));
    }, [enteredData]);

    const playSound = (sound) => {
      const audio = new Audio(sound);
      audio.play();
  };
   
    // const addExpenseHandler = (expense) => {
    //     setEnteredData((prevData) => [...prevData, expense]);
    //     if (parseFloat(expense.amount) > 0) {
    //       playSound(createdSound);
    //   }
    //   return newData;
  
    // };

    const addExpenseHandler = (expense) => {
      setEnteredData((prevData) => {
          const newData = [...prevData, expense];
          // Play created sound if the amount is positive
          if (parseFloat(expense.amount) > 0) {
              playSound(createdSound);
          }
          return newData;
      });
  };

 
    // const deleteExpenseHandler = (id) => {
    //     setEnteredData((prevData) => prevData.filter((_, index) => index !== id));
    // };

    const deleteExpenseHandler = (id) => {
      setEnteredData((prevData) => {
          const newData = prevData.filter((_, index) => index !== id);
 
          playSound(deletedSound);
          return newData;
      });
  };



    const totalAmount = enteredData.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  


    let totalClass = 'amount';
    if (totalAmount > 0) {
        totalClass = 'amount green';
    } else if (totalAmount < 0) {
        totalClass = 'amount red';
    }

    return (
        <div className="container">
            <h2>Expense Tracker</h2>

            <div className="flex">
                <div className="cont">
                    <p>Income</p>
                    <p>₹{totalAmount > 0 ? totalAmount : 0}</p>
                </div>
                <div className="cont">
                    <p>Expense</p>
                    <p>₹{totalAmount < 0 ? Math.abs(totalAmount) : 0}</p>
                </div>
                <div className="cont">
                    <p>Total</p>
                    <button className={totalClass}>₹{totalAmount}</button>
                </div>
            </div>

            <div className="tracker-box">
                <AddExpense onAddExpense={addExpenseHandler} />
                <div className="history-container">
                    <h3>Expense History</h3>
                    {enteredData.length === 0 ? (
                        <p>No data found</p>
                    ) : (
                        enteredData.map((expense, index) => (
                            <ExpenseHistory 
                                key={index}
                                id={index}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                                time={expense.time}
                                onDelete={deleteExpenseHandler} 
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default ExpenseTracker;



// import  { useState } from 'react';
// import AddExpense from './AddExpense';
// import ExpenseHistory from './ExpenseHistory';
// import './ExpenseTracker.css';

// function ExpenseTracker() {
//     const [enteredData, setEnteredData] = useState([]);


//     const addExpenseHandler = (expense) => {
//         setEnteredData((prevData) => [...prevData, expense]);
//     };


//     const deleteExpenseHandler = (id) => {
//         setEnteredData((prevData) => prevData.filter((_, index) => index !== id));
//     };


//     const totalAmount = enteredData.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);


//     let totalClass = 'amount';
//     if (totalAmount > 0) {
//         totalClass = 'amount green'; 
//     } else if (totalAmount < 0) {
//         totalClass = 'amount red';
//     }

//     return (
//         <div className="container">
//             <h2>Expense Tracker</h2>


//             <div className="flex">
//                 <div className="cont">
//                     <p>Income</p>
//                     <p>₹{totalAmount > 0 ? totalAmount : 0}</p>
//                 </div>
//                 <div className="cont">
//                     <p>Expense</p>
//                     <p>₹{totalAmount < 0 ? Math.abs(totalAmount) : 0}</p>
//                 </div>
//                 <div className="cont">
//                     <p>Total</p>
//                     <button className={totalClass}>₹{totalAmount}</button>
//                 </div>
//             </div>


//             <div className="tracker-box">
//                 <AddExpense onAddExpense={addExpenseHandler} />
//                 <div className="history-container">
//                     <h3>Expense History</h3>
//                     {enteredData.map((expense, index) => (
//                         <ExpenseHistory 
//                             key={index}
//                             id={index}
//                             title={expense.title}
//                             amount={expense.amount}
//                             date={expense.date}
//                             time={expense.time}
//                             onDelete={deleteExpenseHandler} 
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ExpenseTracker;




// import { useState,useEffect } from "react";
// import AddExpense from "./AddExpense";
// import ExpenseHistory from "./ExpenseHistory";
// import "./ExpenseTracker.css";


// function ExpenseTracker () {

// // const [enteredData , setEnteredData] = useState("");
// const [enteredData, setEnteredData] = useState(() => {
//     const savedExpenses = localStorage.getItem("expenses");
//     return savedExpenses ? JSON.parse(savedExpenses) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("expenses", JSON.stringify(enteredData));
//   }, [enteredData]);

// const saveExpenseDataHandler = (enteredExpenseData) => {
//  let expenseData = {
//     ...enteredExpenseData,
//     id:Math.random().toString()

// };

// // console.log(expenseData);
// setEnteredData((prevData) => [...prevData,expenseData]);
// };

// const totalAmount = enteredData.length === 0 ?( <p>0</p>) : (enteredData.reduce((total, expense) => {
//     return  total + parseFloat(+expense.amount)
//   }, 0).toFixed(2) ); 


//   const deleteExpenseHandler = (id) => {
//     setEnteredData((prevData) => prevData.filter((_, index) => index !== id));
// };



// let cs = "amount" ;

// if (totalAmount > 0) {
//    cs = `amount + " " + green`;

// } else if (totalAmount < 0) {
// cs = `amount + " " + red`;

// } else {
//     cs = `amount + " " + white`;
  
// }


//     return (<div className="conatiner">

// <h3 className="white heading">Total Amount</h3>
// <button className={cs}>{totalAmount}</button>

// <div className="flex">

//   <div className="cont">
// <AddExpense onSaveExpenseData={saveExpenseDataHandler} />
// </div>

// <div className="cont">
// <h3 className="white">Expense History</h3>
// {enteredData.length === 0  ? (<p>No data Found</p>) :
//  ( enteredData.map((expense, index) => (
//     <ExpenseHistory 
//       key={index}      
//       title={expense.title} 
//       amount={expense.amount} 
//       date={expense.date} 
//       time={expense.time} 
//       id={index} 
//       className="cont"
//       onDelete={deleteExpenseHandler} 
//     />
//   )))
// }
// </div>
// </div>
//     </div>)

// }


// export default ExpenseTracker;
import { useState } from 'react';
import './AddExpense.css';

function AddExpense(props) {
    const [expenseData, setExpenseData] = useState({
        title: '',
        amount: '',
        date: new Date().toLocaleDateString(), 
        time: new Date().toLocaleTimeString()  
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setExpenseData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    const submitHandler = (event) => {
        event.preventDefault();
        props.onAddExpense(expenseData);
        setExpenseData({ title: '', amount: '', date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString() });
    };

    return (
        <div className="add-expense-container">
            <h3>Add New Expense</h3>
            <form onSubmit={submitHandler}>
                <div className="input-group">
                    <label>Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={expenseData.title} 
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="input-group">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        name="amount" 
                        value={expenseData.amount} 
                        onChange={handleChange}
                        required 
                    />
                </div>
                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
}

export default AddExpense;


// import { useState } from "react";
// import "./AddExpense.css";


// function AddExpense(props) {
//     const [enteredTitle , setEnteredTitle] = useState("");
//     const [enteredAmount , setEnteredAmount] = useState("");
  
// const titleChangeHandler = (e) => {
//     // console.log(e.target.value);
//     setEnteredTitle(e.target.value);
// };

// const amountChangeHandler = (e) => {
//     // console.log(e.target.value);
//     setEnteredAmount(e.target.value);
// }

// const submitHandler = (e) => {
//     e.preventDefault();

//     const expenseData = {
//         title:enteredTitle,
//         amount:enteredAmount,
//         time:new Date().toLocaleTimeString(),
//         date:new Date().toLocaleDateString()

//     }

//     console.log(expenseData);
//     setEnteredAmount("");
//     setEnteredTitle("");
//     props.onSaveExpenseData(expenseData);


// }



//   return (
//     <div className="border">
//       <h3>Add Expense</h3>
//       <form onSubmit={submitHandler}>
//         <div className="new-expene">
//           <label>Expense Details</label>
//           <input type="text" onChange={titleChangeHandler} value={enteredTitle} required/>
//         </div>

//         <div className="new-expene-label">
//           <label>Amount</label>
//           <input type="number" step="1" onChange={amountChangeHandler} value={enteredAmount} required/>
//         </div>

//         <div>
//           <button type="submit">Add Expense</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddExpense;

import './ExpenseHistory.css';
import trashIcon from './trash.png';

function ExpenseHistory({key, id, title, amount, date, time, onDelete}) {
    const deleteExpenseHandler = () => {
        onDelete(id);
    };

    return (
        <div className={`history-box ${parseFloat(amount) > 0 ? 'green' : 'red'}`}>
  
            <div className="details">
                <h4>{title}</h4>
                <p>₹{amount}</p>
                <small>{date} {time}</small>
            </div>

     
            <button onClick={deleteExpenseHandler} className="delete-btn">
            {/* <img src="./assets/trash.png" alt="Delete" className="delete-icon" /> */}
            <img src={trashIcon} alt="Trash" className="delete-icon"/>

            </button>
        </div>
    );
}

export default ExpenseHistory;





// import "./ExpenseHistory.css";

// function ExpenseHistory(props) {

//   let cl = "history-box";
// if ( amount && amount > 0) {
//    cl = `history-box + " " + green`;
// } else if (amount && amount < 0) {
// cl = `history-box + " " + red`;
// } else {
//     cl = `history-box + " " + white`;
// }


// const deleteExpenseHandler = (id) => {
//   onDelete(id); // Pass id to parent to delete the expense
// };


//   return (
//     <div className="flex">
     

//   <div className={cl ? cl :"history-box"}>
//         <div className="border-big">
//         <p>{title}</p>
//         <p>{amount}</p>
//         <p>{date} , {time}</p>
//         <button onClick={() => deleteExpenseHandler(id)}>
//     <i className="fa fa-trash"></i>
// </button>
//         </div>
//         </div>

//     </div>
//   );
// }

// export default ExpenseHistory;

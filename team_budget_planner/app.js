document.getElementById('expForm').addEventListener('submit', addExpense);

// initial array of expenses, reading from localStorage
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function addExpense(e){
    e.preventDefault();

    // get name, and amount
    let name = document.getElementById('name').value;
    let amount = document.getElementById('amount').value;

    if(name.length > 0 
        && amount > 0){
        const expense = {
            name, 
            amount, 
            id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
        }

        expenses.push(expense);
        // localStorage 
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    document.getElementById('expForm').reset();
    showExpenses();
}

const showExpenses = () => {

    const expenseTable = document.getElementById('expenseTable');

    expenseTable.innerHTML = '';

    for(let i = 0; i < expenses.length; i++){
        expenseTable.innerHTML += `
            <tr>
                <td>${expenses[i].name}</td>
                <td>$${expenses[i].amount}</td>
            </tr>
        `;
    }
}

showExpenses();
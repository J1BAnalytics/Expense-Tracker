// JavaScript logic for managing expenses (adding, removing, calculating totals, etc.)
// Example structure for managing expenses

const expenses = [];

// Function to add an expense
function addExpense(description, amount) {
    const expense = {
        description,
        amount
    };
    expenses.push(expense);
}

// Function to remove an expense by index
function removeExpense(index) {
    if (index >= 0 && index < expenses.length) {
        expenses.splice(index, 1);
    }
}

// Function to calculate total expenses
function calculateTotalExpenses() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

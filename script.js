let income = 0;
let expenses = [];
let totalExpenses = 0;

// Set income value
document.getElementById("income").addEventListener("change", (event) => {
    income = parseFloat(event.target.value) || 0;
    document.getElementById("display-income").textContent = `₨ ${income}`;
    updateBalance(); // Call to update balance after income is set
});

// Add an expense
function addExpense() {
    const description = document.getElementById("expense-description").value;
    const amount = parseFloat(document.getElementById("expense-amount").value) || 0;
    
    if (description && amount > 0) {
        expenses.push({ description, amount });
        totalExpenses += amount;
        updateExpensesList();
        updateBalance();  // Call to update balance after adding an expense
    } else {
        alert("Please enter a valid expense description and amount.");
    }

    // Clear input fields
    document.getElementById("expense-description").value = "";
    document.getElementById("expense-amount").value = "";
}

// Update expenses list and total display
function updateExpensesList() {
    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = ""; // Clear current list

    expenses.forEach(expense => {
        const listItem = document.createElement("li");
        listItem.textContent = `${expense.description}: ₨ ${expense.amount}`;
        expenseList.appendChild(listItem);
    });

    document.getElementById("display-expenses").textContent = `₨ ${totalExpenses}`;
}

// Update the remaining balance display and show/hide warning
function updateBalance() {
    const remainingBalance = income - totalExpenses;
    document.getElementById("remaining-balance").textContent = `₨ ${remainingBalance}`;

    const warningMessage = document.getElementById("warning-message");

    console.log("Remaining Balance:", remainingBalance); // Debug line
    if (remainingBalance < 0) {
        console.log("Budget exceeded - Showing warning message"); // Debug line
        warningMessage.classList.remove("hidden"); // Show warning message
    } else {
        console.log("Within budget - Hiding warning message"); // Debug line
        warningMessage.classList.add("hidden"); // Hide warning message
    }
}
function clearAll() {
  // Reset income, expenses, and total expenses
  income = 0;
  expenses = [];
  totalExpenses = 0;

  // Reset display fields
  document.getElementById("income").value = "";
  document.getElementById("display-income").textContent = "₨ 0";
  document.getElementById("expense-description").value = "";
  document.getElementById("expense-amount").value = "";
  document.getElementById("expense-list").innerHTML = "";
  document.getElementById("display-expenses").textContent = "₨ 0";
  document.getElementById("remaining-balance").textContent = "₨ 0";

  // Hide warning message if visible
  const warningMessage = document.getElementById("warning-message");
  warningMessage.classList.add("hidden"); // Hide the warning message
}


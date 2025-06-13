document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseName = document.getElementById('expense-name');
    const expenseAmount = document.getElementById('expense-amount');
    const expenseList = document.getElementById('xpense-list'); // fixed ID
    const totalAmountDisplay = document.getElementById('total-amount'); // target the span

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    renderExpenses();
    updateTotal();

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = expenseName.value.trim();
        const amount = parseFloat(expenseAmount.value);

        if (name !== '' && !isNaN(amount) && amount > 0) {
            const newExpense = {
                id: Date.now(),
                name,
                amount,
            };
            expenses.push(newExpense);
            saveToLocal();
            renderExpenses();
            updateTotal();
            expenseName.value = '';
            expenseAmount.value = '';
        }
    });

    function calculateTotal() {
        return expenses.reduce((sum, exp) => sum + exp.amount, 0);
    }

    function updateTotal() {
        const totalAmount = calculateTotal();
        totalAmountDisplay.textContent = `$ ${totalAmount.toFixed(2)}`;
    }

    function saveToLocal() {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    function renderExpenses() {
        expenseList.innerHTML = '';

        expenses.forEach(element => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${element.name} --- $${element.amount.toFixed(2)}
                <button class="delete-btn" data-id="${element.id}">Delete</button>
            `;
            expenseList.appendChild(li);
        });

        // Attach delete event handlers
        document.querySelectorAll('.delete-btn').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const idToDelete = parseInt(e.target.getAttribute('data-id'));
                expenses = expenses.filter(exp => exp.id !== idToDelete);
                saveToLocal();
                renderExpenses();
                updateTotal();
            });
        });
    }
});

function computeLoan() {

    const amount = document.getElementById('amount').value;
    const interestRate = document.getElementById('interest_rate').value;
    const months = document.getElementById('months').value;

    const interest = amount*( interestRate * 0.01) / months;
    let payment = ((amount / months) + interest).toFixed(2);
    
    document.getElementById('payment').innerHTML = "You will owe " + payment + "$ per month."
    console.log(payment);
};

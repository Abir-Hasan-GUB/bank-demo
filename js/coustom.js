//Login button handler
const login = document.getElementById('login-btn');
login.addEventListener("click", function () {
    const loginArea = document.getElementById('loginAreaPanel');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
})

//deposit button handler
const depositButton = document.getElementById('depositButton');
depositButton.addEventListener("click", function () {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);
    const depositValue = parseFloat(document.getElementById('depositValue').innerText);
    const totalAmount = depositAmount + depositValue;
    document.getElementById('depositValue').innerText = totalAmount;
    document.getElementById('depositAmount').value = '';
    const previousBalence = parseFloat(document.getElementById('previousBalence').innerText);
    document.getElementById('previousBalence').innerText = depositAmount + previousBalence;
})

//withdrow button handler
const withdrawButton = document.getElementById('withdrawButton');
withdrawButton.addEventListener("click", function () {
    const withdrawValue = parseFloat(document.getElementById('withdrawValue').value);
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').innerText);
    const totalWithdraw = withdrawAmount + withdrawValue;
    document.getElementById('withdrawValue').value = '';
    document.getElementById('withdrawAmount').innerText = totalWithdraw;
    const currentBalence = parseFloat(document.getElementById('previousBalence').innerText);
    const updateBalence = currentBalence - totalWithdraw;
    document.getElementById('previousBalence').innerText = updateBalence;

})
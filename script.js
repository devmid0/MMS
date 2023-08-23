function divideAmount() {
    const amount = parseFloat(document.getElementById("amount").value);
    const share = (amount / 3).toFixed(2);

    document.getElementById("personalShare").textContent = share;
    document.getElementById("investmentsShare").textContent = share;
    document.getElementById("liabilitiesShare").textContent = share;
}
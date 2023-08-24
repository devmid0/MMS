function divideAmount() {
    const amount = parseFloat(document.getElementById("amount").value);
    const personal = (amount * 0.25).toFixed(2);
    const investments = (amount * 0.15).toFixed(2);
    const liabilities = (amount * 0.60).toFixed(2);

    document.getElementById("personal").textContent = personal;
    document.getElementById("investments").textContent = investments;
    document.getElementById("liabilities").textContent = liabilities;
}
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        divideAmount();
    }
});
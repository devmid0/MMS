function divideAmount() {
    const amount = parseFloat(document.getElementById("amount").value);
    const share = (amount / 3).toFixed(2);

    document.getElementById("personalShare").textContent = parseFloat(share) !== 0 ? share : "-";
    document.getElementById("investmentsShare").textContent = parseFloat(share) !== 0 ? share : "-";
    document.getElementById("liabilitiesShare").textContent = parseFloat(share) !== 0 ? share : "-";
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        divideAmount();
    }
});

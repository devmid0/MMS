function handleButtonClick() {
    const amount = parseFloat(document.getElementById("amount").value);

    if (isNaN(amount) || amount < 0) {
        return;
    }

    const total = Math.floor(amount * 0.3);
    const charity = Math.floor(amount * 0.1);
    const remainingAmount = amount - ((total + charity) * 3);

    document.getElementById("liabilities").textContent = total + " جنية";
    document.getElementById("investments").textContent = total + " جنية";
    document.getElementById("personal").textContent = total + " جنية";
    document.getElementById("charity").textContent = charity + " جنية";

    const button = document.getElementById("divideButton");
    button.disabled = true;

    document.getElementById("amount").value = "";
}

document.getElementById("amount").addEventListener("input", function () {
    const button = document.getElementById("divideButton");
    button.disabled = isNaN(parseFloat(this.value));
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleButtonClick();
    }
});

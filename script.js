function handleButtonClick() {
    const amount = parseFloat(document.getElementById("amount").value);

    if (isNaN(amount) || amount < 0) {
        return;
    }

    const share = Math.floor(amount * 0.33); 
    const charity = Math.floor(amount * 0.01);
    const remainingAmount = amount - ((share + charity) * 3);

    document.getElementById("liabilities").textContent = share + " جنية";
    document.getElementById("investments").textContent = share + " جنية";
    document.getElementById("personal").textContent = share + " جنية";
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

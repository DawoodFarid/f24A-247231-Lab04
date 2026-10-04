const form = document.querySelector("#tillForm");
const result = document.querySelector("#result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const bill = Number(document.querySelector("#bill").value);
    const paid = Number(document.querySelector("#paid").value);

    const change = getChange(paid, bill);

    if (paid < bill) {
        result.innerHTML = `
            <p>Still owed: ${Math.abs(change)}</p>
        `;
    } else {
        result.innerHTML = `
            <p>Change: ${change}</p>
            <p>Half of change: ${change / 2}</p>
        `;
    }
});

function getChange(paid, bill) {
    return paid - bill;
}
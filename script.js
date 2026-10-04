const rows = [];

const form = document.querySelector("#itemForm");
const sheet = document.querySelector("#sheet");

function drawTable() {
    sheet.innerHTML = "";

    rows.forEach(row => {
        sheet.innerHTML += `
            <tr>
                <td>${row.item}</td>
                <td>${row.quantity}</td>
                <td>${row.price}</td>
                <td>${row.line}</td>
                <td>${row.note}</td>
            </tr>
        `;
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const item = document.querySelector("#item").value || undefined;
    const quantity = Number(document.querySelector("#quantity").value);
    const price = document.querySelector("#price").value;

    const row = {
        item: item,
        quantity: quantity,
        price: price,
        line: quantity * Number(price),
        note: price + " " + quantity
    };

    rows.push(row);

    drawTable();

    document.querySelector("#item").value = "";
    document.querySelector("#quantity").value = "";
    document.querySelector("#price").value = "";
});
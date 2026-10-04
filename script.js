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

function updateTotal() {
    let total = 0;

    rows.forEach(row => {
        if (typeof row.line === "number" && !Number.isNaN(row.line)) {
            total += row.line;
        }
    });

    document.querySelector("#total").textContent = total;
    document.querySelector("#totalKind").textContent = typeof total;

    if (rows.length > 0) {
        const lastRow = rows[rows.length - 1];

        document.querySelector("#noteKind").textContent = typeof lastRow.note;

        const priceNumber = Number(lastRow.price);

        document.querySelector("#priceMatch").textContent =
            lastRow.price == priceNumber;

        document.querySelector("#sameKind").textContent =
            typeof lastRow.price === typeof priceNumber;

        if (Number.isNaN(lastRow.line)) {
            document.querySelector("#lineKind").textContent =
                typeof lastRow.line;
        } else {
            document.querySelector("#lineKind").textContent = "";
        }
    }
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
    updateTotal();

    document.querySelector("#item").value = "";
    document.querySelector("#quantity").value = "";
    document.querySelector("#price").value = "";
});
const rows = [];

const sheet = document.querySelector("#sheet");

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
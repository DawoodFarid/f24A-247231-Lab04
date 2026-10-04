const people = [];

const nameBox = document.querySelector("#name");
const hereButton = document.querySelector("#here");
const outButton = document.querySelector("#out");
const peopleList = document.querySelector("#peopleList");
const count = document.querySelector("#count");

function showPeople() {
    peopleList.innerHTML = "";

    let inCount = 0;

    people.forEach(person => {
        peopleList.innerHTML += `
            <p>${person.name} - ${person.status}</p>
        `;

        if (person.status === "In") {
            inCount++;
        }
    });

    count.textContent = inCount;
}

hereButton.addEventListener("click", function() {
    const name = nameBox.value;

    people.push({
        name: name,
        status: "In"
    });

    showPeople();
    nameBox.value = "";
});

outButton.addEventListener("click", function() {
    const name = nameBox.value;

    people.push({
        name: name,
        status: "Out"
    });

    showPeople();
    nameBox.value = "";
});
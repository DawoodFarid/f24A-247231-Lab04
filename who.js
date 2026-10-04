const people = [];

const nameBox = document.querySelector("#name");
const hereButton = document.querySelector("#here");
const outButton = document.querySelector("#out");
const peopleList = document.querySelector("#peopleList");

function showPeople() {
    peopleList.innerHTML = "";

    people.forEach(person => {
        peopleList.innerHTML += `
            <p>${person.name} - ${person.status}</p>
        `;
    });
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
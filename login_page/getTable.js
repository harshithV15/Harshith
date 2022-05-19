async function getData() {
    let tableItems = [];
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            tableItems = data;
        });

    let tableBody = document.getElementById('data');
    let tr;
    for (let items in tableItems) {
        tr = document.createElement("tr");
        tr.innerHTML = "<td>" + tableItems[items].userId + "</td>" + "<td>" + tableItems[items].id + "</td>" + "<td>" + tableItems[items].title + "</td>" + "<td>" + tableItems[items].body + "</td>";
        tableBody.appendChild(tr);
    }
}
getData()
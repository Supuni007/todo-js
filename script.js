const txtTask = document.getElementById("txtTask");
const sub = document.getElementById("sub");
const results = document.getElementById("results");

sub.addEventListener("click", function(e) {
    e.preventDefault()
    const listItem = document.createElement("li");
    const addItem = document.createElement("span");
    const deleteButton = document.createElement("button");
    const doneButton = document.createElement("button");

    addItem.classList.add("item");
    addItem.innerText = txtTask.value;
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Del";
    doneButton.classList.add("done");
    doneButton.innerText = "Done";

    listItem.appendChild(addItem);
    listItem.appendChild(doneButton);
    listItem.appendChild(deleteButton);
    results.appendChild(listItem);

    deleteButton.addEventListener("click", function() {
        results.removeChild(listItem);
    });

    doneButton.addEventListener("click", function() {
        const span = listItem.querySelector(".item");
        span.style.color = "#ADFF2F";
        span.style.textDecoration = "line-through";
    });
})
const txtTask = document.getElementById("te=xtTask");
const sub = document.getElementById("sub");
const results = document.getElementById("results");

sub.addEventListener("click", function() {
    const listItem = document.createElement("li");
    const addItem = document.createElement("span");
    const deleteButton = document.createElement("button");
    const doneButton = document.createElement("button");

    addItem.classList.add("item");
    deleteButton.classList.add("delete");
    doneButton.classList.add("done");
})
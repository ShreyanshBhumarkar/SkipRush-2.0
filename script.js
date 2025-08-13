let queue = JSON.parse(localStorage.getItem("queue")) || [];

function getToken() {
  let name = document.getElementById("name-input").value.trim();
  if (name === "") {
    alert("Please enter your name");
    return;
  }
  
  queue.push(name);
  localStorage.setItem("queue", JSON.stringify(queue));
  document.getElementById("name-input").value = "";
  updateQueueDisplay();
}

function updateQueueDisplay() {
  let list = document.getElementById("queue-list");
  if (!list) return; // page might not have a queue list
  list.innerHTML = "";
  queue.forEach((person, index) => {
    let item = document.createElement("li");
    item.textContent = `#${index + 1} - ${person}`;
    list.appendChild(item);
  });
}

function callNext() {
  if (queue.length === 0) {
    alert("No one is in the queue");
    return;
  }
  let nextPerson = queue.shift();
  alert(`Calling: ${nextPerson}`);
  localStorage.setItem("queue", JSON.stringify(queue));
  updateQueueDisplay();
}

document.addEventListener("DOMContentLoaded", updateQueueDisplay);

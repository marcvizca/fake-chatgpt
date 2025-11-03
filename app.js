
const chats_list = ["Title 1", "Title 2", "Chat number 3", "Chat number 4"];

const list = document.getElementById("list");
const messages = [];

// show the chats in the list
for (let i = 0; chats_list.length > i; i++) {
    const item = document.createElement("li");
    item.textContent = chats_list[i];
    list.appendChild(item);
}

document.addEventListener("DOMContentLoaded", detectEnter);

function detectEnter() {
  const input = document.getElementById("searchInput");

  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      messages.push =  input.value;
      input.value = '';
    }
  });
}
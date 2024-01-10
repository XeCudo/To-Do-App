const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('listContainer');
var checkbox = document.getElementById("theme-checkbox");

function addTask() {
    if (inputBox.value === '') {
      alert('You must write something!');
    } else {
      let li = document.createElement('li');
      li.innerHTML = '<button class="toggleBtn" onclick="makeChecked(event)"></button><p>' + inputBox.value + '</p><button class="deleteTask" onclick="deleteTask(event)"></button>';
      li.classList.add("fade-in");
      li.classList.add("listItem");
      li.id = "listItem";
      listContainer.appendChild(li);
      inputBox.value = '';
      saveData();
    }
  };

function makeChecked(event){
    var button = event.target;
    var listItem = button.parentElement;
    
    listItem.classList.toggle("textChecked");

    if (listItem.classList.contains("textChecked")) {
        button.classList.add("toggleBtnChecked");
        saveData();
      } else {
        button.classList.remove("toggleBtnChecked");
        saveData();
      }
};

function deleteTask(event) {
  var button = event.target;
  var listItem = button.parentElement;
  listItem.classList.remove('fade-in')
  listItem.classList.add('fade-out');
  setTimeout(function() {
    listItem.parentNode.removeChild(listItem);
    saveData();
  }, 300); 
};

// submit with enter 

document.getElementById("inputBox").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); 
      document.getElementById("addBtn").click(); 
    }
  });

// dark mode enable

function toggleTheme() {
const todoApp = document.getElementById("todoApp");
var ul = document.querySelector("ul");
var liElements = ul.querySelectorAll("li");

if (checkbox.checked) {
  todoApp.classList.add("todoAppDark")
  inputBox.classList.add("taskInputDark")
  liElements.forEach(function(li) {
    li.classList.add("listItemDark");
  });

} else {
  todoApp.classList.remove("todoAppDark")
  inputBox.classList.remove("taskInputDark")
  liElements.forEach(function(li) {
    li.classList.remove("listItemDark");
  });
}
};

// save data 

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function restoreData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
restoreData();



  


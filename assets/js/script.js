const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('listContainer');


function addTask() {
    if (inputBox.value === '') {
      alert('You must write something!');
    } else {
      let li = document.createElement('li');
      li.innerHTML = '<button class="toggleBtn" onclick="makeChecked(event)"></button><p>' + inputBox.value + '</p><button class="deleteTask" onclick="deleteTask(event)"></button>';
      li.classList.add("fade-in");
      listContainer.appendChild(li);
      inputBox.value = '';
      saveData();
    }
  }

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
}

function deleteTask(event) {
  var button = event.target;
  var listItem = button.parentElement;
  listItem.classList.remove('fade-in')
  listItem.classList.add('fade-out'); // Add 'fade-out' class to the list item
  setTimeout(function() {
    listItem.parentNode.removeChild(listItem);
    saveData();
  }, 300); // Delay the removal of the list item for 300ms (0.3 seconds)
}

document.getElementById("inputBox").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); // Prevent the default form submission
      document.getElementById("addBtn").click(); // Trigger the click event of the add button
    }
  });

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function restoreData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
restoreData();



  


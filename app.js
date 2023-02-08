      let addTaskButton = document.getElementById("addTaskButton");
      let newTask = document.getElementById("newTask");
      let tasksList = document.getElementById("tasksList");

      function createTask(taskText) {
        let li = document.createElement("li");
        let div = document.createElement("div");
        let span = document.createElement("span");
        let checkbox = document.createElement("input");
        let deleteButton = document.createElement("button");
        let editButton = document.createElement("button");
  
        span.style.fontFamily = "Arial, sans-serif";
        span.style.color = "#FFFFFF";
        span.style.width ="70%";
        checkbox.type = "checkbox";
        span.innerHTML = taskText;
        deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        editButton.innerHTML = `<i class="fa-solid fa-file-pen"></i>`;
        div.className= "boxList"
        editButton.className="editB"
        deleteButton.className="deleteB"
  
        div.appendChild(checkbox);
        div.appendChild(span);
        div.appendChild(deleteButton);
        div.appendChild(editButton);
  
        li.appendChild(div);
        tasksList.appendChild(li);
  
        checkbox.addEventListener("change", function() {
          if (checkbox.checked) {
            span.style.textDecoration = "line-through";
          } else {
            span.style.textDecoration = "none";
          }
        });
  
        deleteButton.addEventListener("click", function() {
          li.remove();
        });
  
        editButton.addEventListener("click", function() {
          let newTaskText = document.createElement("input");
          newTaskText.value = span.innerHTML;
          div.replaceChild(newTaskText, span);
          newTaskText.focus();
          
          newTaskText.addEventListener("focus", function() {
            span.innerHTML = newTaskText.value;
            div.replaceChild(span, newTaskText);
          });
        });
        
      }
  
      addTaskButton.addEventListener("click", function() {
        let taskText = newTask.value;
        createTask(taskText);
        newTask.value = "";
      });
document.addEventListener('DOMContentLoaded', function() {
    var addTaskButton = document.getElementById("addTaskButton");
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var removeFinishedTasksButton = document.getElementById("removeFinishedTasksButton");
    var span = document.getElementById("counter");
    var counter = 0;

    addTaskButton.addEventListener("click", function() {
        var valueInput = taskInput.value;
        if (validateInput(valueInput) === false) {
            return;
        };
        var li = document.createElement("li");
        var h1 = document.createElement("h1");
        var node = document.createTextNode(valueInput);
        var button = document.createElement("button");
        var complete = document.createElement("button");

        taskList.appendChild(li);
        counter++;
        span.innerText = counter;
        li.appendChild(h1);
        var bgh1 = h1.appendChild(node);
        var buttonDelete = li.appendChild(button);
        var buttonComplete = li.appendChild(complete);
        button.innerText = "Delete";
        complete.innerText = "Complete";

        buttonComplete.addEventListener("click", function() {
            bgh1.parentNode.parentNode.classList.add("complete")
        })

        buttonDelete.addEventListener("click", function() {
            li.parentNode.removeChild(li);
            counter--;
            span.innerText = counter;
        })
        taskInput.value = "";
    });

    removeFinishedTasksButton.addEventListener("click", function() {
        var liComplete = document.querySelectorAll(".complete");
        for (var i = 0; i < liComplete.length; i++) {
            if (liComplete[i].className === "complete") {
                liComplete[i].parentNode.removeChild(liComplete[i]);
            }
        }
        counter--;
        span.innerText = counter;
    });

    function validateInput(valueInput) {
        if (valueInput.length < 5 || valueInput.length > 100) {
            return false;
        } else {
            return true;
        }



    };

});

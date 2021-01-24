window.onload = () => {
    NotifyEmptyList()
}

AddNewTaskToList = () => {
    if (document.querySelector("#task-input-box").value.length > 0) {
        let NewTaskList = document.createElement("li")
        NewTaskList.classList.add("list-item")

        let NewCheckbox = document.createElement("input")
        NewCheckbox.setAttribute("type", "checkbox")
        NewCheckbox.classList.add("checkbox")

        NewTaskList.innerText = document.querySelector("#task-input-box").value


        NewTaskList.addEventListener("click", (clickEvent) => {
            clickEvent.currentTarget.classList.toggle("task-completed")
            document.querySelectorAll(" .list-item.task-completed").forEach(item => item.children[0].checked = true)
            document.querySelectorAll(".list-item:not(.task-completed)").forEach(item => item.children[0].checked = false)
            ShowOnlyPendingTasks()
        })

        document.querySelector(".task-list").appendChild(NewTaskList)
        document.querySelector(".task-list .list-item:last-child").prepend(NewCheckbox)
        document.querySelector("#task-input-box").value = null
    }
    else {
        alert('Note: No new task to be added. ')
    }

    if (document.querySelectorAll(".list-item").length > 0) {
        let NotifyEmptyList = document.querySelector('.task-input-section #notify-empty-list')
        NotifyEmptyList.innerHTML = ""
    }
}

ClearTaskList = () => {
    if (document.querySelectorAll(".list-item").length > 0) {
        if (confirm("Are you sure about clearing all tasks ?")) {
            document.querySelectorAll(".list-item").forEach(item => item.parentNode.removeChild(item))
        }
    }
    else {
        alert("Note: Task list already empty.")
    }
    NotifyEmptyList()
}

NotifyEmptyList = () => {
    let NotifyEmptyList = document.querySelector('.task-input-section #notify-empty-list')
    NotifyEmptyList.innerHTML = "Task list is empty. Enter above to add tasks."
    NotifyEmptyList.style.color = "grey"
}

ShowOnlyPendingTasks = () => {
    if (document.querySelector(".task-input-section .only-pending-task").checked) {
        let CompletedTasks = document.querySelectorAll(".task-list .list-item.task-completed")
        CompletedTasks.forEach(item => item.classList.add("hide"))
        CheckAllTasksCompleted()
    }
    else {
        let CompletedTasks = document.querySelectorAll(".task-list .list-item.task-completed")
        CompletedTasks.forEach(item => item.classList.remove("hide"))
        CheckAllTasksCompleted()
    }

}

CheckAllTasksCompleted = () => {
    let TaskList = document.querySelectorAll(".task-list .list-item")
    let CompletedList = document.querySelectorAll(".task-list .list-item.task-completed.hide")
    if (TaskList.length > 0) {
        if (TaskList.length == CompletedList.length) {
            let NotifyCompleted = document.querySelector('.task-input-section #notify-empty-list')
            NotifyCompleted.innerHTML = "All tasks have been completed. Unhide to see all tasks."
            NotifyCompleted.style.color = "green"
        }
        else {
            let NotifyCompleted = document.querySelector('.task-input-section #notify-empty-list')
            NotifyCompleted.innerHTML = ""
        }    
    }
}
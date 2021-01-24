window.onload = () => {
    NotifyEmptyList()
}

AddNewTaskToList = () => {
    if (document.querySelector("#task-input-box").value.length > 0) {
        let NewTaskList = document.createElement("li")
        NewTaskList.classList.add("list-item")
        NewTaskList.innerText = document.querySelector("#task-input-box").value

        NewTaskList.addEventListener("click", (clickEvent) => {
            clickEvent.currentTarget.classList.toggle("task-completed")
        })

        document.querySelector(".task-list").appendChild(NewTaskList)
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
        document.querySelectorAll(".list-item").forEach(item => item.parentNode.removeChild(item))
    }
    else {
        alert("Note: Task list already empty.")
    }
    NotifyEmptyList()
}

NotifyEmptyList = () => {
    let NotifyEmptyList = document.querySelector('.task-input-section #notify-empty-list')
    NotifyEmptyList.innerHTML = "Task list is empty. Enter above to add tasks."
}
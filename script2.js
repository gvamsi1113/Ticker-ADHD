const tasksData = [
    // Quick Tasks
    { name: "Research for Drivers License", category: "Quick", hours: [2, 5, 10], details: "Researching the process for obtaining a driver's license." },
    { name: "Plan a weekend getaway", category: "Quick", hours: [2, 4, 6], details: "Planning a short trip to relax and explore." },
  
    // Routine Tasks
    { name: "Read 1 hr", category: "Routine", hours: [1, 7, 30], details: "Dedicated reading time for personal development." },
    { name: "Write 1 Hr", category: "Routine", hours: [1, 5, 30], details: "Allocating time for writing projects or journals." },
  
    // Scheduled Tasks
    { name: "File Taxes before April", category: "Scheduled", hours: [8, 12, 20], details: "Preparing and filing annual tax returns." },
    { name: "Get Transcripts for USCIS", category: "Scheduled", hours: [3, 6, 8], details: "Requesting academic transcripts for immigration purposes." },
  
    // Project Tasks
    { name: "ADHD App", category: "Project", hours: [10, 40, 100], details: "Developing an app to help manage ADHD symptoms." },
    { name: "Complete Meta Frontend Certificate", category: "Project", hours: [25, 50, 80], details: "Earning a certificate in frontend development." },
    { name: "Update Resume and LinkedIn", category: "Project", hours: [4, 8, 10], details: "Updating professional profiles and resume." }
];



function updateClock() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock-heading').textContent = hours + ':' + minutes + ':' + seconds;
}

setInterval(updateClock, 200);
updateClock();



// adding tasks

// Assuming tasksData is globally accessible

function addNewTask() {
    const tasksContainer = document.querySelector('.task-list');

    
    var firstExistingTask = taskContainer.firstChild;
}


function renderTasks() {
    const tasksContainer = document.querySelector('.task-list');
    // Clear existing tasks before re-rendering
    tasksContainer.innerHTML = '';

    tasksData.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
        <div class="task-content">
            <button class="task-icon task-done">
                <img src="images/tasks_icon.svg" alt="Task Done Icon" aria-label="Task Done">
            </button>
            <h4>${task.name}</h4>
            <button class="task-icon task-play">
                <img src="images/play_icon.svg" alt="Task Details Icon" aria-label="Focus task">
            </button>
            <button class="task-icon details-toggle" onclick="toggleDetails(this)">
                <img src="images/expand_icon.svg" alt="Task Details Icon" aria-label="Task Details">
            </button>
            <button class="task-icon task-delete" onclick="deleteTask(event, ${index})">
                <img src="images/delete_icon.svg" alt="Delete Task Icon" aria-label="Delete Task">
            </button>
        </div>
        <div class="task-details">
            <div class="hours">
                <h4>${task.hours[0]}</h4>
                <h4>${task.hours[1]}</h4>
                <h4>${task.hours[2]}</h4>
            </div>
            <p>${task.details}</p>
        </div>
        `;

        tasksContainer.appendChild(taskElement);
    });
}

function deleteTask(event, index) {
    // event.stopPropagation(); // Prevent the details toggle

    // Remove the task from the tasksData array
    if (index >= 0 && index < tasksData.length) {
        tasksData.splice(index, 1);
    }

    // Re-render tasks to reflect changes
    renderTasks();
}
// Call renderTasks initially to render the tasks on page load
document.addEventListener('DOMContentLoaded', renderTasks);





// Task Details Drop Down


function toggleDetails(button) {
    var content = button.closest('.task').querySelector('.task-details');
    const img = button.querySelector('img');
    // img.src = img.src === 'images/expand_icon.svg' ? 'images/compress_icon.svg' : 'images/expand_icon.svg';
    
    // Check if content is expanded
    if (content.style.height === '0px' || content.style.height === '') {
        // Set to scrollHeight to expand content
        content.style.height = content.scrollHeight + "px";
        img.src = 'images/compress_icon.svg';
    } else {
        // Set to 0 to collapse content
        content.style.height = '0';
        img.src = 'images/expand_icon.svg';
    }
}

  
  
function deleteTask(event, index) {
    // Prevent the details toggle when clicking the delete button
    event.stopPropagation();

    // Remove the task from the DOM
    const taskElement = document.querySelector(`.task[data-task-index="${index}"]`);
    if (taskElement) {
        taskElement.remove();
    }

    // Optional: Update tasksData array if managing state (not shown here)
}

// document.addEventListener("DOMContentLoaded", function() {
//     var startPauseButton = document.getElementById('startPauseBtn');
//     var timerDisplay = document.getElementById('clock');

//     var countdownDuration = 50 * 60; // 1 hour in seconds
//     var endTime = null;
//     var timer = null;

//     startPauseButton.addEventListener('click', function() {
//         if (timer) {
//             // Pause the timer
//             clearInterval(timer);
//             timer = null;
//             startPauseButton.textContent = 'Resume';
//             countdownDuration -= Math.floor((new Date() - endTime) / 1000); // Adjust remaining duration
//         } else {
//             // Start or resume the timer
//             endTime = new Date(new Date().getTime() + countdownDuration * 1000);
//             timer = setInterval(updateTimer, 1000);
//             startPauseButton.textContent = 'Pause';
//         }
//     });

//     function updateTimer() {
//         var now = new Date();
//         var remaining = endTime - now;

//         if (remaining <= 0) {
//             clearInterval(timer);
//             timerDisplay.textContent = '00:00:00';
//             alert('Countdown finished!');
//             return;
//         }

//         var hours = Math.floor(remaining / 3600000).toString().padStart(2, '0');
//         var minutes = Math.floor((remaining % 3600000) / 60000).toString().padStart(2, '0');
//         var seconds = Math.floor((remaining % 60000) / 1000).toString().padStart(2, '0');

//         timerDisplay.textContent = hours + ':' + minutes + ':' + seconds;
//     }
// });



// initial call to display clock immediately
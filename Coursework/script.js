const activityForm = document.getElementById('activity-form');
const activitiesDiv = document.getElementById('activities');
const startWorkoutButton = document.getElementById('start-workout');

let activities = [];
let currentActivity = null;
let timer = null;

activityForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const duration = document.getElementById('duration').value;

  const activity = { name, description, duration };
  activities.push(activity);

  const activityDiv = document.createElement('div');
  activityDiv.className = 'activity';
  activityDiv.textContent = `${name} - ${description} - ${duration} seconds`;
  activitiesDiv.appendChild(activityDiv);

  activityForm.reset();
});

startWorkoutButton.addEventListener('click', function() {
  startWorkout();
});

function startWorkout() {
  if (activities.length === 0) {
    alert('No activities to start.');
    return;
  }

  currentActivity = 0;
  startActivity();
}

function startActivity() {
  const activity = activities[currentActivity];
  alert(`Start ${activity.name}`);

  timer = setTimeout(function() {
    alert(`Finished ${activity.name}`);
    currentActivity++;

    if (currentActivity < activities.length) {
      startActivity();
    } else {
      alert('Workout finished.');
    }
  }, activity.duration * 1000);
}
// Define a function to create an activity object
function createActivity(name, description, duration) {
    return {
        name: name,
        description: description,
        duration: duration
    };
}

// Define a function to create a workout object
function createWorkout() {
    return {
        activities: [], // Array to store activities
        currentActivityIndex: 0, // Index of the current activity
        timerId: null, // Timer ID for the setInterval function

        // Method to add an activity to the workout
        addActivity: function(activity) {
            this.activities.push(activity);
        },

        // Method to start the workout
        start: function() {
            if (this.activities.length === 0) {
                console.log("No activities in the workout.");
                return;
            }

            this.stop(); // Stop any ongoing workout

            // Start a timer that executes every second
            this.timerId = setInterval(() => {
                const currentActivity = this.activities[this.currentActivityIndex];
                console.log(`Doing ${currentActivity.name} for ${currentActivity.duration} seconds`);

                this.currentActivityIndex++; // Move to the next activity

                // Check if all activities have been completed
                if (this.currentActivityIndex >= this.activities.length) {
                    this.stop(); // Stop the workout
                }
            }, 1000);
        },

        // Method to stop the workout
        stop: function() {
            if (this.timerId) {
                clearInterval(this.timerId); // Clear the interval timer
                this.timerId = null;
                this.currentActivityIndex = 0; // Reset the current activity index
            }
        },

        // Method to pause the workout
        pause: function() {
            if (this.timerId) {
                clearInterval(this.timerId); // Clear the interval timer
                this.timerId = null;
            }
        }
    };
}
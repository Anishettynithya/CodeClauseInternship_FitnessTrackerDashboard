document.addEventListener('DOMContentLoaded', function () {
    // Chart.js - Weekly Fitness Progress
    const ctx = document.getElementById('fitnessChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Calories Burned',
                data: [500, 700, 600, 800, 900, 750, 650],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        }
    });

    // Simulate step counting and calorie tracking
    let steps = 0;
    let calories = 0;
    setInterval(() => {
        steps += Math.floor(Math.random() * 50);
        calories += Math.floor(Math.random() * 5);
        document.getElementById('steps').innerText = steps;
        document.getElementById('calories').innerText = calories + " kcal";
    }, 2000);
});

// Fetch a workout recommendation
function fetchWorkout() {
    document.getElementById('workout').innerText = "Recommended Workout: 30 min running, 20 push-ups, 15 squats";
}
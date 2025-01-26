// Select the button element
const askButton = document.getElementById('askButton');
// Select the activity element
const activityElement = document.getElementById('activity');

// Array of all activities
const allActivities = [
    {text: "Go for a walk", link: null},
    {text: "Practice deep breathing for 10 minutes", link: null},
    {text: "Practice yoga for 20 minutes", link: "https://www.youtube.com/@yogawithadriene", comment: "Check out 'Yoga with Adriene' YouTube channel for great yoga videos!"},
    {text: "Read a book for 30 min", link: "https://amzn.to/3W2qLpt", comment: "Check out the Amazon kindle store for the latest bestsellers"},
    {text: "Watch a Ted talk", link: "https://www.ted.com/talks", comment: "Explore inspiring talks on various topics"},
    {text: "Call/message a relative/friend", link: null},
    {text: "Listen to calming music for 10 minutes", link: null},
    {text: "Try a digital detox for 2 hours", link: null},
    {text: "Dance to your favorite song", link: null},
    {text: "Try mindful eating for the day", link: null},
    {text: "Take a power nap", link: null},
    {text: "Try a new workout", link: null},
    {text: "Visit a park", link: null},
    {text: "Meditate for 10 minutes", link: null},
    {text: "Do a mini workout", link: "https://amzn.to/3S3chVl", comment: "Pump It Up, Keep It Brief: Dumbbell Magic!"},
    {text: "Watch a comedy show", link: null}, 
    {text: "Enjoy herbal tea", link: "https://amzn.to/4f3Z1tf", comment: "Infuse Your Day: Herbal Tea Magic"},
    {text: "Listen to uplifting podcast", link: null}, 
    {text: "Hug someone or give yourself a biiiig hug for 2 min", link: null},
    {text: "Do a random act of kindness",link: null},
    {text: "Take a relaxing bath or shower",link: null},
    {text: "Call someone you haven't talked to for a while",link: null},
    {text: "Go for a walk and take a photo of something interesting",link: null},
    {text: "Practice balance exercises for 10 minutes",link: null},
    {text: "Try a new healthy recipe",link: null},
    {text: "Watch a video about space",link: null},
    {text: "Look through your childhood photos",link: null},
    {text: "Do a puzzle or brain teaser", link: "https://www.nytimes.com/games/wordle/index.html", comment: "Try out this amazing word puzzle!"},
    {text: "Go stargazing or cloud watching for 10 minutes",link: null},
    {text: "Watch your favorite movie",link: null},    
        
    ];

// Array to keep track of remaining activities
let remainingActivities = [...allActivities];


function getRandomActivity() {
    if (remainingActivities.length === 0) {
        remainingActivities = [...allActivities];
        alert("Enjoy today's activity and we will see you again tomorrow :) Have a great day!");
    }
    
    const randomIndex = Math.floor(Math.random() * remainingActivities.length);
    const activity = remainingActivities[randomIndex];
    
    remainingActivities.splice(randomIndex, 1);
    
    return activity;
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize progress tracker
    const progressTracker = new ProgressTracker();
    
    // Get DOM elements
    const askButton = document.getElementById('askButton');
    const activityBox = document.getElementById('activityBox');
    const activityText = document.getElementById('activity');
    const completeButton = document.getElementById('completeActivity');
    const message = document.getElementById('message');

    askButton.addEventListener('click', function() {
        // Clear any previous messages
        message.textContent = '';
        
        // Get a random activity
        const activity = getRandomActivity();
        
        // Generate activity HTML
        let activityHtml = `<h2 class="activity-text h2">${activity.text}</h2>`;
        
        if (activity.link) {
            activityHtml += `<p class="activity-link">Genie's Recommendation: <a href="${activity.link}" target="_blank">Click here</a></p>`;
        }
        
        if (activity.comment) {
            activityHtml += `<p class="activity-comment"><em>${activity.comment}</em></p>`;
        }
        
        // Update the activity text
        activityText.innerHTML = activityHtml;
        
        // Show activity box and complete button
        activityBox.removeAttribute('hidden');
        completeButton.removeAttribute('hidden');
        
        // Enable ask button (in case it was disabled)
        askButton.removeAttribute('disabled');
        
        // Change button text
        document.getElementById("activityButtonText").textContent = "Ask again";
    });
});

const shareButton = document.getElementById('shareButton');

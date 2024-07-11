// Select the button element
const askButton = document.getElementById('askButton');
// Select the activity element
const activityElement = document.getElementById('activity');

// Array of all activities
const allActivities = [
    {text: "Go for a walk", link: null},
    {text: "Practice deep breathing for 10 minutes", link: null},
    {text: "Practice yoga for 20 minutes", link: "https://www.youtube.com/@yogawithadriene", comment: "Check out 'Yoga with Adriene' YouTube channel for great yoga videos!"},
    {text: "Read a book", link: "https://www.amazon.com/b?node=133140011", comment: "Check out the Amazon kindle store for the latest bestsellers"},
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
    {text: "Do a mini workout", link: null},
    {text: "Watch a comedy show", link: null}, 
    {text: "Enjoy herbal tea", link: "https://www.amazon.com/s?k=herbal+tea&crid=2PUXZW9QTV24D&sprefix=herbal+tea%2Caps%2C218&ref=nb_sb_noss_1", comment: "Check out the Amazon store for some great tea flavours"}, 
    {text: "Listen to uplifting podcast", link: null}, 
    {text: "Watch a sunset", link: null},
    {text: "Do a random act of kindness",link: null},
    {text: "Take a relaxing bath or shower",link: null},
    {text: "Call someone you haven't talked to for a while",link: null},
    {text: "Go for a walk and take a photo of something interesting",link: null},
    {text: "Practice balance exercises for 10 minutes",link: null},
    {text: "Try a new healthy recipe",link: null},
    {text: "Watch a video about space",link: null},
    {text: "Look through your childhood photos",link: null},
    {text: "Do a puzzle or brain teaser", link: "https://www.nytimes.com/games/wordle/index.html", comment: "Try out this amazing puzzle!"},
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

askButton.addEventListener('click', function() {
    const activity = getRandomActivity();
    
    let activityHtml = `<p class="activity-text">${activity.text}</p>`;
    
    if (activity.link) {
        activityHtml += `<p class="activity-link">Genie's Recommendation: <a href="${activity.link}" target="_blank">Click here</a></p>`;
    }
    
    if (activity.comment) {
        activityHtml += `<p class="activity-comment">${activity.comment}</p>`;
    }
    
    activityHtml += `<p class="encouragement">Enjoy today's activity and we will see you again tomorrow :) Have a great day!</p>`;
    
    activityElement.innerHTML = activityHtml;

    // Change button text
    askButton.textContent = "Ask again";
    
    // Show rating after a delay (if you've implemented the rating system)
    setTimeout(() => {
        ratingElement.style.display = 'block';
    }, 2000);
});

const shareButton = document.getElementById('shareButton');

shareButton.addEventListener('click', function() {
    const shareText = "Check out Jolivara's Wellness Genie for daily wellness activities!";
    const shareUrl = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: 'Jolivara\'s Wellness Genie',
            text: shareText,
            url: shareUrl,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
        // Fallback for browsers that don't support the Web Share API
        const emailSubject = encodeURIComponent("Check out Jolivara's Wellness Genie");
        const emailBody = encodeURIComponent(`${shareText}\n\n${shareUrl}`);
        window.location.href = `mailto:?subject=${emailSubject}&body=${emailBody}`;
    }
});
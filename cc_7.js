// U41684674

document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackDisplay = document.getElementById('feedbackDisplay');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form

        // Validate
        const name = document.getElementById('name').value.trim();
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value.trim();

        if (!name || !rating || !comments) {
            alert('Please fill out all fields before submitting.');
            return;
        }

        // Create feedback item
        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('feedback-item');

        const feedbackName = document.createElement('h3');
        feedbackName.textContent = `Name: ${name}`;

        const feedbackRating = document.createElement('p');
        feedbackRating.textContent = `Rating: ${rating}`;

        const feedbackComments = document.createElement('p');
        feedbackComments.textContent = `Comments: ${comments}`;

        feedbackItem.appendChild(feedbackName);
        feedbackItem.appendChild(feedbackRating);
        feedbackItem.appendChild(feedbackComments);

        // feedback display
        feedbackDisplay.appendChild(feedbackItem);

        // Clear form fields
        feedbackForm.reset();
    });
});
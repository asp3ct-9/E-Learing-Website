document.addEventListener('DOMContentLoaded', function() {
    // Function to display top-rated videos
    function displayTopRatedVideos() {
        const topRatedVideosData = [
            { title: 'Introduction to Cybersecurity', url: 'https://www.itgovernance.co.uk/what-is-cybersecurity#:~:text=Cyber%20security%20is%20the%20application,systems%2C%20networks%2C%20and%20technologies.' },
            { title: 'Mastering Ethical Hacking', url: 'https://www.synopsys.com/glossary/what-is-ethical-hacking.html' },
            // Add more top-rated videos as needed
        ];
        
        const topRatedVideosContainer = document.getElementById('topRatedVideos');
        topRatedVideosData.forEach(video => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = video.url;
            link.target = '_blank';
            link.textContent = video.title;
            listItem.appendChild(link);
            topRatedVideosContainer.appendChild(listItem);
        });
    }

    // Function to handle review form submission
    function handleReviewFormSubmission(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const reviewText = document.getElementById('review').value;
        const reviewsContainer = document.getElementById('reviews');

        // Display the new review
        const newReview = document.createElement('div');
        newReview.innerHTML = `<p><strong>${name}</strong>: ${reviewText}</p>`;
        reviewsContainer.appendChild(newReview);

        // Reset the form
        event.target.reset();
    }

    // Event listeners
    displayTopRatedVideos(); // Call function to display top-rated videos
    const reviewForm = document.getElementById('reviewForm');
    reviewForm.addEventListener('submit', handleReviewFormSubmission);
});

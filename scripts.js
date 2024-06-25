
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.section a');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', createGlitter);
        button.addEventListener('mouseleave', removeGlitter);
    });

    function createGlitter(event) {
        const button = event.currentTarget;
        for (let i = 0; i < 20; i++) {
            const glitter = document.createElement('div');
            glitter.classList.add('glitter');
            glitter.style.left = `${Math.random() * 100}%`;
            glitter.style.top = `${Math.random() * 100}%`;
            glitter.style.animation = `sparkle 0.5s ${Math.random() * 2}s ease-out infinite`;
            button.appendChild(glitter);
        }
    }

    function removeGlitter(event) {
        const button = event.currentTarget;
        const glitters = button.querySelectorAll('.glitter');
        glitters.forEach(glitter => glitter.remove());
    }
});

// Function to save book data
function saveBook(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const bookName = document.getElementById('book-name').value;
    const authorName = document.getElementById('author-name').value;
    const description = document.getElementById('description').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    // Create book object
    const book = {
        name: bookName,
        author: authorName,
        description: description,
        startDate: startDate,
        endDate: endDate
    };

    // Get existing books from local storage or initialize empty array
    let books = JSON.parse(localStorage.getItem('books')) || [];

    // Check if book with the same name already exists (for update scenario)
    const existingBookIndex = books.findIndex(b => b.name === bookName);
    if (existingBookIndex !== -1) {
        // Update existing book entry
        books[existingBookIndex] = book;
    } else {
        // Add new book entry
        books.push(book);
    }

    // Save updated books array back to local storage
    localStorage.setItem('books', JSON.stringify(books));

    // Optionally, clear the form after submission
    document.querySelector('.book-form').reset();

    // Optionally, display or update a list of books (not shown here)
}


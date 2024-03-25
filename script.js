document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    const generateBook = () => {
        const title = prompt('Enter book title:');
        const author = prompt('Enter author name:');
        const content = prompt('Enter book content:');

        if (!title || !author || !content) {
            alert('Please fill in all fields.');
            return;
        }

        const bookHTML = `
            <div>
                <h2>${title}</h2>
                <p>By: ${author}</p>
                <div>${content}</div>
            </div>
        `;

        root.innerHTML = bookHTML;
    };

    generateBook();
});

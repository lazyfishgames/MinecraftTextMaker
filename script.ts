document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  generateBtn.addEventListener('click', generateBook);
});

function generateBook() {
  const titleInput = document.getElementById('bookTitle');
  const authorInput = document.getElementById('author');
  const contentInput = document.getElementById('content');
  const outputDiv = document.getElementById('output');

  const title = titleInput.value;
  const author = authorInput.value;
  const content = contentInput.value;

  if (!title || !author || !content) {
    alert('Please fill in all fields.');
    return;
  }

  const book = `
    <h2>${title}</h2>
    <p>By: ${author}</p>
    <div>${content}</div>
  `;

  outputDiv.innerHTML = book;
}

document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  generateBtn.addEventListener('click', generateBook);
});

function generateBook() {
  const titleInput = document.getElementById('bookTitle') as HTMLInputElement;
  const authorInput = document.getElementById('author') as HTMLInputElement;
  const contentInput = document.getElementById('content') as HTMLTextAreaElement;
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

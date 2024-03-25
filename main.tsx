import React, { useState } from 'react';
import './styles.css';

const Text2Book: React.FC = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const generateBook = () => {
        const newTitle = prompt('Enter book title:');
        const newAuthor = prompt('Enter author name:');
        const newContent = prompt('Enter book content:');

        if (!newTitle || !newAuthor || !newContent) {
            alert('Please fill in all fields.');
            return;
        }

        setTitle(newTitle);
        setAuthor(newAuthor);
        setContent(newContent);
    };

    return (
        <div className="book-container">
            <button onClick={generateBook}>Generate Book</button>
            {title && author && content && (
                <div className="book">
                    <h2>{title}</h2>
                    <p>By: {author}</p>
                    <div>{content}</div>
                </div>
            )}
        </div>
    );
};

export default Text2Book;

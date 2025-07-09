import { useState, useEffect } from 'react';

export default function Quote() {
    const [quote, setQuote] = useState('');

    useEffect(() => {
    async function fetchQuote() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        setQuote(data);
    }
    fetchQuote();
  }, []);

  return (
    <div>
        <h2>Quote of the Day</h2>
        <p>{quote.title || 'Loading...'}</p>
        <p>{quote.id || 'Loading...'}</p>
    </div>
  );
}
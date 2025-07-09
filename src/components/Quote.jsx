import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Quote() {
    const [quote, setQuote] = useState('');

    useEffect(() => {
    async function fetchQuote() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data);
        setQuote(response.data);
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
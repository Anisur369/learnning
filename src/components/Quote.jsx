import { useQuery } from '@tanstack/react-query';
import getQuote from './getQuoteApi';


export default function Quote() {
  const { data } = useQuery("quote", () => getQuote());

  return (
    <div>
        <p>{data?.title || 'Loading...'}</p>
        <p>{data?.id || 'Loading...'}</p>
    </div>
  );
}
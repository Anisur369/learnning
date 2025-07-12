import Quote from "./components/Quote";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function App() {
  const Client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={Client}>
        <Quote />
        <Quote />
      </QueryClientProvider>
    </div>
  )
}

export default App;

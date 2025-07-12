import { signal } from '@preact/signals-react'


function App() {
  const count = signal(0)

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => count.value += 5}>Increment</button>
      <button onClick={() => count.value -= 5}>Decrement</button>
    </div>
  )
}

export default App;
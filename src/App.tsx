import './App.css'
import { Button } from './components/ui/button'

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-600">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="********"
              required
            />
          </div>
          <Button className="w-full" variant="default" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

export default App

import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App container">
      <Login/>
      <SignUp/>
      <Dashboard/>
    </div>
  );
}

export default App;

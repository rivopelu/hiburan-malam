
import ToggleTheme from './components/ToggleDarkMode';
import { MainRoute } from './config';
import './style/App.scss';

function App() {
  return (
    <div className="App min-h-screen dark:text-white bg-white dark:bg-gray-900">
      <MainRoute />
      <ToggleTheme />
    </div>
  );
}

export default App;

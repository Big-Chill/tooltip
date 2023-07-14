import './App.css';
import Tooltip from './Components/tooltip';

function App() {
  const pos = 'top';
  return (
    <div>
      <Tooltip position={pos} text="Tooltip text">
        <div>{pos}</div>
      </Tooltip>
    </div>
  );
}

export default App;

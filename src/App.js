import './App.css';
import { TopHeader } from './components/TopHeader/TopHeader';
import TopPresentation from './components/TopPresentation/TopPresentation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader />
       <TopPresentation/>
      </header>
    </div>
  );
}
 
export default App;

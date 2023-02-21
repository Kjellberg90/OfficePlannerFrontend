import './App.css';
import {BrowserRouter} from "react-router-dom"
import AppRouter from './routes';
import { DateProvider } from './shared/DateContext';


function App() {
  
  return (
    <DateProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </DateProvider>
  );
}

export default App;

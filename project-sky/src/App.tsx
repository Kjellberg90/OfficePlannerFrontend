import './App.css';
import {BrowserRouter} from "react-router-dom"
import AppRouter from './routes';
import { DateProvider } from './shared/DateContext';
import UserProvider from './shared/Context/UserContext';


function App() {
  
  return (
    <UserProvider>
      <DateProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </DateProvider>
    </UserProvider>
  );
}

export default App;

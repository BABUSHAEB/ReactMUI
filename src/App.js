import NavBar from './Components/NavBar';
import Form from './Components/Form';
import Tables from './Components/Tables';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import DataStore from './ContextStore/DataStore';
import TablesOne from './Tables/TablesOne';

function App() {
  return (
    <div >
      <DataStore>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="forms" element={<Form />}>
              <Route index element={<Signup />} />
              <Route path="signup/" element={<Signup />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="tables" element={<Tables />} />
            <Route path="tablesone" element={<TablesOne />} />
          </Routes>
        </BrowserRouter>
      </DataStore>
    </div>
  );
}

export default App;

import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './utils/history';
import { AuthProvider } from './context/AuthContext';

import GlobalStyles from './globalStyles';

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Router history={history}>
        <Routes />
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;

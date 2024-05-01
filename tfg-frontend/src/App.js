import React, { Suspense } from 'react';
import { UserProvider } from './hooks/userContext';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main';
import LoadingAnimationComponent from './components/Animations/LoadingAnimationComponent';


function App() {
  return (
   <Suspense fallback={<LoadingAnimationComponent/>}>
    <UserProvider>
      <Toaster position="top-center" reverseOrder={false}/>
        <Router>
          <Main />
        </Router>
      </UserProvider>
    </Suspense>
  );
}

export default App;

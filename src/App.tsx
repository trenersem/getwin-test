import { useEffect, useState } from 'react';
import { useUser } from './components/hooks/use-user';
import Letter from './components/List';
import Login from './components/Login';

function App() {
  const [isAuthoriz, setIsAuthoriz] = useState(false);
  const { name, email } = useUser();

  useEffect(() => {
    if (name && email) {
      setIsAuthoriz(true);
    } else {
      setIsAuthoriz(false);
    }
  }, [name, email]);

  return <div className="container">{isAuthoriz ? <Letter /> : <Login />}</div>;
}

export default App;

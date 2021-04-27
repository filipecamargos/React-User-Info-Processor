import React from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  return (
    <div>
      <AddUser />
      <UsersList 
        users={[{name: "test", age: "25"}]}
      />
    </div>
  );
}

export default App;

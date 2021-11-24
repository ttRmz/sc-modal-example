import React from "react";
import "./App.css";
import { List, UserCard } from "./components";
import logo from "./logo.svg";

async function getUsers() {
  try {
    const results = await fetch("https://randomuser.me/api/?results=20");
    return await results.json();
  } catch (error) {
    console.log("🚀 ~ file: App.tsx ~ line 11 ~ getUsers ~ error", error);
  }
}

function useUsers() {
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);

    getUsers().then((response) => {
      setData(response.results);
      setLoading(false);
    });
  }, []);

  return { users: data, loading };
}

function App() {
  const { users, loading } = useUsers();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        {loading ? (
          <span>Loading...</span>
        ) : (
          <List>
            {users.map((user: any) => (
              <UserCard key={user.login.uuid} user={user} />
            ))}
          </List>
        )}
      </header>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import User from "./user";

export default function GithubProfilFinder() {
  const [userName, setUserName] = useState("kameleo12");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleSubmit() {
    fetchGithubUserData();
  }

  async function fetchGithubUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);

    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data ! please wait</h1>;
  }

  return (
    <div className="github-profil-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}

import { useState } from "react";

import {
  Trophy,
  CheckCircle,
  Circle,
} from "lucide-react";

import api from "./services/api";
import DifficultyBarChart from "./charts/DifficultyBarChart";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import StatCard from "./components/StatCard";

import DifficultyPieChart from "./charts/DifficultyPieChart";
import ProfileCard from "./components/ProfileCard";

function App() {

  const [username, setUsername] = useState("");

  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {

    if (!username.trim()) return;

    try {

      setLoading(true);

      const response = await api.get(
        `/profile/${username}`
      );

      setProfile(response.data);

    } catch (err) {

      alert("User not found");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">

      <Navbar />

      <Hero />

      <SearchBar
        username={username}
        setUsername={setUsername}
        handleAnalyze={handleAnalyze}
        loading={loading}
      />

      {profile && (

        <div className="max-w-7xl mx-auto mt-16">

          <h2 className="text-4xl font-bold mb-10">

            Hello,

            <span className="text-green-400">

              {" "}

              {profile.username}

            </span>

            👋

          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            <StatCard
              title="Ranking"
              value={profile.profile.ranking}
              icon={<Trophy />}
              color="text-cyan-400"
            />

            <StatCard
              title="Solved"
              value={profile.submitStats.acSubmissionNum[0].count}
              icon={<CheckCircle />}
              color="text-white"
            />

            <StatCard
              title="Easy"
              value={profile.submitStats.acSubmissionNum[1].count}
              icon={<Circle />}
              color="text-green-400"
            />

            <StatCard
              title="Medium"
              value={profile.submitStats.acSubmissionNum[2].count}
              icon={<Circle />}
              color="text-yellow-400"
            />

            <StatCard
              title="Hard"
              value={profile.submitStats.acSubmissionNum[3].count}
              icon={<Circle />}
              color="text-red-400"
            /> 

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

  <DifficultyPieChart
    profile={profile}
  />

  <DifficultyBarChart
    profile={profile}
  />

</div>

        </div>

      )}

    </div>

  );

}

export default App;
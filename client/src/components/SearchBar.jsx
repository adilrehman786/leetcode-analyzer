import { Search } from "lucide-react";

function SearchBar({
  username,
  setUsername,
  handleAnalyze,
  loading,
}) {
  return (
    <div className="flex justify-center">

      <div className="flex bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl">

        <div className="flex items-center px-5">
          <Search className="text-gray-500" />
        </div>

        <input
          className="flex-1 bg-transparent outline-none text-white py-5"
          placeholder="Enter LeetCode Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          onClick={handleAnalyze}
          className="bg-emerald-500 hover:bg-emerald-600 px-8 font-semibold transition"
        >
          {loading ? "Loading..." : "Analyze"}
        </button>

      </div>

    </div>
  );
}

export default SearchBar;
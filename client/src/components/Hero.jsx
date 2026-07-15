import { BarChart3 } from "lucide-react";

function Hero() {
  return (
    <section className="text-center py-20">

      <div className="flex justify-center mb-6">
        <div className="bg-emerald-500/10 p-4 rounded-full">
          <BarChart3 className="w-12 h-12 text-emerald-400" />
        </div>
      </div>

      <h1 className="text-6xl font-extrabold text-white">
        Master Your
        <span className="text-emerald-400"> Coding Journey</span>
      </h1>

      <p className="text-gray-400 text-xl mt-6 max-w-2xl mx-auto leading-8">
        Analyze your LeetCode profile with detailed statistics,
        beautiful visualizations, and performance insights.
      </p>

    </section>
  );
}

export default Hero;
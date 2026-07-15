function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-emerald-400 transition duration-300">

      <div className="flex justify-between items-center">

        <p className="text-gray-400">
          {title}
        </p>

        {icon}

      </div>

      <h1 className={`text-5xl font-bold mt-8 ${color}`}>
        {value}
      </h1>

    </div>
  );
}

export default StatCard;
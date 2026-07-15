import { Trophy, CheckCircle } from "lucide-react";

function ProfileCard({ profile }) {

  if (!profile) return null;

  return (

    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-8
      text-center"
    >

      <div
        className="
        w-24
        h-24
        rounded-full
        bg-gradient-to-r
        from-emerald-400
        to-cyan-500
        mx-auto
        flex
        items-center
        justify-center
        text-4xl
        font-bold"
      >

        {profile.username.charAt(0).toUpperCase()}

      </div>

      <h1 className="text-3xl font-bold mt-6">

        {profile.username}

      </h1>

      <p className="text-gray-400">

        LeetCode Enthusiast

      </p>

      <div className="grid grid-cols-2 gap-5 mt-8">

        <div className="bg-slate-900 rounded-xl p-4">

          <Trophy
            className="mx-auto text-yellow-400"
          />

          <p className="mt-2 text-gray-400">

            Ranking

          </p>

          <h2 className="text-2xl font-bold">

            {profile.profile.ranking}

          </h2>

        </div>

        <div className="bg-slate-900 rounded-xl p-4">

          <CheckCircle
            className="mx-auto text-green-400"
          />

          <p className="mt-2 text-gray-400">

            Solved

          </p>

          <h2 className="text-2xl font-bold">

            {profile.submitStats.acSubmissionNum[0].count}

          </h2>

        </div>

      </div>

    </div>

  );

}

export default ProfileCard;
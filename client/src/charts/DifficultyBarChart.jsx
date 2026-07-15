import {

ResponsiveContainer,

BarChart,

Bar,

XAxis,

YAxis,

Tooltip,

CartesianGrid,

Cell

}

from "recharts";

function DifficultyBarChart({profile}){

if(!profile) return null;

const stats=profile.submitStats.acSubmissionNum;

const data=[

{

difficulty:"Easy",

count:stats[1].count,

fill:"#22c55e"

},

{

difficulty:"Medium",

count:stats[2].count,

fill:"#facc15"

},

{

difficulty:"Hard",

count:stats[3].count,

fill:"#ef4444"

}

];

return(

<div className="bg-white/5

backdrop-blur-xl

rounded-2xl

p-6">

<h2 className="text-2xl font-semibold mb-5">

Solved Problems

</h2>

<div className="h-80">

<ResponsiveContainer>

<BarChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="difficulty"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="count">

{

data.map((entry,index)=>(

<Cell

key={index}

fill={entry.fill}

/>

))

}

</Bar>

</BarChart>

</ResponsiveContainer>

</div>

</div>

);

}

export default DifficultyBarChart;
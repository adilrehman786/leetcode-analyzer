import {
PieChart,
Pie,
Cell,
Tooltip,
ResponsiveContainer
}
from "recharts";

const COLORS=[
"#22c55e",
"#facc15",
"#ef4444"
];

function DifficultyChart({stats}){

const data=[
{
name:"Easy",
value:stats[1].count
},
{
name:"Medium",
value:stats[2].count
},
{
name:"Hard",
value:stats[3].count
}
];

return(

<div className="bg-slate-800 rounded-xl p-6 mt-8">

<h2 className="text-white text-xl mb-4">

Difficulty Distribution

</h2>

<div className="h-80">

<ResponsiveContainer>

<PieChart>

<Pie

data={data}

dataKey="value"

outerRadius={110}

label

>

{

data.map((entry,index)=>(

<Cell

key={index}

fill={COLORS[index]}

/>

))

}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

</div>

);

}

export default DifficultyChart;
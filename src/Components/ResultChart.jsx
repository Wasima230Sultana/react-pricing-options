import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const resultData = [
  { "id": 1, "name": "Aisha", "physics": 85, "chemistry": 78, "math": 92 },
  { "id": 2, "name": "Rahim", "physics": 74, "chemistry": 81, "math": 88 },
  { "id": 3, "name": "Karim", "physics": 90, "chemistry": 85, "math": 95 },
  { "id": 4, "name": "Nusrat", "physics": 88, "chemistry": 79, "math": 91 },
  { "id": 5, "name": "Sajid", "physics": 69, "chemistry": 72, "math": 80 },
  { "id": 6, "name": "Rafi", "physics": 95, "chemistry": 89, "math": 93 },
  { "id": 7, "name": "Mitu", "physics": 77, "chemistry": 70, "math": 85 },
  { "id": 8, "name": "Sohana", "physics": 82, "chemistry": 84, "math": 79 },
  { "id": 9, "name": "Hasan", "physics": 91, "chemistry": 88, "math": 94 },
  { "id": 10, "name": "Tamim", "physics": 86, "chemistry": 80, "math": 90 }
]

const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey={"physics"} stroke='red'></Line>

            </LineChart>
        </div>
    );
};

export default ResultChart;
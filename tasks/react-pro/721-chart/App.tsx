import { Bar, BarChart, LabelList, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import frameworks from './frameworks.json';

export default function App() {
  return (
    <div style={{ width: 800, height: 400 }}>
      <BarChart
        width={800}
        height={400}
        data={frameworks}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
      >
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="would_use_again" fill="#4ade80" name="Would use again">
          <LabelList dataKey="would_use_again" position="right" />
        </Bar>
        <Bar dataKey="would_not_use_again" fill="#f87171" name="Would not use again">
          <LabelList dataKey="would_not_use_again" position="right" />
        </Bar>
        <Bar dataKey="would_like_to_learn" fill="#60a5fa" name="Would like to learn">
          <LabelList dataKey="would_like_to_learn" position="right" />
        </Bar>
        <Bar dataKey="not_interested" fill="#a3a3a3" name="Not interested">
          <LabelList dataKey="not_interested" position="right" />
        </Bar>
        <Bar dataKey="never_heard" fill="#facc15" name="Never heard">
          <LabelList dataKey="never_heard" position="right" />
        </Bar>
      </BarChart>
    </div>
  );
}

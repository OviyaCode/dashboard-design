import { Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Charts = () => {
  const data = [
    { name: 'Realme', value: 400 },
    { name: 'Samsung', value: 300 },
    { name: 'Asus', value: 300 },
    { name: 'Hp', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const barData = [
    {
      name: 'Jan',
      uv: 2000,
      pv: 0,
      amt: 0,
    },
    {
      name: 'Feb',
      uv: 2000,
      pv: 0,
      amt: 0,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 0,
      amt: 0,
    },
    {
      name: 'Apr',
      uv: 2000,
      pv: 0,
      amt: 0,
    },
    {
      name: 'May',
      uv: 2000,
      pv: 0,
      amt: 0,
    },
    {
      name: 'June',
      uv: 2000,
      pv: 0,
      amt: 0,
    },
    {
      name: 'Jul',
      uv: 2000,
      pv: 0,
      amt: 0,
    },
    {
      name: 'Aug',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Sep',
      uv: 2000,
      pv: 0,
      amt: 0,
    },
    {
      name: 'Oct',
      uv: 2000,
      pv: 0,
      amt: 0,
    },
    {
      name: 'Nov',
      uv: 2000,
      pv: 0,
      amt: 0,
    },
    {
      name: 'Dec',
      uv: 2000,
      pv: 0,
      amt: 0,
    },
  ];


  return (
    <>
      <div className='chart-container'>
        <div className='bar-chart'>
          <div className='bar-chart-content'>
            <p>Overview</p>
            <span>Monthly Earning</span>
          </div>
          <div className='chart-diagram'>
            <BarChart
              width={700}
              height={300}
              data={barData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 5 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
          </div>
        </div>
        <div className='pie-chart'>
          <div className='pie-chart-content'>
            <p>Customers</p>
            <span>Customers that buy products</span>
          </div>
          <div className='pie-chart-diagram'>
            <ResponsiveContainer width={230} height={230} className="text-center">
              <PieChart width={100} height={100}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend layout="horizontal" verticalAlign="bottom" align="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  )
}

export default Charts
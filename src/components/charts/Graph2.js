import s from '~/src/components/charts/Graph2.module.sass'



const Graph2 = (p) => {

  const data = p.data;
  const total = data.reduce((sum, item) => sum + parseInt(item.values), 0);
  let cumulative = 0;

  const colors = [
    "#f7ecea",
    "#a67f7b",
    "#ccb6b3",
    "#b3b3b3"
  ]

    return (
      <div className={s.graph} data-ag={`graph`} >


      <div className={s.legend} dangerouslySetInnerHTML={{__html: p.legend}}></div>


      
      <svg width="350" height="350" viewBox="-50 -50 350 350">
        {data.map((item, index) => {
          const value = parseInt(item.values);
          const startAngle = ((cumulative / total) * 2 * Math.PI) - (Math.PI / 2);
          cumulative += value;
          const endAngle = ((cumulative / total) * 2 * Math.PI) - (Math.PI / 2);
          const largeArcFlag = endAngle - startAngle <= Math.PI ? 0 : 1;
          const startX = 125 + 100 * Math.cos(startAngle);
          const startY = 125 + 100 * Math.sin(startAngle);
          const endX = 125 + 100 * Math.cos(endAngle);
          const endY = 125 + 100 * Math.sin(endAngle);
          let labelX = 125 + 120 * Math.cos(startAngle + (endAngle - startAngle) / 2);
          let labelY = 125 + 120 * Math.sin(startAngle + (endAngle - startAngle) / 2);

          // Check if this is the last item
          if (index === data.length - 1) {
            labelY -= 10;
            labelX += 10;
          }
          if (index === data.length - 2) {
            labelY += 10;
            labelX -= 20;
          }
          if (index === data.length - 3) {
            labelY += 0;
            labelX -= 30;
          }
          if (index === data.length - 4) {
            labelY -= 50;
            labelX -= 0;
          }

          return (
            <g key={index}>
              <path
                d={`M 125 125 L ${startX} ${startY} A 100 100 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                fill={colors[index]}
                stroke="white"
                strokeWidth="1"
              />
              <text x={labelX} y={labelY} fill="black" textAnchor="middle" dominantBaseline="middle">
                {item.values + ` ` + item.name}
              </text>
            </g>
          );
        })}
      </svg>

      </div>
    );
};

export default Graph2;
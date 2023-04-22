import s from '~/src/components/charts/Pie.module.sass'
import gsap from "gsap/dist/gsap";

const Pie = (p) => {
    const data = p.data
    const id = p.dataid
    
    const radius = 150
    const d = 1/(data.length - 1)   // exeption
    const totalValue = data.reduce((total, slice) => total + slice.val, 0);
    const total = data.reduce((acc, { val }) => acc + val, 0);

    let startAngle = 0;
    let colors = (id!==3) ? ["#E3731A", "#FBE8D3"] : ["#6D3869", "#B490AF"]

    return (
      <div className={s.pie} data-id={id} data-anim={"pie"}>
        <div className={s.box}>

            <svg className={s.chart} viewBox={`0 0 ${2*radius} ${2*radius}`} >
                <defs>
                    <clipPath id={`ag-piemask${id}`}>
                        <path id={`ag-arc${id}`} d="" />   
                    </clipPath>
                </defs>
                <g clipPath={`url(#ag-piemask${id})`}>
                {data.map((slice, i) => {
                
                    const col = gsap.utils.interpolate(colors, i * d);
                    const sliceAngle = (slice.val / totalValue) * 360;
                    const endAngle = startAngle + sliceAngle;
                    const largeArcFlag = sliceAngle > 180 ? 1 : 0;
            
                    const startX = radius + radius * Math.sin(startAngle * Math.PI / 180);
                    const startY = radius - radius * Math.cos(startAngle * Math.PI / 180);
                    const endX = radius + radius * Math.sin(endAngle * Math.PI / 180);
                    const endY = radius - radius * Math.cos(endAngle * Math.PI / 180);
            
                    const pathData = [
                        `M ${radius},${radius}`,
                        `L ${startX},${startY}`,
                        `A ${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`,
                        'Z'
                    ].join(' ');
            
                    startAngle = endAngle;
            
                    return <path key={col} d={pathData} fill={col} />;
                })}
                </g>
            </svg>

            <div className={s.legend}>
                {data.map(({ val, name }, index) => {
                    const percent = val / total;
                    const startAngle = index === 0 ? 0 : data.slice(0, index).reduce((acc, { val }) => acc + val, 0) / total * 360;
                    const midAngle = startAngle + percent * 180;
                    const point = findPointOnCircle(radius * 1.05, midAngle, {x: radius, y: radius})
                    const col = gsap.utils.interpolate(colors, index * d);
                    const styleLegend = {
                        left: `${point.left}px`,
                        top: `${point.top}px`,
                    };
                    const styleName = {
                        textAlign: (index !== (data.length-1) ) ? (point.left>radius)?'left':'right' : 'left',
                        transform: (index !== (data.length-1) ) ? `translate(${(point.left>radius)?0:'-100%'}, ${(point.top>radius)?0:'-100%'})` : `translate(0, ${(point.top>radius)?0:'-100%'})` 
                    };          

                    return ( 
                        <div key={index} className={s.name} style={styleLegend} data-anim="legend">
                            <div className={s.color} style={{backgroundColor: col}}/>
                            <p 
                                className={s.p} 
                                style={styleName} 
                                dangerouslySetInnerHTML={{__html: name }} 
                            />
                        </div>
                    );  
                })}
            </div>

        </div>
      </div>
      
    );
};

export default Pie;



function findPointOnCircle(radius, angleDegrees, center) {
    // Convert the angle from degrees to radians
    var angleRadians = (angleDegrees - 90) * Math.PI / 180;
  
    // Calculate the x-coordinate of the point
    var x = center.x + radius * Math.cos(angleRadians);
  
    // Calculate the y-coordinate of the point
    var y = center.y + radius * Math.sin(angleRadians);
  
    // Return the coordinates of the point as an object with properties x and y
    return { left: Math.round(x), top: Math.round(y) };
}
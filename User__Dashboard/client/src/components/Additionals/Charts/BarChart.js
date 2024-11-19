// import React from 'react'
// import './barchart.css'

// export default function BarChart() {
//   const num = 80;
//   return (
   
//     <div>
//      <div className='container'>
//   <div className="chart-heading-container" style={{ position: 'relative', paddingBottom: '20px' }}>
//     <div className="chart-heading" style={{
//     width: '100%',
//     textAlign: 'center',
//     padding: '12px 0',
//     background: '#1E2D3B',
//     color: 'white',
//     borderBottom: '1px solid #ccc', 
//     fontWeight: 'bold',
//     marginBottom: '20px',
//     borderRadius: 5,
//     boxshadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.47)'
//     }}>
//       Production Process Overview
//     </div>
    
 
//     <div className="simple-bar-chart" style={{ marginTop: '40px' }}> 
//       {/* Your chart items */}
//       <div className="item" style={{ '--clr': '#203475', '--val': num }}>
//         <div className="label" style={{fontSize: '14px' , fontWeight: 'bold'}}>Knitting</div>
//         <div className="value">80%</div>
//       </div>
      
//       <div className="item" style={{ '--clr': '#092633', '--val': 50 }}>
//         <div className="label" style={{fontSize: '14px' , fontWeight: 'bold'}}>Dyeing</div>
//         <div className="value">50%</div>
//       </div>

//       <div className="item" style={{ '--clr': '#456B7DE0', '--val': 100 }}>
//         <div className="label" style={{fontSize: '14px', fontWeight: 'bold'}}>Cutting</div>
//         <div className="value">100%</div>
//       </div>

//       <div className="item" style={{ '--clr': '#456B7DE0', '--val': 15 }}>
//         <div className="label" style={{fontSize: '14px', fontWeight: 'bold'}}>Embelishment</div>
//         <div className="value">15%</div>
//       </div>

//       <div className="item" style={{ '--clr': '#1879A7E0', '--val': 45 }}>
//         <div className="label" style={{fontSize: '14px', fontWeight: 'bold'}}>Sewing</div>
//         <div className="value">45%</div>
//       </div>

//       <div className="item" style={{ '--clr': '#0F4863', '--val': 90 }}>
//         <div className="label" style={{fontSize: '14px',fontWeight: 'bold'}}>Finishing</div>
//         <div className="value">90%</div>
//       </div>
      
//       <div className="item" style={{ '--clr': '#532075', '--val': 70 }}>
//         <div className="label" style={{fontSize: '14px', fontWeight: 'bold'}}>Packing</div>
//         <div className="value">70%</div>
//       </div>
//     </div>
//   </div>
// </div>


//     </div>
//   ) 
// }


import React from 'react';
import './barchart.css';

export default function BarChart({ orderDetails }) {
  if (!orderDetails || orderDetails.totalSum === null) {
    return null;
  }
  const itemsComplete = {
    knitting: 590,
    dyeing: 150,
    cutting: 770,
    embellishment: 430,
    sewing: 280,
    finishing: 460,
    packing: 495
  };

  // Function to calculate the percentage
  const calculatePercentage = (completed, total) => {
    return ((completed / total) * 100).toFixed(0);
  };

  return (
    <div>
      <div className='container'>
        <div className="chart-heading-container" style={{ position: 'relative', paddingBottom: '20px' }}>
          <div className="chart-heading" style={{
            width: '100%',
            textAlign: 'center',
            padding: '12px 0',
            background: '#1E2D3B',
            color: 'white',
            borderBottom: '1px solid #ccc', 
            fontWeight: 'bold',
            marginBottom: '20px',
            borderRadius: 5,
            boxShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.47)'
          }}>
            Production Process Overview
          </div>
          
          <div className="simple-bar-chart" style={{ marginTop: '40px' }}> 
            {/* Your chart items */}
            <div className="item" style={{ '--clr': '#203475', '--val': calculatePercentage(itemsComplete.knitting, orderDetails.totalSum) }}>
              <div className="label" style={{fontSize: '14px', fontWeight: 'bold'}}>Knitting</div>
              <div className="value">{calculatePercentage(itemsComplete.knitting, orderDetails.totalSum)}%</div>
            </div>
            
            <div className="item" style={{ '--clr': '#092633', '--val': calculatePercentage(itemsComplete.dyeing, orderDetails.totalSum) }}>
              <div className="label" style={{fontSize: '14px', fontWeight: 'bold'}}>Dyeing</div>
              <div className="value">{calculatePercentage(itemsComplete.dyeing, orderDetails.totalSum)}%</div>
            </div>

            <div className="item" style={{ '--clr': '#456B7DE0', '--val': calculatePercentage(itemsComplete.cutting, orderDetails.totalSum) }}>
              <div className="label" style={{fontSize: '14px', fontWeight: 'bold'}}>Cutting</div>
              <div className="value">{calculatePercentage(itemsComplete.cutting, orderDetails.totalSum)}%</div>
            </div>

            <div className="item" style={{ '--clr': '#456B7DE0', '--val': calculatePercentage(itemsComplete.embellishment, orderDetails.totalSum) }}>
              <div className="label" style={{fontSize: '14px', fontWeight: 'bold'}}>Embellishment</div>
              <div className="value">{calculatePercentage(itemsComplete.embellishment, orderDetails.totalSum)}%</div>
            </div>

            <div className="item" style={{ '--clr': '#1879A7E0', '--val': calculatePercentage(itemsComplete.sewing, orderDetails.totalSum) }}>
              <div className="label" style={{fontSize: '14px', fontWeight: 'bold'}}>Sewing</div>
              <div className="value">{calculatePercentage(itemsComplete.sewing, orderDetails.totalSum)}%</div>
            </div>

            <div className="item" style={{ '--clr': '#0F4863', '--val': calculatePercentage(itemsComplete.finishing, orderDetails.totalSum) }}>
              <div className="label" style={{fontSize: '14px', fontWeight: 'bold'}}>Finishing</div>
              <div className="value">{calculatePercentage(itemsComplete.finishing, orderDetails.totalSum)}%</div>
            </div>
            
            <div className="item" style={{ '--clr': '#532075', '--val': calculatePercentage(itemsComplete.packing, orderDetails.totalSum) }}>
              <div className="label" style={{fontSize: '14px', fontWeight: 'bold'}}>Packing</div>
              <div className="value">{calculatePercentage(itemsComplete.packing, orderDetails.totalSum)}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

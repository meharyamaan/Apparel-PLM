import "./featured.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const Featured = ({orderDetails}) => {
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
  const calculatePercentage = (completed, total) => {
    return ((completed / total) * 100).toFixed(0);
  };
  const totalCompleted = Object.values(itemsComplete).reduce((sum, value) => sum + value, 0);
  const overallPercentage = calculatePercentage(totalCompleted, orderDetails.totalSum * 7);

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title" style={{color: "white", fontWeight: 'bold'}}>Total Order</h1>
        {/* <MoreVertIcon fontSize="small" /> */}
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={overallPercentage} text={`${overallPercentage}%`} strokeWidth={5} />
        </div>
        <p className="title" style={{fontSize: '14px',color: "white"}}>Your Order So Far</p>
        <p className="amount" style={{color: "white"}}>{100 - overallPercentage}</p>
      </div>
    </div>
  );
};

export default Featured;
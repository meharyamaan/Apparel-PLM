import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
      <div className="data-card-container">
      <div className="data-card">
        <h3>{card.total}</h3>
        <h4>{card.style}</h4>
        <span className="link-text">
          Start Date: <span style={{color: 'black'}}>{card.startDate}</span>
        </span>
        <span className="link-text">
          End Date: <span style={{color: 'black'}}>{card.endDate}</span>
        </span>
      </div>
      </div>
    </div>
  );
};

export default Card;

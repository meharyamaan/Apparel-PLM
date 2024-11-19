import React from 'react';
import './../../Styles/maincard.css';

export default function MainCard({ title, startDate, endDate }) {
  return (
    <div>
      <div className="container" style={{marginTop: "10px"}}>
        <div className="row">
          <div className="col-md-12 col-lg-12 mb-12">
            <div className="ag-courses_item">
              <p className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">
                  {title}
                </div>
                {/* <div className="ag-courses-item_date-box">
                  Start Date:
                  <span className="ag-courses-item_date"> {startDate}</span>
                </div>
                <div className="ag-courses-item_date-box">
                  End Date:
                  <span className="ag-courses-item_date"> {endDate}</span>
                </div> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

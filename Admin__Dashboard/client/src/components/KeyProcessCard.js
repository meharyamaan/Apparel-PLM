import React from 'react';
import './../../Styles/keyprocesscard.css';

export default function KeyProcessCard({ orderDetails }) {
  if (!orderDetails || orderDetails.totalSum === null) {
    return null;
  }
  
  return (
    <div>
      <>
        <span className="toggler active" data-toggle="grid">
          <span className="entypo-layout" />
        </span>
        <span className="toggler" data-toggle="list">
          <span className="entypo-list" />
        </span>
        <ul className="surveys grid">
          <div className='container'>
            <li className="survey-item">
              <span className="survey-country list-only" style={{fontSize: '25px', paddingTop: '10px'}}>Knitting</span>
              <div className="pull-right">
                <span className="survey-progress">
                  <span className="survey-progress-bg">
                    <span className="survey-progress-fg" style={{ width: "88%" }} />
                  </span>
                  <span className="survey-progress-labels">
                    <span className="survey-progress-label">88%</span>
                    <span className="survey-completes">490 / <span className='total-count'>{orderDetails.totalSum}</span></span>
                  </span>
                </span>
                <span className="survey-end-date ended">2014 - May 10</span>
              </div>
            </li>
            <li className="survey-item">
              <span className="survey-country list-only" style={{fontSize: '25px', paddingTop: '10px'}}>DYEING</span>
              <div className="pull-right">
                <span className="survey-progress">
                  <span className="survey-progress-bg">
                    <span className="survey-progress-fg" style={{ width: "88%" }} />
                  </span>
                  <span className="survey-progress-labels">
                    <span className="survey-progress-label">88%</span>
                    <span className="survey-completes">490 / <span className='total-count'>{orderDetails.totalSum}</span></span>
                  </span>
                </span>
                <span className="survey-end-date ended">2014 - May 10</span>
              </div>
            </li>
            <li className="survey-item">
              <span className="survey-country list-only" style={{fontSize: '25px', paddingTop: '10px'}}>CUTTING</span>
              <div className="pull-right">
                <span className="survey-progress">
                  <span className="survey-progress-bg">
                    <span className="survey-progress-fg" style={{ width: "88%" }} />
                  </span>
                  <span className="survey-progress-labels">
                    <span className="survey-progress-label">88%</span>
                    <span className="survey-completes">490 / <span className='total-count'>{orderDetails.totalSum}</span></span>
                  </span>
                </span>
                <span className="survey-end-date ended">2014 - May 10</span>
              </div>
            </li>
            <li className="survey-item">
              <span className="survey-country list-only" style={{fontSize: '25px', paddingTop: '10px'}}>EMBELLISHMENT</span>
              <div className="pull-right">
                <span className="survey-progress">
                  <span className="survey-progress-bg">
                    <span className="survey-progress-fg" style={{ width: "88%" }} />
                  </span>
                  <span className="survey-progress-labels">
                    <span className="survey-progress-label">88%</span>
                    <span className="survey-completes">490 / <span className='total-count'>{orderDetails.totalSum}</span></span>
                  </span>
                </span>
                <span className="survey-end-date ended">2014 - May 10</span>
              </div>
            </li>
            <li className="survey-item">
              <span className="survey-country list-only" style={{fontSize: '25px', paddingTop: '10px'}}>SEWING</span>
              <div className="pull-right">
                <span className="survey-progress">
                  <span className="survey-progress-bg">
                    <span className="survey-progress-fg" style={{ width: "88%" }} />
                  </span>
                  <span className="survey-progress-labels">
                    <span className="survey-progress-label">88%</span>
                    <span className="survey-completes">490 / <span className='total-count'>{orderDetails.totalSum}</span></span>
                  </span>
                </span>
                <span className="survey-end-date ended">2014 - May 10</span>
              </div>
            </li>
            <li className="survey-item">
              <span className="survey-country list-only" style={{fontSize: '25px', paddingTop: '10px'}}>FINISHING</span>
              <div className="pull-right">
                <span className="survey-progress">
                  <span className="survey-progress-bg">
                    <span className="survey-progress-fg" style={{ width: "88%" }} />
                  </span>
                  <span className="survey-progress-labels">
                    <span className="survey-progress-label">88%</span>
                    <span className="survey-completes">490 / <span className='total-count'>{orderDetails.totalSum}</span></span>
                  </span>
                </span>
                <span className="survey-end-date ended">2014 - May 10</span>
              </div>
            </li>
            <li className="survey-item">
              <span className="survey-country list-only" style={{fontSize: '25px', paddingTop: '10px'}}>PACKING</span>
              <div className="pull-right">
                <span className="survey-progress">
                  <span className="survey-progress-bg">
                    <span className="survey-progress-fg" style={{ width: "88%" }} />
                  </span>
                  <span className="survey-progress-labels">
                    <span className="survey-progress-label">88%</span>
                    <span className="survey-completes">490 / <span className='total-count'>{orderDetails.totalSum}</span></span>
                  </span>
                </span>
                <span className="survey-end-date ended">2014 - May 10</span>
              </div>
            </li>
            {/* Add more list items if needed */}
          </div>
        </ul>
      </>
    </div>
  );
}

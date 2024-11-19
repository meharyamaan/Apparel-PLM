import React from 'react';
import './../../Styles/keyprocesscard.css';

export default function KeyProcessCard({ orderDetails }) {
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

  // const totalCompleted = Object.values(itemsComplete).reduce((sum, value) => sum + value, 0);
  // const overallPercentage = calculatePercentage(totalCompleted, orderDetails.totalSum * 7);

  return (
    <div className="col mb-4">
      <span className="toggler active" data-toggle="grid">
        <span className="entypo-layout" />
      </span>
      <span className="toggler" data-toggle="list">
        <span className="entypo-list" />
      </span>
      <ul className="surveys grid">
        <div className='container'>
          <li className="survey-item">
            <span className="survey-country list-only" style={{ fontSize: '25px', paddingTop: '10px' }}>Knitting</span>
            <div className="pull-right">
              <span className="survey-progress">
                <span className="survey-progress-bg">
                  <span className="survey-progress-fg" style={{ width: `${calculatePercentage(itemsComplete.knitting, orderDetails.totalSum)}%` }} />
                </span>
                <span className="survey-progress-labels">
                  <span className="survey-progress-label">{calculatePercentage(itemsComplete.knitting, orderDetails.totalSum)}%</span>
                  <span className="survey-completes">{itemsComplete.knitting} / <span className='total-count'>{orderDetails.totalSum}</span></span>
                </span>
              </span>
            </div>
          </li>
          <li className="survey-item">
            <span className="survey-country list-only" style={{ fontSize: '25px', paddingTop: '10px' }}>DYEING</span>
            <div className="pull-right">
              <span className="survey-progress">
                <span className="survey-progress-bg">
                  <span className="survey-progress-fg" style={{ width: `${calculatePercentage(itemsComplete.dyeing, orderDetails.totalSum)}%` }} />
                </span>
                <span className="survey-progress-labels">
                  <span className="survey-progress-label">{calculatePercentage(itemsComplete.dyeing, orderDetails.totalSum)}%</span>
                  <span className="survey-completes">{itemsComplete.dyeing} / <span className='total-count'>{orderDetails.totalSum}</span></span>
                </span>
              </span>
            </div>
          </li>
          <li className="survey-item">
            <span className="survey-country list-only" style={{ fontSize: '25px', paddingTop: '10px' }}>CUTTING</span>
            <div className="pull-right">
              <span className="survey-progress">
                <span className="survey-progress-bg">
                  <span className="survey-progress-fg" style={{ width: `${calculatePercentage(itemsComplete.cutting, orderDetails.totalSum)}%` }} />
                </span>
                <span className="survey-progress-labels">
                  <span className="survey-progress-label">{calculatePercentage(itemsComplete.cutting, orderDetails.totalSum)}%</span>
                  <span className="survey-completes">{itemsComplete.cutting} / <span className='total-count'>{orderDetails.totalSum}</span></span>
                </span>
              </span>
            </div>
          </li>
          <li className="survey-item">
            <span className="survey-country list-only" style={{ fontSize: '25px', paddingTop: '10px' }}>EMBELLISHMENT</span>
            <div className="pull-right">
              <span className="survey-progress">
                <span className="survey-progress-bg">
                  <span className="survey-progress-fg" style={{ width: `${calculatePercentage(itemsComplete.embellishment, orderDetails.totalSum)}%` }} />
                </span>
                <span className="survey-progress-labels">
                  <span className="survey-progress-label">{calculatePercentage(itemsComplete.embellishment, orderDetails.totalSum)}%</span>
                  <span className="survey-completes">{itemsComplete.embellishment} / <span className='total-count'>{orderDetails.totalSum}</span></span>
                </span>
              </span>
            </div>
          </li>
          <li className="survey-item">
            <span className="survey-country list-only" style={{ fontSize: '25px', paddingTop: '10px' }}>SEWING</span>
            <div className="pull-right">
              <span className="survey-progress">
                <span className="survey-progress-bg">
                  <span className="survey-progress-fg" style={{ width: `${calculatePercentage(itemsComplete.sewing, orderDetails.totalSum)}%` }} />
                </span>
                <span className="survey-progress-labels">
                  <span className="survey-progress-label">{calculatePercentage(itemsComplete.sewing, orderDetails.totalSum)}%</span>
                  <span className="survey-completes">{itemsComplete.sewing} / <span className='total-count'>{orderDetails.totalSum}</span></span>
                </span>
              </span>
            </div>
          </li>
          <li className="survey-item">
            <span className="survey-country list-only" style={{ fontSize: '25px', paddingTop: '10px' }}>FINISHING</span>
            <div className="pull-right">
              <span className="survey-progress">
                <span className="survey-progress-bg">
                  <span className="survey-progress-fg" style={{ width: `${calculatePercentage(itemsComplete.finishing, orderDetails.totalSum)}%` }} />
                </span>
                <span className="survey-progress-labels">
                  <span className="survey-progress-label">{calculatePercentage(itemsComplete.finishing, orderDetails.totalSum)}%</span>
                  <span className="survey-completes">{itemsComplete.finishing} / <span className='total-count'>{orderDetails.totalSum}</span></span>
                </span>
              </span>
            </div>
          </li>
          <li className="survey-item">
            <span className="survey-country list-only" style={{ fontSize: '25px', paddingTop: '10px' }}>PACKING</span>
            <div className="pull-right">
              <span className="survey-progress">
                <span className="survey-progress-bg">
                  <span className="survey-progress-fg" style={{ width: `${calculatePercentage(itemsComplete.packing, orderDetails.totalSum)}%` }} />
                </span>
                <span className="survey-progress-labels">
                  <span className="survey-progress-label">{calculatePercentage(itemsComplete.packing, orderDetails.totalSum)}%</span>
                  <span className="survey-completes">{itemsComplete.packing} / <span className='total-count'>{orderDetails.totalSum}</span></span>
                </span>
              </span>
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
}

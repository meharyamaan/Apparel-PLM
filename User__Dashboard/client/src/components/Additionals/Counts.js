import React from 'react'
import './../../Styles/landing.css';

export default function Counts() {
    return (
        <div>
          <section id="counts" className="counts">
          <div className="container">
            <div className="text-center title">
              <h3>What we have achieved so far</h3>
              {/* <p>Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum consequatur illo.</p> */}
            </div>
    
            <div className="row counters position-relative">
              <div className="col-lg-3 col-6 text-center">
                <span className="purecounter" data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1">232</span>
                <p>Clients</p>
              </div>
    
              <div className="col-lg-3 col-6 text-center">
                <span className="purecounter" data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1">521</span>
                <p>Projects</p>
              </div>
    
              <div className="col-lg-3 col-6 text-center">
                <span className="purecounter" data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1">1463</span>
                <p>Hours Of Support</p>
              </div>
    
              <div className="col-lg-3 col-6 text-center">
                <span className="purecounter" data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1">15</span>
                <p>Hard Workers</p>
              </div>
    
            </div>
          </div>
        </section>
        </div>
      )
}

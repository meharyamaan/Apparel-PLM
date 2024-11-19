import React from 'react'
import './../../Styles/footer.css';
 


export default function FooterBar() {
  return (
    <div>
      <footer className="footer-20192" style={{marginTop: '70px'}}>
  <div className="site-section">
    <div className="container">

   <div className="cta d-block d-md-flex align-items-center px-5">
  <div className="col-md-8"> {/* Specify the width for the text */}
    <h2 className="mb-0">Ready for a next project?</h2>
    <h3 className="text-dark">Let's get started!</h3>
  </div>
  <div className="col-md-4 text-right"> {/* Specify the width for the button and align it to the right */}
    <a href="/" className="btn btn-dark rounded-0 py-3 px-5">
      Contact us
    </a>
  </div>
</div>


      <div className="row">
        <div className="col-sm">
          <a href="/" className="footer-logo">
            Apparel PLM
          </a>
          <p className="copyright">
            <small>© 2024</small>
          </p>
        </div>
        <div className="col-sm">
          <h3 style={{color: '#7A81C5', fontWeight: 'bold'}}>Customers</h3>
          <ul className="list-unstyled links">
            <li>
              <a href="/" style={{color: 'white'}}>Buyer</a>
            </li>
            <li>
              <a href="/" style={{color: 'white'}}>Supplier</a>
            </li>
          </ul>
        </div>
        <div className="col-sm">
          <h3 style={{color: '#7A81C5', fontWeight: 'bold'}}>Company</h3>
          <ul className="list-unstyled links">
            <li>
              <a href="/" style={{color: 'white'}}>About us</a>
            </li>
            <li>
              <a href="/" style={{color: 'white'}}>Careers</a>
            </li>
            <li>
              <a href="/" style={{color: 'white'}}>Contact us</a>
            </li>
          </ul>
        </div>
        <div className="col-sm">
          <h3 style={{color: '#7A81C5', fontWeight: 'bold'}}>Further Information</h3>
          <ul className="list-unstyled links">
            <li>
              <a href="/" style={{color: 'white'}}>Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="/" style={{color: 'white'}}>Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3 style={{color: 'white'}}>Follow us</h3>
          <ul className="list-unstyled social">
            <li>
              <a href="/">
                <span> 
                  <i class="bi bi-facebook"></i> 
                </span>
              </a>
            </li>
            <li>
              <a href="/">
              <span> 
                  <i class="bi bi-telegram"></i> 
                </span>
              </a>
            </li>
            <li>
              <a href="/">
              <span> 
                  <i class="bi bi-linkedin"></i> 
                </span>
              </a>
            </li>
            <li>
              <a href="/">
              <span> 
                  <i class="bi bi-instagram"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="/">
              <span> 
                 <i class="bi bi-twitter"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

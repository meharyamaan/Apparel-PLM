import React from 'react'
import '../css/footerbar.css';

export default function Contacts() {
  return (
    <div>
<>
<section className="ftco-section" style={{backgroundColor: '#1E2D3B'}}>
  <div className="container">
    {/* <div className="row justify-content-center">
      <div className="col-md-6 text-center mb-5">
        <h2 className="heading-section">Contact Form #03</h2>
      </div>
    </div> */}
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="wrapper">
          <div className="row mb-5">
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-map-marker" />
                </div>
                <div className="text" style={{color:'#47A9C9'}}>
                  <p> 
                    <span style={{color: 'white'}}>Address:</span> 198 West 21th Street, Suite 721 New
                    York NY 10016
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-phone" />
                </div>
                <div className="text">
                  <p>
                    <span style={{color: 'white'}}>Phone:</span>{" "}
                    <a href="tel://1234567920">+ 1235 2355 98</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-paper-plane" />
                </div>
                <div className="text">
                  <p>
                    <span style={{color: 'white'}}>Email:</span>{" "}
                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-globe" />
                </div>
                <div className="text">
                  <p>
                    <span style={{color: 'white'}}>Website</span> <a href="/">yoursite.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-7">
              <div className="contact-wrap w-100 p-md-5 p-4">
                <h3 className="mb-4">Contact Us</h3>
                <div id="form-message-warning" className="mb-4" />
                <div id="form-message-success" className="mb-4">
                  Your message was sent, thank you!
                </div>
                <form
                  method="POST"
                  id="contactForm"
                  name="contactForm"
                  className="contactForm"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="label" htmlFor="name">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="label" htmlFor="email">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="subject">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="/">
                          Message
                        </label>
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols={30}
                          rows={4}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          defaultValue="Send Message"
                          className="btn btn-primary"
                        />
                        <div className="submitting" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-stretch">
              <div
                className="info-wrap w-100 p-5 img"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  )" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>
    </div>
  )
}

import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Nucleus Software Exports Ltd., Noida <span>Jul, 2018 – Present</span></h2>
                        <p>Here I work on Spring-Hibernate. I have worked on improving performance issues in the application. I also hold experience in working with certain routines that are considered complex in their behaviour but for an essential part of the application.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Google Summer Of Code student with LibreOffice<span>Apr, 2018 – Aug, 2018</span></h2>
                        <p>I added support to LibreOffice Calc for importing data from various external sources like xml, html, csv and SQL.</p>
                        <p>I got a chance of working on one of the most complex codebases in opensource world. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Youngman India Private Ltd.  <span> May, 2017 – Dec, 2017</span></h2>
                        <p>I build a web application to manage their business and operations. It mangaes their business lifecycle. I also helped the company migrate from tally and be GST ready.</p>
                        <p>The software I build has helped increase revenue, reduce latency and improved customer satisfaction.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Delhi Police, South East District, New Delhi <span> Oct, 2016 – Jan, 2017</span></h2>
                        <p>Geting medical claims for government officials is always time consuming and a long process. I decided to build a project that can ease that process</p>
                        <p>Currently this runs on an ubuntu machine at Jasola branch.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Safety First (My startup - Discontinued) <span> May 2016 – Aug, 2017</span></h2>
                        <p>Me and my friends decided to build an app for HSE officers to discuss and share knowledge.</p>
                        <p>I got experience with android and firebase. Also I got to know the best practices for writing code that can survie the open world.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

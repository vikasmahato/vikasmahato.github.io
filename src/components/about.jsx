import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I'm a <strong>Mechanical Engineer turned Software Engineer</strong> with a passion for building scalable solutions and contributing to open source. Currently working at Expedia Group on Big Data and Data Engineering, I specialize in building distributed systems using <strong>Apache Spark</strong>, <strong>Scala</strong>, and <strong>Apache Kafka</strong> for processing large-scale datasets and real-time data streaming.</p>
                    <p>My journey from mechanical engineering to software development has given me a unique perspective on problem-solving. I love exploring new technologies and am constantly amazed by the progress we've made as a species (though I still miss the headphone jack!).</p>
                    <p>When I'm not coding, you'll find me contributing to open source projects, writing technical blogs, or capturing moments through my camera lens.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Big Data Engineering</h3>
                    <p>Building scalable data pipelines and distributed systems using Apache Spark, Scala, and Kafka for processing large-scale datasets.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-code" />
                </span>
                <div className="desc">
                    <h3>Scala & Spark</h3>
                    <p>Extensive experience in developing high-performance applications using Scala and Apache Spark for data processing and analytics.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Data Engineering</h3>
                    <p>Designing and implementing robust data engineering solutions with Kafka, Spark, and distributed computing frameworks.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development</h3>
                    <p>Experience building web applications using Spring, Laravel, React, and modern JavaScript frameworks.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Open Source</h3>
                    <p>Active contributor to open source projects including LibreOffice. Google Summer of Code alumni with a passion for giving back to the community.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-camera" />
                </span>
                <div className="desc">
                    <h3>Photography</h3>
                    <p>Sometimes the photographer in me awakens and I go on a photowalk to capture what interests me</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        
      </div>
    )
  }
}

import React, { Component } from 'react'
import './github-stats.css'

export default class GitHubStats extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-github-stats" data-section="github">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">GitHub Activity</span>
                <h2 className="colorlib-heading animate-box">My GitHub Stats</h2>
                <p style={{marginTop: '20px', fontSize: '16px'}}>Check out my contributions and coding activity</p>
              </div>
            </div>
            <div className="row github-stats-container">
              <div className="col-md-12 animate-box" data-animate-effect="fadeInUp">
                <div className="github-stat-card">
                  <img 
                    src="https://github-readme-stats.vercel.app/api?username=vikasmahato&show_icons=true&theme=gruvbox&hide_border=false&include_all_commits=true&count_private=true" 
                    alt="Vikas's GitHub stats" 
                    className="github-stat-image"
                  />
                </div>
              </div>
              <div className="col-md-12 animate-box" data-animate-effect="fadeInUp" style={{marginTop: '20px'}}>
                <div className="github-stat-card">
                  <img 
                    src="https://streak-stats.demolab.com?user=vikasmahato&theme=gruvbox&border_radius=4.5" 
                    alt="GitHub Streak" 
                    className="github-stat-image"
                  />
                </div>
              </div>
              <div className="col-md-12 animate-box" data-animate-effect="fadeInUp" style={{marginTop: '20px'}}>
                <div className="github-stat-card">
                  <img 
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=vikasmahato&theme=gruvbox&hide_border=false&include_all_commits=false&count_private=false&layout=compact" 
                    alt="Top Languages" 
                    className="github-stat-image"
                  />
                </div>
              </div>
              <div className="col-md-12 animate-box" data-animate-effect="fadeInUp" style={{marginTop: '20px', textAlign: 'center'}}>
                <a 
                  href="https://github.com/vikasmahato" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-learn"
                >
                  View My GitHub Profile <i className="icon-github" style={{marginLeft: '10px'}} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}


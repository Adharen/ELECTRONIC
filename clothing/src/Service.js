import React from 'react'
import './Service.css'
function Service() {
  return (
    <div className='service'>
      <div className="wrapper">
        <h2>Our Service</h2>
        <div className="line"></div>
        <div className="single-service">
          <div className="social"><i className='fa fa-file-photo-o'></i></div>
          <span></span>
          <h4>Service One</h4>
          <p>Added a new 'Begin with "Lorem Ipsum..."' checkbox — so you can choose if you want 
          it to begin with the classic sentence, or not.  Now it will save the last values you used each time you bring it up 
           Fixed some issues when trying to generate 'Lorem Ipsum' on a text layer that had multiple fonts</p>
        </div>

        <div className="single-service">
          <div className="social"><i className='fa fa-laptop'></i></div>
          <span></span>
          <h4>Service Two</h4>
          <p>Added a new 'Begin with "Lorem Ipsum..."' checkbox — so you can choose if you want 
          it to begin with the classic sentence, or not.  Now it will save the last values you used each time you bring it up 
           Fixed some issues when trying to generate 'Lorem Ipsum' on a text layer that had multiple fonts</p>
        </div>

        <div className="single-service">
          <div className="social"><i className='fa fa-pie-chart'></i></div>
          <span></span>
          <h4>Service One</h4>
          <p>Added a new 'Begin with "Lorem Ipsum..."' checkbox — so you can choose if you want 
          it to begin with the classic sentence, or not.  Now it will save the last values you used each time you bring it up 
           Fixed some issues when trying to generate 'Lorem Ipsum' on a text layer that had multiple fonts</p>
        </div>
      </div>
    </div>
  )
}

export default Service
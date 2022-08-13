import React from 'react'

function Individuals() {
  return (
    <div>
      <div className="team">
        <div className="team-cont">
          <h2>
            <span className="easy">The genius way to work</span>
            <span> better</span>
          </h2>
          <p>
            Calendly gives you control over team scheduling with a standardized,
            scalable process. It’s secure, easy to manage, and integrates with
            your team"'"s favorite tools, so you can get everyone working as
            efficiently and effectively as possible.
          </p>
          <div className="indi-but">
            <button>
              <p>Sign up for free</p>
            </button>
          </div>
        </div>
        <div className="team-img">
          <img src="images/Calendly-Individuals-Hero.jpg" alt="" />
        </div>
      </div>
      <div className="individuals">
        <div className="indi-img">
          <img src="images/Indi2.jpg" alt="" />
        </div>
        <div className="indi-text">
          <h5 className="easy">A CURATED CALENDAR</h5>
          <h2>Book up efficiently</h2>
          <p>
            When invitees select a meeting slot from your schedule, they only
            see the times you’re available, and only the length and type of
            meeting you want to have. Your schedule fills up efficiently, and
            everyone avoids excess email exchanges.
          </p>
          <h6>
            <span>Learn more</span>
          </h6>
        </div>
      </div>
      <div className="individuals2">
        <div className="indi-text">
          <h5 className="easy">AUTOMATED NOTIFICATIONS & FOLLOW-UPS</h5>
          <h2>Book up efficiently</h2>
          <p>
            Because Calendly automates administrative tasks like sending
            reminder emails and follow-ups, you can focus on the work that
            builds your business and brings customers back for more.
          </p>
          <h6>
            <span>Learn more</span>
          </h6>
        </div>
        <div className="indi-img2">
          <img src="images/Indi3.jpg" alt="" />
        </div>
      </div>
      <div className="indi-ban">
        <p>Find just-right plans for individuals and small teams</p>
        <button>See our plans</button>
      </div>
      <div className="foot">
        <div className="first">
          <h2>
            <span className="easy">Easy</span>
            <br />
            <span>ahead</span>
          </h2>
          <p>
            We take the work out of connecting with others so you can accomplish
            more.
          </p>
          <select name="lang" id="lang">
            <option value="volvo">English</option>
            <option value="saab">Twi</option>
            <option value="opel">French</option>
            <option value="audi">Chinese</option>
          </select>
        </div>
        <div className="second">
          <h3>About</h3>
          <p>About Calendly</p>
          <p>Contact Sales</p>
          <p>Newsroom</p>
          <p>careers</p>
          <p>Security</p>
        </div>
        <div className="second">
          <h3>Solutions</h3>
          <p>Customer Success</p>
          <p>Sales</p>
          <p>Recruiting</p>
          <p>Education</p>
          <p>Marketing</p>
        </div>
        <div className="second">
          <h3>Popular Features</h3>
          <p>Embed Calendly</p>
          <p>Availability</p>
          <p>Sending Notifications</p>
          <p>Using Calendly Mobile</p>
        </div>
      </div>
    </div>
  )
}

export default Individuals
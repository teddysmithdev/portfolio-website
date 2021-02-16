import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <nav
        class='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'
        id='sideNav'
      >
        <a class='navbar-brand js-scroll-trigger' href='#page-top'>
          <span class='d-block d-lg-none'>Teddy Smith</span>
          <span class='d-none d-lg-block'>
            <img
              class='img-fluid img-profile rounded-circle mx-auto mb-2'
              src='img/profile.jpg'
              alt=''
            ></img>
          </span>
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <a class='nav-link js-scroll-trigger' href='#about'>
                About
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link js-scroll-trigger' href='#experience'>
                Projects
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link js-scroll-trigger' href='#education'>
                Education
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link js-scroll-trigger' href='#skills'>
                Skills
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link js-scroll-trigger' href='#interests'>
                Interests
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link js-scroll-trigger' href='#awards'>
                Certifications
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class='container-fluid p-0'>
        <section
          class='resume-section p-3 p-lg-5 d-flex align-items-center'
          id='about'
        >
          <div class='w-100'>
            <h1 class='mb-0'>
              Teddy
              <span class='text-primary'>Smith</span>
            </h1>
            <div class='subheading mb-5'>
              Wilmington, NC 28403 · (910) 274-4925 ·
              <a href='mailto:name@email.com'>teddysmithdev@gmail.com</a>
            </div>
            <p class='lead mb-5'>Enthusiastic about all things technology.</p>
            <div class='social-icons'>
              <a href='https://github.com/teddysmithdev'>
                <i class='fab fa-github'></i>
              </a>
              <a href='https://twitter.com/teddysmithdev'>
                <i class='fab fa-twitter'></i>
              </a>
            </div>
          </div>
        </section>

        <hr class='m-0'></hr>

        <section
          class='resume-section p-3 p-lg-5 d-flex justify-content-center'
          id='experience'
        >
          <div class='w-100'>
            <h2 class='mb-5'>Projects</h2>

            <div class='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
              <div class='resume-content'>
                <h3 class='mb-0'>Sentiment Analysis Of Real-Esate Markets</h3>
                <div class='subheading mb-3'>
                  Natural Language Processing Web App
                </div>
                <p>
                  Each morning at 9:00am a Scrapy spider crawls real-estate blog
                  articles and runs them thru TextBlob (a sentiment analysis
                  wrapper for NLTK). After performing sentiment analysis it
                  stores all the data into MongoDB cloud. For the frontend, I
                  used React to communicate to a Flask API which displays all
                  the database data.
                </p>
                <a href='https://upbeat-neumann-e3f17d.netlify.com/'>
                  <i class='fas fa-link'></i>
                </a>
                <a href='https://github.com/teddysmithdev/Sentiment-analysis-of-realestate-news-data'>
                  <i class='fab fa-github ml-3'></i>
                </a>
              </div>
            </div>

            <div class='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
              <div class='resume-content'>
                <h3 class='mb-0'>Djangohoney</h3>
                <div class='subheading mb-3'>
                  Low-interaction TCP Python Honeypot
                </div>
                <p>
                  A honeypot that logs all SSH, TELNET, and ICMP connections
                  along with the first 1024 bytes of data from connection. Each
                  connection is stored in a Postgres database with all logic
                  being handled by Django backend. Each honeypot is a seperate
                  script that runs in the background of Django using
                  Celery/Redis combination.
                </p>
                <a href='http://www.djangohoney.com'>
                  <i class='fas fa-link'></i>
                </a>
                <a href='https://github.com/teddysmithdev/django-honeypot'>
                  <i class='fab fa-github ml-3'></i>
                </a>
              </div>
            </div>

            <div class='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
              <div class='resume-content'>
                <h3 class='mb-0'>Buffetologist</h3>
                <div class='subheading mb-3'>Financial Statement Dashboard</div>
                <p>
                  React dashboard that provides visulizations for financial
                  statements. Data is pulled from Financial Modeling Prep API
                  and visualized via ChartJS. Provides live search functionality
                  and state management from Context API.
                </p>
                <a href='http://www.buffetologist.com'>
                  <i class='fas fa-link'></i>
                </a>
                <a href='https://github.com/teddysmithdev/buffetologist'>
                  <i class='fab fa-github ml-3'></i>
                </a>
              </div>
            </div>

            <div class='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
              <div class='resume-content'>
                <h3 class='mb-0'>StockCerts</h3>
                <div class='subheading mb-3'>
                  Full Stack Django and React Ecommerce Store
                </div>
                <p>
                  Ecommerce store built in Django REST framework and React.
                  Includes Stripe payments, shopping cart, profile manager, and
                  different variations of products. Authorization, signup, and
                  login state is handled via Redux.
                </p>
                <a href='https://dj-react-ecommerce.herokuapp.com/'>
                  <i class='fas fa-link'></i>
                </a>
                <a href='https://github.com/teddysmithdev/ecommerce'>
                  <i class='fab fa-github ml-3'></i>
                </a>
              </div>
            </div>

            <div class='resume-item d-flex flex-column flex-md-row justify-content-between'>
              <div class='resume-content'>
                <h3 class='mb-0'>Cap-Computer</h3>
                <div class='subheading mb-3'>
                  Capitilization Rate Calculator Using Zillow API
                </div>
                <p>
                  Capitilization rates are a real-estate investing metric used
                  to judge the ROI for an investment property. They are time
                  consuming to calculate due to having to obtain information
                  from many different wesbites. An Express server handles users
                  search criteria, scrapes necessary data, and React displays
                  data after performing calculations.{" "}
                </p>
                <a href='https://www.cap-computer.com/'>
                  <i class='fas fa-link'></i>
                </a>
                <a href='https://github.com/teddysmithdev/cap-computer-react'>
                  <i class='fab fa-github ml-3'></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <hr class='m-0'></hr>

        <section
          class='resume-section p-3 p-lg-5 d-flex align-items-center'
          id='education'
        >
          <div class='w-100'>
            <h2 class='mb-5'>Education</h2>

            <div class='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
              <div class='resume-content'>
                <h3 class='mb-0'>East Carolina University</h3>
                <div class='subheading mb-3'>Bachelor of Science</div>
                <div>Business Managment - Finance Concentration</div>
                <p>GPA: 3.23</p>
              </div>
              <div class='resume-date text-md-right'>
                <span class='text-primary'>August 2010 - May 2015</span>
              </div>
            </div>

            <div class='resume-item d-flex flex-column flex-md-row justify-content-between'>
              <div class='resume-content'>
                <h3 class='mb-0'>North Surry High School</h3>
                <div class='subheading mb-3'></div>
                <p>GPA: 3.56</p>
              </div>
              <div class='resume-date text-md-right'>
                <span class='text-primary'>August 2006 - May 2009</span>
              </div>
            </div>
          </div>
        </section>

        <hr class='m-0'></hr>

        <section
          class='resume-section p-3 p-lg-5 d-flex align-items-center'
          id='skills'
        >
          <div class='w-100'>
            <h2 class='mb-5'>Skills</h2>

            <div class='subheading mb-3'>Programming Languages &amp; Tools</div>
            <ul class='list-inline dev-icons'>
              <li class='list-inline-item'>
                <i class='fab fa-html5'></i>
              </li>
              <li class='list-inline-item'>
                <i class='fab fa-css3-alt'></i>
              </li>
              <li class='list-inline-item'>
                <i class='fab fa-js-square'></i>
              </li>
              <li class='list-inline-item'>
                <i class='fab fa-react'></i>
              </li>
              <li class='list-inline-item'>
                <i class='fab fa-python'></i>
              </li>
              <li class='list-inline-item'>
                <i class='fab fa-node-js'></i>
              </li>
              <li class='list-inline-item'>
                <i class='fab fa-wordpress'></i>
              </li>
              <li class='list-inline-item'>
                <i class='fab fa-npm'></i>
              </li>
            </ul>

            <div class='subheading mb-3'>Workflow</div>
            <ul class='fa-ul mb-0'>
              <li>
                <i class='fa-li fa fa-check'></i>
                React Front-End Development
              </li>
              <li>
                <i class='fa-li fa fa-check'></i>
                Django, Flask, and Express Back-End
              </li>
              <li>
                <i class='fa-li fa fa-check'></i>
                Linux
              </li>
              <li>
                <i class='fa-li fa fa-check'></i>
                Networking
              </li>
            </ul>
          </div>
        </section>

        <hr class='m-0'></hr>

        <section
          class='resume-section p-3 p-lg-5 d-flex align-items-center'
          id='interests'
        >
          <div class='w-100'>
            <h2 class='mb-5'>Bio</h2>
            <p>
              Apart from development, I spend nearly all of my spare time long
              distance running.
            </p>
            <p>My main goals for 2020:</p>
            <ul>
              <li>
                Refactor an old MERN app called "Phone Spider" to produce an
                actual income via a subscription or credit-based system
              </li>
              <li>
                Create a React Native app that generates users and be in a
                position where I am forced to tackle issues of scaling, testing,
                and clean-code.
              </li>
            </ul>

            <p class='mb-0'></p>
          </div>
        </section>

        <hr class='m-0'></hr>

        <section
          class='resume-section p-3 p-lg-5 d-flex align-items-center'
          id='awards'
        >
          <div class='w-100'>
            <h2 class='mb-5'>Certifications</h2>
            <ul class='fa-ul mb-0'>
              <li>
                <i class='fa-li fa fa-trophy text-warning'></i>
                CISCO CCENT (Expired)
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default App;


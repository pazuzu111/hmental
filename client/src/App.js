import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom'
import './App.css';

const Header = () => {
    return (
        <header id="header">
            <a className="logo" href="index.html">Hive Mentality</a>
            <nav>
            </nav>
        </header>
    )
}

export default  class App extends Component {
     scroll = (id) => {

        let  el = document.getElementById(`${id}`)
        window.scrollTo({'behavior': 'smooth','left': 0,'top': el.offsetTop - 45})
    }

  render() {
    return (
      <div className="App is-preload">

           <Header />

            <Nav />

            <section id="banner">
                <div className="inner">
                    <h1>Welcome</h1>
                    <h3>particpate and help make our future brighter <br />
                   </h3>
                               <button onClick={(e) => this.scroll('cta')}>learn more </button>

                </div>
            </section>


            <section id="cta" className="wrapper">
                <div className="inner">
                    <h2>Our Purpose</h2>
                    <p className="left">Our goal is to put as many people as we can through college by awarding scholarships.
                    Students from various universities will log on to the platform and be able to compete in games and win scholarship money.
                    There are many bright people out there who cannot afford to go to college. I think as a community
                    we want our children and our fellow man to be educated and involved in the upkeep of our world.
                    We must nurture the next generation to be smarter and wiser than the one before. We believe it is
                    important to have a HIVE MENTALITY in order for the world to continue running. Specifically in education, a hive mentality means
                    more of us will be able to get an education by the hands of the commmunity. It is like paying taxes, however, your tax
                    is going to put someone through college and ensure we have a brighter future. </p>
                    </div>
            </section>


            <section className="wrapper grey">

                <div className="inner left">
                    <h2> Problems </h2>
                    <p>Too much student debt and not enough support for education.</p>
                </div>

                <div className="inner left">
                    <h2> Solutions </h2>
                    <p>Our solution is to make people aware of the education crisis and make them realize that
                    they have the power to make a change. As long as everyone in the hive contributes, our
                    purpose will be fulfilled. Unlike a traditional fundraiser, Our platform gives
                    the whole world a chance to particpate and become a valid member of the hive.
                    </p>
                </div>

                <div className="inner left">
                    <h2> Students </h2>
                    <p> There will be a roster of students who will have access to different scholarships.
                        First you must register for the scholarship, if it is a game then you will compete
                         and based on your results you may win your scholarship funds. Students may also get
                         lucky and win funds through raffles amongst other methods.
                    </p>
                </div>

                <div className="inner left">
                    <h2> Investors and Donors </h2>
                    <p> Investors and Donors are the heart and soul of our operation.
                        Without donations, the Hive Mentality platform cannot operate.
                        Students receive scholarships from the donations that we receive.
                        There is no selling point, If you are an investor then you are a hive member which means
                        you are dedicated to supporting education and the evolution of the hive.
                    </p>
                </div>

                <div className="inner left">
                        <h2> funds </h2>
                        <p>50% of funds raised will go to scholarship funds, 25% to investors, and 25% to maintenance and upkeep of movement</p>
                </div>
            </section>



            <section className="wrapper">
                <div className="inner left">
                    <header className="special">
                        <h2>Self-driven communities</h2>
                        <h4>Hive mentality is dedicated to contributing to the future by putting the next generation through college</h4>
                    </header>
                    <div className="highlights">
                        <section>
                            <div className="content">
                                <header>
                                    <i href="#" className="icon fa-users"></i>
                                    <h3>Pro-Community</h3>
                                </header>
                                <p>We believe supporting eachother is the solution to all of this college debt that we see.</p>
                            </div>
                        </section>
                        <section>
                            <div className="content">
                                <header>
                                    <i className="icon fas fa-graduation-cap"></i>
                                    <h3>Pro-Education</h3>
                                </header>
                                <p>We believe education is the foundation of any great nation.</p>
                            </div>
                        </section>
                        <section>
                            <div className="content">
                                <header>
                                    <i className="icon far fa-chart-line"></i>
                                    <h3>Pro-Evolution</h3>
                                </header>
                                <p>We believe humanity must evolve, and the way to evolution is through education.</p>
                            </div>
                        </section>
                        <section>
                            <div className="content">
                                <header>
                                    <i href="#" className="icon fa-link"></i>
                                    <h3>Pro-Blockchain</h3>
                                </header>
                                <p>All of your information is held on the block-chain which means it is tamper-proof and it is handled by no one</p>
                            </div>
                        </section>
                        <section>
                            <div className="content">
                                <header>
                                    <i href="#" className="icon fa-lock"><span className="label">Icon</span></i>
                                    <h3>Pro-Security</h3>
                                </header>
                                <p>We perform daily audits of our smart contracts to ensure secure stability.</p>
                            </div>
                        </section>
                        <section>
                            <div className="content">
                                <header>
                                    <i className="fa-5x fas fa-seedling"></i>
                                    <h3>Pro-Nurture</h3>
                                </header>
                                <p>If we want the future to be better, we must educate and nurture the up and coming generations.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </section>





            <footer id="footer">
                <div className="inner">
                    <div className="content">
                        <section>
                            <h3>Hive Mentality</h3>
                            <p>Giving people like us opportunities so that they may become great.


                            </p>
                        </section>
                        <section>
                            <h4>Sem turpis amet semper</h4>
                            <ul className="alt">
                                <li><a href="#">Dolor pulvinar sed etiam.</a></li>
                                <li><a href="#">Etiam vel lorem sed amet.</a></li>
                                <li><a href="#">Felis enim feugiat viverra.</a></li>
                                <li><a href="#">Dolor pulvinar magna etiam.</a></li>
                            </ul>
                        </section>
                        <section>
                            <h4>Magna sed ipsum</h4>
                            <ul className="plain">
                                <li><a href="#"><i className="icon fa-twitter">&nbsp;</i>Twitter</a></li>
                                <li><a href="#"><i className="icon fa-facebook">&nbsp;</i>Facebook</a></li>
                                <li><a href="#"><i className="icon fa-instagram">&nbsp;</i>Instagram</a></li>
                                <li><a href="#"><i className="icon fa-github">&nbsp;</i>Github</a></li>
                            </ul>
                        </section>
                    </div>
                    <div className="copyright">
                        &copy; HiveMentality | 2018
                    </div>
                </div>
            </footer>

      </div>
    );
  }
}

const Nav = () => {
    return (
        <div>
            <ul id="menu">
              <li className="links"><Link to="/"> purpose </Link></li>
              <li className="links"><Link to="/about"> dapp </Link></li>
              <li className="links"><Link to="/topics"> whitepaper </Link></li>
            </ul>
        </div>
    )
}

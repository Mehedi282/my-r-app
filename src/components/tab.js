import { Tabs, Tab } from 'react-bootstrap'
import Contact from './Contact'
import Home from './Home'
import Profile from './Profile'
import cox from '../images/me.png'

function Tabb() {
  return (
    <div >
      <div id="cox">
        <img data-aos="fade-right" src={cox} id="img"></img>
        <div id="overlay">
          <div id="text">What's up!!</div>
        </div>
      </div>
      <div data-aos="fade-left" id="tabbb">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Me">
            <Home />
          </Tab>
          <Tab eventKey="profile" title="Skills">
            <Profile />
          </Tab>
          <Tab eventKey="contact" title="Experiences">
            <Contact />
          </Tab>
        </Tabs>
      </div><br/><br/><br/><br/>
    </div>
  )
}

export default Tabb;

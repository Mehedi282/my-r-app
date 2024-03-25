import React from 'react'
import { ProgressBar } from 'react-bootstrap'


function Profile() {
    return (
        <div>
            <h3 id="itsblue">My Skills</h3>
            <p style={{ textAlign: 'left' , margin:'15px', marginBottom:'0px'}}>I have a great skill in web delopment. I have got enough knowladge in HTML, CSS, JAVASCRIPT.
                 I'm aslo expert in React js which is one of the famous framework of JAVASCRIPT with hige collection
                of library. And as backend developer i know Node js & Asp.Net, Microsoft sql server,
                Mysql  </p><br />
            <div id="progress">
                <div style={{display:'flex', flexDirection:'column', gap:20,paddingLeft:'20px' , paddingRight:'20px'}}>
                    <div>
                        <h5>Html/Css/JavaScript</h5>
                        <ProgressBar animated variant="danger" now={94} />
                    </div>
                    <div >
                        <h5>React.js (Redux, RTK Query)</h5>
                        <ProgressBar animated variant="warning" now={98} />
                    </div>
                    <div>
                        <h5>Nodejs(Express js, Nest js)</h5>
                        <ProgressBar animated variant="info" now={95} />
                    </div>
                    <div >
                        <h5>Asp.Net Core</h5>
                        <ProgressBar animated variant="primary" now={90} />
                    </div>
                    <div>
                        <h5>MongoDB</h5>
                        <ProgressBar animated variant="dark" now={95} />
                    </div>
                    <div >
                        <h5>Mysql</h5>
                        <ProgressBar animated variant="primary" now={90} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

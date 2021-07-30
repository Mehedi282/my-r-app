import React from 'react'
import { ProgressBar } from 'react-bootstrap'


function Profile() {
    return (
        <div>
            <h3 id="itsblue">My Skills</h3>
            <p>I have a great skill in webdelopment. I have got enough knowladge in HTML,CSS,JAVASCRIPT,BOOTSTRAP. 
                And then i'm expert in React js which is one of the famous framework of JAVASCRIPT with hige collection 
                of library. And as backend developer i have learned Java,node js, python(django) , Microsoft sql server and 
                mysql </p><br/>
        <div id="progress">       
            <div>
                <div>
                <h5>Html/Css</h5>
                <ProgressBar  animated variant="danger" now={94} />
                </div>
                <div >
                <h5>React.js</h5>
                <ProgressBar animated variant="warning" now={98} />
                </div>
            </div>
            <div >
                <div>
                <h5>java</h5>
                <ProgressBar  animated variant="info" now={95} />
                </div>
                <div >
                <h5>node.js</h5>
                <ProgressBar animated variant="primary" now={90} />
                </div>
            </div>
            <div >
                <div>
                <h5>django</h5>
                <ProgressBar  animated variant="dark" now={95} />
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

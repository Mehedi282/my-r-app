import React from 'react'
import { ProgressBar } from 'react-bootstrap'


function Profile() {
    return (
        <div>
            <h3 id="itsblue">My Skills</h3>
            <p style={{ textAlign: 'left', margin: '15px', marginBottom: '0px' }}>
            I possess a robust skill set in web development, encompassing proficiency in HTML, CSS, JavaScript, and 
            TypeScript. Additionally, I excel in React.js and Next.js for front-end development, 
            while demonstrating expertise in Node.js (Express.js/Nest.js), MongoDB, and MySQL for backend operations.
             Leveraging my knowledge of <b style={{color:"#15db47"}}> Data structure and Algorithomic thinking</b>, 
            I consistently produce efficient code with optimized space and time complexity.
                
                
                 </p><br />
            <div id="progress">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingLeft: '20px', paddingRight: '20px' }}>
                    <div>
                        <h5>Html/Css/Tailwind/JavaScript</h5>
                        <ProgressBar animated variant="danger" now={94} />
                    </div>
                    <div >
                        <h5>React.Js/Next.Js (Redux, Redux Toolkit, RTK Query,TypeScript)</h5>
                        <ProgressBar animated variant="warning" now={98} />
                    </div>
                    <div>
                        <h5>Node.js (Express js, Nest js)</h5>
                        <ProgressBar animated variant="info" now={95} />
                    </div>
                    <div >
                        <h5>React Native</h5>
                        <ProgressBar animated variant="primary" now={80} />
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

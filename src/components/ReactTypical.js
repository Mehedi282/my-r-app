import React from 'react'
import Typical from 'react-typical'

function ReactTypical() {
    return (
       <p id="typical">
           <Typical
           loop={Infinity}
           steps={[
                "I'am A Web Programer",
                3000,
                'I love Web Designig',
                3000,
                'I love Frontend',
                3000,
                'I love Backend'
           ]}
           />

       </p>
    )
}

export default ReactTypical

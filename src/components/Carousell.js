import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbasr';
import Textanime from './Textanimation';
import ReactTypical from './ReactTypical';




function Carousell() {

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <div> <img
        style={{ opacity: '.2', filter: 'blur(15px)', position: 'absolute', height: '100%', width: "100%" }}
        src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/what-is-a-web-developer.jpg"
        alt="First slide"
      /></div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <div style={{ height: '100%' }}>
          <div>
            <Navbar />
          </div>
          <div className='dfsfd' style={{ justifyContent: 'center', height: '90%' }}>
            <div className='hero-left-div' style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
              <div className='hero-2' style={{margin:'10px'}}>
                <p style={{ fontSize: '27px', margin: "0px" }}>I'M  <span style={{ fontSize: '60px', color: "yellow" }}>MEHEDI HASSAN </span></p>
                <p style={{ fontSize: '27px', margin: "0px", padding: "0px" }}>JAVASCRIPT & ASP.NET CORE</p>
                <p style={{ fontSize: '27px', margin: "0px", padding: "0px" }}>DEVELOPER</p>

                <button style={{ backgroundColor:'transparent', color:'yellow', fontSize:"20px", border:".2vw solid yellow" , padding: '.4VW', paddingRight:'2vw',  paddingLeft:'2vw', marginTop:'2.5vw' }}>Contact Me</button>
              </div>
            </div>
            <div className='hero-right-div' style={{ height: '100%',   justifyContent:'center', alignItems:'center' }}>
              <img style= {{maxWidth:'100%', height:'auto'}}src='https://cdni.iconscout.com/illustration/premium/thumb/web-development-2974925-2477356.png'>
              </img>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Carousell

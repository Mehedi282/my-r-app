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
          <div className='dfsfd' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '90%' }}>
            <div style={{ height: '100%', width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
              <div>
                <p style={{ fontSize: '1.5vw', margin: "0px" }}>I'M  <span style={{ fontSize: '3vw', color: "yellow" }}>MEHEDI HASSAN </span></p>
                <p style={{ fontSize: '2vw', margin: "0px", padding: "0px" }}>JAVASCRIPT & ASP.NET </p>
                <p style={{ fontSize: '2vw', margin: "0px", padding: "0px" }}>DEVELOPER</p>

                <button style={{ backgroundColor:'transparent', color:'yellow', fontSize:"1.3vw", border:".2vw solid yellow" , padding: '.4VW', paddingRight:'2vw',  paddingLeft:'2vw', marginTop:'2.5vw' }}>Contact Me</button>
              </div>
            </div>
            <div style={{ height: '100%', width: '50%', display:'flex', justifyContent:'center', alignItems:'center' }}>
              <img src='https://cdni.iconscout.com/illustration/premium/thumb/web-development-2974925-2477356.png'>
              </img>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Carousell

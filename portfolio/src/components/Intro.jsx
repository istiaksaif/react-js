import "./intro.css"
import Me from "../img/profile_img.jpg"
const intro = () => {
  return (
    <div className="page">
      <div className="page-left">
        <div className="page-left-wrapper">
          <div className="media-link">
            <a href="#">
              <i className="fa fa-facebook-square" />
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin" />
            </a>
            <a className="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
          <h3 className="page-name-intro">Hello, This is </h3>
          <h1 className="name">Istiak Saif</h1>
          <div className="page-title">
            <div className="page-title-wrapper">
              <div className="page-title-item">Android Developer</div>
              <div className="page-title-item">Full Stack Developer</div>
              <div className="page-title-item">SoftWare Developer</div>
              <div className="page-title-item">UI/UX Designer</div>
              <div className="page-title-item">Freelancer</div>
            </div>
          </div>
          <p className="page-description">
            <p>1. Fixing google map api on android and Ios Apps</p>
            <p>2. Uploud on the stores Apple and Play</p>
            anyone connect my react native app with wallet connect
          </p>
        </div>
      </div>
      <div className="page-right">
        <div className="profile-pic">
          <div className="img-bg">

          </div>
          {/* <img src={Me} alt="" className="page-image" /> */}
        </div>
      </div>
    </div>
  )
}

export default intro
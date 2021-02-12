import profileImg from '../../assets/hero-blk-bg-blurred.jpg';
import './Home.scss';

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="content-wrapper">
          <h1>TAVON MCVEY</h1>
          <h2>STUNT-PERFORMER / PARKOUR ATHLETE</h2>
          <p>As of 2020</p>
          <h3>3x consecutive speed USA 🇺🇸 Parkour Champion.</h3>
        </div>
        <div className="image-wrapper">
          <img src={profileImg} />
        </div>
      </div>
    </div>
  );
} 

export default Home;

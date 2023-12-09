import './Home.css';
import CenteredImageComponent from './logo';
import AnimatedTextComponent from './for_trainers';
import AnimatedTextComponent2 from './for_trainerees';

function Home() {
  return (
    <div className="Home">
            <div className="lrec"></div>
            <div className="rrec"></div>
            <div className="logobg"></div>
            <div className="logo">
            <CenteredImageComponent />
            </div>
            <div className="slog">strong, qualified and legendary</div>
            <AnimatedTextComponent />
            <AnimatedTextComponent2 />
    </div>
  );
}

export default Home;
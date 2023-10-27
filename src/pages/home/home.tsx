import './home.css';
import NavBarComponent from '../../assets/components/NavBarComponent.tsx/NavBarComponent';
import Background from '../../assets/components/BackgroundComponent/background';
import starship from '../../assets/components/BackgroundComponent/starship.png';

function HomePage() {

    return (
        <div>
            <Background></Background>
            <main>
                <div>
                    <NavBarComponent></NavBarComponent>
                    <div className='div-presentation'>
                        <div className='div-presentation-container-img'>
                            <img className='div-presentation-img' src={starship} alt="" />
                        </div>
                        <div className='div-presentation-container-label'>
                            <label className='div-presentation-label' htmlFor="">Rick y Morty es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon para Adult Swim. La serie sigue las aventuras de un científico alcohólico, Rick, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica familiar y los viajes espaciales intergalácticos. Actualmente la serie cuenta con seis temporadas.</label>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomePage;

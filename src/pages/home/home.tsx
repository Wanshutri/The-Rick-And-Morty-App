import './home.css';
import NavBarComponent from '../../assets/components/NavBarComponent.tsx/NavBarComponent';
import Background from '../../assets/components/BackgroundComponent/background';
import starship from '../../assets/components/BackgroundComponent/starship.png';
import ArticleComponent from '../../assets/components/ArticleComponent/ArticleComponent';

function HomePage() {

    return (
        <main >
            <Background></Background>
            <NavBarComponent></NavBarComponent>
            <div className='div-presentation'>
                <div className='div-presentation-container-img'>
                    <img className='div-presentation-img' src={starship} alt="" />
                </div>
                <div className='div-presentation-container-label'>
                    <label className='div-presentation-label' htmlFor="">Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and a misanthropic grandfather dragging his grandson into hijinks.</label>
                    <br /><br />
                    <label htmlFor="" className='div-presentation-label'>The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family lives outside of Seattle, Washington. The adventures of Rick and Morty, however, take place across an infinite number of realities, with the characters traveling to other planets and dimensions through portals and Rick's flying saucer. <br /><br />

                        Rick is an eccentric and alcoholic mad scientist, who eschews many ordinary conventions such as school, marriage, love, and family. He frequently goes on adventures with his 14-year-old grandson, Morty, a kind-hearted but easily distressed boy, whose naïve but grounded moral compass plays counterpoint to Rick's Machiavellian ego. Morty's 17-year-old sister, Summer, is a more conventional teenager who worries about improving her status among her peers and sometimes follows Rick and Morty on their adventures. The kids' mother, Beth, is a generally level-headed person and assertive force in the household, though self-conscious about her professional role as a horse surgeon. She is dissatisfied with her marriage to Jerry, a simple-minded and insecure person, who disapproves of Rick's influence over his family. <br /><br />

                        Different versions of the characters inhabit other dimensions throughout the show's multiverse and their personal characteristics can vary from one reality to another. The show's original Rick identifies himself as "Rick Sanchez of Earth Dimension C-137", in reference to his original universe, but this does not apply to any other member of the Smith household.[10] For instance, in the first-season episode "Rick Potion #9", after turning the entire world population into monsters, Rick and Morty move to a different dimension, leaving the original Summer, Beth and Jerry behind.</label>
                </div>
            </div>
            <div className='div-section-container'>
                <h1 className='div-section-h1'>Popular Characters</h1>
            </div>
            <div className='div-section-container-articles'>
                <ArticleComponent characterId={1}></ArticleComponent>
                <ArticleComponent characterId={2}></ArticleComponent>
                <ArticleComponent characterId={3}></ArticleComponent>
                <ArticleComponent characterId={4}></ArticleComponent>
            </div>
            <div className='jerry'>
                <ArticleComponent characterId={5}></ArticleComponent>
            </div>

        </main>
    );
}

export default HomePage;

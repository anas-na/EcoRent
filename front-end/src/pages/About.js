import '../styles/About.css'
import Adam from'../styles/media/Adam.svg' 
import Anas from '../styles/media/Anas.svg'
import Carina from '../styles/media/Carina.svg'
import Demi from '../styles/media/Demi.svg'

export const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutBlurb">
        <h3>About EcoRent</h3>
        <h7>EcoRent is a new way to get the items you need without committing to them! You can still enjoy high-quality products, but only when you need them!
            No need to worry about storing them after or having to toss them when you find a new and improved version. 
        </h7>
      </div>
      <div className="aboutTeam">
          <h3>Our Team</h3>
          <div className='memberContainer'>
        <div className="member">
            <img src={Adam} />
            <h7>Adam</h7>
            <h8>Back-end Lead</h8>
            <a href='https://github.com/AdamTahiri' target="_blank">Github</a>
        </div>

        <div className="member">
            <img src={Anas}/>
            <h7>Anas</h7> 
            <h8>Technical Lead</h8>
            <a href='https://github.com/itsanasna' target="_blank">Github</a>
        </div>

        <div className="member">
            <img src={Carina} />
            <h7>Carina</h7>
            <h8>Design Lead</h8>
            <a href='https://github.com/tCarina' target="_blank">Github</a>
        </div>
        <div className="member">
            <img src={Demi} />
            <h7>Oluwa(Demi)lade</h7>
            
            <h8>Front-end Lead</h8>
            <a href='https://github.com/WoahDemi' target="_blank">Github</a>
        </div>
      </div>
      </div>
    </div>
  );
};

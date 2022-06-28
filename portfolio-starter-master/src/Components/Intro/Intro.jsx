import './Intro.css';
import Instagram from '../../img/Instagram.png'
import Github from '../../img/Github.png'
import Linkedin from '../../img/Linkedin.png'

const Intro = () => {
    return (
        <div className="intro">
           <div className="i-left">
            <div className="i-name">

                <span>Hello!</span>
                <span> I am Lívia Martins</span>
                <span> Frontend Developer Junior, 
                    with experience in web designing and development.</span>

            </div>

            <button className="button i-button">Hire me</button>

            <div className="i-icons">
                <img src={Github} alt=""></img>
                <img src={Linkedin} alt=""></img>
                <img src={Instagram} alt=""></img>
            </div>

           </div>

           
           <div className="i-right">

                
            </div>
        </div>
    );
};
 export default Intro
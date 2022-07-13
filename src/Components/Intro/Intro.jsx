import './Intro.css';
import Instagram from '../../img/instagram.png'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Vetor1 from '../../img/Vetor1.png'
import Vetor2 from '../../img/Vetor2.png'
import girl from '../../img/girl.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import { FloatingDiv } from '../FloatingDiv/FloatingDiv'

export const Intro = () => {
    return (
        <div className="intro">
           <div className="i-left">
            <div className="i-name">

                <span>Hello!</span>
                <span> I am Lívia Martins ;)</span>
                <span> Frontend Developer Junior, 
                    with experience in web designing and development.</span>

            </div>

            <button className="button i-button">Hire me</button>

            <div className="i-icons">
                <img src={Github} alt=""></img>
                <img src={Linkedin} alt=""></img>
                <img src={Instagram} alt="a"></img>
            </div>

           </div>


           <div className="i-right">

           <img src={Vetor1} alt=""></img>
           <img src={Vetor2} alt=""></img>
           <img src={girl} alt=""></img>
           <img src={glassesimoji} alt=""></img>
            <div style={{top: '-4%', left: '68%'}} >
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top: '18rem', left: '0rem'}}>
                <FloatingDiv image={thumbup} txt1='Pensando' txt2='aqui'/>
            </div>

            {/* blur divs*/}
            <div className="blur" style={{ background : " rgb (236 210 255)" }}></div>
            <div className="blur" style={{background : 'RGB(239, 207, 223)', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>


            </div>
        </div>
    );
};  
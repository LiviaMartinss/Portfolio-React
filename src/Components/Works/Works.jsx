import './Work.css';
import React from "../../img/atom.png"
import Typescript from "../../img/typescript.png"
import Javascript from "../../img/javascript.png"
import Css from "../../img/css.png"
import Html from "../../img/html-5.png"

export const Work = () => {

    return(

        <div className="works">

            <div className="awesome">
                
                <span>This is</span>
                <span>my technologies ツ</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ut repellendus, iure nostrum libero sit quia veritatis veniam! 
                    <br />
                    Ab, recusandae quia. 
                    <br />
                    Ab, recusandae quia. 
                    <br />

                </span>

                    <button className="button s-button">Read more</button>
                               
                <div className="blur s-blur1" style={{ background: "ABF1FF94" }}></div>
            </div>

            {/* right side */}

            <div className="w-right">
                
                <div className="w-mainCircle">

                    <div className="w-secCircle react">
                        <img src={React} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Typescript} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Javascript} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Html} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Css} alt="" />
                    </div>
                </div>

                {/* background Circles */}

                <div className="w-backCircle blueCircle "></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>
        </div>
    )
}
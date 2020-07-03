import React,{useState} from 'react'
import ReusableComponent from '../components/ReusableComponent'
import placeholder from '../assets/images/placeholder.jpg'

 const About = () => {
     const initialColor ={
         backgroundColor:""
     }
     const [bgColor, setColor] = useState(initialColor)
     const changeColor = (e)=>{
        setColor({
            backgroundColor:bgColor
        })
     }
    return (
        <div className="about commonClass">
            <div className="about-head">
                <h2>About iJavascript</h2>
            </div>

            <hr className="borderBottom"/>

            <div className="about-info col-md-12 noPadding">
                <div className="col-md-3 col-lg-3 col-xs-12 about-img noPadding">
                    <img src={placeholder} alt="about" />
                </div>
                <div className="col-md-9 col-lg-9 col-xs-12">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                         when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book.
                         It has survived not only five centuries</p>

                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                         when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. 
                        It has survived not only five centuries</p>
                </div>
            </div>

            <div className="reusable">
                <h3>Re-usable Component</h3>
                <div className="reu-cmp">
                    <ReusableComponent onClick={changeColor} style={{backgroundColor:setColor}}/>
                    <ReusableComponent />
                </div>
            </div>

        </div>
    );
} 

export default About
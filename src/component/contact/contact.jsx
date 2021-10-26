import "./contact.css"
import Phone from "../../img/5.png"
import Email from "../../img/6.png"
import Address from "../../img/7.png"
import { useState as UseState, useRef as UseRef } from "react";
import emailjs from 'emailjs-com';


const contact = () => {
    const formRef=UseRef();
    const[done,setDone]=UseState(false)
    
    const handleSubmit=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_1lz27nb', 'template_ugz7quo', formRef.current, 'user_MpkLYFFhU7Ss6EpV6G21K')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Lets Contact Me</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +9477 58 35 974
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            bestkavindu@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            no-241,udumulla,balangoda
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's Your history</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellendus quos fugiat consequuntur obcaecati rerum! Tempore numquam error aliquam quae fugiat dolorem eveniet sunt perspiciatis debitis, ipsum libero fugit. Ducimus?
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name="user_name"/>
                            <input type="text" placeholder="Subject" name="user_subject"/>
                            <input type="text" placeholder="Email" name="user_email"/>
                            <textarea rows="5" placeholder="Message" name="message"/>
                            <button>Submit</button>
                            <div className="c-thank">{done && "Thank You"}</div>

                        </form>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default contact

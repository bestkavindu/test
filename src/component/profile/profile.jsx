import React from 'react'
import "./profile.css"

const profile = () => {
    return (
        <div className='container'>
            <div className='left'>
                <div className='icon'>
                    <i className='fa fa-facebook'></i>
                    <i className='fa fa-instagram'></i>
                    <i className='fa fa-twitter'></i>
                    <i className='fa fa-facebook'></i>
                </div>
                <div className='name'>
                    <h1>Hello,I'M <span className='hight-name'>KAVINDU</span> </h1>
                </div>
                <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Devoloper</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Data Sceintist</div>
                            <div className="i-title-item">Content Creatot</div>
                            <div className="i-title-item">Gamer</div>
                        </div>
                    </div>
                    <div className='desc'>
                   <p>i design and develop service for custemers of all sizes.modern websites and web services,also i studied statistic and methematics and various language</p>
                    </div>
                    <button className='btn'>Get Resume</button>

            </div>
            <div className='right'>
                <div className='img'>
                    <div className='img-back'>

                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default profile

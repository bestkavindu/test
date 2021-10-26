import "./intro.css"
import Me from "../../img/4.png"

const intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hellow, My Name Is</h2>
                    <h1 className="i-name">Kavindu</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Devoloper</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Data Sceintist</div>
                            <div className="i-title-item">Content Creatot</div>
                            <div className="i-title-item">Gamer</div>
                        </div>
                    </div>
                    <div className="i-desc">i design and develop service for custemers of all sizes.modern websites and web services,also i studied statistic and methematics and various language</div>

                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
            
        </div>
    )
}

export default intro

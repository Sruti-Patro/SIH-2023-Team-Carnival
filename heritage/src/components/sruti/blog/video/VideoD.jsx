import disVidBg from '../../../../../src/assets/disVidBg.mp4'
import "./videoD.css"

export default function VideoD() {
    return(
        <>
        <div className="main">
            <video src={disVidBg} autoPlay loop muted/>
        </div>
        </>
    )
}
export default function ViewImage(paramater) {
    console.log(paramater,"parameter");
    return(
        <>
            <div style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"ButtonShadow"}}></div>
            <img src={paramater} ></img>
        </>
    )
}
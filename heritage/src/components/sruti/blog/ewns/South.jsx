import CardB from '../card/CardB'
import './mainD.css'

export default function South(){
    let blogList=[{
        id:1,
        imageSrc:"https://images.pexels.com/photos/6040175/pexels-photo-6040175.jpeg?auto=compress&cs=tinysrgb&w=600",
        imageTittle:"Sun Temple",
        heading:"Sun Temple,Konark",
        description:"Situated on the shores of the Bay of Bengal, the temple at Konark is a majestic representation of the Sun God’s chariot. The 24 wheels of the chariot are decorated with symbolic designs and the magnificent carved relief is led by a team of six horses that are uniquely detailed and still inspire awe. Built in the 13th century, it is one of India’s most famous temples",
        userName:"UserId1",
        smI:"/",
        smL:"/",
        smG:"/"
      },
       {
        id:2,
        imageSrc:"https://www.ciiblog.in/wp-content/uploads/2019/12/2-2-1030x725.png",
        imageTittle:"Mahabodhi Temple Complex",
        heading:"Mahabodhi Temple Complex, Bodh Gaya",
        description:"One of the holiest pilgrimage sites for Buddhists, this place marks the spot where Lord Gautam Buddha received enlightenment. The first temple of this complex was built by Emperor Ashok in the 3rd century BCE and the temples present today were built during the 5th or 6th century CE.  It is one of the oldest brick temples in India. Stretching up to about 55 metres in height, its pyramidal shikhara (tower) has several layers of alcoves, arch motifs and fine engravings.",
        userName:"UserId2",
        smI:"/",
        smL:"/",
        smG:"/"
       },
       {
        id:5,
        imageSrc:"https://taajoo.com/wp-content/uploads/elementor/thumbs/Word_cloud_of_Indian_languages_and_scripts-91723895-1559825404-pen8gx81sj21pkv8z9jnfew5ppgiaa471h9fp6e26g.png",
        imageTittle:"languages used across Eastern India",
        heading:"Languages",
        description:"Bengali is the dominant language of West Bengal Hindi, Bhojpuri, Maaithili, Maagahi and Urdu are the dominant languages of Bihar. Hindi, Santali, Khortha and Nagpuri are the dominant language of Jharkhand; however, some tribals speak their own tribal languages. Jharkhand has accorded second language status to Angika, Bengali, Bhojpuri, Ho, Kharia, Kurukh, Khortha, Kurmali, Magahi, Maithili, Mundari, Nagpuri, Odia, Santali and Urdu.Odia is the dominant language of Odisha. Odia is the only major classical language in east India and sixth Indian language to be considered as a classical language in the basis of being old and not borrowed from other languages.",
        userName:"UserId5",
        smI:"/",
        smL:"/",
        smG:"/"
       },
       {
        id:3,
        imageSrc:"https://www.ciiblog.in/wp-content/uploads/2019/12/6-1-1030x709.png",
        imageTittle:"Sundarbans National Park",
        heading:"Sundarbans National Park",
        description:" The Sundarbans covers an area of 10,000 sq.km and contains the world’s largest area of mangrove forests formed by the confluence of the Ganga and the Brahmaputra river. Many rare or endangered species including tigers, aquatic mammals, birds and reptiles live in the park.",
        userName:"UserId3",
        smI:"/",
        smL:"/",
        smG:"/"
       },
       {
        id:4,
        imageSrc:"https://taajoo.com/wp-content/uploads/elementor/thumbs/Folk-Dances-Of-East-India-ili-474-img-2-pen7in1yj24k9kny5y2hzkbxqsfkjp0mnsowkv7z48.jpg",
        imageTittle:"a performance scene from one of the dances of Eastern Indian ",
        heading:"The Powerful Yet Storming Traditional Dance",
        description:"There are many folk dances in east India, with the best-known being Jhijhiya, Jhumair, Domkach, Ghumura Dance, Sambalpuri and Chhau dance.",
        userName:"UserId4",
        smI:"/",
        smL:"/",
        smG:"/"
       }
    ]
    return(
        <div className="main">
            {
                blogList.map((e,i)=>(
                    <CardB {...e} key={i}/>
                ))
            }
        </div>
    )
}
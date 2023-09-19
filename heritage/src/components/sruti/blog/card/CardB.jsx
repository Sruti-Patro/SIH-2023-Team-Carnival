// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

export default function CardB(list) {
  console.log(list,"list in card east");

  const navigate = useNavigate();

    function View(params) {
    console.log(params.id,"clicked");
      return (navigate(`/blog/${params.id}`))
    }

  // function View(params) {
  //   console.log(params,"clicked");
  //   return(
  //     <>
  //       <ViewBlog/>
  //     </>
  //   )
  // }

  return (
    <>
    {/* {
      list.map((el)=>
            ( */}
                <Card sx={{ maxWidth: 1700 }} style={{padding:"50px",margin:"50px 20%"}}>
                <CardMedia
                  sx={{ height: 500,display:'flex', objectFit:'fit'}}
                  image={list.imageSrc}
                  title={list.imageTittle}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"fantasy"}}>
                    {list.heading}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{fontFamily:"serif",fontSize:"20px"}}>
                    {list.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align='right' sx={{fontStyle:"italic",fontSize:"18px"}}>
                      ~ by {list.userName} 
                      <br />
                      {/* <a style={{margin:"2px"}} href={list.smI} className='cardBlog'><img style={{width:"2rem"}} src='data:image/png;base64,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'></img></a> */}
                      {/* <a style={{margin:"2px"}} href={list.smG} className='cardBlog'><img style={{width:"2rem"}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX////4+Pi3ubtvcnZNUVU+Q0cpLjLr6+x3en0sMTYkKS59gIORk5aUl5n8/Pzw8PFTV1tbX2Pc3d5DSEzn5+g3PECLjpFKTlKFh4qxs7XCxMUwNTq/wcLh4uPV1tZzd3o/Q0jOz9CmqKpjZ2qfoaSrd37mAAABPUlEQVR4AW3TBZKEMBAF0B8GCHzcnbW5/xm30qEyknklcU/DgQpuYRTHUXgLFHw6SemkmcYrlcd8kRYlnlQ1PU0Fp434Qde75Qd+1FUQKiRZjyGfTGNjKhWMmSQXYO3Ibao3MlqBnSRzADhk/ycAdcqclSSHnEUD+KLt8KalMQMqpl3izU5jKxHQGCq8Ud80fq4VfuFZaIyQO4wVPEre5g+RrIAPJrkQSL8OPjv3htQmH8guU5uwgseeP7ITMYBnpdFgvlJPcx0zoLjjzS/FDrVRvH6xsqDYlLx29huRUaFx6YuI1mhKMbddf9trEzca7rmRk/FxpiRXiJO8FDBURyb4yfO7glC8TOpacmAc4ElMEWlc2oGckjwvYVFEB5wjouE6uLBwquypQym/scKrM4njElYaJy182q15aDj/oQMZkS8JH3IAAAAASUVORK5CYII='></img></a> */}
                      {/* <a style={{margin:"2px"}} href={list.smL} className='cardBlog'><img style={{width:"2rem"}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACtklEQVR4AeyVA5AkQRREZ862bTMcZ9u2wzrbtm3bWNvmaW3b3rzKRa+NOWVEDoqvqv//LZPtUpoubC2cLIxKMveyku1UmkYAG2EoyFYESFEgQIos346dX7K7YiFyN8iFB17Sxx4NRxzVdcbYO6aotke5cgB42sFXDGDjF4FM+UbGY+5TK9FXKQBKOKTtjNz68CMAdQ+oVjyAXPicoRtyS8M5GA0PqRGwgm9gxxdMf2SBkNhEZCoxORXbVH9CXllBWHOvCla9sQNPbegRit3qDmhyWL1SYkCKA7kIxvoH1MBrr5KZllJ/IWnK3zskZ/SXEIDB1vm0trAO6K5ndNCYN5DRz9tgWxdhfnc8pQ2madXdSmDb7CeWWPfOHite22LoDWMegiDFj4GJ983hFBLD9IOPcEB0AjZ8+S6daIeaAwJFG/v8ouJh4ROB3uf1sFHpB34GRSMmMRlJKalISE5hLEHJIRCjbptAXlyAmY8tEZ2QjOzaK4qSbHs6AItTdhHwvpU3N0ZB+hYQhcGXDTi//AFSUtNPW5SY3lX3KJc7gKSwuESYeIXByDMM4XFJyC1bv0i0PKbJoCx/ALewWMwSwccApZe9skFwTAKyiXEjPYZyBziq48zUlVK09j4VvLL3Q3ZFxCdh/D0z7lG+AHFJKVj03DrHwhxHqOzimjMeWZQ/QKQ42ZQH5jkW5u896o7IJmYJa0T5A/BqJ+S6Wv7eqebwH+A/QOUBTMwHYFdpAaY9tACrVqyYECPMOr9d1UF6Gx7QcgLb2McxfCOOu2uaB2CLyk/EJ6WPo4PEmtOLqgOsZK2Pa4IDSUvPeWKFXud1pRre94Ie5jy1kvqnC+AWxzTYn2Odnud0MSdjDM0i1ObXOvDVBQjNEFciMJrhKHJwH5FmDgIPfNds4DuniO75P3r6HNY9BwATNI1Cu+uNpgAAAABJRU5ErkJggg=='></img></a> */}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large"  onClick={()=>(View(list))}>View</Button>
                </CardActions>
              </Card>
            {/* )
      )
    } */}
    </>
  );
}
3333

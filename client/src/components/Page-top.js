import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

const TopArrow = () =>{
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if(!showScroll&& window.pageYOffset > 400){
            setShowScroll(true)
        }
        else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };
    const scrollTop = () =>{
        window.scrollTo({top:0, behavior: 'smooth'});
    };
    window.addEventListener('scroll', checkScrollTop)
    
    return(
        <i  className="scrollTop fa fa-arrow-circle-o-up " onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}></i>
    );
}

export default TopArrow;
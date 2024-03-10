import starLogo from '../images/kirbyStar.png'
import './styles/TopBanner.css'
import {useEffect} from 'react';

/*At the moment, TopBanner is using keyframes to handle animations. Upgrade these to React Spring for better,
more customizable animations. */

function TopBanner() {
    useEffect(() => {
        const starLogo = document.getElementById('star-logo');
        const bannerText = document.getElementById('banner-text');
        
        starLogo.style.transform = 'translate(400%)';
        bannerText.style.opacity = '1';
        starLogo.style.transform = 'translateY(200%)';
    }, []);

    return (
        <div class="banner-content">
            <img src={starLogo} id="star-logo" alt="An image of a twinkling star!" width='100px' />
            <p id="banner-text">TRAY!!!</p>
        </div>
    );
}

export default TopBanner;
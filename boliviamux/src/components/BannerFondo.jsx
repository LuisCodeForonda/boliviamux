import FotoFondo from '../assets/banner_radio.jpg'

function BannerFondo(){
    return (
        <img src={ FotoFondo } alt="Radio banner"
            class="absolute -z-50 top-0 left-0 w-full h-screen object-cover"></img>
    );
}

export default BannerFondo;
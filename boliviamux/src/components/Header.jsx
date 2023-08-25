import BannerFondo from "./BannerFondo";
import Navigation from "./Navigation";
import HeaderContent from "./HeaderContent";

function Header(){
    return (
        <header class="relative h-screen flex flex-col">
            <BannerFondo />
            <Navigation />
            <HeaderContent />
        </header>
    )
}

export default Header;
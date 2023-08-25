import Logo from '../assets/LogoBoliviaMux.png'
import Isotipo from '../assets/IsotipoMinusculas.png'

function Navigation() {

    return (
        <nav class="bg-neutral-900/75 text-white">
            <div class="h-16 container mx-auto flex justify-between items-center">
                <a href="/" class="flex items-center cursor-pointer">
                    <img src={ Logo } alt="" class="w-8 h-8" />
                    <img src={ Isotipo } alt="" class="h-10" />
                </a>
                <ul class="flex gap-8 font-semibold">
                    <li><a href="">Home</a></li>
                    <li><a href="#publicaciones">Publicaciones</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;
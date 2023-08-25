import CardRadio from './CardRadio'

function HeaderContent() {

    return (
        <div class="w-full h-full text-white flex justify-center items-center">
            <div class="">
                <h2 class="text-4xl font-bold text-center">La mejor musica de <br /> todos los tiempos</h2>
                <div class="grid grid-cols-2 gap-8 p-8">
                    <CardRadio></CardRadio>
                    <CardRadio></CardRadio>
                </div>
            </div>
        </div>

    );
}

export default HeaderContent;
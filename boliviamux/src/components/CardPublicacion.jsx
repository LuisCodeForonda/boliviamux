import FotoPublicacion from '../assets/FotoPub.jpg'

function CardPublicacion() {


    return (
        <div class="w-3/5 flex gap-4 bg-white rounded-lg overflow-hidden mx-auto">
            <img src={ FotoPublicacion } alt="" class="w-48 h-auto" />

            <div class="p-8 space-y-4">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam omnis vitae, fuga placeat
                    nihil fugiat quidem, magni eum expedita esse sequi amet dicta suscipit aliquam assumenda
                    deleniti id praesentium earum.</p>
                <p class="text-gray-600">18 de agosto de 2023</p>
            </div>
        </div>
    );
}

export default CardPublicacion;
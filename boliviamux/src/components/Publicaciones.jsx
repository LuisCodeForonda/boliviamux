import CardPublicacion from "./CardPublicacion";

function Publicaciones() {

    return (
        <section class="relative w-full bg-indigo-950" id="publicaciones">
            <div class="container mx-auto grid grid-cols-1 gap-8 p-8">
                <h2 class="text-center text-4xl font-semibold text-white">Publicaciones</h2>
                <CardPublicacion />
                <CardPublicacion />
                <CardPublicacion />
            </div>
        </section>
    );
}

export default Publicaciones;
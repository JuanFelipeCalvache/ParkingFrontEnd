import { useState } from "react";

const images = [
  "/src/assets/img/parkingLot.png",
  "/src/assets/img/parkingLot2.png",
  "/src/assets/img/parkingLot2.png",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
        <section className="w-full h-[75vh] relative overflow-hidden ">
        {/* Imagen */}
        <img
            src={images[currentIndex]}
            alt="Carrusel"
            className="w-full h-full object-cover"
        />

        {/* Botones */}
        <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow"
        >
            ◀
        </button>

        <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow"
        >
            ▶
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white" : "bg-white/50"
              }`}
            ></div>
          ))}
        </div>

        
        </section>

        
           {/* Sección de servicios */}
        <section className="p-10 border-t-8 border-gray-200/40">

            <p className="text-gray-600 mt-2 max-w-xl mx-auto pb-4">
                    Welcome to the parking management system. Here you can register vehicles,
                    check the vehicles in the parking lot, and more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
                <a
                    href="/entry-vehicles"
                    className="p-6 bg-cyan-900/50 rounded-xl shadow hover:bg-gray-200"
                >
                    <h2 className="text-xl font-semibold">Registrar Vehículo</h2>
                    <p className="text-sm text-gray-700">
                        Ingresa un nuevo vehículo al parqueadero.
                    </p>
                </a>

                <a
                    href="/entrys"
                    className="p-6 bg-cyan-900/50 rounded-xl shadow hover:bg-gray-200"
                >
                    <h2 className="text-xl font-semibold">
                        Vehículos en el Parqueadero
                    </h2>
                    <p className="text-sm text-gray-700">
                        Consulta los vehículos que están actualmente parqueados.
                    </p>
                </a>

                <a
                    href="#"
                    className="p-6 bg-cyan-900/50 rounded-xl shadow hover:bg-gray-200"
                >
                    <h2 className="text-xl font-semibold">
                    Estadísticas (Próximamente)
                    </h2>
                    <p className="text-sm text-gray-700">
                    Visualiza información del flujo de vehículos.
                    </p>
                </a>
            </div>
        </section>


    </div>
  );
}



     
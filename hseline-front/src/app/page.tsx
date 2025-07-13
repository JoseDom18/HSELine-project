'use client';
import Image from 'next/image';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function HomePage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <main className="bg-[#ffffff] text-white min-h-screen font-sans">

      {/* HEADER */}
      <header className="flex items-center justify-between bg-[#010001] py-4 shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold pl-6 text-sky-400">HSELine</h1>
        <Link href="/login">
          <button className="mr-6 bg-green-500 hover:bg-green-600 transition px-5 py-2 rounded-lg text-white font-semibold shadow-md hover:scale-105">
            Iniciar sesión
          </button>
        </Link>
      </header>

      {/* CARRUSEL DE IMÁGENES */}
      <section className="h-[250px] overflow-hidden">
        <Slider {...settings}>
          {[1, 2, 3].map((n) => (
            <div key={n} className="px-0">
              <Image
                src={`/carousel${n}.jpeg`}
                alt={`Imagen ${n}`}
                width={1920}
                height={250}
                className="w-full h-[400px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* CURSOS */}
      <section className="py-10 px-6 bg-amber-50">
        <h2 className="text-3xl font-bold mb-6 text-black">Cursos</h2>
        <div className="flex flex-wrap gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="flex bg-[#b6b6b6] rounded-lg shadow-lg hover:-translate-y-1 transition-transform duration-300 overflow-hidden max-w-4xl w-full"
            >
              <Image
                src={`/curso${n}.jpeg`}
                alt={`Curso ${n}`}
                width={200}
                height={150}
                className="w-[200px] h-[210px] object-cover"
              />
              <div className="p-4 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-black mb-2">Curso #{n}</h3>
                <p className="text-sm text-gray-950 max-w-xl">
                  Aprende los fundamentos esenciales para mantener la seguridad, higiene y cuidado ambiental en entornos laborales. Este curso incluye materiales interactivos y certificación.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="py-12 px-6 bg-[#010001]">
        <h2 className="text-3xl font-bold text-center text-sky-400 mb-6">¿Quiénes somos?</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
          Somos un equipo de desarrollo apasionado por crear soluciones modernas para la administración empresarial. HSELine nació como un proyecto universitario que busca facilitar la gestión de empleados, cursos de capacitación, y seguridad laboral. Nuestro compromiso es brindar una experiencia intuitiva, rápida y escalable para empresas que buscan digitalizar sus procesos.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-sky-950 text-center text-gray-400 py-4 text-sm">
        © {new Date().getFullYear()} HSELine — Todos los derechos reservados.
      </footer>
    </main>
  );
}

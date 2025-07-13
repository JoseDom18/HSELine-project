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
    <main className="bg-white text-gray-900 font-sans min-h-screen">
      
      {/* HEADER */}
      <header className="flex items-center justify-between bg-[#010001] py-4 px-6 shadow-md sticky top-0 z-50">
  <div className="flex items-center space-x-3">
    <Image
      src="/logo.svg"
      alt="Logo HSELine"
      width={150}
      height={80}
      className="max-h-[80px] w-auto flex-shrink-0"
      priority
    />
    <h1 className='hidden'>HSELine</h1>
  </div>

  <Link href="/login">
    <button className="bg-green-500 hover:bg-green-600 transition-all px-6 py-2 rounded-xl text-white font-medium shadow-lg hover:scale-105 cursor-pointer">
      Iniciar sesión
    </button>
  </Link>
</header>


      {/* CARRUSEL */}
      <section className="h-[300px] md:h-[400px] overflow-hidden">
        <Slider {...settings}>
          {[1, 2, 3].map((n) => (
            <div key={n}>
              <Image
                src={`/carousel${n}.jpeg`}
                alt={`Imagen ${n}`}
                width={1920}
                height={400}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* CURSOS */}
      <section className="py-16 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Cursos</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <Image
                  src={`/curso${n}.jpeg`}
                  alt={`Curso ${n}`}
                  width={400}
                  height={220}
                  className="w-full h-[220px] object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">Curso #{n}</h3>
                  <p className="text-sm text-gray-600">
                    Aprende los fundamentos esenciales para mantener la seguridad, higiene y cuidado ambiental en entornos laborales. Este curso incluye materiales interactivos y certificación.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="py-20 px-6 bg-[#010001]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-sky-400 mb-6">¿Quiénes somos?</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Somos un equipo de desarrollo apasionado por crear soluciones modernas para la administración empresarial. HSELine nació como un proyecto universitario que busca facilitar la gestión de empleados, cursos de capacitación, y seguridad laboral. Nuestro compromiso es brindar una experiencia intuitiva, rápida y escalable para empresas que buscan digitalizar sus procesos.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-sky-950 text-center text-gray-400 py-6 text-sm">
        © {new Date().getFullYear()} HSELine — Todos los derechos reservados.
      </footer>
    </main>
  );
}

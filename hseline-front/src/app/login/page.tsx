'use client';
import Link from 'next/link';

export default function LoginPage() {
    return (
    <div className="min-h-screen bg-gradient-to-b from-Color to-cyan-950 flex items-center justify-center p-4 text-black">
        <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        
        {/* Botón de regresar */}
        <Link
            href="/"
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold transition"
            title="Volver a inicio"
        >
            ✕
        </Link>

        <h2 className="text-3xl font-bold text-center text-sky-700 mb-8">Iniciar sesión</h2>

        <form className="space-y-5">
            <div>
            <label className="block mb-1 text-gray-700 font-medium">Correo electrónico</label>
            <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="tucorreo@ejemplo.com"
                required
            />
            </div>

            <div>
            <label className="block mb-1 text-gray-700 font-medium">Contraseña</label>
            <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="••••••••"
                required
            />
            </div>
        <Link href="/dashboard">
        <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 transition-colors text-white font-semibold py-2 rounded-lg shadow-md hover:scale-[1.02]"
            >
            Entrar
            </button>
        </Link>
            
        </form>
        </div>
    </div>
    );
}

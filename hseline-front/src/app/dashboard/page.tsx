'use client';
import { useState } from 'react';
import { UserPlus, Search, SortAsc, SortDesc, LogOut } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const empleadosMock = [
    { id: 1, nombre: 'Kevin Leonardo', img: '/avatar1.png' },
    { id: 2, nombre: 'Jose Domingo', img: '/avatar1.png' },
    { id: 3, nombre: 'Victoria Bermudez', img: '/avatar1.png' },
    { id: 4, nombre: 'Jessica de la O', img: '/avatar1.png' },
    { id: 5, nombre: 'Sofía Reyes', img: '/avatar1.png' },
    { id: 6, nombre: 'Miguel Chávez', img: '/avatar1.png' },
];

export default function DashboardPage() {
    const [busqueda, setBusqueda] = useState('');
    const [orden, setOrden] = useState<'AZ' | 'ZA'>('AZ');

    const empleadosFiltrados = empleadosMock
    .filter((e) => e.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    .sort((a, b) =>
        orden === 'AZ'
        ? a.nombre.localeCompare(b.nombre)
        : b.nombre.localeCompare(a.nombre)
    );

    return (
    <main className="min-h-screen bg-gray-100 p-6">
      {/* ENCABEZADO */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold text-sky-800 text-center w-full md:w-auto">
            Empleados
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-center shadow-md hover:scale-[1.02] transition w-full sm:w-auto">
            <UserPlus size={18} /> Añadir empleado
            </button>

            <Link
            href="/"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-center shadow-md hover:scale-[1.02] transition w-full sm:w-auto"
            >
            <LogOut size={18} /> Cerrar sesión
            </Link>
        </div>
        </div>

      {/* BUSCADOR Y FILTROS */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 text-black">
        <div className="relative w-full md:max-w-sm">
            <input
            type="text"
            placeholder="Buscar por nombre"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
        </div>

        <div className="flex gap-2">
            <button
            className={`px-4 py-2 rounded-lg border flex items-center gap-2 text-sm ${
                orden === 'AZ'
                ? 'bg-sky-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setOrden('AZ')}
            >
            <SortAsc size={16} /> A-Z
            </button>
            <button
            className={`px-4 py-2 rounded-lg border flex items-center gap-2 text-sm ${
                orden === 'ZA'
                ? 'bg-sky-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setOrden('ZA')}
            >
            <SortDesc size={16} /> Z-A
            </button>
        </div>
        </div>

      {/* GRID DE EMPLEADOS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {empleadosFiltrados.map((empleado) => (
            <div
            key={empleado.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md text-center"
            >
            <Image
                src={empleado.img}
                alt={empleado.nombre}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-3 object-cover"
            />
            <p className="font-semibold text-gray-800">{empleado.nombre}</p>
            </div>
        ))}
        </div>
    </main>
    );
}

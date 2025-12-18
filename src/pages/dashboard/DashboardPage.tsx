export const DashboardPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Bienvenido al sistema de inventarios.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Placeholder cards */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">Productos</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">120</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">Ventas Hoy</h2>
          <p className="text-4xl font-bold text-green-600 mt-2">15</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">Alertas</h2>
          <p className="text-4xl font-bold text-red-600 mt-2">3</p>
        </div>
      </div>
    </div>
  );
};

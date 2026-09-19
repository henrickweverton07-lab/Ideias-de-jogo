import { Crosshair } from 'lucide-react';

export const UI = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 z-10">
      <div className="flex justify-between items-start">
        <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 text-xl font-bold rounded-lg border border-white/10 shadow-lg">
          HP: 100/100
        </div>
        <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 text-xl font-bold rounded-lg border border-white/10 shadow-lg">
          Pistola Moderna
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative flex items-center justify-center w-12 h-12">
          <Crosshair className="text-white opacity-80 w-6 h-6 absolute" />
          <div className="w-1 h-1 bg-red-500 rounded-full absolute" />
        </div>
      </div>

      <div className="bg-black/60 backdrop-blur-sm text-white p-4 text-sm rounded-lg max-w-sm border border-white/10">
        <h3 className="font-bold mb-2 text-blue-400">Controles</h3>
        <div className="grid grid-cols-2 gap-2">
          <p>W, A, S, D - Mover</p>
          <p>Mouse - Direção</p>
          <p>Espaço - Pular</p>
        </div>
      </div>
    </div>
  );
};
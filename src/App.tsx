/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-bold mb-4">LocalPulse Importado</h1>
      <p className="max-w-md text-gray-600 mb-6">
        O repositório Android do LocalPulse foi importado com sucesso para este workspace.
      </p>
      <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-lg max-w-lg text-left text-sm">
        <p className="font-semibold mb-2">Aviso de Ambiente:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Você está em um ambiente Web (React/Node.js) do Google AI Studio.</li>
          <li>O projeto importado é nativo Android (Kotlin).</li>
          <li>O Docker não é suportado neste ambiente em nuvem.</li>
        </ul>
      </div>
    </div>
  );
}

// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Aquí se incluyen todos los archivos que contienen clases de Tailwind
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}', // Asegúrate de incluir el path a los archivos de Tremor
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

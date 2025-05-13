const fs = require('fs');
const path = require('path');

const folders = [
  'src/assets',
  'src/components/atoms',
  'src/components/molecules',
  'src/components/organisms',
  'src/layouts',
  'src/pages/Login',
  'src/pages/Empresa',
  'src/pages/Productos',
  'src/pages/Inventario',
  'src/context',
  'src/hooks',
  'src/routes',
  'src/services',
  'src/utils',
  'src/types',
  'src/api',
];

folders.forEach(folder => {
  const dir = path.join(__dirname, folder);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log('📁 Carpeta creada:', folder);
  }
});


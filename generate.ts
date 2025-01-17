import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

// Substituir __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const componentName = process.argv[2];

if (!componentName) {
  console.error('Por favor, forneça o nome do componente.');
  process.exit(1);
}

const srcDir = join(__dirname, 'src');
const componentsDir = join(srcDir, 'components');
const componentDir = join(componentsDir, componentName);

if (!existsSync(srcDir)) {
  console.error(
    'A pasta "src" não foi encontrada. Certifique-se de que está no diretório do projeto.'
  );
  process.exit(1);
}

if (!existsSync(componentsDir)) {
  mkdirSync(componentsDir);
}

if (existsSync(componentDir)) {
  console.error(
    `A pasta "${componentName}" já existe dentro de "src/components".`
  );
  process.exit(1);
}

mkdirSync(componentDir);

const files = {
  [`${componentName}.tsx`]: `import './style.scss';
  export default function ${componentName}() {
    return (
      <div className="${componentName.toLowerCase()}">

      </div>
    );
  }`,
  'index.ts': `export { default } from './${componentName}';`,
  'style.scss': `.${componentName.toLowerCase()} {}`,
};

Object.entries(files).forEach(([fileName, content]) => {
  writeFileSync(join(componentDir, fileName), content);
});

console.log(
  `Componente "${componentName}" criado com sucesso na pasta "src/components"!`
);

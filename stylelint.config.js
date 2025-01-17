module.exports = {
  extends: [
    'stylelint-config-standard-scss', // Regras padrão para SCSS
    'stylelint-config-prettier', // Desativa regras conflitantes com o Prettier
  ],
  plugins: ['stylelint-prettier'], // Adiciona o plugin do Prettier
  rules: {
    'prettier/prettier': true, // Habilita a validação do Prettier pelo Stylelint
    indentation: 2, // Exemplo: força indentação de 2 espaços
    'color-no-invalid-hex': true, // Exemplo: previne erros em cores hexadecimais
  },
};

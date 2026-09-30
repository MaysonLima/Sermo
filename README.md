# Sermo

Protótipo de interface de rede social desenvolvido para praticar React, componentização, gerenciamento de estado e estilização com Tailwind CSS.

**Status:** em desenvolvimento inicial. O código disponível é um front-end; não há backend ou persistência em banco implementados neste repositório.

## O que existe atualmente

- Layout com navegação lateral, área central e formulário de publicação.
- Entrada de texto que cria objetos de publicação no estado local do React.
- Geração de identificadores e dados demonstrativos de usuário.
- Componente de publicação inicial, que atualmente renderiza o avatar.

A exibição do conteúdo completo das publicações está em desenvolvimento. Os dados ficam em memória e são perdidos ao recarregar a página. Ícones de mídia e outros recursos visuais não representam funcionalidades concluídas.

## Tecnologias

- JavaScript e React.
- Vite.
- Tailwind CSS.
- React Icons e UUID.
- ESLint.

Node.js é utilizado para executar as ferramentas de desenvolvimento.

## Executar localmente

Com Node.js e npm compatíveis com o Vite 8 instalado no projeto:

```bash
git clone https://github.com/MaysonLima/Sermo.git
cd Sermo/Sermo
npm ci
npm run dev
```

Abra o endereço informado pelo Vite no terminal.

## Scripts disponíveis

Execute os comandos dentro da pasta interna `Sermo/`:

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build do front-end |
| `npm run preview` | Prévia local do build |
| `npm run lint` | Análise estática com ESLint |

## Estrutura principal

- `Sermo/src/App.jsx`: composição da interface e estado das publicações.
- `Sermo/src/components/SermoForm/`: formulário de texto.
- `Sermo/src/components/Sermo/`: componente de publicação em desenvolvimento.
- `Sermo/src/components/sidebar/`: navegação lateral.
- `Sermo/src/utils/generateImages.js`: utilitários de imagens demonstrativas.

## Próximas etapas

- [ ] Completar a renderização das publicações.
- [ ] Aprimorar validação e interação do formulário.
- [ ] Evoluir acessibilidade e adaptação a diferentes telas.
- [ ] Implementar backend, autenticação e persistência.
- [ ] Adicionar testes.

## Autor

[Mayson Lima dos Santos](https://maysonlima.github.io/Portfolio-Mayson-Lima-dos-Santos/)

## Licença

[MIT](LICENSE).

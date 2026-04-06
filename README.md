# Contact Form - Mockup & Automation Trigger

Este repositório contém uma simulação da página de captura de leads (Fale Conosco) da [Conpec](https://www.conpec.com.br/). 

O objetivo principal desta interface é atuar como a **porta de entrada de dados (Trigger)** para um projeto de estudo e implementação de automação do funil de vendas utilizando o **n8n**.

> **Nota sobre o Desenvolvimento:** O código-fonte desta interface (HTML, CSS e Vanilla JS) foi gerado e estruturado com o auxílio do **Claude Sonnet 4.6**. O uso da IA permitiu acelerar a prototipagem de um ambiente de testes semântico, responsivo e com validações de formulário precisas, permitindo que o foco do projeto se mantenha na integração e na engenharia do fluxo de dados.

## Objetivo no Fluxo de Automação

No projeto de automação do contato inicial, esta página atua no **Topo do Funil**. O fluxo funciona da seguinte forma:
1. O Lead preenche as informações (Nome, Telefone, E-mail, Origem, Investimento, Ideia).
2. O JavaScript do front-end valida os dados localmente (ex: garantindo que o telefone contenha apenas números).
3. Ao enviar o formulário, os dados são disparados via método POST para um **Webhook do n8n**.
4. O n8n recebe o payload e inicia a automação programada (ex: roteamento no CRM, disparo de WhatsApp/E-mail de boas-vindas, etc).

## Tecnologias Utilizadas


* **HTML5:** Estruturação dos campos de captura.
* **CSS3 (Vanilla):** Clonagem estética usando Design Tokens para espelhar a identidade visual da Conpec.
* **JavaScript (Vanilla):** Responsável por restrições de input, validação em tempo real e requisição assíncrona (`fetch`) para o Webhook do n8n.

## Estrutura de Arquivos

```text
/
├── index.html            # Estrutura principal da página e formulário
└── src/
    ├── styles/
    │   └── styles.css    # Estilização e design tokens
    └── scripts/
        └── script.js     # Lógica de validação e disparo de dados

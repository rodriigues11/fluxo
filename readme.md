# Fluxo de Caixa

Este projeto é uma aplicação web simples para gerenciamento de fluxo de caixa. Ele permite que o usuário defina um saldo inicial, adicione transações (entradas e saídas) e calcule o troco com base no valor pago.

## Funcionalidades

- Definir Saldo Inicial
- Adicionar transações (Entrada ou Saída)
- Visualizar as transações em uma tabela
- Calcular troco a partir do valor pago

## Tecnologias Utilizadas

- **HTML5**: Estruturação da aplicação
- **CSS3**: Estilização da página (localizado em `./src/css/style.css`)
- **JavaScript**: Lógica de negócio e manipulação do DOM (localizado em `./src/js/script.js`)

## Estrutura do Projeto

```
/fluxo-caixa
│
├── /src
│   ├── /css
│   │   └── style.css    # Estilos da aplicação
│   └── /js
│       └── script.js    # Lógica da aplicação
│
└── index.html           # Página principal
```

## Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/rodriigues11/fluxo.git
```

2. Navegue até o diretório do projeto:

```bash
cd fluxo-caixa
```

3. Abra o arquivo `index.html` no navegador de sua escolha.

## Funcionalidades Detalhadas

### 1. Definir Saldo Inicial
O usuário pode definir o saldo inicial utilizando o campo numérico e o botão "Definir Saldo Inicial". O saldo será exibido na tela.

### 2. Adicionar Transações
O usuário pode adicionar transações, selecionando o tipo (Entrada ou Saída) e preenchendo a descrição e o valor. As transações são exibidas em uma tabela.

### 3. Calcular Troco
O usuário pode calcular o troco com base no valor pago inserido.

## Contribuição

Fique à vontade para contribuir com o projeto. Basta seguir os passos abaixo:

1. Faça um Fork do projeto
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`)
3. Faça as suas modificações e faça commit (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça um Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT.

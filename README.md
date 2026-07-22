# 🧮 Calculadora Desktop com Electron

Uma calculadora desktop desenvolvida com **JavaScript**, **HTML**, **CSS** e **Electron**, capaz de realizar operações matemáticas básicas por meio de uma interface gráfica simples e intuitiva.

## ✨ Funcionalidades

* Soma
* Subtração
* Multiplicação
* Divisão
* Exclusão do último caractere
* Limpeza completa da expressão
* Respeito à precedência das operações (multiplicação e divisão antes de soma e subtração)
* Suporte a números negativos
* Interface desenvolvida com HTML, CSS e Font Awesome

## 🛠️ Tecnologias Utilizadas

* Electron
* JavaScript (ES6+)
* HTML5
* CSS3
* Font Awesome

## 📁 Estrutura do Projeto

```text
Projeto Calculadora/
│
├── Src/
│   ├── css/
│   │   └── style.css
│   ├── view/
│   │   └── index.html
│   ├── script.js
│   └── main.js
│
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/Eduardo-Carvalho-Reis/Projeto-de-Calculadora.git
```

### 2. Acesse a pasta do projeto

```bash
cd Projeto-de-Calculadora
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute a aplicação

```bash
npm start
```

## ⚙️ Funcionamento

A calculadora interpreta a expressão digitada pelo usuário, separa números e operadores e realiza os cálculos respeitando a ordem das operações:

1. Multiplicação e divisão.
2. Soma e subtração.

Após o cálculo, o resultado é exibido no visor e pode ser utilizado em uma nova operação.

## 📌 Melhorias Futuras

* Suporte a números decimais.
* Suporte ao teclado numérico do computador.
* Histórico de operações.
* Operação de porcentagem.
* Operações de potência e raiz quadrada.
* Alternância entre tema claro e escuro.
* Geração de executável para Windows, Linux e macOS.

## 👨‍💻 Autor

**Eduardo Carvalho Reis**

Projeto desenvolvido para fins de estudo e prática utilizando Electron, JavaScript, HTML e CSS.

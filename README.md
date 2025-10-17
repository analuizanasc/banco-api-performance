# Banco API - Testes de Performance

Este repositório contém testes de performance desenvolvidos com **JavaScript** e **[K6](https://k6.io/)** para avaliar o desempenho da [Banco API](https://github.com/juliodelimas/banco-api).

---

## 🧩 Introdução

O objetivo deste projeto é validar a performance dos endpoints da API simulando diferentes cargas e cenários de uso.  
Os testes foram desenvolvido durante mentoria de Julio de Lima para prática. Esse tipo de teste auxilia na identificação de gargalos, monitoramento de tempo de resposta e comportamento sob alta demanda.

---

## ⚙️ Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **K6** — ferramenta open-source de testes de carga e performance
- **Node.js** — para execução de scripts utilitários (opcional)
- **K6 Web Dashboard** — para visualização dos resultados em tempo real

---

## 🗂️ Estrutura do Repositório

```bash
banco-api-performance/
├── fixtures/
│   ├── postLogin.json              # JSON login
│   ├── postTransferencias.json     # JSONtransferencias
├── helper/
│   └── autenticacao.js             # Funções auxiliares (configuração, geração de dados, etc.)
├── tests/
│   ├── login.js                    # teste endpoint de login
│   └── transferencias.test.html    # teste endpoint de transferencias
└── README.md
```

---

## 🧰 Instalação

Antes de começar, certifique-se de ter o **Node.js** e o **K6** instalados em sua máquina.

1. Clone este repositório:
   ```bash
   git clone https://github.com/analuizanasc/banco-api-performance.git
   cd banco-api-performance
   ```

2. Instale as dependências (caso existam):
   ```bash
   npm install
   ```
---

## 🚀 Execução dos Testes

Execute os testes diretamente com o K6, informando o script desejado e as variáveis de ambiente.

### Exemplo:
```bash
k6 run -e BASE_URL=https://api.exemplo.com scripts/login.js
```

Você também pode definir variáveis globais para acompanhar o relatório em tempo real e exportar os resultados em HTML:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js
```

Após a execução, o relatório estará disponível em:
```
html-report.html
```

---

## 📊 Relatórios e Acompanhamento

O **K6 Web Dashboard** permite monitorar métricas em tempo real, como:
- Tempo médio de resposta
- Taxa de sucesso/falha
- Número de requisições por segundo (RPS)
- Consumo de recursos e comportamento sob carga

---

## 📄 Licença

Este projeto é de uso educacional e faz parte de um estudo de performance sobre a [Banco API](https://github.com/juliodelimas/banco-api).

---

### 👩‍💻 Autoria

Desenvolvido por **[Ana Luiza Araújo do Nascimento](https://www.linkedin.com/in/analuizanasc/)**  
QA Engineer | Explorando Performance Testing e Automação

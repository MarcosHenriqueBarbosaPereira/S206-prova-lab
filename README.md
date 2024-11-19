# S206-prova-lab

Este repositório é dedicado à execução de nossa prova de laboratório de ***Qualidade de Software*** envolvendo os conceitos de testes de UI (Cypress) e testes de API (PostMan).

# Configuração e Uso do Postman para Casos de Teste

Este documento fornece um guia detalhado sobre como configurar e organizar casos de teste no Postman, além de gerar relatórios e exportar coleções em formato JSON.

---

## **1. Configurando Casos de Teste no Postman**

### **1.1 Criando uma Nova Coleção**
1. Abra o Postman e clique em **"Collections"** no painel esquerdo.
2. Clique em **"New Collection"** e dê um nome à coleção.
3. Dentro da coleção criada, você pode adicionar várias requisições agrupadas para facilitar a organização.

### **1.2 Criando uma Requisição**
1. Clique em **"+"** ou no botão **"Add Request"** dentro da sua coleção.
2. Configure a URL, o método HTTP (GET, POST, PUT, DELETE, etc.), os headers e o body conforme necessário.
3. Teste a requisição clicando em **"Send"**.

### **1.3 Adicionando Testes a uma Requisição**
1. Na aba da requisição, vá até a guia **"Scripts"** e em seguida **"Post-response"**.
2. Insira scripts de teste em JavaScript para validar o comportamento esperado. 
   
   Exemplos de scripts:

#### **Validação do Status Code**
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

## **2. Gerando Relatórios de Testes no Postman**

### **2.1 Usando Newman**
O **Newman** é a biblioteca CLI para executar coleções Postman e gerar relatórios.

#### **2.1.1 Instalar o Newman com o Relatório HTML Extra**
Certifique-se de ter o Node.js instalado. Execute o comando abaixo no terminal para instalar o reporter:

```bash
npm i newman-reporter-htmlextra
```

#### **2.1.2 Executar uma Coleção**
- Primeiro, exporte a coleção como JSON (instruções detalhadas no tópico 3).
- Em seguida, execute o seguinte comando para rodar a coleção com o reporter HTML Extra:

```bash
newman run collection.json -r htmlextra
```

- Este comando irá gerar um relatório detalhado em formato HTML e salvá-lo no diretório onde o comando foi executado.

#### **2.1.3 Resultados do Relatório**
Ao rodar o comando acima, você verá um relatório gerado com informações detalhadas sobre:

- Status de cada requisição (se passou ou falhou).
- Tempo de execução de cada requisição.
- Qualquer erro ou falha que tenha ocorrido durante os testes.
  
O relatório é útil tanto para análises imediatas quanto para auditorias posteriores.

---

### **2.2 Verificando o Relatório Gerado**
- Depois de rodar o comando, você poderá abrir o arquivo HTML gerado com qualquer navegador.

No relatório, você encontrará informações sobre:
- Nome da coleção.
- Detalhes de cada requisição executada.
- Resultados dos testes definidos nas requisições.
- Métricas como tempo de execução e status de cada teste.

## **3. Como Exportar a Coleção Postman**

### **3.1 Exportando a Coleção**
- Abra o Postman e carregue a coleção que você deseja executar.
- Clique no menu de opções da coleção (três pontos) e selecione a opção **Export**.
- Escolha a versão desejada e salve o arquivo como `collection.json` no seu diretório de trabalho.

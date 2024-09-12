## 🦁 Sistema de Organização de Zoológico 🐒

## 📜 Descrição

Este projeto foi desenvolvido para ajudar na organização de um zoológico. A missão é construir a lógica para indicar os recintos onde novos animais se sintam confortáveis, seguindo uma série de regras específicas.

## 🗂️ Estrutura do Projeto

O projeto está estruturado em duas principais partes:

1\. **Implementação da Lógica de Organização dos Recintos**

2\. **Testes Unitários para Verificação da Lógica**

### 1\. Implementação da Lógica de Organização dos Recintos

### Classe `RecintosZoo`

A classe `RecintosZoo` é responsável por gerenciar os recintos e animais do zoológico. Ela contém métodos para verificar a compatibilidade dos animais com os recintos e calcular o espaço necessário.

### Atributos

*   `recintos`: Lista de recintos disponíveis no zoológico.
*   `animais`: Mapa contendo informações sobre os animais, como tamanho, biomas e se são carnívoros.

### Métodos

*   `ehBiomaAdequado(animal, biomaRecinto)`: Verifica se o bioma do recinto é adequado para o animal.
*   `ehBiomaAdequadoSavanaRio(animal, biomaRecinto)`: Verifica se o bioma "savana e rio" é adequado para o animal.
*   `verificaEspacoOcupadoPorAnimal(animal, quantidade)`: Calcula o espaço ocupado por um determinado número de animais.
*   `verificaCompatibilidade(tipo1, tipo2)`: Verifica se dois tipos de animais são compatíveis para habitar o mesmo recinto.
*   `verificaHipopotamo(animal, recinto)`: Verifica se um hipopótamo pode ser colocado em um determinado recinto.
*   `deveAdicionarEspacoExtra(recinto, novoAnimal)`: Verifica se é necessário adicionar espaço extra devido à presença de múltiplas espécies no recinto.
*   `deveCalcularRecintoOcupado(recinto)`: Calcula o espaço ocupado no recinto.
*   `todosAnimaisCompativeis(animaisExistentes, novoAnimal)`: Verifica se todos os animais existentes no recinto são compatíveis com o novo animal.
*   `analisaRecintos(tipo, quantidade)`: Analisa os recintos disponíveis e retorna uma lista de recintos viáveis para o novo animal.

### 2\. Testes Unitários para Verificação da Lógica

### Classe de Testes `RecintosZooTest`

A classe `RecintosZooTest` contém testes unitários para verificar a lógica implementada na classe `RecintosZoo`.

### Testes

*   `Deve rejeitar animal inválido`: Verifica se o sistema rejeita um animal inválido.
*   `Deve rejeitar quantidade inválida`: Verifica se o sistema rejeita uma quantidade inválida de animais.
*   `Não deve encontrar recintos para 10 macacos`: Verifica se o sistema não encontra recintos viáveis para 10 macacos.
*   `Deve encontrar recinto para 1 crocodilo`: Verifica se o sistema encontra um recinto viável para 1 crocodilo.
*   `Deve encontrar recintos para 2 macacos`: Verifica se o sistema encontra recintos viáveis para 2 macacos.
*   `Não deve permitir separar 12 macacos em dois recintos`: Verifica se o sistema não permite separar 12 macacos em dois recintos.
*   `Animais carnívoros devem habitar somente com a própria espécie`: Verifica se animais carnívoros habitam somente com a própria espécie.
*   `Hipopótamo(s) só tolera(m) outras espécies estando num recinto com savana e rio`: Verifica se hipopótamos toleram outras espécies apenas em recintos com savana e rio.
*   `Não deve encontrar recintos para 4 leões`: Verifica se o sistema não encontra recintos viáveis para 4 leões.
*   `Deve rejeitar quantidade negativa`: Verifica se o sistema rejeita uma quantidade negativa de animais.
*   `Deve rejeitar quantidade decimal`: Verifica se o sistema rejeita uma quantidade decimal de animais.

## 🚀 Como Executar

### Pré-requisitos

Node.js e npm instalados Ferramenta de teste (como Jest)

### Passos para Executar

1\. Clone o repositório:   

```plaintext
   git clone https://github.com/andersongulartew/desafio-andersongulartew-2024.git
   cd desafio-andersongulartew-2024
```

2\. Instale as dependências:   

```plaintext
   npm install
```

3\. Execute os testes:   

```plaintext
   npm test
```

## 🛠️ Exemplo de Uso

### Entrada para um Caso Válido

```javascript
const resultado = new RecintosZoo().analisaRecintos('MACACO', 2);
console.log(resultado);
```

### Saída Esperada

```javascript
{
  recintosViaveis: [
    "Recinto 1 (espaço livre: 5 total: 10)",
    "Recinto 2 (espaço livre: 3 total: 5)",
    "Recinto 3 (espaço livre: 2 total: 7)"
  ]
}
```

### Entrada para um Caso Inválido

```javascript
const resultado = new RecintosZoo().analisaRecintos('UNICORNIO', 1);
console.log(resultado);
```

### Saída Esperada

```javascript
{
  erro: "Animal inválido"
}
```

## 📝 Conclusão

Este projeto implementa a lógica para organizar recintos de um zoológico, garantindo que os animais sejam colocados em recintos adequados e confortáveis. A lógica foi testada extensivamente com testes unitários para garantir a precisão e a robustez do sistema.
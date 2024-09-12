class RecintosZoo {
  constructor() {
    this.recintos = [
      {
        numero: 1,
        bioma: "savana",
        tamanhoTotal: 10,
        animais: [{ tipo: "MACACO", quantidade: 3 }],
      },
      {
        numero: 2,
        bioma: "floresta",
        tamanhoTotal: 5,
        animais: [],
      },
      {
        numero: 3,
        bioma: "savana e rio",
        tamanhoTotal: 7,
        animais: [{ tipo: "GAZELA", quantidade: 1 }],
      },
      {
        numero: 4,
        bioma: "rio",
        tamanhoTotal: 8,
        animais: [],
      },
      {
        numero: 5,
        bioma: "savana",
        tamanhoTotal: 9,
        animais: [{ tipo: "LEAO", quantidade: 0 }]
      },
    ];

    this.animais = {
      "LEAO":{tamanho: 3, biomas: ["savana"], carnivoro: true },
      "LEOPARDO":{tamanho: 2, biomas: ["savana"], carnivoro: true },
      "CROCODILO":{tamanho: 3, biomas: ["rio"], carnivoro: true },
      "MACACO":{tamanho: 1, biomas: ["savana", "floresta"], carnivoro: false },
      "GAZELA":{tamanho: 2, biomas: ["savana"], carnivoro: false },
      "HIPOPOTAMO":{tamanho: 4, biomas: ["savana", "rio"], carnivoro: false }
    };
  }

  ehBiomaAdequado(animal, biomaRecinto){
    const biomasAnimais = this.animais[animal].biomas;
    return biomasAnimais.includes(biomaRecinto) || this.ehBiomaAdequadoSavanaRio(animal, biomaRecinto);
  }
  ehBiomaAdequadoSavanaRio(animal, biomaRecinto){
    return biomaRecinto === "savana e rio" &&(this.animais[animal].biomas.includes("savana") || this.animais[animal].biomas.includes("rio"));
  }

  verificaEspacoOcupadoPorAnimal(animal,quantidade){
    return quantidade * this.animais[animal].tamanho;
  }

  verificaCompatibilidade(tipo1, tipo2){
   if(this.animais[tipo1].carnivoro || this.animais[tipo2].carnivoro){
        return tipo1 === tipo2;
      }
    return true;
  }

  verificaHipopotamo(animal, recinto){
    return animal === "HIPOPOTAMO" && recinto.animais.length > 0 && recinto.bioma !== "savana e rio";
  }

  deveAdicionarEspacoExtra(recinto, novoAnimal){
    for (let i = 0; i < recinto.animais.length; i++){
      if (recinto.animais[i].tipo !== novoAnimal){
        return true;
      }
    }
    return false;
  }

  deveCalcularRecintoOcupado(recinto){
    console.log(recinto)
    let espacoOcupado = 0;
    for (let i = 0; i < recinto.animais.length; i++){
      const animal = recinto.animais[i];
      const espacoAnimal = this.verificaEspacoOcupadoPorAnimal( animal.tipo,animal.quantidade);
      espacoOcupado += espacoAnimal }
        return espacoOcupado;
  }

  todosAnimaisCompativeis(animaisExistentes, novoAnimal){
      return animaisExistentes.every((existing) => this.verificaCompatibilidade(existing.tipo, novoAnimal));
  }

  analisaRecintos(tipo, quantidade){
    tipo = tipo.toUpperCase();
    const recintosViaveis = [];
    if(!this.animais[tipo]){
      return {
        erro: "Animal inválido",
      };
    }
    if(quantidade <= 0 || !Number.isInteger(quantidade)){
      return {
        erro: "Quantidade inválida",
      };
    }

    for(let index = 0; index < this.recintos.length; index++){
      const recintoAtual = this.recintos[index];
      if(this.verificaHipopotamo(tipo, recintoAtual)){
        continue;
      }

      const macacoSolitario = tipo === "MACACO" && quantidade === 1 && recintoAtual.length === 0;

      if(this.ehBiomaAdequado(tipo, recintoAtual.bioma)){
        let espacoOcupado = this.deveCalcularRecintoOcupado(recintoAtual);
        if(this.deveAdicionarEspacoExtra(recintoAtual, tipo)){
          espacoOcupado = espacoOcupado + 1;
        }

        const espacoNecessarioPorAnimal = this.verificaEspacoOcupadoPorAnimal(tipo, quantidade);
        const ehCompativel = this.todosAnimaisCompativeis(recintoAtual.animais,tipo);

        if(ehCompativel && !macacoSolitario && recintoAtual.tamanhoTotal >= espacoNecessarioPorAnimal + espacoOcupado){
          const espacoLivre = recintoAtual.tamanhoTotal - (espacoOcupado + espacoNecessarioPorAnimal);
          recintosViaveis.push(`Recinto ${recintoAtual.numero} (espaço livre: ${espacoLivre} total: ${recintoAtual.tamanhoTotal})`);
        }
      }
    }

    if(recintosViaveis.length === 0){
      return {
        erro: "Não há recinto viável",
      };
    }

    recintosViaveis.sort((a, b) => a.numero - b.numero);
    return {recintosViaveis};
  }
}

export { RecintosZoo as RecintosZoo };

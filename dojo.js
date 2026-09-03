const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];


//DESAFIO 1
const calcular = () => {

    for (const usuario of usuarios){
        let soma = 0;
        for (const valor of usuario.compras){
            soma = soma + valor;
        }
        console.log(`${usuario.nome}: total = ${soma}`)
    }

}

//outros jeitos de fazer 

//jeito 1 (menos linha de código, mais moderno)
//const calcular = () => {
//    usuarios.forEach((usuario) => {
//         O reduce é uma função que "reduz" uma lista a um único valor (a soma).
//         Se o colega parar antes disso, você pode usar o reduce para somar:
//        const soma = usuario.compras.reduce((acumulador, valor) => acumulador + valor, 0);
//        
//        console.log(`${usuario.nome}: total = ${soma}`);
//    });
//}

//calcular();

//DESAFIO 2
const ativos = () => {
    for (const usuario of usuarios){
        if(usuario.ativo){
            console.log(`${usuario.nome}`);
        }
    }
}

//outro jeito de fazer

//const ativos = () => {
//    usuarios.forEach((usuario) => {
//        // Se alguém escrever o forEach, você pode assumir daqui usando seu if!
//        if (usuario.ativo) {
//            console.log(`${usuario.nome}`);
//        }
//    });
//}

//const ativos = () => {
//    usuarios
//        .filter((usuario) => usuario.ativo) // Primeiro filtra os ativos
//        .forEach((usuario) => console.log(`${usuario.nome}`)); // Depois imprime o nome deles
//}

//ativos();


//DESAFIO 3
const maioridade = () => {
    for (const usuario of usuarios){
        if(usuario.idade >= 18){
            console.log(`${usuario.nome}`);
        }
    }
}

//const maioridade = () => {
//    // 1. Filtra quem tem 18 ou mais e guarda numa nova variável
//    const maiores = usuarios.filter((usuario) => usuario.idade >= 18);
//
//    // 2. Depois, faz o loop só nessa nova lista para imprimir
//    for (const usuario of maiores) {
//        console.log(`${usuario.nome}`);
//    }
//}

//maioridade();

//DESAFIO 4

const maior_total = () => {
    let total = 0;
    let usuario_maior_volume = "";
    for (const usuario of usuarios){
        let soma = 0;
        for (const valor of usuario.compras){
            soma = soma + valor;
        }
        if (soma > total){
            total = soma;
            usuario_maior_volume = usuario.nome;
        }
    }
    console.log(`usuário com maior volume: ${usuario_maior_volume}`);
    console.log(`total: ${total}`);
}

//outros jeitos de fazer

//const maior_total_moderno = () => {
//    let total = 0;
//    let usuario_maior_volume = "";
//
//    // Substitui o primeiro "for...of"
//    usuarios.forEach((usuario) => {
//        
//        // Substitui o segundo "for...of" calculando a soma direto
//        const soma = usuario.compras.reduce((acumulador, valor) => acumulador + valor, 0);
//
//        // O seu 'if' entra aqui, intacto!
//        if (soma > total) {
//            total = soma;
//            usuario_maior_volume = usuario.nome;
//        }
//    });
//
//    console.log(`usuário com maior volume: ${usuario_maior_volume}`);
//    console.log(`total: ${total}`);
//}

//const maior_total_ordenado = () => {
//    // 1. Cria uma nova lista contendo apenas { nome, total } para cada usuário
//    const totais = usuarios.map((usuario) => {
//        const soma = usuario.compras.reduce((acc, valor) => acc + valor, 0);
//        return { nome: usuario.nome, total: soma };
//    });
//
//    // 2. Ordena essa nova lista do MAIOR total para o MENOR
//    totais.sort((a, b) => b.total - a.total);
//
//    // 3. Como a lista está ordenada, o campeão é sempre o primeiro item (índice 0)
//    const campeao = totais[0];
//
//    console.log(`usuário com maior volume: ${campeao.nome}`);
//    console.log(`total: ${campeao.total}`);
//}

//maior_total();

//DESAFIO 5

//console.log("5" + 2); //aqui ele considera o 5 uma string, então concatena 5 com 2, resultando em 52
//console.log("5" - 2); // aqui ele converte o 5 para inteiro, fazendo a conta 5-2, resultado 3
//console.log(true + 1); // aqui ele converte o true para int (true=1;false=0), dando o resultado 2
//console.log(false == 0); // aqui ele compara o valor do false (0) com o 0, resultando em true
//console.log(false === 0); // aqui ele compara o false com o 0 na tipagem

//DESAFIO 6

const pessoa1 = {
  nome: "Maria",
  falar: function(){
    console.log(this.nome);
  }
};

//pessoa1.falar();

const pessoa2 = {
  nome: "Maria",
  falar: () => {
    console.log(this.nome); // esse não funciona (printa undefined)
  }                         // pois está tentando utilizar o this como se fosse um método de objeto
};                          // o this em arrow functions olha para fora do objeto para procurar o this

//pessoa2.falar();

//DESAFIO 7

const gerarRelatorio = () => {
    let usuarios_ativos = 0;
    
    usuarios.forEach(usuario => {
        if(usuario.ativo){
            usuarios_ativos++;
        }
    });

    const soma = usuarios.reduce((total, atual) => total + atual.idade, 0);
    
    const totais = usuarios.map(usuario => {
            const soma = usuario.compras.reduce((acc, atual) => acc + atual, 0);
            return {usuario: usuario.nome, total: soma}
            });
        totais.sort((a, b) => b.total - a.total);

     return {
        totalUsuarios: usuarios.length,
        usuariosAtivos: usuarios_ativos,
        usuariosInativos: usuarios.length - usuarios_ativos,
        mediaIdade: soma / usuarios.length,
        maiorComprador: totais[0].usuario 
    };
       
}

//console.log(gerarRelatorio());

//outros métodos de fazer 

//const gerarRelatorioModerno = () => {
//    // Conta os ativos filtrando a lista e pegando o tamanho dela
//    const ativos = usuarios.filter(usuario => usuario.ativo).length;
//    
//    // Soma as idades (igual ao seu)
//    const somaIdades = usuarios.reduce((total, atual) => total + atual.idade, 0);
//    
//    // Pega o maior comprador usando apenas o reduce (sem map e sem sort)
//    // Ele compara o atual com o "campeão" de cada rodada
//    const campeao = usuarios.reduce((vencedor, atual) => {
//        const comprasAtual = atual.compras.reduce((acc, val) => acc + val, 0);
//        const comprasVencedor = vencedor.compras.reduce((acc, val) => acc + val, 0);
//        
//        return comprasAtual > comprasVencedor ? atual : vencedor;
//    });
//
//    return {
//        totalUsuarios: usuarios.length,
//        usuariosAtivos: ativos,
//        usuariosInativos: usuarios.length - ativos,
//        mediaIdade: somaIdades / usuarios.length,
//        maiorComprador: campeao.nome 
//    };
//}

//const gerarRelatorioRaiz = () => {
//    // Declara todas as variáveis no topo
//    let ativos = 0;
//    let inativos = 0;
//    let somaIdade = 0;
//    let maiorTotalCompras = -1; // Começa negativo para qualquer compra ser maior
//    let nomeMaiorComprador = "";
//
//    // Faz um único loop para resolver TUDO
//    for (const usuario of usuarios) {
//        // 1. Conta ativos e inativos
//        if (usuario.ativo) {
//            ativos++;
//        } else {
//            inativos++;
//        }
//
//        // 2. Soma as idades
//        somaIdade = somaIdade + usuario.idade;
//
//        // 3. Calcula o total de compras e verifica se é o maior
//        let somaCompras = 0;
//        for (const valor of usuario.compras) {
//            somaCompras += valor;
//        }
//
//        if (somaCompras > maiorTotalCompras) {
//            maiorTotalCompras = somaCompras;
//            nomeMaiorComprador = usuario.nome;
//        }
//    }
//
//    // Retorna o objeto montado com as variáveis do loop
//    return {
//        totalUsuarios: usuarios.length,
//        usuariosAtivos: ativos,
//        usuariosInativos: inativos,
//        mediaIdade: somaIdade / usuarios.length,
//        maiorComprador: nomeMaiorComprador
//    };
//}

//DESAFIO EXTRA

const DesafioExtra = () => {
    let mais_jovem = usuarios.reduce((jovem, atual) => {
        if(jovem.idade < atual.idade){
            return jovem;
        }
        return atual;
    }).nome;
    
    let mais_velho = usuarios.reduce((velho, atual) => {
        if(velho.idade > atual.idade){
            return velho;
        }
        return atual;
    }).nome;

    //necessario o auxilio de IA, revisar
    const lista_medias = usuarios.map(usuario => {
        const soma_compras = usuario.compras.reduce((total, atual) => total + atual, 0);
        let valor_media = 0; 
        if (usuario.compras.length > 0) {
            valor_media = soma_compras / usuario.compras.length;
        }

        return { nome: usuario.nome, media: valor_media };
    });

    return {
        maisJovem: mais_jovem,
        maisVelho: mais_velho,
        mediasDeCompras: lista_medias
    };
} // <-- Fim da função DesafioExtra

console.log(DesafioExtra());


 function portaria(nomedasala,pessoa,idademinima,idademaxima){
   
    let permissao= (pessoa.idade >= idademinima && pessoa.idade <=idademaxima);
    if (permissao) {
        console.log("✅ ", pessoa, `entrou na ${nomedasala}` );
    } else {
        console.log("🚫 ", pessoa, `não pode entrar na ${nomedasala}`);
    }
 }

let pessoas = [
    { 
        idade: 18,
        nome: "joana"
    },
    { 
        idade: 20,
        nome: "pedro"
    },
    { 
        idade: 16,
        nome: "lais"
    },
    { 
        idade: 17,
        nome: "ana"
    },
    { 
        idade: 19,
        nome: "renato"
    },
    { 
        idade: 52,
        nome: "carlos"
    },
    { 
        idade: 40,
        nome: "joão"
    },
    { 
        idade: 12,
        nome: "julia"
    }
];

for (let pessoa of pessoas) {
    console.log();
    portaria("🥳 sala 1",pessoa,18,40);
   
    portaria("🧙‍♂️ sala 2",pessoa,50,80);
 
    portaria("👶 sala 3",pessoa,3,14);
}
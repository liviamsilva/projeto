//texto
console.log("👽 texto");
let name= "Livia";
console.log(name);

let lastname="Maria";
console.log(lastname);

//let fullname= name + " "+ lastname;
let fullname=`${name} ${lastname}`;

console.log(fullname);

let name2="Renato";
console.log(name2);
// numero
console.log("👽 número");

let ano= 2025;
let anoanterior= 2022;
console.log(`ano atual=${ano} ano anterior=${anoanterior}`);

let diferenca_de_ano=(ano-anoanterior);
console.log(diferenca_de_ano);
// boleano
console.log("👽 boleano");

let sim= true;
let nao= false;
console.log(sim,nao);

//data
console.log("👽 data");
let data_de_aniversario=new Date(1990,8,10);
console.log(`data de aniversário ${data_de_aniversario.getDate()}/${data_de_aniversario.getMonth()+1}/${data_de_aniversario.getFullYear()}` );

//dicionário
console.log("👽 dicionário");

let dicionario={};
dicionario["cpf"]="3864550911";
dicionario["nome"]="Renato Dias";
dicionario["cidade"]="São Paulo";
console.log(dicionario);

//array
console.log("👽 array");
let nomes=["a","b","c","d"]
console.log(nomes);




const projeto = {
  id: 1,
  descricao: "FlowTracker",
};

const proxy = new Proxy(projeto, {
  get(objetoOriginal, chave, receptor) {
    console.log(`Alguém acessou a chave: ${chave} do projeto`);
    return Reflect.get(objetoOriginal, chave, receptor);
  },
  set(objetoOriginal, chave, valor) {
    objetoOriginal[chave] = valor;
    console.log(
      `Alguém alterou a chave: ${chave} do projeto para o valor ${valor}`
    );
  },
});

console.log(proxy.descricao);

class Conversor{
    constructor(){
        this.conversorModel = new ConversorModel();
    }

    async converteMoeda(){
        var listaValue = document.querySelector("#listaMoedas").value;
        var moedaValue = document.getElementById("valorMoeda").value;
        var moeda = await this.conversorModel.getMoeda(listaValue);
        var real = await this.conversorModel.getMoeda("real");
        
        return moedaValue*(real/moeda).toFixed(2);
        
    }
}
class calculator {


    __constructor(cont, versionN){
    this.container = cont;
    this.versionName = versionN;
    //this.create();
    }

create(){
    this.container = document.getElementsByid(this.container);

    //document.createElement('div');
    //div.innerHTML='7';
    //div.setAttribute('class', 'seven');
    //document.getElementById('main').appendChild(div);
    console.log(this.container);
    console.log(this.versionName);
    //console.log(create());
}




}

console.log("heya");

var calc = new calculator("container", "EsjeCalc");

console.log(calc.create());  
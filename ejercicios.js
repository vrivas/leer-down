var ejercicios=[];

function comprueba(respuesta, correcto) {
  var sonido = new Audio();
  sonido.type="audio/mpeg"
  sonido.src=(respuesta==correcto)?"./correct-victory.mp3":"error-fallo-1.mp3";
  sonido.play();
}

function Fotos_3_Palabras_1( f1,f2,f3,p,c) {
  this.foto1=f1;
  this.foto2=f2;
  this.foto3=f3;
  this.palabra=p;
  this.correcto=c;

  this.show=function() {
    document.getElementById("foto1").src=this.foto1;
    document.getElementById("foto2").src=this.foto2;
    document.getElementById("foto3").src=this.foto3;
    document.getElementById("palabra").innerHTML=this.palabra;
    var correcto=this.correcto;
    document.getElementById("foto1").onclick=function() {
      comprueba(1,correcto);
    }
    document.getElementById("foto2").onclick=function() {
      comprueba(2,correcto);
    }
    document.getElementById("foto3").onclick=function() {
      comprueba(3,correcto);
    }
  }
}


function haz_ejercicios() {
  ejercicios[0].show();
}

ejercicios.push(
  new Fotos_3_Palabras_1(
    "https://www.wikihow.com/images/thumb/5/59/Deal-With-Baby-Mama-Drama-Step-1-Version-2.jpg/aid466158-v4-728px-Deal-With-Baby-Mama-Drama-Step-1-Version-2.jpg"
    , "http://www.es.clipproject.info/images/joomgallery/details/personas_dibujos_29/hombre_dibujo_personas_dibujos_gente_7_20110102_1755468918.gif"
    , "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimg-c.magazineluiza.com.br%2F1500x1500%2Fcama-solteiromoveis-boso-styllus-123273998.jpg&f=1"
    , "mamá"
    , 1
  )
);

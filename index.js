// $("#chau").click(function(){
//     $("#pie").hide();
// });

// Loguearse

var dni = "";

$("#login").click(function(){

    var cli = [];
    
    var dni= $("#dni").val();

    var db = firebase.database()

    db.ref("gim/clientes/" + dni).on("value",function(datalist){
        
        var lista = datalist.val()

        var toShow = ""
        
        if (lista != null){
            
            $("#contenedor").hide();

            $("#showPerfil").css('display', 'block');

            $("#showFoot").css('display', 'none');
            
            var ac = 0;    

            for(var i in lista){

                cli[ac] = lista[i];
      
                toShow += "<div><p>" + cli[ac] + ac[3] +"</p></div>"
                
                ac++
            }
               
        }else{

            toShow="DNI incorrecto"

        }
        
        $(".saludo").html("<h1>Hola " + cli[2] +"!!!</h1>");

        //Filtrando planes

        for (var i=3 ; i < 6 ; i++){

            if (cli[i] == "Natación"){
                $("#showNat").css('display', 'block');
            }
            if (cli[i] == "Boxeo"){
                $("#showBox").css('display', 'block');
            }
            if (cli[i] == "Karate"){
                $("#showKar").css('display', 'block');
            }
            if (cli[i] == "GLibre"){
                $("#showGimL").css('display', 'block');
            }
            if (cli[i] == "GPlus"){
                $("#showGimP").css('display', 'block');
            }
            if (cli[i] == "Cardio"){
                $("#showCardio").css('display', 'block');
            }
        }

        //Alineando
        //$("#cardsPerf").css({'float':'none', 'padding':'auto'});      
      })

      //filtrando planes



});








 
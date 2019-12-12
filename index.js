// Loguearse

var dni = "";

$("#login").click(function(){

    var cli = [];
    
    var dni= $(".txtLog").val();

    var db = firebase.database()

    db.ref("gim/clientes/" + dni).on("value",function(datalist){
        
        var lista = datalist.val()

        var toShow = ""
        
        if (lista != null){
            
            $("#contenedor").hide();

            $("#showPerfil").css('display', 'block');

            $("#showFoot").css('display', 'none');

            $("#dni").css('display', 'none');
            $(".btnLogOut").css('display', 'inline-block');
 
            var ac = 0;    

            for(var i in lista){

                cli[ac] = lista[i];
      
                ac++
            }
               
        }else{

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'El DNI no es correcto',
              footer: '<a href>Comunicate con nosotros...</a>'
            }) 

        }
        
        $(".saludo").html("<h1>Hola " + cli[2] +"!!!</h1>");
        
        if (cli[1] == "ok"){
            $(".status").html("Habilitado");
        }

        if (cli[1] == "bad"){
            $(".status").html("No Habilitado");
            $(".status").css("background-color","red")
        }

        if (cli[1] == "rev"){
            $(".status").html("En Revisión");
            $(".status").css("background-color","yellow")
        }
        

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
});

$(".btnLogOut").click(function(){
    // $("#contenedor").show();
    // $("#showPerfil").css('display', 'none');
    // $("#showFoot").css('display', 'block');
    // $("#dni").css('display', 'inline-block');
    // $(".btnLogOut").css('display', 'none');
    location.reload();
});








 
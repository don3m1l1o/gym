// $("#chau").click(function(){
//     $("#pie").hide();
// });

// Loguearse

var dni = "";

$("#login").click(function(){
    
    var dni= $("#dni").val();

    var db = firebase.database()

    db.ref("gim/clientes/" + dni).on("value",function(datalist){
        
        var lista = datalist.val()

        var toShow = ""
        
        if (lista != null){
            
            $("#contenedor").hide();

            $("#showPerfil").css('display', 'block');
            
            for(var i in lista){
      
                toShow += "<div><p>" + i + "  " + lista[i] + "</p></div>"
            
                }
               
        }else{

            toShow="DNI incorrecto"

        }
        
        $("#aparece").html(toShow)
      
      })

});

// Consuminedo datos de la Base




 
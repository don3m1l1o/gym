var db = firebase.database()

db.ref("articulos").on("value",function(datalist){

  var lista = datalist.val()
  var toShow = ""
  
  for(var i in lista){

      toShow += "<div class="+"col-md-4"+"><p>" + lista[i].Nombre +" -> $ "+ lista[i].Precio + "</p></div>"

  }

  $(".toComplete").html(toShow)

})
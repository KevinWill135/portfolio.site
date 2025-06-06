$(document).ready(function () {
  //Animando um pouco o site
  $("#fotoPerfil").hover(
    function () {
      $("#titulo_header h1,#texto_header p").addClass("classTitle");
    },
    function () {
      $("#titulo_header h1,#texto_header p").removeClass("classTitle");
    }
  );

  $("#conteudo").on("mouseover", "div", function () {
    $("#conteudo h2").addClass("classTitle");
  });

  $("#conteudo").on("mouseout", "div", function () {
    $("#conteudo h2").removeClass("classTitle");
  });

  $("#db").hover(
    function () {
      $("#sql").slideDown("slow");
    },
    function () {
      $("#sql").fadeOut("slow", function () {
        console.log("A caixa desapareceu");
      });
    }
  );
});

getCampusNome();

function getCampusNome();

      $("#submit").click(function() {
            var campus= $("#nome-campus").val();

            $.ajax({
                type: "GET",
                url: 'http://10.13.185.23:8080/campus',
                data: "campus=" + campus,
                success: function(data) {
                   alert("Cadastro feito com sucesso!");
                }
            });


        });

function updateCampusNome();

      $("#submit").click(function() {
            var campus= $("#AlteracaoPerfilModal").val();

            $.ajax({
                type: "GET",
                url: 'http://10.13.185.23:8080/campus',
                data: "campus=" + campus,
                success: function(data) {
                   alert("Alteração feita com sucesso!");
                }
            });


        });

function deleteCampusNome();

      $("#submit").click(function() {
            var campus= $("#ExclusaoPerfilModal").val();

            $.ajax({
                type: "POST",
                url: 'http://10.13.185.23:8080/campus',
                success: function(data) {
                   alert("Exclusão feita com sucesso!");
                }
            });


        });
getCampus();


function getCampus(){
	// alert('ola');
	$.ajax({
		url: 'http://10.13.185.23:8080/campus',
		type:'GET',
		success: function (dados) {
			$('#tabela-campus').empty();
            $.each(dados, function(i, item) {
		        var $tr = $('<tr>').append(
		            $('<td>').text(item.id),
		            $('<td>').text(item.nome),
		            $('<td class="text-center">').html('<a data-toggle="modal" data-target="#AlteracaoPerfilModal" title="Editar">'+
        						'<i class="fa fa-pencil-square-o fa-2 icone icone-editar" aria-hidden="true"></i>'+
        					'</a>'+
        					'<a data-toggle="modal" data-target="#ExclusaoPerfilModal" title="Excluir">'+
        						'<i class="fa fa-trash fa-2 icone icone-excluir" aria-hidden="true"></i>'+
        					'</a>')
		        ); 
		        $tr.appendTo('#tabela-campus'); 	
		    });
        }
	});
}


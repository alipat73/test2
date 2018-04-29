

$(document).ready(function() {
	
    $('#order-form').on('submit', submitForm);

    function submitForm (ev) {
        ev.preventDefault();
        
        var form = $(ev.target),
            data = form.serialize(),
            url = form.attr('action'),
            type = form.attr('method');
            console.log(url);

        ajaxForm(form).done(function(msg) {
            var mes = msg.mes,
                status = msg.status;
            
            alert('ok');
        }).fail(function(jqXHR, textStatus) {
            alert('no');
        });

    };

    // Универсальная функция для работы с формами
    var ajaxForm = function (form) {
        var data = form.serialize(),
            url = form.attr('action');
        
        return $.ajax({
            type: 'POST',
            url: url,
            dataType : 'JSON',
            data: data
        })
    };

});
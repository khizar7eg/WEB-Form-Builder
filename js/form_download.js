
var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
        
    }
};

$('#cmd').click(function () {   
    doc.fromHTML($('#tizarForm').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers

    });
    doc.save('Tizar-Form.pdf');
});

// This code is collected but useful, click below to jsfiddle link.
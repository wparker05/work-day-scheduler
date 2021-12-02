var container = $('.container');
var currentDay = $('#currentDay');
currentDay.text(moment().format('dddd, MMMM Do'));
var counter = 9;

for (var i = 0; i < 9; i++) {
    var row = $('<section>');
    row.addClass('row time-block');
    var dateBox = $('<div>');
    dateBox.text(counter);

    dateBox.addClass('col col-md-1 hour');
    var textBox = $('<textarea>');
    textBox.attr('id', `text${i}`)
    textBox.text(JSON.parse(localStorage.getItem(`text${i}`)));
    textBox.addClass(`col col-md-10 description text${i}`);
    if (counter < Number(moment().format('HH'))) {
        textBox.addClass('bg-secondary');
    } else if (counter > Number(moment().format('HH'))) {
        textBox.addClass('bg-success');
    } else if (counter === Number(moment().format('HH'))) {
        textBox.addClass('bg-danger');
    }
    var btnBox = $('<button>');
    btnBox.attr('id', `btn${i}`)
    btnBox.addClass(`col col-md-1 btn saveBtn btn${i} `);
    var btnPic = $('<i>');
    btnPic.addClass('fas fa-save');
    btnBox.append(btnPic);
    container.append(row);
    row.append(dateBox);
    row.append(textBox);
    row.append(btnBox);
    // console.log(i);
    counter++;
   
       console.log($('#btn0'));
    var btn = function(count, texts){
        
        $(`${count}`).on('click', function(){
            var text=$(`${texts}`)
            var saveText = text[0].value;
            localStorage.setItem(`${texts}`, JSON.stringify(saveText));
         })
    }
    
    btn(`#btn${i}`,`#text${i}` );

}
       
    // var btn0 = $('#btn0');
    // btn0.on('click', function(){
    //    var text=$('#text0')
    //    var saveText = text[0].value;
    //    localStorage.setItem('text0', JSON.stringify(saveText));
    // })

    // var btn1 = $('#btn1');
    // btn1.on('click', function(){
    //    var text=$('#text0')
    //    var saveText = text[0].value;
    //    localStorage.setItem('text1', JSON.stringify(saveText));
    // })

    // var btn2 = $('#btn2');
    // btn2.on('click', function(){
    //    var text=$('#text2')
    //    var saveText = text[0].value;
    //    localStorage.setItem('text2', JSON.stringify(saveText));
    // })

    // var btn3 = $('#btn3');
    // btn3.on('click', function(){
    //    var text=$('#text0')
    //    var saveText = text[0].value;
    //    localStorage.setItem('text3', JSON.stringify(saveText));
    // })

    // var btn4 = $('#btn4');
    // btn4.on('click', function(){
    //    var text=$('#text4')
    //    var saveText = text[0].value;
    //    localStorage.setItem('text4', JSON.stringify(saveText));
    // })

    // var btn5 = $('#btn5');
    // btn5.on('click', function(){
    //    var text=$('#text5')
    //    var saveText = text[0].value;
    //    localStorage.setItem('text5', JSON.stringify(saveText));
    // })

    
    // var btn6 = $('#btn6');
    // btn6.on('click', function(){
    //    var text=$('#text6')
    //    var saveText = text[0].value;
    //    localStorage.setItem('text6', JSON.stringify(saveText));
    // })

    // var btn7 = $('#btn7');
    //    btn7.on('click', function(){
    //    var text=$('#text7')
    //    var saveText = text[0].value;
    //    localStorage.setItem('text7', JSON.stringify(saveText));
    // })

    // var btn8 = $('#btn8');
    //    btn8.on('click', function(){
    //    var text=$('#text8')
    //    var saveText = text[0].value;
    //    localStorage.setItem('text8', JSON.stringify(saveText));
    // })




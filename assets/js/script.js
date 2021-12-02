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
   
     
    var btn = function(count, texts, textCount){
        
        $(`${count}`).on('click', function(){
            var text=$(`${texts}`)
            var saveText = text[0].value;
            localStorage.setItem(`${textCount}`, JSON.stringify(saveText));
         })
    }
    
    btn(`#btn${i}`,`#text${i}`,`text${i}` );

}
       
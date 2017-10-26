$('form#insurance').submit(function(event) {
  event.preventDefault();
  let age = parseFloat($('input#age').val());
  let gender = $('select#gender').val();

  let quote = (100 - age) * 3;

  if (gender === 'male' || age < 26) {
    quote += 50;
  }

  console.log(quote, gender, age);

  $('span#rate').empty().append(quote);
  $('div#quote').fadeIn();
});

$('input, select').focus(function() {
  $('div#quote').fadeOut();
});

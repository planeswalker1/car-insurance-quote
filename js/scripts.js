$('form#insurance').submit(function(event) {
  event.preventDefault();
  let age = parseFloat($('input#age').val());
  let gender = $('select#gender').val();

  let quote = (100 - age) * 3;
  console.log(quote, gender, age);
});

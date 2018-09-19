
$(document).ready(function () {
  $.get('/start', function (response) {
    console.log(response)
  })
  $('#clear').click(function () {
    $('.select').addClass("active");
    $('.token').removeClass("active");
  })
})
function loadTokenInfo(e){
    e.preventDefault();
    let address = document.getElementById("token_options").value.valueOf();

    if (address!="Default Token Address List"){

      $.post('/getTokenName', {address : address}, function (response) {
        $('.select').removeClass("active");
        $('.token').addClass("active");
        $('#name').text(response);
      })
      $.post('/getTokenSymbol', {address : address}, function (response) {
        $('.select').removeClass("active");
        $('.token').addClass("active");
        $('#symbol').text(response);
      })
      $.post('/getTokenDecimals', {address : address}, function (response) {
        $('.select').removeClass("active");
        $('.token').addClass("active");
        $('#decimals').text(response);
      })
      $.post('/getTokenTotalSupply', {address : address}, function (response) {
        $('.select').removeClass("active");
        $('.token').addClass("active");
        $('#totalsupply').text(response);
      })
    }
}

function add_token_address(e) {
    e.preventDefault();
    tokenAddress =  $('#new_token_address').val()
     $('#token_options').append("<option value='"+tokenAddress+"'>"+tokenAddress+"</option>");
 };

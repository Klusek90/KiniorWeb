
$(document).ready(function() {
    // When the 'header' element is hovered
    $('#topText').hover(
      function() {
        $('#topText').text('Bo praca poplaca ;D');
      },
      function() {
        // Change the text back to its original value when the hover ends
        $('#topText').text('Wez sie do pracy dziewczyno :D');
      }
    );
  });
let main = () => {
     $('form').submit((evt) => {
          const $input = $(evt.target).find('input');
          const comment = $input.val();

          if (comment !== '') {
               let html = $('<li>').text(comment);
               html.prependTo('#comments')

               $input.val("");
          }

          return false;
     });
}

$(document).ready(main);
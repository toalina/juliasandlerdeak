var menuLeft = document.getElementById( 'nav-main-s1' ),
    showLeft = document.getElementById( 'showLeft' ),
    body = document.body;

$('#showLeft').on('click', function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuLeft, 'nav-main-open' );
});


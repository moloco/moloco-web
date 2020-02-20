$(document).ready(() => {
  $('.btn_open_gnb').click(function() {
    $('#header').toggleClass('m_gnb_opened');
  })

  $('.language .dropbtn').click(function(e) {
    $('.language .dropdown-content').toggle();
    e.stopPropagation();
    if ($('.language .dropdown-content').css('display') === 'none') {
      $('.language .dropbtn img').attr('src', 'img/icon-arrow-lang-down.png');
    } else {
      $('.language .dropbtn img').attr('src', 'img/icon-arrow-lang-up.png');
    }
  })

  $('select').each(function() {
    $(this).val($(this).find('option[selected]').val());
  })

  $(document).click(function() {
    $('.dropdown-content').hide();
    $('.dropbtn img').attr('src', 'img/icon-arrow-lang-down.png');
  })

  var windowHeight = $(window).height();
  checkSections(windowHeight);
  $('.user_acquisition').removeClass('hide');
  $('.re_engagement').removeClass('hide');
  $('.ad_cloud').removeClass('hide');

  $(window).scroll(() => {
    var scrolled = $(this).scrollTop();
    var visibleHeight = scrolled + windowHeight;
    checkSections(visibleHeight);
  });

  $('.contact_content2 .contact_form div').each((_, element) => {
    element.addEventListener('focus', (e) => {
      element.classList.remove("invalid");
    }, true);

    element.addEventListener('blur', (e) => {
      if (!e.target.checkValidity()) {
        element.classList.add("invalid");
      }
    }, true);
  })

  function checkSections(visibleHeight) {
    var elements = [
      $('.user_acquisition'),
      $('.re_engagement'),
      $('.ad_cloud'),
      $('.protect'),
      $('.start'),
      $('.partners')
    ];
    elements.forEach((element) => {
      checkAndShowSection(element, visibleHeight);
    });
  }

  function checkAndShowSection(element, visibleHeight) {
    if (!element || !element.offset()) {
      return;
    }
    if (element.offset().top <= visibleHeight) {
      element.removeClass('hide');
    }
  }
});
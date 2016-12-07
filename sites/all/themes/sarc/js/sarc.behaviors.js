(function ($) {

  /**
   * The recommended way for producing HTML markup through JavaScript is to write
   * theming functions. These are similiar to the theming functions that you might
   * know from 'phptemplate' (the default PHP templating engine used by most
   * Drupal themes including Omega). JavaScript theme functions accept arguments
   * and can be overriden by sub-themes.
   *
   * In most cases, there is no good reason to NOT wrap your markup producing
   * JavaScript in a theme function.
   */
  /*Drupal.theme.prototype.{{ THEME CAMELCASE LOWER }}ExampleButton = function (path, title) {
    // Create an anchor element with jQuery.
    return $('<a href="' + path + '" title="' + title + '">' + title + '</a>');
  };*/

  /**
   * Behaviors are Drupal's way of applying JavaScript to a page. In short, the
   * advantage of Behaviors over a simple 'document.ready()' lies in how it
   * interacts with content loaded through Ajax. Opposed to the
   * 'document.ready()' event which is only fired once when the page is
   * initially loaded, behaviors get re-executed whenever something is added to
   * the page through Ajax.
   *
   * You can attach as many behaviors as you wish. In fact, instead of overloading
   * a single behavior with multiple, completely unrelated tasks you should create
   * a separate behavior for every separate task.
   *
   * In most cases, there is no good reason to NOT wrap your JavaScript code in a
   * behavior.
   *
   * @param context
   *   The context for which the behavior is being executed. This is either the
   *   full page or a piece of HTML that was just added through Ajax.
   * @param settings
   *   An array of settings (added through drupal_add_js()). Instead of accessing
   *   Drupal.settings directly you should use this because of potential
   *   modifications made by the Ajax callback that also produced 'context'.
   */
  /*Drupal.behaviors.{{ THEME CAMELCASE LOWER }}ExampleBehavior = {
    attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      $('.some-selector', context).once('foo', function () {
        // Now, we are invoking the previously declared theme function using two
        // settings as arguments.
        var $anchor = Drupal.theme('{{ THEME CAMELCASE LOWER }}ExampleButton', settings.myExampleLinkPath, settings.myExampleLinkTitle);

        // The anchor is then appended to the current element.
        $anchor.appendTo(this);
      });
    }
  };*/

  Drupal.behaviors.sarcAddFontAwe = {
    attach: function (context, settings) {
      $('#block-menu-menu-main-navigation li').append('<a class="more-opt" href="#"><i class="fa fa-chevron-down"></i></a>');
    }
  };

  Drupal.behaviors.sarcScrollToTop = {
    attach: function (context, settings) {
      var button = $('.goTo-top')
        , container = $('.goTo-top-container');
      if (button.length === 0 || container.length === 0) return;
      button.click(function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
      });
      $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
          $(container).fadeIn(200);
        } else {
          $(container).fadeOut(200);
        }
      });
    }
  };

  Drupal.behaviors.sarcShowMenu = {
    attach: function (context, settings) {
      $(".pull-menu a").click(function() {
        $( "#block-menu-menu-main-navigation, #block-menu-menu-utility-nav, #block-search-form" ).slideToggle( "300" );
      });
    }
  };

  Drupal.behaviors.sarcShowSubMenu = {
    attach: function (context, settings) {
      $(".more-opt").click(function() {
        $(this).prev( "ul.menu" ).slideToggle( "300" );
      });
    }
  };

})(jQuery);

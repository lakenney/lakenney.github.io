/* 

Make tabs for.

To use: Select your tabs, then call "makeTabsFor" wit the selector for your content elements.

$('#nav-tabs  li > a').makeTabsFor('#nav-tabs li > p');

Also see 'makeTabsFor' section in 'custom.css'


*/

$.fn.makeTabsFor = function (contentSelector) {
    var $tabs = this,
    $contents = $(contentSelector);

  // add click handlers to the tabs
  $tabs.each(function(i, tab) {
    var $tab = $(tab),
      $content = $($contents[i]);
      if ($tabs.length !== $contents.length) throw new Error('Content selector must return same number of elements as receiver.');
    // Why one function can handle all these clicks ... Closures are magic! go to googles javascrip for closures
    $tab.click(function() {
      $tabs.removeClass('active');
      $tab.addClass('active');
      $contents.removeClass('active');
      $content.addClass('active');
    })
  })
  // set initial state.
  $tabs.first().addClass('active first');
  // add 'last' class for desiger purposes
  $tabs.last().addClass('last');
  $contents.first().addClass('active');

};
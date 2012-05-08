function ShareUI(dialog) {
  var self = {
    shareCode: function() {
      dialog.show();
      select.call(dialog.find('a.link')[0]);
    }
  };

  function select() {
    var content = dialog.find(".modal-selection." + $(this).attr("data-id"));
    dialog.find('#share-buttons a').removeClass("selected");
    dialog.find(".modal-selection").removeClass("selected");
    $(this).addClass("selected");
    content.addClass("selected");
  }
  
  // clicking the "close" button
  dialog.find('.close-icon').click(function(){ dialog.hide(); });

  // content "tabs"
  dialog.find('#share-buttons a').mouseover(select).click(function() {
    // prevent links from being resolved, since the
    // <a> elements have no href content
    return false;
  });
  
  return self;
}
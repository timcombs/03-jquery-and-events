//confif veiew obj to hole all function for dynamic updates and article-related event hanlders

var articleView = {};

articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    //this refers to 'article'
    authorName = $(this).find('address a').text();
    console.log(authorName);
    optionTag = '<option value="' + authorName + '">' + authorName +'</option>';
    $('#author-filter select').append(optionTag);
    category = $(this).find('placeholder-category').text();
    console.log(category);
    optionTag = '<option value="' + category + '">' + category + '</option>';
    $('#category-filter select').append(optionTag);
  });
};

//TODO:
articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      //hide articles and show the posts by selected author
    }else{
      //console.log "no value!"
    }
    $('#category-filter').val('');
  });
};

//TODO: as for author-filter make a category-filter
articleView.handleCategoryFilter = function() {
  $('category-filter').on('change', function() {
    if ($(this).val()) {
      //hide articles and show posts with by selected category
    }else{
      //console.log "no value!"
    }
  });
};

//TODO:
articleView.handleMainNav = function() {
  $('.main-nav').on();

  //use delegation here - for the tab menu items
  //the next line fires a click event on the specified element
  $('.main-nav .tab:first').click();
};

//TODO: the read-on functionality
//need e.preventDefault to keep it from jumping to top of page
articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
};

//STRETCH - click on it and it reverts to its previous state



//TODO: invoke all the of the above methods
articleView.populateFilters();
articleView.handleMainNav();
articleView.setTeasers();

//config view object to hold all functions for dynamic updates and article-related event hanlders
var articleView = {};

articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    //this refers to 'article'

    //how to sort alphabetically?
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName +'</option>';
    //removes author duplicates
    if ($('author-filter option [value="' + authorName + '"]').length === 0) {
      $('#author-filter').append(optionTag);
    }

    //how to sort alphabetically?
    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    //removes category duplicates
    if ($('#category-filter option[value="' + category + '"]').length === 0){
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    var selectedAuthor = $(this).val();
    if (selectedAuthor) {
      $('article').hide();
      $('article[data-author="' + selectedAuthor + '"]').fadeIn(775);
    }else{
      console.log('no value!');
      $('article').fadeIn(1345);
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    var selectedCategory = $(this).val();
    if ($(this).val()) {
      $('article').hide();
      $('article[data-category="' + selectedCategory + '"]').fadeIn(775);
    }else{
      console.log('no value!');
      $('article').fadeIn(1345);
    }
    $('author-filter').val('');
  });
};

articleView.handleMainNav = function() {
    //use delegation here - for the tab menu items
  $('.main-nav').on('click', '.tab', function() {
    var selectedTab = $(this).attr('data-content');
    if (selectedTab) {
      $('section.tab-content').hide();
      $('#' + selectedTab).fadeIn(775);
    }else{
      console.log('nothing');
      $('section').fadeIn(1500);
    }
  });

  //fires a click event to makes only the home tab info show at page load
  $('.main-nav .tab:first').click();
};

//need e.preventDefault to keep it from jumping to top of page
articleView.setTeasers = function() {
  //Hides all child elements after the first 2 in ANY article body
  $('.article-body *:nth-of-type(n+3)').hide();

  $('a.read-on').on('click', function(e) {
    var findPrev = $(this).prev();
    e.preventDefault();
    findPrev.children(':gt(1)').toggle();
    var textToggle = findPrev.find(':nth-child(3)').attr('style');
    if (textToggle === 'display: block;') {
      $(this).html('Show Less &rarr;');
    }else{
      $(this).html('Read on &rarr;');
    }
  });
};

//TODO: invoke all the of the above methods
articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
articleView.setTeasers();

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
    console.log(selectedTab);
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

//TODO: the read-on functionality
//need e.preventDefault to keep it from jumping to top of page
articleView.setTeasers = function() {
  /* Hide any elements after the first 2 (<p> Tags in case)
  in any article body: */
  $('.article-body *:nth-of-type(n+2)').hide();

  /* TODO: Add a delegated event handler to reveal the remaining
  paragraph.  When a .read-on link is clicked, we can:
  1. Prevent the default action of a link.
  2. Reveal everything in that particular article now.
  3. Hide that read-on link! */
  // STRETCH GOAL!:  change the 'Read On' link to display 'Show Less'

};

//STRETCH - click on it and it reverts to its previous state



//TODO: invoke all the of the above methods
articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
articleView.setTeasers();

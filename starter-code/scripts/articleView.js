//config view object to hold all functions for dynamic updates and article-related event hanlders
var articleView = {};

articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    //this refers to 'article'

    //gets all the author names, would have duplicates
    //how to sort alphabetically?
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName +'</option>';
    if ($('author-filter option [value="' + authorName + '"]').length === 0) {
      $('#author-filter').append(optionTag);
    }

    //gets all the categories w/duplicates
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
    if ($(this).val()) {
      $('article').hide();
      $('article[data-author="' + selectedAuthor + '"]').fadeIn(775);
      /* TODO: If the select box changes to an option that has a value,
      we should:
      1. Hide all the articles,
      2. Fade in only the articles that match based on the author
        that was selected. Use an "attribute selector" to find
        those articles that match the value, and fade them in
        for the reader. */
    }else{
      console.log('no value!');
      $('article').show();
    }
    $('#category-filter').val('');
  });
};

//TODO: as for author-filter make a category-filter
articleView.handleCategoryFilter = function() {
  /* TODO: Just like we do for #author-filter above, we should also handle
  change events on the #category-filter element. Be sure to reset the
  #author-filter while you're at it! */
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
  /* TODO: Complete the delegated event handler below to help
  power the tabs feature.
  Clicking any .tab element should:
  1. Hide all the .tab-content sections.
  2. Fade in the single .tab-content section that is associated withthe clicked
  .tab element's data-content attribute. */
  $('.main-nav').on(/* CODE GOES HERE */);

  //use delegation here - for the tab menu items
  //the next line fires a click event on the specified element
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

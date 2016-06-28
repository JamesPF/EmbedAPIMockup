gapi.analytics.ready(function() {

  /**
   * Authorize the user immediately if the user has already granted access.
   * If no access has been created, render an authorize button inside the
   * element with the ID "embed-api-auth-container".
   */
  gapi.analytics.auth.authorize({
    container: 'embed-api-auth-container',
    clientid: '821892989006-v056tctjqf6jodnnabs0aqmpftdfjp5o.apps.googleusercontent.com'
  });


  /**
   * Create a ViewSelector for the first view to be rendered inside of an
   * element with the id "view-selector-1-container".
   */
  var topPagesViewSelector = new gapi.analytics.ViewSelector({
    container: 'top-pages-view-selector-container'
  });


  // Render both view selectors to the page.
  topPagesViewSelector.execute();


  /**
   * Create the first DataChart for top countries over the past 30 days.
   * It will be rendered inside an element with the id "chart-1-container".
   */
   var topPagesPie = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:entrances',
      dimensions: 'ga:landingPagePath',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'max-results': 10,
      sort: '-ga:entrances'
    },
    chart: {
      container: 'top-pages-pie',
      type: 'PIE',
      options: {
        width: '100%',
        pieHole: 2/9
      }
    }
  });

  // Create topPagesList in the same manner
  var topPagesList = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:entrances',
      dimensions: 'ga:landingPagePath',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'max-results': 20,
      sort: '-ga:entrances'
    },
    chart: {
      container: 'top-pages-list',
      type: 'TABLE',
      options: {
        width: '100%'
      }
    }
  });

  // Render the above items to the page
  topPagesViewSelector.on('change', function(ids) {
    topPagesPie.set({query: {ids: ids}}).execute();
    topPagesList.set({query: {ids: ids}}).execute();
  });
});
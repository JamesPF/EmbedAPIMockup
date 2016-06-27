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
  var viewSelector = new gapi.analytics.ViewSelector({
    container: 'view-selector-container'
  });


  // Render both view selectors to the page.
  viewSelector.execute();


  /**
   * Create the first DataChart for top countries over the past 30 days.
   * It will be rendered inside an element with the id "chart-1-container".
   */
  var dataPie = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:sessions',
      dimensions: 'ga:fullReferrer',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'max-results': 6,
      sort: '-ga:sessions'
    },
    chart: {
      container: 'pie-container',
      type: 'PIE',
      options: {
        width: '100%',
        pieHole: 2/9
      }
    }
  });

  // Create trafficList in the same manner
  var trafficList = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:sessions',
      dimensions: 'ga:fullReferrer',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'max-results': 10,
      sort: '-ga:sessions'
    },
    chart: {
      container: 'traffic-list-container',
      type: 'TABLE',
      options: {
        width: '100%'
      }
    }
  });

  // Render the above items to the page
  viewSelector.on('change', function(ids) {
    dataPie.set({query: {ids: ids}}).execute();
    trafficList.set({query: {ids: ids}}).execute();
  });
});
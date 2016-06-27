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
   * Create a new ViewSelector instance to be rendered inside of an
   * element with the id "view-selector-container".
   */
  var viewSelector = new gapi.analytics.ViewSelector({
    container: 'view-selector-container'
  });

  // Render the view selector to the page.
  viewSelector.execute();


  /**
   * Create a new DataChart instance with the given query parameters
   * and Google chart options. It will be rendered inside an element
   * with the id "chart-container".
   */
  var dataChart = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:sessions,ga:users,ga:pageviews',
      dimensions: 'ga:date',
      'start-date': '30daysAgo',
      'end-date': 'yesterday'
    },
    chart: {
      container: 'chart-container',
      type: 'LINE',
      options: {
        width: '100%'
      }
    }
  });

  // Create dataList in the same manner
  var dataList = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:sessions,ga:users,ga:pageviews',
      dimensions: 'ga:date',
      'start-date': '30daysAgo',
      'end-date': 'yesterday'
    },
    chart: {
      container: 'list-container',
      type: 'TABLE',
      options: {
        width: '100%'
      }
    }
  });

  // Create browserList in the same manner
  var browserList = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:sessions',
      dimensions: 'ga:browser',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'max-results': 10,
      sort: '-ga:sessions',

    },
    chart: {
      container: 'browser-container',
      type: 'TABLE',
      options: {
        width: '100%'
      }
    }
  });

  // Create osList in the same manner
  var osList = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:sessions',
      dimensions: 'ga:operatingSystem',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'max-results': 5,
      sort: '-ga:sessions',

    },
    chart: {
      container: 'os-container',
      type: 'TABLE',
      options: {
        width: '100%'
      }
    }
  });


  // Render the above items to the page
  viewSelector.on('change', function(ids) {
    dataChart.set({query: {ids: ids}}).execute();
    dataList.set({query: {ids: ids}}).execute();
    browserList.set({query: {ids: ids}}).execute();
    osList.set({query: {ids: ids}}).execute();
  });
});
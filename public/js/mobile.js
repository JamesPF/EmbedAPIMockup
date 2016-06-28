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
  var mobileViewSelector = new gapi.analytics.ViewSelector({
    container: 'mobile-view-selector-container'
  });

  // Render the view selector to the page.
  mobileViewSelector.execute();


  /**
   * Create a new DataChart instance with the given query parameters
   * and Google chart options. It will be rendered inside an element
   * with the id "chart-container".
   */
  var mobileDataChart = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:sessions',
      filters: 'ga:deviceCategory==mobile',
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

  // Create desktopMobileComparison in the same manner
  var desktopMobileComparison = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:sessions',
      dimensions: 'ga:deviceCategory',
      'start-date': '30daysAgo',
      'end-date': 'yesterday'
    },
    chart: {
      container: 'comparison-container',
      type: 'TABLE',
      options: {
        width: '100%'
      }
    }
  });

  // Create desktopOS in the same manner
  var desktopOS = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:sessions',
      dimensions: 'ga:operatingSystem',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      filters: 'ga:operatingSystem==Windows,ga:operatingSystem==Macintosh,ga:operatingSystem==Linux,ga:operatingSystem==Chrome OS',
      sort: '-ga:sessions'
    },
    chart: {
      container: 'desktop-os-container',
      type: 'TABLE',
      options: {
        width: '100%'
      }
    }
  });

  // Create mobileOS in the same manner
  var mobileOS = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:sessions',
      dimensions: 'ga:operatingSystem',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      filters: 'ga:operatingSystem==iOS,ga:operatingSystem==Android,ga:operatingSystem==Windows Phone',
      sort: '-ga:sessions'
    },
    chart: {
      container: 'mobile-os-container',
      type: 'TABLE',
      options: {
        width: '100%'
      }
    }
  });


  // Render the above items to the page
  mobileViewSelector.on('change', function(ids) {
    mobileDataChart.set({query: {ids: ids}}).execute();
    desktopMobileComparison.set({query: {ids: ids}}).execute();
    desktopOS.set({query: {ids: ids}}).execute();
    mobileOS.set({query: {ids: ids}}).execute();
  });
});
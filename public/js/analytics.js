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


  // CREATE VIEW SELECTORS
  // --------------------
  // Create ViewSlector for OVERVIEW SECTION
  var overviewSelector = new gapi.analytics.ViewSelector({
    container: 'overview-view-selector-container'
  });

  // Create ViewSelector for MOBILE SECTION
  var mobileViewSelector = new gapi.analytics.ViewSelector({
    container: 'mobile-view-selector-container'
  });

  // Create ViewSelector for REFERRERS SECTION
  var referrersViewSelector = new gapi.analytics.ViewSelector({
    container: 'referrers-view-selector-container'
  });

  // Create ViewSelector for TOP PAGES SECTION
  var topPagesViewSelector = new gapi.analytics.ViewSelector({
    container: 'top-pages-view-selector-container'
  });


  // RENDER VIEW SELECTORS
  // --------------------
  // Render the overiview view selector to the page.
  // overviewSelector.execute();

  // Render the mobile view selector to the page.
  // mobileViewSelector.execute();

  // Render the referrers view selector to the page.
  // referrersViewSelector.execute();

  // Render the top pages view selector to the page.
  topPagesViewSelector.execute();


  // CREATE CHARTS, GRAPHS, TABLES ETC.
  // --------------------
  // OVERVIEW SECTION
  // Create overView chart
  var overviewChart = new gapi.analytics.googleCharts.DataChart({
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
  var overviewList = new gapi.analytics.googleCharts.DataChart({
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


  // MOBILE SECTION
  // Create mobileDataChart
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


  // REFERRERS SECTION
  // Create referrersDataPie
  var referrersDataPie = new gapi.analytics.googleCharts.DataChart({
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

  // Create referrersTrafficList in the same manner
  var referrersTrafficList = new gapi.analytics.googleCharts.DataChart({
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


  // TOP PAGES SECTION
  // Create topPagesPie
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


  // RENDER SECTION
  // --------------------

  // OVERVIEW
  overviewSelector.on('change', function(ids) {
    overviewChart.set({query: {ids: ids}}).execute();
    overviewList.set({query: {ids: ids}}).execute();
    browserList.set({query: {ids: ids}}).execute();
    osList.set({query: {ids: ids}}).execute();
  });

  // MOBILE
  mobileViewSelector.on('change', function(ids) {
    mobileDataChart.set({query: {ids: ids}}).execute();
    desktopMobileComparison.set({query: {ids: ids}}).execute();
    desktopOS.set({query: {ids: ids}}).execute();
    mobileOS.set({query: {ids: ids}}).execute();
  });

  // REFERRERS
  referrersViewSelector.on('change', function(ids) {
    referrersDataPie.set({query: {ids: ids}}).execute();
    referrersTrafficList.set({query: {ids: ids}}).execute();
  });

  // TOP PAGES
  topPagesViewSelector.on('change', function(ids) {
    topPagesPie.set({query: {ids: ids}}).execute();
    topPagesList.set({query: {ids: ids}}).execute();
  });

});
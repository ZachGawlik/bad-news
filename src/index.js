const SCROLL_DEBOUNCE_WAIT = 300;
const BAD_NEWS_URLS = [
  '100percentfedup.com',
  '21stcenturywire.com',
  '70news.wordpress.com',
  'abcnews.com.co',
  'activistpost.com',
  'addictinginfo.org',
  'americannews.com',
  'anonnews.co',
  'associatedmediacoverage.com',
  'beforeitsnews.com',
  'bigamericannews.com',
  'bigpzone.com',
  'bipartisanreport.com',
  'bizpacreview.com',
  'bluenationreview.com',
  'breitbart.com',
  'callthecops.net',
  'cap-news.com',
  'christwire.org',
  'chronicle.su',
  'civictribune.com',
  'coasttocoastam.com',
  'collective-evolution.com',
  'consciouslifenews.com',
  'conservativeoutfitters.com',
  'countdowntozerotime.com',
  'counterpsyops.com',
  'creambmp.com',
  'dailybuzzlive.com',
  'dailycurrant.com',
  'dailywire.com',
  'dcclothesline.com',
  'dcgazette.com',
  'derfmagazine.com',
  'disclose.tv',
  'drudgereport.com.co',
  'duffleblog.com',
  'duhprogressive.com',
  'embols.com',
  'empireherald.com',
  'empirenews.net',
  'endingthefed.com',
  'geoengineeringwatch.org',
  'govtslaves.info',
  'gulagbound.com',
  'hangthebankers.com',
  'humansarefree.com',
  'huzlers.com',
  'ifyouonlynews.com',
  'ijr.com',
  'infowars.com',
  'inquisitr.com',
  'intellihub.com',
  'jonesreport.com',
  'lewrockwell.com',
  'liberalamerica.org',
  'libertymovementradio.com',
  'libertyunyielding.com',
  'libertyvideos.org',
  'mediamass.net',
  'megynkelly.us',
  'msnbc.com.co',
  'msnbc.website',
  'nationalreport.net',
  'naturalnews.com',
  'ncscooper.com',
  'newcenturytimes',
  'news-hound.com',
  'newsbiscuit.com',
  'newsexaminer.com',
  'newslo.com',
  'newsmutiny.com',
  'newswatchtv.com',
  'newswire-24.com',
  'nodisinfo.com',
  'now8news.com',
  'nowtheendbegins.com',
  'occupydemocrats.com',
  'other98.com',
  'pakalertpress.com',
  'politicalblindspot.com',
  'politicalears.com',
  'politicalo.com',
  'politicususa.com',
  'prisonplanet.com',
  'prisonplanet.tv',
  'private-eye.co.uk',
  'projectveritas.com',
  'react365.com',
  'realfarmacy.com',
  'realnewsrightnow.com',
  'redflagnews.com',
  'redstate.com',
  'rilenews.com',
  'satiratribune.com',
  'sprotspickle.com',
  'theblaze.com',
  'thedailysheeple.com',
  'thefreethoughtproject.com',
  'thenewsnerd.com',
  'therundownlive.com',
  'theuspatriot.com',
  'truthfrequencyradio.com',
  'twitchy.com',
  'unconfirmedsources.com',
  'us.blasting.news.com',
  'usasupreme.com',
  'usuncut.com',
  'veteranstoday.com',
  'wakingupwisconsin.com',
  'wideawakeamerica.com',
  'winningdemocrats.com',
  'witscience.org',
  'worldnewsdailyreport.com',
  'worldtruth.tv',
  'zerohedge.com',
];

function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const later = function() {
      timeout = null;
      func.apply(context);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

function createOverlay() {
  let badNewsOverlay = document.createElement('div');
  badNewsOverlay.className = 'overlay';

  let badNewsMessage = document.createElement('p');
  badNewsMessage.className = 'overlay__text';
  badNewsMessage.appendChild(
    document.createTextNode('This site is known to publish misleading articles')
  );

  badNewsOverlay.appendChild(badNewsMessage)
  return badNewsOverlay;
}

const overlay = createOverlay();

function tagBadNewsLinks() {
  BAD_NEWS_URLS.forEach(url => {
    document.querySelectorAll(
      `.userContentWrapper a[href*="${url}"]`
    ).forEach(link => {
      if (link.getElementsByTagName('img').length > 0) {
        link.parentNode.appendChild(overlay);
        link.className = 'post__thumbnail';
      } else {
        link.className = 'post__text'
      }
    });
  });
}

function init() {
  tagBadNewsLinks();
  window.addEventListener(
    'scroll',
    debounce(tagBadNewsLinks, SCROLL_DEBOUNCE_WAIT)
  );
}

init();

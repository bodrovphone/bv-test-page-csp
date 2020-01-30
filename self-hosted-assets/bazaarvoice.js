"version:2648";"build:1.0.55";"date:Thu Jan 30 2020 12:31:53 GMT+0200 (EET)";
/*! Copyright 2020 Bazaarvoice. */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/obod/working/firebird/node_modules/scoutfile/lib/webpack-kernel-loader!/Users/obod/working/firebird/node_modules/scoutfile/lib/browser/kernel */1);


/***/ },
/* 1 */
/*!**************************************************************************************!*\
  !*** ./~/scoutfile/lib/webpack-kernel-loader.js!./~/scoutfile/lib/browser/kernel.js ***!
  \**************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

'use strict';

/**
 * Entry point for scout files. This module sets up the namespace, requires
 * all application modules, and finally exports the namespace.
 *
 * @module
 */

var NS = __webpack_require__(/*! ./namespace */ 2);

// begin application module require blocks
    try {
      __webpack_require__(/*! ./static/dev/scripts/scout.js */ 5);
    }
    catch (e) {
      console.error(
        'Failed to load module `bvapiproduction`', e.message);
    }
  
// end application module require blocks

module.exports = NS;


/***/ },
/* 2 */
/*!**********************************************!*\
  !*** ./~/scoutfile/lib/browser/namespace.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

/* global APP_NAMESPACE */
/**
 * Define the namespace name with a flag (APP_NAMESPACE) that will be replaced
 * with a string in the webpack build.
 *
 * APP_NAMESPACE will be replaced with the value passed to webpack
 * options.namespace or the default namespace name.
 */
'use strict';

var namespacer = __webpack_require__(/*! bv-ui-core/lib/namespacer */ 3);

module.exports = namespacer.namespace(("BV"));


/***/ },
/* 3 */
/*!**********************************************************!*\
  !*** ./~/scoutfile/~/bv-ui-core/lib/namespacer/index.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

/**
 * @fileOverview
 * A namespace generator.
 *
 * @module
 */

var global = __webpack_require__(/*! ../global */ 4);

// --------------------------------------------------------------------------
// Namespace class definition.
// --------------------------------------------------------------------------

/**
 * @class
 * A namespace.
 *
 * @param name The name of this Namespace instance. It should be the same as the
 *   name of the global property to which this namespace is assigned.
 */
function Namespace (name) {
  this.name = name;
}

/**
 * Register a property in the namespace, such as an application instance.
 *
 * Attempting to register the same property twice is almost always an error, and
 * thus results in an exception.
 *
 * @param {String} name The property name.
 * @param {Mixed} value The property value.
 * @return {Namespace} The namespace instance. Useful for chaining.
 */
Namespace.prototype.registerProperty = function (name, value) {
  if (this.hasOwnProperty(name)) {
    throw new Error(
      'Cannot register ' + name +
      ' because a property with that name already exists on window.' +
      this.name
    );
  }

  this[name] = value;
  return this;
};

// --------------------------------------------------------------------------
// Exported interface.
// --------------------------------------------------------------------------

module.exports = {
  /**
   * Obtain a namespace object, creating one if necessary.
   *
   * The namespace will be assigned to the global object as a property
   * with the provided name. i.e. namespacer.namespace('foo') creates or returns
   * a namespace at global[foo].
   *
   * @param {String} name The namespace name.
   * @return {Mixed} The namespace.
   */
  namespace: function (name) {
    // If there is no global property yet assigned for this namespace then
    // create one.
    if (global[name] === undefined) {
      global[name] = new Namespace(name);
    }
    // If an object already exists for this global property, check to see
    // whether or not it is a Namespace instance or some other form of object.
    else if (typeof global[name] === 'object') {
      // If the existing object is not a Namespace instance, then provide it
      // with the necessary decorations and capabilies of a Namespace instance.
      //
      // Other code may have a reference to the object, so we can't do anything
      // more drastic such as replacing it.
      if (!(global[name] instanceof Namespace)) {
        Namespace.call(global[name], name);
        for (var prop in Namespace.prototype) {
          global[name][prop] = Namespace.prototype[prop];
        }
      }
    }
    // If something other than undefined or an object is assigned to this global
    // property then assume that other code is using it for another purpose, so
    // throw.
    else {
      throw new Error(
        'Namespace ' + name + ' cannot be created.' +
        ' A non-object variable is already assigned to window.' + name
      );
    }

    return global[name];
  }
};


/***/ },
/* 4 */
/*!******************************************************!*\
  !*** ./~/scoutfile/~/bv-ui-core/lib/global/index.js ***!
  \******************************************************/
/***/ function(module, exports) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 *  @fileOverview Provides a reference to the global object
 *  the below solution works in ES3+ environment and doesn't violates CSP in Chrome apps 
 *  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
 */
'use strict'; /* eslint strict:0 */

var getGlobal = function () {
  if (typeof globalThis !== 'undefined') { return globalThis; }
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

module.exports = getGlobal();
/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/*!*************************************!*\
  !*** ./static/dev/scripts/scout.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global IS_BUILD, IS_TURBO, IS_DEBUG */

/**
 * This is the base file for generating the scout file. The scout file has
 * many responsibilities. Fundamentally, it serves to bootstrap the Firebird
 * application, loading the additional JS and CSS resources that will be
 * necessary to display the application. It stubs the $BV.ui, $BV.SI, and
 * Magpie APIs, allowing customers to make calls before the code to support
 * them is present. If a customer has configured an A/B test, it chooses an
 * implementation to use if one has not previously been chosen, then persists
 * that choice via a cookie. On product pages, it attempts to preload the
 * appropriate data from the API as soon as the productId is known. It exposes
 * an "extension" API, allowing applications such as Curations to piggy-back
 * on Firebird's data. It begins collecting basic performance data about the
 * loading of the application. It also serves as part of the ROI beacon,
 * integrated on customers' Thank You pages to track how Bazaarvoice
 * contributed to a transaction.
 *
 * ORDER IS CRAZY IMPORTANT IN THIS FILE. Someday maybe this won't be the
 * case, but if you are feeling sad about it, just remember that we used
 * to manage this file using a Handlebars template.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
  __webpack_require__(/*! scoutfile/lib/browser/global */ 6),
  __webpack_require__(/*! scoutfile/lib/browser/namespace */ 2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (global, BV) {
  var console = global.console;

  // Explicitly fallback to `false` where not supported, as IE8
  // is known to do weird things when invoking methods against
  // the console object.
  var timeline = console &&
    (console.time || console.timeline || false);

  try {

    if (BV._bvapijs) {
      return;
    }

    // Create the magpie queue in the scout
    global._bvaq = global._bvaq || [];

    var appConfig = __webpack_require__(/*! scoutfile/lib/browser/appConfig */ 7);

    BV = __webpack_require__(/*! ./scout/customer-overrides */ 8)(BV);

    if (timeline) {
      timeline.call(console, 'scout-to-render');
    }

    var _internal = BV._internal;

    _internal.startTime = new Date();
    _internal.apiCache = {};
    _internal.fbVersion = appConfig.version;
    _internal.uiVersion = appConfig.firebirdVersion;
    _internal.protocol = global.location.protocol === 'https:' ?
      'https:' : 'http:';
    _internal.preview = !(true);

    _internal.asEvented = __webpack_require__(/*! scoutfile/lib/browser/evented */ 9);
    _internal.ie = __webpack_require__(/*! scoutfile/lib/browser/ie */ 11);
    _internal._ = __webpack_require__(/*! ./scout/underscore-subset */ 13);

    // Indicate that the scout file has been loaded.
    BV._bvapijs = true;

    // Ingest the customer configuration.
    BV._options = appConfig.rawFirebirdConfig;

    var perf = BV.performance = __webpack_require__(/*! ./scout/performance */ 14);
    perf.mark('scoutStart');

    BV = __webpack_require__(/*! ./scout/base-url-override */ 19)(BV);
    BV.options = __webpack_require__(/*! ./scout/implementation */ 20)(BV);

    __webpack_require__(/*! ./scout/loader */ 23)(BV);

    var extensions = BV.extensions = __webpack_require__(/*! ./scout/extensions */ 30);

    BV._internal.extensionsRegistry =
      __webpack_require__(/*! ./scout/register-bv-extensions */ 31)(extensions);

    BV._internal.preload = __webpack_require__(/*! ./scout/preload */ 32)(BV);

    global.$BV = __webpack_require__(/*! ./scout/api-setup */ 33)(BV, global.$BV);

    __webpack_require__(/*! ./scout/shopper-marketing.js */ 34);

    // var shopperSDK = require('shopper-profile-sdk-js');
    // shopperSDK.init(BV, 'RatingsAndReviews', BV.options.environment !== 'production');

    perf.mark('scoutEnd');

    if (true) {
      __webpack_require__(/*! ./scout/performance.record */ 35);
    }
  }
  catch (e) {
    if (console && console.log) {
      console.log(e.stack);
      console.log('Error loading Bazaarvoice', e);
    }
  }

}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 6 */
/*!*******************************************!*\
  !*** ./~/scoutfile/lib/browser/global.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

'use strict';

module.exports = __webpack_require__(/*! bv-ui-core/lib/global */ 4);


/***/ },
/* 7 */
/*!**********************************************!*\
  !*** ./~/scoutfile/lib/browser/appConfig.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

/* global SCOUTFILE_APP_CONFIG */
'use strict';

module.exports = ({"rawFirebirdConfig":{"build":true,"site":"obodrov","siteId":"obodrov","siteName":"obodrov","implementations":{"weights":{"12325_30_0":100},"total":100},"configs":{"12325_30_0":{"version":2648,"locale":"en_US","locales":[{"country":"RU","language":"ru","locale":"ru_RU"},{"country":"CA","language":"fr","locale":"fr_CA"},{"country":"ES","language":"en","locale":"en_ES"},{"country":"US","language":"es","locale":"es_US"},{"country":"JP","language":"ja","locale":"ja_JP"},{"country":"FR","language":"fr","locale":"fr_FR"},{"country":"IL","language":"he","locale":"he_IL"},{"country":"ES","language":"ca","locale":"ca_ES"},{"country":"DE","language":"de","locale":"de_DE"},{"country":"GB","language":"en","locale":"en_GB"},{"country":"CA","language":"en","locale":"en_CA"},{"country":"US","language":"en","locale":"en_US"},{"country":"UA","language":"uk","locale":"uk_UA"},{"country":"ES","language":"eu","locale":"eu_ES"},{"country":"PT","language":"en","locale":"en_PT"},{"country":"BH","language":"ar","locale":"ar_BH"},{"country":"ES","language":"es","locale":"es_ES"},{"country":"IL","language":"en","locale":"en_IL"},{"country":"JP","language":"en","locale":"en_JP"},{"country":"BH","language":"en","locale":"en_BH"},{"country":"PT","language":"pt","locale":"pt_PT"},{"country":"NL","language":"nl","locale":"nl_NL"}],"apiconfig":{"limit":10,"passkey":"6yhe8id7zk9fzhw8lgxmozupf","baseUrl":"//api.bazaarvoice.com/data/","notificationsUrl":"//api.bazaarvoice.com/notifications/","bvLocalUrl":"//api.bazaarvoice.com/bvlocal/","bvLocalKey":"95uqgm8emmjyp9ymrthmtxb9","contentLocales":["zh_CN","da_DK","en_US"],"displaycode":"12325_30_0-en_us"},"allowedDomains":[{"domainAddress":".Agileville.com","allowSubdomain":true,"firstPartyCookieEnabled":true,"thirdPartyCookieEnabled":true},{"allowSubdomain":true,"domainAddress":".bazaarvoice.com","thirdPartyCookieEnabled":true,"firstPartyCookieEnabled":true},{"allowSubdomain":true,"domainAddress":".localhost","thirdPartyCookieEnabled":true,"firstPartyCookieEnabled":true},{"allowSubdomain":true,"domainAddress":".att.com","thirdPartyCookieEnabled":true,"firstPartyCookieEnabled":true},{"allowSubdomain":true,"domainAddress":".danheberden.com","thirdPartyCookieEnabled":true,"firstPartyCookieEnabled":true},{"allowSubdomain":true,"domainAddress":".codepen.io","thirdPartyCookieEnabled":true,"firstPartyCookieEnabled":true},{"allowSubdomain":true,"domainAddress":".file","thirdPartyCookieEnabled":true,"firstPartyCookieEnabled":true},{"allowSubdomain":true,"domainAddress":".bodrovphone.github.io","thirdPartyCookieEnabled":true,"firstPartyCookieEnabled":true},{"allowSubdomain":false,"domainAddress":"vderkach.github.io","thirdPartyCookieEnabled":true,"firstPartyCookieEnabled":true},{"allowSubdomain":true,"domainAddress":".costcotravel.com","thirdPartyCookieEnabled":true,"firstPartyCookieEnabled":true},{"allowSubdomain":false,"domainAddress":"bodrov-csp-test.com","thirdPartyCookieEnabled":true,"firstPartyCookieEnabled":true}],"build":true,"statsTypes":["Questions","Reviews"],"externalFeatures":[],"page":{"size":8,"size2n":8,"reInject":true,"details":{"review":{"size":8,"size2n":30},"question":{"size":10,"size2n":10},"comment":{"size":3,"size2n":3},"reviewcomment":{"size":3,"size2n":3},"answer":{"size":10,"size2n":10},"author":{"size":1,"size2n":1}}},"homePageUrl":"http://Agileville.com","container":{"url":null,"subjectRedirect":false},"analytics":{"vendors":{"magpie":{"brandDomain":null}}},"vendorConfig":{"facebook":{"key":""}},"uiActions":{"rr_inline_ratings":["inlineRatingList1"],"rr_show_reviews":["reviewContentList1","reviewSubmission1","reviewSummary1","contentSearch1"],"rr_submit_review":["reviewSubmission1"],"rr_submit_comment":["commentSubmission1_inline"],"rr_submit_generic":["reviewGenericSubmission1"],"qa_show_summary":["reviewSummary1"],"qa_show_questions":["questionContentList1","questionSubmission1","contentSearch2"],"qa_show_answers":[],"qa_submit_question":["questionSubmission1"],"qa_submit_answer":["answerSubmission1_inline"],"cp_show_profile":["fullProfile1"],"sy_show_stories":[],"rr_submission_guidelines":["rrSubmissionGuidelines1"]},"containers":{"BVRRSummaryContainer":"summaryContainerDiv","BVRRContainer":"contentContainerDiv","BVQAContainer":"contentContainerDiv","BVLBContainer":"contentContainerDiv"},"injectionZone":{"BVRRContainer":["contentSearch1","reviewContentList1"],"BVQAContainer":["contentSearch2","questionContentList1"]},"submission":{"duplicateTimeout":43200000,"userTimeout":604800000,"maxAnswers":10,"questionsPageSize":4,"rating":{"range":[1,5]},"reviewtext":{"maxlength":10000,"minlength":0},"title":{"maxlength":50,"minlength":0},"usernickname":{"maxlength":50,"minlength":0},"userlocation":{"maxlength":100,"minlength":0},"netpromoterscore":{"range":[0,10]},"netpromotercomment":{"maxlength":100000,"minlength":0}},"display":{"filters":[],"sprite":false,"syndicationFilter":[]},"fqhn":"bodrovphone.github.io/bv-test-page-csp","environment":"production","workspace":"local","cdnhost":"display-qa.ugc.bazaarvoice.com","imagesPath":"//display-qa.ugc.bazaarvoice.com/common/images/","utilPath":"//display-qa.ugc.bazaarvoice.com/common/util/","displaycode":"12325_30_0","implementationID":"b806b238-dec0-49a7-b512-0165fc244356","clientname":"Agileville","clientDisplayName":"Agileville","siteAuth":{"review":true,"comment":true,"question":false,"answer":true},"loginPage":"https://bodrovphone.github.io/bv-test-page-csp/login.html","experiments":{},"clientLogo":"http://image.sa.bazaarvoice.com/lib/fe55157073620275731d/m/1/","sort":{"reviews":"mostRecent","questions":"recentQuestionsFirst"},"sci":{"enabled":true,"waps":[{"name":"GoogleAnalytics","method":"UNIVERSAL","tracker":""}]},"bvLocal":{"enabled":false,"isLocalNode":false},"rrReadOnlyEnabled":false,"queryRouter":{"editCanonicalTags":false},"fingerprintingEnabled":true,"trackingDataRegion":"undecided","unsubscribeAllMessageTypes":false,"translatedReviews":true,"statistics":{"onlyShowDisplayedLocaleStatistics":true},"piiDataRegion":"unitedStates","contentLocales":["zh_CN","da_DK","en_US"],"deploymentId":"Agileville/obodrov/PRODUCTION/en_US","deploymentPath":"dimsum/doc/clientDeploymentConfigs/agileville/obodrov/PRODUCTION/en_US","site":"obodrov","siteId":"obodrov","siteName":"obodrov","prefetchConfigs":[{"url":"//api.bazaarvoice.com/data/batch.json?passkey=6yhe8id7zk9fzhw8lgxmozupf&apiversion=5.5&displaycode=12325_30_0-en_us&resource.q0=products&filter.q0=id%3Aeq%3A___PRODUCTIDTOKEN___&stats.q0=questions%2Creviews&filteredstats.q0=questions%2Creviews&filter_questions.q0=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&filter_answers.q0=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&filter_reviews.q0=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&filter_reviewcomments.q0=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&resource.q1=questions&filter.q1=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter.q1=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&sort.q1=submissiontime%3Adesc&stats.q1=questions&filteredstats.q1=questions&include.q1=authors%2Cproducts%2Canswers&filter_questions.q1=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&filter_answers.q1=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&sort_answers.q1=submissiontime%3Aasc&limit.q1=10&offset.q1=0&limit_answers.q1=10&resource.q2=reviews&filter.q2=isratingsonly%3Aeq%3Afalse&filter.q2=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter.q2=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&sort.q2=submissiontime%3Adesc&stats.q2=reviews&filteredstats.q2=reviews&include.q2=authors%2Cproducts%2Ccomments&filter_reviews.q2=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&filter_reviewcomments.q2=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&filter_comments.q2=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&limit.q2=8&offset.q2=0&limit_comments.q2=3&resource.q3=reviews&filter.q3=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter.q3=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&limit.q3=1&resource.q4=reviews&filter.q4=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter.q4=isratingsonly%3Aeq%3Afalse&filter.q4=issyndicated%3Aeq%3Afalse&filter.q4=rating%3Agt%3A3&filter.q4=totalpositivefeedbackcount%3Agte%3A3&filter.q4=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&sort.q4=totalpositivefeedbackcount%3Adesc&include.q4=authors%2Creviews%2Cproducts&filter_reviews.q4=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&limit.q4=1&resource.q5=reviews&filter.q5=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter.q5=isratingsonly%3Aeq%3Afalse&filter.q5=issyndicated%3Aeq%3Afalse&filter.q5=rating%3Alte%3A3&filter.q5=totalpositivefeedbackcount%3Agte%3A3&filter.q5=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&sort.q5=totalpositivefeedbackcount%3Adesc&include.q5=authors%2Creviews%2Cproducts&filter_reviews.q5=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&limit.q5=1","subQueries":["//api.bazaarvoice.com/data/products.json?passkey=6yhe8id7zk9fzhw8lgxmozupf&apiversion=5.5&displaycode=12325_30_0-en_us&filter=id%3Aeq%3A___PRODUCTIDTOKEN___&stats=questions%2Creviews&filteredstats=questions%2Creviews&filter_questions=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&filter_answers=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&filter_reviews=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&filter_reviewcomments=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US","//api.bazaarvoice.com/data/questions.json?passkey=6yhe8id7zk9fzhw8lgxmozupf&apiversion=5.5&displaycode=12325_30_0-en_us&filter=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&sort=submissiontime%3Adesc&stats=questions&filteredstats=questions&include=authors%2Cproducts%2Canswers&filter_questions=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&filter_answers=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&sort_answers=submissiontime%3Aasc&limit=10&offset=0&limit_answers=10","//api.bazaarvoice.com/data/reviews.json?passkey=6yhe8id7zk9fzhw8lgxmozupf&apiversion=5.5&displaycode=12325_30_0-en_us&filter=isratingsonly%3Aeq%3Afalse&filter=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&sort=submissiontime%3Adesc&stats=reviews&filteredstats=reviews&include=authors%2Cproducts%2Ccomments&filter_reviews=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&filter_reviewcomments=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&filter_comments=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&limit=8&offset=0&limit_comments=3","//api.bazaarvoice.com/data/reviews.json?passkey=6yhe8id7zk9fzhw8lgxmozupf&apiversion=5.5&displaycode=12325_30_0-en_us&filter=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&limit=1","//api.bazaarvoice.com/data/reviews.json?passkey=6yhe8id7zk9fzhw8lgxmozupf&apiversion=5.5&displaycode=12325_30_0-en_us&filter=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter=isratingsonly%3Aeq%3Afalse&filter=issyndicated%3Aeq%3Afalse&filter=rating%3Agt%3A3&filter=totalpositivefeedbackcount%3Agte%3A3&filter=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&sort=totalpositivefeedbackcount%3Adesc&include=authors%2Creviews%2Cproducts&filter_reviews=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&limit=1","//api.bazaarvoice.com/data/reviews.json?passkey=6yhe8id7zk9fzhw8lgxmozupf&apiversion=5.5&displaycode=12325_30_0-en_us&filter=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter=isratingsonly%3Aeq%3Afalse&filter=issyndicated%3Aeq%3Afalse&filter=rating%3Alte%3A3&filter=totalpositivefeedbackcount%3Agte%3A3&filter=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&sort=totalpositivefeedbackcount%3Adesc&include=authors%2Creviews%2Cproducts&filter_reviews=contentlocale%3Aeq%3Azh_CN%2Cda_DK%2Cen_US&limit=1"]}]}},"version":2648,"notifications":{"passkey":"052934be025c22306fd57def71016f86"}},"debug":true,"siteId":"obodrov","siteName":"obodrov","version":2648,"build":true,"env":"production","firebirdVersion":"1.0.55","date":"Thu Jan 30 2020 12:31:53 GMT+0200 (EET)"});


/***/ },
/* 8 */
/*!********************************************************!*\
  !*** ./static/dev/scripts/scout/customer-overrides.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// Customers can set values on window.BV that have special meaning;
// this file looks for those values and stores them so other parts
// of the code can use them. It is included by the scout file.
!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
  return function (BV) {
    BV._internal = {};
    BV.options = {};

    // Copy properties that may have been defined on window.BV
    // to the places where other code will expect them to be.
    if (BV.initialData) {
      BV.options.initialData = BV.initialData;
    }

    if (BV.API_BASE_URL) {
      BV._internal.apiOverrideURL = BV.API_BASE_URL;
    }

    return BV;
  };
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 9 */
/*!********************************************!*\
  !*** ./~/scoutfile/lib/browser/evented.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

'use strict';

module.exports = __webpack_require__(/*! bv-ui-core/lib/evented */ 10);


/***/ },
/* 10 */
/*!*******************************************************!*\
  !*** ./~/scoutfile/~/bv-ui-core/lib/evented/index.js ***!
  \*******************************************************/
/***/ function(module, exports) {

/* eslint-disable */
/**
 * @fileOverview
 * asEvented v0.4.3 - an event emitter mixin which provides
 * the observer pattern to JavaScript object.
 *
 * Copyright 2012, Michal Kuklis
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 **/
/*
 * Originally from https://github.com/mkuklis/asEvented
 *
 * Changelog:
 * - removed UMD wrapper
 * - do not export `bind` or `unbind`
 */
var ArrayProto = Array.prototype;
var nativeIndexOf = ArrayProto.indexOf;
var slice = ArrayProto.slice;

function bind(event, fn) {
  var i, part;
  var events = this.events = this.events || {};
  var parts = event.split(/\s+/);
  var num = parts.length;

  for (i = 0; i < num; i++) {
    events[(part = parts[i])] = events[part] || [];
    events[part].push(fn);
  }
  return this;
}

function one(event, fn) {
  // [notice] The value of fn and fn1 is not equivalent in the case
  // of the following in MSIE.
  //
  // var fn = function fn1 () { alert(fn === fn1) } ie.<9 false
  var fnc = function () {
    this.off(event, fnc);
    fn.apply(this, slice.call(arguments));
  };
  this.on(event, fnc);
  return this;
}

function unbind(event, fn) {
  var eventName, i, index, num, parts;
  var events = this.events;

  if (!events) {
    return;
  }

  parts = event.split(/\s+/);
  for (i = 0, num = parts.length; i < num; i++) {
    if ((eventName = parts[i]) in events !== false) {
      index = (fn) ? _indexOf(events[eventName], fn) : 0;
      if (index !== -1) {
        events[eventName].splice(index, 1);
      }
    }
  }
  return this;
}

function trigger(event) {
  var args, i;
  var events = this.events;

  if (!events || event in events === false) {
    return;
  }

  args = slice.call(arguments, 1);
  for (i = events[event].length - 1; i >= 0; i--) {
    try {
      events[event][i].apply(this, args);
    }
    catch (e) {}
  }
  return this;
}

// TODO: This is the same as the inArray method provided
// by the utils module. This should be replaced in favor
// of using that.
function _indexOf(array, needle) {
  var i, l;

  if (nativeIndexOf && array.indexOf === nativeIndexOf) {
    return array.indexOf(needle);
  }

  for (i = 0, l = array.length; i < l; i++) {
    if (array[i] === needle) {
      return i;
    }
  }
  return -1;
}

module.exports = function () {
  this.on = bind;
  this.off = unbind;
  this.trigger = this.emit = trigger;
  this.one = this.once = one;

  return this;
};
/* eslint-enable */


/***/ },
/* 11 */
/*!***************************************!*\
  !*** ./~/scoutfile/lib/browser/ie.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

'use strict';

module.exports = __webpack_require__(/*! bv-ui-core/lib/ie */ 12);


/***/ },
/* 12 */
/*!**************************************************!*\
  !*** ./~/scoutfile/~/bv-ui-core/lib/ie/index.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

/* eslint no-sequences: 0 */
/**
 * @fileOverview
 * A short snippet for detecting versions of IE in JavaScript
 * without resorting to user-agent sniffing. Will only work for IE >=5 and <=9
 * since IE10 dropped support for conditional comments. When ie is undefined
 * it means it's either IE10+ or not an IE browser.
 */

var doc = __webpack_require__(/*! ../global */ 4).document;

module.exports = (function () {
  var ie = (function (v, div, undef) {
    var all = div.getElementsByTagName('i');

    while (
      div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0]
    ) {
      // Empty.
    }
    return v > 4 ? v : undef;
  })(3, doc.createElement('div'));

  return ie;
})();


/***/ },
/* 13 */
/*!*******************************************************!*\
  !*** ./static/dev/scripts/scout/underscore-subset.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @fileOverview underscore.deferred
 *
 * https://github.com/wookiehangover/underscore.deferred
 * Copyright (c) 2012 Sam Breed
 * http://www.opensource.org/licenses/mit-license.php
 *
 * BV Changelog:
 * - export all underscore methods
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
  // Let's borrow a couple of things from Underscore that we'll need

  // _.each
  var breaker = {},
      AP = Array.prototype,
      OP = Object.prototype,

      hasOwn = OP.hasOwnProperty,
      toString = OP.toString,
      forEach = AP.forEach,
      indexOf = AP.indexOf,
      slice = AP.slice;

  var _each = function( obj, iterator, context ) {
    var key, i, l;

    if ( !obj ) {
      return;
    }
    if ( forEach && obj.forEach === forEach ) {
      obj.forEach( iterator, context );
    } else if ( obj.length === +obj.length ) {
      for ( i = 0, l = obj.length; i < l; i++ ) {
        if ( i in obj && iterator.call( context, obj[i], i, obj ) === breaker ) {
          return;
        }
      }
    } else {
      for ( key in obj ) {
        if ( hasOwn.call( obj, key ) ) {
          if ( iterator.call( context, obj[key], key, obj) === breaker ) {
            return;
          }
        }
      }
    }
  };

  // _.isFunction
  var _isFunction = function( obj ) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  };

  // _.extend
  var _extend = function( obj ) {

    _each( slice.call( arguments, 1), function( source ) {
      var prop;

      for ( prop in source ) {
        if ( source[prop] !== void 0 ) {
          obj[ prop ] = source[ prop ];
        }
      }
    });
    return obj;
  };

  // $.inArray
  var _inArray = function( elem, arr, i ) {
    var len;

    if ( arr ) {
      if ( indexOf ) {
        return indexOf.call( arr, elem, i );
      }

      len = arr.length;
      i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

      for ( ; i < len; i++ ) {
        // Skip accessing in sparse arrays
        if ( i in arr && arr[ i ] === elem ) {
          return i;
        }
      }
    }

    return -1;
  };

  // And some jQuery specific helpers

  var class2type = {};

  // Populate the class2type map
  _each("Boolean Number String Function Array Date RegExp Object".split(" "), function(name, i) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase();
  });

  var _type = function( obj ) {
    return obj == null ?
      String( obj ) :
      class2type[ toString.call(obj) ] || "object";
  };

  // Now start the jQuery-cum-Underscore implementation. Some very
  // minor changes to the jQuery source to get this working.

  // Internal Deferred namespace
  var _d = {
    extend : _extend,
    each : _each,
    isFunction : _isFunction
  };

  // String to Object options format cache
  var optionsCache = {};

  // Convert String-formatted options into Object-formatted ones and store in cache
  function createOptions( options ) {
    var object = optionsCache[ options ] = {};
    _each( options.split( /\s+/ ), function( flag ) {
      object[ flag ] = true;
    });
    return object;
  }

  _d.Callbacks = function( options ) {

    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ?
      ( optionsCache[ options ] || createOptions( options ) ) :
      _extend( {}, options );

    var // Last fire value (for non-forgettable lists)
      memory,
      // Flag to know if list was already fired
      fired,
      // Flag to know if list is currently firing
      firing,
      // First callback to fire (used internally by add and fireWith)
      firingStart,
      // End of the loop when firing
      firingLength,
      // Index of currently firing callback (modified by remove if needed)
      firingIndex,
      // Actual callback list
      list = [],
      // Stack of fire calls for repeatable lists
      stack = !options.once && [],
      // Fire callbacks
      fire = function( data ) {
        memory = options.memory && data;
        fired = true;
        firingIndex = firingStart || 0;
        firingStart = 0;
        firingLength = list.length;
        firing = true;
        for ( ; list && firingIndex < firingLength; firingIndex++ ) {
          if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
            memory = false; // To prevent further calls using add
            break;
          }
        }
        firing = false;
        if ( list ) {
          if ( stack ) {
            if ( stack.length ) {
              fire( stack.shift() );
            }
          } else if ( memory ) {
            list = [];
          } else {
            self.disable();
          }
        }
      },
      // Actual Callbacks object
      self = {
        // Add a callback or a collection of callbacks to the list
        add: function() {
          if ( list ) {
            // First, we save the current length
            var start = list.length;
            (function add( args ) {
              _each( args, function( arg ) {
                var type = _type( arg );
                if ( type === "function" ) {
                  if ( !options.unique || !self.has( arg ) ) {
                    list.push( arg );
                  }
                } else if ( arg && arg.length && type !== "string" ) {
                  // Inspect recursively
                  add( arg );
                }
              });
            })( arguments );
            // Do we need to add the callbacks to the
            // current firing batch?
            if ( firing ) {
              firingLength = list.length;
            // With memory, if we're not firing then
            // we should call right away
            } else if ( memory ) {
              firingStart = start;
              fire( memory );
            }
          }
          return this;
        },
        // Remove a callback from the list
        remove: function() {
          if ( list ) {
            _each( arguments, function( arg ) {
              var index;
              while( ( index = _inArray( arg, list, index ) ) > -1 ) {
                list.splice( index, 1 );
                // Handle firing indexes
                if ( firing ) {
                  if ( index <= firingLength ) {
                    firingLength--;
                  }
                  if ( index <= firingIndex ) {
                    firingIndex--;
                  }
                }
              }
            });
          }
          return this;
        },
        // Control if a given callback is in the list
        has: function( fn ) {
          return _inArray( fn, list ) > -1;
        },
        // Remove all callbacks from the list
        empty: function() {
          list = [];
          return this;
        },
        // Have the list do nothing anymore
        disable: function() {
          list = stack = memory = undefined;
          return this;
        },
        // Is it disabled?
        disabled: function() {
          return !list;
        },
        // Lock the list in its current state
        lock: function() {
          stack = undefined;
          if ( !memory ) {
            self.disable();
          }
          return this;
        },
        // Is it locked?
        locked: function() {
          return !stack;
        },
        // Call all callbacks with the given context and arguments
        fireWith: function( context, args ) {
          args = args || [];
          args = [ context, args.slice ? args.slice() : args ];
          if ( list && ( !fired || stack ) ) {
            if ( firing ) {
              stack.push( args );
            } else {
              fire( args );
            }
          }
          return this;
        },
        // Call all the callbacks with the given arguments
        fire: function() {
          self.fireWith( this, arguments );
          return this;
        },
        // To know if the callbacks have already been called at least once
        fired: function() {
          return !!fired;
        }
      };

    return self;
  };

  _d.Deferred = function( func ) {

    var tuples = [
        // action, add listener, listener list, final state
        [ "resolve", "done", _d.Callbacks("once memory"), "resolved" ],
        [ "reject", "fail", _d.Callbacks("once memory"), "rejected" ],
        [ "notify", "progress", _d.Callbacks("memory") ]
      ],
      state = "pending",
      promise = {
        state: function() {
          return state;
        },
        always: function() {
          deferred.done( arguments ).fail( arguments );
          return this;
        },
        then: function( /* fnDone, fnFail, fnProgress */ ) {
          var fns = arguments;
          return _d.Deferred(function( newDefer ) {
            _each( tuples, function( tuple, i ) {
              var action = tuple[ 0 ],
                fn = fns[ i ];
              // deferred[ done | fail | progress ] for forwarding actions to newDefer
              deferred[ tuple[1] ]( _isFunction( fn ) ?
                function() {
                  var returned = fn.apply( this, arguments );
                  if ( returned && _isFunction( returned.promise ) ) {
                    returned.promise()
                      .done( newDefer.resolve )
                      .fail( newDefer.reject )
                      .progress( newDefer.notify );
                  } else {
                    newDefer[ action + "With" ]( this === deferred ? newDefer : this, [ returned ] );
                  }
                } :
                newDefer[ action ]
              );
            });
            fns = null;
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function( obj ) {
          return obj != null ? _extend( obj, promise ) : promise;
        }
      },
      deferred = {};

    // Keep pipe for back-compat
    promise.pipe = promise.then;

    // Add list-specific methods
    _each( tuples, function( tuple, i ) {
      var list = tuple[ 2 ],
        stateString = tuple[ 3 ];

      // promise[ done | fail | progress ] = list.add
      promise[ tuple[1] ] = list.add;

      // Handle state
      if ( stateString ) {
        list.add(function() {
          // state = [ resolved | rejected ]
          state = stateString;

        // [ reject_list | resolve_list ].disable; progress_list.lock
        }, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
      }

      // deferred[ resolve | reject | notify ] = list.fire
      deferred[ tuple[0] ] = list.fire;
      deferred[ tuple[0] + "With" ] = list.fireWith;
    });

    // Make the deferred a promise
    promise.promise( deferred );

    // Call given func if any
    if ( func ) {
      func.call( deferred, deferred );
    }

    // All done!
    return deferred;
  };

  // Deferred helper
  _d.when = function( subordinate /* , ..., subordinateN */ ) {
    var i = 0,
      resolveValues = ( _type(subordinate) === 'array' && arguments.length === 1 ) ? subordinate : slice.call( arguments ),
      length = resolveValues.length;

      if ( _type(subordinate) === 'array' && subordinate.length === 1 ) {
        subordinate = subordinate[ 0 ];
      }

      // the count of uncompleted subordinates
      var remaining = length !== 1 || ( subordinate && _isFunction( subordinate.promise ) ) ? length : 0,

      // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
      deferred = remaining === 1 ? subordinate : _d.Deferred(),

      // Update function for both resolve and progress values
      updateFunc = function( i, contexts, values ) {
        return function( value ) {
          contexts[ i ] = this;
          values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
          if( values === progressValues ) {
            deferred.notifyWith( contexts, values );
          } else if ( !( --remaining ) ) {
            deferred.resolveWith( contexts, values );
          }
        };
      },

      progressValues, progressContexts, resolveContexts;

    // add listeners to Deferred subordinates; treat others as resolved
    if ( length > 1 ) {
      progressValues = new Array( length );
      progressContexts = new Array( length );
      resolveContexts = new Array( length );
      for ( ; i < length; i++ ) {
        if ( resolveValues[ i ] && _isFunction( resolveValues[ i ].promise ) ) {
          resolveValues[ i ].promise()
            .done( updateFunc( i, resolveContexts, resolveValues ) )
            .fail( deferred.reject )
            .progress( updateFunc( i, progressContexts, progressValues ) );
        } else {
          --remaining;
        }
      }
    }

    // if we're not waiting on anything, resolve the master
    if ( !remaining ) {
      deferred.resolveWith( resolveContexts, resolveValues );
    }

    return deferred.promise();
  };

  return _d;
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 14 */
/*!*************************************************!*\
  !*** ./static/dev/scripts/scout/performance.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
  __webpack_require__(/*! ./polyfill/request-animation-frame */ 15),
  __webpack_require__(/*! ./polyfill/date.now */ 16),
  __webpack_require__(/*! ./polyfill/performance.now */ 17),
  __webpack_require__(/*! ./polyfill/performance.mark */ 18),
  __webpack_require__(/*! scoutfile/lib/browser/namespace */ 2)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (raf, dateNow, perfNow, perfMark, BV) {
  BV.performance = {};

  BV.Date = dateNow(window);
  BV.requestAnimationFrame = raf(window);

  BV.performance.now = perfNow(window);
  BV.performance.mark = perfMark(BV.performance, window);
  return BV.performance;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 15 */
/*!**********************************************************************!*\
  !*** ./static/dev/scripts/scout/polyfill/request-animation-frame.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @fileOverview Provide requestAnimationFrame or polyfill it
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
  return function (global) {
    var rAF = global.requestAnimationFrame ||
      global.webkitRequestAnimationFrame ||
      global.mozRequestAnimationFrame ||
      global.oRequestAnimationFrame ||
      global.msRequestAnimationFrame ||
      function (callback) {
        global.setTimeout(callback, 1000 / 60);
      };

    return function () {
      return rAF.apply(global, arguments);
    };
  };
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 16 */
/*!*******************************************************!*\
  !*** ./static/dev/scripts/scout/polyfill/date.now.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
  return function (global) {
    return {
      now : (function () {
        // cache a reference in case someone fiddles with Date.now later
        var nativeDate = global.Date;
        var nativeNow = nativeDate.now;

        if (typeof nativeNow === 'function') {
          return function () {
            return nativeNow.call(nativeDate);
          };
        }
        else {
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now#Compatibility
          return function () {
            return new nativeDate().getTime();
          };
        }
      }())
    };
  };
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 17 */
/*!**************************************************************!*\
  !*** ./static/dev/scripts/scout/polyfill/performance.now.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// based on https://gist.github.com/paulirish/5438650
//
// NOTE: this is not a true polyfill in browsers that do not implement the
// Navigation Timing API. Rather than returning the time elapsed since
// `navigationStart`, it will return the time elapsed since the polyfill was
// installed.
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
  __webpack_require__(/*! ./date.now */ 16)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (date) {
  return function (global) {
    // cache references to guard against shenanigans
    var performance = global.performance;
    var nativeNow = performance && performance.now;

    if (typeof nativeNow === 'function') {
      // use the native implementation
      return function () {
        return nativeNow.call(performance);
      };
    }

    // the default offset is the moment the polyfill was installed
    var nowOffset = date(global).now();
    if (performance &&
      performance.timing &&
      typeof performance.timing.navigationStart === 'number'
    ) {
      // use navigationStart as the offset when possible
      nowOffset = performance.timing.navigationStart;
    }

    return function () {
      return date(global).now() - nowOffset;
    };
  };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 18 */
/*!***************************************************************!*\
  !*** ./static/dev/scripts/scout/polyfill/performance.mark.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
  return function (BVPerformance, global) {
    // Cache references to native implementation in case they are modified later
    var performance = global.performance;

    // Check for native User Timing API support. If it's present, we'll use
    // it, but we'll add some logic around it.
    var nativeMark = performance && performance.mark;

    var marks = BVPerformance._marks = {};
    var timeline = BVPerformance._timeline = [];

    // Per http://www.w3.org/TR/user-timing/#extensions-performance-interface,
    // the mark name cannot be any of the attributes in the PerformanceTiming
    // interface: http://www.w3.org/TR/navigation-timing/#performancetiming.
    var reservedNames = {
      'navigationStart' : 1,
      'unloadEventStart' : 1,
      'unloadEventEnd' : 1,
      'redirectStart' : 1,
      'redirectEnd' : 1,
      'fetchStart' : 1,
      'domainLookupStart' : 1,
      'domainLookupEnd' : 1,
      'connectStart' : 1,
      'connectEnd' : 1,
      'secureConnectionStart' : 1,
      'requestStart' : 1,
      'responseStart' : 1,
      'responseEnd' : 1,
      'domLoading' : 1,
      'domInteractive' : 1,
      'domContentLoadedEventStart' : 1,
      'domContentLoadedEventEnd' : 1,
      'domComplete' : 1,
      'loadEventStart' : 1,
      'loadEventEnd' : 1
    };

    return function (name) {
      // If the native version exists, we want to use it, but we don't want
      // to use it exclusively. Experience has taught us that we can't rely
      // on the native API being present and functioning _even if it claims
      // to be_. (Maybe the page owner is using a poorly-implemented
      // polyfill.) So we can't trust any results we get from, say,
      // `window.performance.getEntries`.
      //
      // Thus we add our own marks to our own timeline. The functions that
      // will later be defined on `BV.performance` will write to and read
      // from that timeline only.
      //
      // But we still want to register our marks with anything that claims to
      // be the native User Timing API. That way we get the benefits of
      // tooling (Chrome Dev Tools, webpagetest) on pages that we know to be
      // implementing the API properly. For more info, see UIA-7674 and its
      // associated pull request.
      if (typeof nativeMark === 'function') {
        // Call the native performance method...
        nativeMark.call(performance, name);
        // ...but don't return, because we also want to create an artificial
        // mark.
      }

      if (arguments.length < 1) {
        throw new SyntaxError('Cannot set mark without name');
      }

      if (name in reservedNames) {
        throw new SyntaxError(
          'Cannot set mark with reserved name "' + name + '"'
        );
      }

      var record = {
        entryType : 'mark',
        name : name,
        startTime : BVPerformance.now(),
        duration : 0
      };

      marks[name] = marks[name] || [];
      marks[name].push(record.startTime);
      timeline.push(record);
    };
  };
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 19 */
/*!*******************************************************!*\
  !*** ./static/dev/scripts/scout/base-url-override.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
  return function (BV) {
    var BVInternal = BV._internal;
    var configs = BV._options.configs;

    if (BVInternal.apiOverrideURL) {
      BVInternal.originalApiHosts = {};

      for (var config in configs) {
        if ( configs.hasOwnProperty(config) ) {
          BVInternal.originalApiHosts[config] = configs[config].apiconfig.baseUrl;
          configs[config].apiconfig.baseUrl = BVInternal.apiOverrideURL;
        }
      }
    }

    return BV;
  };
}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 20 */
/*!****************************************************!*\
  !*** ./static/dev/scripts/scout/implementation.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
  __webpack_require__(/*! scoutfile/lib/browser/cookie */ 21)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (cookie) {
  return function (BV) {
    var BVInternal = BV._internal;
    var impl;
    var opts;

    function getImpl (siteId, weights, total) {
      var secure;
      var rand = Math.random() * total;
      var runningTotal = 0;
      var displayCode;

      impl = cookie.read('BVImpl' + siteId);

      if ( impl && weights.hasOwnProperty(impl) ) {
        return impl;
      }

      for (displayCode in weights) {
        if ( weights.hasOwnProperty(displayCode) ) {
          if ( rand >= runningTotal && rand < (runningTotal + weights[displayCode]) ) {
            impl = displayCode;
            break;
          }
          else {
            runningTotal += weights[displayCode];
          }
        }
      }
      // Set secure flag true. See CCS-31984.
      if (location.protocol === 'https:') {
        secure = true;
      }

      cookie.create('BVImpl' + siteId, impl, '', '', secure);

      return impl;
    }

    impl = getImpl(BV._options.siteId, BV._options.implementations.weights, BV._options.implementations.total);
    opts = BV.options = BV._options.configs[impl];

    // Not going 100% protocol relative, so we work in file://
    BVInternal.baseUrl = BVInternal.protocol + '//' +
      opts.fqhn + '/static/' +
      opts.clientname + '/' +
      BV._options.siteId + '/' +
      opts.version + '/' +
      impl + '/' +
      opts.locale;

    return BV.options;
  };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 21 */
/*!*******************************************!*\
  !*** ./~/scoutfile/lib/browser/cookie.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

'use strict';

module.exports = __webpack_require__(/*! bv-ui-core/lib/cookie */ 22);


/***/ },
/* 22 */
/*!******************************************************!*\
  !*** ./~/scoutfile/~/bv-ui-core/lib/cookie/index.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

/**
 * @fileOverview
 * Provides cookie utilities.
 */

// Imports.
var global = __webpack_require__(/*! ../global */ 4);

module.exports = {

  /**
   * Create a cookie.
   *
   * @param {String} name The cookie name.
   * @param {String} value The cookie value.
   * @param {Number} days The cookie lifespan in days.
   * @param {String} [domain] The domain for the cookie.
   * @param {Boolean} [secure] Whether this is a secure cookie.
   */
  create: function (name, value, days, domain, secure) {
    var date = new Date();

    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = days ? ';expires=' + date.toGMTString() : '';

    var c = encodeURIComponent(name) + '=' +
      encodeURIComponent(value) +
      expires +
      ';path=/' +
      (domain ? (';domain=' + domain) : '') +
      (secure ? (';secure') : '');

    global.document.cookie = c;
  },

  /**
   * Obtain the value of a cookie.
   *
   * @param {String} name The cookie name.
   * @return {String} The cookie value or null if no such cookie.
   */
  read: function (name) {
    var nameEQ = encodeURIComponent(name) + '=';
    var ca = global.document.cookie.split(';');
    var i;

    for (i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }

      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
    }
    return null;
  },

  /**
   * Remove a cookie.
   *
   * @param {String} name The cookie name.
   */
  remove: function (name) {
    this.create(name, '', -1);
  }
};


/***/ },
/* 23 */
/*!********************************************!*\
  !*** ./static/dev/scripts/scout/loader.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global IS_BUILD, IS_TURBO, IS_SAMPLE_PAGE */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
  __webpack_require__(/*! ./underscore-subset */ 13),
  __webpack_require__(/*! scoutfile/lib/browser/ie */ 11),
  __webpack_require__(/*! scoutfile/lib/browser/loader */ 24),
  __webpack_require__(/*! scoutfile/lib/browser/global */ 6),
  __webpack_require__(/*! bv-ui-core/lib/staticAssetLoader */ 26)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, ie, loader, global, staticAssetLoaderFactory) {
  return function (BV) {
    var BVInternal = BV._internal;

    // Since the resulting global (window.BV._staticAssetRegistry) from the
    // factory function doesn't have a require function, we have to attach the
    // loader directly to the window.
    //
    // This isn't necessarily a bad thing, as multiple users of the scout can
    // piggy back on the same loader instance.
    BV.staticAssetLoader = BV.staticAssetLoader || staticAssetLoaderFactory.create({
      generateUrl : function (assetNames, namespaceName) {
        var filename = encodeURIComponent(assetNames.slice(0).sort().join('+')) + '.js';

        // The version of the generator service for the assets.
        var version = '2.0.0';

        // Always get the production asset. There is currently (4/8/16) no
        // difference between the prod/qa/test assets. They are all minified.
        //
        // If qa/test assets are ever uploaded as unminified versions, we
        // should look into using those in development scenarios. For now
        // the minified source has a sourceMappingURL so that should suffice.
        return 'https://display.ugc.bazaarvoice.com/common/static-assets/' + version + '/' + filename;
      },

      namespaceName : 'BV'
    });

    // This require call exists solely to initiate the request for the assets that will be used by this application.
    // The assets are stored in a cache found in require_plugins/staticAssetService. The reason we do this is to
    // prevent duplicative and late requests for required resources.
    BV.staticAssetLoader.require([
      'jquery-bv@1.11.1',
      'lodash-bv@1.2.0'
    ], function () {});

    var head = global.document.getElementsByTagName('head')[0];

    var cssRoot = BVInternal.baseUrl + '/stylesheets/';
    var oldIE = ie && ie > 4 && ie < 9;
    var css = cssRoot + ( BVInternal.preview ? 'cleanslate' : (oldIE ? 'screen-ie' : 'screen') ) + '.css';
    var primary;
    var opts;
    var nonce;

    if (true) {
      primary = 'bv-primary.js';
    }
    else {
      if (IS_TURBO) {
        primary = 'turbo.js';
      }
      else {
        primary = 'bazaarvoice-environment.js';
      }
    }

    if (false) {
      // By Require.js convention, Require "looks" at whatever script tag was
      // used to load it and if it has a 'data-main' that points to some
      // JavaScript, Require will execute it. See
      // http://requirejs.org/docs/jquery.html#setup
      opts = {
        attributes : {
          'data-main' : BVInternal.baseUrl + '/scripts/primary.js'
        }
      };
    }
    else {
      opts = {};
    }

    loader.loadScript(BVInternal.baseUrl + '/scripts/' + primary, opts);

    // Get the nonce attribute from the loader script tag if it exists and pass it to styleSheetOpts
    // for CSP support (see UIA-9332)
    nonce = document.currentScript && document.currentScript.nonce;

    var styleSheetOpts = nonce ? {
      attributes: {
        nonce: nonce
      }
    } : {};

    if (head) {
      // If we have a HEAD tag, inject into it.
      styleSheetOpts.injectionNode = head;
    }

    if (!BVInternal.preview && oldIE) {
      BVInternal.loadCSS = function () {
        loader.loadStyleSheet(css, styleSheetOpts);
      };
    }

    loader.loadStyleSheet(css, styleSheetOpts);

    if (true) {
      // Now load any 2nd Party "External Feature" scripts if enabled
      _.each(BV.options.externalFeatures, function (feature) {
        // UIA-7506: It may be tempting to remove the wrapping function,
        // and simply just pass `loader.loadScript` through to _.each,
        // but since _.each passes in an index and the object over which
        // you're iterating, it confuses loader.loadScript, causing lots
        // of bad things.
        _.each(feature.scripts, function (script) {
          loader.loadScript(script);
        });
      });
    }

    return BV;
  };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 24 */
/*!*******************************************!*\
  !*** ./~/scoutfile/lib/browser/loader.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

'use strict';

module.exports = __webpack_require__(/*! bv-ui-core/lib/loader */ 25);


/***/ },
/* 25 */
/*!******************************************************!*\
  !*** ./~/scoutfile/~/bv-ui-core/lib/loader/index.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

/* eslint no-use-before-define: 0 */
/**
 * @fileOverview
 * Load JavaScript and CSS at runtime.
 *
 * This module is derived from yepnope.js 2.0.0:
 * Copyright (c) 2014, Alex Sexton
 * Copyright (c) 2014, Ralph Holzmann
 * All rights reserved.
 * New BSD license:
 * https://github.com/SlexAxton/yepnope.js/blob/master/LICENSE.md
 *
 * @module
 */

var global = __webpack_require__(/*! ../global */ 4);
var doc = global.document;

var DEFAULT_TIMEOUT = 10000;

function getFirstScript () {
  return doc.getElementsByTagName('script')[0];
}

function isFileReady (readyState) {
  // the file is ready if there is no readyState, or if it has reached a
  // terminal state.
  return !readyState ||
    readyState === 'loaded' ||
    readyState === 'complete' ||
    readyState === 'uninitialized';
}

function validateArguments (url, options, callback) {
  if (!url || typeof url !== 'string') {
    throw new Error('`url` must be a string');
  }

  if (typeof options.timeout !== 'number') {
    throw new Error('`options.timeout` must be a number');
  }

  if (callback && typeof callback !== 'function') {
    throw new Error('`callback` must be a function');
  }
}

module.exports = {
  /**
   * Load a script from a URL
   *
   * The script is loaded on a later turn of the event loop. If a callback is
   * provided, it will be invoked on success in all supported browsers. The
   * callback will execute after the script.
   *
   * In modern IE and other browsers, the callback will be invoked with an error
   * on failure as well. A timeout in milliseconds may be provided as
   * `options.timeout`. If this timeout expires before loading fails or
   * succeeds, the callback will be invoked with an error.
   *
   * @param {string} url - URL of the script
   * @param {object} [options]
   * @param {object} options.attributes - an object containing key/value pairs
   *  to be used as attributes on the created `script` element (optional)
   * @param {number} options.timeout - timeout in milliseconds (defaults to
   *  10000ms)
   * @param {function} [callback] - node-style callback
   */
  loadScript: function (url, options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = null;
    }

    options = options || {};
    options.timeout = options.timeout || DEFAULT_TIMEOUT;

    validateArguments(url, options, callback);

    var script = doc.createElement('script');
    var done = false;
    var attr;

    if (options.attributes) {
      for (attr in options.attributes) {
        script.setAttribute(attr, options.attributes[attr]);
      }
    }

    function cleanUp (err) {
      done = true;
      clearTimeout(timeoutHandle);
      script.onload = script.onreadystatechange = script.onerror = null;
      script.parentNode.removeChild(script);

      if (typeof callback === 'function') {
        callback(err);
      }
    }

    script.onreadystatechange = script.onload = function () {
      if (done || !isFileReady(script.readyState)) {
        return;
      }

      cleanUp();
    };

    script.onerror = function () {
      if (done) {
        return;
      }

      cleanUp(new Error('Error: could not load ' + url));
    };

    // We should be able to catch most errors with onerror, but for browsers
    // that don't support onerror we provide the below timeout cb
    var timeoutHandle = setTimeout(function () {
      if (done) {
        return;
      }

      cleanUp(new Error('Error: script timeout ' + url));
    }, options.timeout);

    // If a script is cached, IE may execute it immediately, which breaks
    // JavaScript's run-to-completion semantics. So, don't try to load the
    // script until a later turn of the event loop.
    //
    // See http://www.guypo.com/ies-premature-execution-problem/
    setTimeout(function () {
      script.src = url;

      var firstScript = getFirstScript();

      firstScript.parentNode.insertBefore(script, firstScript);
    }, 0);
  },

  /**
   * Load a stylesheet from a URL
   *
   * The stylesheet is loaded on a later turn of the event loop. If a callback
   * is provided, it will be invoked on success in all supported browsers.
   *
   * In modern IE and other browsers, the callback will be invoked with an error
   * on failure as well. A timeout in milliseconds may be provided as
   * `options.timeout`. If this timeout expires before loading fails or
   * succeeds, the callback will be invoked with an error.
   *
   * @param {string} url - URL of the stylesheet
   * @param {object} [options]
   * @param {object} options.attributes - an object containing key/value pairs
   *  to be used as attributes on the created `link` element (optional)
   * @param {number} options.timeout - timeout in milliseconds (defaults to
   *  1000ms)
   * @param {element} options.injectionNode - node to inject link element
   *  into (defaults to parent node of the first script node)
   * @param {function} [callback] - node-style callback
   */
  loadStyleSheet: function (url, options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = null;
    }
    options = options || {};
    options.timeout = options.timeout || DEFAULT_TIMEOUT;

    validateArguments(url, options, callback);

    // This check doesn't happen in `validateArguments` because it's unique
    // to `loadStyleSheet`.
    if (
      'injectionNode' in options &&
      !(options.injectionNode instanceof global.Element)
    ) {
      throw new Error('`options.injectionNode` must be a DOM node');
    }

    var link = doc.createElement('link');
    var done = false;
    var attr;

    if (options.attributes) {
      for (attr in options.attributes) {
        link.setAttribute(attr, options.attributes[attr]);
      }
    }

    function cleanUp (err) {
      done = true;
      clearTimeout(timeoutHandle);
      link.onload = link.onreadystatechange = link.onerror = null;

      if (typeof callback === 'function') {
        callback(err);
      }
    }

    link.onreadystatechange = link.onload = function () {
      if (done || !isFileReady(link.readyState)) {
        return;
      }

      cleanUp();
    };

    link.onerror = function () {
      if (done) {
        return;
      }

      cleanUp(new Error('Error: could not load ' + url));
    };

    var timeoutHandle = setTimeout(link.onerror, options.timeout);

    // Inject the stylesheet on a later turn of the event loop
    setTimeout(function () {
      // technique to force non-blocking loading from:
      // https://github.com/filamentgroup/loadCSS/blob/master/loadCSS.js#L20
      link.media = 'only x';

      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = url;

      // on next tick, set `media` back
      setTimeout(function () {
        link.media = 'all';
      }, 0);

      var injectionNode = options.injectionNode || getFirstScript().parentNode;

      try {
        injectionNode.appendChild(link);
      }
      catch (error) {
        cleanUp(new Error('Error: could not append LINK element'));
      }
    }, 0);
  }
};


/***/ },
/* 26 */
/*!*****************************************************!*\
  !*** ./~/bv-ui-core/lib/staticAssetLoader/index.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

/**
 * @fileOverview
 * A static asset loader to pull resources at particular versions from a static
 * asset service. This could be as simple as an S3-backed CDN, or a webserver
 * serving from a directory of files. E.g. a server that can respond to requests
 * such as:
 *
 * https://static.example.com/1/asset/jquery@1.11.1.js
 *
 * Importantly, the static asset service must be capable of serving bundles of
 * assets in a single request, where these assets are listed in alphabetical
 * order. E.g.:
 *
 * https://static.example.com/1/asset/backbone@1.2.0+jquery@1.11.1.js
 *
 * This is primarily intended to reduce asset duplication among multiple
 * distinct client applications running on the same page.
 *
 * The returned Javascript must both define the assets themselves and then
 * provide the asset to the static asset client. For example:
 *
 * (function (define) {
 *
 *   // Asset source code goes here.
 *   //
 *   // ...
 *
 *   // Then provide the asset or assets to the client.
 *   define('asset@1.0.0', ['dependency@1.0.0'], asset);
 *
 * }(window[namespace]._staticAssetRegistry.define));
 */

var loader = __webpack_require__(/*! ../loader */ 27);
var namespacer = __webpack_require__(/*! ../namespacer */ 29);

/**
 * Invoke the provided function on each element of the array.
 *
 * @param {Array} arr An array.
 * @param {Function} fn Function to invoke as fn(element, index, array).
 */
function forEach (arr, fn) {
  if (!arr || !arr.length) {
    return;
  }

  for (var index = 0; index < arr.length; index++) {
    fn(arr[index], index, arr);
  }
}

/**
 * Create a new array containing the results of applying the provided function
 * to each element.
 *
 * @param {Array} arr An array.
 * @param {Function} fn Function to invoke as fn(element, index, array).
 * @return {Array} The mapped array.
 */
function map (arr, fn) {
  var mappedArray = [];

  forEach(arr, function (val, index, originalArray) {
    mappedArray.push(fn(val, index, originalArray));
  });

  return mappedArray;
}

module.exports = {
  /**
   * A factory function for static asset loaders.
   *
   * See the documentation for the properties required for the configuration
   * object.
   *
   * @param {Object} config Configuration.
   * @return {Object} A static asset loader instance.
   */
  create: function staticAssetLoaderFactory (config) {
    var generateUrl = config.generateUrl;
    var namespaceName = config.namespaceName;

    if (!namespaceName) {
      throw new Error('Cannot initialize staticAssetLoader without a namespace name.');
    }

    if (typeof generateUrl !== 'function') {
      throw new Error('Cannot initialize staticAssetLoader without a URL generation function.');
    }

    // TODO: think about allowing some of the loader options to be set via the
    // static asset loader config object.
    var loaderOptions = {};
    var NS = namespacer.namespace(namespaceName);
    var registry = NS._staticAssetRegistry = NS._staticAssetRegistry || {
      // Stores defined entities by asset name. E.g.:
      //
      // {
      //   'jquery@1.11.1': jquery,
      //   ...
      // }
      assets: {},
      // Stores requests indexed by included asset, each of which can specify
      // multiple assets. Has the form:
      //
      // {
      //   'jquery@1.11.1': {
      //     assetNames: ['jquery@1.11.1', ...],
      //     callback: function (jQuery, ...),
      //     complete: false
      //   },
      //   ...
      // }
      requests: {},
      // Set below to the _define function, so that loaded asset wrappers can
      // use it to define assets.
      define: undefined
    };

    /**
     * Given a request object, call back with the list of requested assets, in
     * the same order as requested, if all assets are defined and the callback
     * has not already occurred.
     *
     * @param {Object} request
     */
    function callbackIfComplete (request) {
      // Already called back?
      if (request.complete) {
        return;
      }

      var complete = true;
      var assets = map(request.assetNames, function (assetName) {
        var asset = registry.assets[assetName];

        if (!asset) {
          complete = false;
        }

        return asset;
      });

      if (complete) {
        request.complete = true;
        if (typeof request.callback === 'function') {
          request.callback.apply(null, assets);
        }
      }
    }

    /**
     * Define assets. Usage is:
     *
     * _define('x@1.0.0', x);
     *
     * Later calls to _require() for this asset name will yield the defined
     * asset.
     *
     * Any currently pending calls to _require() now satisfied will resolve.
     *
     * @param {String} assetName The name of the asset. E.g. 'jquery@1.11.1'.
     * @param {Mixed} asset The asset.
     */
    function _define (assetName, asset) {
      // Ignore an attempt to redefine an asset. This can cause potentially
      // interesting problems when some references point to instance A and
      // others to instance B.
      if (registry.assets[assetName]) {
        return;
      }

      registry.assets[assetName] = asset;
      forEach(registry.requests[assetName], callbackIfComplete);
    }

    /**
     * Require assets and provide a callback to be invoked when the assets are
     * resolved.
     *
     * @param {String[]} assetNames An array of supported asset names.
     * @param {Function} callback The callback to be called when the assets are
     *   resolved, with the assets as its arguments in the same order as the
     *   provided assets array.
     */
    function _require (assetNames, callback) {
      var request = {
        assetNames: assetNames,
        callback: callback,
        complete: false
      };

      forEach(assetNames, function (assetName) {
        registry.requests[assetName] = registry.requests[assetName] || [];
        registry.requests[assetName].push(request);
      });

      // Are all the dependencies already in place, and so we can skip the
      // loading of assets?
      callbackIfComplete(request);
      if (request.complete) {
        return;
      }

      var assetNamesToBeRequested = [];

      forEach(assetNames, function (assetName) {
        // The asset already exists.
        if (registry.assets[assetName]) {
          return;
        }
        // There is already a pending request for this asset. So don't issue
        // another request, just ensure that a response is delivered to this
        // request when the pending request completes.
        else if (registry.requests[assetName].length > 1) {
          return;
        }
        // There is no pending request; we need to queue it for requesting.
        else {
          assetNamesToBeRequested.push(assetName);
        }
      });

      // If we queued any requests, now we need to make them.
      if (assetNamesToBeRequested.length) {
        loader.loadScript(
          generateUrl(assetNamesToBeRequested, namespaceName),
          loaderOptions,
          function (error) {
            if (error) {
              throw new Error(
                'Failed to load ' + assetNamesToBeRequested.join(', ') + ': ' + error.toString());
            }
          }
        );
      }
    }

    // This is made available for responses from the static asset server to use.
    registry.define = _define;

    // Return the static asset loader interface.
    return {
      require: _require,
      define: _define
    };
  }
};


/***/ },
/* 27 */
/*!******************************************!*\
  !*** ./~/bv-ui-core/lib/loader/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

/* eslint no-use-before-define: 0 */
/**
 * @fileOverview
 * Load JavaScript and CSS at runtime.
 *
 * This module is derived from yepnope.js 2.0.0:
 * Copyright (c) 2014, Alex Sexton
 * Copyright (c) 2014, Ralph Holzmann
 * All rights reserved.
 * New BSD license:
 * https://github.com/SlexAxton/yepnope.js/blob/master/LICENSE.md
 *
 * @module
 */

var global = __webpack_require__(/*! ../global */ 28);
var namespacer = __webpack_require__(/*! ../namespacer */ 29);
var doc = global.document;

var DEFAULT_TIMEOUT = 10000;
var loadedUrls = {};

function getFirstScript () {
  return doc.getElementsByTagName('script')[0];
}

function isFileReady (readyState) {
  // the file is ready if there is no readyState, or if it has reached a
  // terminal state.
  return !readyState ||
    readyState === 'loaded' ||
    readyState === 'complete' ||
    readyState === 'uninitialized';
}

function validateArguments (url, options, callback) {
  if (!url || typeof url !== 'string') {
    throw new Error('`url` must be a string');
  }

  if (options.namespaceName && typeof options.namespaceName !== 'string') {
    throw new Error('`options.namespaceName` must be a string');
  }

  if (options.forceLoad && typeof options.forceLoad !== 'boolean') {
    throw new Error('`options.forceLoad` must be a boolean');
  }

  if (typeof options.timeout !== 'number') {
    throw new Error('`options.timeout` must be a number');
  }

  if (callback && typeof callback !== 'function') {
    throw new Error('`callback` must be a function');
  }
}

module.exports = {
  /**
   * Clears the loaded URLs
   *
   * Clears any URLs that might have been stored in the loadedUrls hash, either
   * locally or in the given namespace(optional). This is needed for testing so
   * we don't need unique URLs for every test, but rather this can be used as a
   * means of cleaning up.
   *
   * @param {string} [namespace] - contains the name of the namespace to clear
   *  the loadedUrls hash in.
   */
  _clearLoadedUrls: function (namespaceName) {
    if (namespaceName) {
      var namespace = namespacer.namespace(namespaceName);
      namespace.loadedUrls = {};
    }
    else {
      loadedUrls = {};
    }
  },

  /**
   * Load a script from a URL
   *
   * The script is loaded on a later turn of the event loop. If a callback is
   * provided, it will be invoked on success in all supported browsers. The
   * callback will execute after the script.
   *
   * In modern IE and other browsers, the callback will be invoked with an error
   * on failure as well. A timeout in milliseconds may be provided as
   * `options.timeout`. If this timeout expires before loading fails or
   * succeeds, the callback will be invoked with an error.
   *
   * @param {string} url - URL of the script
   * @param {object} [options]
   * @param {object} options.attributes - an object containing key/value pairs
   *  to be used as attributes on the created `script` element (optional)
   * @param {number} options.timeout - timeout in milliseconds (defaults to
   *  10000ms)
   * @param {boolean} options.forceLoad - whether to load the script at the
   *  specified url or not regardless of whether an earlier attempt to do so has
   *  already been made
   * @param {string} options.namespaceName - the name of the namespace to check
   *  if the script has been previously loaded and store the loadedUrls hash
   * @param {function} [callback] - node-style callback
   */
  loadScript: function (url, options, callback) {
    var _loadedUrls = loadedUrls;
    var namespace;

    if (typeof options === 'function') {
      callback = options;
      options = null;
    }

    options = options || {};
    options.timeout = options.timeout || DEFAULT_TIMEOUT;

    validateArguments(url, options, callback);

    /**
     * The goal of using the namespacer is to allow multiple apps on the same
     * page to share the properties within the namespace, namely loadedUrls. For
     * this reason, we are forgoing the use of registerProperty to instantiate
     * the list of loaded URLs. This will allow the loader module to be run in
     * different apps but access the same namespace property.
     */

    if (options.namespaceName) {
      namespace = namespacer.namespace(options.namespaceName);
      _loadedUrls = namespace.loadedUrls || {};
    }

    if (!options.forceLoad && _loadedUrls[url]) {
      // File at given url has already been loaded and option has not been set
      // to reload it, so we'll just call the callback and return.
      if (typeof callback === 'function') {
        callback();
      }
      return;
    }

    var script = doc.createElement('script');
    var done = false;
    var attr;

    if (options.attributes) {
      for (attr in options.attributes) {
        script.setAttribute(attr, options.attributes[attr]);
      }
    }

    function cleanUp (err) {
      done = true;
      clearTimeout(timeoutHandle);
      script.onload = script.onreadystatechange = script.onerror = null;
      script.parentNode.removeChild(script);

      if (!err) {
        _loadedUrls[url] = true;

        if (options.namespaceName) {
          namespace.loadedUrls = _loadedUrls;
        }
        else {
          loadedUrls = _loadedUrls;
        }
      }

      if (typeof callback === 'function') {
        callback(err);
      }
    }

    script.onreadystatechange = script.onload = function () {
      if (done || !isFileReady(script.readyState)) {
        return;
      }

      cleanUp();
    };

    script.onerror = function () {
      if (done) {
        return;
      }

      cleanUp(new Error('Error: could not load ' + url));
    };

    // We should be able to catch most errors with onerror, but for browsers
    // that don't support onerror we provide the below timeout cb
    var timeoutHandle = setTimeout(function () {
      if (done) {
        return;
      }

      cleanUp(new Error('Error: script timeout ' + url));
    }, options.timeout);

    // If a script is cached, IE may execute it immediately, which breaks
    // JavaScript's run-to-completion semantics. So, don't try to load the
    // script until a later turn of the event loop.
    //
    // See http://www.guypo.com/ies-premature-execution-problem/
    setTimeout(function () {
      script.src = url;

      var firstScript = getFirstScript();

      firstScript.parentNode.insertBefore(script, firstScript);
    }, 0);
  },

  /**
   * Load a stylesheet from a URL
   *
   * The stylesheet is loaded on a later turn of the event loop. If a callback
   * is provided, it will be invoked on success in all supported browsers.
   *
   * In modern IE and other browsers, the callback will be invoked with an error
   * on failure as well. A timeout in milliseconds may be provided as
   * `options.timeout`. If this timeout expires before loading fails or
   * succeeds, the callback will be invoked with an error.
   *
   * @param {string} url - URL of the stylesheet
   * @param {object} [options]
   * @param {object} options.attributes - an object containing key/value pairs
   *  to be used as attributes on the created `link` element (optional)
   * @param {number} options.timeout - timeout in milliseconds (defaults to
   *  1000ms)
   * @param {boolean} options.forceLoad - whether to load the style sheet at the
   *  specified url or not regardless of whether an earlier attempt to do so has
   *  already been made
   * @param {string} options.namespaceName - the name of the namespace to check
   *  if the stylesheet has been previously loaded and store the loadedUrls hash
   * @param {element} options.injectionNode - node to inject link element
   *  into (defaults to parent node of the first script node)
   * @param {function} [callback] - node-style callback
   */
  loadStyleSheet: function (url, options, callback) {
    var _loadedUrls = loadedUrls;
    var namespace;

    if (typeof options === 'function') {
      callback = options;
      options = null;
    }
    options = options || {};
    options.timeout = options.timeout || DEFAULT_TIMEOUT;

    validateArguments(url, options, callback);

    // This check doesn't happen in `validateArguments` because it's unique
    // to `loadStyleSheet`.
    if (
      'injectionNode' in options &&
      !(options.injectionNode instanceof global.Element)
    ) {
      throw new Error('`options.injectionNode` must be a DOM node');
    }

    /**
     * The goal of using the namespacer is to allow multiple apps on the same
     * page to share the properties within the namespace, namely loadedUrls. For
     * this reason, we are forgoing the use of registerProperty to instantiate
     * the list of loaded URLs. This will allow the loader module to be run in
     * different apps but access the same namespace property.
     */

    if (options.namespaceName) {
      namespace = namespacer.namespace(options.namespaceName);
      _loadedUrls = namespace.loadedUrls || {};
    }

    if (!options.forceLoad && _loadedUrls[url]) {
      // File at given url has already been loaded and option has not been set
      // to reload it, so we'll just call the callback and return.
      if (typeof callback === 'function') {
        callback();
      }
      return;
    }

    var link = doc.createElement('link');
    var done = false;
    var attr;

    if (options.attributes) {
      for (attr in options.attributes) {
        link.setAttribute(attr, options.attributes[attr]);
      }
    }

    function cleanUp (err) {
      done = true;
      clearTimeout(timeoutHandle);
      link.onload = link.onreadystatechange = link.onerror = null;

      if (!err) {
        _loadedUrls[url] = true;

        if (options.namespaceName) {
          namespace.loadedUrls = _loadedUrls;
        }
        else {
          loadedUrls = _loadedUrls;
        }
      }

      if (typeof callback === 'function') {
        callback(err);
      }
    }

    link.onreadystatechange = link.onload = function () {
      if (done || !isFileReady(link.readyState)) {
        return;
      }

      cleanUp();
    };

    link.onerror = function () {
      if (done) {
        return;
      }

      cleanUp(new Error('Error: could not load ' + url));
    };

    var timeoutHandle = setTimeout(link.onerror, options.timeout);

    // Inject the stylesheet on a later turn of the event loop
    setTimeout(function () {
      // technique to force non-blocking loading from:
      // https://github.com/filamentgroup/loadCSS/blob/master/loadCSS.js#L20
      link.media = 'only x';

      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = url;

      // on next tick, set `media` back
      setTimeout(function () {
        link.media = 'all';
      }, 0);

      var injectionNode = options.injectionNode || getFirstScript().parentNode;

      try {
        injectionNode.appendChild(link);
      }
      catch (error) {
        cleanUp(new Error('Error: could not append LINK element'));
      }
    }, 0);
  }
};


/***/ },
/* 28 */
/*!******************************************!*\
  !*** ./~/bv-ui-core/lib/global/index.js ***!
  \******************************************/
/***/ function(module, exports) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 *  @fileOverview Provides a reference to the global object
 *  the below solution works in ES3+ environment and doesn't violates CSP in Chrome apps 
 *  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
 */
'use strict'; /* eslint strict:0 */

var getGlobal = function () {
  if (typeof globalThis !== 'undefined') { return globalThis; }
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

module.exports = getGlobal();
/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 29 */
/*!**********************************************!*\
  !*** ./~/bv-ui-core/lib/namespacer/index.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

/**
 * @fileOverview
 * A namespace generator.
 *
 * @module
 */

var global = __webpack_require__(/*! ../global */ 28);

// --------------------------------------------------------------------------
// Namespace class definition.
// --------------------------------------------------------------------------

/**
 * @class
 * A namespace.
 *
 * @param name The name of this Namespace instance. It should be the same as the
 *   name of the global property to which this namespace is assigned.
 */
function Namespace (name) {
  this.name = name;
}

/**
 * Register a property in the namespace, such as an application instance.
 *
 * Attempting to register the same property twice is almost always an error, and
 * thus results in an exception.
 *
 * @param {String} name The property name.
 * @param {Mixed} value The property value.
 * @return {Namespace} The namespace instance. Useful for chaining.
 */
Namespace.prototype.registerProperty = function (name, value) {
  if (this.hasOwnProperty(name)) {
    throw new Error(
      'Cannot register ' + name +
      ' because a property with that name already exists on window.' +
      this.name
    );
  }

  this[name] = value;
  return this;
};

// --------------------------------------------------------------------------
// Exported interface.
// --------------------------------------------------------------------------

module.exports = {
  /**
   * Obtain a namespace object, creating one if necessary.
   *
   * The namespace will be assigned to the global object as a property
   * with the provided name. i.e. namespacer.namespace('foo') creates or returns
   * a namespace at global[foo].
   *
   * @param {String} name The namespace name.
   * @return {Mixed} The namespace.
   */
  namespace: function (name) {
    // If there is no global property yet assigned for this namespace then
    // create one.
    if (global[name] === undefined) {
      Object.defineProperty(global, name, {
        value: new Namespace(name)
      });
    }
    // If an object already exists for this global property, check to see
    // whether or not it is a Namespace instance or some other form of object.
    else if (typeof global[name] === 'object') {
      // If the existing object is not a Namespace instance, then provide it
      // with the necessary decorations and capabilies of a Namespace instance.
      //
      // Other code may have a reference to the object, so we can't do anything
      // more drastic such as replacing it.
      if (!(global[name] instanceof Namespace)) {
        Namespace.call(global[name], name);
        for (var prop in Namespace.prototype) {
          global[name][prop] = Namespace.prototype[prop];
        }
      }
    }
    // If something other than undefined or an object is assigned to this global
    // property then assume that other code is using it for another purpose, so
    // throw.
    else {
      throw new Error(
        'Namespace ' + name + ' cannot be created.' +
        ' A non-object variable is already assigned to window.' + name
      );
    }

    return global[name];
  }
};


/***/ },
/* 30 */
/*!************************************************!*\
  !*** ./static/dev/scripts/scout/extensions.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @fileOverview the Firebird Extensions API
 *
 * For details, see:
 * https://bits.bazaarvoice.com/confluence/display/DEV/Firebird+Extensions+API
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
  __webpack_require__(/*! scoutfile/lib/browser/evented */ 9),
  __webpack_require__(/*! ./underscore-subset */ 13)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (asEvented, _) {
  var each = _.each;
  var when = _.when;
  var Deferred = _.Deferred;

  /**
   * Rudimentary implementation of Function.bind, necessary because `_.bind` is
   * not yet available.
   */
  function bind (fn, context) {
    var boundArgs = Array.prototype.slice.call(arguments, 2);

    return function () {
      var args = boundArgs.concat( Array.prototype.slice.call(arguments) );
      return fn.apply(context || null, args);
    };
  }

  function publicListen (method, event, callback) {
    this[method](event, callback);

    return {
      off : bind(this.off, this, event, callback)
    };
  }

  function PrivateHandle (name, config) {
    var handle = this.publicHandle = { name : name };

    this.config = config;

    each(['on', 'one', 'once'], function (method) {
      handle[method] = bind(publicListen, this, method);
    }, this);

    this.trigger = trigger;
  }
  asEvented.call(PrivateHandle.prototype);

  var slice = Array.prototype.slice;
  var rejectedPromise = ( new Deferred() ).reject().promise();

  /**
   * Implementation of `deferDefault` method available to extension listeners.
   * See `trigger` for specifics.
   */
  function deferDefault (promises) {
    var deferred = new Deferred();
    promises.push( deferred.promise() );

    return {
      allowDefault : function () {
        deferred.resolve();
      },
      preventDefault : function () {
        deferred.reject();
      }
    };
  }

  /**
   * Trigger an event on an extension
   *
   * Listeners will be called with a context that implements two methods -
   * `deferDefault` and `preventDefault` - which allow listeners to ask the
   * extension to defer or not perform the default action for the event,
   * respectively.
   *
   * The return value is a promise of any requests to prevent or defer the
   * default action via `deferDefault` or `preventDefault`. The promise will
   * resolve if no requests were made, or if all requesters indicate that the
   * default action should occur. If any requester indicates that the default
   * action should not occur, the returned promise rejects.
   *
   * @param {string} event - the event to trigger
   * @param {...*} [args] - arguments to pass to listeners
   *
   * @return {Promise} a promise of all requests to prevent or defer the default
   *                   behavior
   */
  function trigger (event) {
    var promises = [];

    // `asEvented.trigger` calls listeners in the context of the triggering
    // object, so attach methods for requesting different handling of the
    // default action to the private handle for the duration of the call to
    // `trigger`.

    /**
     * Ask the triggering extension to defer the default action
     *
     * Call `allowDefault` on the returned handle to ask the extension to
     * perform the default action. Call `preventDefault` on it to ask the
     * extension not to perform the default action. Note that the extension has
     * ultimate discretion on the matter and may ignore any and all requests.
     *
     * @returns {{ allowDefault: function, preventDefault: function }}
     *          A handle that allows the listener to request that the extension
     *          perform or not perform the default action
     */
    this.deferDefault = bind(deferDefault, null, promises);

    /**
     * Ask the triggering extension not to perform the default action. Note that
     * the extension has ultimate discretion on the matter and may ignore any
     * and all requests.
     */
    this.preventDefault = function () {
      promises.push(rejectedPromise);
    };

    this.constructor.prototype.trigger.apply(this, arguments);

    // Remove default action methods from the private handle
    this.deferDefault = null;
    this.preventDefault = null;

    return when(promises);
  }

  var extensions = {};
  asEvented.call(extensions);

  // Do not export emit or trigger.
  var extensionsEmit = bind(extensions.emit, extensions);
  delete extensions.emit;
  delete extensions.trigger;

  var registry = {};
  /**
   * Register a Firebird extension
   *
   * Given a `name` and `config`, register the named extension with the provided
   * config. If an extension of that name already exists, throw.
   *
   * @param {string} name - the name of the extension to register
   * @param {Object} [config] - extension configuration
   *
   * @return {PrivateHandle} the private handle to the registered extension
   */
  extensions.register = function registerExtension (name, config) {
    if (!name) {
      // throw new Error('You must provide a name for your extension');
      return;
    }

    if (name in registry) {
      // throw new Error('An extension named "' + name + '" already exists');
      return;
    }

    var handle = registry[name] = new PrivateHandle(name, config);

    // emit the event on a later event loop turn so that handlers that throw
    // don't prevent us from returning the private handler
    setTimeout(bind(function () {
      extensionsEmit('register', handle.publicHandle);
    }, this), 0);

    return handle;
  };

  /**
   * Get a Firebird extension
   *
   * Returns the public handle of the named extension, or null if no such
   * extension exists.
   *
   * @param {string} name - the name of the extension to get
   *
   * @return {PublicHandle} the public handle to the named extension
   */
  extensions.get = function getExtension (name) {
    return registry[name] ? registry[name].publicHandle : null;
  };

  return extensions;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 31 */
/*!************************************************************!*\
  !*** ./static/dev/scripts/scout/register-bv-extensions.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * This file registers $BV.ui and $BV.configure methods as
 * extensions with the Firebird extensions API, allowing other
 * code to listen to these methods and react to them.
 *
 * The extensions registry is used in the apisetup portion of the
 * scout file to:
 *
 * - decide whether a UI action requires a preload, as indicated
 *   by the preload property that's passed when the extension is
 *   registered
 * - announce that a $BV.ui or $BV.configure call has been made,
 *   as this can happen prior to the loading of bv-primary
 *
 * The extensions registry is also used in bv-primary -- specifically
 * in clientapi.js -- to announce additional lifecycle events that
 * occur during $BV.ui and $BV.configure calls.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
  __webpack_require__(/*! ./underscore-subset */ 13),
  __webpack_require__(/*! scoutfile/lib/browser/evented */ 9)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, asEvented) {
  return function (FB) {
    var Deferred = _.Deferred;
    var extensionsRegistry = {};
    var each = _.each;

    var augmentedNamespaces = {
      data : function (handle) {
        var history = handle.history = {};
        var publicHandle = handle.publicHandle;

        handle.sendData = function (data) {
          var contentType = data.contentType;

          if (!contentType) {
            return;
          }

          history[contentType] = data;
          handle.trigger('data.' + contentType);
        };

        handle.getLast = publicHandle.getLast = function (contentType) {
          return get(contentType);
        };

        handle.getNext = publicHandle.getNext = function (contentType) {
          return get(contentType, true);
        };

        // Individual handles can override the sanitize
        // method to specify how their data should be manipulated
        // prior to providing it to consumers. For example,
        // a handle might want to clone its data so that consumers
        // can't modify the original data. The actions defined by
        // sanitize will occur every time data is provided to a
        // consumer.
        handle.sanitize = function (data) {
          return data;
        };

        function get (contentType, next) {
          var dfd = Deferred();

          if (!next && history[contentType]) {
            dfd.resolve( handle.sanitize(history[contentType]) );
          }
          else {
            handle.once('data.' + contentType, function () {
              dfd.resolve( handle.sanitize(history[contentType]) );
            });
          }

          return dfd.promise();
        }

        return handle;
      },

      ui : function (handle) {
        handle = withEventHistory(handle);

        handle.publicHandle.init = function (clientAPIConfig) {
          handle.trigger('call', clientAPIConfig);
        };

        return handle;
      },

      configure : withEventHistory
    };

    function withEventHistory (handle) {
      var events = handle._events = {};
      var publicHandle = handle.publicHandle;

      each([ 'call', 'invoke', 'complete' ], function (evt) {
        events[evt] = [];
        handle.on(evt, function (e) {
          events[evt].push(e);
        });
      });

      // add a getEvents method to our public handle,
      // providing a way to see -- but not alter -- the
      // information about when this extension has been
      // called/invoked/completed
      handle.getEvents = publicHandle.getEvents = function (evt) {
        var ret = events[evt];

        // return a copy of the events array, or an empty array
        return ret ? ret.slice() : [];
      };

      return handle;
    }

    // Creates BV.extensions.ui, BV.extensions.configure, BV.extensions.data
    each(['ui', 'configure', 'data'], function (ns) {
      var extensions = [];

      FB[ns] = {
        register : function (method, config) {
          // extensions get registered with a namespace prefix
          var handle = FB.register(ns + '.' + method, config || {});
          var publicHandle = handle.publicHandle;

          if (augmentedNamespaces[ns]) {
            handle = augmentedNamespaces[ns](handle);
          }

          // Trigger the register event, but do it in a try/catch
          // so we are guaranteed our private handle gets returned;
          try {
            FB[ns].trigger('register', publicHandle);
          }
          catch (e) {
            $BV.log('Failed to register extension in ' + ns);
          }

          extensions.push(method);

          // return the private handle provided by FB.register
          return handle;
        },

        get : function (method) {
          return FB.get(ns + '.' + method);
        },

        getAll : function () {
          return extensions;
        }
      };

      asEvented.call(FB[ns]);
    });

    // Supported arguments to $BV.ui, by scope. The value for
    // each method is an indication of whether data should be
    // preloaded for the method (1 == yes).
    var actions = {
      global : {},
      rr : {
        show_reviews : 1,
        show_category_gallery : 0,
        submit_review : 0,
        submit_comment : 0,
        submit_generic : 0,
        inline_ratings : 0
      },
      qa : {
        show_questions : 1,
        show_summary : 0,
        submit_question : 0,
        submit_answer : 0
      },
      cp : {
        show_profile : 0
      }
    };

    // Register the $BV.configure and $BV.ui methods that are supported
    // for integration with extensions.
    each(actions, function (methods, scope) {
      extensionsRegistry['configure.' + scope] = FB.configure.register(scope);

      each(methods, function (val, method) {
        var uiAction = scope + '_' + method;
        extensionsRegistry['ui.' + uiAction] = FB.ui.register(uiAction, { preload : val });
      });
    });

    extensionsRegistry['data.bvapi'] = FB.data.register('bvapi');

    return extensionsRegistry;
  };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 32 */
/*!*********************************************!*\
  !*** ./static/dev/scripts/scout/preload.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @fileOverview Provides the `BV._internal.preload` method, which makes an API
 * request for a product ID via the configured prefetch URL in scout.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
  __webpack_require__(/*! ./underscore-subset */ 13),
  __webpack_require__(/*! scoutfile/lib/browser/ie */ 11),
  __webpack_require__(/*! scoutfile/lib/browser/loader */ 24)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, ie, loader) {
  return function (BV) {
    var BVInternal = BV._internal;
    var firstPreloadResolver;

    return function (pid) {
      var opts = BV.options;
      var each = _.each;
      var protocol = BVInternal.protocol;

      each(opts.prefetchConfigs, function (prefetchConfig, i) {
        var preloadURL = protocol + prefetchConfig.url.replace(/___PRODUCTIDTOKEN___/g, pid);

        // Replace the API base URL if an override has been set
        if (BVInternal.apiOverrideURL) {
          preloadURL = preloadURL.replace(BVInternal.originalApiHosts[opts.displaycode || 'default'], opts.apiconfig.baseUrl);
        }

        // IE8 can't handle long URLs. If this URL is too long for IE8,
        // then IE8 will have to wait to get its data until the full
        // application is loaded.
        if (ie && ie < 9 && preloadURL.length > 2000) {
          return;
        }

        var resolver = 'dataHandler' + i;
        var dfd = _.Deferred();
        var src = preloadURL + '&callback=BV._internal.' + resolver;
        prefetchConfig.promise = dfd.promise();

        var originalResolve = dfd.resolve;
        dfd.resolver = resolver;

        dfd.resolve = function () {
          if (resolver === firstPreloadResolver) {
            BV.performance.mark('bv-preload-end');
          }

          BV.performance.mark(dfd.resolver + '-start');
          originalResolve.apply(dfd, Array.prototype.slice.call(arguments));
          BV.performance.mark(dfd.resolver + '-end');
        };

        opts.page.reInject = true;
        BVInternal[resolver] = dfd.resolve;

        if (!firstPreloadResolver) {
          BV.performance.mark('bv-preload-start');
          firstPreloadResolver = resolver;
        }

        loader.loadScript(src);
      });
    };
  };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 33 */
/*!***********************************************!*\
  !*** ./static/dev/scripts/scout/api-setup.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @fileOverview Provide the public Bazaarvoice API exported by Firebird.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
  __webpack_require__(/*! scoutfile/lib/browser/global */ 6)
], __WEBPACK_AMD_DEFINE_RESULT__ = function (global) {
  var console = global.console;

  return function (BV, $BV) {
    var BVInternal = BV._internal;

    // Setup initial $BV object to accept API calls and queue them up.
    return (function () {
      // TODO: maybe make this do more sanity checks on $BV.
      var existingQueue = ($BV && $BV._apiQueue) || $BV || [];
      // If the `_bvjsAppsScoutfile` property is defined, it means that the
      // bvjs-apps scoutfile is already on the page. We want to retain
      // anything defined under this namespace so that we can communicate
      // with the other apps that live on this page.
      var bvjsAppsScoutfile = $BV && $BV._bvjsAppsScoutfile;
      var extensionsRegistry = BVInternal.extensionsRegistry;
      var i;
      var publicAPI;
      var publicFns;

      // initialize the timing object for storing $BV.ui timing data
      BVInternal.timing = { ui: {} };

      publicAPI = {
        // If the _apiQueue exists, we shouldn't overwrite it.
        _apiQueue: [],
        log: function () {
          if (console && console.log) {
            console.log(arguments);
          }
        },

        push: function (apiCall) {
          var config;
          var action;
          var method = apiCall[0];
          var scope = apiCall[1];
          var extHandle;
          var uiCall;
          // If this is a ui or configure call and we have a productId defined,
          // trigger prefetching the initial batch request. Note: this only happens
          // if the ui/configure call happens before the full app has loaded.
          if (method === 'ui' || method === 'configure') {
            config = (method === 'ui') ? apiCall[3] : apiCall[2];
            action = (method === 'ui') ? apiCall[2] : null;

            if (config && BV._internal.preload && config.productId) {
              // only preload certain ui actions as defined above
              if ( shouldPreload(method, scope, action) ) {
                BVInternal.preload(config.productId);
                // only do this once
                BVInternal.preload = null;
              }
            }

            extHandle = getExtension(method, scope, action);
          }

          // Take note of when UI calls were first observed; we'll use this later in
          // clientapi to send timing data to magpie.
          if (method === 'ui') {
            uiCall = (scope + '_' + action).toLowerCase();
            BV.performance.mark(uiCall + '-call');
            BVInternal.timing = BVInternal.timing || { ui: {} };
            BVInternal.timing.ui[uiCall] = {
              init: new Date().getTime(),
              config: config
            };
          }

          publicAPI._apiQueue.push(apiCall);

          if (extHandle) {
            extHandle.trigger('call', { config: config });
          }
        }
      };

      // If the bvjs-apps scoutfile was on the page, this is our only way to
      // talk to it.
      if (bvjsAppsScoutfile) {
        publicAPI._bvjsAppsScoutfile = bvjsAppsScoutfile;
      }

      // Loop through any API calls that client may have pushed onto the queue
      // and queue them onto our own special one.
      for (i = 0; i < existingQueue.length; i++) {
        publicAPI.push(existingQueue[i]);
      }

      // These are the functions that are exposed in $BV.
      publicFns = [
        'ui', 'configure', 'container', 'ready',
        'SI.trackProductPageView', 'SI.trackGenericPageView', 'SI.trackTransactionPageView',
        'SI.disable', 'SI.enable', 'SI.setDebugEnabled', 'SI.trackConversion',
        'DSI.trackBVPageView', 'DSI.trackProduct', 'DSI.trackTransaction'
      ];

      // Populate publicAPI with functions defined in publicFns. These
      // functions just queue themselves up for now so that we can execute
      // them after we've loaded the app.
      //
      // TODO: use _.each here instead.
      for (i = publicFns.length - 1; i >= 0; --i) {
        (function (api, path, prefix) {
          var split = path.split('.');
          var name = split.pop();
          while ( prefix = split.shift() ) {
            api = api[prefix] = api[prefix] || {};
          }
          api[name] = (function (internalName) {
            return function () {
              var config;
              var apiCall = [internalName].concat( Array.prototype.slice.call( arguments ) );
              if (internalName === 'ui') {
                config = apiCall[3] = apiCall[3] || {};
                config.loadedDeferred = config.loadedDeferred || BVInternal._.Deferred();
                publicAPI.push(apiCall);
                return config.loadedDeferred.promise();
              }
              return publicAPI.push(apiCall);
            };
          })( path.replace(/\./g, '_') );

        })(publicAPI, publicFns[i]);
      }

      function shouldPreload (method, scope, action) {
        var ext;
        if (!action) {
          return true;
        }

        ext = getExtension(method, scope, action);
        return !!(ext && ext.config && ext.config.preload);
      }

      function getExtension (method, scope, action) {
        return extensionsRegistry && extensionsRegistry[method + '.' + scope + (action ? '_' + action : '')];
      }

      return publicAPI;
    })();
  };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 34 */
/*!*******************************************************!*\
  !*** ./static/dev/scripts/scout/shopper-marketing.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global ENABLE_COOKIE_MATCHING */
/**
 * This module prepares the event queue that is later used by the user matching
 * sdk. There are two environments, staging and production, that determine the
 * path to the file. There is also a flag that we set based on the client's
 * configuration that determines whether to load the cookie-match or default.
 *
 * For clarity, when a client has cookie matching enabled, a `setUser` call will
 * result in emission of events to third party cookie matching vendors with the
 * BVID. If cookie matching is not enabled, setUser will send the personalization
 * event, but not send any events to the vendors.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
  __webpack_require__(/*! scoutfile/lib/browser/global */ 6),
  __webpack_require__(/*! scoutfile/lib/browser/loader */ 24)
], __WEBPACK_AMD_DEFINE_RESULT__ = function shopperMarketing (global, loader) {

  var userMatchUrlHost;
  var userMatchUrlPath;

  // Prepare $BV for cookie matching. We have to define this so that the sdk
  // knows how to process events off Internal._bvScoutEventQueue
  global.$BV.Internal = global.$BV.Internal || {};
  global.$BV.Internal._bvScoutEventQueue = [];

  // Load the environment specific cookie matching scout.
  if (BV.options.environment !== 'production') {
    userMatchUrlHost = 'https://apps-stg.nexus.bazaarvoice.com/firebird';
  }
  else {
    userMatchUrlHost = 'https://apps.nexus.bazaarvoice.com/firebird';
  }

  if (false) {
    userMatchUrlPath = 'cookie-match';

    if (BV.options.piiDataRegion === 'europe') {
      userMatchUrlPath = 'cookie-match-eu';
    }
  }
  else {
    userMatchUrlPath = 'default';
  }

  loader.loadScript(userMatchUrlHost + '/' + userMatchUrlPath + '/bv.js',
    function shopperMarketingLoadScriptCallback (err) {
      if (err) {
        global.$BV.log('Error loading shopper-profile-sdk.');
      }
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 35 */
/*!********************************************************!*\
  !*** ./static/dev/scripts/scout/performance.record.js ***!
  \********************************************************/
/***/ function(module, exports) {

/* global performance: false, console: false */

/**
 *  @fileOverview A performance runner that reports performance mark data to
 *  a Gist. Useful for measuring performance across a number of devices.
 */

//
// For instructions, see docs/performance.md.
//
(function () {
  function record () {
    var $ = window.BV.require('jquery');
    var _ = window.BV.require('underscore');
    var parsedUri = window.BV.require('util/parseuri')(location.href);

    function toQueryString (hash) {
      var query = [];

      _.each(hash, function (val, key) {
        query.push( encodeURIComponent(key) + '=' + encodeURIComponent(val) );
      });

      return query.join('&');
    }

    // if no num-perf-trials attr or it is 0, return
    var perfRunnerNumTrials = parseInt(parsedUri.queryKey.perfRunnerNumTrials, 10);
    if (perfRunnerNumTrials !== perfRunnerNumTrials || perfRunnerNumTrials < 1) {
      // NaN or <= 0
      return;
    }

    var token = parsedUri.queryKey.perfRunnerGistToken;
    if (!token) {
      console.error('You must provide a Github Personal Token with the gist ' +
        'scope. See https://github.com/blog/1509-personal-api-tokens'
      );
      return;
    }

    var beforeSend = function (xhr) {
      xhr.setRequestHeader(
        'Authorization',
        'Basic ' + btoa(token + ':' + 'x-oauth-basic')
      );
    };
    var perfRunnerGistId = parsedUri.queryKey.perfRunnerGistId;
    var p;
    if (perfRunnerGistId) {
      // get the gist
      p = $.ajax({
        type : 'GET',
        url :
          'https://api.github.com/gists/' + perfRunnerGistId + '?' + Date.now(),
        beforeSend : beforeSend
      });
    }
    else {
      // no gist id, create one
      p = $.ajax({
        type : 'POST',
        url : 'https://api.github.com/gists',
        data : JSON.stringify({
          description : 'Performance report on ' +
            (new Date()).toUTCString() +
            ' for user agent ' + window.navigator.userAgent,
          'public' : false,
          files : {
            'results.json' : {
              content : '[]'
            }
          }
        }),
        contentType : 'application/json; charset=utf-8',
        dataType : 'json',
        beforeSend : beforeSend
      });
    }

    p.done(function (gist) {
      console.log('gist @', gist.html_url);
      // grab data handler measurements
      var resolverRootName = 'dataHandler';
      var i = 0;
      var performance = window.BV.performance;
      var marks, resolverName;

      do {
        resolverName = resolverRootName + i;
        marks = performance.getEntriesByName(resolverName + '-start').
          concat(performance.getEntriesByName(resolverName + '-end'));

        if (marks.length > 0) {
          performance.measure(
            resolverName + '-ready', 'scoutStart', resolverName + '-start'
          );
          performance.measure(
            resolverName + '-run',
            resolverName + '-start',
            resolverName + '-end'
          );
        }
        i++;
      }
      while (marks.length > 0);
      // now that we have it, add the latest trial
      var results = JSON.parse(gist.files['results.json'].content);
      results.push(_.filter(performance.getEntries(),
        function (entry) {
          return entry.entryType !== 'resource' ||
            entry.name.indexOf('bazaarvoice.js') >= 0 ||
            entry.name.indexOf('bv-primary.js') >= 0 ||
            entry.name.indexOf('bv-vendor.js') >= 0 ||
            entry.name.indexOf('secondary.js') >= 0 ||
            entry.name.indexOf('screen.css') >= 0;
        }));
      gist.files['results.json'] = {
        content : JSON.stringify(results)
      };

      // ...and patch the gist
      $.ajax({
        type : 'PATCH',
        url : 'https://api.github.com/gists/' + gist.id,
        data : JSON.stringify({
          files : gist.files
        }, null, 2),
        contentType : 'application/json; charset=utf-8',
        dataType : 'json',
        beforeSend : beforeSend
      }).done(function (gist) {
        perfRunnerNumTrials--;

        console.log(results);

        if (perfRunnerNumTrials > 0) {
          parsedUri.queryKey.perfRunnerNumTrials = perfRunnerNumTrials;
          parsedUri.queryKey.perfRunnerGistId = gist.id;

          setTimeout(function () {
            location.search = '?' + toQueryString(parsedUri.queryKey);
          }, 2000);
        }
      });
    });
  }

  function waitForRender () {
    var measures;

    if (window.BV && window.BV.performance && window.BV.performance.getEntriesByType) {
      measures = window.BV.performance.getEntriesByType('measure');

      for (var i = 0; i < measures.length; i++) {
        if (measures[i].name === 'reviewContentList1-render') {
          setTimeout(record, 1000);
          return;
        }
      }
    }

    setTimeout(waitForRender, 100);
  }
  waitForRender();
}());


/***/ }
/******/ ]);
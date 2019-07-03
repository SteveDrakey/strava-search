/**
 * Strava API v3
 * Strava API
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ExplorerSegment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExplorerSegment'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.ExplorerResponse = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.ExplorerSegment);
  }
}(this, function(ApiClient, ExplorerSegment) {
  'use strict';




  /**
   * The ExplorerResponse model module.
   * @module model/ExplorerResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ExplorerResponse</code>.
   * @alias module:model/ExplorerResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ExplorerResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExplorerResponse} obj Optional instance to populate.
   * @return {module:model/ExplorerResponse} The populated <code>ExplorerResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('segments')) {
        obj['segments'] = ApiClient.convertToType(data['segments'], [ExplorerSegment]);
      }
    }
    return obj;
  }

  /**
   * The set of segments matching an explorer request
   * @member {Array.<module:model/ExplorerSegment>} segments
   */
  exports.prototype['segments'] = undefined;



  return exports;
}));



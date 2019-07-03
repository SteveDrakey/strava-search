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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.Split = factory(root.StravaApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Split model module.
   * @module model/Split
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Split</code>.
   * @alias module:model/Split
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Split</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Split} obj Optional instance to populate.
   * @return {module:model/Split} The populated <code>Split</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('average_speed')) {
        obj['average_speed'] = ApiClient.convertToType(data['average_speed'], 'Number');
      }
      if (data.hasOwnProperty('distance')) {
        obj['distance'] = ApiClient.convertToType(data['distance'], 'Number');
      }
      if (data.hasOwnProperty('elapsed_time')) {
        obj['elapsed_time'] = ApiClient.convertToType(data['elapsed_time'], 'Number');
      }
      if (data.hasOwnProperty('elevation_difference')) {
        obj['elevation_difference'] = ApiClient.convertToType(data['elevation_difference'], 'Number');
      }
      if (data.hasOwnProperty('pace_zone')) {
        obj['pace_zone'] = ApiClient.convertToType(data['pace_zone'], 'Number');
      }
      if (data.hasOwnProperty('moving_time')) {
        obj['moving_time'] = ApiClient.convertToType(data['moving_time'], 'Number');
      }
      if (data.hasOwnProperty('split')) {
        obj['split'] = ApiClient.convertToType(data['split'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The average speed of this split, in meters per second
   * @member {Number} average_speed
   */
  exports.prototype['average_speed'] = undefined;
  /**
   * The distance of this split, in meters
   * @member {Number} distance
   */
  exports.prototype['distance'] = undefined;
  /**
   * The elapsed time of this split, in seconds
   * @member {Number} elapsed_time
   */
  exports.prototype['elapsed_time'] = undefined;
  /**
   * The elevation difference of this split, in meters
   * @member {Number} elevation_difference
   */
  exports.prototype['elevation_difference'] = undefined;
  /**
   * The pacing zone of this split
   * @member {Number} pace_zone
   */
  exports.prototype['pace_zone'] = undefined;
  /**
   * The moving time of this split, in seconds
   * @member {Number} moving_time
   */
  exports.prototype['moving_time'] = undefined;
  /**
   * N/A
   * @member {Number} split
   */
  exports.prototype['split'] = undefined;



  return exports;
}));



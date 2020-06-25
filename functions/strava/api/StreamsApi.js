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
    define(['ApiClient', 'model/Fault', 'model/StreamSet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Fault'), require('../model/StreamSet'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.StreamsApi = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.Fault, root.StravaApiV3.StreamSet);
  }
}(this, function(ApiClient, Fault, StreamSet) {
  'use strict';

  /**
   * Streams service.
   * @module api/StreamsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new StreamsApi. 
   * @alias module:api/StreamsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getActivityStreams operation.
     * @callback module:api/StreamsApi~getActivityStreamsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StreamSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Activity Streams
     * Returns the given activity&#39;s streams. Requires activity:read scope. Requires activity:read_all scope for Only Me activities.
     * @param {Number} id The identifier of the activity.
     * @param {Array.<module:model/String>} keys Desired stream types.
     * @param {Boolean} keyByType Must be true.
     * @param {module:api/StreamsApi~getActivityStreamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StreamSet}
     */
    this.getActivityStreams = function(id, keys, keyByType, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getActivityStreams");
      }

      // verify the required parameter 'keys' is set
      if (keys === undefined || keys === null) {
        throw new Error("Missing the required parameter 'keys' when calling getActivityStreams");
      }

      // verify the required parameter 'keyByType' is set
      if (keyByType === undefined || keyByType === null) {
        throw new Error("Missing the required parameter 'keyByType' when calling getActivityStreams");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'key_by_type': keyByType,
      };
      var collectionQueryParams = {
        'keys': {
          value: keys,
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['strava_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = StreamSet;

      return this.apiClient.callApi(
        '/activities/{id}/streams', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRouteStreams operation.
     * @callback module:api/StreamsApi~getRouteStreamsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StreamSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Route Streams
     * Returns the given route&#39;s streams. Requires read_all scope for private routes.
     * @param {Number} id The identifier of the route.
     * @param {module:api/StreamsApi~getRouteStreamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StreamSet}
     */
    this.getRouteStreams = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRouteStreams");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['strava_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = StreamSet;

      return this.apiClient.callApi(
        '/routes/{id}/streams', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSegmentEffortStreams operation.
     * @callback module:api/StreamsApi~getSegmentEffortStreamsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StreamSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Segment Effort Streams
     * Returns a set of streams for a segment effort completed by the authenticated athlete. Requires read_all scope.
     * @param {Number} id The identifier of the segment effort.
     * @param {Array.<module:model/String>} keys The types of streams to return.
     * @param {Boolean} keyByType Must be true.
     * @param {module:api/StreamsApi~getSegmentEffortStreamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StreamSet}
     */
    this.getSegmentEffortStreams = function(id, keys, keyByType, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSegmentEffortStreams");
      }

      // verify the required parameter 'keys' is set
      if (keys === undefined || keys === null) {
        throw new Error("Missing the required parameter 'keys' when calling getSegmentEffortStreams");
      }

      // verify the required parameter 'keyByType' is set
      if (keyByType === undefined || keyByType === null) {
        throw new Error("Missing the required parameter 'keyByType' when calling getSegmentEffortStreams");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'key_by_type': keyByType,
      };
      var collectionQueryParams = {
        'keys': {
          value: keys,
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['strava_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = StreamSet;

      return this.apiClient.callApi(
        '/segment_efforts/{id}/streams', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSegmentStreams operation.
     * @callback module:api/StreamsApi~getSegmentStreamsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StreamSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Segment Streams
     * Returns the given segment&#39;s streams. Requires read_all scope for private segments.
     * @param {Number} id The identifier of the segment.
     * @param {Array.<module:model/String>} keys The types of streams to return.
     * @param {Boolean} keyByType Must be true.
     * @param {module:api/StreamsApi~getSegmentStreamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StreamSet}
     */
    this.getSegmentStreams = function(id, keys, keyByType, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSegmentStreams");
      }

      // verify the required parameter 'keys' is set
      if (keys === undefined || keys === null) {
        throw new Error("Missing the required parameter 'keys' when calling getSegmentStreams");
      }

      // verify the required parameter 'keyByType' is set
      if (keyByType === undefined || keyByType === null) {
        throw new Error("Missing the required parameter 'keyByType' when calling getSegmentStreams");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'key_by_type': keyByType,
      };
      var collectionQueryParams = {
        'keys': {
          value: keys,
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['strava_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = StreamSet;

      return this.apiClient.callApi(
        '/segments/{id}/streams', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

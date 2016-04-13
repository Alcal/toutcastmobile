(function(window, angular, undefined) {'use strict';

var urlBase = "https://toutcastservices.herokuapp.com/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Tout
 * @header lbServices.Tout
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Tout` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Tout",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Touts/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Tout.locale() instead.
        "prototype$__get__locale": {
          url: urlBase + "/Touts/:id/locale",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tout#create
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Touts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tout#createMany
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Touts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tout#upsert
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Touts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tout#exists
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Touts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tout#findById
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Touts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tout#find
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Touts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tout#findOne
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Touts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tout#updateAll
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Touts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tout#deleteById
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Touts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tout#count
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Touts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tout#prototype$updateAttributes
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Touts/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tout#nearby
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `loc` – `{GeoPoint}` - 
         *
         *  - `rad` – `{Number=}` - 
         *
         *  - `cap` – `{Number=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `touts` – `{undefined=}` - 
         */
        "nearby": {
          url: urlBase + "/Touts/nearby",
          method: "GET"
        },

        // INTERNAL. Use Locale.touts.findById() instead.
        "::findById::Locale::touts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Locales/:id/touts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Locale.touts.destroyById() instead.
        "::destroyById::Locale::touts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Locales/:id/touts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Locale.touts.updateById() instead.
        "::updateById::Locale::touts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Locales/:id/touts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Locale.touts() instead.
        "::get::Locale::touts": {
          isArray: true,
          url: urlBase + "/Locales/:id/touts",
          method: "GET"
        },

        // INTERNAL. Use Locale.touts.create() instead.
        "::create::Locale::touts": {
          url: urlBase + "/Locales/:id/touts",
          method: "POST"
        },

        // INTERNAL. Use Locale.touts.createMany() instead.
        "::createMany::Locale::touts": {
          isArray: true,
          url: urlBase + "/Locales/:id/touts",
          method: "POST"
        },

        // INTERNAL. Use Locale.touts.destroyAll() instead.
        "::delete::Locale::touts": {
          url: urlBase + "/Locales/:id/touts",
          method: "DELETE"
        },

        // INTERNAL. Use Locale.touts.count() instead.
        "::count::Locale::touts": {
          url: urlBase + "/Locales/:id/touts/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Tout#updateOrCreate
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Tout#update
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Tout#destroyById
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Tout#removeById
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Tout#modelName
    * @propertyOf lbServices.Tout
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Tout`.
    */
    R.modelName = "Tout";


        /**
         * @ngdoc method
         * @name lbServices.Tout#locale
         * @methodOf lbServices.Tout
         *
         * @description
         *
         * Fetches belongsTo relation locale.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        R.locale = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::get::Tout::locale"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.BusinessCategory
 * @header lbServices.BusinessCategory
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `BusinessCategory` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "BusinessCategory",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/BusinessCategories/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.BusinessCategory#create
         * @methodOf lbServices.BusinessCategory
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/BusinessCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessCategory#createMany
         * @methodOf lbServices.BusinessCategory
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/BusinessCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessCategory#upsert
         * @methodOf lbServices.BusinessCategory
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/BusinessCategories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessCategory#exists
         * @methodOf lbServices.BusinessCategory
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/BusinessCategories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessCategory#findById
         * @methodOf lbServices.BusinessCategory
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/BusinessCategories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessCategory#find
         * @methodOf lbServices.BusinessCategory
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/BusinessCategories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessCategory#findOne
         * @methodOf lbServices.BusinessCategory
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/BusinessCategories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessCategory#updateAll
         * @methodOf lbServices.BusinessCategory
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/BusinessCategories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessCategory#deleteById
         * @methodOf lbServices.BusinessCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/BusinessCategories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessCategory#count
         * @methodOf lbServices.BusinessCategory
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/BusinessCategories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BusinessCategory#prototype$updateAttributes
         * @methodOf lbServices.BusinessCategory
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/BusinessCategories/:id",
          method: "PUT"
        },

        // INTERNAL. Use Commerce.businessCategories() instead.
        "::get::Commerce::businessCategories": {
          url: urlBase + "/Commerces/:id/businessCategories",
          method: "GET"
        },

        // INTERNAL. Use Commerce.businessCategories.create() instead.
        "::create::Commerce::businessCategories": {
          url: urlBase + "/Commerces/:id/businessCategories",
          method: "POST"
        },

        // INTERNAL. Use Commerce.businessCategories.createMany() instead.
        "::createMany::Commerce::businessCategories": {
          isArray: true,
          url: urlBase + "/Commerces/:id/businessCategories",
          method: "POST"
        },

        // INTERNAL. Use Commerce.businessCategories.update() instead.
        "::update::Commerce::businessCategories": {
          url: urlBase + "/Commerces/:id/businessCategories",
          method: "PUT"
        },

        // INTERNAL. Use Commerce.businessCategories.destroy() instead.
        "::destroy::Commerce::businessCategories": {
          url: urlBase + "/Commerces/:id/businessCategories",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.BusinessCategory#updateOrCreate
         * @methodOf lbServices.BusinessCategory
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.BusinessCategory#update
         * @methodOf lbServices.BusinessCategory
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.BusinessCategory#destroyById
         * @methodOf lbServices.BusinessCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.BusinessCategory#removeById
         * @methodOf lbServices.BusinessCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.BusinessCategory#modelName
    * @propertyOf lbServices.BusinessCategory
    * @description
    * The name of the model represented by this $resource,
    * i.e. `BusinessCategory`.
    */
    R.modelName = "BusinessCategory";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ToutUser
 * @header lbServices.ToutUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ToutUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ToutUser",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ToutsUsers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#prototype$__findById__accessTokens
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ToutsUsers/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#prototype$__destroyById__accessTokens
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ToutsUsers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#prototype$__updateById__accessTokens
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ToutsUsers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ToutUser.commerces() instead.
        "prototype$__get__commerces": {
          url: urlBase + "/ToutsUsers/:id/commerces",
          method: "GET"
        },

        // INTERNAL. Use ToutUser.commerces.create() instead.
        "prototype$__create__commerces": {
          url: urlBase + "/ToutsUsers/:id/commerces",
          method: "POST"
        },

        // INTERNAL. Use ToutUser.commerces.update() instead.
        "prototype$__update__commerces": {
          url: urlBase + "/ToutsUsers/:id/commerces",
          method: "PUT"
        },

        // INTERNAL. Use ToutUser.commerces.destroy() instead.
        "prototype$__destroy__commerces": {
          url: urlBase + "/ToutsUsers/:id/commerces",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#prototype$__get__accessTokens
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Queries accessTokens of ToutUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/ToutsUsers/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#prototype$__create__accessTokens
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/ToutsUsers/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#prototype$__delete__accessTokens
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/ToutsUsers/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#prototype$__count__accessTokens
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Counts accessTokens of ToutUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/ToutsUsers/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#create
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ToutsUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#createMany
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/ToutsUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#upsert
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ToutsUsers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#exists
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ToutsUsers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#findById
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ToutsUsers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#find
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ToutsUsers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#findOne
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ToutsUsers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#updateAll
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/ToutsUsers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#deleteById
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/ToutsUsers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#count
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ToutsUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#prototype$updateAttributes
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ToutsUsers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#login
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/ToutsUsers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#logout
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/ToutsUsers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#confirm
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/ToutsUsers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#resetPassword
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/ToutsUsers/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#getCurrent
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/ToutsUsers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ToutUser#updateOrCreate
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#update
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#destroyById
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#removeById
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#getCachedCurrent
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.ToutUser#login} or
         * {@link lbServices.ToutUser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A ToutUser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#isAuthenticated
         * @methodOf lbServices.ToutUser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.ToutUser#getCurrentId
         * @methodOf lbServices.ToutUser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.ToutUser#modelName
    * @propertyOf lbServices.ToutUser
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ToutUser`.
    */
    R.modelName = "ToutUser";

    /**
     * @ngdoc object
     * @name lbServices.ToutUser.commerces
     * @header lbServices.ToutUser.commerces
     * @object
     * @description
     *
     * The object `ToutUser.commerces` groups methods
     * manipulating `Commerce` instances related to `ToutUser`.
     *
     * Call {@link lbServices.ToutUser#commerces ToutUser.commerces()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.ToutUser#commerces
         * @methodOf lbServices.ToutUser
         *
         * @description
         *
         * Fetches hasOne relation commerces.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Commerce` object.)
         * </em>
         */
        R.commerces = function() {
          var TargetResource = $injector.get("Commerce");
          var action = TargetResource["::get::ToutUser::commerces"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ToutUser.commerces#create
         * @methodOf lbServices.ToutUser.commerces
         *
         * @description
         *
         * Creates a new instance in commerces of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Commerce` object.)
         * </em>
         */
        R.commerces.create = function() {
          var TargetResource = $injector.get("Commerce");
          var action = TargetResource["::create::ToutUser::commerces"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ToutUser.commerces#createMany
         * @methodOf lbServices.ToutUser.commerces
         *
         * @description
         *
         * Creates a new instance in commerces of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Commerce` object.)
         * </em>
         */
        R.commerces.createMany = function() {
          var TargetResource = $injector.get("Commerce");
          var action = TargetResource["::createMany::ToutUser::commerces"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ToutUser.commerces#destroy
         * @methodOf lbServices.ToutUser.commerces
         *
         * @description
         *
         * Deletes commerces of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.commerces.destroy = function() {
          var TargetResource = $injector.get("Commerce");
          var action = TargetResource["::destroy::ToutUser::commerces"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ToutUser.commerces#update
         * @methodOf lbServices.ToutUser.commerces
         *
         * @description
         *
         * Update commerces of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Commerce` object.)
         * </em>
         */
        R.commerces.update = function() {
          var TargetResource = $injector.get("Commerce");
          var action = TargetResource["::update::ToutUser::commerces"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Locale
 * @header lbServices.Locale
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Locale` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Locale",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Locales/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Locale.touts.findById() instead.
        "prototype$__findById__touts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Locales/:id/touts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Locale.touts.destroyById() instead.
        "prototype$__destroyById__touts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Locales/:id/touts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Locale.touts.updateById() instead.
        "prototype$__updateById__touts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Locales/:id/touts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Locale.commerce() instead.
        "prototype$__get__commerce": {
          url: urlBase + "/Locales/:id/commerce",
          method: "GET"
        },

        // INTERNAL. Use Locale.touts() instead.
        "prototype$__get__touts": {
          isArray: true,
          url: urlBase + "/Locales/:id/touts",
          method: "GET"
        },

        // INTERNAL. Use Locale.touts.create() instead.
        "prototype$__create__touts": {
          url: urlBase + "/Locales/:id/touts",
          method: "POST"
        },

        // INTERNAL. Use Locale.touts.destroyAll() instead.
        "prototype$__delete__touts": {
          url: urlBase + "/Locales/:id/touts",
          method: "DELETE"
        },

        // INTERNAL. Use Locale.touts.count() instead.
        "prototype$__count__touts": {
          url: urlBase + "/Locales/:id/touts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Locale#create
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Locales",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Locale#createMany
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Locales",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Locale#upsert
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Locales",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Locale#exists
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Locales/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Locale#findById
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Locales/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Locale#find
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Locales",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Locale#findOne
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Locales/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Locale#updateAll
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Locales/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Locale#deleteById
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Locales/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Locale#count
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Locales/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Locale#prototype$updateAttributes
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Locales/:id",
          method: "PUT"
        },

        // INTERNAL. Use Tout.locale() instead.
        "::get::Tout::locale": {
          url: urlBase + "/Touts/:id/locale",
          method: "GET"
        },

        // INTERNAL. Use Commerce.locales.findById() instead.
        "::findById::Commerce::locales": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Commerces/:id/locales/:fk",
          method: "GET"
        },

        // INTERNAL. Use Commerce.locales.destroyById() instead.
        "::destroyById::Commerce::locales": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Commerces/:id/locales/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Commerce.locales.updateById() instead.
        "::updateById::Commerce::locales": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Commerces/:id/locales/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Commerce.locales() instead.
        "::get::Commerce::locales": {
          isArray: true,
          url: urlBase + "/Commerces/:id/locales",
          method: "GET"
        },

        // INTERNAL. Use Commerce.locales.create() instead.
        "::create::Commerce::locales": {
          url: urlBase + "/Commerces/:id/locales",
          method: "POST"
        },

        // INTERNAL. Use Commerce.locales.createMany() instead.
        "::createMany::Commerce::locales": {
          isArray: true,
          url: urlBase + "/Commerces/:id/locales",
          method: "POST"
        },

        // INTERNAL. Use Commerce.locales.destroyAll() instead.
        "::delete::Commerce::locales": {
          url: urlBase + "/Commerces/:id/locales",
          method: "DELETE"
        },

        // INTERNAL. Use Commerce.locales.count() instead.
        "::count::Commerce::locales": {
          url: urlBase + "/Commerces/:id/locales/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Locale#updateOrCreate
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Locale#update
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Locale#destroyById
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Locale#removeById
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Locale#modelName
    * @propertyOf lbServices.Locale
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Locale`.
    */
    R.modelName = "Locale";

    /**
     * @ngdoc object
     * @name lbServices.Locale.touts
     * @header lbServices.Locale.touts
     * @object
     * @description
     *
     * The object `Locale.touts` groups methods
     * manipulating `Tout` instances related to `Locale`.
     *
     * Call {@link lbServices.Locale#touts Locale.touts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Locale#touts
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Queries touts of Locale.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        R.touts = function() {
          var TargetResource = $injector.get("Tout");
          var action = TargetResource["::get::Locale::touts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Locale.touts#count
         * @methodOf lbServices.Locale.touts
         *
         * @description
         *
         * Counts touts of Locale.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.touts.count = function() {
          var TargetResource = $injector.get("Tout");
          var action = TargetResource["::count::Locale::touts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Locale.touts#create
         * @methodOf lbServices.Locale.touts
         *
         * @description
         *
         * Creates a new instance in touts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        R.touts.create = function() {
          var TargetResource = $injector.get("Tout");
          var action = TargetResource["::create::Locale::touts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Locale.touts#createMany
         * @methodOf lbServices.Locale.touts
         *
         * @description
         *
         * Creates a new instance in touts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        R.touts.createMany = function() {
          var TargetResource = $injector.get("Tout");
          var action = TargetResource["::createMany::Locale::touts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Locale.touts#destroyAll
         * @methodOf lbServices.Locale.touts
         *
         * @description
         *
         * Deletes all touts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.touts.destroyAll = function() {
          var TargetResource = $injector.get("Tout");
          var action = TargetResource["::delete::Locale::touts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Locale.touts#destroyById
         * @methodOf lbServices.Locale.touts
         *
         * @description
         *
         * Delete a related item by id for touts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for touts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.touts.destroyById = function() {
          var TargetResource = $injector.get("Tout");
          var action = TargetResource["::destroyById::Locale::touts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Locale.touts#findById
         * @methodOf lbServices.Locale.touts
         *
         * @description
         *
         * Find a related item by id for touts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for touts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        R.touts.findById = function() {
          var TargetResource = $injector.get("Tout");
          var action = TargetResource["::findById::Locale::touts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Locale.touts#updateById
         * @methodOf lbServices.Locale.touts
         *
         * @description
         *
         * Update a related item by id for touts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for touts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        R.touts.updateById = function() {
          var TargetResource = $injector.get("Tout");
          var action = TargetResource["::updateById::Locale::touts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Locale#commerce
         * @methodOf lbServices.Locale
         *
         * @description
         *
         * Fetches belongsTo relation commerce.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Commerce` object.)
         * </em>
         */
        R.commerce = function() {
          var TargetResource = $injector.get("Commerce");
          var action = TargetResource["::get::Locale::commerce"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Commerce
 * @header lbServices.Commerce
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Commerce` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Commerce",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Commerces/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Commerce.businessCategories() instead.
        "prototype$__get__businessCategories": {
          url: urlBase + "/Commerces/:id/businessCategories",
          method: "GET"
        },

        // INTERNAL. Use Commerce.businessCategories.create() instead.
        "prototype$__create__businessCategories": {
          url: urlBase + "/Commerces/:id/businessCategories",
          method: "POST"
        },

        // INTERNAL. Use Commerce.businessCategories.update() instead.
        "prototype$__update__businessCategories": {
          url: urlBase + "/Commerces/:id/businessCategories",
          method: "PUT"
        },

        // INTERNAL. Use Commerce.businessCategories.destroy() instead.
        "prototype$__destroy__businessCategories": {
          url: urlBase + "/Commerces/:id/businessCategories",
          method: "DELETE"
        },

        // INTERNAL. Use Commerce.locales.findById() instead.
        "prototype$__findById__locales": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Commerces/:id/locales/:fk",
          method: "GET"
        },

        // INTERNAL. Use Commerce.locales.destroyById() instead.
        "prototype$__destroyById__locales": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Commerces/:id/locales/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Commerce.locales.updateById() instead.
        "prototype$__updateById__locales": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Commerces/:id/locales/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Commerce.locales() instead.
        "prototype$__get__locales": {
          isArray: true,
          url: urlBase + "/Commerces/:id/locales",
          method: "GET"
        },

        // INTERNAL. Use Commerce.locales.create() instead.
        "prototype$__create__locales": {
          url: urlBase + "/Commerces/:id/locales",
          method: "POST"
        },

        // INTERNAL. Use Commerce.locales.destroyAll() instead.
        "prototype$__delete__locales": {
          url: urlBase + "/Commerces/:id/locales",
          method: "DELETE"
        },

        // INTERNAL. Use Commerce.locales.count() instead.
        "prototype$__count__locales": {
          url: urlBase + "/Commerces/:id/locales/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Commerce#create
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Commerce` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Commerces",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Commerce#createMany
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Commerce` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Commerces",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Commerce#upsert
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Commerce` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Commerces",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Commerce#exists
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Commerces/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Commerce#findById
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Commerce` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Commerces/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Commerce#find
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Commerce` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Commerces",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Commerce#findOne
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Commerce` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Commerces/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Commerce#updateAll
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Commerces/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Commerce#deleteById
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Commerces/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Commerce#count
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Commerces/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Commerce#prototype$updateAttributes
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Commerce` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Commerces/:id",
          method: "PUT"
        },

        // INTERNAL. Use ToutUser.commerces() instead.
        "::get::ToutUser::commerces": {
          url: urlBase + "/ToutsUsers/:id/commerces",
          method: "GET"
        },

        // INTERNAL. Use ToutUser.commerces.create() instead.
        "::create::ToutUser::commerces": {
          url: urlBase + "/ToutsUsers/:id/commerces",
          method: "POST"
        },

        // INTERNAL. Use ToutUser.commerces.createMany() instead.
        "::createMany::ToutUser::commerces": {
          isArray: true,
          url: urlBase + "/ToutsUsers/:id/commerces",
          method: "POST"
        },

        // INTERNAL. Use ToutUser.commerces.update() instead.
        "::update::ToutUser::commerces": {
          url: urlBase + "/ToutsUsers/:id/commerces",
          method: "PUT"
        },

        // INTERNAL. Use ToutUser.commerces.destroy() instead.
        "::destroy::ToutUser::commerces": {
          url: urlBase + "/ToutsUsers/:id/commerces",
          method: "DELETE"
        },

        // INTERNAL. Use Locale.commerce() instead.
        "::get::Locale::commerce": {
          url: urlBase + "/Locales/:id/commerce",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Commerce#updateOrCreate
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Commerce` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Commerce#update
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Commerce#destroyById
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Commerce#removeById
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Commerce#modelName
    * @propertyOf lbServices.Commerce
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Commerce`.
    */
    R.modelName = "Commerce";

    /**
     * @ngdoc object
     * @name lbServices.Commerce.businessCategories
     * @header lbServices.Commerce.businessCategories
     * @object
     * @description
     *
     * The object `Commerce.businessCategories` groups methods
     * manipulating `BusinessCategory` instances related to `Commerce`.
     *
     * Call {@link lbServices.Commerce#businessCategories Commerce.businessCategories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Commerce#businessCategories
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Fetches hasOne relation businessCategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        R.businessCategories = function() {
          var TargetResource = $injector.get("BusinessCategory");
          var action = TargetResource["::get::Commerce::businessCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Commerce.businessCategories#create
         * @methodOf lbServices.Commerce.businessCategories
         *
         * @description
         *
         * Creates a new instance in businessCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        R.businessCategories.create = function() {
          var TargetResource = $injector.get("BusinessCategory");
          var action = TargetResource["::create::Commerce::businessCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Commerce.businessCategories#createMany
         * @methodOf lbServices.Commerce.businessCategories
         *
         * @description
         *
         * Creates a new instance in businessCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        R.businessCategories.createMany = function() {
          var TargetResource = $injector.get("BusinessCategory");
          var action = TargetResource["::createMany::Commerce::businessCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Commerce.businessCategories#destroy
         * @methodOf lbServices.Commerce.businessCategories
         *
         * @description
         *
         * Deletes businessCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.businessCategories.destroy = function() {
          var TargetResource = $injector.get("BusinessCategory");
          var action = TargetResource["::destroy::Commerce::businessCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Commerce.businessCategories#update
         * @methodOf lbServices.Commerce.businessCategories
         *
         * @description
         *
         * Update businessCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        R.businessCategories.update = function() {
          var TargetResource = $injector.get("BusinessCategory");
          var action = TargetResource["::update::Commerce::businessCategories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Commerce.locales
     * @header lbServices.Commerce.locales
     * @object
     * @description
     *
     * The object `Commerce.locales` groups methods
     * manipulating `Locale` instances related to `Commerce`.
     *
     * Call {@link lbServices.Commerce#locales Commerce.locales()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Commerce#locales
         * @methodOf lbServices.Commerce
         *
         * @description
         *
         * Queries locales of Commerce.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        R.locales = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::get::Commerce::locales"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Commerce.locales#count
         * @methodOf lbServices.Commerce.locales
         *
         * @description
         *
         * Counts locales of Commerce.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.locales.count = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::count::Commerce::locales"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Commerce.locales#create
         * @methodOf lbServices.Commerce.locales
         *
         * @description
         *
         * Creates a new instance in locales of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        R.locales.create = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::create::Commerce::locales"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Commerce.locales#createMany
         * @methodOf lbServices.Commerce.locales
         *
         * @description
         *
         * Creates a new instance in locales of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        R.locales.createMany = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::createMany::Commerce::locales"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Commerce.locales#destroyAll
         * @methodOf lbServices.Commerce.locales
         *
         * @description
         *
         * Deletes all locales of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.locales.destroyAll = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::delete::Commerce::locales"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Commerce.locales#destroyById
         * @methodOf lbServices.Commerce.locales
         *
         * @description
         *
         * Delete a related item by id for locales.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for locales
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.locales.destroyById = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::destroyById::Commerce::locales"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Commerce.locales#findById
         * @methodOf lbServices.Commerce.locales
         *
         * @description
         *
         * Find a related item by id for locales.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for locales
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        R.locales.findById = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::findById::Commerce::locales"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Commerce.locales#updateById
         * @methodOf lbServices.Commerce.locales
         *
         * @description
         *
         * Update a related item by id for locales.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for locales
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        R.locales.updateById = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::updateById::Commerce::locales"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Referal
 * @header lbServices.Referal
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Referal` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Referal",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Referals/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Referal#create
         * @methodOf lbServices.Referal
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Referals",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referal#createMany
         * @methodOf lbServices.Referal
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Referals",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referal#upsert
         * @methodOf lbServices.Referal
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Referals",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referal#exists
         * @methodOf lbServices.Referal
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Referals/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referal#findById
         * @methodOf lbServices.Referal
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Referals/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referal#find
         * @methodOf lbServices.Referal
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Referals",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referal#findOne
         * @methodOf lbServices.Referal
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Referals/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referal#updateAll
         * @methodOf lbServices.Referal
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Referals/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referal#deleteById
         * @methodOf lbServices.Referal
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Referals/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referal#count
         * @methodOf lbServices.Referal
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Referals/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referal#prototype$updateAttributes
         * @methodOf lbServices.Referal
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Referals/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Referal#updateOrCreate
         * @methodOf lbServices.Referal
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Referal#update
         * @methodOf lbServices.Referal
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Referal#destroyById
         * @methodOf lbServices.Referal
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Referal#removeById
         * @methodOf lbServices.Referal
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Referal#modelName
    * @propertyOf lbServices.Referal
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Referal`.
    */
    R.modelName = "Referal";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);

var yt=Object.defineProperty;var mt=(t,e,n)=>e in t?yt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var lt=(t,e,n)=>(mt(t,typeof e!="symbol"?e+"":e,n),n);import{p as propTypesExports,r as reactExports,a as reactDomExports,c as commonjsGlobal,g as getDefaultExportFromCjs,R as React,j as jsx,b as connect,d as jsxs,e as classNames,f as getAugmentedNamespace,D as DASHBOARD_RESET,h as DASHBOARD_START,i as DASHBOARD_SUCCESS,k as DASHBOARD_FAIL,w as withRouter,u as updateObject,l as Row,L as Loading}from"./app-e0ea1308.js";import{F as Feedback,E as Error$1}from"./index-5eba3c64.js";import{P as PageTitle,B as Breadcrumb}from"./index-d1db03c0.js";var OwlCarouselExports={},OwlCarousel$2={get exports(){return OwlCarouselExports},set exports(t){OwlCarouselExports=t}};(function(module,exports){(function(e,n){module.exports=n(propTypesExports,reactExports,reactDomExports)})(commonjsGlobal,function(__WEBPACK_EXTERNAL_MODULE_3__,__WEBPACK_EXTERNAL_MODULE_4__,__WEBPACK_EXTERNAL_MODULE_5__){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(module,exports,__webpack_require__){eval(`'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var owlCarouselOptions = {
	core: ['items', 'loop', 'center', 'rewind', 'mouseDrag', 'touchDrag', 'pullDrag', 'freeDrag', 'margin', 'stagePadding', 'merge', 'mergeFit', 'autoWidth', 'startPosition', 'rtl', 'smartSpeed', 'fluidSpeed', 'dragEndSpeed', 'responsive', 'responsiveRefreshRate', 'responsiveBaseElement', 'fallbackEasing', 'info', 'nestedItemSelector', 'itemElement', 'stageElement', 'refreshClass', 'loadedClass', 'loadingClass', 'rtlClass', 'responsiveClass', 'dragClass', 'itemClass', 'stageClass', 'stageOuterClass', 'grabClass'],
	autorefresh: ['autoRefresh', 'autoRefreshInterval'],
	lazy: ['lazyLoad'],
	autoHeight: ['autoHeight', 'autoHeightClass'],
	video: ['video', 'videoHeight', 'videoWidth'],
	animate: ['animateOut', 'animateIn'],
	autoplay: ['autoplay', 'autoplayTimeout', 'autoplayHoverPause', 'autoplaySpeed'],
	navigation: ['nav', 'navText', 'navSpeed', 'navElement', 'navContainer', 'navContainerClass', 'navClass', 'slideBy', 'dotClass', 'dotsClass', 'dots', 'dotsEach', 'dotsData', 'dotsSpeed', 'dotsContainer'],
	hash: ['URLhashListener']
};

var owlCarouselEvents = {
	core: ['onInitialize', 'onInitialized', 'onResize', 'onResized', 'onRefresh', 'onRefreshed', 'onDrag', 'onDragged', 'onTranslate', 'onTranslated', 'onChange', 'onChanged'],
	lazy: ['onLoadLazy', 'onLoadedLazy'],
	video: ['onStopVideo', 'onPlayVideo']
};

var OwlCarousel = function (_React$Component) {
	_inherits(OwlCarousel, _React$Component);

	function OwlCarousel(props, context) {
		_classCallCheck(this, OwlCarousel);

		var _this = _possibleConstructorReturn(this, (OwlCarousel.__proto__ || Object.getPrototypeOf(OwlCarousel)).call(this, props, context));

		_this.onTranslate = function (next) {
			return function (event) {
				_this.currentPosition = event.item.index;
				if (next) next(event);
			};
		};

		_this.next = function () {
			return _this.$car.next();
		};
		_this.prev = function () {
			return _this.$car.prev();
		};
		_this.goTo = function (x) {
			return _this.$car.to(x);
		};

		_this.currentPosition = 0;
		_this.onTranslate = _this.onTranslate.bind(_this);
		return _this;
	}

	_createClass(OwlCarousel, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			__webpack_require__(1);
			var options = this.getOptions();
			this.init(options);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.destroy();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			var options = this.getOptions();
			options.startPosition = this.currentPosition;
			this.init(options);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.destroy();
		}
	}, {
		key: 'init',
		value: function init(options) {
			var next = options.onTranslate;
			options.onTranslate = this.onTranslate(next);
			this.$node.owlCarousel(options);
			this.$car = this.$node.data('owl.carousel');
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.$car.destroy();
		}
	}, {
		key: 'getOptions',
		value: function getOptions() {
			var _this2 = this;

			var options = {};

			var carOptions = Object.values(owlCarouselOptions).reduce(function (a, v) {
				return a.concat(v);
			}, []);

			carOptions.forEach(function (val) {
				if (val in _this2.props.options) options[val] = _this2.props.options[val];
			});

			var carEvents = Object.values(owlCarouselEvents).reduce(function (a, v) {
				return a.concat(v);
			}, []);

			carEvents.forEach(function (val) {
				if (val in _this2.props.events) options[val] = _this2.props.events[val];
			});

			return options;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props = this.props,
			    options = _props.options,
			    events = _props.events,
			    children = _props.children,
			    props = _objectWithoutProperties(_props, ['options', 'events', 'children']);

			return _react2.default.createElement(
				'div',
				_extends({ ref: function ref(item) {
						return _this3.$node = $((0, _reactDom.findDOMNode)(item));
					}, className: 'owl-carousel owl-theme' }, props),
				children
			);
		}
	}]);

	return OwlCarousel;
}(_react2.default.Component);

OwlCarousel.propTypes = {
	children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element.isRequired)]).isRequired,

	style: _propTypes2.default.object,
	id: _propTypes2.default.string,

	options: _propTypes2.default.shape({
		// core
		items: _propTypes2.default.number,
		loop: _propTypes2.default.bool,
		center: _propTypes2.default.bool,
		rewind: _propTypes2.default.bool,

		mouseDrag: _propTypes2.default.bool,
		touchDrag: _propTypes2.default.bool,
		pullDrag: _propTypes2.default.bool,
		freeDrag: _propTypes2.default.bool,

		margin: _propTypes2.default.number,
		stagePadding: _propTypes2.default.number,

		merge: _propTypes2.default.bool,
		mergeFit: _propTypes2.default.bool,
		autoWidth: _propTypes2.default.bool,

		startPosition: _propTypes2.default.number,
		rtl: _propTypes2.default.bool,

		smartSpeed: _propTypes2.default.number,
		fluidSpeed: _propTypes2.default.bool,
		dragEndSpeed: _propTypes2.default.bool,

		responsive: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
		responsiveRefreshRate: _propTypes2.default.number,
		responsiveBaseElement: _propTypes2.default.object,

		fallbackEasing: _propTypes2.default.string,

		info: _propTypes2.default.bool,

		nestedItemSelector: _propTypes2.default.bool,
		itemElement: _propTypes2.default.string,
		stageElement: _propTypes2.default.string,

		refreshClass: _propTypes2.default.string,
		loadedClass: _propTypes2.default.string,
		loadingClass: _propTypes2.default.string,
		rtlClass: _propTypes2.default.string,
		responsiveClass: _propTypes2.default.string,
		dragClass: _propTypes2.default.string,
		itemClass: _propTypes2.default.string,
		stageClass: _propTypes2.default.string,
		stageOuterClass: _propTypes2.default.string,
		grabClass: _propTypes2.default.string,

		// autoRefresh
		autoRefresh: _propTypes2.default.bool,
		autoRefreshInterval: _propTypes2.default.number,

		// lazy
		lazyLoad: _propTypes2.default.bool,

		// autoHeight
		autoHeight: _propTypes2.default.bool,
		autoHeightClass: _propTypes2.default.string,

		// video
		video: _propTypes2.default.bool,
		videoHeight: _propTypes2.default.bool,
		videoWidth: _propTypes2.default.bool,

		// animate
		animateOut: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
		animateIn: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),

		// autoplay
		autoplay: _propTypes2.default.bool,
		autoplayTimeout: _propTypes2.default.number,
		autoplayHoverPause: _propTypes2.default.bool,
		autoplaySpeed: _propTypes2.default.bool,

		// navigation
		nav: _propTypes2.default.bool,
		navText: _propTypes2.default.array,
		navSpeed: _propTypes2.default.bool,
		navElement: _propTypes2.default.string,
		navContainer: _propTypes2.default.bool,
		navContainerClass: _propTypes2.default.string,
		navClass: _propTypes2.default.array,
		slideBy: _propTypes2.default.number,
		dotClass: _propTypes2.default.string,
		dotsClass: _propTypes2.default.string,
		dots: _propTypes2.default.bool,
		dotsEach: _propTypes2.default.bool,
		dotsData: _propTypes2.default.bool,
		dotsSpeed: _propTypes2.default.bool,
		dotsContainer: _propTypes2.default.bool,

		// hash
		URLhashListener: _propTypes2.default.bool
	}),

	events: _propTypes2.default.shape({
		// core
		onInitialize: _propTypes2.default.func,
		onInitialized: _propTypes2.default.func,
		onResize: _propTypes2.default.func,
		onResized: _propTypes2.default.func,
		onRefresh: _propTypes2.default.func,
		onRefreshed: _propTypes2.default.func,
		onDrag: _propTypes2.default.func,
		onDragged: _propTypes2.default.func,
		onTranslate: _propTypes2.default.func,
		onTranslated: _propTypes2.default.func,
		onChange: _propTypes2.default.func,
		onChanged: _propTypes2.default.func,

		// lazy
		onLoadLazy: _propTypes2.default.func,
		onLoadedLazy: _propTypes2.default.func,

		// video
		onStopVideo: _propTypes2.default.func,
		onPlayVideo: _propTypes2.default.func
	})
};

OwlCarousel.defaultProps = {
	options: {},
	events: {}
};

exports.default = OwlCarousel;
module.exports = exports['default'];

/*****************
 ** WEBPACK FOOTER
 ** ./components/OwlCarousel.jsx
 ** module id = 0
 ** module chunks = 0
 **/
//# sourceURL=webpack:///./components/OwlCarousel.jsx?`)},function(module,exports){eval(`'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function ($, window, document, undefined) {

	/**
  * Creates a carousel.
  * @class The Owl Carousel.
  * @public
  * @param {HTMLElement|jQuery} element - The element to create the carousel for.
  * @param {Object} [options] - The options
  */
	function Owl(element, options) {

		/**
   * Current settings for the carousel.
   * @public
   */
		this.settings = null;

		/**
   * Current options set by the caller including defaults.
   * @public
   */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
   * Plugin element.
   * @public
   */
		this.$element = $(element);

		/**
   * Proxied event handlers.
   * @protected
   */
		this._handlers = {};

		/**
   * References to the running plugins of this carousel.
   * @protected
   */
		this._plugins = {};

		/**
   * Currently suppressed events to prevent them from beeing retriggered.
   * @protected
   */
		this._supress = {};

		/**
   * Absolute current position.
   * @protected
   */
		this._current = null;

		/**
   * Animation speed in milliseconds.
   * @protected
   */
		this._speed = null;

		/**
   * Coordinates of all items in pixel.
   * @todo The name of this member is missleading.
   * @protected
   */
		this._coordinates = [];

		/**
   * Current breakpoint.
   * @todo Real media queries would be nice.
   * @protected
   */
		this._breakpoint = null;

		/**
   * Current width of the plugin element.
   */
		this._width = null;

		/**
   * All real items.
   * @protected
   */
		this._items = [];

		/**
   * All cloned items.
   * @protected
   */
		this._clones = [];

		/**
   * Merge values of all items.
   * @todo Maybe this could be part of a plugin.
   * @protected
   */
		this._mergers = [];

		/**
   * Widths of all items.
   */
		this._widths = [];

		/**
   * Invalidated parts within the update process.
   * @protected
   */
		this._invalidated = {};

		/**
   * Ordered list of workers for the update process.
   * @protected
   */
		this._pipe = [];

		/**
   * Current state information for the drag operation.
   * @todo #261
   * @protected
   */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
   * Current state information and their tags.
   * @type {Object}
   * @protected
   */
		this._states = {
			current: {},
			tags: {
				'initializing': ['busy'],
				'animating': ['busy'],
				'dragging': ['interacting']
			}
		};

		$.each(['onResize', 'onThrottledResize'], $.proxy(function (i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function (key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function (priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
  * Default options for the carousel.
  * @public
  */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
  * Enumeration for width.
  * @public
  * @readonly
  * @enum {String}
  */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
  * Enumeration for types.
  * @public
  * @readonly
  * @enum {String}
  */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
  * Contains all registered plugins.
  * @public
  */
	Owl.Plugins = {};

	/**
  * List of workers involved in the update process.
  */
	Owl.Workers = [{
		filter: ['width', 'settings'],
		run: function run() {
			this._width = this.$element.width();
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: ['items', 'settings'],
		run: function run() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run(cache) {
			var margin = this.settings.margin || '',
			    grid = !this.settings.autoWidth,
			    rtl = this.settings.rtl,
			    css = {
				'width': 'auto',
				'margin-left': rtl ? margin : '',
				'margin-right': rtl ? '' : margin
			};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
			    merge = null,
			    iterator = this._items.length,
			    grid = !this.settings.autoWidth,
			    widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: ['items', 'settings'],
		run: function run() {
			var clones = [],
			    items = this._items,
			    settings = this.settings,

			// TODO: Should be computed from number of min width items in stage
			view = Math.max(settings.items * 2, 4),
			    size = Math.ceil(items.length / 2) * 2,
			    repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
			    append = '',
			    prepend = '';

			repeat /= 2;

			while (repeat--) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run() {
			var rtl = this.settings.rtl ? 1 : -1,
			    size = this._clones.length + this._items.length,
			    iterator = -1,
			    previous = 0,
			    current = 0,
			    coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run() {
			var padding = this.settings.stagePadding,
			    coordinates = this._coordinates,
			    css = {
				'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
				'padding-left': padding || '',
				'padding-right': padding || ''
			};

			this.$stage.css(css);
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run(cache) {
			var iterator = this._coordinates.length,
			    grid = !this.settings.autoWidth,
			    items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: ['items'],
		run: function run() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: ['position'],
		run: function run() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: ['width', 'position', 'items', 'settings'],
		run: function run() {
			var rtl = this.settings.rtl ? 1 : -1,
			    padding = this.settings.stagePadding * 2,
			    begin = this.coordinates(this.current()) + padding,
			    end = begin + this.width() * rtl,
			    inner,
			    outer,
			    matches = [],
			    i,
			    n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if (this.op(inner, '<=', begin) && this.op(inner, '>', end) || this.op(outer, '<', begin) && this.op(outer, '>', end)) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	}];

	/**
  * Initializes the carousel.
  * @protected
  */
	Owl.prototype.initialize = function () {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// HACK: DISABLE SCROLLBAR
		var overflowVal = $('body').css('overflow');
		$('body').css({ 'overflow': 'hidden' });

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(':visible')) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		// HACK: RESTORE SCROLLBAR
		$('body').css({ 'overflow': overflowVal });

		this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
  * Setups the current settings.
  * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
  * @todo Support for media queries by using \`matchMedia\` would be nice.
  * @public
  */
	Owl.prototype.setup = function () {
		var viewport = this.viewport(),
		    overwrites = this.options.responsive,
		    match = -1,
		    settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function (breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class', this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\\\S+\\\\s', 'g'), '$1' + match));
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
  * Updates option logic if necessery.
  * @protected
  */
	Owl.prototype.optionsLogic = function () {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
  * Prepares an item before add.
  * @todo Rename event parameter \`content\` to \`item\`.
  * @protected
  * @returns {jQuery|HTMLElement} - The item container.
  */
	Owl.prototype.prepare = function (item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>').addClass(this.options.itemClass).append(item);
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
  * Updates the view.
  * @public
  */
	Owl.prototype.update = function () {
		var i = 0,
		    n = this._pipe.length,
		    filter = $.proxy(function (p) {
			return this[p];
		}, this._invalidated),
		    cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
  * Gets the width of the view.
  * @public
  * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
  * @returns {Number} - The width of the view in pixel.
  */
	Owl.prototype.width = function (dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
  * Refreshes the carousel primarily for adaptive purposes.
  * @public
  */
	Owl.prototype.refresh = function () {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
  * Checks window \`resize\` event.
  * @protected
  */
	Owl.prototype.onThrottledResize = function () {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
  * Checks window \`resize\` event.
  * @protected
  */
	Owl.prototype.onResize = function () {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(':visible')) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
  * Registers event handlers.
  * @todo Check \`msPointerEnabled\`
  * @todo #261
  * @protected
  */
	Owl.prototype.registerEventHandlers = function () {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function () {
				return false;
			});
		}

		if (this.settings.touchDrag) {
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
  * Handles \`touchstart\` and \`mousedown\` events.
  * @todo Horizontal swipe threshold as option
  * @todo #261
  * @protected
  * @param {Event} event - The event arguments.
  */
	Owl.prototype.onDragStart = function (event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\\(|\\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop();
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function (event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
  * Handles the \`touchmove\` and \`mousemove\` events.
  * @todo #261
  * @protected
  * @param {Event} event - The event arguments.
  */
	Owl.prototype.onDragMove = function (event) {
		var minimum = null,
		    maximum = null,
		    pull = null,
		    delta = this.difference(this._drag.pointer, this.pointer(event)),
		    stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
  * Handles the \`touchend\` and \`mouseup\` events.
  * @todo #261
  * @todo Threshold for click event
  * @protected
  * @param {Event} event - The event arguments.
  */
	Owl.prototype.onDragEnd = function (event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
		    stage = this._drag.stage.current,
		    direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function () {
					return false;
				});
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
  * Gets absolute position of the closest item for a coordinate.
  * @todo Setting \`freeDrag\` makes \`closest\` not reusable. See #165.
  * @protected
  * @param {Number} coordinate - The coordinate in pixel.
  * @param {String} direction - The direction to check for the closest item. Ether \`left\` or \`right\`.
  * @return {Number} - The absolute position of the closest item.
  */
	Owl.prototype.closest = function (coordinate, direction) {
		var position = -1,
		    pull = 30,
		    width = this.width(),
		    coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function (index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
					// on a right pull, check on previous index
					// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value) && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
  * Animates the stage.
  * @todo #270
  * @public
  * @param {Number} coordinate - The coordinate in pixels.
  */
	Owl.prototype.animate = function (coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: this.speed() / 1000 + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
  * Checks whether the carousel is in a specific state or not.
  * @param {String} state - The state to check.
  * @returns {Boolean} - The flag which indicates if the carousel is busy.
  */
	Owl.prototype.is = function (state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
  * Sets the absolute position of the current item.
  * @public
  * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
  * @returns {Number} - The absolute position of the current item.
  */
	Owl.prototype.current = function (position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
  * Invalidates the given part of the update routine.
  * @param {String} [part] - The part to invalidate.
  * @returns {Array.<String>} - The invalidated parts.
  */
	Owl.prototype.invalidate = function (part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function (v, i) {
			return i;
		});
	};

	/**
  * Resets the absolute position of the current item.
  * @public
  * @param {Number} position - The absolute position of the new item.
  */
	Owl.prototype.reset = function (position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress(['translate', 'translated']);

		this.animate(this.coordinates(position));

		this.release(['translate', 'translated']);
	};

	/**
  * Normalizes an absolute or a relative position of an item.
  * @public
  * @param {Number} position - The absolute or relative position to normalize.
  * @param {Boolean} [relative=false] - Whether the given position is relative or not.
  * @returns {Number} - The normalized position.
  */
	Owl.prototype.normalize = function (position, relative) {
		var n = this._items.length,
		    m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
  * Converts an absolute position of an item into a relative one.
  * @public
  * @param {Number} position - The absolute position to convert.
  * @returns {Number} - The converted position.
  */
	Owl.prototype.relative = function (position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
  * Gets the maximum position for the current item.
  * @public
  * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
  * @returns {Number}
  */
	Owl.prototype.maximum = function (relative) {
		var settings = this.settings,
		    maximum = this._coordinates.length,
		    iterator,
		    reciprocalItemsWidth,
		    elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			reciprocalItemsWidth = this._items[--iterator].width();
			elementWidth = this.$element.width();
			while (iterator--) {
				reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
				if (reciprocalItemsWidth > elementWidth) {
					break;
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
  * Gets the minimum position for the current item.
  * @public
  * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
  * @returns {Number}
  */
	Owl.prototype.minimum = function (relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
  * Gets an item at the specified relative position.
  * @public
  * @param {Number} [position] - The relative position of the item.
  * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
  */
	Owl.prototype.items = function (position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
  * Gets an item at the specified relative position.
  * @public
  * @param {Number} [position] - The relative position of the item.
  * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
  */
	Owl.prototype.mergers = function (position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
  * Gets the absolute positions of clones for an item.
  * @public
  * @param {Number} [position] - The relative position of the item.
  * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
  */
	Owl.prototype.clones = function (position) {
		var odd = this._clones.length / 2,
		    even = odd + this._items.length,
		    map = function map(index) {
			return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
		};

		if (position === undefined) {
			return $.map(this._clones, function (v, i) {
				return map(i);
			});
		}

		return $.map(this._clones, function (v, i) {
			return v === position ? map(i) : null;
		});
	};

	/**
  * Sets the current animation speed.
  * @public
  * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
  * @returns {Number} - The current animation speed in milliseconds.
  */
	Owl.prototype.speed = function (speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
  * Gets the coordinate of an item.
  * @todo The name of this method is missleanding.
  * @public
  * @param {Number} position - The absolute position of the item within \`minimum()\` and \`maximum()\`.
  * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
  */
	Owl.prototype.coordinates = function (position) {
		var multiplier = 1,
		    newPosition = position - 1,
		    coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function (coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
  * Calculates the speed for a translation.
  * @protected
  * @param {Number} from - The absolute position of the start item.
  * @param {Number} to - The absolute position of the target item.
  * @param {Number} [factor=undefined] - The time factor in milliseconds.
  * @returns {Number} - The time in milliseconds for the translation.
  */
	Owl.prototype.duration = function (from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed);
	};

	/**
  * Slides to the specified item.
  * @public
  * @param {Number} position - The position of the item.
  * @param {Number} [speed] - The time in milliseconds for the transition.
  */
	Owl.prototype.to = function (position, speed) {
		var current = this.current(),
		    revert = null,
		    distance = position - this.relative(current),
		    direction = (distance > 0) - (distance < 0),
		    items = this._items.length,
		    minimum = this.minimum(),
		    maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(':visible')) {
			this.update();
		}
	};

	/**
  * Slides to the next item.
  * @public
  * @param {Number} [speed] - The time in milliseconds for the transition.
  */
	Owl.prototype.next = function (speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
  * Slides to the previous item.
  * @public
  * @param {Number} [speed] - The time in milliseconds for the transition.
  */
	Owl.prototype.prev = function (speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
  * Handles the end of an animation.
  * @protected
  * @param {Event} event - The event arguments.
  */
	Owl.prototype.onTransitionEnd = function (event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
  * Gets viewport width.
  * @protected
  * @return {Number} - The width in pixel.
  */
	Owl.prototype.viewport = function () {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
  * Replaces the current content.
  * @public
  * @param {HTMLElement|jQuery|String} content - The new content.
  */
	Owl.prototype.replace = function (content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = content instanceof jQuery ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function () {
			return this.nodeType === 1;
		}).each($.proxy(function (index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
  * Adds an item.
  * @todo Use \`item\` instead of \`content\` for the event arguments.
  * @public
  * @param {HTMLElement|jQuery|String} content - The item content to add.
  * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
  */
	Owl.prototype.add = function (content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
  * Removes an item by its position.
  * @todo Use \`item\` instead of \`content\` for the event arguments.
  * @public
  * @param {Number} position - The relative position of the item to remove.
  */
	Owl.prototype.remove = function (position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
  * Preloads images with auto width.
  * @todo Replace by a more generic approach
  * @protected
  */
	Owl.prototype.preloadAutoWidthImages = function (images) {
		images.each($.proxy(function (i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function (e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
  * Destroys the carousel.
  * @public
  */
	Owl.prototype.destroy = function () {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();

		this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\\\S+\\\\s', 'g'), '')).removeData('owl.carousel');
	};

	/**
  * Operators to calculate right-to-left and left-to-right.
  * @protected
  * @param {Number} [a] - The left side operand.
  * @param {String} [o] - The operator.
  * @param {Number} [b] - The right side operand.
  */
	Owl.prototype.op = function (a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
  * Attaches to an internal event.
  * @protected
  * @param {HTMLElement} element - The event source.
  * @param {String} event - The event name.
  * @param {Function} listener - The event handler to attach.
  * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
  */
	Owl.prototype.on = function (element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
  * Detaches from an internal event.
  * @protected
  * @param {HTMLElement} element - The event source.
  * @param {String} event - The event name.
  * @param {Function} listener - The attached event handler to detach.
  * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
  */
	Owl.prototype.off = function (element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
  * Triggers a public event.
  * @todo Remove \`status\`, \`relatedTarget\` should be used instead.
  * @protected
  * @param {String} name - The event name.
  * @param {*} [data=null] - The event data.
  * @param {String} [namespace=carousel] - The event namespace.
  * @param {String} [state] - The state which is associated with the event.
  * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
  * @returns {Event} - The event arguments.
  */
	Owl.prototype.trigger = function (name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		},
		    handler = $.camelCase($.grep(['on', name, namespace], function (v) {
			return v;
		}).join('-').toLowerCase()),
		    event = $.Event([name, 'owl', namespace || 'carousel'].join('.').toLowerCase(), $.extend({ relatedTarget: this }, status, data));

		if (!this._supress[name]) {
			$.each(this._plugins, function (name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
  * Enters a state.
  * @param name - The state name.
  */
	Owl.prototype.enter = function (name) {
		$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
  * Leaves a state.
  * @param name - The state name.
  */
	Owl.prototype.leave = function (name) {
		$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
  * Registers an event or state.
  * @public
  * @param {Object} object - The event or state to register.
  */
	Owl.prototype.register = function (object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function (e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
  * Suppresses events.
  * @protected
  * @param {Array.<String>} events - The events to suppress.
  */
	Owl.prototype.suppress = function (events) {
		$.each(events, $.proxy(function (index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
  * Releases suppressed events.
  * @protected
  * @param {Array.<String>} events - The events to release.
  */
	Owl.prototype.release = function (events) {
		$.each(events, $.proxy(function (index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
  * Gets unified pointer coordinates from event.
  * @todo #261
  * @protected
  * @param {Event} - The \`mousedown\` or \`touchstart\` event.
  * @returns {Object} - Contains \`x\` and \`y\` coordinates of current pointer position.
  */
	Owl.prototype.pointer = function (event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
  * Determines if the input is a Number or something that can be coerced to a Number
  * @protected
  * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
  * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
  */
	Owl.prototype.isNumeric = function (number) {
		return !isNaN(parseFloat(number));
	};

	/**
  * Gets the difference of two vectors.
  * @todo #261
  * @protected
  * @param {Object} - The first vector.
  * @param {Object} - The second vector.
  * @returns {Object} - The difference.
  */
	Owl.prototype.difference = function (first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
  * The jQuery Plugin for the Owl Carousel
  * @todo Navigation plugin \`next\` and \`prev\`
  * @public
  */
	$.fn.owlCarousel = function (option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function () {
			var $this = $(this),
			    data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);
				$this.data('owl.carousel', data);

				$.each(['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'], function (i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function (e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([event]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([event]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
  * The constructor for the jQuery Plugin
  * @public
  */
	$.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {

	/**
  * Creates the auto refresh plugin.
  * @class The Auto Refresh Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var AutoRefresh = function AutoRefresh(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Refresh interval.
   * @protected
   * @type {number}
   */
		this._interval = null;

		/**
   * Whether the element is currently visible or not.
   * @protected
   * @type {Boolean}
   */
		this._visible = null;

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
  * Default options.
  * @public
  */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
  * Watches the element.
  */
	AutoRefresh.prototype.watch = function () {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
  * Refreshes the element.
  */
	AutoRefresh.prototype.refresh = function () {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && this._core.invalidate('width') && this._core.refresh();
	};

	/**
  * Destroys the plugin.
  */
	AutoRefresh.prototype.destroy = function () {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {

	/**
  * Creates the lazy plugin.
  * @class The Lazy Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var Lazy = function Lazy(carousel) {

		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Already loaded items.
   * @protected
   * @type {Array.<jQuery>}
   */
		this._loaded = [];

		/**
   * Event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function (e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if (e.property && e.property.name == 'position' || e.type == 'initialized') {
					var settings = this._core.settings,
					    n = settings.center && Math.ceil(settings.items / 2) || settings.items,
					    i = settings.center && n * -1 || 0,
					    position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
					    clones = this._core.clones().length,
					    load = $.proxy(function (i, v) {
						this.load(v);
					}, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
  * Default options.
  * @public
  */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
  * Loads all resources of an item at the specified position.
  * @param {Number} position - The absolute position of the item.
  * @protected
  */
	Lazy.prototype.load = function (position) {
		var $item = this._core.$stage.children().eq(position),
		    $elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function (index, element) {
			var $element = $(element),
			    image,
			    url = window.devicePixelRatio > 1 && $element.attr('data-src-retina') || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function () {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function () {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
  * Destroys the plugin.
  * @public
  */
	Lazy.prototype.destroy = function () {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {

	/**
  * Creates the auto height plugin.
  * @class The Auto Height Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var AutoHeight = function AutoHeight(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position') {
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
  * Default options.
  * @public
  */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
  * Updates the view.
  */
	AutoHeight.prototype.update = function () {
		var start = this._core._current,
		    end = start + this._core.settings.items,
		    visible = this._core.$stage.children().toArray().slice(start, end),
		    heights = [],
		    maxheight = 0;

		$.each(visible, function (index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function () {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {

	/**
  * Creates the video plugin.
  * @class The Video Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var Video = function Video(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Cache all video URLs.
   * @protected
   * @type {Object}
   */
		this._videos = {};

		/**
   * Current playing item.
   * @protected
   * @type {jQuery}
   */
		this._playing = null;

		/**
   * All event handlers.
   * @todo The cloned content removale is too late
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: ['interacting'] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function (e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function (e) {
			this.play(e);
		}, this));
	};

	/**
  * Default options.
  * @public
  */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
  * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
  * @protected
  * @param {jQuery} target - The target containing the video data.
  * @param {jQuery} item - The item containing the video.
  */
	Video.prototype.fetch = function (target, item) {
		var type = function () {
			if (target.attr('data-vimeo-id')) {
				return 'vimeo';
			} else if (target.attr('data-vzaar-id')) {
				return 'vzaar';
			} else {
				return 'youtube';
			}
		}(),
		    id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
		    width = target.attr('data-width') || this._core.settings.videoWidth,
		    height = target.attr('data-height') || this._core.settings.videoHeight,
		    url = target.attr('href');

		if (url) {

			/*
   		Parses the id's out of the following urls (and probably more):
   		https://www.youtube.com/watch?v=:id
   		https://youtu.be/:id
   		https://vimeo.com/:id
   		https://vimeo.com/channels/:channel/:id
   		https://vimeo.com/groups/:group/videos/:id
   		https://app.vzaar.com/videos/:id
   			Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
   */

			id = url.match(/(http:|https:|)\\/\\/(player.|www.|app.)?(vimeo\\.com|youtu(be\\.com|\\.be|be\\.googleapis\\.com)|vzaar\\.com)\\/(video\\/|videos\\/|embed\\/|channels\\/.+\\/|groups\\/.+\\/|watch\\?v=|v\\/)?([A-Za-z0-9._%-]*)(\\&\\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
  * Creates video thumbnail.
  * @protected
  * @param {jQuery} target - The target containing the video data.
  * @param {Object} info - The video info object.
  * @see \`fetch\`
  */
	Video.prototype.thumbnail = function (target, video) {
		var tnLink,
		    icon,
		    path,
		    dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
		    customTn = target.find('img'),
		    srcType = 'src',
		    lazyClass = '',
		    settings = this._core.settings,
		    create = function create(path) {
			icon = '<div class="owl-video-play-icon"></div>';

			if (settings.lazyLoad) {
				tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
			} else {
				tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
			}
			target.after(tnLink);
			target.after(icon);
		};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function success(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function success(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
  * Stops the current video.
  * @public
  */
	Video.prototype.stop = function () {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
  * Starts the current video.
  * @public
  * @param {Event} event - The event arguments.
  */
	Video.prototype.play = function (event) {
		var target = $(event.target),
		    item = target.closest('.' + this._core.settings.itemClass),
		    video = this._videos[item.attr('data-video')],
		    width = video.width || '100%',
		    height = video.height || this._core.$stage.height(),
		    html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width + '" height="' + height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' + 'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
  * Checks whether an video is currently in full screen mode or not.
  * @todo Bad style because looks like a readonly method but changes members.
  * @protected
  * @returns {Boolean}
  */
	Video.prototype.isInFullScreen = function () {
		var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
  * Destroys the plugin.
  */
	Video.prototype.destroy = function () {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {

	/**
  * Creates the animate plugin.
  * @class The Navigation Plugin
  * @param {Owl} scope - The Owl Carousel
  */
	var Animate = function Animate(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function (e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
  * Default options.
  * @public
  */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
  * Toggles the animation classes whenever an translations starts.
  * @protected
  * @returns {Boolean|undefined}
  */
	Animate.prototype.swap = function () {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
		    clear = $.proxy(this.clear, this),
		    previous = this.core.$stage.children().eq(this.previous),
		    next = this.core.$stage.children().eq(this.next),
		    incoming = this.core.settings.animateIn,
		    outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear).css({ 'left': left + 'px' }).addClass('animated owl-animated-out').addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear).addClass('animated owl-animated-in').addClass(incoming);
		}
	};

	Animate.prototype.clear = function (e) {
		$(e.target).css({ 'left': '' }).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
  * Destroys the plugin.
  * @public
  */
	Animate.prototype.destroy = function () {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {

	/**
  * Creates the autoplay plugin.
  * @class The Autoplay Plugin
  * @param {Owl} scope - The Owl Carousel
  */
	var Autoplay = function Autoplay(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * The autoplay timeout.
   * @type {Timeout}
   */
		this._timeout = null;

		/**
   * Indicates whenever the autoplay is paused.
   * @type {Boolean}
   */
		this._paused = false;

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position') {
					//console.log('play?', e);
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function (e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function (e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
  * Default options.
  * @public
  */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
  * Starts the autoplay.
  * @public
  * @param {Number} [timeout] - The interval before the next animation starts.
  * @param {Number} [speed] - The animation speed for the animations.
  */
	Autoplay.prototype.play = function (timeout, speed) {
		this._paused = false;

		if (this._core.is('rotating')) {
			return;
		}

		this._core.enter('rotating');

		this._setAutoPlayInterval();
	};

	/**
  * Gets a new timeout
  * @private
  * @param {Number} [timeout] - The interval before the next animation starts.
  * @param {Number} [speed] - The animation speed for the animations.
  * @return {Timeout}
  */
	Autoplay.prototype._getNextTimeout = function (timeout, speed) {
		if (this._timeout) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function () {
			if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
  * Sets autoplay in motion.
  * @private
  */
	Autoplay.prototype._setAutoPlayInterval = function () {
		this._timeout = this._getNextTimeout();
	};

	/**
  * Stops the autoplay.
  * @public
  */
	Autoplay.prototype.stop = function () {
		if (!this._core.is('rotating')) {
			return;
		}

		window.clearTimeout(this._timeout);
		this._core.leave('rotating');
	};

	/**
  * Stops the autoplay.
  * @public
  */
	Autoplay.prototype.pause = function () {
		if (!this._core.is('rotating')) {
			return;
		}

		this._paused = true;
	};

	/**
  * Destroys the plugin.
  */
	Autoplay.prototype.destroy = function () {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
	'use strict';

	/**
  * Creates the navigation plugin.
  * @class The Navigation Plugin
  * @param {Owl} carousel - The Owl Carousel.
  */

	var Navigation = function Navigation(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Indicates whether the plugin is initialized or not.
   * @protected
   * @type {Boolean}
   */
		this._initialized = false;

		/**
   * The current paging indexes.
   * @protected
   * @type {Array}
   */
		this._pages = [];

		/**
   * All DOM elements of the user interface.
   * @protected
   * @type {Object}
   */
		this._controls = {};

		/**
   * Markup for an indicator.
   * @protected
   * @type {Array.<String>}
   */
		this._templates = [];

		/**
   * The carousel element.
   * @type {jQuery}
   */
		this.$element = this._core.$element;

		/**
   * Overridden methods of the carousel.
   * @protected
   * @type {Object}
   */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' + $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
  * Default options.
  * @public
  * @todo Rename \`slideBy\` to \`navBy\`
  */
	Navigation.Defaults = {
		nav: false,
		navText: ['prev', 'next'],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: ['owl-prev', 'owl-next'],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
  * Initializes the layout of the plugin and extends the carousel.
  * @protected
  */
	Navigation.prototype.initialize = function () {
		var override,
		    settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer) : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>').addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on('click', $.proxy(function (e) {
			this.prev(settings.navSpeed);
		}, this));
		this._controls.$next = $('<' + settings.navElement + '>').addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on('click', $.proxy(function (e) {
			this.next(settings.navSpeed);
		}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [$('<div>').addClass(settings.dotClass).append($('<span>')).prop('outerHTML')];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'div', $.proxy(function (e) {
			var index = $(e.target).parent().is(this._controls.$absolute) ? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
  * Destroys the plugin.
  * @protected
  */
	Navigation.prototype.destroy = function () {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
  * Updates the internal state.
  * @protected
  */
	Navigation.prototype.update = function () {
		var i,
		    j,
		    k,
		    lower = this._core.clones().length / 2,
		    upper = lower + this._core.items().length,
		    maximum = this._core.maximum(true),
		    settings = this._core.settings,
		    size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
  * Draws the user interface.
  * @todo The option \`dotsData\` wont work.
  * @protected
  */
	Navigation.prototype.draw = function () {
		var difference,
		    settings = this._core.settings,
		    disabled = this._core.items().length <= settings.items,
		    index = this._core.relative(this._core.current()),
		    loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
  * Extends event data.
  * @protected
  * @param {Event} event - The event object which gets thrown.
  */
	Navigation.prototype.onTrigger = function (event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
  * Gets the current page position of the carousel.
  * @protected
  * @returns {Number}
  */
	Navigation.prototype.current = function () {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function (page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
  * Gets the current succesor/predecessor position.
  * @protected
  * @returns {Number}
  */
	Navigation.prototype.getPosition = function (successor) {
		var position,
		    length,
		    settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[(position % length + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
  * Slides to the next item or page.
  * @public
  * @param {Number} [speed=false] - The time in milliseconds for the transition.
  */
	Navigation.prototype.next = function (speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
  * Slides to the previous item or page.
  * @public
  * @param {Number} [speed=false] - The time in milliseconds for the transition.
  */
	Navigation.prototype.prev = function (speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
  * Slides to the specified item or page.
  * @public
  * @param {Number} position - The position of the item or page.
  * @param {Number} [speed] - The time in milliseconds for the transition.
  * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
  */
	Navigation.prototype.to = function (position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
	'use strict';

	/**
  * Creates the hash plugin.
  * @class The Hash Plugin
  * @param {Owl} carousel - The Owl Carousel
  */

	var Hash = function Hash(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Hash index for the items.
   * @protected
   * @type {Object}
   */
		this._hashes = {};

		/**
   * The carousel element.
   * @type {jQuery}
   */
		this.$element = this._core.$element;

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function (e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
					    hash = $.map(this._hashes, function (item, hash) {
						return item === current ? hash : null;
					}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function (e) {
			var hash = window.location.hash.substring(1),
			    items = this._core.$stage.children(),
			    position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
  * Default options.
  * @public
  */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
  * Destroys the plugin.
  * @public
  */
	Hash.prototype.destroy = function () {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {

	var style = $('<support>').get(0).style,
	    prefixes = 'Webkit Moz O ms'.split(' '),
	    events = {
		transition: {
			end: {
				WebkitTransition: 'webkitTransitionEnd',
				MozTransition: 'transitionend',
				OTransition: 'oTransitionEnd',
				transition: 'transitionend'
			}
		},
		animation: {
			end: {
				WebkitAnimation: 'webkitAnimationEnd',
				MozAnimation: 'animationend',
				OAnimation: 'oAnimationEnd',
				animation: 'animationend'
			}
		}
	},
	    tests = {
		csstransforms: function csstransforms() {
			return !!test('transform');
		},
		csstransforms3d: function csstransforms3d() {
			return !!test('perspective');
		},
		csstransitions: function csstransitions() {
			return !!test('transition');
		},
		cssanimations: function cssanimations() {
			return !!test('animation');
		}
	};

	function test(property, prefixed) {
		var result = false,
		    upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function (i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'));
		$.support.transition.end = events.transition.end[$.support.transition];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'));
		$.support.animation.end = events.animation.end[$.support.animation];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}
})(window.Zepto || window.jQuery, window, document);

/*****************
 ** WEBPACK FOOTER
 ** ./src/owl.carousel.js
 ** module id = 1
 ** module chunks = 0
 **/
//# sourceURL=webpack:///./src/owl.carousel.js?`)},function(module,exports){eval(`// removed by extract-text-webpack-plugin

/*****************
 ** WEBPACK FOOTER
 ** ./src/owl.carousel.css
 ** module id = 2
 ** module chunks = 0
 **/
//# sourceURL=webpack:///./src/owl.carousel.css?`)},function(module,exports){eval(`module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/*****************
 ** WEBPACK FOOTER
 ** external {"root":"PropTypes","commonjs2":"prop-types","commonjs":"prop-types","amd":"prop-types"}
 ** module id = 3
 ** module chunks = 0
 **/
//# sourceURL=webpack:///external_%7B%22root%22:%22PropTypes%22,%22commonjs2%22:%22prop-types%22,%22commonjs%22:%22prop-types%22,%22amd%22:%22prop-types%22%7D?`)},function(module,exports){eval(`module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/*****************
 ** WEBPACK FOOTER
 ** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
 ** module id = 4
 ** module chunks = 0
 **/
//# sourceURL=webpack:///external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?`)},function(module,exports){eval(`module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/*****************
 ** WEBPACK FOOTER
 ** external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
 ** module id = 5
 ** module chunks = 0
 **/
//# sourceURL=webpack:///external_%7B%22root%22:%22ReactDOM%22,%22commonjs2%22:%22react-dom%22,%22commonjs%22:%22react-dom%22,%22amd%22:%22react-dom%22%7D?`)}])})})(OwlCarousel$2);const ReactOwlCarousel=getDefaultExportFromCjs(OwlCarouselExports);class OwlCarousel extends React.Component{shouldComponentUpdate(e){return JSON.stringify(this.props.content.cms)!==JSON.stringify(e.content.cms)}render(){const{children:e,...n}=this.props;return jsx(ReactOwlCarousel,{...n,children:e})}}const mapStateToProps$1=t=>({...t}),OwlCarousel$1=connect(mapStateToProps$1)(OwlCarousel),Card$1="",Card=({title:t,addon:e,value:n,color:r})=>jsx("div",{className:"col",children:jsxs("div",{className:"Card",children:[jsx("div",{className:"title text-truncate",children:t}),jsx("div",{className:"line bg-"+r}),jsxs("div",{className:"d-flex align-items-end",children:[jsx("div",{children:n}),jsx("div",{className:"ml-auto",children:e})]})]})});var _globalExports={},_global={get exports(){return _globalExports},set exports(t){_globalExports=t}},global$6=_global.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=global$6);var _coreExports={},_core={get exports(){return _coreExports},set exports(t){_coreExports=t}},core$2=_core.exports={version:"2.6.12"};typeof __e=="number"&&(__e=core$2);var _objectDp={},_isObject=function(t){return typeof t=="object"?t!==null:typeof t=="function"},isObject$e=_isObject,_anObject=function(t){if(!isObject$e(t))throw TypeError(t+" is not an object!");return t},_fails=function(t){try{return!!t()}catch{return!0}},_descriptors=!_fails(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7}),_domCreate,hasRequired_domCreate;function require_domCreate(){if(hasRequired_domCreate)return _domCreate;hasRequired_domCreate=1;var t=_isObject,e=_globalExports.document,n=t(e)&&t(e.createElement);return _domCreate=function(r){return n?e.createElement(r):{}},_domCreate}var _ie8DomDefine=!_descriptors&&!_fails(function(){return Object.defineProperty(require_domCreate()("div"),"a",{get:function(){return 7}}).a!=7}),isObject$d=_isObject,_toPrimitive=function(t,e){if(!isObject$d(t))return t;var n,r;if(e&&typeof(n=t.toString)=="function"&&!isObject$d(r=n.call(t))||typeof(n=t.valueOf)=="function"&&!isObject$d(r=n.call(t))||!e&&typeof(n=t.toString)=="function"&&!isObject$d(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},anObject$1=_anObject,IE8_DOM_DEFINE$1=_ie8DomDefine,toPrimitive$2=_toPrimitive,dP$2=Object.defineProperty;_objectDp.f=_descriptors?Object.defineProperty:function t(e,n,r){if(anObject$1(e),n=toPrimitive$2(n,!0),anObject$1(r),IE8_DOM_DEFINE$1)try{return dP$2(e,n,r)}catch{}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[n]=r.value),e};var _propertyDesc=function(t,e){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:e}},dP$1=_objectDp,createDesc$1=_propertyDesc,_hide=_descriptors?function(t,e,n){return dP$1.f(t,e,createDesc$1(1,n))}:function(t,e,n){return t[e]=n,t},_redefineExports={},_redefine={get exports(){return _redefineExports},set exports(t){_redefineExports=t}},hasOwnProperty$9={}.hasOwnProperty,_has=function(t,e){return hasOwnProperty$9.call(t,e)},id$1=0,px=Math.random(),_uid=function(t){return"Symbol(".concat(t===void 0?"":t,")_",(++id$1+px).toString(36))},_sharedExports={},_shared={get exports(){return _sharedExports},set exports(t){_sharedExports=t}},core$1=_coreExports,global$5=_globalExports,SHARED="__core-js_shared__",store=global$5[SHARED]||(global$5[SHARED]={});(_shared.exports=function(t,e){return store[t]||(store[t]=e!==void 0?e:{})})("versions",[]).push({version:core$1.version,mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"});var _functionToString=_sharedExports("native-function-to-string",Function.toString),global$4=_globalExports,hide$1=_hide,has$3=_has,SRC=_uid("src"),$toString=_functionToString,TO_STRING="toString",TPL=(""+$toString).split(TO_STRING);_coreExports.inspectSource=function(t){return $toString.call(t)};(_redefine.exports=function(t,e,n,r){var o=typeof n=="function";o&&(has$3(n,"name")||hide$1(n,"name",e)),t[e]!==n&&(o&&(has$3(n,SRC)||hide$1(n,SRC,t[e]?""+t[e]:TPL.join(String(e)))),t===global$4?t[e]=n:r?t[e]?t[e]=n:hide$1(t,e,n):(delete t[e],hide$1(t,e,n)))})(Function.prototype,TO_STRING,function t(){return typeof this=="function"&&this[SRC]||$toString.call(this)});var _aFunction=function(t){if(typeof t!="function")throw TypeError(t+" is not a function!");return t},aFunction=_aFunction,_ctx=function(t,e,n){if(aFunction(t),e===void 0)return t;switch(n){case 1:return function(r){return t.call(e,r)};case 2:return function(r,o){return t.call(e,r,o)};case 3:return function(r,o,p){return t.call(e,r,o,p)}}return function(){return t.apply(e,arguments)}},global$3=_globalExports,core=_coreExports,hide=_hide,redefine=_redefineExports,ctx=_ctx,PROTOTYPE="prototype",$export$t=function(t,e,n){var r=t&$export$t.F,o=t&$export$t.G,p=t&$export$t.S,u=t&$export$t.P,l=t&$export$t.B,f=o?global$3:p?global$3[e]||(global$3[e]={}):(global$3[e]||{})[PROTOTYPE],h=o?core:core[e]||(core[e]={}),d=h[PROTOTYPE]||(h[PROTOTYPE]={}),m,v,_,T;o&&(n=e);for(m in n)v=!r&&f&&f[m]!==void 0,_=(v?f:n)[m],T=l&&v?ctx(_,global$3):u&&typeof _=="function"?ctx(Function.call,_):_,f&&redefine(f,m,_,t&$export$t.U),h[m]!=_&&hide(h,m,T),u&&d[m]!=_&&(d[m]=_)};global$3.core=core;$export$t.F=1;$export$t.G=2;$export$t.S=4;$export$t.P=8;$export$t.B=16;$export$t.W=32;$export$t.U=64;$export$t.R=128;var _export=$export$t,_mathLog1p=Math.log1p||function t(e){return(e=+e)>-1e-8&&e<1e-8?e-e*e/2:Math.log(1+e)},$export$s=_export,log1p=_mathLog1p,sqrt$1=Math.sqrt,$acosh=Math.acosh;$export$s($export$s.S+$export$s.F*!($acosh&&Math.floor($acosh(Number.MAX_VALUE))==710&&$acosh(1/0)==1/0),"Math",{acosh:function t(e){return(e=+e)<1?NaN:e>9490626562425156e-8?Math.log(e)+Math.LN2:log1p(e-1+sqrt$1(e-1)*sqrt$1(e+1))}});var $export$r=_export,$asinh=Math.asinh;function asinh(t){return!isFinite(t=+t)||t==0?t:t<0?-asinh(-t):Math.log(t+Math.sqrt(t*t+1))}$export$r($export$r.S+$export$r.F*!($asinh&&1/$asinh(0)>0),"Math",{asinh});var $export$q=_export,$atanh=Math.atanh;$export$q($export$q.S+$export$q.F*!($atanh&&1/$atanh(-0)<0),"Math",{atanh:function t(e){return(e=+e)==0?e:Math.log((1+e)/(1-e))/2}});var _mathSign=Math.sign||function t(e){return(e=+e)==0||e!=e?e:e<0?-1:1},$export$p=_export,sign$1=_mathSign;$export$p($export$p.S,"Math",{cbrt:function t(e){return sign$1(e=+e)*Math.pow(Math.abs(e),1/3)}});var $export$o=_export;$export$o($export$o.S,"Math",{clz32:function t(e){return(e>>>=0)?31-Math.floor(Math.log(e+.5)*Math.LOG2E):32}});var $export$n=_export,exp$3=Math.exp;$export$n($export$n.S,"Math",{cosh:function t(e){return(exp$3(e=+e)+exp$3(-e))/2}});var $expm1$1=Math.expm1,_mathExpm1=!$expm1$1||$expm1$1(10)>22025.465794806718||$expm1$1(10)<22025.465794806718||$expm1$1(-2e-17)!=-2e-17?function t(e){return(e=+e)==0?e:e>-1e-6&&e<1e-6?e+e*e/2:Math.exp(e)-1}:$expm1$1,$export$m=_export,$expm1=_mathExpm1;$export$m($export$m.S+$export$m.F*($expm1!=Math.expm1),"Math",{expm1:$expm1});var _mathFround,hasRequired_mathFround;function require_mathFround(){if(hasRequired_mathFround)return _mathFround;hasRequired_mathFround=1;var t=_mathSign,e=Math.pow,n=e(2,-52),r=e(2,-23),o=e(2,127)*(2-r),p=e(2,-126),u=function(l){return l+1/n-1/n};return _mathFround=Math.fround||function(f){var h=Math.abs(f),d=t(f),m,v;return h<p?d*u(h/p/r)*p*r:(m=(1+r/n)*h,v=m-(m-h),v>o||v!=v?d*(1/0):d*v)},_mathFround}var $export$l=_export;$export$l($export$l.S,"Math",{fround:require_mathFround()});var $export$k=_export,abs$1=Math.abs;$export$k($export$k.S,"Math",{hypot:function t(e,n){for(var r=0,o=0,p=arguments.length,u=0,l,f;o<p;)l=abs$1(arguments[o++]),u<l?(f=u/l,r=r*f*f+1,u=l):l>0?(f=l/u,r+=f*f):r+=l;return u===1/0?1/0:u*Math.sqrt(r)}});var $export$j=_export,$imul=Math.imul;$export$j($export$j.S+$export$j.F*_fails(function(){return $imul(4294967295,5)!=-5||$imul.length!=2}),"Math",{imul:function t(e,n){var r=65535,o=+e,p=+n,u=r&o,l=r&p;return 0|u*l+((r&o>>>16)*l+u*(r&p>>>16)<<16>>>0)}});var $export$i=_export;$export$i($export$i.S,"Math",{log10:function t(e){return Math.log(e)*Math.LOG10E}});var $export$h=_export;$export$h($export$h.S,"Math",{log1p:_mathLog1p});var $export$g=_export;$export$g($export$g.S,"Math",{log2:function t(e){return Math.log(e)/Math.LN2}});var $export$f=_export;$export$f($export$f.S,"Math",{sign:_mathSign});var $export$e=_export,expm1$1=_mathExpm1,exp$2=Math.exp;$export$e($export$e.S+$export$e.F*_fails(function(){return!Math.sinh(-2e-17)!=-2e-17}),"Math",{sinh:function t(e){return Math.abs(e=+e)<1?(expm1$1(e)-expm1$1(-e))/2:(exp$2(e-1)-exp$2(-e-1))*(Math.E/2)}});var $export$d=_export,expm1=_mathExpm1,exp$1=Math.exp;$export$d($export$d.S,"Math",{tanh:function t(e){var n=expm1(e=+e),r=expm1(-e);return n==1/0?1:r==1/0?-1:(n-r)/(exp$1(e)+exp$1(-e))}});var $export$c=_export;$export$c($export$c.S,"Math",{trunc:function t(e){return(e>0?Math.floor:Math.ceil)(e)}});_coreExports.Math;var toString$3={}.toString,_cof=function(t){return toString$3.call(t).slice(8,-1)},_objectGopd={},_objectPie={};_objectPie.f={}.propertyIsEnumerable;var cof$2=_cof,_iobject=Object("z").propertyIsEnumerable(0)?Object:function(t){return cof$2(t)=="String"?t.split(""):Object(t)},_defined=function(t){if(t==null)throw TypeError("Can't call method on  "+t);return t},IObject=_iobject,defined$3=_defined,_toIobject=function(t){return IObject(defined$3(t))},pIE=_objectPie,createDesc=_propertyDesc,toIObject$2=_toIobject,toPrimitive$1=_toPrimitive,has$2=_has,IE8_DOM_DEFINE=_ie8DomDefine,gOPD$1=Object.getOwnPropertyDescriptor;_objectGopd.f=_descriptors?gOPD$1:function t(e,n){if(e=toIObject$2(e),n=toPrimitive$1(n,!0),IE8_DOM_DEFINE)try{return gOPD$1(e,n)}catch{}if(has$2(e,n))return createDesc(!pIE.f.call(e,n),e[n])};var isObject$c=_isObject,anObject=_anObject,check=function(t,e){if(anObject(t),!isObject$c(e)&&e!==null)throw TypeError(e+": can't set as prototype!")},_setProto={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=_ctx(Function.call,_objectGopd.f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch{e=!0}return function(o,p){return check(o,p),e?o.__proto__=p:n(o,p),o}}({},!1):void 0),check},isObject$b=_isObject,setPrototypeOf=_setProto.set,_inheritIfRequired=function(t,e,n){var r=e.constructor,o;return r!==n&&typeof r=="function"&&(o=r.prototype)!==n.prototype&&isObject$b(o)&&setPrototypeOf&&setPrototypeOf(t,o),t},_objectGopn={},ceil=Math.ceil,floor$2=Math.floor,_toInteger=function(t){return isNaN(t=+t)?0:(t>0?floor$2:ceil)(t)},toInteger$5=_toInteger,min$2=Math.min,_toLength=function(t){return t>0?min$2(toInteger$5(t),9007199254740991):0},toInteger$4=_toInteger,max$1=Math.max,min$1=Math.min,_toAbsoluteIndex=function(t,e){return t=toInteger$4(t),t<0?max$1(t+e,0):min$1(t,e)},toIObject$1=_toIobject,toLength=_toLength,toAbsoluteIndex=_toAbsoluteIndex,_arrayIncludes$1=function(t){return function(e,n,r){var o=toIObject$1(e),p=toLength(o.length),u=toAbsoluteIndex(r,p),l;if(t&&n!=n){for(;p>u;)if(l=o[u++],l!=l)return!0}else for(;p>u;u++)if((t||u in o)&&o[u]===n)return t||u||0;return!t&&-1}},shared=_sharedExports("keys"),uid=_uid,_sharedKey=function(t){return shared[t]||(shared[t]=uid(t))},has$1=_has,toIObject=_toIobject,arrayIndexOf=_arrayIncludes$1(!1),IE_PROTO=_sharedKey("IE_PROTO"),_objectKeysInternal=function(t,e){var n=toIObject(t),r=0,o=[],p;for(p in n)p!=IE_PROTO&&has$1(n,p)&&o.push(p);for(;e.length>r;)has$1(n,p=e[r++])&&(~arrayIndexOf(o,p)||o.push(p));return o},_enumBugKeys="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),$keys=_objectKeysInternal,hiddenKeys=_enumBugKeys.concat("length","prototype");_objectGopn.f=Object.getOwnPropertyNames||function t(e){return $keys(e,hiddenKeys)};var _stringWs=`	
\v\f\r   ᠎             　\u2028\u2029\uFEFF`,$export$b=_export,defined$2=_defined,fails$1=_fails,spaces=_stringWs,space="["+spaces+"]",non="​",ltrim=RegExp("^"+space+space+"*"),rtrim=RegExp(space+space+"*$"),exporter=function(t,e,n){var r={},o=fails$1(function(){return!!spaces[t]()||non[t]()!=non}),p=r[t]=o?e(trim):spaces[t];n&&(r[n]=p),$export$b($export$b.P+$export$b.F*o,"String",r)},trim=exporter.trim=function(t,e){return t=String(defined$2(t)),e&1&&(t=t.replace(ltrim,"")),e&2&&(t=t.replace(rtrim,"")),t},_stringTrim=exporter,_objectKeys,hasRequired_objectKeys;function require_objectKeys(){if(hasRequired_objectKeys)return _objectKeys;hasRequired_objectKeys=1;var t=_objectKeysInternal,e=_enumBugKeys;return _objectKeys=Object.keys||function(r){return t(r,e)},_objectKeys}var _objectDps,hasRequired_objectDps;function require_objectDps(){if(hasRequired_objectDps)return _objectDps;hasRequired_objectDps=1;var t=_objectDp,e=_anObject,n=require_objectKeys();return _objectDps=_descriptors?Object.defineProperties:function(o,p){e(o);for(var u=n(p),l=u.length,f=0,h;l>f;)t.f(o,h=u[f++],p[h]);return o},_objectDps}var _html,hasRequired_html;function require_html(){if(hasRequired_html)return _html;hasRequired_html=1;var t=_globalExports.document;return _html=t&&t.documentElement,_html}var _objectCreate,hasRequired_objectCreate;function require_objectCreate(){if(hasRequired_objectCreate)return _objectCreate;hasRequired_objectCreate=1;var t=_anObject,e=require_objectDps(),n=_enumBugKeys,r=_sharedKey("IE_PROTO"),o=function(){},p="prototype",u=function(){var l=require_domCreate()("iframe"),f=n.length,h="<",d=">",m;for(l.style.display="none",require_html().appendChild(l),l.src="javascript:",m=l.contentWindow.document,m.open(),m.write(h+"script"+d+"document.F=Object"+h+"/script"+d),m.close(),u=m.F;f--;)delete u[p][n[f]];return u()};return _objectCreate=Object.create||function(f,h){var d;return f!==null?(o[p]=t(f),d=new o,o[p]=null,d[r]=f):d=u(),h===void 0?d:e(d,h)},_objectCreate}var global$2=_globalExports,has=_has,cof$1=_cof,inheritIfRequired=_inheritIfRequired,toPrimitive=_toPrimitive,fails=_fails,gOPN=_objectGopn.f,gOPD=_objectGopd.f,dP=_objectDp.f,$trim$2=_stringTrim.trim,NUMBER="Number",$Number=global$2[NUMBER],Base=$Number,proto$1=$Number.prototype,BROKEN_COF=cof$1(require_objectCreate()(proto$1))==NUMBER,TRIM="trim"in String.prototype,toNumber$5=function(t){var e=toPrimitive(t,!1);if(typeof e=="string"&&e.length>2){e=TRIM?e.trim():$trim$2(e,3);var n=e.charCodeAt(0),r,o,p;if(n===43||n===45){if(r=e.charCodeAt(2),r===88||r===120)return NaN}else if(n===48){switch(e.charCodeAt(1)){case 66:case 98:o=2,p=49;break;case 79:case 111:o=8,p=55;break;default:return+e}for(var u=e.slice(2),l=0,f=u.length,h;l<f;l++)if(h=u.charCodeAt(l),h<48||h>p)return NaN;return parseInt(u,o)}}return+e};if(!$Number(" 0o1")||!$Number("0b1")||$Number("+0x1")){$Number=function(e){var n=arguments.length<1?0:e,r=this;return r instanceof $Number&&(BROKEN_COF?fails(function(){proto$1.valueOf.call(r)}):cof$1(r)!=NUMBER)?inheritIfRequired(new Base(toNumber$5(n)),r,$Number):toNumber$5(n)};for(var keys$5=_descriptors?gOPN(Base):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0,key;keys$5.length>j;j++)has(Base,key=keys$5[j])&&!has($Number,key)&&dP($Number,key,gOPD(Base,key));$Number.prototype=proto$1,proto$1.constructor=$Number,_redefineExports(global$2,NUMBER,$Number)}var cof=_cof,_aNumberValue=function(t,e){if(typeof t!="number"&&cof(t)!="Number")throw TypeError(e);return+t},toInteger$3=_toInteger,defined$1=_defined,_stringRepeat=function t(e){var n=String(defined$1(this)),r="",o=toInteger$3(e);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))o&1&&(r+=n);return r},$export$a=_export,toInteger$2=_toInteger,aNumberValue$1=_aNumberValue,repeat=_stringRepeat,$toFixed=1 .toFixed,floor$1=Math.floor,data=[0,0,0,0,0,0],ERROR="Number.toFixed: incorrect invocation!",ZERO="0",multiply=function(t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=floor$1(r/1e7)},divide$1=function(t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=floor$1(n/t),n=n%t*1e7},numToString=function(){for(var t=6,e="";--t>=0;)if(e!==""||t===0||data[t]!==0){var n=String(data[t]);e=e===""?n:e+repeat.call(ZERO,7-n.length)+n}return e},pow$1=function(t,e,n){return e===0?n:e%2===1?pow$1(t,e-1,n*t):pow$1(t*t,e/2,n)},log$1=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e};$export$a($export$a.P+$export$a.F*(!!$toFixed&&(8e-5 .toFixed(3)!=="0.000"||.9 .toFixed(0)!=="1"||1.255 .toFixed(2)!=="1.25"||0xde0b6b3a7640080 .toFixed(0)!=="1000000000000000128")||!_fails(function(){$toFixed.call({})})),"Number",{toFixed:function t(e){var n=aNumberValue$1(this,ERROR),r=toInteger$2(e),o="",p=ZERO,u,l,f,h;if(r<0||r>20)throw RangeError(ERROR);if(n!=n)return"NaN";if(n<=-1e21||n>=1e21)return String(n);if(n<0&&(o="-",n=-n),n>1e-21)if(u=log$1(n*pow$1(2,69,1))-69,l=u<0?n*pow$1(2,-u,1):n/pow$1(2,u,1),l*=4503599627370496,u=52-u,u>0){for(multiply(0,l),f=r;f>=7;)multiply(1e7,0),f-=7;for(multiply(pow$1(10,f,1),0),f=u-1;f>=23;)divide$1(1<<23),f-=23;divide$1(1<<f),multiply(1,1),divide$1(2),p=numToString()}else multiply(0,l),multiply(1<<-u,0),p=numToString()+repeat.call(ZERO,r);return r>0?(h=p.length,p=o+(h<=r?"0."+repeat.call(ZERO,r-h)+p:p.slice(0,h-r)+"."+p.slice(h-r))):p=o+p,p}});var $export$9=_export,$fails=_fails,aNumberValue=_aNumberValue,$toPrecision=1 .toPrecision;$export$9($export$9.P+$export$9.F*($fails(function(){return $toPrecision.call(1,void 0)!=="1"})||!$fails(function(){$toPrecision.call({})})),"Number",{toPrecision:function t(e){var n=aNumberValue(this,"Number#toPrecision: incorrect invocation!");return e===void 0?$toPrecision.call(n):$toPrecision.call(n,e)}});var $export$8=_export;$export$8($export$8.S,"Number",{EPSILON:Math.pow(2,-52)});var $export$7=_export,_isFinite=_globalExports.isFinite;$export$7($export$7.S,"Number",{isFinite:function t(e){return typeof e=="number"&&_isFinite(e)}});var isObject$a=_isObject,floor=Math.floor,_isInteger=function t(e){return!isObject$a(e)&&isFinite(e)&&floor(e)===e},$export$6=_export;$export$6($export$6.S,"Number",{isInteger:_isInteger});var $export$5=_export;$export$5($export$5.S,"Number",{isNaN:function t(e){return e!=e}});var $export$4=_export,isInteger=_isInteger,abs=Math.abs;$export$4($export$4.S,"Number",{isSafeInteger:function t(e){return isInteger(e)&&abs(e)<=9007199254740991}});var $export$3=_export;$export$3($export$3.S,"Number",{MAX_SAFE_INTEGER:9007199254740991});var $export$2=_export;$export$2($export$2.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991});var $parseFloat$1=_globalExports.parseFloat,$trim$1=_stringTrim.trim,_parseFloat=1/$parseFloat$1(_stringWs+"-0")!==-1/0?function t(e){var n=$trim$1(String(e),3),r=$parseFloat$1(n);return r===0&&n.charAt(0)=="-"?-0:r}:$parseFloat$1,$export$1=_export,$parseFloat=_parseFloat;$export$1($export$1.S+$export$1.F*(Number.parseFloat!=$parseFloat),"Number",{parseFloat:$parseFloat});var $parseInt$1=_globalExports.parseInt,$trim=_stringTrim.trim,ws=_stringWs,hex$1=/^[-+]?0[xX]/,_parseInt=$parseInt$1(ws+"08")!==8||$parseInt$1(ws+"0x16")!==22?function t(e,n){var r=$trim(String(e),3);return $parseInt$1(r,n>>>0||(hex$1.test(r)?16:10))}:$parseInt$1,$export=_export,$parseInt=_parseInt;$export($export.S+$export.F*(Number.parseInt!=$parseInt),"Number",{parseInt:$parseInt});_coreExports.Number;var testObject={};if(!(Object.setPrototypeOf||testObject.__proto__)){var nativeGetPrototypeOf=Object.getPrototypeOf;Object.getPrototypeOf=function(t){return t.__proto__?t.__proto__:nativeGetPrototypeOf.call(Object,t)}}function isNil(t){return t==null}var isNil_1=isNil,freeGlobal$3=typeof commonjsGlobal=="object"&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,_freeGlobal=freeGlobal$3,freeGlobal$2=_freeGlobal,freeSelf$2=typeof self=="object"&&self&&self.Object===Object&&self,root$c=freeGlobal$2||freeSelf$2||Function("return this")(),_root=root$c,root$b=_root,Symbol$6=root$b.Symbol,_Symbol=Symbol$6,Symbol$5=_Symbol,objectProto$d=Object.prototype,hasOwnProperty$8=objectProto$d.hasOwnProperty,nativeObjectToString$1=objectProto$d.toString,symToStringTag$1=Symbol$5?Symbol$5.toStringTag:void 0;function getRawTag$1(t){var e=hasOwnProperty$8.call(t,symToStringTag$1),n=t[symToStringTag$1];try{t[symToStringTag$1]=void 0;var r=!0}catch{}var o=nativeObjectToString$1.call(t);return r&&(e?t[symToStringTag$1]=n:delete t[symToStringTag$1]),o}var _getRawTag=getRawTag$1,objectProto$c=Object.prototype,nativeObjectToString=objectProto$c.toString;function objectToString$3(t){return nativeObjectToString.call(t)}var _objectToString=objectToString$3,Symbol$4=_Symbol,getRawTag=_getRawTag,objectToString$2=_objectToString,nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol$4?Symbol$4.toStringTag:void 0;function baseGetTag$7(t){return t==null?t===void 0?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(t)?getRawTag(t):objectToString$2(t)}var _baseGetTag=baseGetTag$7,isArray$f=Array.isArray,isArray_1=isArray$f;function isObjectLike$a(t){return t!=null&&typeof t=="object"}var isObjectLike_1=isObjectLike$a,baseGetTag$6=_baseGetTag,isArray$e=isArray_1,isObjectLike$9=isObjectLike_1,stringTag$2="[object String]";function isString(t){return typeof t=="string"||!isArray$e(t)&&isObjectLike$9(t)&&baseGetTag$6(t)==stringTag$2}var isString_1=isString;function isObject$9(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var isObject_1=isObject$9,baseGetTag$5=_baseGetTag,isObject$8=isObject_1,asyncTag="[object AsyncFunction]",funcTag$1="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";function isFunction$2(t){if(!isObject$8(t))return!1;var e=baseGetTag$5(t);return e==funcTag$1||e==genTag||e==asyncTag||e==proxyTag}var isFunction_1=isFunction$2,baseGetTag$4=_baseGetTag,isObjectLike$8=isObjectLike_1,symbolTag$3="[object Symbol]";function isSymbol$8(t){return typeof t=="symbol"||isObjectLike$8(t)&&baseGetTag$4(t)==symbolTag$3}var isSymbol_1=isSymbol$8,isArray$d=isArray_1,isSymbol$7=isSymbol_1,reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;function isKey$3(t,e){if(isArray$d(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||isSymbol$7(t)?!0:reIsPlainProp.test(t)||!reIsDeepProp.test(t)||e!=null&&t in Object(e)}var _isKey=isKey$3,root$a=_root,coreJsData$1=root$a["__core-js_shared__"],_coreJsData=coreJsData$1,coreJsData=_coreJsData,maskSrcKey=function(){var t=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function isMasked$1(t){return!!maskSrcKey&&maskSrcKey in t}var _isMasked=isMasked$1,funcProto$1=Function.prototype,funcToString$1=funcProto$1.toString;function toSource$2(t){if(t!=null){try{return funcToString$1.call(t)}catch{}try{return t+""}catch{}}return""}var _toSource=toSource$2,isFunction$1=isFunction_1,isMasked=_isMasked,isObject$7=isObject_1,toSource$1=_toSource,reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto=Function.prototype,objectProto$b=Object.prototype,funcToString=funcProto.toString,hasOwnProperty$7=objectProto$b.hasOwnProperty,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty$7).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function baseIsNative$1(t){if(!isObject$7(t)||isMasked(t))return!1;var e=isFunction$1(t)?reIsNative:reIsHostCtor;return e.test(toSource$1(t))}var _baseIsNative=baseIsNative$1;function getValue$1(t,e){return t==null?void 0:t[e]}var _getValue=getValue$1,baseIsNative=_baseIsNative,getValue=_getValue;function getNative$7(t,e){var n=getValue(t,e);return baseIsNative(n)?n:void 0}var _getNative=getNative$7,getNative$6=_getNative,nativeCreate$4=getNative$6(Object,"create"),_nativeCreate=nativeCreate$4,nativeCreate$3=_nativeCreate;function hashClear$1(){this.__data__=nativeCreate$3?nativeCreate$3(null):{},this.size=0}var _hashClear=hashClear$1;function hashDelete$1(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var _hashDelete=hashDelete$1,nativeCreate$2=_nativeCreate,HASH_UNDEFINED$2="__lodash_hash_undefined__",objectProto$a=Object.prototype,hasOwnProperty$6=objectProto$a.hasOwnProperty;function hashGet$1(t){var e=this.__data__;if(nativeCreate$2){var n=e[t];return n===HASH_UNDEFINED$2?void 0:n}return hasOwnProperty$6.call(e,t)?e[t]:void 0}var _hashGet=hashGet$1,nativeCreate$1=_nativeCreate,objectProto$9=Object.prototype,hasOwnProperty$5=objectProto$9.hasOwnProperty;function hashHas$1(t){var e=this.__data__;return nativeCreate$1?e[t]!==void 0:hasOwnProperty$5.call(e,t)}var _hashHas=hashHas$1,nativeCreate=_nativeCreate,HASH_UNDEFINED$1="__lodash_hash_undefined__";function hashSet$1(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=nativeCreate&&e===void 0?HASH_UNDEFINED$1:e,this}var _hashSet=hashSet$1,hashClear=_hashClear,hashDelete=_hashDelete,hashGet=_hashGet,hashHas=_hashHas,hashSet=_hashSet;function Hash$1(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Hash$1.prototype.clear=hashClear;Hash$1.prototype.delete=hashDelete;Hash$1.prototype.get=hashGet;Hash$1.prototype.has=hashHas;Hash$1.prototype.set=hashSet;var _Hash=Hash$1;function listCacheClear$1(){this.__data__=[],this.size=0}var _listCacheClear=listCacheClear$1;function eq$3(t,e){return t===e||t!==t&&e!==e}var eq_1=eq$3,eq$2=eq_1;function assocIndexOf$4(t,e){for(var n=t.length;n--;)if(eq$2(t[n][0],e))return n;return-1}var _assocIndexOf=assocIndexOf$4,assocIndexOf$3=_assocIndexOf,arrayProto=Array.prototype,splice=arrayProto.splice;function listCacheDelete$1(t){var e=this.__data__,n=assocIndexOf$3(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():splice.call(e,n,1),--this.size,!0}var _listCacheDelete=listCacheDelete$1,assocIndexOf$2=_assocIndexOf;function listCacheGet$1(t){var e=this.__data__,n=assocIndexOf$2(e,t);return n<0?void 0:e[n][1]}var _listCacheGet=listCacheGet$1,assocIndexOf$1=_assocIndexOf;function listCacheHas$1(t){return assocIndexOf$1(this.__data__,t)>-1}var _listCacheHas=listCacheHas$1,assocIndexOf=_assocIndexOf;function listCacheSet$1(t,e){var n=this.__data__,r=assocIndexOf(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var _listCacheSet=listCacheSet$1,listCacheClear=_listCacheClear,listCacheDelete=_listCacheDelete,listCacheGet=_listCacheGet,listCacheHas=_listCacheHas,listCacheSet=_listCacheSet;function ListCache$4(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ListCache$4.prototype.clear=listCacheClear;ListCache$4.prototype.delete=listCacheDelete;ListCache$4.prototype.get=listCacheGet;ListCache$4.prototype.has=listCacheHas;ListCache$4.prototype.set=listCacheSet;var _ListCache=ListCache$4,getNative$5=_getNative,root$9=_root,Map$5=getNative$5(root$9,"Map"),_Map=Map$5,Hash=_Hash,ListCache$3=_ListCache,Map$4=_Map;function mapCacheClear$1(){this.size=0,this.__data__={hash:new Hash,map:new(Map$4||ListCache$3),string:new Hash}}var _mapCacheClear=mapCacheClear$1;function isKeyable$1(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var _isKeyable=isKeyable$1,isKeyable=_isKeyable;function getMapData$4(t,e){var n=t.__data__;return isKeyable(e)?n[typeof e=="string"?"string":"hash"]:n.map}var _getMapData=getMapData$4,getMapData$3=_getMapData;function mapCacheDelete$1(t){var e=getMapData$3(this,t).delete(t);return this.size-=e?1:0,e}var _mapCacheDelete=mapCacheDelete$1,getMapData$2=_getMapData;function mapCacheGet$1(t){return getMapData$2(this,t).get(t)}var _mapCacheGet=mapCacheGet$1,getMapData$1=_getMapData;function mapCacheHas$1(t){return getMapData$1(this,t).has(t)}var _mapCacheHas=mapCacheHas$1,getMapData=_getMapData;function mapCacheSet$1(t,e){var n=getMapData(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var _mapCacheSet=mapCacheSet$1,mapCacheClear=_mapCacheClear,mapCacheDelete=_mapCacheDelete,mapCacheGet=_mapCacheGet,mapCacheHas=_mapCacheHas,mapCacheSet=_mapCacheSet;function MapCache$3(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}MapCache$3.prototype.clear=mapCacheClear;MapCache$3.prototype.delete=mapCacheDelete;MapCache$3.prototype.get=mapCacheGet;MapCache$3.prototype.has=mapCacheHas;MapCache$3.prototype.set=mapCacheSet;var _MapCache=MapCache$3,MapCache$2=_MapCache,FUNC_ERROR_TEXT$4="Expected a function";function memoize$2(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(FUNC_ERROR_TEXT$4);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],p=n.cache;if(p.has(o))return p.get(o);var u=t.apply(this,r);return n.cache=p.set(o,u)||p,u};return n.cache=new(memoize$2.Cache||MapCache$2),n}memoize$2.Cache=MapCache$2;var memoize_1=memoize$2,memoize$1=memoize_1,MAX_MEMOIZE_SIZE=500;function memoizeCapped$1(t){var e=memoize$1(t,function(r){return n.size===MAX_MEMOIZE_SIZE&&n.clear(),r}),n=e.cache;return e}var _memoizeCapped=memoizeCapped$1,memoizeCapped=_memoizeCapped,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reEscapeChar=/\\(\\)?/g,stringToPath$1=memoizeCapped(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(rePropName,function(n,r,o,p){e.push(o?p.replace(reEscapeChar,"$1"):r||n)}),e}),_stringToPath=stringToPath$1;function arrayMap$5(t,e){for(var n=-1,r=t==null?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}var _arrayMap=arrayMap$5,Symbol$3=_Symbol,arrayMap$4=_arrayMap,isArray$c=isArray_1,isSymbol$6=isSymbol_1,INFINITY$3=1/0,symbolProto$1=Symbol$3?Symbol$3.prototype:void 0,symbolToString=symbolProto$1?symbolProto$1.toString:void 0;function baseToString$1(t){if(typeof t=="string")return t;if(isArray$c(t))return arrayMap$4(t,baseToString$1)+"";if(isSymbol$6(t))return symbolToString?symbolToString.call(t):"";var e=t+"";return e=="0"&&1/t==-INFINITY$3?"-0":e}var _baseToString=baseToString$1,baseToString=_baseToString;function toString$2(t){return t==null?"":baseToString(t)}var toString_1=toString$2,isArray$b=isArray_1,isKey$2=_isKey,stringToPath=_stringToPath,toString$1=toString_1;function castPath$2(t,e){return isArray$b(t)?t:isKey$2(t,e)?[t]:stringToPath(toString$1(t))}var _castPath=castPath$2,isSymbol$5=isSymbol_1,INFINITY$2=1/0;function toKey$4(t){if(typeof t=="string"||isSymbol$5(t))return t;var e=t+"";return e=="0"&&1/t==-INFINITY$2?"-0":e}var _toKey=toKey$4,castPath$1=_castPath,toKey$3=_toKey;function baseGet$3(t,e){e=castPath$1(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[toKey$3(e[n++])];return n&&n==r?t:void 0}var _baseGet=baseGet$3,baseGet$2=_baseGet;function get$1(t,e,n){var r=t==null?void 0:baseGet$2(t,e);return r===void 0?n:r}var get_1=get$1,baseGetTag$3=_baseGetTag,isObjectLike$7=isObjectLike_1,numberTag$2="[object Number]";function isNumber$2(t){return typeof t=="number"||isObjectLike$7(t)&&baseGetTag$3(t)==numberTag$2}var isNumber_1=isNumber$2,isNumber$1=isNumber_1;function isNaN$1(t){return isNumber$1(t)&&t!=+t}var _isNaN=isNaN$1,mathSign=function t(e){return e===0?0:e>0?1:-1},isPercent=function t(e){return isString_1(e)&&e.indexOf("%")===e.length-1},isNumber=function t(e){return isNumber_1(e)&&!_isNaN(e)},isNumOrStr=function t(e){return isNumber(e)||isString_1(e)},idCounter=0,uniqueId=function t(e){var n=++idCounter;return"".concat(e||"").concat(n)},getPercentValue=function t(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!isNumber(e)&&!isString_1(e))return r;var p;if(isPercent(e)){var u=e.indexOf("%");p=n*parseFloat(e.slice(0,u))/100}else p=+e;return _isNaN(p)&&(p=r),o&&p>n&&(p=n),p},getAnyElementOfObject=function t(e){if(!e)return null;var n=Object.keys(e);return n&&n.length?e[n[0]]:null},hasDuplicate=function t(e){if(!isArray_1(e))return!1;for(var n=e.length,r={},o=0;o<n;o++)if(!r[e[o]])r[e[o]]=!0;else return!0;return!1},interpolateNumber$2=function t(e,n){return isNumber(e)&&isNumber(n)?function(r){return e+r*(n-e)}:function(){return n}},findEntryInArray=function t(e,n,r){return!e||!e.length?null:e.find(function(o){return o&&(typeof n=="function"?n(o):get_1(o,n))===r})};function shallowEqual(t,e){for(var n in t)if({}.hasOwnProperty.call(t,n)&&(!{}.hasOwnProperty.call(e,n)||t[n]!==e[n]))return!1;for(var r in e)if({}.hasOwnProperty.call(e,r)&&!{}.hasOwnProperty.call(t,r))return!1;return!0}function _toConsumableArray$a(t){return _arrayWithoutHoles$a(t)||_iterableToArray$b(t)||_nonIterableSpread$a()}function _nonIterableSpread$a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray$b(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function _arrayWithoutHoles$a(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _objectWithoutProperties$9(t,e){if(t==null)return{};var n=_objectWithoutPropertiesLoose$9(t,e),r,o;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(o=0;o<p.length;o++)r=p[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _objectWithoutPropertiesLoose$9(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,p;for(p=0;p<r.length;p++)o=r[p],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}var PRESENTATION_ATTRIBUTES={"aria-current":propTypesExports.string,"aria-details":propTypesExports.any,"aria-disabled":propTypesExports.any,"aria-hidden":propTypesExports.any,"aria-invalid":propTypesExports.any,"aria-keyshortcuts":propTypesExports.any,"aria-label":propTypesExports.any,"aria-roledescription":propTypesExports.any,"aria-autocomplete":propTypesExports.any,"aria-checked":propTypesExports.any,"aria-expanded":propTypesExports.any,"aria-haspopup":propTypesExports.any,"aria-level":propTypesExports.any,"aria-modal":propTypesExports.any,"aria-multiline":propTypesExports.any,"aria-multiselectable":propTypesExports.any,"aria-orientation":propTypesExports.any,"aria-placeholder":propTypesExports.any,"aria-pressed":propTypesExports.any,"aria-readonly":propTypesExports.any,"aria-required":propTypesExports.any,"aria-selected":propTypesExports.any,"aria-sort":propTypesExports.any,"aria-valuemax":propTypesExports.any,"aria-valuemin":propTypesExports.any,"aria-valuenow":propTypesExports.any,"aria-valuetext":propTypesExports.any,"aria-atomic":propTypesExports.any,"aria-busy":propTypesExports.any,"aria-live":propTypesExports.any,"aria-relevant":propTypesExports.any,"aria-dropeffect":propTypesExports.any,"aria-grabbed":propTypesExports.any,"aria-activedescendant":propTypesExports.any,"aria-colcount":propTypesExports.any,"aria-colindex":propTypesExports.any,"aria-colspan":propTypesExports.any,"aria-controls":propTypesExports.any,"aria-describedby":propTypesExports.any,"aria-errormessage":propTypesExports.any,"aria-flowto":propTypesExports.any,"aria-labelledby":propTypesExports.any,"aria-owns":propTypesExports.any,"aria-posinset":propTypesExports.any,"aria-rowcount":propTypesExports.any,"aria-rowindex":propTypesExports.any,"aria-rowspan":propTypesExports.any,"aria-setsize":propTypesExports.any,alignmentBaseline:propTypesExports.string,angle:propTypesExports.number,baselineShift:propTypesExports.string,clip:propTypesExports.string,clipPath:propTypesExports.string,clipRule:propTypesExports.string,color:propTypesExports.string,colorInterpolation:propTypesExports.string,colorInterpolationFilters:propTypesExports.string,colorProfile:propTypesExports.string,colorRendering:propTypesExports.string,cursor:propTypesExports.string,direction:propTypesExports.oneOf(["ltr","rtl","inherit"]),display:propTypesExports.string,dominantBaseline:propTypesExports.string,enableBackground:propTypesExports.string,fill:propTypesExports.string,fillOpacity:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),fillRule:propTypesExports.oneOf(["nonzero","evenodd","inherit"]),filter:propTypesExports.string,floodColor:propTypesExports.string,floodOpacity:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),font:propTypesExports.string,fontFamily:propTypesExports.string,fontSize:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),fontSizeAdjust:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),fontStretch:propTypesExports.oneOf(["normal","wider","narrower","ultra-condensed","extra-condensed","condensed","semi-condensed","semi-expanded","expanded","extra-expanded","ultra-expanded","inherit"]),fontStyle:propTypesExports.oneOf(["normal","italic","oblique","inherit"]),fontVariant:propTypesExports.oneOf(["normal","small-caps","inherit"]),fontWeight:propTypesExports.oneOf(["normal","bold","bolder","lighter",100,200,300,400,500,600,700,800,900,"inherit"]),glyphOrientationHorizontal:propTypesExports.string,glyphOrientationVertical:propTypesExports.string,imageRendering:propTypesExports.oneOf(["auto","optimizeSpeed","optimizeQuality","inherit"]),kerning:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),letterSpacing:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),lightingColor:propTypesExports.string,lineHeight:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),markerEnd:propTypesExports.string,markerMid:propTypesExports.string,markerStart:propTypesExports.string,mask:propTypesExports.string,opacity:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),overflow:propTypesExports.oneOf(["visible","hidden","scroll","auto","inherit"]),pointerEvents:propTypesExports.oneOf(["visiblePainted","visibleFill","visibleStroke","visible","painted","fill","stroke","all","none","inherit"]),shapeRendering:propTypesExports.oneOf(["auto","optimizeSpeed","crispEdges","geometricPrecision","inherit"]),stopColor:propTypesExports.string,stopOpacity:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),stroke:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),strokeDasharray:propTypesExports.string,strokeDashoffset:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),strokeLinecap:propTypesExports.oneOf(["butt","round","square","inherit"]),strokeLinejoin:propTypesExports.oneOf(["miter","round","bevel","inherit"]),strokeMiterlimit:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),strokeOpacity:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),strokeWidth:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),textAnchor:propTypesExports.oneOf(["start","middle","end","inherit"]),textDecoration:propTypesExports.oneOf(["none","underline","overline","line-through","blink","inherit"]),textRendering:propTypesExports.oneOf(["auto","optimizeSpeed","optimizeLegibility","geometricPrecision","inherit"]),unicodeBidi:propTypesExports.oneOf(["normal","embed","bidi-override","inherit"]),visibility:propTypesExports.oneOf(["visible","hidden","collapse","inherit"]),wordSpacing:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),writingMode:propTypesExports.oneOf(["lr-tb","rl-tb","tb-rl","lr","rl","tb","inherit"]),transform:propTypesExports.string,role:propTypesExports.string,focusable:propTypesExports.string,tabIndex:propTypesExports.string,style:propTypesExports.object,width:propTypesExports.number,height:propTypesExports.number,dx:propTypesExports.number,dy:propTypesExports.number,x:propTypesExports.number,y:propTypesExports.number,r:propTypesExports.number,radius:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.array])},EVENT_ATTRIBUTES={onClick:propTypesExports.func,onMouseDown:propTypesExports.func,onMouseUp:propTypesExports.func,onMouseOver:propTypesExports.func,onMouseMove:propTypesExports.func,onMouseOut:propTypesExports.func,onMouseEnter:propTypesExports.func,onMouseLeave:propTypesExports.func,onTouchEnd:propTypesExports.func,onTouchMove:propTypesExports.func,onTouchStart:propTypesExports.func,onTouchCancel:propTypesExports.func},REACT_BROWSER_EVENT_MAP={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart"},SCALE_TYPES=["auto","linear","pow","sqrt","log","identity","time","band","point","ordinal","quantile","quantize","utc","sequential","threshold"],LEGEND_TYPES=["plainline","line","square","rect","circle","cross","diamond","star","triangle","wye","none"],TOOLTIP_TYPES=["none"],getDisplayName=function t(e){return typeof e=="string"?e:e?e.displayName||e.name||"Component":""},findAllByType=function t(e,n){var r=[],o=[];return isArray_1(n)?o=n.map(function(p){return getDisplayName(p)}):o=[getDisplayName(n)],React.Children.forEach(e,function(p){var u=p&&p.type&&(p.type.displayName||p.type.name);o.indexOf(u)!==-1&&r.push(p)}),r},findChildByType=function t(e,n){var r=findAllByType(e,n);return r&&r[0]},getPresentationAttributes=function t(e){if(!e||isFunction_1(e))return null;var n=React.isValidElement(e)?e.props:e;if(!isObject_1(n))return null;var r=null;for(var o in n)({}).hasOwnProperty.call(n,o)&&PRESENTATION_ATTRIBUTES[o]&&(r||(r={}),r[o]=n[o]);return r},getEventHandlerOfElement=function t(e,n){return function(r){return e(n,r),null}},filterEventAttributes=function t(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(!e||isFunction_1(e))return null;var o=React.isValidElement(e)?e.props:e;if(!isObject_1(o))return null;var p=null;for(var u in o)({}).hasOwnProperty.call(o,u)&&EVENT_ATTRIBUTES[u]&&(p||(p={}),p[u]=n||(r?getEventHandlerOfElement(o[u],o):o[u]));return p},getEventHandlerOfChild=function t(e,n,r){return function(o){return e(n,r,o),null}},filterEventsOfChild=function t(e,n,r){if(!isObject_1(e))return null;var o=null;for(var p in e)({}).hasOwnProperty.call(e,p)&&EVENT_ATTRIBUTES[p]&&isFunction_1(e[p])&&(o||(o={}),o[p]=getEventHandlerOfChild(e[p],n,r));return o},validateWidthHeight=function t(e){if(!e||!e.props)return!1;var n=e.props,r=n.width,o=n.height;return!(!isNumber(r)||r<=0||!isNumber(o)||o<=0)},isSsr=function t(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},SVG_TAGS=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],isSvgElement=function t(e){return e&&e.type&&isString_1(e.type)&&SVG_TAGS.indexOf(e.type)>=0},isSingleChildEqual=function t(e,n){if(isNil_1(e)&&isNil_1(n))return!0;if(!isNil_1(e)&&!isNil_1(n)){var r=e.props||{},o=r.children,p=_objectWithoutProperties$9(r,["children"]),u=n.props||{},l=u.children,f=_objectWithoutProperties$9(u,["children"]);return o&&l?shallowEqual(p,f)&&isChildrenEqual(o,l):!o&&!l?shallowEqual(p,f):!1}return!1},isChildrenEqual=function t(e,n){if(e===n)return!0;if(reactExports.Children.count(e)!==reactExports.Children.count(n))return!1;var r=reactExports.Children.count(e);if(r===0)return!0;if(r===1)return isSingleChildEqual(isArray_1(e)?e[0]:e,isArray_1(n)?n[0]:n);for(var o=0;o<r;o++){var p=e[o],u=n[o];if(isArray_1(p)||isArray_1(u)){if(!t(p,u))return!1}else if(!isSingleChildEqual(p,u))return!1}return!0},renderByOrder=function t(e,n){var r=[],o={};return reactExports.Children.forEach(e,function(p,u){if(p&&isSvgElement(p))r.push(p);else if(p&&n[getDisplayName(p.type)]){var l=getDisplayName(p.type),f=n[l],h=f.handler,d=f.once;if(d&&!o[l]||!d){var m=h(p,l,u);isArray_1(m)?r=[r].concat(_toConsumableArray$a(m)):r.push(m),o[l]=!0}}}),r},getReactEventByType=function t(e){var n=e&&e.type;return n&&REACT_BROWSER_EVENT_MAP[n]?REACT_BROWSER_EVENT_MAP[n]:null},parseChildIndex=function t(e,n){var r=-1;return reactExports.Children.forEach(n,function(o,p){o===e&&(r=p)}),r};function _extends$j(){return _extends$j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$j.apply(this,arguments)}function _objectWithoutProperties$8(t,e){if(t==null)return{};var n=_objectWithoutPropertiesLoose$8(t,e),r,o;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(o=0;o<p.length;o++)r=p[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _objectWithoutPropertiesLoose$8(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,p;for(p=0;p<r.length;p++)o=r[p],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}var propTypes$4={width:propTypesExports.number.isRequired,height:propTypesExports.number.isRequired,viewBox:propTypesExports.shape({x:propTypesExports.number,y:propTypesExports.number,width:propTypesExports.number,height:propTypesExports.number}),className:propTypesExports.string,style:propTypesExports.object,children:propTypesExports.oneOfType([propTypesExports.arrayOf(propTypesExports.node),propTypesExports.node])};function Surface(t){var e=t.children,n=t.width,r=t.height,o=t.viewBox,p=t.className,u=t.style,l=_objectWithoutProperties$8(t,["children","width","height","viewBox","className","style"]),f=o||{width:n,height:r,x:0,y:0},h=classNames("recharts-surface",p),d=getPresentationAttributes(l);return React.createElement("svg",_extends$j({},d,{className:h,width:n,height:r,style:u,viewBox:"".concat(f.x," ").concat(f.y," ").concat(f.width," ").concat(f.height),version:"1.1"}),e)}Surface.propTypes=propTypes$4;function _extends$i(){return _extends$i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$i.apply(this,arguments)}function _objectWithoutProperties$7(t,e){if(t==null)return{};var n=_objectWithoutPropertiesLoose$7(t,e),r,o;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(o=0;o<p.length;o++)r=p[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _objectWithoutPropertiesLoose$7(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,p;for(p=0;p<r.length;p++)o=r[p],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}var propTypes$3={className:propTypesExports.string,children:propTypesExports.oneOfType([propTypesExports.arrayOf(propTypesExports.node),propTypesExports.node])};function Layer(t){var e=t.children,n=t.className,r=_objectWithoutProperties$7(t,["children","className"]),o=classNames("recharts-layer",n);return React.createElement("g",_extends$i({className:o},r),e)}Layer.propTypes=propTypes$3;var ListCache$2=_ListCache;function stackClear$1(){this.__data__=new ListCache$2,this.size=0}var _stackClear=stackClear$1;function stackDelete$1(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var _stackDelete=stackDelete$1;function stackGet$1(t){return this.__data__.get(t)}var _stackGet=stackGet$1;function stackHas$1(t){return this.__data__.has(t)}var _stackHas=stackHas$1,ListCache$1=_ListCache,Map$3=_Map,MapCache$1=_MapCache,LARGE_ARRAY_SIZE$1=200;function stackSet$1(t,e){var n=this.__data__;if(n instanceof ListCache$1){var r=n.__data__;if(!Map$3||r.length<LARGE_ARRAY_SIZE$1-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new MapCache$1(r)}return n.set(t,e),this.size=n.size,this}var _stackSet=stackSet$1,ListCache=_ListCache,stackClear=_stackClear,stackDelete=_stackDelete,stackGet=_stackGet,stackHas=_stackHas,stackSet=_stackSet;function Stack$2(t){var e=this.__data__=new ListCache(t);this.size=e.size}Stack$2.prototype.clear=stackClear;Stack$2.prototype.delete=stackDelete;Stack$2.prototype.get=stackGet;Stack$2.prototype.has=stackHas;Stack$2.prototype.set=stackSet;var _Stack=Stack$2,HASH_UNDEFINED="__lodash_hash_undefined__";function setCacheAdd$1(t){return this.__data__.set(t,HASH_UNDEFINED),this}var _setCacheAdd=setCacheAdd$1;function setCacheHas$1(t){return this.__data__.has(t)}var _setCacheHas=setCacheHas$1,MapCache=_MapCache,setCacheAdd=_setCacheAdd,setCacheHas=_setCacheHas;function SetCache$3(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new MapCache;++e<n;)this.add(t[e])}SetCache$3.prototype.add=SetCache$3.prototype.push=setCacheAdd;SetCache$3.prototype.has=setCacheHas;var _SetCache=SetCache$3;function arraySome$2(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}var _arraySome=arraySome$2;function cacheHas$3(t,e){return t.has(e)}var _cacheHas=cacheHas$3,SetCache$2=_SetCache,arraySome$1=_arraySome,cacheHas$2=_cacheHas,COMPARE_PARTIAL_FLAG$5=1,COMPARE_UNORDERED_FLAG$3=2;function equalArrays$2(t,e,n,r,o,p){var u=n&COMPARE_PARTIAL_FLAG$5,l=t.length,f=e.length;if(l!=f&&!(u&&f>l))return!1;var h=p.get(t),d=p.get(e);if(h&&d)return h==e&&d==t;var m=-1,v=!0,_=n&COMPARE_UNORDERED_FLAG$3?new SetCache$2:void 0;for(p.set(t,e),p.set(e,t);++m<l;){var T=t[m],g=e[m];if(r)var $=u?r(g,T,m,e,t,p):r(T,g,m,t,e,p);if($!==void 0){if($)continue;v=!1;break}if(_){if(!arraySome$1(e,function(E,b){if(!cacheHas$2(_,b)&&(T===E||o(T,E,n,r,p)))return _.push(b)})){v=!1;break}}else if(!(T===g||o(T,g,n,r,p))){v=!1;break}}return p.delete(t),p.delete(e),v}var _equalArrays=equalArrays$2,root$8=_root,Uint8Array$1=root$8.Uint8Array,_Uint8Array=Uint8Array$1;function mapToArray$1(t){var e=-1,n=Array(t.size);return t.forEach(function(r,o){n[++e]=[o,r]}),n}var _mapToArray=mapToArray$1;function setToArray$3(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var _setToArray=setToArray$3,Symbol$2=_Symbol,Uint8Array=_Uint8Array,eq$1=eq_1,equalArrays$1=_equalArrays,mapToArray=_mapToArray,setToArray$2=_setToArray,COMPARE_PARTIAL_FLAG$4=1,COMPARE_UNORDERED_FLAG$2=2,boolTag$1="[object Boolean]",dateTag$1="[object Date]",errorTag$1="[object Error]",mapTag$2="[object Map]",numberTag$1="[object Number]",regexpTag$1="[object RegExp]",setTag$2="[object Set]",stringTag$1="[object String]",symbolTag$2="[object Symbol]",arrayBufferTag$1="[object ArrayBuffer]",dataViewTag$2="[object DataView]",symbolProto=Symbol$2?Symbol$2.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;function equalByTag$1(t,e,n,r,o,p,u){switch(n){case dataViewTag$2:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case arrayBufferTag$1:return!(t.byteLength!=e.byteLength||!p(new Uint8Array(t),new Uint8Array(e)));case boolTag$1:case dateTag$1:case numberTag$1:return eq$1(+t,+e);case errorTag$1:return t.name==e.name&&t.message==e.message;case regexpTag$1:case stringTag$1:return t==e+"";case mapTag$2:var l=mapToArray;case setTag$2:var f=r&COMPARE_PARTIAL_FLAG$4;if(l||(l=setToArray$2),t.size!=e.size&&!f)return!1;var h=u.get(t);if(h)return h==e;r|=COMPARE_UNORDERED_FLAG$2,u.set(t,e);var d=equalArrays$1(l(t),l(e),r,o,p,u);return u.delete(t),d;case symbolTag$2:if(symbolValueOf)return symbolValueOf.call(t)==symbolValueOf.call(e)}return!1}var _equalByTag=equalByTag$1;function arrayPush$2(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}var _arrayPush=arrayPush$2,arrayPush$1=_arrayPush,isArray$a=isArray_1;function baseGetAllKeys$1(t,e,n){var r=e(t);return isArray$a(t)?r:arrayPush$1(r,n(t))}var _baseGetAllKeys=baseGetAllKeys$1;function arrayFilter$2(t,e){for(var n=-1,r=t==null?0:t.length,o=0,p=[];++n<r;){var u=t[n];e(u,n,t)&&(p[o++]=u)}return p}var _arrayFilter=arrayFilter$2;function stubArray$1(){return[]}var stubArray_1=stubArray$1,arrayFilter$1=_arrayFilter,stubArray=stubArray_1,objectProto$8=Object.prototype,propertyIsEnumerable$1=objectProto$8.propertyIsEnumerable,nativeGetSymbols=Object.getOwnPropertySymbols,getSymbols$1=nativeGetSymbols?function(t){return t==null?[]:(t=Object(t),arrayFilter$1(nativeGetSymbols(t),function(e){return propertyIsEnumerable$1.call(t,e)}))}:stubArray,_getSymbols=getSymbols$1;function baseTimes$1(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var _baseTimes=baseTimes$1,baseGetTag$2=_baseGetTag,isObjectLike$6=isObjectLike_1,argsTag$2="[object Arguments]";function baseIsArguments$1(t){return isObjectLike$6(t)&&baseGetTag$2(t)==argsTag$2}var _baseIsArguments=baseIsArguments$1,baseIsArguments=_baseIsArguments,isObjectLike$5=isObjectLike_1,objectProto$7=Object.prototype,hasOwnProperty$4=objectProto$7.hasOwnProperty,propertyIsEnumerable=objectProto$7.propertyIsEnumerable,isArguments$3=baseIsArguments(function(){return arguments}())?baseIsArguments:function(t){return isObjectLike$5(t)&&hasOwnProperty$4.call(t,"callee")&&!propertyIsEnumerable.call(t,"callee")},isArguments_1=isArguments$3,isBufferExports={},isBuffer$2={get exports(){return isBufferExports},set exports(t){isBufferExports=t}};function stubFalse(){return!1}var stubFalse_1=stubFalse;(function(t,e){var n=_root,r=stubFalse_1,o=e&&!e.nodeType&&e,p=o&&!0&&t&&!t.nodeType&&t,u=p&&p.exports===o,l=u?n.Buffer:void 0,f=l?l.isBuffer:void 0,h=f||r;t.exports=h})(isBuffer$2,isBufferExports);var MAX_SAFE_INTEGER$2=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;function isIndex$3(t,e){var n=typeof t;return e=e??MAX_SAFE_INTEGER$2,!!e&&(n=="number"||n!="symbol"&&reIsUint.test(t))&&t>-1&&t%1==0&&t<e}var _isIndex=isIndex$3,MAX_SAFE_INTEGER$1=9007199254740991;function isLength$3(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=MAX_SAFE_INTEGER$1}var isLength_1=isLength$3,baseGetTag$1=_baseGetTag,isLength$2=isLength_1,isObjectLike$4=isObjectLike_1,argsTag$1="[object Arguments]",arrayTag$1="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",mapTag$1="[object Map]",numberTag="[object Number]",objectTag$2="[object Object]",regexpTag="[object RegExp]",setTag$1="[object Set]",stringTag="[object String]",weakMapTag$1="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag$1="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0;typedArrayTags[argsTag$1]=typedArrayTags[arrayTag$1]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag$1]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag$1]=typedArrayTags[numberTag]=typedArrayTags[objectTag$2]=typedArrayTags[regexpTag]=typedArrayTags[setTag$1]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag$1]=!1;function baseIsTypedArray$1(t){return isObjectLike$4(t)&&isLength$2(t.length)&&!!typedArrayTags[baseGetTag$1(t)]}var _baseIsTypedArray=baseIsTypedArray$1;function baseUnary$3(t){return function(e){return t(e)}}var _baseUnary=baseUnary$3,_nodeUtilExports={},_nodeUtil={get exports(){return _nodeUtilExports},set exports(t){_nodeUtilExports=t}};(function(t,e){var n=_freeGlobal,r=e&&!e.nodeType&&e,o=r&&!0&&t&&!t.nodeType&&t,p=o&&o.exports===r,u=p&&n.process,l=function(){try{var f=o&&o.require&&o.require("util").types;return f||u&&u.binding&&u.binding("util")}catch{}}();t.exports=l})(_nodeUtil,_nodeUtilExports);var baseIsTypedArray=_baseIsTypedArray,baseUnary$2=_baseUnary,nodeUtil=_nodeUtilExports,nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray,isTypedArray$2=nodeIsTypedArray?baseUnary$2(nodeIsTypedArray):baseIsTypedArray,isTypedArray_1=isTypedArray$2,baseTimes=_baseTimes,isArguments$2=isArguments_1,isArray$9=isArray_1,isBuffer$1=isBufferExports,isIndex$2=_isIndex,isTypedArray$1=isTypedArray_1,objectProto$6=Object.prototype,hasOwnProperty$3=objectProto$6.hasOwnProperty;function arrayLikeKeys$1(t,e){var n=isArray$9(t),r=!n&&isArguments$2(t),o=!n&&!r&&isBuffer$1(t),p=!n&&!r&&!o&&isTypedArray$1(t),u=n||r||o||p,l=u?baseTimes(t.length,String):[],f=l.length;for(var h in t)(e||hasOwnProperty$3.call(t,h))&&!(u&&(h=="length"||o&&(h=="offset"||h=="parent")||p&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||isIndex$2(h,f)))&&l.push(h);return l}var _arrayLikeKeys=arrayLikeKeys$1,objectProto$5=Object.prototype;function isPrototype$1(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||objectProto$5;return t===n}var _isPrototype=isPrototype$1;function overArg$1(t,e){return function(n){return t(e(n))}}var _overArg=overArg$1,overArg=_overArg,nativeKeys$1=overArg(Object.keys,Object),_nativeKeys=nativeKeys$1,isPrototype=_isPrototype,nativeKeys=_nativeKeys,objectProto$4=Object.prototype,hasOwnProperty$2=objectProto$4.hasOwnProperty;function baseKeys$1(t){if(!isPrototype(t))return nativeKeys(t);var e=[];for(var n in Object(t))hasOwnProperty$2.call(t,n)&&n!="constructor"&&e.push(n);return e}var _baseKeys=baseKeys$1,isFunction=isFunction_1,isLength$1=isLength_1;function isArrayLike$6(t){return t!=null&&isLength$1(t.length)&&!isFunction(t)}var isArrayLike_1=isArrayLike$6,arrayLikeKeys=_arrayLikeKeys,baseKeys=_baseKeys,isArrayLike$5=isArrayLike_1;function keys$4(t){return isArrayLike$5(t)?arrayLikeKeys(t):baseKeys(t)}var keys_1=keys$4,baseGetAllKeys=_baseGetAllKeys,getSymbols=_getSymbols,keys$3=keys_1;function getAllKeys$1(t){return baseGetAllKeys(t,keys$3,getSymbols)}var _getAllKeys=getAllKeys$1,getAllKeys=_getAllKeys,COMPARE_PARTIAL_FLAG$3=1,objectProto$3=Object.prototype,hasOwnProperty$1=objectProto$3.hasOwnProperty;function equalObjects$1(t,e,n,r,o,p){var u=n&COMPARE_PARTIAL_FLAG$3,l=getAllKeys(t),f=l.length,h=getAllKeys(e),d=h.length;if(f!=d&&!u)return!1;for(var m=f;m--;){var v=l[m];if(!(u?v in e:hasOwnProperty$1.call(e,v)))return!1}var _=p.get(t),T=p.get(e);if(_&&T)return _==e&&T==t;var g=!0;p.set(t,e),p.set(e,t);for(var $=u;++m<f;){v=l[m];var E=t[v],b=e[v];if(r)var w=u?r(b,E,v,e,t,p):r(E,b,v,t,e,p);if(!(w===void 0?E===b||o(E,b,n,r,p):w)){g=!1;break}$||($=v=="constructor")}if(g&&!$){var S=t.constructor,A=e.constructor;S!=A&&"constructor"in t&&"constructor"in e&&!(typeof S=="function"&&S instanceof S&&typeof A=="function"&&A instanceof A)&&(g=!1)}return p.delete(t),p.delete(e),g}var _equalObjects=equalObjects$1,getNative$4=_getNative,root$7=_root,DataView$2=getNative$4(root$7,"DataView"),_DataView=DataView$2,getNative$3=_getNative,root$6=_root,Promise$2=getNative$3(root$6,"Promise"),_Promise=Promise$2,getNative$2=_getNative,root$5=_root,Set$3=getNative$2(root$5,"Set"),_Set=Set$3,getNative$1=_getNative,root$4=_root,WeakMap$2=getNative$1(root$4,"WeakMap"),_WeakMap=WeakMap$2,DataView$1=_DataView,Map$2=_Map,Promise$1=_Promise,Set$2=_Set,WeakMap$1=_WeakMap,baseGetTag=_baseGetTag,toSource=_toSource,mapTag="[object Map]",objectTag$1="[object Object]",promiseTag="[object Promise]",setTag="[object Set]",weakMapTag="[object WeakMap]",dataViewTag="[object DataView]",dataViewCtorString=toSource(DataView$1),mapCtorString=toSource(Map$2),promiseCtorString=toSource(Promise$1),setCtorString=toSource(Set$2),weakMapCtorString=toSource(WeakMap$1),getTag$1=baseGetTag;(DataView$1&&getTag$1(new DataView$1(new ArrayBuffer(1)))!=dataViewTag||Map$2&&getTag$1(new Map$2)!=mapTag||Promise$1&&getTag$1(Promise$1.resolve())!=promiseTag||Set$2&&getTag$1(new Set$2)!=setTag||WeakMap$1&&getTag$1(new WeakMap$1)!=weakMapTag)&&(getTag$1=function(t){var e=baseGetTag(t),n=e==objectTag$1?t.constructor:void 0,r=n?toSource(n):"";if(r)switch(r){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag}return e});var _getTag=getTag$1,Stack$1=_Stack,equalArrays=_equalArrays,equalByTag=_equalByTag,equalObjects=_equalObjects,getTag=_getTag,isArray$8=isArray_1,isBuffer=isBufferExports,isTypedArray=isTypedArray_1,COMPARE_PARTIAL_FLAG$2=1,argsTag="[object Arguments]",arrayTag="[object Array]",objectTag="[object Object]",objectProto$2=Object.prototype,hasOwnProperty=objectProto$2.hasOwnProperty;function baseIsEqualDeep$1(t,e,n,r,o,p){var u=isArray$8(t),l=isArray$8(e),f=u?arrayTag:getTag(t),h=l?arrayTag:getTag(e);f=f==argsTag?objectTag:f,h=h==argsTag?objectTag:h;var d=f==objectTag,m=h==objectTag,v=f==h;if(v&&isBuffer(t)){if(!isBuffer(e))return!1;u=!0,d=!1}if(v&&!d)return p||(p=new Stack$1),u||isTypedArray(t)?equalArrays(t,e,n,r,o,p):equalByTag(t,e,f,n,r,o,p);if(!(n&COMPARE_PARTIAL_FLAG$2)){var _=d&&hasOwnProperty.call(t,"__wrapped__"),T=m&&hasOwnProperty.call(e,"__wrapped__");if(_||T){var g=_?t.value():t,$=T?e.value():e;return p||(p=new Stack$1),o(g,$,n,r,p)}}return v?(p||(p=new Stack$1),equalObjects(t,e,n,r,o,p)):!1}var _baseIsEqualDeep=baseIsEqualDeep$1,baseIsEqualDeep=_baseIsEqualDeep,isObjectLike$3=isObjectLike_1;function baseIsEqual$3(t,e,n,r,o){return t===e?!0:t==null||e==null||!isObjectLike$3(t)&&!isObjectLike$3(e)?t!==t&&e!==e:baseIsEqualDeep(t,e,n,r,baseIsEqual$3,o)}var _baseIsEqual=baseIsEqual$3,Stack=_Stack,baseIsEqual$2=_baseIsEqual,COMPARE_PARTIAL_FLAG$1=1,COMPARE_UNORDERED_FLAG$1=2;function baseIsMatch$1(t,e,n,r){var o=n.length,p=o,u=!r;if(t==null)return!p;for(t=Object(t);o--;){var l=n[o];if(u&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++o<p;){l=n[o];var f=l[0],h=t[f],d=l[1];if(u&&l[2]){if(h===void 0&&!(f in t))return!1}else{var m=new Stack;if(r)var v=r(h,d,f,t,e,m);if(!(v===void 0?baseIsEqual$2(d,h,COMPARE_PARTIAL_FLAG$1|COMPARE_UNORDERED_FLAG$1,r,m):v))return!1}}return!0}var _baseIsMatch=baseIsMatch$1,isObject$6=isObject_1;function isStrictComparable$2(t){return t===t&&!isObject$6(t)}var _isStrictComparable=isStrictComparable$2,isStrictComparable$1=_isStrictComparable,keys$2=keys_1;function getMatchData$1(t){for(var e=keys$2(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,isStrictComparable$1(o)]}return e}var _getMatchData=getMatchData$1;function matchesStrictComparable$2(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var _matchesStrictComparable=matchesStrictComparable$2,baseIsMatch=_baseIsMatch,getMatchData=_getMatchData,matchesStrictComparable$1=_matchesStrictComparable;function baseMatches$1(t){var e=getMatchData(t);return e.length==1&&e[0][2]?matchesStrictComparable$1(e[0][0],e[0][1]):function(n){return n===t||baseIsMatch(n,t,e)}}var _baseMatches=baseMatches$1;function baseHasIn$1(t,e){return t!=null&&e in Object(t)}var _baseHasIn=baseHasIn$1,castPath=_castPath,isArguments$1=isArguments_1,isArray$7=isArray_1,isIndex$1=_isIndex,isLength=isLength_1,toKey$2=_toKey;function hasPath$1(t,e,n){e=castPath(e,t);for(var r=-1,o=e.length,p=!1;++r<o;){var u=toKey$2(e[r]);if(!(p=t!=null&&n(t,u)))break;t=t[u]}return p||++r!=o?p:(o=t==null?0:t.length,!!o&&isLength(o)&&isIndex$1(u,o)&&(isArray$7(t)||isArguments$1(t)))}var _hasPath=hasPath$1,baseHasIn=_baseHasIn,hasPath=_hasPath;function hasIn$1(t,e){return t!=null&&hasPath(t,e,baseHasIn)}var hasIn_1=hasIn$1,baseIsEqual$1=_baseIsEqual,get=get_1,hasIn=hasIn_1,isKey$1=_isKey,isStrictComparable=_isStrictComparable,matchesStrictComparable=_matchesStrictComparable,toKey$1=_toKey,COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;function baseMatchesProperty$1(t,e){return isKey$1(t)&&isStrictComparable(e)?matchesStrictComparable(toKey$1(t),e):function(n){var r=get(n,t);return r===void 0&&r===e?hasIn(n,t):baseIsEqual$1(e,r,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG)}}var _baseMatchesProperty=baseMatchesProperty$1;function identity$b(t){return t}var identity_1=identity$b;function baseProperty$1(t){return function(e){return e==null?void 0:e[t]}}var _baseProperty=baseProperty$1,baseGet$1=_baseGet;function basePropertyDeep$1(t){return function(e){return baseGet$1(e,t)}}var _basePropertyDeep=basePropertyDeep$1,baseProperty=_baseProperty,basePropertyDeep=_basePropertyDeep,isKey=_isKey,toKey=_toKey;function property$1(t){return isKey(t)?baseProperty(toKey(t)):basePropertyDeep(t)}var property_1=property$1,baseMatches=_baseMatches,baseMatchesProperty=_baseMatchesProperty,identity$a=identity_1,isArray$6=isArray_1,property=property_1;function baseIteratee$9(t){return typeof t=="function"?t:t==null?identity$a:typeof t=="object"?isArray$6(t)?baseMatchesProperty(t[0],t[1]):baseMatches(t):property(t)}var _baseIteratee=baseIteratee$9;function baseFindIndex$2(t,e,n,r){for(var o=t.length,p=n+(r?1:-1);r?p--:++p<o;)if(e(t[p],p,t))return p;return-1}var _baseFindIndex=baseFindIndex$2;function baseIsNaN$1(t){return t!==t}var _baseIsNaN=baseIsNaN$1;function strictIndexOf$1(t,e,n){for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}var _strictIndexOf=strictIndexOf$1,baseFindIndex$1=_baseFindIndex,baseIsNaN=_baseIsNaN,strictIndexOf=_strictIndexOf;function baseIndexOf$1(t,e,n){return e===e?strictIndexOf(t,e,n):baseFindIndex$1(t,baseIsNaN,n)}var _baseIndexOf=baseIndexOf$1,baseIndexOf=_baseIndexOf;function arrayIncludes$2(t,e){var n=t==null?0:t.length;return!!n&&baseIndexOf(t,e,0)>-1}var _arrayIncludes=arrayIncludes$2;function arrayIncludesWith$2(t,e,n){for(var r=-1,o=t==null?0:t.length;++r<o;)if(n(e,t[r]))return!0;return!1}var _arrayIncludesWith=arrayIncludesWith$2;function noop$2(){}var noop_1=noop$2,Set$1=_Set,noop$1=noop_1,setToArray$1=_setToArray,INFINITY$1=1/0,createSet$1=Set$1&&1/setToArray$1(new Set$1([,-0]))[1]==INFINITY$1?function(t){return new Set$1(t)}:noop$1,_createSet=createSet$1,SetCache$1=_SetCache,arrayIncludes$1=_arrayIncludes,arrayIncludesWith$1=_arrayIncludesWith,cacheHas$1=_cacheHas,createSet=_createSet,setToArray=_setToArray,LARGE_ARRAY_SIZE=200;function baseUniq$1(t,e,n){var r=-1,o=arrayIncludes$1,p=t.length,u=!0,l=[],f=l;if(n)u=!1,o=arrayIncludesWith$1;else if(p>=LARGE_ARRAY_SIZE){var h=e?null:createSet(t);if(h)return setToArray(h);u=!1,o=cacheHas$1,f=new SetCache$1}else f=e?[]:l;t:for(;++r<p;){var d=t[r],m=e?e(d):d;if(d=n||d!==0?d:0,u&&m===m){for(var v=f.length;v--;)if(f[v]===m)continue t;e&&f.push(m),l.push(d)}else o(f,m,n)||(f!==l&&f.push(m),l.push(d))}return l}var _baseUniq=baseUniq$1,baseIteratee$8=_baseIteratee,baseUniq=_baseUniq;function uniqBy(t,e){return t&&t.length?baseUniq(t,baseIteratee$8(e)):[]}var uniqBy_1=uniqBy,pi$1=Math.PI,tau$1=2*pi$1,epsilon=1e-6,tauEpsilon=tau$1-epsilon;function Path(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function path(){return new Path}Path.prototype=path.prototype={constructor:Path,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,n,r){this._+="Q"+ +t+","+ +e+","+(this._x1=+n)+","+(this._y1=+r)},bezierCurveTo:function(t,e,n,r,o,p){this._+="C"+ +t+","+ +e+","+ +n+","+ +r+","+(this._x1=+o)+","+(this._y1=+p)},arcTo:function(t,e,n,r,o){t=+t,e=+e,n=+n,r=+r,o=+o;var p=this._x1,u=this._y1,l=n-t,f=r-e,h=p-t,d=u-e,m=h*h+d*d;if(o<0)throw new Error("negative radius: "+o);if(this._x1===null)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(m>epsilon)if(!(Math.abs(d*l-f*h)>epsilon)||!o)this._+="L"+(this._x1=t)+","+(this._y1=e);else{var v=n-p,_=r-u,T=l*l+f*f,g=v*v+_*_,$=Math.sqrt(T),E=Math.sqrt(m),b=o*Math.tan((pi$1-Math.acos((T+m-g)/(2*$*E)))/2),w=b/E,S=b/$;Math.abs(w-1)>epsilon&&(this._+="L"+(t+w*h)+","+(e+w*d)),this._+="A"+o+","+o+",0,0,"+ +(d*v>h*_)+","+(this._x1=t+S*l)+","+(this._y1=e+S*f)}},arc:function(t,e,n,r,o,p){t=+t,e=+e,n=+n,p=!!p;var u=n*Math.cos(r),l=n*Math.sin(r),f=t+u,h=e+l,d=1^p,m=p?r-o:o-r;if(n<0)throw new Error("negative radius: "+n);this._x1===null?this._+="M"+f+","+h:(Math.abs(this._x1-f)>epsilon||Math.abs(this._y1-h)>epsilon)&&(this._+="L"+f+","+h),n&&(m<0&&(m=m%tau$1+tau$1),m>tauEpsilon?this._+="A"+n+","+n+",0,1,"+d+","+(t-u)+","+(e-l)+"A"+n+","+n+",0,1,"+d+","+(this._x1=f)+","+(this._y1=h):m>epsilon&&(this._+="A"+n+","+n+",0,"+ +(m>=pi$1)+","+d+","+(this._x1=t+n*Math.cos(o))+","+(this._y1=e+n*Math.sin(o))))},rect:function(t,e,n,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +n+"v"+ +r+"h"+-n+"Z"},toString:function(){return this._}};function constant$4(t){return function(){return t}}var pi=Math.PI,tau=2*pi;function Linear(t){this._context=t}Linear.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e);break}}};function curveLinear(t){return new Linear(t)}function x(t){return t[0]}function y(t){return t[1]}function shapeLine(){var t=x,e=y,n=constant$4(!0),r=null,o=curveLinear,p=null;function u(l){var f,h=l.length,d,m=!1,v;for(r==null&&(p=o(v=path())),f=0;f<=h;++f)!(f<h&&n(d=l[f],f,l))===m&&((m=!m)?p.lineStart():p.lineEnd()),m&&p.point(+t(d,f,l),+e(d,f,l));if(v)return p=null,v+""||null}return u.x=function(l){return arguments.length?(t=typeof l=="function"?l:constant$4(+l),u):t},u.y=function(l){return arguments.length?(e=typeof l=="function"?l:constant$4(+l),u):e},u.defined=function(l){return arguments.length?(n=typeof l=="function"?l:constant$4(!!l),u):n},u.curve=function(l){return arguments.length?(o=l,r!=null&&(p=o(r)),u):o},u.context=function(l){return arguments.length?(l==null?r=p=null:p=o(r=l),u):r},u}function shapeArea(){var t=x,e=null,n=constant$4(0),r=y,o=constant$4(!0),p=null,u=curveLinear,l=null;function f(d){var m,v,_,T=d.length,g,$=!1,E,b=new Array(T),w=new Array(T);for(p==null&&(l=u(E=path())),m=0;m<=T;++m){if(!(m<T&&o(g=d[m],m,d))===$)if($=!$)v=m,l.areaStart(),l.lineStart();else{for(l.lineEnd(),l.lineStart(),_=m-1;_>=v;--_)l.point(b[_],w[_]);l.lineEnd(),l.areaEnd()}$&&(b[m]=+t(g,m,d),w[m]=+n(g,m,d),l.point(e?+e(g,m,d):b[m],r?+r(g,m,d):w[m]))}if(E)return l=null,E+""||null}function h(){return shapeLine().defined(o).curve(u).context(p)}return f.x=function(d){return arguments.length?(t=typeof d=="function"?d:constant$4(+d),e=null,f):t},f.x0=function(d){return arguments.length?(t=typeof d=="function"?d:constant$4(+d),f):t},f.x1=function(d){return arguments.length?(e=d==null?null:typeof d=="function"?d:constant$4(+d),f):e},f.y=function(d){return arguments.length?(n=typeof d=="function"?d:constant$4(+d),r=null,f):n},f.y0=function(d){return arguments.length?(n=typeof d=="function"?d:constant$4(+d),f):n},f.y1=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:constant$4(+d),f):r},f.lineX0=f.lineY0=function(){return h().x(t).y(n)},f.lineY1=function(){return h().x(t).y(r)},f.lineX1=function(){return h().x(e).y(n)},f.defined=function(d){return arguments.length?(o=typeof d=="function"?d:constant$4(!!d),f):o},f.curve=function(d){return arguments.length?(u=d,p!=null&&(l=u(p)),f):u},f.context=function(d){return arguments.length?(d==null?p=l=null:l=u(p=d),f):p},f}var slice$1=Array.prototype.slice;const symbolCircle={draw:function(t,e){var n=Math.sqrt(e/pi);t.moveTo(n,0),t.arc(0,0,n,0,tau)}},symbolCross={draw:function(t,e){var n=Math.sqrt(e/5)/2;t.moveTo(-3*n,-n),t.lineTo(-n,-n),t.lineTo(-n,-3*n),t.lineTo(n,-3*n),t.lineTo(n,-n),t.lineTo(3*n,-n),t.lineTo(3*n,n),t.lineTo(n,n),t.lineTo(n,3*n),t.lineTo(-n,3*n),t.lineTo(-n,n),t.lineTo(-3*n,n),t.closePath()}};var tan30=Math.sqrt(1/3),tan30_2=tan30*2;const symbolDiamond={draw:function(t,e){var n=Math.sqrt(e/tan30_2),r=n*tan30;t.moveTo(0,-n),t.lineTo(r,0),t.lineTo(0,n),t.lineTo(-r,0),t.closePath()}};var ka=.8908130915292852,kr=Math.sin(pi/10)/Math.sin(7*pi/10),kx=Math.sin(tau/10)*kr,ky=-Math.cos(tau/10)*kr;const symbolStar={draw:function(t,e){var n=Math.sqrt(e*ka),r=kx*n,o=ky*n;t.moveTo(0,-n),t.lineTo(r,o);for(var p=1;p<5;++p){var u=tau*p/5,l=Math.cos(u),f=Math.sin(u);t.lineTo(f*n,-l*n),t.lineTo(l*r-f*o,f*r+l*o)}t.closePath()}},symbolSquare={draw:function(t,e){var n=Math.sqrt(e),r=-n/2;t.rect(r,r,n,n)}};var sqrt3=Math.sqrt(3);const symbolTriangle={draw:function(t,e){var n=-Math.sqrt(e/(sqrt3*3));t.moveTo(0,n*2),t.lineTo(-sqrt3*n,-n),t.lineTo(sqrt3*n,-n),t.closePath()}};var c=-.5,s=Math.sqrt(3)/2,k=1/Math.sqrt(12),a=(k/2+1)*3;const symbolWye={draw:function(t,e){var n=Math.sqrt(e/a),r=n/2,o=n*k,p=r,u=n*k+n,l=-p,f=u;t.moveTo(r,o),t.lineTo(p,u),t.lineTo(l,f),t.lineTo(c*r-s*o,s*r+c*o),t.lineTo(c*p-s*u,s*p+c*u),t.lineTo(c*l-s*f,s*l+c*f),t.lineTo(c*r+s*o,c*o-s*r),t.lineTo(c*p+s*u,c*u-s*p),t.lineTo(c*l+s*f,c*f-s*l),t.closePath()}};function shapeSymbol(){var t=constant$4(symbolCircle),e=constant$4(64),n=null;function r(){var o;if(n||(n=o=path()),t.apply(this,arguments).draw(n,+e.apply(this,arguments)),o)return n=null,o+""||null}return r.type=function(o){return arguments.length?(t=typeof o=="function"?o:constant$4(o),r):t},r.size=function(o){return arguments.length?(e=typeof o=="function"?o:constant$4(+o),r):e},r.context=function(o){return arguments.length?(n=o??null,r):n},r}function noop(){}function point$2(t,e,n){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+e)/6,(t._y0+4*t._y1+n)/6)}function Basis(t){this._context=t}Basis.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:point$2(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:point$2(this,t,e);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}};function curveBasis(t){return new Basis(t)}function BasisClosed(t){this._context=t}BasisClosed.prototype={areaStart:noop,areaEnd:noop,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._x2=t,this._y2=e;break;case 1:this._point=2,this._x3=t,this._y3=e;break;case 2:this._point=3,this._x4=t,this._y4=e,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+e)/6);break;default:point$2(this,t,e);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}};function curveBasisClosed(t){return new BasisClosed(t)}function BasisOpen(t){this._context=t}BasisOpen.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+e)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:point$2(this,t,e);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}};function curveBasisOpen(t){return new BasisOpen(t)}function LinearClosed(t){this._context=t}LinearClosed.prototype={areaStart:noop,areaEnd:noop,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,e){t=+t,e=+e,this._point?this._context.lineTo(t,e):(this._point=1,this._context.moveTo(t,e))}};function curveLinearClosed(t){return new LinearClosed(t)}function sign(t){return t<0?-1:1}function slope3(t,e,n){var r=t._x1-t._x0,o=e-t._x1,p=(t._y1-t._y0)/(r||o<0&&-0),u=(n-t._y1)/(o||r<0&&-0),l=(p*o+u*r)/(r+o);return(sign(p)+sign(u))*Math.min(Math.abs(p),Math.abs(u),.5*Math.abs(l))||0}function slope2(t,e){var n=t._x1-t._x0;return n?(3*(t._y1-t._y0)/n-e)/2:e}function point$1(t,e,n){var r=t._x0,o=t._y0,p=t._x1,u=t._y1,l=(p-r)/3;t._context.bezierCurveTo(r+l,o+l*e,p-l,u-l*n,p,u)}function MonotoneX(t){this._context=t}MonotoneX.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:point$1(this,this._t0,slope2(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){var n=NaN;if(t=+t,e=+e,!(t===this._x1&&e===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,point$1(this,slope2(this,n=slope3(this,t,e)),n);break;default:point$1(this,this._t0,n=slope3(this,t,e));break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e,this._t0=n}}};function MonotoneY(t){this._context=new ReflectContext(t)}(MonotoneY.prototype=Object.create(MonotoneX.prototype)).point=function(t,e){MonotoneX.prototype.point.call(this,e,t)};function ReflectContext(t){this._context=t}ReflectContext.prototype={moveTo:function(t,e){this._context.moveTo(e,t)},closePath:function(){this._context.closePath()},lineTo:function(t,e){this._context.lineTo(e,t)},bezierCurveTo:function(t,e,n,r,o,p){this._context.bezierCurveTo(e,t,r,n,p,o)}};function monotoneX(t){return new MonotoneX(t)}function monotoneY(t){return new MonotoneY(t)}function Natural(t){this._context=t}Natural.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,e=this._y,n=t.length;if(n)if(this._line?this._context.lineTo(t[0],e[0]):this._context.moveTo(t[0],e[0]),n===2)this._context.lineTo(t[1],e[1]);else for(var r=controlPoints(t),o=controlPoints(e),p=0,u=1;u<n;++p,++u)this._context.bezierCurveTo(r[0][p],o[0][p],r[1][p],o[1][p],t[u],e[u]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,e){this._x.push(+t),this._y.push(+e)}};function controlPoints(t){var e,n=t.length-1,r,o=new Array(n),p=new Array(n),u=new Array(n);for(o[0]=0,p[0]=2,u[0]=t[0]+2*t[1],e=1;e<n-1;++e)o[e]=1,p[e]=4,u[e]=4*t[e]+2*t[e+1];for(o[n-1]=2,p[n-1]=7,u[n-1]=8*t[n-1]+t[n],e=1;e<n;++e)r=o[e]/p[e-1],p[e]-=r,u[e]-=r*u[e-1];for(o[n-1]=u[n-1]/p[n-1],e=n-2;e>=0;--e)o[e]=(u[e]-o[e+1])/p[e];for(p[n-1]=(t[n]+o[n-1])/2,e=0;e<n-1;++e)p[e]=2*t[e+1]-o[e+1];return[o,p]}function curveNatural(t){return new Natural(t)}function Step(t,e){this._context=t,this._t=e}Step.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,e),this._context.lineTo(t,e);else{var n=this._x*(1-this._t)+t*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,e)}break}}this._x=t,this._y=e}};function curveStep(t){return new Step(t,.5)}function stepBefore(t){return new Step(t,0)}function stepAfter(t){return new Step(t,1)}function stackOffsetNone(t,e){if((u=t.length)>1)for(var n=1,r,o,p=t[e[0]],u,l=p.length;n<u;++n)for(o=p,p=t[e[n]],r=0;r<l;++r)p[r][1]+=p[r][0]=isNaN(o[r][1])?o[r][0]:o[r][1]}function stackOrderNone(t){for(var e=t.length,n=new Array(e);--e>=0;)n[e]=e;return n}function stackValue(t,e){return t[e]}function shapeStack(){var t=constant$4([]),e=stackOrderNone,n=stackOffsetNone,r=stackValue;function o(p){var u=t.apply(this,arguments),l,f=p.length,h=u.length,d=new Array(h),m;for(l=0;l<h;++l){for(var v=u[l],_=d[l]=new Array(f),T=0,g;T<f;++T)_[T]=g=[0,+r(p[T],v,T,p)],g.data=p[T];_.key=v}for(l=0,m=e(d);l<h;++l)d[m[l]].index=l;return n(d,m),d}return o.keys=function(p){return arguments.length?(t=typeof p=="function"?p:constant$4(slice$1.call(p)),o):t},o.value=function(p){return arguments.length?(r=typeof p=="function"?p:constant$4(+p),o):r},o.order=function(p){return arguments.length?(e=p==null?stackOrderNone:typeof p=="function"?p:constant$4(slice$1.call(p)),o):e},o.offset=function(p){return arguments.length?(n=p??stackOffsetNone,o):n},o}function stackOffsetExpand(t,e){if((r=t.length)>0){for(var n,r,o=0,p=t[0].length,u;o<p;++o){for(u=n=0;n<r;++n)u+=t[n][o][1]||0;if(u)for(n=0;n<r;++n)t[n][o][1]/=u}stackOffsetNone(t,e)}}function stackOffsetSilhouette(t,e){if((o=t.length)>0){for(var n=0,r=t[e[0]],o,p=r.length;n<p;++n){for(var u=0,l=0;u<o;++u)l+=t[u][n][1]||0;r[n][1]+=r[n][0]=-l/2}stackOffsetNone(t,e)}}function stackOffsetWiggle(t,e){if(!(!((u=t.length)>0)||!((p=(o=t[e[0]]).length)>0))){for(var n=0,r=1,o,p,u;r<p;++r){for(var l=0,f=0,h=0;l<u;++l){for(var d=t[e[l]],m=d[r][1]||0,v=d[r-1][1]||0,_=(m-v)/2,T=0;T<l;++T){var g=t[e[T]],$=g[r][1]||0,E=g[r-1][1]||0;_+=$-E}f+=m,h+=_*m}o[r-1][1]+=o[r-1][0]=n,f&&(n-=h/f)}o[r-1][1]+=o[r-1][0]=n,stackOffsetNone(t,e)}}function ownKeys$m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$p(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$m(n,!0).forEach(function(r){_defineProperty$s(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$m(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _typeof$n(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$n=function(n){return typeof n}:_typeof$n=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$n(t)}function _extends$h(){return _extends$h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$h.apply(this,arguments)}function _classCallCheck$o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$o(t,e,n){return e&&_defineProperties$n(t.prototype,e),n&&_defineProperties$n(t,n),t}function _possibleConstructorReturn$n(t,e){return e&&(_typeof$n(e)==="object"||typeof e=="function")?e:_assertThisInitialized$m(t)}function _assertThisInitialized$m(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$m(t){return _getPrototypeOf$m=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$m(t)}function _inherits$n(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$m(t,e)}function _setPrototypeOf$m(t,e){return _setPrototypeOf$m=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$m(t,e)}var SYMBOL_FACTORIES={symbolCircle,symbolCross,symbolDiamond,symbolSquare,symbolStar,symbolTriangle,symbolWye},RADIAN$1=Math.PI/180,getSymbolFactory=function t(e){var n="symbol".concat(e.slice(0,1).toUpperCase()).concat(e.slice(1));return SYMBOL_FACTORIES[n]||symbolCircle},calculateAreaSize=function t(e,n,r){if(n==="area")return e;switch(r){case"cross":return 5*e*e/9;case"diamond":return .5*e*e/Math.sqrt(3);case"square":return e*e;case"star":{var o=18*RADIAN$1;return 1.25*e*e*(Math.tan(o)-Math.tan(o*2)*Math.pow(Math.tan(o),2))}case"triangle":return Math.sqrt(3)*e*e/4;case"wye":return(21-10*Math.sqrt(3))*e*e/8;default:return Math.PI*e*e/4}},Symbols=function(t){_inherits$n(e,t);function e(){return _classCallCheck$o(this,e),_possibleConstructorReturn$n(this,_getPrototypeOf$m(e).apply(this,arguments))}return _createClass$o(e,[{key:"getPath",value:function(){var r=this.props,o=r.size,p=r.sizeType,u=r.type,l=getSymbolFactory(u),f=shapeSymbol().type(l).size(calculateAreaSize(o,p,u));return f()}},{key:"render",value:function(){var r=this.props,o=r.className,p=r.cx,u=r.cy,l=r.size;return p===+p&&u===+u&&l===+l?React.createElement("path",_extends$h({},getPresentationAttributes(this.props),filterEventAttributes(this.props),{className:classNames("recharts-symbols",o),transform:"translate(".concat(p,", ").concat(u,")"),d:this.getPath()})):null}}]),e}(reactExports.PureComponent);Symbols.displayName="Symbols";Symbols.propTypes=_objectSpread$p({},PRESENTATION_ATTRIBUTES,{className:propTypesExports.string,type:propTypesExports.oneOf(["circle","cross","diamond","square","star","triangle","wye"]),cx:propTypesExports.number,cy:propTypesExports.number,size:propTypesExports.number,sizeType:propTypesExports.oneOf(["area","diameter"])});Symbols.defaultProps={type:"circle",size:64,sizeType:"area"};const Symbols$1=Symbols;function _typeof$m(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$m=function(n){return typeof n}:_typeof$m=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$m(t)}function _extends$g(){return _extends$g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$g.apply(this,arguments)}function _defineProperty$r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck$n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$n(t,e,n){return e&&_defineProperties$m(t.prototype,e),n&&_defineProperties$m(t,n),t}function _possibleConstructorReturn$m(t,e){return e&&(_typeof$m(e)==="object"||typeof e=="function")?e:_assertThisInitialized$l(t)}function _assertThisInitialized$l(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$l(t){return _getPrototypeOf$l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$l(t)}function _inherits$m(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$l(t,e)}function _setPrototypeOf$l(t,e){return _setPrototypeOf$l=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$l(t,e)}var SIZE=32,ICON_TYPES$1=LEGEND_TYPES.filter(function(t){return t!=="none"}),DefaultLegendContent=function(t){_inherits$m(e,t);function e(){return _classCallCheck$n(this,e),_possibleConstructorReturn$m(this,_getPrototypeOf$l(e).apply(this,arguments))}return _createClass$n(e,[{key:"renderIcon",value:function(r){var o=this.props.inactiveColor,p=SIZE/2,u=SIZE/6,l=SIZE/3,f=r.inactive?o:r.color;return r.type==="plainline"?React.createElement("line",{strokeWidth:4,fill:"none",stroke:f,strokeDasharray:r.payload.strokeDasharray,x1:0,y1:p,x2:SIZE,y2:p,className:"recharts-legend-icon"}):r.type==="line"?React.createElement("path",{strokeWidth:4,fill:"none",stroke:f,d:"M0,".concat(p,"h").concat(l,`
            A`).concat(u,",").concat(u,",0,1,1,").concat(2*l,",").concat(p,`
            H`).concat(SIZE,"M").concat(2*l,",").concat(p,`
            A`).concat(u,",").concat(u,",0,1,1,").concat(l,",").concat(p),className:"recharts-legend-icon"}):r.type==="rect"?React.createElement("path",{stroke:"none",fill:f,d:"M0,".concat(SIZE/8,"h").concat(SIZE,"v").concat(SIZE*3/4,"h").concat(-SIZE,"z"),className:"recharts-legend-icon"}):React.createElement(Symbols$1,{fill:f,cx:p,cy:p,size:SIZE,sizeType:"diameter",type:r.type})}},{key:"renderItems",value:function(){var r=this,o=this.props,p=o.payload,u=o.iconSize,l=o.layout,f=o.formatter,h={x:0,y:0,width:SIZE,height:SIZE},d={display:l==="horizontal"?"inline-block":"block",marginRight:10},m={display:"inline-block",verticalAlign:"middle",marginRight:4};return p.map(function(v,_){var T,g=v.formatter||f,$=classNames((T={"recharts-legend-item":!0},_defineProperty$r(T,"legend-item-".concat(_),!0),_defineProperty$r(T,"inactive",v.inactive),T));return v.type==="none"?null:React.createElement("li",_extends$g({className:$,style:d,key:"legend-item-".concat(_)},filterEventsOfChild(r.props,v,_)),React.createElement(Surface,{width:u,height:u,viewBox:h,style:m},r.renderIcon(v)),React.createElement("span",{className:"recharts-legend-item-text"},g?g(v.value,v,_):v.value))})}},{key:"render",value:function(){var r=this.props,o=r.payload,p=r.layout,u=r.align;if(!o||!o.length)return null;var l={padding:0,margin:0,textAlign:p==="horizontal"?u:"left"};return React.createElement("ul",{className:"recharts-default-legend",style:l},this.renderItems())}}]),e}(reactExports.PureComponent);DefaultLegendContent.displayName="Legend";DefaultLegendContent.propTypes={content:propTypesExports.element,iconSize:propTypesExports.number,iconType:propTypesExports.oneOf(ICON_TYPES$1),layout:propTypesExports.oneOf(["horizontal","vertical"]),align:propTypesExports.oneOf(["center","left","right"]),verticalAlign:propTypesExports.oneOf(["top","bottom","middle"]),payload:propTypesExports.arrayOf(propTypesExports.shape({value:propTypesExports.any,id:propTypesExports.any,type:propTypesExports.oneOf(LEGEND_TYPES)})),inactiveColor:propTypesExports.string,formatter:propTypesExports.func,onMouseEnter:propTypesExports.func,onMouseLeave:propTypesExports.func,onClick:propTypesExports.func};DefaultLegendContent.defaultProps={iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"};const DefaultLegendContent$1=DefaultLegendContent;function _typeof$l(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$l=function(n){return typeof n}:_typeof$l=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$l(t)}function ownKeys$l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$o(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$l(n,!0).forEach(function(r){_defineProperty$q(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$l(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck$m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$m(t,e,n){return e&&_defineProperties$l(t.prototype,e),n&&_defineProperties$l(t,n),t}function _possibleConstructorReturn$l(t,e){return e&&(_typeof$l(e)==="object"||typeof e=="function")?e:_assertThisInitialized$k(t)}function _assertThisInitialized$k(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$k(t){return _getPrototypeOf$k=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$k(t)}function _inherits$l(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$k(t,e)}function _setPrototypeOf$k(t,e){return _setPrototypeOf$k=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$k(t,e)}var defaultUniqBy$1=function t(e){return e.value},getUniqPaylod$1=function t(e,n){return e===!0?uniqBy_1(n,defaultUniqBy$1):isFunction_1(e)?uniqBy_1(n,e):n},renderContent$1=function t(e,n){return React.isValidElement(e)?React.cloneElement(e,n):isFunction_1(e)?e(n):React.createElement(DefaultLegendContent$1,n)},EPS$2=1,ICON_TYPES=LEGEND_TYPES.filter(function(t){return t!=="none"}),Legend=function(t){_inherits$l(e,t);function e(){var n,r;_classCallCheck$m(this,e);for(var o=arguments.length,p=new Array(o),u=0;u<o;u++)p[u]=arguments[u];return r=_possibleConstructorReturn$l(this,(n=_getPrototypeOf$k(e)).call.apply(n,[this].concat(p))),r.state={boxWidth:-1,boxHeight:-1},r}return _createClass$m(e,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){var r=this.state,o=r.boxWidth,p=r.boxHeight;return o>=0&&p>=0?{width:o,height:p}:null}},{key:"getDefaultPosition",value:function(r){var o=this.props,p=o.layout,u=o.align,l=o.verticalAlign,f=o.margin,h=o.chartWidth,d=o.chartHeight,m,v;if(!r||(r.left===void 0||r.left===null)&&(r.right===void 0||r.right===null))if(u==="center"&&p==="vertical"){var _=this.getBBox()||{width:0};m={left:((h||0)-_.width)/2}}else m=u==="right"?{right:f&&f.right||0}:{left:f&&f.left||0};if(!r||(r.top===void 0||r.top===null)&&(r.bottom===void 0||r.bottom===null))if(l==="middle"){var T=this.getBBox()||{height:0};v={top:((d||0)-T.height)/2}}else v=l==="bottom"?{bottom:f&&f.bottom||0}:{top:f&&f.top||0};return _objectSpread$o({},m,{},v)}},{key:"updateBBox",value:function(){var r=this.state,o=r.boxWidth,p=r.boxHeight,u=this.props.onBBoxUpdate;if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var l=this.wrapperNode.getBoundingClientRect();(Math.abs(l.width-o)>EPS$2||Math.abs(l.height-p)>EPS$2)&&this.setState({boxWidth:l.width,boxHeight:l.height},function(){u&&u(l)})}else(o!==-1||p!==-1)&&this.setState({boxWidth:-1,boxHeight:-1},function(){u&&u(null)})}},{key:"render",value:function(){var r=this,o=this.props,p=o.content,u=o.width,l=o.height,f=o.wrapperStyle,h=o.paylodUniqBy,d=o.payload,m=_objectSpread$o({position:"absolute",width:u||"auto",height:l||"auto"},this.getDefaultPosition(f),{},f);return React.createElement("div",{className:"recharts-legend-wrapper",style:m,ref:function(_){r.wrapperNode=_}},renderContent$1(p,_objectSpread$o({},this.props,{payload:getUniqPaylod$1(h,d)})))}}],[{key:"getWithHeight",value:function(r,o){var p=r.props.layout;return p==="vertical"&&isNumber(r.props.height)?{height:r.props.height}:p==="horizontal"?{width:r.props.width||o}:null}}]),e}(reactExports.PureComponent);Legend.displayName="Legend";Legend.propTypes={content:propTypesExports.oneOfType([propTypesExports.element,propTypesExports.func]),wrapperStyle:propTypesExports.object,chartWidth:propTypesExports.number,chartHeight:propTypesExports.number,width:propTypesExports.number,height:propTypesExports.number,iconSize:propTypesExports.number,iconType:propTypesExports.oneOf(ICON_TYPES),layout:propTypesExports.oneOf(["horizontal","vertical"]),align:propTypesExports.oneOf(["center","left","right"]),verticalAlign:propTypesExports.oneOf(["top","bottom","middle"]),margin:propTypesExports.shape({top:propTypesExports.number,left:propTypesExports.number,bottom:propTypesExports.number,right:propTypesExports.number}),payload:propTypesExports.arrayOf(propTypesExports.shape({value:propTypesExports.any,id:propTypesExports.any,type:propTypesExports.oneOf(LEGEND_TYPES)})),paylodUniqBy:propTypesExports.oneOfType([propTypesExports.func,propTypesExports.bool]),formatter:propTypesExports.func,onMouseEnter:propTypesExports.func,onMouseLeave:propTypesExports.func,onClick:propTypesExports.func,onBBoxUpdate:propTypesExports.func};Legend.defaultProps={iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"};const Legend$1=Legend;var baseIsEqual=_baseIsEqual;function isEqual(t,e){return baseIsEqual(t,e)}var isEqual_1=isEqual,rafExports={},raf$1={get exports(){return rafExports},set exports(t){rafExports=t}},performanceNowExports={},performanceNow={get exports(){return performanceNowExports},set exports(t){performanceNowExports=t}};(function(){var t,e,n,r,o,p;typeof performance<"u"&&performance!==null&&performance.now?performanceNow.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(performanceNow.exports=function(){return(t()-o)/1e6},e=process.hrtime,t=function(){var u;return u=e(),u[0]*1e9+u[1]},r=t(),p=process.uptime()*1e9,o=r-p):Date.now?(performanceNow.exports=function(){return Date.now()-n},n=Date.now()):(performanceNow.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(commonjsGlobal);var now$4=performanceNowExports,root$3=typeof window>"u"?commonjsGlobal:window,vendors=["moz","webkit"],suffix="AnimationFrame",raf=root$3["request"+suffix],caf=root$3["cancel"+suffix]||root$3["cancelRequest"+suffix];for(var i$1=0;!raf&&i$1<vendors.length;i$1++)raf=root$3[vendors[i$1]+"Request"+suffix],caf=root$3[vendors[i$1]+"Cancel"+suffix]||root$3[vendors[i$1]+"CancelRequest"+suffix];if(!raf||!caf){var last$1=0,id=0,queue=[],frameDuration=1e3/60;raf=function(t){if(queue.length===0){var e=now$4(),n=Math.max(0,frameDuration-(e-last$1));last$1=n+e,setTimeout(function(){var r=queue.slice(0);queue.length=0;for(var o=0;o<r.length;o++)if(!r[o].cancelled)try{r[o].callback(last$1)}catch(p){setTimeout(function(){throw p},0)}},Math.round(n))}return queue.push({handle:++id,callback:t,cancelled:!1}),id},caf=function(t){for(var e=0;e<queue.length;e++)queue[e].handle===t&&(queue[e].cancelled=!0)}}raf$1.exports=function(t){return raf.call(root$3,t)};var cancel=rafExports.cancel=function(){caf.apply(root$3,arguments)};rafExports.polyfill=function(t){t||(t=root$3),t.requestAnimationFrame=raf,t.cancelAnimationFrame=caf};function setRafTimeout(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=-1,r=function o(p){n<0&&(n=p),p-n>e?(t(p),n=-1):rafExports(o)};rafExports(r)}function _typeof$k(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$k=function(n){return typeof n}:_typeof$k=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$k(t)}function _toArray(t){return _arrayWithHoles$6(t)||_iterableToArray$a(t)||_nonIterableRest$6()}function _nonIterableRest$6(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArray$a(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function _arrayWithHoles$6(t){if(Array.isArray(t))return t}function createAnimateManager(){var t={},e=function(){return null},n=!1,r=function o(p){if(!n){if(Array.isArray(p)){if(!p.length)return;var u=p,l=_toArray(u),f=l[0],h=l.slice(1);if(typeof f=="number"){setRafTimeout(o.bind(null,h),f);return}o(f),setRafTimeout(o.bind(null,h));return}_typeof$k(p)==="object"&&(t=p,e(t)),typeof p=="function"&&p()}};return{stop:function(){n=!0},start:function(p){n=!1,r(p)},subscribe:function(p){return e=p,function(){e=function(){return null}}}}}var SetCache=_SetCache,arrayIncludes=_arrayIncludes,arrayIncludesWith=_arrayIncludesWith,arrayMap$3=_arrayMap,baseUnary$1=_baseUnary,cacheHas=_cacheHas,nativeMin$3=Math.min;function baseIntersection$1(t,e,n){for(var r=n?arrayIncludesWith:arrayIncludes,o=t[0].length,p=t.length,u=p,l=Array(p),f=1/0,h=[];u--;){var d=t[u];u&&e&&(d=arrayMap$3(d,baseUnary$1(e))),f=nativeMin$3(d.length,f),l[u]=!n&&(e||o>=120&&d.length>=120)?new SetCache(u&&d):void 0}d=t[0];var m=-1,v=l[0];t:for(;++m<o&&h.length<f;){var _=d[m],T=e?e(_):_;if(_=n||_!==0?_:0,!(v?cacheHas(v,T):r(h,T,n))){for(u=p;--u;){var g=l[u];if(!(g?cacheHas(g,T):r(t[u],T,n)))continue t}v&&v.push(T),h.push(_)}}return h}var _baseIntersection=baseIntersection$1;function apply$1(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var _apply=apply$1,apply=_apply,nativeMax$5=Math.max;function overRest$1(t,e,n){return e=nativeMax$5(e===void 0?t.length-1:e,0),function(){for(var r=arguments,o=-1,p=nativeMax$5(r.length-e,0),u=Array(p);++o<p;)u[o]=r[e+o];o=-1;for(var l=Array(e+1);++o<e;)l[o]=r[o];return l[e]=n(u),apply(t,this,l)}}var _overRest=overRest$1;function constant$3(t){return function(){return t}}var constant_1=constant$3,getNative=_getNative,defineProperty$2=function(){try{var t=getNative(Object,"defineProperty");return t({},"",{}),t}catch{}}(),_defineProperty$p=defineProperty$2,constant$2=constant_1,defineProperty$1=_defineProperty$p,identity$9=identity_1,baseSetToString$1=defineProperty$1?function(t,e){return defineProperty$1(t,"toString",{configurable:!0,enumerable:!1,value:constant$2(e),writable:!0})}:identity$9,_baseSetToString=baseSetToString$1,HOT_COUNT=800,HOT_SPAN=16,nativeNow=Date.now;function shortOut$1(t){var e=0,n=0;return function(){var r=nativeNow(),o=HOT_SPAN-(r-n);if(n=r,o>0){if(++e>=HOT_COUNT)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var _shortOut=shortOut$1,baseSetToString=_baseSetToString,shortOut=_shortOut,setToString$1=shortOut(baseSetToString),_setToString=setToString$1,identity$8=identity_1,overRest=_overRest,setToString=_setToString;function baseRest$2(t,e){return setToString(overRest(t,e,identity$8),t+"")}var _baseRest=baseRest$2,isArrayLike$4=isArrayLike_1,isObjectLike$2=isObjectLike_1;function isArrayLikeObject$1(t){return isObjectLike$2(t)&&isArrayLike$4(t)}var isArrayLikeObject_1=isArrayLikeObject$1,isArrayLikeObject=isArrayLikeObject_1;function castArrayLikeObject$1(t){return isArrayLikeObject(t)?t:[]}var _castArrayLikeObject=castArrayLikeObject$1,arrayMap$2=_arrayMap,baseIntersection=_baseIntersection,baseRest$1=_baseRest,castArrayLikeObject=_castArrayLikeObject,intersection=baseRest$1(function(t){var e=arrayMap$2(t,castArrayLikeObject);return e.length&&e[0]===t[0]?baseIntersection(e):[]}),intersection_1=intersection;function _objectSpread$n(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){_defineProperty$o(t,o,n[o])})}return t}function _defineProperty$o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var PREFIX_LIST$1=["Webkit","Moz","O","ms"],IN_LINE_PREFIX_LIST=["-webkit-","-moz-","-o-","-ms-"],IN_COMPATIBLE_PROPERTY=["transform","transformOrigin","transition"],getIntersectionKeys=function t(e,n){return intersection_1(Object.keys(e),Object.keys(n))},identity$7=function t(e){return e},getDashCase=function t(e){return e.replace(/([A-Z])/g,function(n){return"-".concat(n.toLowerCase())})},generatePrefixStyle$1=function t(e,n){if(IN_COMPATIBLE_PROPERTY.indexOf(e)===-1)return _defineProperty$o({},e,n);var r=e==="transition",o=e.replace(/(\w)/,function(u){return u.toUpperCase()}),p=n;return PREFIX_LIST$1.reduce(function(u,l,f){return r&&(p=n.replace(/(transform|transform-origin)/gim,"".concat(IN_LINE_PREFIX_LIST[f],"$1"))),_objectSpread$n({},u,_defineProperty$o({},l+o,p))},{})},mapObject=function t(e,n){return Object.keys(n).reduce(function(r,o){return _objectSpread$n({},r,_defineProperty$o({},o,e(o,n[o])))},{})},translateStyle=function t(e){return Object.keys(e).reduce(function(n,r){return _objectSpread$n({},n,generatePrefixStyle$1(r,n[r]))},e)},getTransitionVal=function t(e,n,r){return e.map(function(o){return"".concat(getDashCase(o)," ").concat(n,"ms ").concat(r)}).join(",")};function _slicedToArray$5(t,e){return _arrayWithHoles$5(t)||_iterableToArrayLimit$5(t,e)||_nonIterableRest$5()}function _nonIterableRest$5(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit$5(t,e){var n=[],r=!0,o=!1,p=void 0;try{for(var u=t[Symbol.iterator](),l;!(r=(l=u.next()).done)&&(n.push(l.value),!(e&&n.length===e));r=!0);}catch(f){o=!0,p=f}finally{try{!r&&u.return!=null&&u.return()}finally{if(o)throw p}}return n}function _arrayWithHoles$5(t){if(Array.isArray(t))return t}function _toConsumableArray$9(t){return _arrayWithoutHoles$9(t)||_iterableToArray$9(t)||_nonIterableSpread$9()}function _nonIterableSpread$9(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray$9(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function _arrayWithoutHoles$9(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var ACCURACY=1e-4,cubicBezierFactor=function t(e,n){return[0,3*e,3*n-6*e,3*e-3*n+1]},multyTime=function t(e,n){return e.map(function(r,o){return r*Math.pow(n,o)}).reduce(function(r,o){return r+o})},cubicBezier=function t(e,n){return function(r){var o=cubicBezierFactor(e,n);return multyTime(o,r)}},derivativeCubicBezier=function t(e,n){return function(r){var o=cubicBezierFactor(e,n),p=_toConsumableArray$9(o.map(function(u,l){return u*l}).slice(1)).concat([0]);return multyTime(p,r)}},configBezier=function t(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=n[0],p=n[1],u=n[2],l=n[3];if(n.length===1)switch(n[0]){case"linear":o=0,p=0,u=1,l=1;break;case"ease":o=.25,p=.1,u=.25,l=1;break;case"ease-in":o=.42,p=0,u=1,l=1;break;case"ease-out":o=.42,p=0,u=.58,l=1;break;case"ease-in-out":o=0,p=0,u=.58,l=1;break;default:{var f=n[0].split("(");if(f[0]==="cubic-bezier"&&f[1].split(")")[0].split(",").length===4){var h=f[1].split(")")[0].split(",").map(function($){return parseFloat($)}),d=_slicedToArray$5(h,4);o=d[0],p=d[1],u=d[2],l=d[3]}}}var m=cubicBezier(o,u),v=cubicBezier(p,l),_=derivativeCubicBezier(o,u),T=function(E){return E>1?1:E<0?0:E},g=function(E){for(var b=E>1?1:E,w=b,S=0;S<8;++S){var A=m(w)-b,O=_(w);if(Math.abs(A-b)<ACCURACY||O<ACCURACY)return v(w);w=T(w-A/O)}return v(w)};return g.isStepper=!1,g},configSpring=function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.stiff,r=n===void 0?100:n,o=e.damping,p=o===void 0?8:o,u=e.dt,l=u===void 0?17:u,f=function(d,m,v){var _=-(d-m)*r,T=v*p,g=v+(_-T)*l/1e3,$=v*l/1e3+d;return Math.abs($-m)<ACCURACY&&Math.abs(g)<ACCURACY?[m,0]:[$,g]};return f.isStepper=!0,f.dt=l,f},configEasing=function t(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=n[0];if(typeof o=="string")switch(o){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return configBezier(o);case"spring":return configSpring();default:if(o.split("(")[0]==="cubic-bezier")return configBezier(o)}return typeof o=="function"?o:null};function createBaseFor$1(t){return function(e,n,r){for(var o=-1,p=Object(e),u=r(e),l=u.length;l--;){var f=u[t?l:++o];if(n(p[f],f,p)===!1)break}return e}}var _createBaseFor=createBaseFor$1,createBaseFor=_createBaseFor,baseFor$1=createBaseFor(),_baseFor=baseFor$1,baseFor=_baseFor,keys$1=keys_1;function baseForOwn$2(t,e){return t&&baseFor(t,e,keys$1)}var _baseForOwn=baseForOwn$2,isArrayLike$3=isArrayLike_1;function createBaseEach$1(t,e){return function(n,r){if(n==null)return n;if(!isArrayLike$3(n))return t(n,r);for(var o=n.length,p=e?o:-1,u=Object(n);(e?p--:++p<o)&&r(u[p],p,u)!==!1;);return n}}var _createBaseEach=createBaseEach$1,baseForOwn$1=_baseForOwn,createBaseEach=_createBaseEach,baseEach$4=createBaseEach(baseForOwn$1),_baseEach=baseEach$4,baseEach$3=_baseEach;function baseFilter$1(t,e){var n=[];return baseEach$3(t,function(r,o,p){e(r,o,p)&&n.push(r)}),n}var _baseFilter=baseFilter$1,arrayFilter=_arrayFilter,baseFilter=_baseFilter,baseIteratee$7=_baseIteratee,isArray$5=isArray_1;function filter(t,e){var n=isArray$5(t)?arrayFilter:baseFilter;return n(t,baseIteratee$7(e))}var filter_1=filter;function _toConsumableArray$8(t){return _arrayWithoutHoles$8(t)||_iterableToArray$8(t)||_nonIterableSpread$8()}function _nonIterableSpread$8(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray$8(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function _arrayWithoutHoles$8(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _objectSpread$m(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){_defineProperty$n(t,o,n[o])})}return t}function _defineProperty$n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _slicedToArray$4(t,e){return _arrayWithHoles$4(t)||_iterableToArrayLimit$4(t,e)||_nonIterableRest$4()}function _nonIterableRest$4(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit$4(t,e){var n=[],r=!0,o=!1,p=void 0;try{for(var u=t[Symbol.iterator](),l;!(r=(l=u.next()).done)&&(n.push(l.value),!(e&&n.length===e));r=!0);}catch(f){o=!0,p=f}finally{try{!r&&u.return!=null&&u.return()}finally{if(o)throw p}}return n}function _arrayWithHoles$4(t){if(Array.isArray(t))return t}var alpha=function t(e,n,r){return e+(n-e)*r},needContinue=function t(e){var n=e.from,r=e.to;return n!==r},calStepperVals=function t(e,n,r){var o=mapObject(function(p,u){if(needContinue(u)){var l=e(u.from,u.to,u.velocity),f=_slicedToArray$4(l,2),h=f[0],d=f[1];return _objectSpread$m({},u,{from:h,velocity:d})}return u},n);return r<1?mapObject(function(p,u){return needContinue(u)?_objectSpread$m({},u,{velocity:alpha(u.velocity,o[p].velocity,r),from:alpha(u.from,o[p].from,r)}):u},n):t(e,o,r-1)};const configUpdate=function(t,e,n,r,o){var p=getIntersectionKeys(t,e),u=p.reduce(function($,E){return _objectSpread$m({},$,_defineProperty$n({},E,[t[E],e[E]]))},{}),l=p.reduce(function($,E){return _objectSpread$m({},$,_defineProperty$n({},E,{from:t[E],velocity:0,to:e[E]}))},{}),f=-1,h,d,m=function(){return null},v=function(){return mapObject(function(E,b){return b.from},l)},_=function(){return!filter_1(l,needContinue).length},T=function(E){h||(h=E);var b=E-h,w=b/n.dt;l=calStepperVals(n,l,w),o(_objectSpread$m({},t,e,v())),h=E,_()||(f=rafExports(m))},g=function(E){d||(d=E);var b=(E-d)/r,w=mapObject(function(A,O){return alpha.apply(void 0,_toConsumableArray$8(O).concat([n(b)]))},u);if(o(_objectSpread$m({},t,e,w)),b<1)f=rafExports(m);else{var S=mapObject(function(A,O){return alpha.apply(void 0,_toConsumableArray$8(O).concat([n(1)]))},u);o(_objectSpread$m({},t,e,S))}};return m=n.isStepper?T:g,function(){return rafExports(m),function(){cancel(f)}}};function _typeof$j(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$j=function(n){return typeof n}:_typeof$j=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$j(t)}function _objectWithoutProperties$6(t,e){if(t==null)return{};var n=_objectWithoutPropertiesLoose$6(t,e),r,o;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(o=0;o<p.length;o++)r=p[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _objectWithoutPropertiesLoose$6(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,p;for(p=0;p<r.length;p++)o=r[p],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function _toConsumableArray$7(t){return _arrayWithoutHoles$7(t)||_iterableToArray$7(t)||_nonIterableSpread$7()}function _nonIterableSpread$7(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray$7(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function _arrayWithoutHoles$7(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _objectSpread$l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){_defineProperty$m(t,o,n[o])})}return t}function _defineProperty$m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck$l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$l(t,e,n){return e&&_defineProperties$k(t.prototype,e),n&&_defineProperties$k(t,n),t}function _possibleConstructorReturn$k(t,e){return e&&(_typeof$j(e)==="object"||typeof e=="function")?e:_assertThisInitialized$j(t)}function _getPrototypeOf$j(t){return _getPrototypeOf$j=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$j(t)}function _inherits$k(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$j(t,e)}function _setPrototypeOf$j(t,e){return _setPrototypeOf$j=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$j(t,e)}function _assertThisInitialized$j(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var Animate=function(t){_inherits$k(e,t);function e(n,r){var o;_classCallCheck$l(this,e),o=_possibleConstructorReturn$k(this,_getPrototypeOf$j(e).call(this,n,r));var p=o.props,u=p.isActive,l=p.attributeName,f=p.from,h=p.to,d=p.steps,m=p.children;if(o.handleStyleChange=o.handleStyleChange.bind(_assertThisInitialized$j(_assertThisInitialized$j(o))),o.changeStyle=o.changeStyle.bind(_assertThisInitialized$j(_assertThisInitialized$j(o))),!u)return o.state={style:{}},typeof m=="function"&&(o.state={style:h}),_possibleConstructorReturn$k(o);if(d&&d.length)o.state={style:d[0].style};else if(f){if(typeof m=="function")return o.state={style:f},_possibleConstructorReturn$k(o);o.state={style:l?_defineProperty$m({},l,f):f}}else o.state={style:{}};return o}return _createClass$l(e,[{key:"componentDidMount",value:function(){var r=this.props,o=r.isActive,p=r.canBegin;this.mounted=!0,!(!o||!p)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(r){var o=this.props,p=o.isActive,u=o.canBegin,l=o.attributeName,f=o.shouldReAnimate;if(u){if(!p){var h={style:l?_defineProperty$m({},l,this.props.to):this.props.to};this.state&&this.state.style&&(l&&this.state.style[l]!==this.props.to||!l&&this.state.style!==this.props.to)&&this.setState(h);return}if(!(isEqual_1(r.to,this.props.to)&&r.canBegin&&r.isActive)){var d=!r.canBegin||!r.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var m=d||f?this.props.from:r.to;if(this.state&&this.state.style){var v={style:l?_defineProperty$m({},l,m):m};(l&&this.state.style[l]!==m||!l&&this.state.style!==m)&&this.setState(v)}this.runAnimation(_objectSpread$l({},this.props,{from:m,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation()}},{key:"runJSAnimation",value:function(r){var o=this,p=r.from,u=r.to,l=r.duration,f=r.easing,h=r.begin,d=r.onAnimationEnd,m=r.onAnimationStart,v=configUpdate(p,u,configEasing(f),l,this.changeStyle),_=function(){o.stopJSAnimation=v()};this.manager.start([m,h,_,l,d])}},{key:"runStepAnimation",value:function(r){var o=this,p=r.steps,u=r.begin,l=r.onAnimationStart,f=p[0],h=f.style,d=f.duration,m=d===void 0?0:d,v=function(T,g,$){if($===0)return T;var E=g.duration,b=g.easing,w=b===void 0?"ease":b,S=g.style,A=g.properties,O=g.onAnimationEnd,C=$>0?p[$-1]:g,M=A||Object.keys(S);if(typeof w=="function"||w==="spring")return _toConsumableArray$7(T).concat([o.runJSAnimation.bind(o,{from:C.style,to:S,duration:E,easing:w}),E]);var I=getTransitionVal(M,E,w),N=_objectSpread$l({},C.style,S,{transition:I});return _toConsumableArray$7(T).concat([N,E,O]).filter(identity$7)};return this.manager.start([l].concat(_toConsumableArray$7(p.reduce(v,[h,Math.max(m,u)])),[r.onAnimationEnd]))}},{key:"runAnimation",value:function(r){this.manager||(this.manager=createAnimateManager());var o=r.begin,p=r.duration,u=r.attributeName,l=r.to,f=r.easing,h=r.onAnimationStart,d=r.onAnimationEnd,m=r.steps,v=r.children,_=this.manager;if(this.unSubscribe=_.subscribe(this.handleStyleChange),typeof f=="function"||typeof v=="function"||f==="spring"){this.runJSAnimation(r);return}if(m.length>1){this.runStepAnimation(r);return}var T=u?_defineProperty$m({},u,l):l,g=getTransitionVal(Object.keys(T),p,f);_.start([h,o,_objectSpread$l({},T,{transition:g}),p,d])}},{key:"handleStyleChange",value:function(r){this.changeStyle(r)}},{key:"changeStyle",value:function(r){this.mounted&&this.setState({style:r})}},{key:"render",value:function(){var r=this.props,o=r.children;r.begin,r.duration,r.attributeName,r.easing;var p=r.isActive;r.steps,r.from,r.to,r.canBegin,r.onAnimationEnd,r.shouldReAnimate,r.onAnimationReStart;var u=_objectWithoutProperties$6(r,["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"]),l=reactExports.Children.count(o),f=translateStyle(this.state.style);if(typeof o=="function")return o(f);if(!p||l===0)return o;var h=function(m){var v=m.props,_=v.style,T=_===void 0?{}:_,g=v.className,$=reactExports.cloneElement(m,_objectSpread$l({},u,{style:_objectSpread$l({},T,f),className:g}));return $};return l===1?h(reactExports.Children.only(o)):React.createElement("div",null,reactExports.Children.map(o,function(d){return h(d)}))}}]),e}(reactExports.PureComponent);Animate.displayName="Animate";Animate.propTypes={from:propTypesExports.oneOfType([propTypesExports.object,propTypesExports.string]),to:propTypesExports.oneOfType([propTypesExports.object,propTypesExports.string]),attributeName:propTypesExports.string,duration:propTypesExports.number,begin:propTypesExports.number,easing:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.func]),steps:propTypesExports.arrayOf(propTypesExports.shape({duration:propTypesExports.number.isRequired,style:propTypesExports.object.isRequired,easing:propTypesExports.oneOfType([propTypesExports.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),propTypesExports.func]),properties:propTypesExports.arrayOf("string"),onAnimationEnd:propTypesExports.func})),children:propTypesExports.oneOfType([propTypesExports.node,propTypesExports.func]),isActive:propTypesExports.bool,canBegin:propTypesExports.bool,onAnimationEnd:propTypesExports.func,shouldReAnimate:propTypesExports.bool,onAnimationStart:propTypesExports.func,onAnimationReStart:propTypesExports.func};Animate.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function t(){},onAnimationStart:function t(){}};propTypesExports.object,propTypesExports.object,propTypesExports.object,propTypesExports.element;propTypesExports.object,propTypesExports.object,propTypesExports.object,propTypesExports.oneOfType([propTypesExports.array,propTypesExports.element]),propTypesExports.any;var Symbol$1=_Symbol,isArguments=isArguments_1,isArray$4=isArray_1,spreadableSymbol=Symbol$1?Symbol$1.isConcatSpreadable:void 0;function isFlattenable$1(t){return isArray$4(t)||isArguments(t)||!!(spreadableSymbol&&t&&t[spreadableSymbol])}var _isFlattenable=isFlattenable$1,arrayPush=_arrayPush,isFlattenable=_isFlattenable;function baseFlatten$2(t,e,n,r,o){var p=-1,u=t.length;for(n||(n=isFlattenable),o||(o=[]);++p<u;){var l=t[p];e>0&&n(l)?e>1?baseFlatten$2(l,e-1,n,r,o):arrayPush(o,l):r||(o[o.length]=l)}return o}var _baseFlatten=baseFlatten$2,baseEach$2=_baseEach,isArrayLike$2=isArrayLike_1;function baseMap$2(t,e){var n=-1,r=isArrayLike$2(t)?Array(t.length):[];return baseEach$2(t,function(o,p,u){r[++n]=e(o,p,u)}),r}var _baseMap=baseMap$2;function baseSortBy$1(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}var _baseSortBy=baseSortBy$1,isSymbol$4=isSymbol_1;function compareAscending$1(t,e){if(t!==e){var n=t!==void 0,r=t===null,o=t===t,p=isSymbol$4(t),u=e!==void 0,l=e===null,f=e===e,h=isSymbol$4(e);if(!l&&!h&&!p&&t>e||p&&u&&f&&!l&&!h||r&&u&&f||!n&&f||!o)return 1;if(!r&&!p&&!h&&t<e||h&&n&&o&&!r&&!p||l&&n&&o||!u&&o||!f)return-1}return 0}var _compareAscending=compareAscending$1,compareAscending=_compareAscending;function compareMultiple$1(t,e,n){for(var r=-1,o=t.criteria,p=e.criteria,u=o.length,l=n.length;++r<u;){var f=compareAscending(o[r],p[r]);if(f){if(r>=l)return f;var h=n[r];return f*(h=="desc"?-1:1)}}return t.index-e.index}var _compareMultiple=compareMultiple$1,arrayMap$1=_arrayMap,baseGet=_baseGet,baseIteratee$6=_baseIteratee,baseMap$1=_baseMap,baseSortBy=_baseSortBy,baseUnary=_baseUnary,compareMultiple=_compareMultiple,identity$6=identity_1,isArray$3=isArray_1;function baseOrderBy$1(t,e,n){e.length?e=arrayMap$1(e,function(p){return isArray$3(p)?function(u){return baseGet(u,p.length===1?p[0]:p)}:p}):e=[identity$6];var r=-1;e=arrayMap$1(e,baseUnary(baseIteratee$6));var o=baseMap$1(t,function(p,u,l){var f=arrayMap$1(e,function(h){return h(p)});return{criteria:f,index:++r,value:p}});return baseSortBy(o,function(p,u){return compareMultiple(p,u,n)})}var _baseOrderBy=baseOrderBy$1,eq=eq_1,isArrayLike$1=isArrayLike_1,isIndex=_isIndex,isObject$5=isObject_1;function isIterateeCall$4(t,e,n){if(!isObject$5(n))return!1;var r=typeof e;return(r=="number"?isArrayLike$1(n)&&isIndex(e,n.length):r=="string"&&e in n)?eq(n[e],t):!1}var _isIterateeCall=isIterateeCall$4,baseFlatten$1=_baseFlatten,baseOrderBy=_baseOrderBy,baseRest=_baseRest,isIterateeCall$3=_isIterateeCall,sortBy=baseRest(function(t,e){if(t==null)return[];var n=e.length;return n>1&&isIterateeCall$3(t,e[0],e[1])?e=[]:n>2&&isIterateeCall$3(e[0],e[1],e[2])&&(e=[e[0]]),baseOrderBy(t,baseFlatten$1(e,1),[])}),sortBy_1=sortBy;function _typeof$i(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$i=function(n){return typeof n}:_typeof$i=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$i(t)}function _slicedToArray$3(t,e){return _arrayWithHoles$3(t)||_iterableToArrayLimit$3(t,e)||_nonIterableRest$3()}function _nonIterableRest$3(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit$3(t,e){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]"){var n=[],r=!0,o=!1,p=void 0;try{for(var u=t[Symbol.iterator](),l;!(r=(l=u.next()).done)&&(n.push(l.value),!(e&&n.length===e));r=!0);}catch(f){o=!0,p=f}finally{try{!r&&u.return!=null&&u.return()}finally{if(o)throw p}}return n}}function _arrayWithHoles$3(t){if(Array.isArray(t))return t}function ownKeys$k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$k(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$k(n,!0).forEach(function(r){_defineProperty$l(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$k(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck$k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$k(t,e,n){return e&&_defineProperties$j(t.prototype,e),n&&_defineProperties$j(t,n),t}function _possibleConstructorReturn$j(t,e){return e&&(_typeof$i(e)==="object"||typeof e=="function")?e:_assertThisInitialized$i(t)}function _assertThisInitialized$i(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$i(t){return _getPrototypeOf$i=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$i(t)}function _inherits$j(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$i(t,e)}function _setPrototypeOf$i(t,e){return _setPrototypeOf$i=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$i(t,e)}var defaultFormatter=function t(e){return isArray_1(e)&&isNumOrStr(e[0])&&isNumOrStr(e[1])?e.join(" ~ "):e},DefaultTooltipContent=function(t){_inherits$j(e,t);function e(){return _classCallCheck$k(this,e),_possibleConstructorReturn$j(this,_getPrototypeOf$i(e).apply(this,arguments))}return _createClass$k(e,[{key:"renderContent",value:function(){var r=this.props,o=r.payload,p=r.separator,u=r.formatter,l=r.itemStyle,f=r.itemSorter;if(o&&o.length){var h={padding:0,margin:0},d=(f?sortBy_1(o,f):o).map(function(m,v){if(m.type==="none")return null;var _=_objectSpread$k({display:"block",paddingTop:4,paddingBottom:4,color:m.color||"#000"},l),T=m.formatter||u||defaultFormatter,g=m.name,$=m.value;if(T){var E=T($,g,m,v);if(Array.isArray(E)){var b=_slicedToArray$3(E,2);$=b[0],g=b[1]}else $=E}return React.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(v),style:_},isNumOrStr(g)?React.createElement("span",{className:"recharts-tooltip-item-name"},g):null,isNumOrStr(g)?React.createElement("span",{className:"recharts-tooltip-item-separator"},p):null,React.createElement("span",{className:"recharts-tooltip-item-value"},$),React.createElement("span",{className:"recharts-tooltip-item-unit"},m.unit||""))});return React.createElement("ul",{className:"recharts-tooltip-item-list",style:h},d)}return null}},{key:"render",value:function(){var r=this.props,o=r.wrapperClassName,p=r.contentStyle,u=r.labelClassName,l=r.labelStyle,f=r.label,h=r.labelFormatter,d=_objectSpread$k({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},p),m=_objectSpread$k({margin:0},l),v=isNumOrStr(f),_=v?f:"",T=classNames("recharts-default-tooltip",o),g=classNames("recharts-tooltip-label",u);return v&&h&&(_=h(f)),React.createElement("div",{className:T,style:d},React.createElement("p",{className:g,style:m},_),this.renderContent())}}]),e}(reactExports.PureComponent);DefaultTooltipContent.displayName="DefaultTooltipContent";DefaultTooltipContent.propTypes={separator:propTypesExports.string,wrapperClassName:propTypesExports.string,labelClassName:propTypesExports.string,formatter:propTypesExports.func,contentStyle:propTypesExports.object,itemStyle:propTypesExports.object,labelStyle:propTypesExports.object,labelFormatter:propTypesExports.func,label:propTypesExports.any,payload:propTypesExports.arrayOf(propTypesExports.shape({name:propTypesExports.any,value:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string,propTypesExports.array]),unit:propTypesExports.any})),itemSorter:propTypesExports.func};DefaultTooltipContent.defaultProps={separator:" : ",contentStyle:{},itemStyle:{},labelStyle:{}};const DefaultTooltipContent$1=DefaultTooltipContent;function _typeof$h(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$h=function(n){return typeof n}:_typeof$h=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$h(t)}function ownKeys$j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$j(n,!0).forEach(function(r){_defineProperty$k(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$j(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck$j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$j(t,e,n){return e&&_defineProperties$i(t.prototype,e),n&&_defineProperties$i(t,n),t}function _possibleConstructorReturn$i(t,e){return e&&(_typeof$h(e)==="object"||typeof e=="function")?e:_assertThisInitialized$h(t)}function _assertThisInitialized$h(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$h(t){return _getPrototypeOf$h=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$h(t)}function _inherits$i(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$h(t,e)}function _setPrototypeOf$h(t,e){return _setPrototypeOf$h=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$h(t,e)}var CLS_PREFIX="recharts-tooltip-wrapper",EPS$1=1,defaultUniqBy=function t(e){return e.dataKey},getUniqPaylod=function t(e,n){return e===!0?uniqBy_1(n,defaultUniqBy):isFunction_1(e)?uniqBy_1(n,e):n},propTypes$2={allowEscapeViewBox:propTypesExports.shape({x:propTypesExports.boolean,y:propTypesExports.boolean}),content:propTypesExports.oneOfType([propTypesExports.element,propTypesExports.func]),viewBox:propTypesExports.shape({x:propTypesExports.number,y:propTypesExports.number,width:propTypesExports.number,height:propTypesExports.number}),active:propTypesExports.bool,separator:propTypesExports.string,formatter:propTypesExports.func,offset:propTypesExports.number,itemStyle:propTypesExports.object,labelStyle:propTypesExports.object,wrapperStyle:propTypesExports.object,contentStyle:propTypesExports.object,cursor:propTypesExports.oneOfType([propTypesExports.bool,propTypesExports.element,propTypesExports.object]),coordinate:propTypesExports.shape({x:propTypesExports.number,y:propTypesExports.number}),position:propTypesExports.shape({x:propTypesExports.number,y:propTypesExports.number}),label:propTypesExports.any,payload:propTypesExports.arrayOf(propTypesExports.shape({name:propTypesExports.any,value:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string,propTypesExports.array]),unit:propTypesExports.any,type:propTypesExports.oneOf(TOOLTIP_TYPES)})),paylodUniqBy:propTypesExports.oneOfType([propTypesExports.func,propTypesExports.bool]),isAnimationActive:propTypesExports.bool,animationDuration:propTypesExports.number,animationEasing:propTypesExports.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),itemSorter:propTypesExports.func,filterNull:propTypesExports.bool,useTranslate3d:propTypesExports.bool},defaultProps$2={active:!1,allowEscapeViewBox:{x:!1,y:!1},offset:10,viewBox:{x1:0,x2:0,y1:0,y2:0},coordinate:{x:0,y:0},cursorStyle:{},separator:" : ",wrapperStyle:{},contentStyle:{},itemStyle:{},labelStyle:{},cursor:!0,isAnimationActive:!isSsr(),animationEasing:"ease",animationDuration:400,filterNull:!0,useTranslate3d:!1},renderContent=function t(e,n){return React.isValidElement(e)?React.cloneElement(e,n):isFunction_1(e)?e(n):React.createElement(DefaultTooltipContent$1,n)},Tooltip=function(t){_inherits$i(e,t);function e(){var n,r;_classCallCheck$j(this,e);for(var o=arguments.length,p=new Array(o),u=0;u<o;u++)p[u]=arguments[u];return r=_possibleConstructorReturn$i(this,(n=_getPrototypeOf$h(e)).call.apply(n,[this].concat(p))),r.state={boxWidth:-1,boxHeight:-1},r.getTranslate=function(l){var f=l.key,h=l.tooltipDimension,d=l.viewBoxDimension,m=r.props,v=m.allowEscapeViewBox,_=m.coordinate,T=m.offset,g=m.position,$=m.viewBox;if(g&&isNumber(g[f]))return g[f];var E=_[f]-h-T,b=_[f]+T;if(v[f])return b;var w=_[f]+h+T,S=$[f]+d;return w>S?Math.max(E,$[f]):Math.max(b,$[f])},r}return _createClass$j(e,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"updateBBox",value:function(){var r=this.state,o=r.boxWidth,p=r.boxHeight;if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var u=this.wrapperNode.getBoundingClientRect();(Math.abs(u.width-o)>EPS$1||Math.abs(u.height-p)>EPS$1)&&this.setState({boxWidth:u.width,boxHeight:u.height})}else(o!==-1||p!==-1)&&this.setState({boxWidth:-1,boxHeight:-1})}},{key:"render",value:function(){var r,o=this,p=this.props,u=p.payload,l=p.isAnimationActive,f=p.animationDuration,h=p.animationEasing,d=p.filterNull,m=p.paylodUniqBy,v=getUniqPaylod(m,d&&u&&u.length?u.filter(function(B){return!isNil_1(B.value)}):u),_=v&&v.length,T=this.props,g=T.content,$=T.viewBox,E=T.coordinate,b=T.position,w=T.active,S=T.wrapperStyle,A=_objectSpread$j({pointerEvents:"none",visibility:w&&_?"visible":"hidden",position:"absolute",top:0},S),O,C;if(b&&isNumber(b.x)&&isNumber(b.y))O=b.x,C=b.y;else{var M=this.state,I=M.boxWidth,N=M.boxHeight;I>0&&N>0&&E?(O=this.getTranslate({key:"x",tooltipDimension:I,viewBoxDimension:$.width}),C=this.getTranslate({key:"y",tooltipDimension:N,viewBoxDimension:$.height})):A.visibility="hidden"}A=_objectSpread$j({},translateStyle({transform:this.props.useTranslate3d?"translate3d(".concat(O,"px, ").concat(C,"px, 0)"):"translate(".concat(O,"px, ").concat(C,"px)")}),{},A),l&&w&&(A=_objectSpread$j({},translateStyle({transition:"transform ".concat(f,"ms ").concat(h)}),{},A));var D=classNames(CLS_PREFIX,(r={},_defineProperty$k(r,"".concat(CLS_PREFIX,"-right"),isNumber(O)&&E&&isNumber(E.x)&&O>=E.x),_defineProperty$k(r,"".concat(CLS_PREFIX,"-left"),isNumber(O)&&E&&isNumber(E.x)&&O<E.x),_defineProperty$k(r,"".concat(CLS_PREFIX,"-bottom"),isNumber(C)&&E&&isNumber(E.y)&&C>=E.y),_defineProperty$k(r,"".concat(CLS_PREFIX,"-top"),isNumber(C)&&E&&isNumber(E.y)&&C<E.y),r));return React.createElement("div",{className:D,style:A,ref:function(L){o.wrapperNode=L}},renderContent(g,_objectSpread$j({},this.props,{payload:v})))}}]),e}(reactExports.PureComponent);Tooltip.displayName="Tooltip";Tooltip.propTypes=propTypes$2;Tooltip.defaultProps=defaultProps$2;const Tooltip$1=Tooltip;var root$2=_root,now$3=function(){return root$2.Date.now()},now_1=now$3,reWhitespace=/\s/;function trimmedEndIndex$1(t){for(var e=t.length;e--&&reWhitespace.test(t.charAt(e)););return e}var _trimmedEndIndex=trimmedEndIndex$1,trimmedEndIndex=_trimmedEndIndex,reTrimStart=/^\s+/;function baseTrim$1(t){return t&&t.slice(0,trimmedEndIndex(t)+1).replace(reTrimStart,"")}var _baseTrim=baseTrim$1,baseTrim=_baseTrim,isObject$4=isObject_1,isSymbol$3=isSymbol_1,NAN$2=0/0,reIsBadHex$2=/^[-+]0x[0-9a-f]+$/i,reIsBinary$2=/^0b[01]+$/i,reIsOctal$2=/^0o[0-7]+$/i,freeParseInt$2=parseInt;function toNumber$4(t){if(typeof t=="number")return t;if(isSymbol$3(t))return NAN$2;if(isObject$4(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=isObject$4(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=baseTrim(t);var n=reIsBinary$2.test(t);return n||reIsOctal$2.test(t)?freeParseInt$2(t.slice(2),n?2:8):reIsBadHex$2.test(t)?NAN$2:+t}var toNumber_1=toNumber$4,isObject$3=isObject_1,now$2=now_1,toNumber$3=toNumber_1,FUNC_ERROR_TEXT$3="Expected a function",nativeMax$4=Math.max,nativeMin$2=Math.min;function debounce$3(t,e,n){var r,o,p,u,l,f,h=0,d=!1,m=!1,v=!0;if(typeof t!="function")throw new TypeError(FUNC_ERROR_TEXT$3);e=toNumber$3(e)||0,isObject$3(n)&&(d=!!n.leading,m="maxWait"in n,p=m?nativeMax$4(toNumber$3(n.maxWait)||0,e):p,v="trailing"in n?!!n.trailing:v);function _(O){var C=r,M=o;return r=o=void 0,h=O,u=t.apply(M,C),u}function T(O){return h=O,l=setTimeout(E,e),d?_(O):u}function g(O){var C=O-f,M=O-h,I=e-C;return m?nativeMin$2(I,p-M):I}function $(O){var C=O-f,M=O-h;return f===void 0||C>=e||C<0||m&&M>=p}function E(){var O=now$2();if($(O))return b(O);l=setTimeout(E,g(O))}function b(O){return l=void 0,v&&r?_(O):(r=o=void 0,u)}function w(){l!==void 0&&clearTimeout(l),h=0,r=f=o=l=void 0}function S(){return l===void 0?u:b(now$2())}function A(){var O=now$2(),C=$(O);if(r=arguments,o=this,f=O,C){if(l===void 0)return T(f);if(m)return clearTimeout(l),l=setTimeout(E,e),_(f)}return l===void 0&&(l=setTimeout(E,e)),u}return A.cancel=w,A.flush=S,A}var debounce_1=debounce$3,lib={},ResizeDetector$1={},MapShim=function(){if(typeof Map<"u")return Map;function t(e,n){var r=-1;return e.some(function(o,p){return o[0]===n?(r=p,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=t(this.__entries__,n),o=this.__entries__[r];return o&&o[1]},e.prototype.set=function(n,r){var o=t(this.__entries__,n);~o?this.__entries__[o][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,o=t(r,n);~o&&r.splice(o,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var o=0,p=this.__entries__;o<p.length;o++){var u=p[o];n.call(r,u[1],u[0])}},e}()}(),isBrowser=typeof window<"u"&&typeof document<"u"&&window.document===document,global$1=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),requestAnimationFrame$1=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(global$1):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),trailingTimeout=2;function throttle$2(t,e){var n=!1,r=!1,o=0;function p(){n&&(n=!1,t()),r&&l()}function u(){requestAnimationFrame$1(p)}function l(){var f=Date.now();if(n){if(f-o<trailingTimeout)return;r=!0}else n=!0,r=!1,setTimeout(u,e);o=f}return l}var REFRESH_DELAY=20,transitionKeys=["top","right","bottom","left","width","height","size","weight"],mutationObserverSupported=typeof MutationObserver<"u",ResizeObserverController=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=throttle$2(this.refresh.bind(this),REFRESH_DELAY)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!isBrowser||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),mutationObserverSupported?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!isBrowser||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,o=transitionKeys.some(function(p){return!!~r.indexOf(p)});o&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),defineConfigurable=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},getWindowOf=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||global$1},emptyRect=createRectInit(0,0,0,0);function toFloat(t){return parseFloat(t)||0}function getBordersSize(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,o){var p=t["border-"+o+"-width"];return r+toFloat(p)},0)}function getPaddings(t){for(var e=["top","right","bottom","left"],n={},r=0,o=e;r<o.length;r++){var p=o[r],u=t["padding-"+p];n[p]=toFloat(u)}return n}function getSVGContentRect(t){var e=t.getBBox();return createRectInit(0,0,e.width,e.height)}function getHTMLElementContentRect(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return emptyRect;var r=getWindowOf(t).getComputedStyle(t),o=getPaddings(r),p=o.left+o.right,u=o.top+o.bottom,l=toFloat(r.width),f=toFloat(r.height);if(r.boxSizing==="border-box"&&(Math.round(l+p)!==e&&(l-=getBordersSize(r,"left","right")+p),Math.round(f+u)!==n&&(f-=getBordersSize(r,"top","bottom")+u)),!isDocumentElement(t)){var h=Math.round(l+p)-e,d=Math.round(f+u)-n;Math.abs(h)!==1&&(l-=h),Math.abs(d)!==1&&(f-=d)}return createRectInit(o.left,o.top,l,f)}var isSVGGraphicsElement=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof getWindowOf(t).SVGGraphicsElement}:function(t){return t instanceof getWindowOf(t).SVGElement&&typeof t.getBBox=="function"}}();function isDocumentElement(t){return t===getWindowOf(t).document.documentElement}function getContentRect(t){return isBrowser?isSVGGraphicsElement(t)?getSVGContentRect(t):getHTMLElementContentRect(t):emptyRect}function createReadOnlyRect(t){var e=t.x,n=t.y,r=t.width,o=t.height,p=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,u=Object.create(p.prototype);return defineConfigurable(u,{x:e,y:n,width:r,height:o,top:n,right:e+r,bottom:o+n,left:e}),u}function createRectInit(t,e,n,r){return{x:t,y:e,width:n,height:r}}var ResizeObservation=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=createRectInit(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=getContentRect(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),ResizeObserverEntry=function(){function t(e,n){var r=createReadOnlyRect(n);defineConfigurable(this,{target:e,contentRect:r})}return t}(),ResizeObserverSPI=function(){function t(e,n,r){if(this.activeObservations_=[],this.observations_=new MapShim,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof getWindowOf(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new ResizeObservation(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof getWindowOf(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new ResizeObserverEntry(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),observers=typeof WeakMap<"u"?new WeakMap:new MapShim,ResizeObserver=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=ResizeObserverController.getInstance(),r=new ResizeObserverSPI(e,n,this);observers.set(this,r)}return t}();["observe","unobserve","disconnect"].forEach(function(t){ResizeObserver.prototype[t]=function(){var e;return(e=observers.get(this))[t].apply(e,arguments)}});var index$1=function(){return typeof global$1.ResizeObserver<"u"?global$1.ResizeObserver:ResizeObserver}();const ResizeObserver_es=Object.freeze(Object.defineProperty({__proto__:null,default:index$1},Symbol.toStringTag,{value:"Module"})),require$$2=getAugmentedNamespace(ResizeObserver_es);var FUNC_ERROR_TEXT$2="Expected a function",NAN$1=0/0,symbolTag$1="[object Symbol]",reTrim$1=/^\s+|\s+$/g,reIsBadHex$1=/^[-+]0x[0-9a-f]+$/i,reIsBinary$1=/^0b[01]+$/i,reIsOctal$1=/^0o[0-7]+$/i,freeParseInt$1=parseInt,freeGlobal$1=typeof commonjsGlobal=="object"&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,freeSelf$1=typeof self=="object"&&self&&self.Object===Object&&self,root$1=freeGlobal$1||freeSelf$1||Function("return this")(),objectProto$1=Object.prototype,objectToString$1=objectProto$1.toString,nativeMax$3=Math.max,nativeMin$1=Math.min,now$1=function(){return root$1.Date.now()};function debounce$2(t,e,n){var r,o,p,u,l,f,h=0,d=!1,m=!1,v=!0;if(typeof t!="function")throw new TypeError(FUNC_ERROR_TEXT$2);e=toNumber$2(e)||0,isObject$2(n)&&(d=!!n.leading,m="maxWait"in n,p=m?nativeMax$3(toNumber$2(n.maxWait)||0,e):p,v="trailing"in n?!!n.trailing:v);function _(O){var C=r,M=o;return r=o=void 0,h=O,u=t.apply(M,C),u}function T(O){return h=O,l=setTimeout(E,e),d?_(O):u}function g(O){var C=O-f,M=O-h,I=e-C;return m?nativeMin$1(I,p-M):I}function $(O){var C=O-f,M=O-h;return f===void 0||C>=e||C<0||m&&M>=p}function E(){var O=now$1();if($(O))return b(O);l=setTimeout(E,g(O))}function b(O){return l=void 0,v&&r?_(O):(r=o=void 0,u)}function w(){l!==void 0&&clearTimeout(l),h=0,r=f=o=l=void 0}function S(){return l===void 0?u:b(now$1())}function A(){var O=now$1(),C=$(O);if(r=arguments,o=this,f=O,C){if(l===void 0)return T(f);if(m)return l=setTimeout(E,e),_(f)}return l===void 0&&(l=setTimeout(E,e)),u}return A.cancel=w,A.flush=S,A}function isObject$2(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function isObjectLike$1(t){return!!t&&typeof t=="object"}function isSymbol$2(t){return typeof t=="symbol"||isObjectLike$1(t)&&objectToString$1.call(t)==symbolTag$1}function toNumber$2(t){if(typeof t=="number")return t;if(isSymbol$2(t))return NAN$1;if(isObject$2(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=isObject$2(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(reTrim$1,"");var n=reIsBinary$1.test(t);return n||reIsOctal$1.test(t)?freeParseInt$1(t.slice(2),n?2:8):reIsBadHex$1.test(t)?NAN$1:+t}var lodash_debounce=debounce$2,FUNC_ERROR_TEXT$1="Expected a function",NAN=0/0,symbolTag="[object Symbol]",reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt,freeGlobal=typeof commonjsGlobal=="object"&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,freeSelf=typeof self=="object"&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),objectProto=Object.prototype,objectToString=objectProto.toString,nativeMax$2=Math.max,nativeMin=Math.min,now=function(){return root.Date.now()};function debounce$1(t,e,n){var r,o,p,u,l,f,h=0,d=!1,m=!1,v=!0;if(typeof t!="function")throw new TypeError(FUNC_ERROR_TEXT$1);e=toNumber$1(e)||0,isObject$1(n)&&(d=!!n.leading,m="maxWait"in n,p=m?nativeMax$2(toNumber$1(n.maxWait)||0,e):p,v="trailing"in n?!!n.trailing:v);function _(O){var C=r,M=o;return r=o=void 0,h=O,u=t.apply(M,C),u}function T(O){return h=O,l=setTimeout(E,e),d?_(O):u}function g(O){var C=O-f,M=O-h,I=e-C;return m?nativeMin(I,p-M):I}function $(O){var C=O-f,M=O-h;return f===void 0||C>=e||C<0||m&&M>=p}function E(){var O=now();if($(O))return b(O);l=setTimeout(E,g(O))}function b(O){return l=void 0,v&&r?_(O):(r=o=void 0,u)}function w(){l!==void 0&&clearTimeout(l),h=0,r=f=o=l=void 0}function S(){return l===void 0?u:b(now())}function A(){var O=now(),C=$(O);if(r=arguments,o=this,f=O,C){if(l===void 0)return T(f);if(m)return l=setTimeout(E,e),_(f)}return l===void 0&&(l=setTimeout(E,e)),u}return A.cancel=w,A.flush=S,A}function throttle$1(t,e,n){var r=!0,o=!0;if(typeof t!="function")throw new TypeError(FUNC_ERROR_TEXT$1);return isObject$1(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),debounce$1(t,e,{leading:r,maxWait:e,trailing:o})}function isObject$1(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function isObjectLike(t){return!!t&&typeof t=="object"}function isSymbol$1(t){return typeof t=="symbol"||isObjectLike(t)&&objectToString.call(t)==symbolTag}function toNumber$1(t){if(typeof t=="number")return t;if(isSymbol$1(t))return NAN;if(isObject$1(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=isObject$1(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(reTrim,"");var n=reIsBinary.test(t);return n||reIsOctal.test(t)?freeParseInt(t.slice(2),n?2:8):reIsBadHex.test(t)?NAN:+t}var lodash_throttle=throttle$1;Object.defineProperty(ResizeDetector$1,"__esModule",{value:!0});var _createClass$i=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),_react=reactExports,_react2=_interopRequireDefault$1(_react),_propTypes=propTypesExports,_propTypes2=_interopRequireDefault$1(_propTypes),_resizeObserverPolyfill=require$$2,_resizeObserverPolyfill2=_interopRequireDefault$1(_resizeObserverPolyfill),_lodash=lodash_debounce,_lodash2=_interopRequireDefault$1(_lodash),_lodash3=lodash_throttle,_lodash4=_interopRequireDefault$1(_lodash3);function _interopRequireDefault$1(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck$i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn$h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function _inherits$h(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var listMode={debounce:_lodash2.default,throttle:_lodash4.default},styles={position:"absolute",width:0,height:0,visibility:"hidden",display:"none"},ResizeDetector=function(t){_inherits$h(e,t);function e(n){_classCallCheck$i(this,e);var r=_possibleConstructorReturn$h(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));r.createResizeObserver=function(f){var h=r.props,d=h.handleWidth,m=h.handleHeight,v=h.onResize;f.forEach(function(_){var T=_.contentRect,g=T.width,$=T.height,E=d&&r.width!==g,b=m&&r.height!==$;!r.skipOnMount&&(E||b)&&v(g,$),r.width=g,r.height=$,r.skipOnMount=!1})};var o=n.skipOnMount,p=n.refreshMode,u=n.refreshRate;r.width=void 0,r.height=void 0,r.skipOnMount=o;var l=listMode[p]&&listMode[p](r.createResizeObserver,u)||r.createResizeObserver;return r.ro=new _resizeObserverPolyfill2.default(l),r}return _createClass$i(e,[{key:"componentDidMount",value:function(){var r=this.props.resizableElementId,o=r?document.getElementById(r):this.el.parentElement;this.ro.observe(o)}},{key:"componentWillUnmount",value:function(){var r=this.props.resizableElementId,o=r?document.getElementById(r):this.el.parentElement;this.ro.unobserve(o)}},{key:"render",value:function(){var r=this;return _react2.default.createElement("div",{style:styles,ref:function(p){r.el=p}})}}]),e}(_react.PureComponent);ResizeDetector$1.default=ResizeDetector;ResizeDetector.propTypes={handleWidth:_propTypes2.default.bool,handleHeight:_propTypes2.default.bool,skipOnMount:_propTypes2.default.bool,refreshRate:_propTypes2.default.number,refreshMode:_propTypes2.default.string,resizableElementId:_propTypes2.default.string,onResize:_propTypes2.default.func};ResizeDetector.defaultProps={handleWidth:!1,handleHeight:!1,skipOnMount:!1,refreshRate:1e3,refreshMode:void 0,resizableElementId:"",onResize:function t(e){return e}};Object.defineProperty(lib,"__esModule",{value:!0});var _ResizeDetector=ResizeDetector$1,_ResizeDetector2=_interopRequireDefault(_ResizeDetector);function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var _default=lib.default=_ResizeDetector2.default,isDev=!1,warn=function t(e,n,r,o,p,u,l,f){if(isDev&&typeof console<"u"&&console.warn&&(n===void 0&&console.warn("LogUtils requires an error message argument"),!e))if(n===void 0)console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var h=[r,o,p,u,l,f],d=0;console.warn(n.replace(/%s/g,function(){return h[d++]}))}};function _typeof$g(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$g=function(n){return typeof n}:_typeof$g=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$g(t)}function _classCallCheck$h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$h(t,e,n){return e&&_defineProperties$h(t.prototype,e),n&&_defineProperties$h(t,n),t}function _possibleConstructorReturn$g(t,e){return e&&(_typeof$g(e)==="object"||typeof e=="function")?e:_assertThisInitialized$g(t)}function _assertThisInitialized$g(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$g(t){return _getPrototypeOf$g=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$g(t)}function _inherits$g(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$g(t,e)}function _setPrototypeOf$g(t,e){return _setPrototypeOf$g=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$g(t,e)}var ResponsiveContainer=function(t){_inherits$g(e,t);function e(n){var r;return _classCallCheck$h(this,e),r=_possibleConstructorReturn$g(this,_getPrototypeOf$g(e).call(this,n)),r.updateDimensionsImmediate=function(){if(r.mounted){var o=r.getContainerSize();if(o){var p=r.state,u=p.containerWidth,l=p.containerHeight,f=o.containerWidth,h=o.containerHeight;(f!==u||h!==l)&&r.setState({containerWidth:f,containerHeight:h})}}},r.state={containerWidth:-1,containerHeight:-1},r.handleResize=n.debounce>0?debounce_1(r.updateDimensionsImmediate,n.debounce):r.updateDimensionsImmediate,r}return _createClass$h(e,[{key:"componentDidMount",value:function(){this.mounted=!0;var r=this.getContainerSize();r&&this.setState(r)}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"getContainerSize",value:function(){return this.container?{containerWidth:this.container.clientWidth,containerHeight:this.container.clientHeight}:null}},{key:"renderChart",value:function(){var r=this.state,o=r.containerWidth,p=r.containerHeight;if(o<0||p<0)return null;var u=this.props,l=u.aspect,f=u.width,h=u.height,d=u.minWidth,m=u.minHeight,v=u.maxHeight,_=u.children;warn(isPercent(f)||isPercent(h),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,f,h),warn(!l||l>0,"The aspect(%s) must be greater than zero.",l);var T=isPercent(f)?o:f,g=isPercent(h)?p:h;return l&&l>0&&(T?g=T/l:g&&(T=g*l),v&&g>v&&(g=v)),warn(T>0||g>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,T,g,f,h,d,m),React.cloneElement(_,{width:T,height:g})}},{key:"render",value:function(){var r=this,o=this.props,p=o.minWidth,u=o.minHeight,l=o.width,f=o.height,h=o.maxHeight,d=o.id,m=o.className,v={width:l,height:f,minWidth:p,minHeight:u,maxHeight:h};return React.createElement("div",{id:d,className:classNames("recharts-responsive-container",m),style:v,ref:function(T){r.container=T}},this.renderChart(),React.createElement(_default,{handleWidth:!0,handleHeight:!0,onResize:this.handleResize}))}}]),e}(reactExports.Component);ResponsiveContainer.displayName="ResponsiveContainer";ResponsiveContainer.propTypes={aspect:propTypesExports.number,width:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),height:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),minHeight:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),minWidth:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),maxHeight:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),children:propTypesExports.node.isRequired,debounce:propTypesExports.number,id:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),className:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number])};ResponsiveContainer.defaultProps={width:"100%",height:"100%",debounce:0};const ResponsiveContainer$1=ResponsiveContainer;function ownKeys$i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$i(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$i(n,!0).forEach(function(r){_defineProperty$j(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$i(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Cell(){return null}Cell.propTypes=_objectSpread$i({},PRESENTATION_ATTRIBUTES);Cell.displayName="Cell";var balancedMatch$1=balanced$3;function balanced$3(t,e,n){t instanceof RegExp&&(t=maybeMatch$1(t,n)),e instanceof RegExp&&(e=maybeMatch$1(e,n));var r=range$3(t,e,n);return r&&{start:r[0],end:r[1],pre:n.slice(0,r[0]),body:n.slice(r[0]+t.length,r[1]),post:n.slice(r[1]+e.length)}}function maybeMatch$1(t,e){var n=e.match(t);return n?n[0]:null}balanced$3.range=range$3;function range$3(t,e,n){var r,o,p,u,l,f=n.indexOf(t),h=n.indexOf(e,f+1),d=f;if(f>=0&&h>0){for(r=[],p=n.length;d>=0&&!l;)d==f?(r.push(d),f=n.indexOf(t,d+1)):r.length==1?l=[r.pop(),h]:(o=r.pop(),o<p&&(p=o,u=h),h=n.indexOf(e,d+1)),d=f<h&&f>=0?f:h;r.length&&(l=[p,u])}return l}var balancedMatch=balanced$2;function balanced$2(t,e,n){t instanceof RegExp&&(t=maybeMatch(t,n)),e instanceof RegExp&&(e=maybeMatch(e,n));var r=range$2(t,e,n);return r&&{start:r[0],end:r[1],pre:n.slice(0,r[0]),body:n.slice(r[0]+t.length,r[1]),post:n.slice(r[1]+e.length)}}function maybeMatch(t,e){var n=e.match(t);return n?n[0]:null}balanced$2.range=range$2;function range$2(t,e,n){var r,o,p,u,l,f=n.indexOf(t),h=n.indexOf(e,f+1),d=f;if(f>=0&&h>0){if(t===e)return[f,h];for(r=[],p=n.length;d>=0&&!l;)d==f?(r.push(d),f=n.indexOf(t,d+1)):r.length==1?l=[r.pop(),h]:(o=r.pop(),o<p&&(p=o,u=h),h=n.indexOf(e,d+1)),d=f<h&&f>=0?f:h;r.length&&(l=[p,u])}return l}var balanced$1=balancedMatch,reduceFunctionCall_1=reduceFunctionCall$1;function reduceFunctionCall$1(t,e,n){var r=t;return getFunctionCalls(t,e).reduce(function(o,p){return o.replace(p.functionIdentifier+"("+p.matches.body+")",evalFunctionCall(p.matches.body,p.functionIdentifier,n,r,e))},t)}function getFunctionCalls(t,e){var n=[],r=typeof e=="string"?new RegExp("\\b("+e+")\\("):e;do{var o=r.exec(t);if(!o)return n;if(o[1]===void 0)throw new Error("Missing the first couple of parenthesis to get the function identifier in "+e);var p=o[1],u=o.index,l=balanced$1("(",")",t.substring(u));if(!l||l.start!==o[0].length-1)throw new SyntaxError(p+"(): missing closing ')' in the value '"+t+"'");n.push({matches:l,functionIdentifier:p}),t=l.post}while(r.test(t));return n}function evalFunctionCall(t,e,n,r,o){return n(reduceFunctionCall$1(t,o,n),e,r)}var Mexp$4=function(t){this.value=t};Mexp$4.math={isDegree:!0,acos:function(t){return Mexp$4.math.isDegree?180/Math.PI*Math.acos(t):Math.acos(t)},add:function(t,e){return t+e},asin:function(t){return Mexp$4.math.isDegree?180/Math.PI*Math.asin(t):Math.asin(t)},atan:function(t){return Mexp$4.math.isDegree?180/Math.PI*Math.atan(t):Math.atan(t)},acosh:function(t){return Math.log(t+Math.sqrt(t*t-1))},asinh:function(t){return Math.log(t+Math.sqrt(t*t+1))},atanh:function(t){return Math.log((1+t)/(1-t))},C:function(t,e){var n=1,r=t-e,o=e;o<r&&(o=r,r=e);for(var p=o+1;p<=t;p++)n*=p;return n/Mexp$4.math.fact(r)},changeSign:function(t){return-t},cos:function(t){return Mexp$4.math.isDegree&&(t=Mexp$4.math.toRadian(t)),Math.cos(t)},cosh:function(t){return(Math.pow(Math.E,t)+Math.pow(Math.E,-1*t))/2},div:function(t,e){return t/e},fact:function(t){if(t%1!==0)return"NaN";for(var e=1,n=2;n<=t;n++)e*=n;return e},inverse:function(t){return 1/t},log:function(t){return Math.log(t)/Math.log(10)},mod:function(t,e){return t%e},mul:function(t,e){return t*e},P:function(t,e){for(var n=1,r=Math.floor(t)-Math.floor(e)+1;r<=Math.floor(t);r++)n*=r;return n},Pi:function(t,e,n){for(var r=1,o=t;o<=e;o++)r*=Number(n.postfixEval({n:o}));return r},pow10x:function(t){for(var e=1;t--;)e*=10;return e},sigma:function(t,e,n){for(var r=0,o=t;o<=e;o++)r+=Number(n.postfixEval({n:o}));return r},sin:function(t){return Mexp$4.math.isDegree&&(t=Mexp$4.math.toRadian(t)),Math.sin(t)},sinh:function(t){return(Math.pow(Math.E,t)-Math.pow(Math.E,-1*t))/2},sub:function(t,e){return t-e},tan:function(t){return Mexp$4.math.isDegree&&(t=Mexp$4.math.toRadian(t)),Math.tan(t)},tanh:function(t){return Mexp$4.sinha(t)/Mexp$4.cosha(t)},toRadian:function(t){return t*Math.PI/180},and:function(t,e){return t&e}};Mexp$4.Exception=function(t){this.message=t};var math_function=Mexp$4,Mexp$3=math_function;function inc(t,e){for(var n=0;n<t.length;n++)t[n]+=e;return t}var tokens=[{token:"sin",show:"sin",type:0,value:Mexp$3.math.sin},{token:"cos",show:"cos",type:0,value:Mexp$3.math.cos},{token:"tan",show:"tan",type:0,value:Mexp$3.math.tan},{token:"pi",show:"&pi;",type:3,value:"PI"},{token:"(",show:"(",type:4,value:"("},{token:")",show:")",type:5,value:")"},{token:"P",show:"P",type:10,value:Mexp$3.math.P},{token:"C",show:"C",type:10,value:Mexp$3.math.C},{token:" ",show:" ",type:14,value:" ".anchor},{token:"asin",show:"asin",type:0,value:Mexp$3.math.asin},{token:"acos",show:"acos",type:0,value:Mexp$3.math.acos},{token:"atan",show:"atan",type:0,value:Mexp$3.math.atan},{token:"7",show:"7",type:1,value:"7"},{token:"8",show:"8",type:1,value:"8"},{token:"9",show:"9",type:1,value:"9"},{token:"int",show:"Int",type:0,value:Math.floor},{token:"cosh",show:"cosh",type:0,value:Mexp$3.math.cosh},{token:"acosh",show:"acosh",type:0,value:Mexp$3.math.acosh},{token:"ln",show:" ln",type:0,value:Math.log},{token:"^",show:"^",type:10,value:Math.pow},{token:"root",show:"root",type:0,value:Math.sqrt},{token:"4",show:"4",type:1,value:"4"},{token:"5",show:"5",type:1,value:"5"},{token:"6",show:"6",type:1,value:"6"},{token:"/",show:"&divide;",type:2,value:Mexp$3.math.div},{token:"!",show:"!",type:7,value:Mexp$3.math.fact},{token:"tanh",show:"tanh",type:0,value:Mexp$3.math.tanh},{token:"atanh",show:"atanh",type:0,value:Mexp$3.math.atanh},{token:"Mod",show:" Mod ",type:2,value:Mexp$3.math.mod},{token:"1",show:"1",type:1,value:"1"},{token:"2",show:"2",type:1,value:"2"},{token:"3",show:"3",type:1,value:"3"},{token:"*",show:"&times;",type:2,value:Mexp$3.math.mul},{token:"sinh",show:"sinh",type:0,value:Mexp$3.math.sinh},{token:"asinh",show:"asinh",type:0,value:Mexp$3.math.asinh},{token:"e",show:"e",type:3,value:"E"},{token:"log",show:" log",type:0,value:Mexp$3.math.log},{token:"0",show:"0",type:1,value:"0"},{token:".",show:".",type:6,value:"."},{token:"+",show:"+",type:9,value:Mexp$3.math.add},{token:"-",show:"-",type:9,value:Mexp$3.math.sub},{token:",",show:",",type:11,value:","},{token:"Sigma",show:"&Sigma;",type:12,value:Mexp$3.math.sigma},{token:"n",show:"n",type:13,value:"n"},{token:"Pi",show:"&Pi;",type:12,value:Mexp$3.math.Pi},{token:"pow",show:"pow",type:8,value:Math.pow,numberOfArguments:2},{token:"&",show:"&",type:9,value:Mexp$3.math.and}],preced={0:11,1:0,2:3,3:0,4:0,5:0,6:0,7:11,8:11,9:1,10:10,11:0,12:11,13:0,14:-1,15:11};for(var i=0;i<tokens.length;i++)tokens[i].precedence=preced[tokens[i].type];var type0={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,9:!0,12:!0,13:!0,14:!0,15:!0},type1={0:!0,1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,10:!0,11:!0,12:!0,13:!0,15:!0},type1Asterick={0:!0,3:!0,4:!0,8:!0,12:!0,13:!0,15:!0},empty={},type3Asterick={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,12:!0,13:!0,15:!0},type6={1:!0},newAr=[[],["1","2","3","7","8","9","4","5","6","+","-","*","/","(",")","^","!","P","C","e","0",".",",","n"," ","&"],["pi","ln","Pi"],["sin","cos","tan","Del","int","Mod","log","pow"],["asin","acos","atan","cosh","root","tanh","sinh"],["acosh","atanh","asinh","Sigma"]];function match(t,e,n,r){for(var o=0;o<r;o++)if(t[n+o]!==e[o])return!1;return!0}Mexp$3.tokenTypes={FUNCTION_WITH_ONE_ARG:0,NUMBER:1,BINARY_OPERATOR_HIGH_PRECENDENCE:2,CONSTANT:3,OPENING_PARENTHESIS:4,CLOSING_PARENTHESIS:5,DECIMAL:6,POSTFIX_FUNCTION_WITH_ONE_ARG:7,FUNCTION_WITH_N_ARGS:8,BINARY_OPERATOR_LOW_PRECENDENCE:9,BINARY_OPERATOR_PERMUTATION:10,COMMA:11,EVALUATED_FUNCTION:12,EVALUATED_FUNCTION_PARAMETER:13,SPACE:14};Mexp$3.addToken=function(t){for(var e=0;e<t.length;e++){var n=t[e].token.length,r=-1;t[e].type===Mexp$3.tokenTypes.FUNCTION_WITH_N_ARGS&&t[e].numberOfArguments===void 0&&(t[e].numberOfArguments=2),newAr[n]=newAr[n]||[];for(var o=0;o<newAr[n].length;o++)if(t[e].token===newAr[n][o]){r=indexOfToken(newAr[n][o],tokens);break}r===-1?(tokens.push(t[e]),t[e].precedence=preced[t[e].type],newAr.length<=t[e].token.length&&(newAr[t[e].token.length]=[]),newAr[t[e].token.length].push(t[e].token)):(tokens[r]=t[e],t[e].precedence=preced[t[e].type])}};function indexOfToken(t,e){for(var n=0;n<e.length;n++)if(e[n].token===t)return n;return-1}function tokenize(t){for(var e=[],n=t.length,r,o,p,u=0;u<n;u++)if(!(u<n-1&&t[u]===" "&&t[u+1]===" ")){for(r="",o=t.length-u>newAr.length-2?newAr.length-1:t.length-u;o>0;o--)if(newAr[o]!==void 0)for(p=0;p<newAr[o].length;p++)match(t,newAr[o][p],u,o)&&(r=newAr[o][p],p=newAr[o].length,o=0);if(u+=r.length-1,r==="")throw new Mexp$3.Exception("Can't understand after "+t.slice(u));e.push(tokens[indexOfToken(r,tokens)])}return e}var changeSignObj={value:Mexp$3.math.changeSign,type:0,pre:21,show:"-"},closingParObj={value:")",show:")",type:5,pre:0},openingParObj={value:"(",type:4,pre:0,show:"("};Mexp$3.lex=function(t,e){var n=[openingParObj],r=[],o=t,p=type0,u=0,l=empty,f="",h;typeof e<"u"&&Mexp$3.addToken(e);var d={},m=tokenize(o);for(h=0;h<m.length;h++){var v=m[h];if(v.type===14){if(h>0&&h<m.length-1&&m[h+1].type===1&&(m[h-1].type===1||m[h-1].type===6))throw new Mexp$3.Exception("Unexpected Space");continue}var _=v.token,T=v.type,g=v.value,$=v.precedence,E=v.show,b=n[n.length-1],w;for(w=r.length;w--&&r[w]===0;)if([0,2,3,4,5,9,11,12,13].indexOf(T)!==-1){if(p[T]!==!0)throw new Mexp$3.Exception(_+" is not allowed after "+f);n.push(closingParObj),p=type1,l=type3Asterick,r.pop()}if(p[T]!==!0)throw new Mexp$3.Exception(_+" is not allowed after "+f);if(l[T]===!0&&(T=2,g=Mexp$3.math.mul,E="&times;",$=3,h=h-1),d={value:g,type:T,pre:$,show:E,numberOfArguments:v.numberOfArguments},T===0)p=type0,l=empty,inc(r,2),n.push(d),m[h+1].type!==4&&(n.push(openingParObj),r.push(2));else if(T===1)b.type===1?(b.value+=g,inc(r,1)):n.push(d),p=type1,l=type1Asterick;else if(T===2)p=type0,l=empty,inc(r,2),n.push(d);else if(T===3)n.push(d),p=type1,l=type3Asterick;else if(T===4)inc(r,1),u++,p=type0,l=empty,n.push(d);else if(T===5){if(!u)throw new Mexp$3.Exception("Closing parenthesis are more than opening one, wait What!!!");u--,p=type1,l=type3Asterick,n.push(d),inc(r,1)}else if(T===6){if(b.hasDec)throw new Mexp$3.Exception("Two decimals are not allowed in one number");b.type!==1&&(b={value:0,type:1,pre:0},n.push(b)),p=type6,inc(r,1),l=empty,b.value+=g,b.hasDec=!0}else T===7&&(p=type1,l=type3Asterick,inc(r,1),n.push(d));T===8?(p=type0,l=empty,inc(r,v.numberOfArguments+2),n.push(d),m[h+1].type!==4&&(n.push(openingParObj),r.push(v.numberOfArguments+2))):T===9?(b.type===9?b.value===Mexp$3.math.add?(b.value=g,b.show=E,inc(r,1)):b.value===Mexp$3.math.sub&&E==="-"&&(b.value=Mexp$3.math.add,b.show="+",inc(r,1)):b.type!==5&&b.type!==7&&b.type!==1&&b.type!==3&&b.type!==13?_==="-"&&(p=type0,l=empty,inc(r,2).push(2),n.push(changeSignObj),n.push(openingParObj)):(n.push(d),inc(r,2)),p=type0,l=empty):T===10?(p=type0,l=empty,inc(r,2),n.push(d)):T===11?(p=type0,l=empty,n.push(d)):T===12?(p=type0,l=empty,inc(r,6),n.push(d),m[h+1].type!==4&&(n.push(openingParObj),r.push(6))):T===13&&(p=type1,l=type3Asterick,n.push(d)),inc(r,-1),f=_}for(w=r.length;w--;)n.push(closingParObj);if(p[5]!==!0)throw new Mexp$3.Exception("complete the expression");for(;u--;)n.push(closingParObj);return n.push(closingParObj),new Mexp$3(n)};var lexer=Mexp$3,Mexp$2=lexer;Mexp$2.prototype.toPostfix=function(){for(var t=[],e,n,r,o,p,u=[{value:"(",type:4,pre:0}],l=this.value,f=1;f<l.length;f++)if(l[f].type===1||l[f].type===3||l[f].type===13)l[f].type===1&&(l[f].value=Number(l[f].value)),t.push(l[f]);else if(l[f].type===4)u.push(l[f]);else if(l[f].type===5)for(;(n=u.pop()).type!==4;)t.push(n);else if(l[f].type===11){for(;(n=u.pop()).type!==4;)t.push(n);u.push(n)}else{e=l[f],o=e.pre,p=u[u.length-1],r=p.pre;var h=p.value=="Math.pow"&&e.value=="Math.pow";if(o>r)u.push(e);else{for(;r>=o&&!h||h&&o<r;)n=u.pop(),p=u[u.length-1],t.push(n),r=p.pre,h=e.value=="Math.pow"&&p.value=="Math.pow";u.push(e)}}return new Mexp$2(t)};var postfix=Mexp$2,Mexp$1=postfix;Mexp$1.prototype.postfixEval=function(t){t=t||{},t.PI=Math.PI,t.E=Math.E;for(var e=[],n,r,o,p=this.value,u=typeof t.n<"u",l=0;l<p.length;l++)if(p[l].type===1)e.push({value:p[l].value,type:1});else if(p[l].type===3)e.push({value:t[p[l].value],type:1});else if(p[l].type===0)typeof e[e.length-1].type>"u"?e[e.length-1].value.push(p[l]):e[e.length-1].value=p[l].value(e[e.length-1].value);else if(p[l].type===7)typeof e[e.length-1].type>"u"?e[e.length-1].value.push(p[l]):e[e.length-1].value=p[l].value(e[e.length-1].value);else if(p[l].type===8){for(var f=[],h=0;h<p[l].numberOfArguments;h++)f.push(e.pop().value);e.push({type:1,value:p[l].value.apply(p[l],f.reverse())})}else p[l].type===10?(n=e.pop(),r=e.pop(),typeof r.type>"u"?(r.value=r.concat(n),r.value.push(p[l]),e.push(r)):typeof n.type>"u"?(n.unshift(r),n.push(p[l]),e.push(n)):e.push({type:1,value:p[l].value(r.value,n.value)})):p[l].type===2||p[l].type===9?(n=e.pop(),r=e.pop(),typeof r.type>"u"?(r=r.concat(n),r.push(p[l]),e.push(r)):typeof n.type>"u"?(n.unshift(r),n.push(p[l]),e.push(n)):e.push({type:1,value:p[l].value(r.value,n.value)})):p[l].type===12?(n=e.pop(),typeof n.type<"u"&&(n=[n]),r=e.pop(),o=e.pop(),e.push({type:1,value:p[l].value(o.value,r.value,new Mexp$1(n))})):p[l].type===13&&(u?e.push({value:t[p[l].value],type:3}):e.push([p[l]]));if(e.length>1)throw new Mexp$1.Exception("Uncaught Syntax error");return e[0].value>1e15?"Infinity":parseFloat(e[0].value.toFixed(15))};Mexp$1.eval=function(t,e,n){return typeof e>"u"?this.lex(t).toPostfix().postfixEval():typeof n>"u"?typeof e.length<"u"?this.lex(t,e).toPostfix().postfixEval():this.lex(t).toPostfix().postfixEval(e):this.lex(t,e).toPostfix().postfixEval(n)};var postfix_evaluator=Mexp$1,Mexp=postfix_evaluator;Mexp.prototype.formulaEval=function(){for(var t,e,n,r=[],o=this.value,p=0;p<o.length;p++)o[p].type===1||o[p].type===3?r.push({value:o[p].type===3?o[p].show:o[p].value,type:1}):o[p].type===13?r.push({value:o[p].show,type:1}):o[p].type===0?r[r.length-1]={value:o[p].show+(o[p].show!="-"?"(":"")+r[r.length-1].value+(o[p].show!="-"?")":""),type:0}:o[p].type===7?r[r.length-1]={value:(r[r.length-1].type!=1?"(":"")+r[r.length-1].value+(r[r.length-1].type!=1?")":"")+o[p].show,type:7}:o[p].type===10?(t=r.pop(),e=r.pop(),o[p].show==="P"||o[p].show==="C"?r.push({value:"<sup>"+e.value+"</sup>"+o[p].show+"<sub>"+t.value+"</sub>",type:10}):r.push({value:(e.type!=1?"(":"")+e.value+(e.type!=1?")":"")+"<sup>"+t.value+"</sup>",type:1})):o[p].type===2||o[p].type===9?(t=r.pop(),e=r.pop(),r.push({value:(e.type!=1?"(":"")+e.value+(e.type!=1?")":"")+o[p].show+(t.type!=1?"(":"")+t.value+(t.type!=1?")":""),type:o[p].type})):o[p].type===12&&(t=r.pop(),e=r.pop(),n=r.pop(),r.push({value:o[p].show+"("+n.value+","+e.value+","+t.value+")",type:12}));return r[0].value};var formula_evaluator=Mexp,balanced=balancedMatch$1,reduceFunctionCall=reduceFunctionCall_1,mexp=formula_evaluator,MAX_STACK=100,NESTED_CALC_RE=/(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g,stack,reduceCssCalc=reduceCSSCalc;function reduceCSSCalc(t,e){stack=0,e=Math.pow(10,e===void 0?5:e),t=t.replace(/\n+/g," ");function n(o,p,u){if(stack++>MAX_STACK)throw stack=0,new Error("Call stack overflow for "+u);if(o==="")throw new Error(p+"(): '"+u+"' must contain a non-whitespace string");o=r(o,u);var l=getUnitsInExpression(o);if(l.length>1||o.indexOf("var(")>-1)return p+"("+o+")";var f=l[0]||"";f==="%"&&(o=o.replace(/\b[0-9\.]+%/g,function(m){return parseFloat(m.slice(0,-1))*.01}));var h=o.replace(new RegExp(f,"gi"),""),d;try{d=mexp.eval(h)}catch{return p+"("+o+")"}return f==="%"&&(d*=100),(p.length||f==="%")&&(d=Math.round(d*e)/e),d+=f,d}function r(o,p){o=o.replace(/((?:\-[a-z]+\-)?calc)/g,"");for(var u="",l=o,f;f=NESTED_CALC_RE.exec(l);){f[0].index>0&&(u+=l.substring(0,f[0].index));var h=balanced("(",")",l.substring([0].index));if(h.body==="")throw new Error("'"+o+"' must contain a non-whitespace string");var d=n(h.body,"",p);u+=h.pre+d,l=h.post}return u+l}return reduceFunctionCall(t,/((?:\-[a-z]+\-)?calc)\(/,n)}function getUnitsInExpression(t){for(var e=[],n=[],r=/[\.0-9]([%a-z]+)/gi,o=r.exec(t);o;)!o||!o[1]||(n.indexOf(o[1].toLowerCase())===-1&&(e.push(o[1]),n.push(o[1].toLowerCase())),o=r.exec(t));return e}function ownKeys$h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$h(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$h(n,!0).forEach(function(r){_defineProperty$i(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$h(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _toConsumableArray$6(t){return _arrayWithoutHoles$6(t)||_iterableToArray$6(t)||_nonIterableSpread$6()}function _nonIterableSpread$6(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray$6(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function _arrayWithoutHoles$6(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var stringCache={widthCache:{},cacheCount:0},MAX_CACHE_NUM=2e3,SPAN_STYLE={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},STYLE_LIST=["minWidth","maxWidth","width","minHeight","maxHeight","height","top","left","fontSize","lineHeight","padding","margin","paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom"],MEASUREMENT_SPAN_ID="recharts_measurement_span";function autoCompleteStyle(t,e){return STYLE_LIST.indexOf(t)>=0&&e===+e?"".concat(e,"px"):e}function camelToMiddleLine(t){var e=t.split(""),n=e.reduce(function(r,o){return o===o.toUpperCase()?[].concat(_toConsumableArray$6(r),["-",o.toLowerCase()]):[].concat(_toConsumableArray$6(r),[o])},[]);return n.join("")}var getStyleString=function t(e){return Object.keys(e).reduce(function(n,r){return"".concat(n).concat(camelToMiddleLine(r),":").concat(autoCompleteStyle(r,e[r]),";")},"")},getStringSize=function t(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e==null||isSsr())return{width:0,height:0};var r="".concat(e),o=getStyleString(n),p="".concat(r,"-").concat(o);if(stringCache.widthCache[p])return stringCache.widthCache[p];try{var u=document.getElementById(MEASUREMENT_SPAN_ID);u||(u=document.createElement("span"),u.setAttribute("id",MEASUREMENT_SPAN_ID),document.body.appendChild(u));var l=_objectSpread$h({},SPAN_STYLE,{},n);Object.keys(l).map(function(d){return u.style[d]=l[d],d}),u.textContent=r;var f=u.getBoundingClientRect(),h={width:f.width,height:f.height};return stringCache.widthCache[p]=h,++stringCache.cacheCount>MAX_CACHE_NUM&&(stringCache.cacheCount=0,stringCache.widthCache={}),h}catch{return{width:0,height:0}}},getOffset=function t(e){var n=e.ownerDocument.documentElement,r={top:0,left:0};return typeof e.getBoundingClientRect<"u"&&(r=e.getBoundingClientRect()),{top:r.top+window.pageYOffset-n.clientTop,left:r.left+window.pageXOffset-n.clientLeft}},calculateChartCoordinate=function t(e,n){return{chartX:Math.round(e.pageX-n.left),chartY:Math.round(e.pageY-n.top)}};function ownKeys$g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$g(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$g(n,!0).forEach(function(r){_defineProperty$h(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$g(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _typeof$f(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$f=function(n){return typeof n}:_typeof$f=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$f(t)}function _extends$f(){return _extends$f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$f.apply(this,arguments)}function _objectWithoutProperties$5(t,e){if(t==null)return{};var n=_objectWithoutPropertiesLoose$5(t,e),r,o;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(o=0;o<p.length;o++)r=p[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _objectWithoutPropertiesLoose$5(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,p;for(p=0;p<r.length;p++)o=r[p],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function _classCallCheck$g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$g(t,e,n){return e&&_defineProperties$g(t.prototype,e),n&&_defineProperties$g(t,n),t}function _possibleConstructorReturn$f(t,e){return e&&(_typeof$f(e)==="object"||typeof e=="function")?e:_assertThisInitialized$f(t)}function _assertThisInitialized$f(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$f(t){return _getPrototypeOf$f=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$f(t)}function _inherits$f(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$f(t,e)}function _setPrototypeOf$f(t,e){return _setPrototypeOf$f=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$f(t,e)}var BREAKING_SPACES=/[ \f\n\r\t\v\u2028\u2029]+/,calculateWordWidths=function t(e){try{var n=isNil_1(e.children)?[]:e.children.toString().split(BREAKING_SPACES),r=n.map(function(p){return{word:p,width:getStringSize(p,e.style).width}}),o=getStringSize(" ",e.style).width;return{wordsWithComputedWidth:r,spaceWidth:o}}catch{return null}},Text=function(t){_inherits$f(e,t);function e(n){var r;return _classCallCheck$g(this,e),r=_possibleConstructorReturn$f(this,_getPrototypeOf$f(e).call(this,n)),r.getWordsWithoutCalculate=function(o){var p=isNil_1(o.children)?[]:o.children.toString().split(BREAKING_SPACES);return[{words:p}]},r.state={wordsByLines:r.getWordsByLines(n,!0)},r}return _createClass$g(e,[{key:"componentDidMount",value:function(){this.updateWordsByLines(this.props,!0)}},{key:"componentDidUpdate",value:function(r){if(r.width!==this.props.width||r.scaleToFit!==this.props.scaleToFit||r.children!==this.props.children||r.style!==this.props.style){var o=this.props.children!==r.children||this.props.style!==r.style;this.updateWordsByLines(this.props,o)}}},{key:"updateWordsByLines",value:function(r,o){this.setState({wordsByLines:this.getWordsByLines(r,o)})}},{key:"getWordsByLines",value:function(r,o){if((r.width||r.scaleToFit)&&!isSsr()){if(o){var p=calculateWordWidths(r);if(p){var u=p.wordsWithComputedWidth,l=p.spaceWidth;this.wordsWithComputedWidth=u,this.spaceWidth=l}else return this.getWordsWithoutCalculate(r)}return this.calculateWordsByLines(this.wordsWithComputedWidth,this.spaceWidth,r.width)}return this.getWordsWithoutCalculate(r)}},{key:"calculateWordsByLines",value:function(r,o,p){var u=this.props.scaleToFit;return(r||[]).reduce(function(l,f){var h=f.word,d=f.width,m=l[l.length-1];if(m&&(p==null||u||m.width+d+o<p))m.words.push(h),m.width+=d+o;else{var v={words:[h],width:d};l.push(v)}return l},[])}},{key:"render",value:function(){var r=this.props,o=r.dx,p=r.dy,u=r.textAnchor,l=r.verticalAnchor,f=r.scaleToFit,h=r.angle,d=r.lineHeight,m=r.capHeight,v=r.className,_=_objectWithoutProperties$5(r,["dx","dy","textAnchor","verticalAnchor","scaleToFit","angle","lineHeight","capHeight","className"]),T=this.state.wordsByLines;if(!isNumOrStr(_.x)||!isNumOrStr(_.y))return null;var g=_.x+(isNumber(o)?o:0),$=_.y+(isNumber(p)?p:0),E;switch(l){case"start":E=reduceCssCalc("calc(".concat(m,")"));break;case"middle":E=reduceCssCalc("calc(".concat((T.length-1)/2," * -").concat(d," + (").concat(m," / 2))"));break;default:E=reduceCssCalc("calc(".concat(T.length-1," * -").concat(d,")"));break}var b=[];if(f){var w=T[0].width;b.push("scale(".concat(this.props.width/w,")"))}return h&&b.push("rotate(".concat(h,", ").concat(g,", ").concat($,")")),b.length&&(_.transform=b.join(" ")),React.createElement("text",_extends$f({},getPresentationAttributes(_),filterEventAttributes(_),{x:g,y:$,className:classNames("recharts-text",v),textAnchor:u}),T.map(function(S,A){return React.createElement("tspan",{x:g,dy:A===0?E:d,key:A},S.words.join(" "))}))}}]),e}(reactExports.Component);Text.propTypes=_objectSpread$g({},PRESENTATION_ATTRIBUTES,{scaleToFit:propTypesExports.bool,angle:propTypesExports.number,textAnchor:propTypesExports.oneOf(["start","middle","end","inherit"]),verticalAnchor:propTypesExports.oneOf(["start","middle","end"]),style:propTypesExports.object});Text.defaultProps={x:0,y:0,lineHeight:"1em",capHeight:"0.71em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end"};const Text$1=Text;var isSymbol=isSymbol_1;function baseExtremum$2(t,e,n){for(var r=-1,o=t.length;++r<o;){var p=t[r],u=e(p);if(u!=null&&(l===void 0?u===u&&!isSymbol(u):n(u,l)))var l=u,f=p}return f}var _baseExtremum=baseExtremum$2;function baseGt$1(t,e){return t>e}var _baseGt=baseGt$1,baseExtremum$1=_baseExtremum,baseGt=_baseGt,identity$5=identity_1;function max(t){return t&&t.length?baseExtremum$1(t,identity$5,baseGt):void 0}var max_1=max;function baseLt$1(t,e){return t<e}var _baseLt=baseLt$1,baseExtremum=_baseExtremum,baseLt=_baseLt,identity$4=identity_1;function min(t){return t&&t.length?baseExtremum(t,identity$4,baseLt):void 0}var min_1=min,arrayMap=_arrayMap,baseIteratee$5=_baseIteratee,baseMap=_baseMap,isArray$2=isArray_1;function map$5(t,e){var n=isArray$2(t)?arrayMap:baseMap;return n(t,baseIteratee$5(e))}var map_1=map$5,baseFlatten=_baseFlatten,map$4=map_1;function flatMap(t,e){return baseFlatten(map$4(t,e),1)}var flatMap_1=flatMap,MAX_DIGITS=1e9,defaults={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},Decimal,external=!0,decimalError="[DecimalError] ",invalidArgument=decimalError+"Invalid argument: ",exponentOutOfRange=decimalError+"Exponent out of range: ",mathfloor=Math.floor,mathpow=Math.pow,isDecimal=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,ONE,BASE=1e7,LOG_BASE=7,MAX_SAFE_INTEGER=9007199254740991,MAX_E=mathfloor(MAX_SAFE_INTEGER/LOG_BASE),P={};P.absoluteValue=P.abs=function(){var t=new this.constructor(this);return t.s&&(t.s=1),t};P.comparedTo=P.cmp=function(t){var e,n,r,o,p=this;if(t=new p.constructor(t),p.s!==t.s)return p.s||-t.s;if(p.e!==t.e)return p.e>t.e^p.s<0?1:-1;for(r=p.d.length,o=t.d.length,e=0,n=r<o?r:o;e<n;++e)if(p.d[e]!==t.d[e])return p.d[e]>t.d[e]^p.s<0?1:-1;return r===o?0:r>o^p.s<0?1:-1};P.decimalPlaces=P.dp=function(){var t=this,e=t.d.length-1,n=(e-t.e)*LOG_BASE;if(e=t.d[e],e)for(;e%10==0;e/=10)n--;return n<0?0:n};P.dividedBy=P.div=function(t){return divide(this,new this.constructor(t))};P.dividedToIntegerBy=P.idiv=function(t){var e=this,n=e.constructor;return round(divide(e,new n(t),0,1),n.precision)};P.equals=P.eq=function(t){return!this.cmp(t)};P.exponent=function(){return getBase10Exponent(this)};P.greaterThan=P.gt=function(t){return this.cmp(t)>0};P.greaterThanOrEqualTo=P.gte=function(t){return this.cmp(t)>=0};P.isInteger=P.isint=function(){return this.e>this.d.length-2};P.isNegative=P.isneg=function(){return this.s<0};P.isPositive=P.ispos=function(){return this.s>0};P.isZero=function(){return this.s===0};P.lessThan=P.lt=function(t){return this.cmp(t)<0};P.lessThanOrEqualTo=P.lte=function(t){return this.cmp(t)<1};P.logarithm=P.log=function(t){var e,n=this,r=n.constructor,o=r.precision,p=o+5;if(t===void 0)t=new r(10);else if(t=new r(t),t.s<1||t.eq(ONE))throw Error(decimalError+"NaN");if(n.s<1)throw Error(decimalError+(n.s?"NaN":"-Infinity"));return n.eq(ONE)?new r(0):(external=!1,e=divide(ln(n,p),ln(t,p),p),external=!0,round(e,o))};P.minus=P.sub=function(t){var e=this;return t=new e.constructor(t),e.s==t.s?subtract(e,t):add(e,(t.s=-t.s,t))};P.modulo=P.mod=function(t){var e,n=this,r=n.constructor,o=r.precision;if(t=new r(t),!t.s)throw Error(decimalError+"NaN");return n.s?(external=!1,e=divide(n,t,0,1).times(t),external=!0,n.minus(e)):round(new r(n),o)};P.naturalExponential=P.exp=function(){return exp(this)};P.naturalLogarithm=P.ln=function(){return ln(this)};P.negated=P.neg=function(){var t=new this.constructor(this);return t.s=-t.s||0,t};P.plus=P.add=function(t){var e=this;return t=new e.constructor(t),e.s==t.s?add(e,t):subtract(e,(t.s=-t.s,t))};P.precision=P.sd=function(t){var e,n,r,o=this;if(t!==void 0&&t!==!!t&&t!==1&&t!==0)throw Error(invalidArgument+t);if(e=getBase10Exponent(o)+1,r=o.d.length-1,n=r*LOG_BASE+1,r=o.d[r],r){for(;r%10==0;r/=10)n--;for(r=o.d[0];r>=10;r/=10)n++}return t&&e>n?e:n};P.squareRoot=P.sqrt=function(){var t,e,n,r,o,p,u,l=this,f=l.constructor;if(l.s<1){if(!l.s)return new f(0);throw Error(decimalError+"NaN")}for(t=getBase10Exponent(l),external=!1,o=Math.sqrt(+l),o==0||o==1/0?(e=digitsToString(l.d),(e.length+t)%2==0&&(e+="0"),o=Math.sqrt(e),t=mathfloor((t+1)/2)-(t<0||t%2),o==1/0?e="5e"+t:(e=o.toExponential(),e=e.slice(0,e.indexOf("e")+1)+t),r=new f(e)):r=new f(o.toString()),n=f.precision,o=u=n+3;;)if(p=r,r=p.plus(divide(l,p,u+2)).times(.5),digitsToString(p.d).slice(0,u)===(e=digitsToString(r.d)).slice(0,u)){if(e=e.slice(u-3,u+1),o==u&&e=="4999"){if(round(p,n+1,0),p.times(p).eq(l)){r=p;break}}else if(e!="9999")break;u+=4}return external=!0,round(r,n)};P.times=P.mul=function(t){var e,n,r,o,p,u,l,f,h,d=this,m=d.constructor,v=d.d,_=(t=new m(t)).d;if(!d.s||!t.s)return new m(0);for(t.s*=d.s,n=d.e+t.e,f=v.length,h=_.length,f<h&&(p=v,v=_,_=p,u=f,f=h,h=u),p=[],u=f+h,r=u;r--;)p.push(0);for(r=h;--r>=0;){for(e=0,o=f+r;o>r;)l=p[o]+_[r]*v[o-r-1]+e,p[o--]=l%BASE|0,e=l/BASE|0;p[o]=(p[o]+e)%BASE|0}for(;!p[--u];)p.pop();return e?++n:p.shift(),t.d=p,t.e=n,external?round(t,m.precision):t};P.toDecimalPlaces=P.todp=function(t,e){var n=this,r=n.constructor;return n=new r(n),t===void 0?n:(checkInt32(t,0,MAX_DIGITS),e===void 0?e=r.rounding:checkInt32(e,0,8),round(n,t+getBase10Exponent(n)+1,e))};P.toExponential=function(t,e){var n,r=this,o=r.constructor;return t===void 0?n=toString(r,!0):(checkInt32(t,0,MAX_DIGITS),e===void 0?e=o.rounding:checkInt32(e,0,8),r=round(new o(r),t+1,e),n=toString(r,!0,t+1)),n};P.toFixed=function(t,e){var n,r,o=this,p=o.constructor;return t===void 0?toString(o):(checkInt32(t,0,MAX_DIGITS),e===void 0?e=p.rounding:checkInt32(e,0,8),r=round(new p(o),t+getBase10Exponent(o)+1,e),n=toString(r.abs(),!1,t+getBase10Exponent(r)+1),o.isneg()&&!o.isZero()?"-"+n:n)};P.toInteger=P.toint=function(){var t=this,e=t.constructor;return round(new e(t),getBase10Exponent(t)+1,e.rounding)};P.toNumber=function(){return+this};P.toPower=P.pow=function(t){var e,n,r,o,p,u,l=this,f=l.constructor,h=12,d=+(t=new f(t));if(!t.s)return new f(ONE);if(l=new f(l),!l.s){if(t.s<1)throw Error(decimalError+"Infinity");return l}if(l.eq(ONE))return l;if(r=f.precision,t.eq(ONE))return round(l,r);if(e=t.e,n=t.d.length-1,u=e>=n,p=l.s,u){if((n=d<0?-d:d)<=MAX_SAFE_INTEGER){for(o=new f(ONE),e=Math.ceil(r/LOG_BASE+4),external=!1;n%2&&(o=o.times(l),truncate(o.d,e)),n=mathfloor(n/2),n!==0;)l=l.times(l),truncate(l.d,e);return external=!0,t.s<0?new f(ONE).div(o):round(o,r)}}else if(p<0)throw Error(decimalError+"NaN");return p=p<0&&t.d[Math.max(e,n)]&1?-1:1,l.s=1,external=!1,o=t.times(ln(l,r+h)),external=!0,o=exp(o),o.s=p,o};P.toPrecision=function(t,e){var n,r,o=this,p=o.constructor;return t===void 0?(n=getBase10Exponent(o),r=toString(o,n<=p.toExpNeg||n>=p.toExpPos)):(checkInt32(t,1,MAX_DIGITS),e===void 0?e=p.rounding:checkInt32(e,0,8),o=round(new p(o),t,e),n=getBase10Exponent(o),r=toString(o,t<=n||n<=p.toExpNeg,t)),r};P.toSignificantDigits=P.tosd=function(t,e){var n=this,r=n.constructor;return t===void 0?(t=r.precision,e=r.rounding):(checkInt32(t,1,MAX_DIGITS),e===void 0?e=r.rounding:checkInt32(e,0,8)),round(new r(n),t,e)};P.toString=P.valueOf=P.val=P.toJSON=P[Symbol.for("nodejs.util.inspect.custom")]=function(){var t=this,e=getBase10Exponent(t),n=t.constructor;return toString(t,e<=n.toExpNeg||e>=n.toExpPos)};function add(t,e){var n,r,o,p,u,l,f,h,d=t.constructor,m=d.precision;if(!t.s||!e.s)return e.s||(e=new d(t)),external?round(e,m):e;if(f=t.d,h=e.d,u=t.e,o=e.e,f=f.slice(),p=u-o,p){for(p<0?(r=f,p=-p,l=h.length):(r=h,o=u,l=f.length),u=Math.ceil(m/LOG_BASE),l=u>l?u+1:l+1,p>l&&(p=l,r.length=1),r.reverse();p--;)r.push(0);r.reverse()}for(l=f.length,p=h.length,l-p<0&&(p=l,r=h,h=f,f=r),n=0;p;)n=(f[--p]=f[p]+h[p]+n)/BASE|0,f[p]%=BASE;for(n&&(f.unshift(n),++o),l=f.length;f[--l]==0;)f.pop();return e.d=f,e.e=o,external?round(e,m):e}function checkInt32(t,e,n){if(t!==~~t||t<e||t>n)throw Error(invalidArgument+t)}function digitsToString(t){var e,n,r,o=t.length-1,p="",u=t[0];if(o>0){for(p+=u,e=1;e<o;e++)r=t[e]+"",n=LOG_BASE-r.length,n&&(p+=getZeroString(n)),p+=r;u=t[e],r=u+"",n=LOG_BASE-r.length,n&&(p+=getZeroString(n))}else if(u===0)return"0";for(;u%10===0;)u/=10;return p+u}var divide=function(){function t(r,o){var p,u=0,l=r.length;for(r=r.slice();l--;)p=r[l]*o+u,r[l]=p%BASE|0,u=p/BASE|0;return u&&r.unshift(u),r}function e(r,o,p,u){var l,f;if(p!=u)f=p>u?1:-1;else for(l=f=0;l<p;l++)if(r[l]!=o[l]){f=r[l]>o[l]?1:-1;break}return f}function n(r,o,p){for(var u=0;p--;)r[p]-=u,u=r[p]<o[p]?1:0,r[p]=u*BASE+r[p]-o[p];for(;!r[0]&&r.length>1;)r.shift()}return function(r,o,p,u){var l,f,h,d,m,v,_,T,g,$,E,b,w,S,A,O,C,M,I=r.constructor,N=r.s==o.s?1:-1,D=r.d,B=o.d;if(!r.s)return new I(r);if(!o.s)throw Error(decimalError+"Division by zero");for(f=r.e-o.e,C=B.length,A=D.length,_=new I(N),T=_.d=[],h=0;B[h]==(D[h]||0);)++h;if(B[h]>(D[h]||0)&&--f,p==null?b=p=I.precision:u?b=p+(getBase10Exponent(r)-getBase10Exponent(o))+1:b=p,b<0)return new I(0);if(b=b/LOG_BASE+2|0,h=0,C==1)for(d=0,B=B[0],b++;(h<A||d)&&b--;h++)w=d*BASE+(D[h]||0),T[h]=w/B|0,d=w%B|0;else{for(d=BASE/(B[0]+1)|0,d>1&&(B=t(B,d),D=t(D,d),C=B.length,A=D.length),S=C,g=D.slice(0,C),$=g.length;$<C;)g[$++]=0;M=B.slice(),M.unshift(0),O=B[0],B[1]>=BASE/2&&++O;do d=0,l=e(B,g,C,$),l<0?(E=g[0],C!=$&&(E=E*BASE+(g[1]||0)),d=E/O|0,d>1?(d>=BASE&&(d=BASE-1),m=t(B,d),v=m.length,$=g.length,l=e(m,g,v,$),l==1&&(d--,n(m,C<v?M:B,v))):(d==0&&(l=d=1),m=B.slice()),v=m.length,v<$&&m.unshift(0),n(g,m,$),l==-1&&($=g.length,l=e(B,g,C,$),l<1&&(d++,n(g,C<$?M:B,$))),$=g.length):l===0&&(d++,g=[0]),T[h++]=d,l&&g[0]?g[$++]=D[S]||0:(g=[D[S]],$=1);while((S++<A||g[0]!==void 0)&&b--)}return T[0]||T.shift(),_.e=f,round(_,u?p+getBase10Exponent(_)+1:p)}}();function exp(t,e){var n,r,o,p,u,l,f=0,h=0,d=t.constructor,m=d.precision;if(getBase10Exponent(t)>16)throw Error(exponentOutOfRange+getBase10Exponent(t));if(!t.s)return new d(ONE);for(e==null?(external=!1,l=m):l=e,u=new d(.03125);t.abs().gte(.1);)t=t.times(u),h+=5;for(r=Math.log(mathpow(2,h))/Math.LN10*2+5|0,l+=r,n=o=p=new d(ONE),d.precision=l;;){if(o=round(o.times(t),l),n=n.times(++f),u=p.plus(divide(o,n,l)),digitsToString(u.d).slice(0,l)===digitsToString(p.d).slice(0,l)){for(;h--;)p=round(p.times(p),l);return d.precision=m,e==null?(external=!0,round(p,m)):p}p=u}}function getBase10Exponent(t){for(var e=t.e*LOG_BASE,n=t.d[0];n>=10;n/=10)e++;return e}function getLn10(t,e,n){if(e>t.LN10.sd())throw external=!0,n&&(t.precision=n),Error(decimalError+"LN10 precision limit exceeded");return round(new t(t.LN10),e)}function getZeroString(t){for(var e="";t--;)e+="0";return e}function ln(t,e){var n,r,o,p,u,l,f,h,d,m=1,v=10,_=t,T=_.d,g=_.constructor,$=g.precision;if(_.s<1)throw Error(decimalError+(_.s?"NaN":"-Infinity"));if(_.eq(ONE))return new g(0);if(e==null?(external=!1,h=$):h=e,_.eq(10))return e==null&&(external=!0),getLn10(g,h);if(h+=v,g.precision=h,n=digitsToString(T),r=n.charAt(0),p=getBase10Exponent(_),Math.abs(p)<15e14){for(;r<7&&r!=1||r==1&&n.charAt(1)>3;)_=_.times(t),n=digitsToString(_.d),r=n.charAt(0),m++;p=getBase10Exponent(_),r>1?(_=new g("0."+n),p++):_=new g(r+"."+n.slice(1))}else return f=getLn10(g,h+2,$).times(p+""),_=ln(new g(r+"."+n.slice(1)),h-v).plus(f),g.precision=$,e==null?(external=!0,round(_,$)):_;for(l=u=_=divide(_.minus(ONE),_.plus(ONE),h),d=round(_.times(_),h),o=3;;){if(u=round(u.times(d),h),f=l.plus(divide(u,new g(o),h)),digitsToString(f.d).slice(0,h)===digitsToString(l.d).slice(0,h))return l=l.times(2),p!==0&&(l=l.plus(getLn10(g,h+2,$).times(p+""))),l=divide(l,new g(m),h),g.precision=$,e==null?(external=!0,round(l,$)):l;l=f,o+=2}}function parseDecimal(t,e){var n,r,o;for((n=e.indexOf("."))>-1&&(e=e.replace(".","")),(r=e.search(/e/i))>0?(n<0&&(n=r),n+=+e.slice(r+1),e=e.substring(0,r)):n<0&&(n=e.length),r=0;e.charCodeAt(r)===48;)++r;for(o=e.length;e.charCodeAt(o-1)===48;)--o;if(e=e.slice(r,o),e){if(o-=r,n=n-r-1,t.e=mathfloor(n/LOG_BASE),t.d=[],r=(n+1)%LOG_BASE,n<0&&(r+=LOG_BASE),r<o){for(r&&t.d.push(+e.slice(0,r)),o-=LOG_BASE;r<o;)t.d.push(+e.slice(r,r+=LOG_BASE));e=e.slice(r),r=LOG_BASE-e.length}else r-=o;for(;r--;)e+="0";if(t.d.push(+e),external&&(t.e>MAX_E||t.e<-MAX_E))throw Error(exponentOutOfRange+n)}else t.s=0,t.e=0,t.d=[0];return t}function round(t,e,n){var r,o,p,u,l,f,h,d,m=t.d;for(u=1,p=m[0];p>=10;p/=10)u++;if(r=e-u,r<0)r+=LOG_BASE,o=e,h=m[d=0];else{if(d=Math.ceil((r+1)/LOG_BASE),p=m.length,d>=p)return t;for(h=p=m[d],u=1;p>=10;p/=10)u++;r%=LOG_BASE,o=r-LOG_BASE+u}if(n!==void 0&&(p=mathpow(10,u-o-1),l=h/p%10|0,f=e<0||m[d+1]!==void 0||h%p,f=n<4?(l||f)&&(n==0||n==(t.s<0?3:2)):l>5||l==5&&(n==4||f||n==6&&(r>0?o>0?h/mathpow(10,u-o):0:m[d-1])%10&1||n==(t.s<0?8:7))),e<1||!m[0])return f?(p=getBase10Exponent(t),m.length=1,e=e-p-1,m[0]=mathpow(10,(LOG_BASE-e%LOG_BASE)%LOG_BASE),t.e=mathfloor(-e/LOG_BASE)||0):(m.length=1,m[0]=t.e=t.s=0),t;if(r==0?(m.length=d,p=1,d--):(m.length=d+1,p=mathpow(10,LOG_BASE-r),m[d]=o>0?(h/mathpow(10,u-o)%mathpow(10,o)|0)*p:0),f)for(;;)if(d==0){(m[0]+=p)==BASE&&(m[0]=1,++t.e);break}else{if(m[d]+=p,m[d]!=BASE)break;m[d--]=0,p=1}for(r=m.length;m[--r]===0;)m.pop();if(external&&(t.e>MAX_E||t.e<-MAX_E))throw Error(exponentOutOfRange+getBase10Exponent(t));return t}function subtract(t,e){var n,r,o,p,u,l,f,h,d,m,v=t.constructor,_=v.precision;if(!t.s||!e.s)return e.s?e.s=-e.s:e=new v(t),external?round(e,_):e;if(f=t.d,m=e.d,r=e.e,h=t.e,f=f.slice(),u=h-r,u){for(d=u<0,d?(n=f,u=-u,l=m.length):(n=m,r=h,l=f.length),o=Math.max(Math.ceil(_/LOG_BASE),l)+2,u>o&&(u=o,n.length=1),n.reverse(),o=u;o--;)n.push(0);n.reverse()}else{for(o=f.length,l=m.length,d=o<l,d&&(l=o),o=0;o<l;o++)if(f[o]!=m[o]){d=f[o]<m[o];break}u=0}for(d&&(n=f,f=m,m=n,e.s=-e.s),l=f.length,o=m.length-l;o>0;--o)f[l++]=0;for(o=m.length;o>u;){if(f[--o]<m[o]){for(p=o;p&&f[--p]===0;)f[p]=BASE-1;--f[p],f[o]+=BASE}f[o]-=m[o]}for(;f[--l]===0;)f.pop();for(;f[0]===0;f.shift())--r;return f[0]?(e.d=f,e.e=r,external?round(e,_):e):new v(0)}function toString(t,e,n){var r,o=getBase10Exponent(t),p=digitsToString(t.d),u=p.length;return e?(n&&(r=n-u)>0?p=p.charAt(0)+"."+p.slice(1)+getZeroString(r):u>1&&(p=p.charAt(0)+"."+p.slice(1)),p=p+(o<0?"e":"e+")+o):o<0?(p="0."+getZeroString(-o-1)+p,n&&(r=n-u)>0&&(p+=getZeroString(r))):o>=u?(p+=getZeroString(o+1-u),n&&(r=n-o-1)>0&&(p=p+"."+getZeroString(r))):((r=o+1)<u&&(p=p.slice(0,r)+"."+p.slice(r)),n&&(r=n-u)>0&&(o+1===u&&(p+="."),p+=getZeroString(r))),t.s<0?"-"+p:p}function truncate(t,e){if(t.length>e)return t.length=e,!0}function clone(t){var e,n,r;function o(p){var u=this;if(!(u instanceof o))return new o(p);if(u.constructor=o,p instanceof o){u.s=p.s,u.e=p.e,u.d=(p=p.d)?p.slice():p;return}if(typeof p=="number"){if(p*0!==0)throw Error(invalidArgument+p);if(p>0)u.s=1;else if(p<0)p=-p,u.s=-1;else{u.s=0,u.e=0,u.d=[0];return}if(p===~~p&&p<1e7){u.e=0,u.d=[p];return}return parseDecimal(u,p.toString())}else if(typeof p!="string")throw Error(invalidArgument+p);if(p.charCodeAt(0)===45?(p=p.slice(1),u.s=-1):u.s=1,isDecimal.test(p))parseDecimal(u,p);else throw Error(invalidArgument+p)}if(o.prototype=P,o.ROUND_UP=0,o.ROUND_DOWN=1,o.ROUND_CEIL=2,o.ROUND_FLOOR=3,o.ROUND_HALF_UP=4,o.ROUND_HALF_DOWN=5,o.ROUND_HALF_EVEN=6,o.ROUND_HALF_CEIL=7,o.ROUND_HALF_FLOOR=8,o.clone=clone,o.config=o.set=config,t===void 0&&(t={}),t)for(r=["precision","rounding","toExpNeg","toExpPos","LN10"],e=0;e<r.length;)t.hasOwnProperty(n=r[e++])||(t[n]=this[n]);return o.config(t),o}function config(t){if(!t||typeof t!="object")throw Error(decimalError+"Object expected");var e,n,r,o=["precision",1,MAX_DIGITS,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(e=0;e<o.length;e+=3)if((r=t[n=o[e]])!==void 0)if(mathfloor(r)===r&&r>=o[e+1]&&r<=o[e+2])this[n]=r;else throw Error(invalidArgument+n+": "+r);if((r=t[n="LN10"])!==void 0)if(r==Math.LN10)this[n]=new this(r);else throw Error(invalidArgument+n+": "+r);return this}var Decimal=clone(defaults);ONE=new Decimal(1);const Decimal$1=Decimal;function _toConsumableArray$5(t){return _arrayWithoutHoles$5(t)||_iterableToArray$5(t)||_unsupportedIterableToArray$1(t)||_nonIterableSpread$5()}function _nonIterableSpread$5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _unsupportedIterableToArray$1(t,e){if(t){if(typeof t=="string")return _arrayLikeToArray$1(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray$1(t,e)}}function _iterableToArray$5(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles$5(t){if(Array.isArray(t))return _arrayLikeToArray$1(t)}function _arrayLikeToArray$1(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var identity$3=function t(e){return e},PLACE_HOLDER={"@@functional/placeholder":!0},isPlaceHolder=function t(e){return e===PLACE_HOLDER},curry0=function t(e){return function n(){return arguments.length===0||arguments.length===1&&isPlaceHolder(arguments.length<=0?void 0:arguments[0])?n:e.apply(void 0,arguments)}},curryN=function t(e,n){return e===1?n:curry0(function(){for(var r=arguments.length,o=new Array(r),p=0;p<r;p++)o[p]=arguments[p];var u=o.filter(function(l){return l!==PLACE_HOLDER}).length;return u>=e?n.apply(void 0,o):t(e-u,curry0(function(){for(var l=arguments.length,f=new Array(l),h=0;h<l;h++)f[h]=arguments[h];var d=o.map(function(m){return isPlaceHolder(m)?f.shift():m});return n.apply(void 0,_toConsumableArray$5(d).concat(f))}))})},curry=function t(e){return curryN(e.length,e)},range$1=function t(e,n){for(var r=[],o=e;o<n;++o)r[o-e]=o;return r},map$3=curry(function(t,e){return Array.isArray(e)?e.map(t):Object.keys(e).map(function(n){return e[n]}).map(t)}),compose=function t(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if(!n.length)return identity$3;var o=n.reverse(),p=o[0],u=o.slice(1);return function(){return u.reduce(function(l,f){return f(l)},p.apply(void 0,arguments))}},reverse=function t(e){return Array.isArray(e)?e.reverse():e.split("").reverse.join("")},memoize=function t(e){var n=null,r=null;return function(){for(var o=arguments.length,p=new Array(o),u=0;u<o;u++)p[u]=arguments[u];return n&&p.every(function(l,f){return l===n[f]})||(n=p,r=e.apply(void 0,p)),r}};function getDigitCount(t){var e;return t===0?e=1:e=Math.floor(new Decimal$1(t).abs().log(10).toNumber())+1,e}function rangeStep(t,e,n){for(var r=new Decimal$1(t),o=0,p=[];r.lt(e)&&o<1e5;)p.push(r.toNumber()),r=r.add(n),o++;return p}var interpolateNumber$1=curry(function(t,e,n){var r=+t,o=+e;return r+n*(o-r)}),uninterpolateNumber=curry(function(t,e,n){var r=e-+t;return r=r||1/0,(n-t)/r}),uninterpolateTruncation=curry(function(t,e,n){var r=e-+t;return r=r||1/0,Math.max(0,Math.min(1,(n-t)/r))});const Arithmetic={rangeStep,getDigitCount,interpolateNumber:interpolateNumber$1,uninterpolateNumber,uninterpolateTruncation};function _toConsumableArray$4(t){return _arrayWithoutHoles$4(t)||_iterableToArray$4(t)||_unsupportedIterableToArray(t)||_nonIterableSpread$4()}function _nonIterableSpread$4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _iterableToArray$4(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles$4(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _slicedToArray$2(t,e){return _arrayWithHoles$2(t)||_iterableToArrayLimit$2(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest$2()}function _nonIterableRest$2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _unsupportedIterableToArray(t,e){if(t){if(typeof t=="string")return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(t,e)}}function _arrayLikeToArray(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _iterableToArrayLimit$2(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var n=[],r=!0,o=!1,p=void 0;try{for(var u=t[Symbol.iterator](),l;!(r=(l=u.next()).done)&&(n.push(l.value),!(e&&n.length===e));r=!0);}catch(f){o=!0,p=f}finally{try{!r&&u.return!=null&&u.return()}finally{if(o)throw p}}return n}}function _arrayWithHoles$2(t){if(Array.isArray(t))return t}function getValidInterval(t){var e=_slicedToArray$2(t,2),n=e[0],r=e[1],o=n,p=r;return n>r&&(o=r,p=n),[o,p]}function getFormatStep(t,e,n){if(t.lte(0))return new Decimal$1(0);var r=Arithmetic.getDigitCount(t.toNumber()),o=new Decimal$1(10).pow(r),p=t.div(o),u=r!==1?.05:.1,l=new Decimal$1(Math.ceil(p.div(u).toNumber())).add(n).mul(u),f=l.mul(o);return e?f:new Decimal$1(Math.ceil(f))}function getTickOfSingleValue(t,e,n){var r=1,o=new Decimal$1(t);if(!o.isint()&&n){var p=Math.abs(t);p<1?(r=new Decimal$1(10).pow(Arithmetic.getDigitCount(t)-1),o=new Decimal$1(Math.floor(o.div(r).toNumber())).mul(r)):p>1&&(o=new Decimal$1(Math.floor(t)))}else t===0?o=new Decimal$1(Math.floor((e-1)/2)):n||(o=new Decimal$1(Math.floor(t)));var u=Math.floor((e-1)/2),l=compose(map$3(function(f){return o.add(new Decimal$1(f-u).mul(r)).toNumber()}),range$1);return l(0,e)}function calculateStep(t,e,n,r){var o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((e-t)/(n-1)))return{step:new Decimal$1(0),tickMin:new Decimal$1(0),tickMax:new Decimal$1(0)};var p=getFormatStep(new Decimal$1(e).sub(t).div(n-1),r,o),u;t<=0&&e>=0?u=new Decimal$1(0):(u=new Decimal$1(t).add(e).div(2),u=u.sub(new Decimal$1(u).mod(p)));var l=Math.ceil(u.sub(t).div(p).toNumber()),f=Math.ceil(new Decimal$1(e).sub(u).div(p).toNumber()),h=l+f+1;return h>n?calculateStep(t,e,n,r,o+1):(h<n&&(f=e>0?f+(n-h):f,l=e>0?l:l+(n-h)),{step:p,tickMin:u.sub(new Decimal$1(l).mul(p)),tickMax:u.add(new Decimal$1(f).mul(p))})}function getNiceTickValuesFn(t){var e=_slicedToArray$2(t,2),n=e[0],r=e[1],o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,u=Math.max(o,2),l=getValidInterval([n,r]),f=_slicedToArray$2(l,2),h=f[0],d=f[1];if(h===-1/0||d===1/0){var m=d===1/0?[h].concat(_toConsumableArray$4(range$1(0,o-1).map(function(){return 1/0}))):[].concat(_toConsumableArray$4(range$1(0,o-1).map(function(){return-1/0})),[d]);return n>r?reverse(m):m}if(h===d)return getTickOfSingleValue(h,o,p);var v=calculateStep(h,d,u,p),_=v.step,T=v.tickMin,g=v.tickMax,$=Arithmetic.rangeStep(T,g.add(new Decimal$1(.1).mul(_)),_);return n>r?reverse($):$}function getTickValuesFixedDomainFn(t,e){var n=_slicedToArray$2(t,2),r=n[0],o=n[1],p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,u=getValidInterval([r,o]),l=_slicedToArray$2(u,2),f=l[0],h=l[1];if(f===-1/0||h===1/0)return[r,o];if(f===h)return[f];var d=Math.max(e,2),m=getFormatStep(new Decimal$1(h).sub(f).div(d-1),p,0),v=[].concat(_toConsumableArray$4(Arithmetic.rangeStep(new Decimal$1(f),new Decimal$1(h).sub(new Decimal$1(.99).mul(m)),m)),[h]);return r>o?reverse(v):v}var getNiceTickValues=memoize(getNiceTickValuesFn),getTickValuesFixedDomain=memoize(getTickValuesFixedDomainFn);function ascending(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function bisector(t){return t.length===1&&(t=ascendingComparator(t)),{left:function(e,n,r,o){for(r==null&&(r=0),o==null&&(o=e.length);r<o;){var p=r+o>>>1;t(e[p],n)<0?r=p+1:o=p}return r},right:function(e,n,r,o){for(r==null&&(r=0),o==null&&(o=e.length);r<o;){var p=r+o>>>1;t(e[p],n)>0?o=p:r=p+1}return r}}}function ascendingComparator(t){return function(e,n){return ascending(t(e),n)}}var ascendingBisect=bisector(ascending),bisectRight=ascendingBisect.right;function number$2(t){return t===null?NaN:+t}function sequence(t,e,n){t=+t,e=+e,n=(o=arguments.length)<2?(e=t,t=0,1):o<3?1:+n;for(var r=-1,o=Math.max(0,Math.ceil((e-t)/n))|0,p=new Array(o);++r<o;)p[r]=t+r*n;return p}var e10=Math.sqrt(50),e5=Math.sqrt(10),e2=Math.sqrt(2);function ticks(t,e,n){var r,o=-1,p,u,l;if(e=+e,t=+t,n=+n,t===e&&n>0)return[t];if((r=e<t)&&(p=t,t=e,e=p),(l=tickIncrement(t,e,n))===0||!isFinite(l))return[];if(l>0)for(t=Math.ceil(t/l),e=Math.floor(e/l),u=new Array(p=Math.ceil(e-t+1));++o<p;)u[o]=(t+o)*l;else for(t=Math.floor(t*l),e=Math.ceil(e*l),u=new Array(p=Math.ceil(t-e+1));++o<p;)u[o]=(t-o)/l;return r&&u.reverse(),u}function tickIncrement(t,e,n){var r=(e-t)/Math.max(0,n),o=Math.floor(Math.log(r)/Math.LN10),p=r/Math.pow(10,o);return o>=0?(p>=e10?10:p>=e5?5:p>=e2?2:1)*Math.pow(10,o):-Math.pow(10,-o)/(p>=e10?10:p>=e5?5:p>=e2?2:1)}function tickStep(t,e,n){var r=Math.abs(e-t)/Math.max(0,n),o=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),p=r/o;return p>=e10?o*=10:p>=e5?o*=5:p>=e2&&(o*=2),e<t?-o:o}function threshold$1(t,e,n){if(n==null&&(n=number$2),!!(r=t.length)){if((e=+e)<=0||r<2)return+n(t[0],0,t);if(e>=1)return+n(t[r-1],r-1,t);var r,o=(r-1)*e,p=Math.floor(o),u=+n(t[p],p,t),l=+n(t[p+1],p+1,t);return u+(l-u)*(o-p)}}function initRange(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}function initInterpolator(t,e){switch(arguments.length){case 0:break;case 1:this.interpolator(t);break;default:this.interpolator(e).domain(t);break}return this}var prefix$1="$";function Map$1(){}Map$1.prototype=map$2.prototype={constructor:Map$1,has:function(t){return prefix$1+t in this},get:function(t){return this[prefix$1+t]},set:function(t,e){return this[prefix$1+t]=e,this},remove:function(t){var e=prefix$1+t;return e in this&&delete this[e]},clear:function(){for(var t in this)t[0]===prefix$1&&delete this[t]},keys:function(){var t=[];for(var e in this)e[0]===prefix$1&&t.push(e.slice(1));return t},values:function(){var t=[];for(var e in this)e[0]===prefix$1&&t.push(this[e]);return t},entries:function(){var t=[];for(var e in this)e[0]===prefix$1&&t.push({key:e.slice(1),value:this[e]});return t},size:function(){var t=0;for(var e in this)e[0]===prefix$1&&++t;return t},empty:function(){for(var t in this)if(t[0]===prefix$1)return!1;return!0},each:function(t){for(var e in this)e[0]===prefix$1&&t(this[e],e.slice(1),this)}};function map$2(t,e){var n=new Map$1;if(t instanceof Map$1)t.each(function(l,f){n.set(f,l)});else if(Array.isArray(t)){var r=-1,o=t.length,p;if(e==null)for(;++r<o;)n.set(r,t[r]);else for(;++r<o;)n.set(e(p=t[r],r,t),p)}else if(t)for(var u in t)n.set(u,t[u]);return n}function Set(){}var proto=map$2.prototype;Set.prototype={constructor:Set,has:proto.has,add:function(t){return t+="",this[prefix$1+t]=t,this},remove:proto.remove,clear:proto.clear,values:proto.keys,size:proto.size,empty:proto.empty,each:proto.each};var array=Array.prototype,map$1=array.map,slice=array.slice,implicit={name:"implicit"};function ordinal(){var t=map$2(),e=[],n=[],r=implicit;function o(p){var u=p+"",l=t.get(u);if(!l){if(r!==implicit)return r;t.set(u,l=e.push(p))}return n[(l-1)%n.length]}return o.domain=function(p){if(!arguments.length)return e.slice();e=[],t=map$2();for(var u=-1,l=p.length,f,h;++u<l;)t.has(h=(f=p[u])+"")||t.set(h,e.push(f));return o},o.range=function(p){return arguments.length?(n=slice.call(p),o):n.slice()},o.unknown=function(p){return arguments.length?(r=p,o):r},o.copy=function(){return ordinal(e,n).unknown(r)},initRange.apply(o,arguments),o}function band(){var t=ordinal().unknown(void 0),e=t.domain,n=t.range,r=[0,1],o,p,u=!1,l=0,f=0,h=.5;delete t.unknown;function d(){var m=e().length,v=r[1]<r[0],_=r[v-0],T=r[1-v];o=(T-_)/Math.max(1,m-l+f*2),u&&(o=Math.floor(o)),_+=(T-_-o*(m-l))*h,p=o*(1-l),u&&(_=Math.round(_),p=Math.round(p));var g=sequence(m).map(function($){return _+o*$});return n(v?g.reverse():g)}return t.domain=function(m){return arguments.length?(e(m),d()):e()},t.range=function(m){return arguments.length?(r=[+m[0],+m[1]],d()):r.slice()},t.rangeRound=function(m){return r=[+m[0],+m[1]],u=!0,d()},t.bandwidth=function(){return p},t.step=function(){return o},t.round=function(m){return arguments.length?(u=!!m,d()):u},t.padding=function(m){return arguments.length?(l=Math.min(1,f=+m),d()):l},t.paddingInner=function(m){return arguments.length?(l=Math.min(1,m),d()):l},t.paddingOuter=function(m){return arguments.length?(f=+m,d()):f},t.align=function(m){return arguments.length?(h=Math.max(0,Math.min(1,m)),d()):h},t.copy=function(){return band(e(),r).round(u).paddingInner(l).paddingOuter(f).align(h)},initRange.apply(d(),arguments)}function pointish(t){var e=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return pointish(e())},t}function point(){return pointish(band.apply(null,arguments).paddingInner(1))}function define(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function extend(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function Color(){}var darker=.7,brighter=1/darker,reI="\\s*([+-]?\\d+)\\s*",reN="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",reP="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",reHex=/^#([0-9a-f]{3,8})$/,reRgbInteger=new RegExp("^rgb\\("+[reI,reI,reI]+"\\)$"),reRgbPercent=new RegExp("^rgb\\("+[reP,reP,reP]+"\\)$"),reRgbaInteger=new RegExp("^rgba\\("+[reI,reI,reI,reN]+"\\)$"),reRgbaPercent=new RegExp("^rgba\\("+[reP,reP,reP,reN]+"\\)$"),reHslPercent=new RegExp("^hsl\\("+[reN,reP,reP]+"\\)$"),reHslaPercent=new RegExp("^hsla\\("+[reN,reP,reP,reN]+"\\)$"),named={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};define(Color,color,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:color_formatHex,formatHex:color_formatHex,formatHsl:color_formatHsl,formatRgb:color_formatRgb,toString:color_formatRgb});function color_formatHex(){return this.rgb().formatHex()}function color_formatHsl(){return hslConvert(this).formatHsl()}function color_formatRgb(){return this.rgb().formatRgb()}function color(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=reHex.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?rgbn(e):n===3?new Rgb(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?rgba(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?rgba(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=reRgbInteger.exec(t))?new Rgb(e[1],e[2],e[3],1):(e=reRgbPercent.exec(t))?new Rgb(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=reRgbaInteger.exec(t))?rgba(e[1],e[2],e[3],e[4]):(e=reRgbaPercent.exec(t))?rgba(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=reHslPercent.exec(t))?hsla(e[1],e[2]/100,e[3]/100,1):(e=reHslaPercent.exec(t))?hsla(e[1],e[2]/100,e[3]/100,e[4]):named.hasOwnProperty(t)?rgbn(named[t]):t==="transparent"?new Rgb(NaN,NaN,NaN,0):null}function rgbn(t){return new Rgb(t>>16&255,t>>8&255,t&255,1)}function rgba(t,e,n,r){return r<=0&&(t=e=n=NaN),new Rgb(t,e,n,r)}function rgbConvert(t){return t instanceof Color||(t=color(t)),t?(t=t.rgb(),new Rgb(t.r,t.g,t.b,t.opacity)):new Rgb}function rgb$1(t,e,n,r){return arguments.length===1?rgbConvert(t):new Rgb(t,e,n,r??1)}function Rgb(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}define(Rgb,rgb$1,extend(Color,{brighter:function(t){return t=t==null?brighter:Math.pow(brighter,t),new Rgb(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=t==null?darker:Math.pow(darker,t),new Rgb(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:rgb_formatHex,formatHex:rgb_formatHex,formatRgb:rgb_formatRgb,toString:rgb_formatRgb}));function rgb_formatHex(){return"#"+hex(this.r)+hex(this.g)+hex(this.b)}function rgb_formatRgb(){var t=this.opacity;return t=isNaN(t)?1:Math.max(0,Math.min(1,t)),(t===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(t===1?")":", "+t+")")}function hex(t){return t=Math.max(0,Math.min(255,Math.round(t)||0)),(t<16?"0":"")+t.toString(16)}function hsla(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Hsl(t,e,n,r)}function hslConvert(t){if(t instanceof Hsl)return new Hsl(t.h,t.s,t.l,t.opacity);if(t instanceof Color||(t=color(t)),!t)return new Hsl;if(t instanceof Hsl)return t;t=t.rgb();var e=t.r/255,n=t.g/255,r=t.b/255,o=Math.min(e,n,r),p=Math.max(e,n,r),u=NaN,l=p-o,f=(p+o)/2;return l?(e===p?u=(n-r)/l+(n<r)*6:n===p?u=(r-e)/l+2:u=(e-n)/l+4,l/=f<.5?p+o:2-p-o,u*=60):l=f>0&&f<1?0:u,new Hsl(u,l,f,t.opacity)}function hsl(t,e,n,r){return arguments.length===1?hslConvert(t):new Hsl(t,e,n,r??1)}function Hsl(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}define(Hsl,hsl,extend(Color,{brighter:function(t){return t=t==null?brighter:Math.pow(brighter,t),new Hsl(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=t==null?darker:Math.pow(darker,t),new Hsl(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,o=2*n-r;return new Rgb(hsl2rgb(t>=240?t-240:t+120,o,r),hsl2rgb(t,o,r),hsl2rgb(t<120?t+240:t-120,o,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return t=isNaN(t)?1:Math.max(0,Math.min(1,t)),(t===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(t===1?")":", "+t+")")}}));function hsl2rgb(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}function constant$1(t){return function(){return t}}function linear$1(t,e){return function(n){return t+n*e}}function exponential(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n)}}function gamma(t){return(t=+t)==1?nogamma:function(e,n){return n-e?exponential(e,n,t):constant$1(isNaN(e)?n:e)}}function nogamma(t,e){var n=e-t;return n?linear$1(t,n):constant$1(isNaN(t)?e:t)}const rgb=function t(e){var n=gamma(e);function r(o,p){var u=n((o=rgb$1(o)).r,(p=rgb$1(p)).r),l=n(o.g,p.g),f=n(o.b,p.b),h=nogamma(o.opacity,p.opacity);return function(d){return o.r=u(d),o.g=l(d),o.b=f(d),o.opacity=h(d),o+""}}return r.gamma=t,r}(1);function numberArray(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,r=e.slice(),o;return function(p){for(o=0;o<n;++o)r[o]=t[o]*(1-p)+e[o]*p;return r}}function isNumberArray(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function genericArray(t,e){var n=e?e.length:0,r=t?Math.min(n,t.length):0,o=new Array(r),p=new Array(n),u;for(u=0;u<r;++u)o[u]=interpolateValue(t[u],e[u]);for(;u<n;++u)p[u]=e[u];return function(l){for(u=0;u<r;++u)p[u]=o[u](l);return p}}function date$1(t,e){var n=new Date;return t=+t,e=+e,function(r){return n.setTime(t*(1-r)+e*r),n}}function interpolateNumber(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function object(t,e){var n={},r={},o;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(o in e)o in t?n[o]=interpolateValue(t[o],e[o]):r[o]=e[o];return function(p){for(o in n)r[o]=n[o](p);return r}}var reA=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,reB=new RegExp(reA.source,"g");function zero(t){return function(){return t}}function one(t){return function(e){return t(e)+""}}function string(t,e){var n=reA.lastIndex=reB.lastIndex=0,r,o,p,u=-1,l=[],f=[];for(t=t+"",e=e+"";(r=reA.exec(t))&&(o=reB.exec(e));)(p=o.index)>n&&(p=e.slice(n,p),l[u]?l[u]+=p:l[++u]=p),(r=r[0])===(o=o[0])?l[u]?l[u]+=o:l[++u]=o:(l[++u]=null,f.push({i:u,x:interpolateNumber(r,o)})),n=reB.lastIndex;return n<e.length&&(p=e.slice(n),l[u]?l[u]+=p:l[++u]=p),l.length<2?f[0]?one(f[0].x):zero(e):(e=f.length,function(h){for(var d=0,m;d<e;++d)l[(m=f[d]).i]=m.x(h);return l.join("")})}function interpolateValue(t,e){var n=typeof e,r;return e==null||n==="boolean"?constant$1(e):(n==="number"?interpolateNumber:n==="string"?(r=color(e))?(e=r,rgb):string:e instanceof color?rgb:e instanceof Date?date$1:isNumberArray(e)?numberArray:Array.isArray(e)?genericArray:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?object:interpolateNumber)(t,e)}function interpolateRound(t,e){return t=+t,e=+e,function(n){return Math.round(t*(1-n)+e*n)}}function constant(t){return function(){return t}}function number$1(t){return+t}var unit=[0,1];function identity$2(t){return t}function normalize(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:constant(isNaN(e)?NaN:.5)}function clamper(t){var e=t[0],n=t[t.length-1],r;return e>n&&(r=e,e=n,n=r),function(o){return Math.max(e,Math.min(n,o))}}function bimap(t,e,n){var r=t[0],o=t[1],p=e[0],u=e[1];return o<r?(r=normalize(o,r),p=n(u,p)):(r=normalize(r,o),p=n(p,u)),function(l){return p(r(l))}}function polymap(t,e,n){var r=Math.min(t.length,e.length)-1,o=new Array(r),p=new Array(r),u=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++u<r;)o[u]=normalize(t[u],t[u+1]),p[u]=n(e[u],e[u+1]);return function(l){var f=bisectRight(t,l,1,r)-1;return p[f](o[f](l))}}function copy$1(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function transformer$2(){var t=unit,e=unit,n=interpolateValue,r,o,p,u=identity$2,l,f,h;function d(){return l=Math.min(t.length,e.length)>2?polymap:bimap,f=h=null,m}function m(v){return isNaN(v=+v)?p:(f||(f=l(t.map(r),e,n)))(r(u(v)))}return m.invert=function(v){return u(o((h||(h=l(e,t.map(r),interpolateNumber)))(v)))},m.domain=function(v){return arguments.length?(t=map$1.call(v,number$1),u===identity$2||(u=clamper(t)),d()):t.slice()},m.range=function(v){return arguments.length?(e=slice.call(v),d()):e.slice()},m.rangeRound=function(v){return e=slice.call(v),n=interpolateRound,d()},m.clamp=function(v){return arguments.length?(u=v?clamper(t):identity$2,m):u!==identity$2},m.interpolate=function(v){return arguments.length?(n=v,d()):n},m.unknown=function(v){return arguments.length?(p=v,m):p},function(v,_){return r=v,o=_,d()}}function continuous(t,e){return transformer$2()(t,e)}function formatDecimal(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function formatDecimalParts(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,r=t.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+t.slice(n+1)]}function exponent(t){return t=formatDecimalParts(Math.abs(t)),t?t[1]:NaN}function formatGroup(t,e){return function(n,r){for(var o=n.length,p=[],u=0,l=t[0],f=0;o>0&&l>0&&(f+l+1>r&&(l=Math.max(1,r-f)),p.push(n.substring(o-=l,o+l)),!((f+=l+1)>r));)l=t[u=(u+1)%t.length];return p.reverse().join(e)}}function formatNumerals(t){return function(e){return e.replace(/[0-9]/g,function(n){return t[+n]})}}var re=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function formatSpecifier(t){if(!(e=re.exec(t)))throw new Error("invalid format: "+t);var e;return new FormatSpecifier({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}formatSpecifier.prototype=FormatSpecifier.prototype;function FormatSpecifier(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}FormatSpecifier.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function formatTrim(t){t:for(var e=t.length,n=1,r=-1,o;n<e;++n)switch(t[n]){case".":r=o=n;break;case"0":r===0&&(r=n),o=n;break;default:if(!+t[n])break t;r>0&&(r=0);break}return r>0?t.slice(0,r)+t.slice(o+1):t}var prefixExponent;function formatPrefixAuto(t,e){var n=formatDecimalParts(t,e);if(!n)return t+"";var r=n[0],o=n[1],p=o-(prefixExponent=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,u=r.length;return p===u?r:p>u?r+new Array(p-u+1).join("0"):p>0?r.slice(0,p)+"."+r.slice(p):"0."+new Array(1-p).join("0")+formatDecimalParts(t,Math.max(0,e+p-1))[0]}function formatRounded(t,e){var n=formatDecimalParts(t,e);if(!n)return t+"";var r=n[0],o=n[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")}const formatTypes={"%":function(t,e){return(t*100).toFixed(e)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:formatDecimal,e:function(t,e){return t.toExponential(e)},f:function(t,e){return t.toFixed(e)},g:function(t,e){return t.toPrecision(e)},o:function(t){return Math.round(t).toString(8)},p:function(t,e){return formatRounded(t*100,e)},r:formatRounded,s:formatPrefixAuto,X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}};function identity$1(t){return t}var map=Array.prototype.map,prefixes=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function formatLocale$1(t){var e=t.grouping===void 0||t.thousands===void 0?identity$1:formatGroup(map.call(t.grouping,Number),t.thousands+""),n=t.currency===void 0?"":t.currency[0]+"",r=t.currency===void 0?"":t.currency[1]+"",o=t.decimal===void 0?".":t.decimal+"",p=t.numerals===void 0?identity$1:formatNumerals(map.call(t.numerals,String)),u=t.percent===void 0?"%":t.percent+"",l=t.minus===void 0?"-":t.minus+"",f=t.nan===void 0?"NaN":t.nan+"";function h(m){m=formatSpecifier(m);var v=m.fill,_=m.align,T=m.sign,g=m.symbol,$=m.zero,E=m.width,b=m.comma,w=m.precision,S=m.trim,A=m.type;A==="n"?(b=!0,A="g"):formatTypes[A]||(w===void 0&&(w=12),S=!0,A="g"),($||v==="0"&&_==="=")&&($=!0,v="0",_="=");var O=g==="$"?n:g==="#"&&/[boxX]/.test(A)?"0"+A.toLowerCase():"",C=g==="$"?r:/[%p]/.test(A)?u:"",M=formatTypes[A],I=/[defgprs%]/.test(A);w=w===void 0?6:/[gprs]/.test(A)?Math.max(1,Math.min(21,w)):Math.max(0,Math.min(20,w));function N(D){var B=O,L=C,W,z,U;if(A==="c")L=M(D)+L,D="";else{D=+D;var G=D<0||1/D<0;if(D=isNaN(D)?f:M(Math.abs(D),w),S&&(D=formatTrim(D)),G&&+D==0&&T!=="+"&&(G=!1),B=(G?T==="("?T:l:T==="-"||T==="("?"":T)+B,L=(A==="s"?prefixes[8+prefixExponent/3]:"")+L+(G&&T==="("?")":""),I){for(W=-1,z=D.length;++W<z;)if(U=D.charCodeAt(W),48>U||U>57){L=(U===46?o+D.slice(W+1):D.slice(W))+L,D=D.slice(0,W);break}}}b&&!$&&(D=e(D,1/0));var V=B.length+D.length+L.length,K=V<E?new Array(E-V+1).join(v):"";switch(b&&$&&(D=e(K+D,K.length?E-L.length:1/0),K=""),_){case"<":D=B+D+L+K;break;case"=":D=B+K+D+L;break;case"^":D=K.slice(0,V=K.length>>1)+B+D+L+K.slice(V);break;default:D=K+B+D+L;break}return p(D)}return N.toString=function(){return m+""},N}function d(m,v){var _=h((m=formatSpecifier(m),m.type="f",m)),T=Math.max(-8,Math.min(8,Math.floor(exponent(v)/3)))*3,g=Math.pow(10,-T),$=prefixes[8+T/3];return function(E){return _(g*E)+$}}return{format:h,formatPrefix:d}}var locale$1,format,formatPrefix;defaultLocale$1({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"});function defaultLocale$1(t){return locale$1=formatLocale$1(t),format=locale$1.format,formatPrefix=locale$1.formatPrefix,locale$1}function precisionFixed(t){return Math.max(0,-exponent(Math.abs(t)))}function precisionPrefix(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(exponent(e)/3)))*3-exponent(Math.abs(t)))}function precisionRound(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,exponent(e)-exponent(t))+1}function tickFormat(t,e,n,r){var o=tickStep(t,e,n),p;switch(r=formatSpecifier(r??",f"),r.type){case"s":{var u=Math.max(Math.abs(t),Math.abs(e));return r.precision==null&&!isNaN(p=precisionPrefix(o,u))&&(r.precision=p),formatPrefix(r,u)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(p=precisionRound(o,Math.max(Math.abs(t),Math.abs(e))))&&(r.precision=p-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(p=precisionFixed(o))&&(r.precision=p-(r.type==="%")*2);break}}return format(r)}function linearish(t){var e=t.domain;return t.ticks=function(n){var r=e();return ticks(r[0],r[r.length-1],n??10)},t.tickFormat=function(n,r){var o=e();return tickFormat(o[0],o[o.length-1],n??10,r)},t.nice=function(n){n==null&&(n=10);var r=e(),o=0,p=r.length-1,u=r[o],l=r[p],f;return l<u&&(f=u,u=l,l=f,f=o,o=p,p=f),f=tickIncrement(u,l,n),f>0?(u=Math.floor(u/f)*f,l=Math.ceil(l/f)*f,f=tickIncrement(u,l,n)):f<0&&(u=Math.ceil(u*f)/f,l=Math.floor(l*f)/f,f=tickIncrement(u,l,n)),f>0?(r[o]=Math.floor(u/f)*f,r[p]=Math.ceil(l/f)*f,e(r)):f<0&&(r[o]=Math.ceil(u*f)/f,r[p]=Math.floor(l*f)/f,e(r)),t},t}function linear(){var t=continuous(identity$2,identity$2);return t.copy=function(){return copy$1(t,linear())},initRange.apply(t,arguments),linearish(t)}function identity(t){var e;function n(r){return isNaN(r=+r)?e:r}return n.invert=n,n.domain=n.range=function(r){return arguments.length?(t=map$1.call(r,number$1),n):t.slice()},n.unknown=function(r){return arguments.length?(e=r,n):e},n.copy=function(){return identity(t).unknown(e)},t=arguments.length?map$1.call(t,number$1):[0,1],linearish(n)}function nice(t,e){t=t.slice();var n=0,r=t.length-1,o=t[n],p=t[r],u;return p<o&&(u=n,n=r,r=u,u=o,o=p,p=u),t[n]=e.floor(o),t[r]=e.ceil(p),t}function transformLog(t){return Math.log(t)}function transformExp(t){return Math.exp(t)}function transformLogn(t){return-Math.log(-t)}function transformExpn(t){return-Math.exp(-t)}function pow10(t){return isFinite(t)?+("1e"+t):t<0?0:t}function powp(t){return t===10?pow10:t===Math.E?Math.exp:function(e){return Math.pow(t,e)}}function logp(t){return t===Math.E?Math.log:t===10&&Math.log10||t===2&&Math.log2||(t=Math.log(t),function(e){return Math.log(e)/t})}function reflect(t){return function(e){return-t(-e)}}function loggish(t){var e=t(transformLog,transformExp),n=e.domain,r=10,o,p;function u(){return o=logp(r),p=powp(r),n()[0]<0?(o=reflect(o),p=reflect(p),t(transformLogn,transformExpn)):t(transformLog,transformExp),e}return e.base=function(l){return arguments.length?(r=+l,u()):r},e.domain=function(l){return arguments.length?(n(l),u()):n()},e.ticks=function(l){var f=n(),h=f[0],d=f[f.length-1],m;(m=d<h)&&(v=h,h=d,d=v);var v=o(h),_=o(d),T,g,$,E=l==null?10:+l,b=[];if(!(r%1)&&_-v<E){if(v=Math.round(v)-1,_=Math.round(_)+1,h>0){for(;v<_;++v)for(g=1,T=p(v);g<r;++g)if($=T*g,!($<h)){if($>d)break;b.push($)}}else for(;v<_;++v)for(g=r-1,T=p(v);g>=1;--g)if($=T*g,!($<h)){if($>d)break;b.push($)}}else b=ticks(v,_,Math.min(_-v,E)).map(p);return m?b.reverse():b},e.tickFormat=function(l,f){if(f==null&&(f=r===10?".0e":","),typeof f!="function"&&(f=format(f)),l===1/0)return f;l==null&&(l=10);var h=Math.max(1,r*l/e.ticks().length);return function(d){var m=d/p(Math.round(o(d)));return m*r<r-.5&&(m*=r),m<=h?f(d):""}},e.nice=function(){return n(nice(n(),{floor:function(l){return p(Math.floor(o(l)))},ceil:function(l){return p(Math.ceil(o(l)))}}))},e}function log(){var t=loggish(transformer$2()).domain([1,10]);return t.copy=function(){return copy$1(t,log()).base(t.base())},initRange.apply(t,arguments),t}function transformSymlog(t){return function(e){return Math.sign(e)*Math.log1p(Math.abs(e/t))}}function transformSymexp(t){return function(e){return Math.sign(e)*Math.expm1(Math.abs(e))*t}}function symlogish(t){var e=1,n=t(transformSymlog(e),transformSymexp(e));return n.constant=function(r){return arguments.length?t(transformSymlog(e=+r),transformSymexp(e)):e},linearish(n)}function symlog(){var t=symlogish(transformer$2());return t.copy=function(){return copy$1(t,symlog()).constant(t.constant())},initRange.apply(t,arguments)}function transformPow(t){return function(e){return e<0?-Math.pow(-e,t):Math.pow(e,t)}}function transformSqrt(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function transformSquare(t){return t<0?-t*t:t*t}function powish(t){var e=t(identity$2,identity$2),n=1;function r(){return n===1?t(identity$2,identity$2):n===.5?t(transformSqrt,transformSquare):t(transformPow(n),transformPow(1/n))}return e.exponent=function(o){return arguments.length?(n=+o,r()):n},linearish(e)}function pow(){var t=powish(transformer$2());return t.copy=function(){return copy$1(t,pow()).exponent(t.exponent())},initRange.apply(t,arguments),t}function sqrt(){return pow.apply(null,arguments).exponent(.5)}function quantile(){var t=[],e=[],n=[],r;function o(){var u=0,l=Math.max(1,e.length);for(n=new Array(l-1);++u<l;)n[u-1]=threshold$1(t,u/l);return p}function p(u){return isNaN(u=+u)?r:e[bisectRight(n,u)]}return p.invertExtent=function(u){var l=e.indexOf(u);return l<0?[NaN,NaN]:[l>0?n[l-1]:t[0],l<n.length?n[l]:t[t.length-1]]},p.domain=function(u){if(!arguments.length)return t.slice();t=[];for(var l=0,f=u.length,h;l<f;++l)h=u[l],h!=null&&!isNaN(h=+h)&&t.push(h);return t.sort(ascending),o()},p.range=function(u){return arguments.length?(e=slice.call(u),o()):e.slice()},p.unknown=function(u){return arguments.length?(r=u,p):r},p.quantiles=function(){return n.slice()},p.copy=function(){return quantile().domain(t).range(e).unknown(r)},initRange.apply(p,arguments)}function quantize(){var t=0,e=1,n=1,r=[.5],o=[0,1],p;function u(f){return f<=f?o[bisectRight(r,f,0,n)]:p}function l(){var f=-1;for(r=new Array(n);++f<n;)r[f]=((f+1)*e-(f-n)*t)/(n+1);return u}return u.domain=function(f){return arguments.length?(t=+f[0],e=+f[1],l()):[t,e]},u.range=function(f){return arguments.length?(n=(o=slice.call(f)).length-1,l()):o.slice()},u.invertExtent=function(f){var h=o.indexOf(f);return h<0?[NaN,NaN]:h<1?[t,r[0]]:h>=n?[r[n-1],e]:[r[h-1],r[h]]},u.unknown=function(f){return arguments.length&&(p=f),u},u.thresholds=function(){return r.slice()},u.copy=function(){return quantize().domain([t,e]).range(o).unknown(p)},initRange.apply(linearish(u),arguments)}function threshold(){var t=[.5],e=[0,1],n,r=1;function o(p){return p<=p?e[bisectRight(t,p,0,r)]:n}return o.domain=function(p){return arguments.length?(t=slice.call(p),r=Math.min(t.length,e.length-1),o):t.slice()},o.range=function(p){return arguments.length?(e=slice.call(p),r=Math.min(t.length,e.length-1),o):e.slice()},o.invertExtent=function(p){var u=e.indexOf(p);return[t[u-1],t[u]]},o.unknown=function(p){return arguments.length?(n=p,o):n},o.copy=function(){return threshold().domain(t).range(e).unknown(n)},initRange.apply(o,arguments)}var t0=new Date,t1=new Date;function newInterval(t,e,n,r){function o(p){return t(p=arguments.length===0?new Date:new Date(+p)),p}return o.floor=function(p){return t(p=new Date(+p)),p},o.ceil=function(p){return t(p=new Date(p-1)),e(p,1),t(p),p},o.round=function(p){var u=o(p),l=o.ceil(p);return p-u<l-p?u:l},o.offset=function(p,u){return e(p=new Date(+p),u==null?1:Math.floor(u)),p},o.range=function(p,u,l){var f=[],h;if(p=o.ceil(p),l=l==null?1:Math.floor(l),!(p<u)||!(l>0))return f;do f.push(h=new Date(+p)),e(p,l),t(p);while(h<p&&p<u);return f},o.filter=function(p){return newInterval(function(u){if(u>=u)for(;t(u),!p(u);)u.setTime(u-1)},function(u,l){if(u>=u)if(l<0)for(;++l<=0;)for(;e(u,-1),!p(u););else for(;--l>=0;)for(;e(u,1),!p(u););})},n&&(o.count=function(p,u){return t0.setTime(+p),t1.setTime(+u),t(t0),t(t1),Math.floor(n(t0,t1))},o.every=function(p){return p=Math.floor(p),!isFinite(p)||!(p>0)?null:p>1?o.filter(r?function(u){return r(u)%p===0}:function(u){return o.count(0,u)%p===0}):o}),o}var millisecond=newInterval(function(){},function(t,e){t.setTime(+t+e)},function(t,e){return e-t});millisecond.every=function(t){return t=Math.floor(t),!isFinite(t)||!(t>0)?null:t>1?newInterval(function(e){e.setTime(Math.floor(e/t)*t)},function(e,n){e.setTime(+e+n*t)},function(e,n){return(n-e)/t}):millisecond};const utcMillisecond=millisecond;millisecond.range;var durationSecond$1=1e3,durationMinute$1=6e4,durationHour$1=36e5,durationDay$1=864e5,durationWeek$1=6048e5,second=newInterval(function(t){t.setTime(t-t.getMilliseconds())},function(t,e){t.setTime(+t+e*durationSecond$1)},function(t,e){return(e-t)/durationSecond$1},function(t){return t.getUTCSeconds()});const utcSecond=second;second.range;var minute=newInterval(function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*durationSecond$1)},function(t,e){t.setTime(+t+e*durationMinute$1)},function(t,e){return(e-t)/durationMinute$1},function(t){return t.getMinutes()});const timeMinute=minute;minute.range;var hour=newInterval(function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*durationSecond$1-t.getMinutes()*durationMinute$1)},function(t,e){t.setTime(+t+e*durationHour$1)},function(t,e){return(e-t)/durationHour$1},function(t){return t.getHours()});const timeHour=hour;hour.range;var day=newInterval(function(t){t.setHours(0,0,0,0)},function(t,e){t.setDate(t.getDate()+e)},function(t,e){return(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*durationMinute$1)/durationDay$1},function(t){return t.getDate()-1});const timeDay=day;day.range;function weekday(t){return newInterval(function(e){e.setDate(e.getDate()-(e.getDay()+7-t)%7),e.setHours(0,0,0,0)},function(e,n){e.setDate(e.getDate()+n*7)},function(e,n){return(n-e-(n.getTimezoneOffset()-e.getTimezoneOffset())*durationMinute$1)/durationWeek$1})}var sunday=weekday(0),monday=weekday(1),tuesday=weekday(2),wednesday=weekday(3),thursday=weekday(4),friday=weekday(5),saturday=weekday(6);sunday.range;monday.range;tuesday.range;wednesday.range;thursday.range;friday.range;saturday.range;var month=newInterval(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,e){t.setMonth(t.getMonth()+e)},function(t,e){return e.getMonth()-t.getMonth()+(e.getFullYear()-t.getFullYear())*12},function(t){return t.getMonth()});const timeMonth=month;month.range;var year=newInterval(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,e){t.setFullYear(t.getFullYear()+e)},function(t,e){return e.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});year.every=function(t){return!isFinite(t=Math.floor(t))||!(t>0)?null:newInterval(function(e){e.setFullYear(Math.floor(e.getFullYear()/t)*t),e.setMonth(0,1),e.setHours(0,0,0,0)},function(e,n){e.setFullYear(e.getFullYear()+n*t)})};const timeYear=year;year.range;var utcMinute=newInterval(function(t){t.setUTCSeconds(0,0)},function(t,e){t.setTime(+t+e*durationMinute$1)},function(t,e){return(e-t)/durationMinute$1},function(t){return t.getUTCMinutes()});const utcMinute$1=utcMinute;utcMinute.range;var utcHour=newInterval(function(t){t.setUTCMinutes(0,0,0)},function(t,e){t.setTime(+t+e*durationHour$1)},function(t,e){return(e-t)/durationHour$1},function(t){return t.getUTCHours()});const utcHour$1=utcHour;utcHour.range;var utcDay=newInterval(function(t){t.setUTCHours(0,0,0,0)},function(t,e){t.setUTCDate(t.getUTCDate()+e)},function(t,e){return(e-t)/durationDay$1},function(t){return t.getUTCDate()-1});const utcDay$1=utcDay;utcDay.range;function utcWeekday(t){return newInterval(function(e){e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+7-t)%7),e.setUTCHours(0,0,0,0)},function(e,n){e.setUTCDate(e.getUTCDate()+n*7)},function(e,n){return(n-e)/durationWeek$1})}var utcSunday=utcWeekday(0),utcMonday=utcWeekday(1),utcTuesday=utcWeekday(2),utcWednesday=utcWeekday(3),utcThursday=utcWeekday(4),utcFriday=utcWeekday(5),utcSaturday=utcWeekday(6);utcSunday.range;utcMonday.range;utcTuesday.range;utcWednesday.range;utcThursday.range;utcFriday.range;utcSaturday.range;var utcMonth=newInterval(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,e){t.setUTCMonth(t.getUTCMonth()+e)},function(t,e){return e.getUTCMonth()-t.getUTCMonth()+(e.getUTCFullYear()-t.getUTCFullYear())*12},function(t){return t.getUTCMonth()});const utcMonth$1=utcMonth;utcMonth.range;var utcYear=newInterval(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,e){t.setUTCFullYear(t.getUTCFullYear()+e)},function(t,e){return e.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});utcYear.every=function(t){return!isFinite(t=Math.floor(t))||!(t>0)?null:newInterval(function(e){e.setUTCFullYear(Math.floor(e.getUTCFullYear()/t)*t),e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},function(e,n){e.setUTCFullYear(e.getUTCFullYear()+n*t)})};const utcYear$1=utcYear;utcYear.range;function localDate(t){if(0<=t.y&&t.y<100){var e=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return e.setFullYear(t.y),e}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function utcDate(t){if(0<=t.y&&t.y<100){var e=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return e.setUTCFullYear(t.y),e}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function newDate(t,e,n){return{y:t,m:e,d:n,H:0,M:0,S:0,L:0}}function formatLocale(t){var e=t.dateTime,n=t.date,r=t.time,o=t.periods,p=t.days,u=t.shortDays,l=t.months,f=t.shortMonths,h=formatRe(o),d=formatLookup(o),m=formatRe(p),v=formatLookup(p),_=formatRe(u),T=formatLookup(u),g=formatRe(l),$=formatLookup(l),E=formatRe(f),b=formatLookup(f),w={a:G,A:V,b:K,B:Z,c:null,d:formatDayOfMonth,e:formatDayOfMonth,f:formatMicroseconds,g:formatYearISO,G:formatFullYearISO,H:formatHour24,I:formatHour12,j:formatDayOfYear,L:formatMilliseconds,m:formatMonthNumber,M:formatMinutes,p:it,q:ot,Q:formatUnixTimestamp,s:formatUnixTimestampSeconds,S:formatSeconds,u:formatWeekdayNumberMonday,U:formatWeekNumberSunday,V:formatWeekNumberISO,w:formatWeekdayNumberSunday,W:formatWeekNumberMonday,x:null,X:null,y:formatYear,Y:formatFullYear,Z:formatZone,"%":formatLiteralPercent},S={a:tt,A:rt,b:st,B:Q,c:null,d:formatUTCDayOfMonth,e:formatUTCDayOfMonth,f:formatUTCMicroseconds,g:formatUTCYearISO,G:formatUTCFullYearISO,H:formatUTCHour24,I:formatUTCHour12,j:formatUTCDayOfYear,L:formatUTCMilliseconds,m:formatUTCMonthNumber,M:formatUTCMinutes,p:pt,q:ct,Q:formatUnixTimestamp,s:formatUnixTimestampSeconds,S:formatUTCSeconds,u:formatUTCWeekdayNumberMonday,U:formatUTCWeekNumberSunday,V:formatUTCWeekNumberISO,w:formatUTCWeekdayNumberSunday,W:formatUTCWeekNumberMonday,x:null,X:null,y:formatUTCYear,Y:formatUTCFullYear,Z:formatUTCZone,"%":formatLiteralPercent},A={a:N,A:D,b:B,B:L,c:W,d:parseDayOfMonth,e:parseDayOfMonth,f:parseMicroseconds,g:parseYear,G:parseFullYear,H:parseHour24,I:parseHour24,j:parseDayOfYear,L:parseMilliseconds,m:parseMonthNumber,M:parseMinutes,p:I,q:parseQuarter,Q:parseUnixTimestamp,s:parseUnixTimestampSeconds,S:parseSeconds,u:parseWeekdayNumberMonday,U:parseWeekNumberSunday,V:parseWeekNumberISO,w:parseWeekdayNumberSunday,W:parseWeekNumberMonday,x:z,X:U,y:parseYear,Y:parseFullYear,Z:parseZone,"%":parseLiteralPercent};w.x=O(n,w),w.X=O(r,w),w.c=O(e,w),S.x=O(n,S),S.X=O(r,S),S.c=O(e,S);function O(H,Y){return function(q){var F=[],et=-1,X=0,J=H.length,nt,at,ut;for(q instanceof Date||(q=new Date(+q));++et<J;)H.charCodeAt(et)===37&&(F.push(H.slice(X,et)),(at=pads[nt=H.charAt(++et)])!=null?nt=H.charAt(++et):at=nt==="e"?" ":"0",(ut=Y[nt])&&(nt=ut(q,at)),F.push(nt),X=et+1);return F.push(H.slice(X,et)),F.join("")}}function C(H,Y){return function(q){var F=newDate(1900,void 0,1),et=M(F,H,q+="",0),X,J;if(et!=q.length)return null;if("Q"in F)return new Date(F.Q);if("s"in F)return new Date(F.s*1e3+("L"in F?F.L:0));if(Y&&!("Z"in F)&&(F.Z=0),"p"in F&&(F.H=F.H%12+F.p*12),F.m===void 0&&(F.m="q"in F?F.q:0),"V"in F){if(F.V<1||F.V>53)return null;"w"in F||(F.w=1),"Z"in F?(X=utcDate(newDate(F.y,0,1)),J=X.getUTCDay(),X=J>4||J===0?utcMonday.ceil(X):utcMonday(X),X=utcDay$1.offset(X,(F.V-1)*7),F.y=X.getUTCFullYear(),F.m=X.getUTCMonth(),F.d=X.getUTCDate()+(F.w+6)%7):(X=localDate(newDate(F.y,0,1)),J=X.getDay(),X=J>4||J===0?monday.ceil(X):monday(X),X=timeDay.offset(X,(F.V-1)*7),F.y=X.getFullYear(),F.m=X.getMonth(),F.d=X.getDate()+(F.w+6)%7)}else("W"in F||"U"in F)&&("w"in F||(F.w="u"in F?F.u%7:"W"in F?1:0),J="Z"in F?utcDate(newDate(F.y,0,1)).getUTCDay():localDate(newDate(F.y,0,1)).getDay(),F.m=0,F.d="W"in F?(F.w+6)%7+F.W*7-(J+5)%7:F.w+F.U*7-(J+6)%7);return"Z"in F?(F.H+=F.Z/100|0,F.M+=F.Z%100,utcDate(F)):localDate(F)}}function M(H,Y,q,F){for(var et=0,X=Y.length,J=q.length,nt,at;et<X;){if(F>=J)return-1;if(nt=Y.charCodeAt(et++),nt===37){if(nt=Y.charAt(et++),at=A[nt in pads?Y.charAt(et++):nt],!at||(F=at(H,q,F))<0)return-1}else if(nt!=q.charCodeAt(F++))return-1}return F}function I(H,Y,q){var F=h.exec(Y.slice(q));return F?(H.p=d[F[0].toLowerCase()],q+F[0].length):-1}function N(H,Y,q){var F=_.exec(Y.slice(q));return F?(H.w=T[F[0].toLowerCase()],q+F[0].length):-1}function D(H,Y,q){var F=m.exec(Y.slice(q));return F?(H.w=v[F[0].toLowerCase()],q+F[0].length):-1}function B(H,Y,q){var F=E.exec(Y.slice(q));return F?(H.m=b[F[0].toLowerCase()],q+F[0].length):-1}function L(H,Y,q){var F=g.exec(Y.slice(q));return F?(H.m=$[F[0].toLowerCase()],q+F[0].length):-1}function W(H,Y,q){return M(H,e,Y,q)}function z(H,Y,q){return M(H,n,Y,q)}function U(H,Y,q){return M(H,r,Y,q)}function G(H){return u[H.getDay()]}function V(H){return p[H.getDay()]}function K(H){return f[H.getMonth()]}function Z(H){return l[H.getMonth()]}function it(H){return o[+(H.getHours()>=12)]}function ot(H){return 1+~~(H.getMonth()/3)}function tt(H){return u[H.getUTCDay()]}function rt(H){return p[H.getUTCDay()]}function st(H){return f[H.getUTCMonth()]}function Q(H){return l[H.getUTCMonth()]}function pt(H){return o[+(H.getUTCHours()>=12)]}function ct(H){return 1+~~(H.getUTCMonth()/3)}return{format:function(H){var Y=O(H+="",w);return Y.toString=function(){return H},Y},parse:function(H){var Y=C(H+="",!1);return Y.toString=function(){return H},Y},utcFormat:function(H){var Y=O(H+="",S);return Y.toString=function(){return H},Y},utcParse:function(H){var Y=C(H+="",!0);return Y.toString=function(){return H},Y}}}var pads={"-":"",_:" ",0:"0"},numberRe=/^\s*\d+/,percentRe=/^%/,requoteRe=/[\\^$*+?|[\]().{}]/g;function pad(t,e,n){var r=t<0?"-":"",o=(r?-t:t)+"",p=o.length;return r+(p<n?new Array(n-p+1).join(e)+o:o)}function requote(t){return t.replace(requoteRe,"\\$&")}function formatRe(t){return new RegExp("^(?:"+t.map(requote).join("|")+")","i")}function formatLookup(t){for(var e={},n=-1,r=t.length;++n<r;)e[t[n].toLowerCase()]=n;return e}function parseWeekdayNumberSunday(t,e,n){var r=numberRe.exec(e.slice(n,n+1));return r?(t.w=+r[0],n+r[0].length):-1}function parseWeekdayNumberMonday(t,e,n){var r=numberRe.exec(e.slice(n,n+1));return r?(t.u=+r[0],n+r[0].length):-1}function parseWeekNumberSunday(t,e,n){var r=numberRe.exec(e.slice(n,n+2));return r?(t.U=+r[0],n+r[0].length):-1}function parseWeekNumberISO(t,e,n){var r=numberRe.exec(e.slice(n,n+2));return r?(t.V=+r[0],n+r[0].length):-1}function parseWeekNumberMonday(t,e,n){var r=numberRe.exec(e.slice(n,n+2));return r?(t.W=+r[0],n+r[0].length):-1}function parseFullYear(t,e,n){var r=numberRe.exec(e.slice(n,n+4));return r?(t.y=+r[0],n+r[0].length):-1}function parseYear(t,e,n){var r=numberRe.exec(e.slice(n,n+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function parseZone(t,e,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n,n+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function parseQuarter(t,e,n){var r=numberRe.exec(e.slice(n,n+1));return r?(t.q=r[0]*3-3,n+r[0].length):-1}function parseMonthNumber(t,e,n){var r=numberRe.exec(e.slice(n,n+2));return r?(t.m=r[0]-1,n+r[0].length):-1}function parseDayOfMonth(t,e,n){var r=numberRe.exec(e.slice(n,n+2));return r?(t.d=+r[0],n+r[0].length):-1}function parseDayOfYear(t,e,n){var r=numberRe.exec(e.slice(n,n+3));return r?(t.m=0,t.d=+r[0],n+r[0].length):-1}function parseHour24(t,e,n){var r=numberRe.exec(e.slice(n,n+2));return r?(t.H=+r[0],n+r[0].length):-1}function parseMinutes(t,e,n){var r=numberRe.exec(e.slice(n,n+2));return r?(t.M=+r[0],n+r[0].length):-1}function parseSeconds(t,e,n){var r=numberRe.exec(e.slice(n,n+2));return r?(t.S=+r[0],n+r[0].length):-1}function parseMilliseconds(t,e,n){var r=numberRe.exec(e.slice(n,n+3));return r?(t.L=+r[0],n+r[0].length):-1}function parseMicroseconds(t,e,n){var r=numberRe.exec(e.slice(n,n+6));return r?(t.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function parseLiteralPercent(t,e,n){var r=percentRe.exec(e.slice(n,n+1));return r?n+r[0].length:-1}function parseUnixTimestamp(t,e,n){var r=numberRe.exec(e.slice(n));return r?(t.Q=+r[0],n+r[0].length):-1}function parseUnixTimestampSeconds(t,e,n){var r=numberRe.exec(e.slice(n));return r?(t.s=+r[0],n+r[0].length):-1}function formatDayOfMonth(t,e){return pad(t.getDate(),e,2)}function formatHour24(t,e){return pad(t.getHours(),e,2)}function formatHour12(t,e){return pad(t.getHours()%12||12,e,2)}function formatDayOfYear(t,e){return pad(1+timeDay.count(timeYear(t),t),e,3)}function formatMilliseconds(t,e){return pad(t.getMilliseconds(),e,3)}function formatMicroseconds(t,e){return formatMilliseconds(t,e)+"000"}function formatMonthNumber(t,e){return pad(t.getMonth()+1,e,2)}function formatMinutes(t,e){return pad(t.getMinutes(),e,2)}function formatSeconds(t,e){return pad(t.getSeconds(),e,2)}function formatWeekdayNumberMonday(t){var e=t.getDay();return e===0?7:e}function formatWeekNumberSunday(t,e){return pad(sunday.count(timeYear(t)-1,t),e,2)}function dISO(t){var e=t.getDay();return e>=4||e===0?thursday(t):thursday.ceil(t)}function formatWeekNumberISO(t,e){return t=dISO(t),pad(thursday.count(timeYear(t),t)+(timeYear(t).getDay()===4),e,2)}function formatWeekdayNumberSunday(t){return t.getDay()}function formatWeekNumberMonday(t,e){return pad(monday.count(timeYear(t)-1,t),e,2)}function formatYear(t,e){return pad(t.getFullYear()%100,e,2)}function formatYearISO(t,e){return t=dISO(t),pad(t.getFullYear()%100,e,2)}function formatFullYear(t,e){return pad(t.getFullYear()%1e4,e,4)}function formatFullYearISO(t,e){var n=t.getDay();return t=n>=4||n===0?thursday(t):thursday.ceil(t),pad(t.getFullYear()%1e4,e,4)}function formatZone(t){var e=t.getTimezoneOffset();return(e>0?"-":(e*=-1,"+"))+pad(e/60|0,"0",2)+pad(e%60,"0",2)}function formatUTCDayOfMonth(t,e){return pad(t.getUTCDate(),e,2)}function formatUTCHour24(t,e){return pad(t.getUTCHours(),e,2)}function formatUTCHour12(t,e){return pad(t.getUTCHours()%12||12,e,2)}function formatUTCDayOfYear(t,e){return pad(1+utcDay$1.count(utcYear$1(t),t),e,3)}function formatUTCMilliseconds(t,e){return pad(t.getUTCMilliseconds(),e,3)}function formatUTCMicroseconds(t,e){return formatUTCMilliseconds(t,e)+"000"}function formatUTCMonthNumber(t,e){return pad(t.getUTCMonth()+1,e,2)}function formatUTCMinutes(t,e){return pad(t.getUTCMinutes(),e,2)}function formatUTCSeconds(t,e){return pad(t.getUTCSeconds(),e,2)}function formatUTCWeekdayNumberMonday(t){var e=t.getUTCDay();return e===0?7:e}function formatUTCWeekNumberSunday(t,e){return pad(utcSunday.count(utcYear$1(t)-1,t),e,2)}function UTCdISO(t){var e=t.getUTCDay();return e>=4||e===0?utcThursday(t):utcThursday.ceil(t)}function formatUTCWeekNumberISO(t,e){return t=UTCdISO(t),pad(utcThursday.count(utcYear$1(t),t)+(utcYear$1(t).getUTCDay()===4),e,2)}function formatUTCWeekdayNumberSunday(t){return t.getUTCDay()}function formatUTCWeekNumberMonday(t,e){return pad(utcMonday.count(utcYear$1(t)-1,t),e,2)}function formatUTCYear(t,e){return pad(t.getUTCFullYear()%100,e,2)}function formatUTCYearISO(t,e){return t=UTCdISO(t),pad(t.getUTCFullYear()%100,e,2)}function formatUTCFullYear(t,e){return pad(t.getUTCFullYear()%1e4,e,4)}function formatUTCFullYearISO(t,e){var n=t.getUTCDay();return t=n>=4||n===0?utcThursday(t):utcThursday.ceil(t),pad(t.getUTCFullYear()%1e4,e,4)}function formatUTCZone(){return"+0000"}function formatLiteralPercent(){return"%"}function formatUnixTimestamp(t){return+t}function formatUnixTimestampSeconds(t){return Math.floor(+t/1e3)}var locale,timeFormat,utcFormat;defaultLocale({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function defaultLocale(t){return locale=formatLocale(t),timeFormat=locale.format,locale.parse,utcFormat=locale.utcFormat,locale.utcParse,locale}var durationSecond=1e3,durationMinute=durationSecond*60,durationHour=durationMinute*60,durationDay=durationHour*24,durationWeek=durationDay*7,durationMonth=durationDay*30,durationYear=durationDay*365;function date(t){return new Date(t)}function number(t){return t instanceof Date?+t:+new Date(+t)}function calendar(t,e,n,r,o,p,u,l,f){var h=continuous(identity$2,identity$2),d=h.invert,m=h.domain,v=f(".%L"),_=f(":%S"),T=f("%I:%M"),g=f("%I %p"),$=f("%a %d"),E=f("%b %d"),b=f("%B"),w=f("%Y"),S=[[u,1,durationSecond],[u,5,5*durationSecond],[u,15,15*durationSecond],[u,30,30*durationSecond],[p,1,durationMinute],[p,5,5*durationMinute],[p,15,15*durationMinute],[p,30,30*durationMinute],[o,1,durationHour],[o,3,3*durationHour],[o,6,6*durationHour],[o,12,12*durationHour],[r,1,durationDay],[r,2,2*durationDay],[n,1,durationWeek],[e,1,durationMonth],[e,3,3*durationMonth],[t,1,durationYear]];function A(C){return(u(C)<C?v:p(C)<C?_:o(C)<C?T:r(C)<C?g:e(C)<C?n(C)<C?$:E:t(C)<C?b:w)(C)}function O(C,M,I,N){if(C==null&&(C=10),typeof C=="number"){var D=Math.abs(I-M)/C,B=bisector(function(L){return L[2]}).right(S,D);B===S.length?(N=tickStep(M/durationYear,I/durationYear,C),C=t):B?(B=S[D/S[B-1][2]<S[B][2]/D?B-1:B],N=B[1],C=B[0]):(N=Math.max(tickStep(M,I,C),1),C=l)}return N==null?C:C.every(N)}return h.invert=function(C){return new Date(d(C))},h.domain=function(C){return arguments.length?m(map$1.call(C,number)):m().map(date)},h.ticks=function(C,M){var I=m(),N=I[0],D=I[I.length-1],B=D<N,L;return B&&(L=N,N=D,D=L),L=O(C,N,D,M),L=L?L.range(N,D+1):[],B?L.reverse():L},h.tickFormat=function(C,M){return M==null?A:f(M)},h.nice=function(C,M){var I=m();return(C=O(C,I[0],I[I.length-1],M))?m(nice(I,C)):h},h.copy=function(){return copy$1(h,calendar(t,e,n,r,o,p,u,l,f))},h}function time(){return initRange.apply(calendar(timeYear,timeMonth,sunday,timeDay,timeHour,timeMinute,utcSecond,utcMillisecond,timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function utcTime(){return initRange.apply(calendar(utcYear$1,utcMonth$1,utcSunday,utcDay$1,utcHour$1,utcMinute$1,utcSecond,utcMillisecond,utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function transformer$1(){var t=0,e=1,n,r,o,p,u=identity$2,l=!1,f;function h(d){return isNaN(d=+d)?f:u(o===0?.5:(d=(p(d)-n)*o,l?Math.max(0,Math.min(1,d)):d))}return h.domain=function(d){return arguments.length?(n=p(t=+d[0]),r=p(e=+d[1]),o=n===r?0:1/(r-n),h):[t,e]},h.clamp=function(d){return arguments.length?(l=!!d,h):l},h.interpolator=function(d){return arguments.length?(u=d,h):u},h.unknown=function(d){return arguments.length?(f=d,h):f},function(d){return p=d,n=d(t),r=d(e),o=n===r?0:1/(r-n),h}}function copy(t,e){return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function sequential(){var t=linearish(transformer$1()(identity$2));return t.copy=function(){return copy(t,sequential())},initInterpolator.apply(t,arguments)}function sequentialLog(){var t=loggish(transformer$1()).domain([1,10]);return t.copy=function(){return copy(t,sequentialLog()).base(t.base())},initInterpolator.apply(t,arguments)}function sequentialSymlog(){var t=symlogish(transformer$1());return t.copy=function(){return copy(t,sequentialSymlog()).constant(t.constant())},initInterpolator.apply(t,arguments)}function sequentialPow(){var t=powish(transformer$1());return t.copy=function(){return copy(t,sequentialPow()).exponent(t.exponent())},initInterpolator.apply(t,arguments)}function sequentialSqrt(){return sequentialPow.apply(null,arguments).exponent(.5)}function sequentialQuantile(){var t=[],e=identity$2;function n(r){if(!isNaN(r=+r))return e((bisectRight(t,r)-1)/(t.length-1))}return n.domain=function(r){if(!arguments.length)return t.slice();t=[];for(var o=0,p=r.length,u;o<p;++o)u=r[o],u!=null&&!isNaN(u=+u)&&t.push(u);return t.sort(ascending),n},n.interpolator=function(r){return arguments.length?(e=r,n):e},n.copy=function(){return sequentialQuantile(e).domain(t)},initInterpolator.apply(n,arguments)}function transformer(){var t=0,e=.5,n=1,r,o,p,u,l,f=identity$2,h,d=!1,m;function v(_){return isNaN(_=+_)?m:(_=.5+((_=+h(_))-o)*(_<o?u:l),f(d?Math.max(0,Math.min(1,_)):_))}return v.domain=function(_){return arguments.length?(r=h(t=+_[0]),o=h(e=+_[1]),p=h(n=+_[2]),u=r===o?0:.5/(o-r),l=o===p?0:.5/(p-o),v):[t,e,n]},v.clamp=function(_){return arguments.length?(d=!!_,v):d},v.interpolator=function(_){return arguments.length?(f=_,v):f},v.unknown=function(_){return arguments.length?(m=_,v):m},function(_){return h=_,r=_(t),o=_(e),p=_(n),u=r===o?0:.5/(o-r),l=o===p?0:.5/(p-o),v}}function diverging(){var t=linearish(transformer()(identity$2));return t.copy=function(){return copy(t,diverging())},initInterpolator.apply(t,arguments)}function divergingLog(){var t=loggish(transformer()).domain([.1,1,10]);return t.copy=function(){return copy(t,divergingLog()).base(t.base())},initInterpolator.apply(t,arguments)}function divergingSymlog(){var t=symlogish(transformer());return t.copy=function(){return copy(t,divergingSymlog()).constant(t.constant())},initInterpolator.apply(t,arguments)}function divergingPow(){var t=powish(transformer());return t.copy=function(){return copy(t,divergingPow()).exponent(t.exponent())},initInterpolator.apply(t,arguments)}function divergingSqrt(){return divergingPow.apply(null,arguments).exponent(.5)}const d3Scales=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:band,scaleDiverging:diverging,scaleDivergingLog:divergingLog,scaleDivergingPow:divergingPow,scaleDivergingSqrt:divergingSqrt,scaleDivergingSymlog:divergingSymlog,scaleIdentity:identity,scaleImplicit:implicit,scaleLinear:linear,scaleLog:log,scaleOrdinal:ordinal,scalePoint:point,scalePow:pow,scaleQuantile:quantile,scaleQuantize:quantize,scaleSequential:sequential,scaleSequentialLog:sequentialLog,scaleSequentialPow:sequentialPow,scaleSequentialQuantile:sequentialQuantile,scaleSequentialSqrt:sequentialSqrt,scaleSequentialSymlog:sequentialSymlog,scaleSqrt:sqrt,scaleSymlog:symlog,scaleThreshold:threshold,scaleTime:time,scaleUtc:utcTime,tickFormat},Symbol.toStringTag,{value:"Module"}));function _typeof$e(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$e=function(n){return typeof n}:_typeof$e=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$e(t)}function _extends$e(){return _extends$e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$e.apply(this,arguments)}function _slicedToArray$1(t,e){return _arrayWithHoles$1(t)||_iterableToArrayLimit$1(t,e)||_nonIterableRest$1()}function _nonIterableRest$1(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit$1(t,e){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]"){var n=[],r=!0,o=!1,p=void 0;try{for(var u=t[Symbol.iterator](),l;!(r=(l=u.next()).done)&&(n.push(l.value),!(e&&n.length===e));r=!0);}catch(f){o=!0,p=f}finally{try{!r&&u.return!=null&&u.return()}finally{if(o)throw p}}return n}}function _arrayWithHoles$1(t){if(Array.isArray(t))return t}function _objectWithoutProperties$4(t,e){if(t==null)return{};var n=_objectWithoutPropertiesLoose$4(t,e),r,o;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(o=0;o<p.length;o++)r=p[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _objectWithoutPropertiesLoose$4(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,p;for(p=0;p<r.length;p++)o=r[p],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function _classCallCheck$f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$f(t,e,n){return e&&_defineProperties$f(t.prototype,e),n&&_defineProperties$f(t,n),t}function _possibleConstructorReturn$e(t,e){return e&&(_typeof$e(e)==="object"||typeof e=="function")?e:_assertThisInitialized$e(t)}function _assertThisInitialized$e(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$e(t){return _getPrototypeOf$e=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$e(t)}function _inherits$e(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$e(t,e)}function _setPrototypeOf$e(t,e){return _setPrototypeOf$e=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$e(t,e)}var ErrorBar=function(t){_inherits$e(e,t);function e(){return _classCallCheck$f(this,e),_possibleConstructorReturn$e(this,_getPrototypeOf$e(e).apply(this,arguments))}return _createClass$f(e,[{key:"renderErrorBars",value:function(){var r=this.props,o=r.offset,p=r.layout,u=r.width,l=r.dataKey,f=r.data,h=r.dataPointFormatter,d=r.xAxis,m=r.yAxis,v=_objectWithoutProperties$4(r,["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"]),_=getPresentationAttributes(v);return f.map(function(T,g){var $=h(T,l),E=$.x,b=$.y,w=$.value,S=$.errorVal;if(!S)return null;var A,O,C,M,I,N,D,B,L,W,z,U;if(Array.isArray(S)){var G=_slicedToArray$1(S,2);z=G[0],U=G[1]}else z=U=S;return p==="vertical"?(D=d.scale,A=w,O=b+o,C=D(A-z),M=O+u,I=D(A+U),N=O-u,B={x1:I,y1:M,x2:I,y2:N},L={x1:C,y1:O,x2:I,y2:O},W={x1:C,y1:M,x2:C,y2:N}):p==="horizontal"&&(D=m.scale,A=E+o,O=w,C=A-u,I=A+u,M=D(O-z),N=D(O+U),B={x1:C,y1:N,x2:I,y2:N},L={x1:A,y1:M,x2:A,y2:N},W={x1:C,y1:M,x2:I,y2:M}),React.createElement(Layer,_extends$e({className:"recharts-errorBar",key:"bar-".concat(g)},_),React.createElement("line",B),React.createElement("line",L),React.createElement("line",W))})}},{key:"render",value:function(){return React.createElement(Layer,{className:"recharts-errorBars"},this.renderErrorBars())}}]),e}(reactExports.Component);ErrorBar.propTypes={dataKey:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number,propTypesExports.func]).isRequired,data:propTypesExports.array,xAxis:propTypesExports.object,yAxis:propTypesExports.object,layout:propTypesExports.string,dataPointFormatter:propTypesExports.func,stroke:propTypesExports.string,strokeWidth:propTypesExports.number,width:propTypesExports.number,offset:propTypesExports.number};ErrorBar.defaultProps={stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"};const ErrorBar$1=ErrorBar;function _toConsumableArray$3(t){return _arrayWithoutHoles$3(t)||_iterableToArray$3(t)||_nonIterableSpread$3()}function _nonIterableSpread$3(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray$3(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function _arrayWithoutHoles$3(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function ownKeys$f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$f(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$f(n,!0).forEach(function(r){_defineProperty$g(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$f(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var getValueByDataKey=function t(e,n,r){return isNil_1(e)||isNil_1(n)?r:isNumOrStr(n)?get_1(e,n,r):isFunction_1(n)?n(e):r},getDomainOfDataByKey=function t(e,n,r,o){var p=flatMap_1(e,function(f){return getValueByDataKey(f,n)});if(r==="number"){var u=p.filter(function(f){return isNumber(f)||parseFloat(f,10)});return u.length?[min_1(u),max_1(u)]:[1/0,-1/0]}var l=o?p.filter(function(f){return!isNil_1(f)}):p;return l.map(function(f){return isNumOrStr(f)?f:""})},calculateActiveTickIndex=function t(e,n,r,o){var p=-1,u=n.length;if(u>1){if(o&&o.axisType==="angleAxis"&&Math.abs(Math.abs(o.range[1]-o.range[0])-360)<=1e-6)for(var l=o.range,f=0;f<u;f++){var h=f>0?r[f-1].coordinate:r[u-1].coordinate,d=r[f].coordinate,m=f>=u-1?r[0].coordinate:r[f+1].coordinate,v=void 0;if(mathSign(d-h)!==mathSign(m-d)){var _=[];if(mathSign(m-d)===mathSign(l[1]-l[0])){v=m;var T=d+l[1]-l[0];_[0]=Math.min(T,(T+h)/2),_[1]=Math.max(T,(T+h)/2)}else{v=h;var g=m+l[1]-l[0];_[0]=Math.min(d,(g+d)/2),_[1]=Math.max(d,(g+d)/2)}var $=[Math.min(d,(v+d)/2),Math.max(d,(v+d)/2)];if(e>$[0]&&e<=$[1]||e>=_[0]&&e<=_[1]){p=r[f].index;break}}else{var E=Math.min(h,m),b=Math.max(h,m);if(e>(E+d)/2&&e<=(b+d)/2){p=r[f].index;break}}}else for(var w=0;w<u;w++)if(w===0&&e<=(n[w].coordinate+n[w+1].coordinate)/2||w>0&&w<u-1&&e>(n[w].coordinate+n[w-1].coordinate)/2&&e<=(n[w].coordinate+n[w+1].coordinate)/2||w===u-1&&e>(n[w].coordinate+n[w-1].coordinate)/2){p=n[w].index;break}}else p=0;return p},getMainColorOfGraphicItem=function t(e){var n=e.type.displayName,r=e.props,o=r.stroke,p=r.fill,u;switch(n){case"Line":u=o;break;case"Area":case"Radar":u=o&&o!=="none"?o:p;break;default:u=p;break}return u},getLegendProps=function t(e){var n=e.children,r=e.formatedGraphicalItems,o=e.legendWidth,p=e.legendContent,u=findChildByType(n,Legend$1);if(!u)return null;var l;return u.props&&u.props.payload?l=u.props&&u.props.payload:p==="children"?l=(r||[]).reduce(function(f,h){var d=h.item,m=h.props,v=m.sectors||m.data||[];return f.concat(v.map(function(_){return{type:u.props.iconType||d.props.legendType,value:_.name,color:_.fill,payload:_}}))},[]):l=(r||[]).map(function(f){var h=f.item,d=h.props,m=d.dataKey,v=d.name,_=d.legendType,T=d.hide;return{inactive:T,dataKey:m,type:u.props.iconType||_||"square",color:getMainColorOfGraphicItem(h),value:v||m,payload:h.props}}),_objectSpread$f({},u.props,{},Legend$1.getWithHeight(u,o),{payload:l,item:u})},getBarSizeList=function t(e){var n=e.barSize,r=e.stackGroups,o=r===void 0?{}:r;if(!o)return{};for(var p={},u=Object.keys(o),l=0,f=u.length;l<f;l++)for(var h=o[u[l]].stackGroups,d=Object.keys(h),m=0,v=d.length;m<v;m++){var _=h[d[m]],T=_.items,g=_.cateAxisId,$=T.filter(function(w){return getDisplayName(w.type).indexOf("Bar")>=0});if($&&$.length){var E=$[0].props.barSize,b=$[0].props[g];p[b]||(p[b]=[]),p[b].push({item:$[0],stackList:$.slice(1),barSize:isNil_1(E)?n:E})}}return p},getBarPosition=function t(e){var n=e.barGap,r=e.barCategoryGap,o=e.bandSize,p=e.sizeList,u=p===void 0?[]:p,l=e.maxBarSize,f=u.length;if(f<1)return null;var h=getPercentValue(n,o,0,!0),d;if(u[0].barSize===+u[0].barSize){var m=!1,v=o/f,_=u.reduce(function(w,S){return w+S.barSize||0},0);_+=(f-1)*h,_>=o&&(_-=(f-1)*h,h=0),_>=o&&v>0&&(m=!0,v*=.9,_=f*v);var T=(o-_)/2>>0,g={offset:T-h,size:0};d=u.reduce(function(w,S){var A=[].concat(_toConsumableArray$3(w),[{item:S.item,position:{offset:g.offset+g.size+h,size:m?v:S.barSize}}]);return g=A[A.length-1].position,S.stackList&&S.stackList.length&&S.stackList.forEach(function(O){A.push({item:O,position:g})}),A},[])}else{var $=getPercentValue(r,o,0,!0);o-2*$-(f-1)*h<=0&&(h=0);var E=(o-2*$-(f-1)*h)/f;E>1&&(E>>=0);var b=l===+l?Math.min(E,l):E;d=u.reduce(function(w,S,A){var O=[].concat(_toConsumableArray$3(w),[{item:S.item,position:{offset:$+(E+h)*A+(E-b)/2,size:b}}]);return S.stackList&&S.stackList.length&&S.stackList.forEach(function(C){O.push({item:C,position:O[O.length-1].position})}),O},[])}return d},appendOffsetOfLegend=function t(e,n,r,o){var p=r.children,u=r.width,l=r.height,f=r.margin,h=u-(f.left||0)-(f.right||0),d=l-(f.top||0)-(f.bottom||0),m=getLegendProps({children:p,items:n,legendWidth:h,legendHeight:d}),v=e;if(m){var _=o||{},T=m.align,g=m.verticalAlign,$=m.layout;($==="vertical"||$==="horizontal"&&g==="center")&&isNumber(e[T])&&(v=_objectSpread$f({},e,_defineProperty$g({},T,v[T]+(_.width||0)))),($==="horizontal"||$==="vertical"&&T==="center")&&isNumber(e[g])&&(v=_objectSpread$f({},e,_defineProperty$g({},g,v[g]+(_.height||0))))}return v},getDomainOfErrorBars=function t(e,n,r,o){var p=n.props.children,u=findAllByType(p,ErrorBar$1).filter(function(f){var h=f.props.direction;return isNil_1(h)||isNil_1(o)?!0:o.indexOf(h)>=0});if(u&&u.length){var l=u.map(function(f){return f.props.dataKey});return e.reduce(function(f,h){var d=getValueByDataKey(h,r,0),m=isArray_1(d)?[min_1(d),max_1(d)]:[d,d],v=l.reduce(function(_,T){var g=getValueByDataKey(h,T,0),$=m[0]-Math.abs(isArray_1(g)?g[0]:g),E=m[1]+Math.abs(isArray_1(g)?g[1]:g);return[Math.min($,_[0]),Math.max(E,_[1])]},[1/0,-1/0]);return[Math.min(v[0],f[0]),Math.max(v[1],f[1])]},[1/0,-1/0])}return null},parseErrorBarsOfAxis=function t(e,n,r,o){var p=n.map(function(u){return getDomainOfErrorBars(e,u,r,o)}).filter(function(u){return!isNil_1(u)});return p&&p.length?p.reduce(function(u,l){return[Math.min(u[0],l[0]),Math.max(u[1],l[1])]},[1/0,-1/0]):null},getDomainOfItemsWithSameAxis=function t(e,n,r,o){var p=n.map(function(l){var f=l.props.dataKey;return r==="number"&&f&&getDomainOfErrorBars(e,l,f)||getDomainOfDataByKey(e,f,r,o)});if(r==="number")return p.reduce(function(l,f){return[Math.min(l[0],f[0]),Math.max(l[1],f[1])]},[1/0,-1/0]);var u={};return p.reduce(function(l,f){for(var h=0,d=f.length;h<d;h++)u[f[h]]||(u[f[h]]=!0,l.push(f[h]));return l},[])},isCategorialAxis=function t(e,n){return e==="horizontal"&&n==="xAxis"||e==="vertical"&&n==="yAxis"||e==="centric"&&n==="angleAxis"||e==="radial"&&n==="radiusAxis"},getCoordinatesOfGrid=function t(e,n,r){var o,p,u=e.map(function(l){return l.coordinate===n&&(o=!0),l.coordinate===r&&(p=!0),l.coordinate});return o||u.push(n),p||u.push(r),u},getTicksOfAxis=function t(e,n,r){if(!e)return null;var o=e.scale,p=e.duplicateDomain,u=e.type,l=e.range,f=(n||r)&&u==="category"&&o.bandwidth?o.bandwidth()/2:0;return f=e.axisType==="angleAxis"?mathSign(l[0]-l[1])*2*f:f,n&&(e.ticks||e.niceTicks)?(e.ticks||e.niceTicks).map(function(h){var d=p?p.indexOf(h):h;return{coordinate:o(d)+f,value:h,offset:f}}):e.isCategorial&&e.categoricalDomain?e.categoricalDomain.map(function(h,d){return{coordinate:o(h),value:h,index:d,offset:f}}):o.ticks&&!r?o.ticks(e.tickCount).map(function(h){return{coordinate:o(h)+f,value:h,offset:f}}):o.domain().map(function(h,d){return{coordinate:o(h)+f,value:p?p[h]:h,index:d,offset:f}})},combineEventHandlers=function t(e,n,r){var o;return isFunction_1(r)?o=r:isFunction_1(n)&&(o=n),isFunction_1(e)||o?function(p,u,l,f){isFunction_1(e)&&e(p,u,l,f),isFunction_1(o)&&o(p,u,l,f)}:null},parseScale=function t(e,n){var r=e.scale,o=e.type,p=e.layout,u=e.axisType;if(r==="auto")return p==="radial"&&u==="radiusAxis"?{scale:band(),realScaleType:"band"}:p==="radial"&&u==="angleAxis"?{scale:linear(),realScaleType:"linear"}:o==="category"&&n&&(n.indexOf("LineChart")>=0||n.indexOf("AreaChart")>=0)?{scale:point(),realScaleType:"point"}:o==="category"?{scale:band(),realScaleType:"band"}:{scale:linear(),realScaleType:"linear"};if(isString_1(r)){var l="scale".concat(r.slice(0,1).toUpperCase()).concat(r.slice(1));return{scale:(d3Scales[l]||point)(),realScaleType:d3Scales[l]?l:"point"}}return isFunction_1(r)?{scale:r}:{scale:point(),realScaleType:"point"}},EPS=1e-4,checkDomainOfScale=function t(e){var n=e.domain();if(!(!n||n.length<=2)){var r=n.length,o=e.range(),p=Math.min(o[0],o[1])-EPS,u=Math.max(o[0],o[1])+EPS,l=e(n[0]),f=e(n[r-1]);(l<p||l>u||f<p||f>u)&&e.domain([n[0],n[r-1]])}},findPositionOfBar=function t(e,n){if(!e)return null;for(var r=0,o=e.length;r<o;r++)if(e[r].item===n)return e[r].position;return null},truncateByDomain=function t(e,n){if(!n||n.length!==2||!isNumber(n[0])||!isNumber(n[1]))return e;var r=Math.min(n[0],n[1]),o=Math.max(n[0],n[1]),p=[e[0],e[1]];return(!isNumber(e[0])||e[0]<r)&&(p[0]=r),(!isNumber(e[1])||e[1]>o)&&(p[1]=o),p[0]>o&&(p[0]=o),p[1]<r&&(p[1]=r),p},offsetSign=function t(e){var n=e.length;if(!(n<=0))for(var r=0,o=e[0].length;r<o;++r)for(var p=0,u=0,l=0;l<n;++l){var f=_isNaN(e[l][r][1])?e[l][r][0]:e[l][r][1];f>=0?(e[l][r][0]=p,e[l][r][1]=p+f,p=e[l][r][1]):(e[l][r][0]=u,e[l][r][1]=u+f,u=e[l][r][1])}},STACK_OFFSET_MAP={sign:offsetSign,expand:stackOffsetExpand,none:stackOffsetNone,silhouette:stackOffsetSilhouette,wiggle:stackOffsetWiggle},getStackedData=function t(e,n,r){var o=n.map(function(u){return u.props.dataKey}),p=shapeStack().keys(o).value(function(u,l){return+getValueByDataKey(u,l,0)}).order(stackOrderNone).offset(STACK_OFFSET_MAP[r]);return p(e)},getStackGroupsByAxisId=function t(e,n,r,o,p,u){if(!e)return null;var l=u?n.reverse():n,f=l.reduce(function(h,d){var m=d.props,v=m.stackId,_=m.hide;if(_)return h;var T=d.props[r],g=h[T]||{hasStack:!1,stackGroups:{}};if(isNumOrStr(v)){var $=g.stackGroups[v]||{numericAxisId:r,cateAxisId:o,items:[]};$.items.push(d),g.hasStack=!0,g.stackGroups[v]=$}else g.stackGroups[uniqueId("_stackId_")]={numericAxisId:r,cateAxisId:o,items:[d]};return _objectSpread$f({},h,_defineProperty$g({},T,g))},{});return Object.keys(f).reduce(function(h,d){var m=f[d];return m.hasStack&&(m.stackGroups=Object.keys(m.stackGroups).reduce(function(v,_){var T=m.stackGroups[_];return _objectSpread$f({},v,_defineProperty$g({},_,{numericAxisId:r,cateAxisId:o,items:T.items,stackedData:getStackedData(e,T.items,p)}))},{})),_objectSpread$f({},h,_defineProperty$g({},d,m))},{})},calculateDomainOfTicks=function t(e,n){return n==="number"?[min_1(e),max_1(e)]:e},getTicksOfScale=function t(e,n){var r=n.realScaleType,o=n.type,p=n.tickCount,u=n.originalDomain,l=n.allowDecimals,f=r||n.scale;if(f!=="auto"&&f!=="linear")return null;if(p&&o==="number"&&u&&(u[0]==="auto"||u[1]==="auto")){var h=e.domain(),d=getNiceTickValues(h,p,l);return e.domain(calculateDomainOfTicks(d,o)),{niceTicks:d}}if(p&&o==="number"){var m=e.domain(),v=getTickValuesFixedDomain(m,p,l);return{niceTicks:v}}return null},getCateCoordinateOfBar=function t(e){var n=e.axis,r=e.ticks,o=e.offset,p=e.bandSize,u=e.entry,l=e.index;if(n.type==="category")return r[l]?r[l].coordinate+o:null;var f=getValueByDataKey(u,n.dataKey,n.domain[l]);return isNil_1(f)?null:n.scale(f)-p/2+o},getBaseValueOfBar=function t(e){var n=e.numericAxis,r=n.scale.domain();if(n.type==="number"){var o=Math.min(r[0],r[1]),p=Math.max(r[0],r[1]);return o<=0&&p>=0?0:p<0?p:o}return r[0]},getStackedDataOfItem=function t(e,n){var r=e.props.stackId;if(isNumOrStr(r)){var o=n[r];if(o&&o.items.length){for(var p=-1,u=0,l=o.items.length;u<l;u++)if(o.items[u]===e){p=u;break}return p>=0?o.stackedData[p]:null}}return null},getDomainOfSingle=function t(e){return e.reduce(function(n,r){return[min_1(r.concat([n[0]]).filter(isNumber)),max_1(r.concat([n[1]]).filter(isNumber))]},[1/0,-1/0])},getDomainOfStackGroups=function t(e,n,r){return Object.keys(e).reduce(function(o,p){var u=e[p],l=u.stackedData,f=l.reduce(function(h,d){var m=getDomainOfSingle(d.slice(n,r+1));return[Math.min(h[0],m[0]),Math.max(h[1],m[1])]},[1/0,-1/0]);return[Math.min(f[0],o[0]),Math.max(f[1],o[1])]},[1/0,-1/0]).map(function(o){return o===1/0||o===-1/0?0:o})},MIN_VALUE_REG=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,MAX_VALUE_REG=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,parseSpecifiedDomain=function t(e,n,r){if(!isArray_1(e))return n;var o=[];if(isNumber(e[0]))o[0]=r?e[0]:Math.min(e[0],n[0]);else if(MIN_VALUE_REG.test(e[0])){var p=+MIN_VALUE_REG.exec(e[0])[1];o[0]=n[0]-p}else isFunction_1(e[0])?o[0]=e[0](n[0]):o[0]=n[0];if(isNumber(e[1]))o[1]=r?e[1]:Math.max(e[1],n[1]);else if(MAX_VALUE_REG.test(e[1])){var u=+MAX_VALUE_REG.exec(e[1])[1];o[1]=n[1]+u}else isFunction_1(e[1])?o[1]=e[1](n[1]):o[1]=n[1];return o},getBandSizeOfAxis=function t(e,n){if(e&&e.scale&&e.scale.bandwidth)return e.scale.bandwidth();if(e&&n&&n.length>=2){for(var r=sortBy_1(n,function(h){return h.coordinate}),o=1/0,p=1,u=r.length;p<u;p++){var l=r[p],f=r[p-1];o=Math.min((l.coordinate||0)-(f.coordinate||0),o)}return o===1/0?0:o}return 0},parseDomainOfCategoryAxis=function t(e,n,r){return!e||!e.length||isEqual_1(e,get_1(r,"type.defaultProps.domain"))?n:e};function ownKeys$e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$e(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$e(n,!0).forEach(function(r){_defineProperty$f(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$e(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var RADIAN=Math.PI/180,radianToDegree=function t(e){return e*180/Math.PI},polarToCartesian=function t(e,n,r,o){return{x:e+Math.cos(-RADIAN*o)*r,y:n+Math.sin(-RADIAN*o)*r}},distanceBetweenPoints=function t(e,n){var r=e.x,o=e.y,p=n.x,u=n.y;return Math.sqrt(Math.pow(r-p,2)+Math.pow(o-u,2))},getAngleOfPoint=function t(e,n){var r=e.x,o=e.y,p=n.cx,u=n.cy,l=distanceBetweenPoints({x:r,y:o},{x:p,y:u});if(l<=0)return{radius:l};var f=(r-p)/l,h=Math.acos(f);return o>u&&(h=2*Math.PI-h),{radius:l,angle:radianToDegree(h),angleInRadian:h}},formatAngleOfSector=function t(e){var n=e.startAngle,r=e.endAngle,o=Math.floor(n/360),p=Math.floor(r/360),u=Math.min(o,p);return{startAngle:n-u*360,endAngle:r-u*360}},reverseFormatAngleOfSetor=function t(e,n){var r=n.startAngle,o=n.endAngle,p=Math.floor(r/360),u=Math.floor(o/360),l=Math.min(p,u);return e+l*360},inRangeOfSector=function t(e,n){var r=e.x,o=e.y,p=getAngleOfPoint({x:r,y:o},n),u=p.radius,l=p.angle,f=n.innerRadius,h=n.outerRadius;if(u<f||u>h)return!1;if(u===0)return!0;var d=formatAngleOfSector(n),m=d.startAngle,v=d.endAngle,_=l,T;if(m<=v){for(;_>v;)_-=360;for(;_<m;)_+=360;T=_>=m&&_<=v}else{for(;_>m;)_-=360;for(;_<v;)_+=360;T=_>=v&&_<=m}return T?_objectSpread$e({},n,{radius:u,angle:reverseFormatAngleOfSetor(_,n)}):null};function _toConsumableArray$2(t){return _arrayWithoutHoles$2(t)||_iterableToArray$2(t)||_nonIterableSpread$2()}function _nonIterableSpread$2(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray$2(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function _arrayWithoutHoles$2(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _extends$d(){return _extends$d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$d.apply(this,arguments)}function ownKeys$d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$d(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$d(n,!0).forEach(function(r){_defineProperty$e(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$d(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var cartesianViewBoxShape=propTypesExports.shape({x:propTypesExports.number,y:propTypesExports.number,width:propTypesExports.number,height:propTypesExports.number}),polarViewBoxShape=propTypesExports.shape({cx:propTypesExports.number,cy:propTypesExports.number,innerRadius:propTypesExports.number,outerRadius:propTypesExports.number,startAngle:propTypesExports.number,endAngle:propTypesExports.number}),propTypes$1=_objectSpread$d({},PRESENTATION_ATTRIBUTES,{viewBox:propTypesExports.oneOfType([cartesianViewBoxShape,polarViewBoxShape]),formatter:propTypesExports.func,value:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),offset:propTypesExports.number,position:propTypesExports.oneOf(["top","left","right","bottom","inside","outside","insideLeft","insideRight","insideTop","insideBottom","insideTopLeft","insideBottomLeft","insideTopRight","insideBottomRight","insideStart","insideEnd","end","center","centerTop","centerBottom"]),children:propTypesExports.oneOfType([propTypesExports.arrayOf(propTypesExports.node),propTypesExports.node]),className:propTypesExports.string,content:propTypesExports.oneOfType([propTypesExports.element,propTypesExports.func])}),defaultProps$1={offset:5},getLabel=function t(e){var n=e.value,r=e.formatter,o=isNil_1(e.children)?n:e.children;return isFunction_1(r)?r(o):o},getDeltaAngle$1=function t(e,n){var r=mathSign(n-e),o=Math.min(Math.abs(n-e),360);return r*o},renderRadialLabel=function t(e,n,r){var o=e.position,p=e.viewBox,u=e.offset,l=e.className,f=p.cx,h=p.cy,d=p.innerRadius,m=p.outerRadius,v=p.startAngle,_=p.endAngle,T=p.clockWise,g=(d+m)/2,$=getDeltaAngle$1(v,_),E=$>=0?1:-1,b,w;o==="insideStart"?(b=v+E*u,w=T):o==="insideEnd"?(b=_-E*u,w=!T):o==="end"&&(b=_+E*u,w=T),w=$<=0?w:!w;var S=polarToCartesian(f,h,g,b),A=polarToCartesian(f,h,g,b+(w?1:-1)*359),O="M".concat(S.x,",").concat(S.y,`
    A`).concat(g,",").concat(g,",0,1,").concat(w?0:1,`,
    `).concat(A.x,",").concat(A.y),C=isNil_1(e.id)?uniqueId("recharts-radial-line-"):e.id;return React.createElement("text",_extends$d({},r,{dominantBaseline:"central",className:classNames("recharts-radial-bar-label",l)}),React.createElement("defs",null,React.createElement("path",{id:C,d:O})),React.createElement("textPath",{xlinkHref:"#".concat(C)},n))},getAttrsOfPolarLabel=function t(e){var n=e.viewBox,r=e.offset,o=e.position,p=n.cx,u=n.cy,l=n.innerRadius,f=n.outerRadius,h=n.startAngle,d=n.endAngle,m=(h+d)/2;if(o==="outside"){var v=polarToCartesian(p,u,f+r,m),_=v.x,T=v.y;return{x:_,y:T,textAnchor:_>=p?"start":"end",verticalAnchor:"middle"}}if(o==="center")return{x:p,y:u,textAnchor:"middle",verticalAnchor:"middle"};if(o==="centerTop")return{x:p,y:u,textAnchor:"middle",verticalAnchor:"start"};if(o==="centerBottom")return{x:p,y:u,textAnchor:"middle",verticalAnchor:"end"};var g=(l+f)/2,$=polarToCartesian(p,u,g,m),E=$.x,b=$.y;return{x:E,y:b,textAnchor:"middle",verticalAnchor:"middle"}},getAttrsOfCartesianLabel=function t(e){var n=e.viewBox,r=e.offset,o=e.position,p=n.x,u=n.y,l=n.width,f=n.height,h=f>=0?1:-1;return o==="top"?{x:p+l/2,y:u-h*r,textAnchor:"middle",verticalAnchor:h>0?"end":"start"}:o==="bottom"?{x:p+l/2,y:u+f+h*r,textAnchor:"middle",verticalAnchor:"start"}:o==="left"?{x:p-r,y:u+f/2,textAnchor:"end",verticalAnchor:"middle"}:o==="right"?{x:p+l+r,y:u+f/2,textAnchor:"start",verticalAnchor:"middle"}:o==="insideLeft"?{x:p+r,y:u+f/2,textAnchor:"start",verticalAnchor:"middle"}:o==="insideRight"?{x:p+l-r,y:u+f/2,textAnchor:"end",verticalAnchor:"middle"}:o==="insideTop"?{x:p+l/2,y:u+h*r,textAnchor:"middle",verticalAnchor:"start"}:o==="insideBottom"?{x:p+l/2,y:u+f-h*r,textAnchor:"middle",verticalAnchor:"end"}:o==="insideTopLeft"?{x:p+r,y:u+h*r,textAnchor:"start",verticalAnchor:"start"}:o==="insideTopRight"?{x:p+l-r,y:u+h*r,textAnchor:"end",verticalAnchor:"start"}:o==="insideBottomLeft"?{x:p+r,y:u+f-h*r,textAnchor:"start",verticalAnchor:"end"}:o==="insideBottomRight"?{x:p+l-r,y:u+f-h*r,textAnchor:"end",verticalAnchor:"end"}:isObject_1(o)&&(isNumber(o.x)||isPercent(o.x))&&(isNumber(o.y)||isPercent(o.y))?{x:p+getPercentValue(o.x,l),y:u+getPercentValue(o.y,f),textAnchor:"end",verticalAnchor:"end"}:{x:p+l/2,y:u+f/2,textAnchor:"middle",verticalAnchor:"middle"}},isPolar=function t(e){return isNumber(e.cx)};function Label(t){var e=t.viewBox,n=t.position,r=t.value,o=t.children,p=t.content,u=t.className,l=u===void 0?"":u;if(!e||isNil_1(r)&&isNil_1(o)&&!reactExports.isValidElement(p)&&!isFunction_1(p))return null;if(reactExports.isValidElement(p))return reactExports.cloneElement(p,t);var f;if(isFunction_1(p)){if(f=p(t),reactExports.isValidElement(f))return f}else f=getLabel(t);var h=isPolar(e),d=getPresentationAttributes(t),m=filterEventAttributes(t);if(h&&(n==="insideStart"||n==="insideEnd"||n==="end"))return renderRadialLabel(t,f,d);var v=h?getAttrsOfPolarLabel(t):getAttrsOfCartesianLabel(t);return React.createElement(Text$1,_extends$d({className:classNames("recharts-label",l)},d,v,m),f)}Label.displayName="Label";Label.defaultProps=defaultProps$1;Label.propTypes=propTypes$1;var parseViewBox=function t(e){var n=e.cx,r=e.cy,o=e.angle,p=e.startAngle,u=e.endAngle,l=e.r,f=e.radius,h=e.innerRadius,d=e.outerRadius,m=e.x,v=e.y,_=e.top,T=e.left,g=e.width,$=e.height,E=e.clockWise;if(isNumber(g)&&isNumber($)){if(isNumber(m)&&isNumber(v))return{x:m,y:v,width:g,height:$};if(isNumber(_)&&isNumber(T))return{x:_,y:T,width:g,height:$}}return isNumber(m)&&isNumber(v)?{x:m,y:v,width:0,height:0}:isNumber(n)&&isNumber(r)?{cx:n,cy:r,startAngle:p||o||0,endAngle:u||o||0,innerRadius:h||0,outerRadius:d||f||l||0,clockWise:E}:e.viewBox?e.viewBox:{}},parseLabel=function t(e,n){return e?e===!0?React.createElement(Label,{key:"label-implicit",viewBox:n}):isNumOrStr(e)?React.createElement(Label,{key:"label-implicit",viewBox:n,value:e}):reactExports.isValidElement(e)?e.type===Label?reactExports.cloneElement(e,{key:"label-implicit",viewBox:n}):React.createElement(Label,{key:"label-implicit",content:e,viewBox:n}):isFunction_1(e)?React.createElement(Label,{key:"label-implicit",content:e,viewBox:n}):isObject_1(e)?React.createElement(Label,_extends$d({viewBox:n},e,{key:"label-implicit"})):null:null},renderCallByParent$1=function t(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&r&&!e.label)return null;var o=e.children,p=parseViewBox(e),u=findAllByType(o,Label).map(function(f,h){return reactExports.cloneElement(f,{viewBox:n||p,key:"label-".concat(h)})});if(!r)return u;var l=parseLabel(e.label,n||p);return[l].concat(_toConsumableArray$2(u))};Label.parseViewBox=parseViewBox;Label.renderCallByParent=renderCallByParent$1;function last(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var last_1=last;function _toConsumableArray$1(t){return _arrayWithoutHoles$1(t)||_iterableToArray$1(t)||_nonIterableSpread$1()}function _nonIterableSpread$1(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray$1(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function _arrayWithoutHoles$1(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _extends$c(){return _extends$c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$c.apply(this,arguments)}function ownKeys$c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$c(n,!0).forEach(function(r){_defineProperty$d(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$c(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _objectWithoutProperties$3(t,e){if(t==null)return{};var n=_objectWithoutPropertiesLoose$3(t,e),r,o;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(o=0;o<p.length;o++)r=p[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _objectWithoutPropertiesLoose$3(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,p;for(p=0;p<r.length;p++)o=r[p],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}var propTypes={id:propTypesExports.string,data:propTypesExports.arrayOf(propTypesExports.object),valueAccessor:propTypesExports.func,clockWise:propTypesExports.bool,dataKey:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number,propTypesExports.func])},defaultProps={valueAccessor:function t(e){return isArray_1(e.value)?last_1(e.value):e.value}};function LabelList(t){var e=t.data,n=t.valueAccessor,r=t.dataKey,o=t.clockWise,p=t.id,u=_objectWithoutProperties$3(t,["data","valueAccessor","dataKey","clockWise","id"]);return!e||!e.length?null:React.createElement(Layer,{className:"recharts-label-list"},e.map(function(l,f){var h=isNil_1(r)?n(l,f):getValueByDataKey(l&&l.payload,r),d=isNil_1(p)?{}:{id:"".concat(p,"-").concat(f)};return React.createElement(Label,_extends$c({},getPresentationAttributes(l),u,d,{index:f,value:h,viewBox:Label.parseViewBox(isNil_1(o)?l:_objectSpread$c({},l,{clockWise:o})),key:"label-".concat(f)}))}))}LabelList.propTypes=propTypes;LabelList.displayName="LabelList";var parseLabelList=function t(e,n){return e?e===!0?React.createElement(LabelList,{key:"labelList-implicit",data:n}):React.isValidElement(e)||isFunction_1(e)?React.createElement(LabelList,{key:"labelList-implicit",data:n,content:e}):isObject_1(e)?React.createElement(LabelList,_extends$c({data:n},e,{key:"labelList-implicit"})):null:null},renderCallByParent=function t(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&r&&!e.label)return null;var o=e.children,p=findAllByType(o,LabelList).map(function(l,f){return reactExports.cloneElement(l,{data:n,key:"labelList-".concat(f)})});if(!r)return p;var u=parseLabelList(e.label,n);return[u].concat(_toConsumableArray$1(p))};LabelList.renderCallByParent=renderCallByParent;LabelList.defaultProps=defaultProps;function ownKeys$b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$b(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$b(n,!0).forEach(function(r){_defineProperty$c(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$b(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _typeof$d(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$d=function(n){return typeof n}:_typeof$d=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$d(t)}function _extends$b(){return _extends$b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$b.apply(this,arguments)}function _classCallCheck$e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$e(t,e,n){return e&&_defineProperties$e(t.prototype,e),n&&_defineProperties$e(t,n),t}function _possibleConstructorReturn$d(t,e){return e&&(_typeof$d(e)==="object"||typeof e=="function")?e:_assertThisInitialized$d(t)}function _assertThisInitialized$d(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$d(t){return _getPrototypeOf$d=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$d(t)}function _inherits$d(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$d(t,e)}function _setPrototypeOf$d(t,e){return _setPrototypeOf$d=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$d(t,e)}var getDeltaAngle=function t(e,n){var r=mathSign(n-e),o=Math.min(Math.abs(n-e),359.999);return r*o},getTangentCircle=function t(e){var n=e.cx,r=e.cy,o=e.radius,p=e.angle,u=e.sign,l=e.isExternal,f=e.cornerRadius,h=e.cornerIsExternal,d=f*(l?1:-1)+o,m=Math.asin(f/d)/RADIAN,v=h?p:p+u*m,_=polarToCartesian(n,r,d,v),T=polarToCartesian(n,r,o,v),g=h?p-u*m:p,$=polarToCartesian(n,r,d*Math.cos(m*RADIAN),g);return{center:_,circleTangency:T,lineTangency:$,theta:m}},getSectorPath=function t(e){var n=e.cx,r=e.cy,o=e.innerRadius,p=e.outerRadius,u=e.startAngle,l=e.endAngle,f=getDeltaAngle(u,l),h=u+f,d=polarToCartesian(n,r,p,u),m=polarToCartesian(n,r,p,h),v="M ".concat(d.x,",").concat(d.y,`
    A `).concat(p,",").concat(p,`,0,
    `).concat(+(Math.abs(f)>180),",").concat(+(u>h),`,
    `).concat(m.x,",").concat(m.y,`
  `);if(o>0){var _=polarToCartesian(n,r,o,u),T=polarToCartesian(n,r,o,h);v+="L ".concat(T.x,",").concat(T.y,`
            A `).concat(o,",").concat(o,`,0,
            `).concat(+(Math.abs(f)>180),",").concat(+(u<=h),`,
            `).concat(_.x,",").concat(_.y," Z")}else v+="L ".concat(n,",").concat(r," Z");return v},getSectorWithCorner=function t(e){var n=e.cx,r=e.cy,o=e.innerRadius,p=e.outerRadius,u=e.cornerRadius,l=e.forceCornerRadius,f=e.cornerIsExternal,h=e.startAngle,d=e.endAngle,m=mathSign(d-h),v=getTangentCircle({cx:n,cy:r,radius:p,angle:h,sign:m,cornerRadius:u,cornerIsExternal:f}),_=v.circleTangency,T=v.lineTangency,g=v.theta,$=getTangentCircle({cx:n,cy:r,radius:p,angle:d,sign:-m,cornerRadius:u,cornerIsExternal:f}),E=$.circleTangency,b=$.lineTangency,w=$.theta,S=Math.abs(h-d)-g-w;if(S<0)return l?"M ".concat(T.x,",").concat(T.y,`
        a`).concat(u,",").concat(u,",0,0,1,").concat(u*2,`,0
        a`).concat(u,",").concat(u,",0,0,1,").concat(-u*2,`,0
      `):getSectorPath({cx:n,cy:r,innerRadius:o,outerRadius:p,startAngle:h,endAngle:d});var A="M ".concat(T.x,",").concat(T.y,`
    A`).concat(u,",").concat(u,",0,0,").concat(+(m<0),",").concat(_.x,",").concat(_.y,`
    A`).concat(p,",").concat(p,",0,").concat(+(S>180),",").concat(+(m<0),",").concat(E.x,",").concat(E.y,`
    A`).concat(u,",").concat(u,",0,0,").concat(+(m<0),",").concat(b.x,",").concat(b.y,`
  `);if(o>0){var O=getTangentCircle({cx:n,cy:r,radius:o,angle:h,sign:m,isExternal:!0,cornerRadius:u,cornerIsExternal:f}),C=O.circleTangency,M=O.lineTangency,I=O.theta,N=getTangentCircle({cx:n,cy:r,radius:o,angle:d,sign:-m,isExternal:!0,cornerRadius:u,cornerIsExternal:f}),D=N.circleTangency,B=N.lineTangency,L=N.theta,W=Math.abs(h-d)-I-L;if(W<0)return"".concat(A,"L").concat(n,",").concat(r,"Z");A+="L".concat(B.x,",").concat(B.y,`
      A`).concat(u,",").concat(u,",0,0,").concat(+(m<0),",").concat(D.x,",").concat(D.y,`
      A`).concat(o,",").concat(o,",0,").concat(+(W>180),",").concat(+(m>0),",").concat(C.x,",").concat(C.y,`
      A`).concat(u,",").concat(u,",0,0,").concat(+(m<0),",").concat(M.x,",").concat(M.y,"Z")}else A+="L".concat(n,",").concat(r,"Z");return A},Sector=function(t){_inherits$d(e,t);function e(){return _classCallCheck$e(this,e),_possibleConstructorReturn$d(this,_getPrototypeOf$d(e).apply(this,arguments))}return _createClass$e(e,[{key:"render",value:function(){var r=this.props,o=r.cx,p=r.cy,u=r.innerRadius,l=r.outerRadius,f=r.cornerRadius,h=r.forceCornerRadius,d=r.cornerIsExternal,m=r.startAngle,v=r.endAngle,_=r.className;if(l<u||m===v)return null;var T=classNames("recharts-sector",_),g=l-u,$=getPercentValue(f,g,0,!0),E;return $>0&&Math.abs(m-v)<360?E=getSectorWithCorner({cx:o,cy:p,innerRadius:u,outerRadius:l,cornerRadius:Math.min($,g/2),forceCornerRadius:h,cornerIsExternal:d,startAngle:m,endAngle:v}):E=getSectorPath({cx:o,cy:p,innerRadius:u,outerRadius:l,startAngle:m,endAngle:v}),React.createElement("path",_extends$b({},getPresentationAttributes(this.props),filterEventAttributes(this.props),{className:T,d:E}))}}]),e}(reactExports.PureComponent);Sector.displayName="Sector";Sector.propTypes=_objectSpread$b({},PRESENTATION_ATTRIBUTES,{className:propTypesExports.string,cx:propTypesExports.number,cy:propTypesExports.number,innerRadius:propTypesExports.number,outerRadius:propTypesExports.number,startAngle:propTypesExports.number,endAngle:propTypesExports.number,cornerRadius:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),forceCornerRadius:propTypesExports.bool,cornerIsExternal:propTypesExports.bool});Sector.defaultProps={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1};const Sector$1=Sector;function _typeof$c(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$c=function(n){return typeof n}:_typeof$c=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$c(t)}function _extends$a(){return _extends$a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$a.apply(this,arguments)}function ownKeys$a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$a(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$a(n,!0).forEach(function(r){_defineProperty$b(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$a(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck$d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$d(t,e,n){return e&&_defineProperties$d(t.prototype,e),n&&_defineProperties$d(t,n),t}function _possibleConstructorReturn$c(t,e){return e&&(_typeof$c(e)==="object"||typeof e=="function")?e:_assertThisInitialized$c(t)}function _assertThisInitialized$c(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$c(t){return _getPrototypeOf$c=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$c(t)}function _inherits$c(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$c(t,e)}function _setPrototypeOf$c(t,e){return _setPrototypeOf$c=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$c(t,e)}var CURVE_FACTORIES={curveBasisClosed,curveBasisOpen,curveBasis,curveLinearClosed,curveLinear,curveMonotoneX:monotoneX,curveMonotoneY:monotoneY,curveNatural,curveStep,curveStepAfter:stepAfter,curveStepBefore:stepBefore},defined=function t(e){return e.x===+e.x&&e.y===+e.y},getX=function t(e){return e.x},getY=function t(e){return e.y},getCurveFactory=function t(e,n){if(isFunction_1(e))return e;var r="curve".concat(e.slice(0,1).toUpperCase()).concat(e.slice(1));return r==="curveMonotone"&&n?CURVE_FACTORIES["".concat(r).concat(n==="vertical"?"Y":"X")]:CURVE_FACTORIES[r]||curveLinear},Curve=function(t){_inherits$c(e,t);function e(){return _classCallCheck$d(this,e),_possibleConstructorReturn$c(this,_getPrototypeOf$c(e).apply(this,arguments))}return _createClass$d(e,[{key:"getPath",value:function(){var r=this.props,o=r.type,p=r.points,u=r.baseLine,l=r.layout,f=r.connectNulls,h=getCurveFactory(o,l),d=f?p.filter(function(T){return defined(T)}):p,m;if(isArray_1(u)){var v=f?u.filter(function(T){return defined(T)}):u,_=d.map(function(T,g){return _objectSpread$a({},T,{base:v[g]})});return l==="vertical"?m=shapeArea().y(getY).x1(getX).x0(function(T){return T.base.x}):m=shapeArea().x(getX).y1(getY).y0(function(T){return T.base.y}),m.defined(defined).curve(h),m(_)}return l==="vertical"&&isNumber(u)?m=shapeArea().y(getY).x1(getX).x0(u):isNumber(u)?m=shapeArea().x(getX).y1(getY).y0(u):m=shapeLine().x(getX).y(getY),m.defined(defined).curve(h),m(d)}},{key:"render",value:function(){var r=this.props,o=r.className,p=r.points,u=r.path,l=r.pathRef;if((!p||!p.length)&&!u)return null;var f=p&&p.length?this.getPath():u;return React.createElement("path",_extends$a({},getPresentationAttributes(this.props),filterEventAttributes(this.props,null,!0),{className:classNames("recharts-curve",o),d:f,ref:l}))}}]),e}(reactExports.PureComponent);Curve.displayName="Curve";Curve.propTypes=_objectSpread$a({},PRESENTATION_ATTRIBUTES,{className:propTypesExports.string,type:propTypesExports.oneOfType([propTypesExports.oneOf(["basis","basisClosed","basisOpen","linear","linearClosed","natural","monotoneX","monotoneY","monotone","step","stepBefore","stepAfter"]),propTypesExports.func]),layout:propTypesExports.oneOf(["horizontal","vertical"]),baseLine:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.array]),points:propTypesExports.arrayOf(propTypesExports.object),connectNulls:propTypesExports.bool,path:propTypesExports.string,pathRef:propTypesExports.func});Curve.defaultProps={type:"linear",points:[],connectNulls:!1};const Curve$1=Curve;function ownKeys$9(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$9(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$9(n,!0).forEach(function(r){_defineProperty$a(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$9(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _typeof$b(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$b=function(n){return typeof n}:_typeof$b=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$b(t)}function _extends$9(){return _extends$9=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$9.apply(this,arguments)}function _classCallCheck$c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$c(t,e,n){return e&&_defineProperties$c(t.prototype,e),n&&_defineProperties$c(t,n),t}function _possibleConstructorReturn$b(t,e){return e&&(_typeof$b(e)==="object"||typeof e=="function")?e:_assertThisInitialized$b(t)}function _assertThisInitialized$b(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$b(t){return _getPrototypeOf$b=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$b(t)}function _inherits$b(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$b(t,e)}function _setPrototypeOf$b(t,e){return _setPrototypeOf$b=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$b(t,e)}var getRectangePath=function t(e,n,r,o,p){var u=Math.min(Math.abs(r)/2,Math.abs(o)/2),l=o>=0?1:-1,f=r>=0?1:-1,h=o>=0&&r>=0||o<0&&r<0?1:0,d;if(u>0&&p instanceof Array){for(var m=[],v=0,_=4;v<_;v++)m[v]=p[v]>u?u:p[v];d="M".concat(e,",").concat(n+l*m[0]),m[0]>0&&(d+="A ".concat(m[0],",").concat(m[0],",0,0,").concat(h,",").concat(e+f*m[0],",").concat(n)),d+="L ".concat(e+r-f*m[1],",").concat(n),m[1]>0&&(d+="A ".concat(m[1],",").concat(m[1],",0,0,").concat(h,`,
        `).concat(e+r,",").concat(n+l*m[1])),d+="L ".concat(e+r,",").concat(n+o-l*m[2]),m[2]>0&&(d+="A ".concat(m[2],",").concat(m[2],",0,0,").concat(h,`,
        `).concat(e+r-f*m[2],",").concat(n+o)),d+="L ".concat(e+f*m[3],",").concat(n+o),m[3]>0&&(d+="A ".concat(m[3],",").concat(m[3],",0,0,").concat(h,`,
        `).concat(e,",").concat(n+o-l*m[3])),d+="Z"}else if(u>0&&p===+p&&p>0){var T=Math.min(u,p);d="M ".concat(e,",").concat(n+l*T,`
            A `).concat(T,",").concat(T,",0,0,").concat(h,",").concat(e+f*T,",").concat(n,`
            L `).concat(e+r-f*T,",").concat(n,`
            A `).concat(T,",").concat(T,",0,0,").concat(h,",").concat(e+r,",").concat(n+l*T,`
            L `).concat(e+r,",").concat(n+o-l*T,`
            A `).concat(T,",").concat(T,",0,0,").concat(h,",").concat(e+r-f*T,",").concat(n+o,`
            L `).concat(e+f*T,",").concat(n+o,`
            A `).concat(T,",").concat(T,",0,0,").concat(h,",").concat(e,",").concat(n+o-l*T," Z")}else d="M ".concat(e,",").concat(n," h ").concat(r," v ").concat(o," h ").concat(-r," Z");return d},Rectangle=function(t){_inherits$b(e,t);function e(){var n,r;_classCallCheck$c(this,e);for(var o=arguments.length,p=new Array(o),u=0;u<o;u++)p[u]=arguments[u];return r=_possibleConstructorReturn$b(this,(n=_getPrototypeOf$b(e)).call.apply(n,[this].concat(p))),r.state={totalLength:-1},r}return _createClass$c(e,[{key:"componentDidMount",value:function(){if(this.node&&this.node.getTotalLength)try{var r=this.node.getTotalLength();r&&this.setState({totalLength:r})}catch{}}},{key:"render",value:function(){var r=this,o=this.props,p=o.x,u=o.y,l=o.width,f=o.height,h=o.radius,d=o.className,m=this.state.totalLength,v=this.props,_=v.animationEasing,T=v.animationDuration,g=v.animationBegin,$=v.isAnimationActive,E=v.isUpdateAnimationActive;if(p!==+p||u!==+u||l!==+l||f!==+f||l===0||f===0)return null;var b=classNames("recharts-rectangle",d);return E?React.createElement(Animate,{canBegin:m>0,from:{width:l,height:f,x:p,y:u},to:{width:l,height:f,x:p,y:u},duration:T,animationEasing:_,isActive:E},function(w){var S=w.width,A=w.height,O=w.x,C=w.y;return React.createElement(Animate,{canBegin:m>0,from:"0px ".concat(m===-1?1:m,"px"),to:"".concat(m,"px 0px"),attributeName:"strokeDasharray",begin:g,duration:T,isActive:$,easing:_},React.createElement("path",_extends$9({},getPresentationAttributes(r.props),filterEventAttributes(r.props),{className:b,d:getRectangePath(O,C,S,A,h),ref:function(I){r.node=I}})))}):React.createElement("path",_extends$9({},getPresentationAttributes(this.props),filterEventAttributes(this.props),{className:b,d:getRectangePath(p,u,l,f,h)}))}}]),e}(reactExports.PureComponent);Rectangle.displayName="Rectangle";Rectangle.propTypes=_objectSpread$9({},PRESENTATION_ATTRIBUTES,{},EVENT_ATTRIBUTES,{className:propTypesExports.string,x:propTypesExports.number,y:propTypesExports.number,width:propTypesExports.number,height:propTypesExports.number,radius:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.array]),isAnimationActive:propTypesExports.bool,isUpdateAnimationActive:propTypesExports.bool,animationBegin:propTypesExports.number,animationDuration:propTypesExports.number,animationEasing:propTypesExports.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"])});Rectangle.defaultProps={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"};const Rectangle$1=Rectangle;function _typeof$a(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$a=function(n){return typeof n}:_typeof$a=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$a(t)}function _extends$8(){return _extends$8=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$8.apply(this,arguments)}function _classCallCheck$b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$b(t,e,n){return e&&_defineProperties$b(t.prototype,e),n&&_defineProperties$b(t,n),t}function _possibleConstructorReturn$a(t,e){return e&&(_typeof$a(e)==="object"||typeof e=="function")?e:_assertThisInitialized$a(t)}function _assertThisInitialized$a(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$a(t){return _getPrototypeOf$a=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$a(t)}function _inherits$a(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$a(t,e)}function _setPrototypeOf$a(t,e){return _setPrototypeOf$a=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$a(t,e)}var Dot=function(t){_inherits$a(e,t);function e(){return _classCallCheck$b(this,e),_possibleConstructorReturn$a(this,_getPrototypeOf$a(e).apply(this,arguments))}return _createClass$b(e,[{key:"render",value:function(){var r=this.props,o=r.cx,p=r.cy,u=r.r,l=r.className,f=classNames("recharts-dot",l);return o===+o&&p===+p&&u===+u?React.createElement("circle",_extends$8({},getPresentationAttributes(this.props),filterEventAttributes(this.props,null,!0),{className:f,cx:o,cy:p,r:u})):null}}]),e}(reactExports.PureComponent);Dot.displayName="Dot";Dot.propTypes={className:propTypesExports.string,cx:propTypesExports.number,cy:propTypesExports.number,r:propTypesExports.number};const Dot$1=Dot;function ownKeys$8(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$8(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$8(n,!0).forEach(function(r){_defineProperty$9(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$8(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$9(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _typeof$9(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$9=function(n){return typeof n}:_typeof$9=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$9(t)}function _extends$7(){return _extends$7=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$7.apply(this,arguments)}function _classCallCheck$a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$a(t,e,n){return e&&_defineProperties$a(t.prototype,e),n&&_defineProperties$a(t,n),t}function _possibleConstructorReturn$9(t,e){return e&&(_typeof$9(e)==="object"||typeof e=="function")?e:_assertThisInitialized$9(t)}function _assertThisInitialized$9(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$9(t){return _getPrototypeOf$9=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$9(t)}function _inherits$9(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$9(t,e)}function _setPrototypeOf$9(t,e){return _setPrototypeOf$9=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$9(t,e)}var Cross=function(t){_inherits$9(e,t);function e(){return _classCallCheck$a(this,e),_possibleConstructorReturn$9(this,_getPrototypeOf$9(e).apply(this,arguments))}return _createClass$a(e,[{key:"render",value:function(){var r=this.props,o=r.x,p=r.y,u=r.width,l=r.height,f=r.top,h=r.left,d=r.className;return!isNumber(o)||!isNumber(p)||!isNumber(u)||!isNumber(l)||!isNumber(f)||!isNumber(h)?null:React.createElement("path",_extends$7({},getPresentationAttributes(this.props),{className:classNames("recharts-cross",d),d:this.constructor.getPath(o,p,u,l,f,h)}))}}],[{key:"getPath",value:function(r,o,p,u,l,f){return"M".concat(r,",").concat(l,"v").concat(u,"M").concat(f,",").concat(o,"h").concat(p)}}]),e}(reactExports.PureComponent);Cross.displayName="Cross";Cross.propTypes=_objectSpread$8({},PRESENTATION_ATTRIBUTES,{x:propTypesExports.number,y:propTypesExports.number,width:propTypesExports.number,height:propTypesExports.number,top:propTypesExports.number,left:propTypesExports.number,className:propTypesExports.string});Cross.defaultProps={x:0,y:0,top:0,left:0,width:0,height:0};const Cross$1=Cross;var nativeCeil=Math.ceil,nativeMax$1=Math.max;function baseRange$1(t,e,n,r){for(var o=-1,p=nativeMax$1(nativeCeil((e-t)/(n||1)),0),u=Array(p);p--;)u[r?p:++o]=t,t+=n;return u}var _baseRange=baseRange$1,toNumber=toNumber_1,INFINITY=1/0,MAX_INTEGER=17976931348623157e292;function toFinite$2(t){if(!t)return t===0?t:0;if(t=toNumber(t),t===INFINITY||t===-INFINITY){var e=t<0?-1:1;return e*MAX_INTEGER}return t===t?t:0}var toFinite_1=toFinite$2,baseRange=_baseRange,isIterateeCall$2=_isIterateeCall,toFinite$1=toFinite_1;function createRange$1(t){return function(e,n,r){return r&&typeof r!="number"&&isIterateeCall$2(e,n,r)&&(n=r=void 0),e=toFinite$1(e),n===void 0?(n=e,e=0):n=toFinite$1(n),r=r===void 0?e<n?1:-1:toFinite$1(r),baseRange(e,n,r,t)}}var _createRange=createRange$1,createRange=_createRange,range=createRange(),range_1=range;function ownKeys$7(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$7(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$7(n,!0).forEach(function(r){_defineProperty$8(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$7(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$8(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var PREFIX_LIST=["Webkit","Moz","O","ms"],generatePrefixStyle=function t(e,n){if(!e)return null;var r=e.replace(/(\w)/,function(p){return p.toUpperCase()}),o=PREFIX_LIST.reduce(function(p,u){return _objectSpread$7({},p,_defineProperty$8({},u+r,n))},{});return o[e]=n,o};function _typeof$8(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$8=function(n){return typeof n}:_typeof$8=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$8(t)}function _extends$6(){return _extends$6=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$6.apply(this,arguments)}function _defineProperty$7(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck$9(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$9(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$9(t,e,n){return e&&_defineProperties$9(t.prototype,e),n&&_defineProperties$9(t,n),t}function _possibleConstructorReturn$8(t,e){return e&&(_typeof$8(e)==="object"||typeof e=="function")?e:_assertThisInitialized$8(t)}function _getPrototypeOf$8(t){return _getPrototypeOf$8=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$8(t)}function _assertThisInitialized$8(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits$8(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$8(t,e)}function _setPrototypeOf$8(t,e){return _setPrototypeOf$8=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$8(t,e)}var Brush=function(t){_inherits$8(e,t);function e(n){var r;return _classCallCheck$9(this,e),r=_possibleConstructorReturn$8(this,_getPrototypeOf$8(e).call(this,n)),r.handleDrag=function(o){r.leaveTimer&&(clearTimeout(r.leaveTimer),r.leaveTimer=null),r.state.isTravellerMoving?r.handleTravellerMove(o):r.state.isSlideMoving&&r.handleSlideDrag(o)},r.handleTouchMove=function(o){o.changedTouches!=null&&o.changedTouches.length>0&&r.handleDrag(o.changedTouches[0])},r.handleDragEnd=function(){r.setState({isTravellerMoving:!1,isSlideMoving:!1})},r.handleLeaveWrapper=function(){(r.state.isTravellerMoving||r.state.isSlideMoving)&&(r.leaveTimer=setTimeout(r.handleDragEnd,r.props.leaveTimeOut))},r.handleEnterSlideOrTraveller=function(){r.setState({isTextActive:!0})},r.handleLeaveSlideOrTraveller=function(){r.setState({isTextActive:!1})},r.handleSlideDragStart=function(o){var p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:o;r.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:p.pageX})},r.travellerDragStartHandlers={startX:r.handleTravellerDragStart.bind(_assertThisInitialized$8(r),"startX"),endX:r.handleTravellerDragStart.bind(_assertThisInitialized$8(r),"endX")},r.state=n.data&&n.data.length?r.updateScale(n):{},r}return _createClass$9(e,[{key:"componentWillReceiveProps",value:function(r){var o=this,p=this.props,u=p.data,l=p.width,f=p.x,h=p.travellerWidth,d=p.updateId;(r.data!==u||r.updateId!==d)&&r.data&&r.data.length?this.setState(this.updateScale(r)):(r.width!==l||r.x!==f||r.travellerWidth!==h)&&(this.scale.range([r.x,r.x+r.width-r.travellerWidth]),this.scaleValues=this.scale.domain().map(function(m){return o.scale(m)}),this.setState({startX:this.scale(r.startIndex),endX:this.scale(r.endIndex)}))}},{key:"componentWillUnmount",value:function(){this.scale=null,this.scaleValues=null,this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null)}},{key:"getIndex",value:function(r){var o=r.startX,p=r.endX,u=this.props,l=u.gap,f=u.data,h=f.length-1,d=Math.min(o,p),m=Math.max(o,p),v=this.constructor.getIndexInRange(this.scaleValues,d),_=this.constructor.getIndexInRange(this.scaleValues,m);return{startIndex:v-v%l,endIndex:_===h?h:_-_%l}}},{key:"getTextOfTick",value:function(r){var o=this.props,p=o.data,u=o.tickFormatter,l=o.dataKey,f=getValueByDataKey(p[r],l,r);return isFunction_1(u)?u(f):f}},{key:"handleSlideDrag",value:function(r){var o=this.state,p=o.slideMoveStartX,u=o.startX,l=o.endX,f=this.props,h=f.x,d=f.width,m=f.travellerWidth,v=f.startIndex,_=f.endIndex,T=f.onChange,g=r.pageX-p;g>0?g=Math.min(g,h+d-m-l,h+d-m-u):g<0&&(g=Math.max(g,h-u,h-l));var $=this.getIndex({startX:u+g,endX:l+g});($.startIndex!==v||$.endIndex!==_)&&T&&T($),this.setState({startX:u+g,endX:l+g,slideMoveStartX:r.pageX})}},{key:"handleTravellerDragStart",value:function(r,o){var p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:o;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:r,brushMoveStartX:p.pageX})}},{key:"handleTravellerMove",value:function(r){var o,p=this.state,u=p.brushMoveStartX,l=p.movingTravellerId,f=p.endX,h=p.startX,d=this.state[l],m=this.props,v=m.x,_=m.width,T=m.travellerWidth,g=m.onChange,$=m.gap,E=m.data,b={startX:this.state.startX,endX:this.state.endX},w=r.pageX-u;w>0?w=Math.min(w,v+_-T-d):w<0&&(w=Math.max(w,v-d)),b[l]=d+w;var S=this.getIndex(b),A=S.startIndex,O=S.endIndex,C=function(){var I=E.length-1;return l==="startX"&&(f>h?A%$===0:O%$===0)||f<h&&O===I||l==="endX"&&(f>h?O%$===0:A%$===0)||f>h&&O===I};this.setState((o={},_defineProperty$7(o,l,d+w),_defineProperty$7(o,"brushMoveStartX",r.pageX),o),function(){g&&C()&&g(S)})}},{key:"updateScale",value:function(r){var o=this,p=r.data,u=r.startIndex,l=r.endIndex,f=r.x,h=r.width,d=r.travellerWidth,m=p.length;return this.scale=point().domain(range_1(0,m)).range([f,f+h-d]),this.scaleValues=this.scale.domain().map(function(v){return o.scale(v)}),{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,startX:this.scale(u),endX:this.scale(l)}}},{key:"renderBackground",value:function(){var r=this.props,o=r.x,p=r.y,u=r.width,l=r.height,f=r.fill,h=r.stroke;return React.createElement("rect",{stroke:h,fill:f,x:o,y:p,width:u,height:l})}},{key:"renderPanorama",value:function(){var r=this.props,o=r.x,p=r.y,u=r.width,l=r.height,f=r.data,h=r.children,d=r.padding,m=reactExports.Children.only(h);return m?React.cloneElement(m,{x:o,y:p,width:u,height:l,margin:d,compact:!0,data:f}):null}},{key:"renderTraveller",value:function(r,o){var p=this.props,u=p.y,l=p.travellerWidth,f=p.height,h=p.stroke,d=Math.floor(u+f/2)-1,m=Math.max(r,this.props.x);return React.createElement(Layer,{className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[o],onTouchStart:this.travellerDragStartHandlers[o],style:{cursor:"col-resize"}},React.createElement("rect",{x:m,y:u,width:l,height:f,fill:h,stroke:"none"}),React.createElement("line",{x1:m+1,y1:d,x2:m+l-1,y2:d,fill:"none",stroke:"#fff"}),React.createElement("line",{x1:m+1,y1:d+2,x2:m+l-1,y2:d+2,fill:"none",stroke:"#fff"}))}},{key:"renderSlide",value:function(r,o){var p=this.props,u=p.y,l=p.height,f=p.stroke;return React.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:f,fillOpacity:.2,x:Math.min(r,o),y:u,width:Math.abs(o-r),height:l})}},{key:"renderText",value:function(){var r=this.props,o=r.startIndex,p=r.endIndex,u=r.y,l=r.height,f=r.travellerWidth,h=r.stroke,d=this.state,m=d.startX,v=d.endX,_=5,T={pointerEvents:"none",fill:h};return React.createElement(Layer,{className:"recharts-brush-texts"},React.createElement(Text$1,_extends$6({textAnchor:"end",verticalAnchor:"middle",x:Math.min(m,v)-_,y:u+l/2},T),this.getTextOfTick(o)),React.createElement(Text$1,_extends$6({textAnchor:"start",verticalAnchor:"middle",x:Math.max(m,v)+f+_,y:u+l/2},T),this.getTextOfTick(p)))}},{key:"render",value:function(){var r=this.props,o=r.data,p=r.className,u=r.children,l=r.x,f=r.y,h=r.width,d=r.height,m=r.alwaysShowText,v=this.state,_=v.startX,T=v.endX,g=v.isTextActive,$=v.isSlideMoving,E=v.isTravellerMoving;if(!o||!o.length||!isNumber(l)||!isNumber(f)||!isNumber(h)||!isNumber(d)||h<=0||d<=0)return null;var b=classNames("recharts-brush",p),w=React.Children.count(u)===1,S=generatePrefixStyle("userSelect","none");return React.createElement(Layer,{className:b,onMouseMove:this.handleDrag,onMouseLeave:this.handleLeaveWrapper,onMouseUp:this.handleDragEnd,onTouchEnd:this.handleDragEnd,onTouchMove:this.handleTouchMove,style:S},this.renderBackground(),w&&this.renderPanorama(),this.renderSlide(_,T),this.renderTraveller(_,"startX"),this.renderTraveller(T,"endX"),(g||$||E||m)&&this.renderText())}}],[{key:"getIndexInRange",value:function(r,o){for(var p=r.length,u=0,l=p-1;l-u>1;){var f=Math.floor((u+l)/2);r[f]>o?l=f:u=f}return o>=r[l]?l:u}}]),e}(reactExports.PureComponent);Brush.displayName="Brush";Brush.propTypes={className:propTypesExports.string,fill:propTypesExports.string,stroke:propTypesExports.string,x:propTypesExports.number,y:propTypesExports.number,width:propTypesExports.number,height:propTypesExports.number.isRequired,travellerWidth:propTypesExports.number,gap:propTypesExports.number,padding:propTypesExports.shape({top:propTypesExports.number,right:propTypesExports.number,bottom:propTypesExports.number,left:propTypesExports.number}),dataKey:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number,propTypesExports.func]),data:propTypesExports.array,startIndex:propTypesExports.number,endIndex:propTypesExports.number,tickFormatter:propTypesExports.func,children:propTypesExports.node,onChange:propTypesExports.func,updateId:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),leaveTimeOut:propTypesExports.number,alwaysShowText:propTypesExports.bool};Brush.defaultProps={height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1};const Brush$1=Brush;var baseEach$1=_baseEach;function baseSome$1(t,e){var n;return baseEach$1(t,function(r,o,p){return n=e(r,o,p),!n}),!!n}var _baseSome=baseSome$1,arraySome=_arraySome,baseIteratee$4=_baseIteratee,baseSome=_baseSome,isArray$1=isArray_1,isIterateeCall$1=_isIterateeCall;function some(t,e,n){var r=isArray$1(t)?arraySome:baseSome;return n&&isIterateeCall$1(t,e,n)&&(e=void 0),r(t,baseIteratee$4(e))}var some_1=some,ifOverflowMatches=function t(e,n){var r=e.alwaysShow,o=e.ifOverflow;return r&&(o="extendDomain"),o===n};function arrayEvery$1(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}var _arrayEvery=arrayEvery$1,baseEach=_baseEach;function baseEvery$1(t,e){var n=!0;return baseEach(t,function(r,o,p){return n=!!e(r,o,p),n}),n}var _baseEvery=baseEvery$1,arrayEvery=_arrayEvery,baseEvery=_baseEvery,baseIteratee$3=_baseIteratee,isArray=isArray_1,isIterateeCall=_isIterateeCall;function every(t,e,n){var r=isArray(t)?arrayEvery:baseEvery;return n&&isIterateeCall(t,e,n)&&(e=void 0),r(t,baseIteratee$3(e))}var every_1=every,defineProperty=_defineProperty$p;function baseAssignValue$1(t,e,n){e=="__proto__"&&defineProperty?defineProperty(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var _baseAssignValue=baseAssignValue$1,baseAssignValue=_baseAssignValue,baseForOwn=_baseForOwn,baseIteratee$2=_baseIteratee;function mapValues(t,e){var n={};return e=baseIteratee$2(e),baseForOwn(t,function(r,o,p){baseAssignValue(n,o,e(r,o,p))}),n}var mapValues_1=mapValues;function _classCallCheck$8(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$8(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$8(t,e,n){return e&&_defineProperties$8(t.prototype,e),n&&_defineProperties$8(t,n),t}function ownKeys$6(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$6(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$6(n,!0).forEach(function(r){_defineProperty$6(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$6(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$6(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var formatAxisMap=function t(e,n,r,o,p){var u=e.width,l=e.height,f=e.layout,h=Object.keys(n),d={left:r.left,leftMirror:r.left,right:u-r.right,rightMirror:u-r.right,top:r.top,topMirror:r.top,bottom:l-r.bottom,bottomMirror:l-r.bottom};return h.reduce(function(m,v){var _=n[v],T=_.orientation,g=_.domain,$=_.padding,E=$===void 0?{}:$,b=_.mirror,w=_.reversed,S="".concat(T).concat(b?"Mirror":""),A,O,C,M;o==="xAxis"?A=[r.left+(E.left||0),r.left+r.width-(E.right||0)]:o==="yAxis"?A=f==="horizontal"?[r.top+r.height-(E.bottom||0),r.top+(E.top||0)]:[r.top+(E.top||0),r.top+r.height-(E.bottom||0)]:A=_.range,w&&(A=[A[1],A[0]]);var I=parseScale(_,p),N=I.scale,D=I.realScaleType;N.domain(g).range(A),checkDomainOfScale(N);var B=getTicksOfScale(N,_objectSpread$6({},_,{realScaleType:D}));o==="xAxis"?(M=T==="top"&&!b||T==="bottom"&&b,O=r.left,C=d[S]-M*_.height):o==="yAxis"&&(M=T==="left"&&!b||T==="right"&&b,O=d[S]-M*_.width,C=r.top);var L=_objectSpread$6({},_,{},B,{realScaleType:D,x:O,y:C,scale:N,width:o==="xAxis"?r.width:_.width,height:o==="yAxis"?r.height:_.height});return L.bandSize=getBandSizeOfAxis(L,B),!_.hide&&o==="xAxis"?d[S]+=(M?-1:1)*L.height:_.hide||(d[S]+=(M?-1:1)*L.width),_objectSpread$6({},m,_defineProperty$6({},v,L))},{})},rectWithPoints=function t(e,n){var r=e.x,o=e.y,p=n.x,u=n.y;return{x:Math.min(r,p),y:Math.min(o,u),width:Math.abs(p-r),height:Math.abs(u-o)}},rectWithCoords=function t(e){var n=e.x1,r=e.y1,o=e.x2,p=e.y2;return rectWithPoints({x:n,y:r},{x:o,y:p})},ScaleHelper=function(){_createClass$8(t,null,[{key:"create",value:function(n){return new t(n)}}]);function t(e){_classCallCheck$8(this,t),this.scale=e}return _createClass$8(t,[{key:"apply",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.bandAware,p=r.position;if(n!==void 0){if(p)switch(p){case"start":return this.scale(n);case"middle":{var u=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+u}case"end":{var l=this.bandwidth?this.bandwidth():0;return this.scale(n)+l}default:return this.scale(n)}if(o){var f=this.bandwidth?this.bandwidth()/2:0;return this.scale(n)+f}return this.scale(n)}}},{key:"isInRange",value:function(n){var r=this.range(),o=r[0],p=r[r.length-1];return o<=p?n>=o&&n<=p:n>=p&&n<=o}},{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}}]),t}();ScaleHelper.EPS=1e-4;var LabeledScaleHelper=function(){_createClass$8(t,null,[{key:"create",value:function(n){return new this(n)}}]);function t(e){_classCallCheck$8(this,t),this.scales=mapValues_1(e,ScaleHelper.create),Object.assign(this,this.scales)}return _createClass$8(t,[{key:"apply",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.bandAware,p=this.scales;return mapValues_1(n,function(u,l){return p[l].apply(u,{bandAware:o})})}},{key:"isInRange",value:function(n){var r=this.scales;return every_1(n,function(o,p){return r[p].isInRange(o)})}}]),t}();function _typeof$7(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$7=function(n){return typeof n}:_typeof$7=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$7(t)}function ownKeys$5(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$5(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$5(n,!0).forEach(function(r){_defineProperty$5(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$5(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$5(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,e){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]"){var n=[],r=!0,o=!1,p=void 0;try{for(var u=t[Symbol.iterator](),l;!(r=(l=u.next()).done)&&(n.push(l.value),!(e&&n.length===e));r=!0);}catch(f){o=!0,p=f}finally{try{!r&&u.return!=null&&u.return()}finally{if(o)throw p}}return n}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _classCallCheck$7(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$7(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$7(t,e,n){return e&&_defineProperties$7(t.prototype,e),n&&_defineProperties$7(t,n),t}function _possibleConstructorReturn$7(t,e){return e&&(_typeof$7(e)==="object"||typeof e=="function")?e:_assertThisInitialized$7(t)}function _assertThisInitialized$7(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$7(t){return _getPrototypeOf$7=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$7(t)}function _inherits$7(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$7(t,e)}function _setPrototypeOf$7(t,e){return _setPrototypeOf$7=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$7(t,e)}function _extends$5(){return _extends$5=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$5.apply(this,arguments)}var renderLine=function t(e,n){var r;return React.isValidElement(e)?r=React.cloneElement(e,n):isFunction_1(e)?r=e(n):r=React.createElement("line",_extends$5({},n,{className:"recharts-reference-line-line"})),r},ReferenceLine=function(t){_inherits$7(e,t);function e(){return _classCallCheck$7(this,e),_possibleConstructorReturn$7(this,_getPrototypeOf$7(e).apply(this,arguments))}return _createClass$7(e,[{key:"getEndPoints",value:function(r,o,p,u){var l=this.props,f=l.viewBox,h=f.x,d=f.y,m=f.width,v=f.height,_=l.position;if(p){var T=this.props,g=T.y,$=T.yAxis.orientation,E=r.y.apply(g,{position:_});if(ifOverflowMatches(this.props,"discard")&&!r.y.isInRange(E))return null;var b=[{x:h+m,y:E},{x:h,y:E}];return $==="left"?b.reverse():b}if(o){var w=this.props,S=w.x,A=w.xAxis.orientation,O=r.x.apply(S,{position:_});if(ifOverflowMatches(this.props,"discard")&&!r.x.isInRange(O))return null;var C=[{x:O,y:d+v},{x:O,y:d}];return A==="top"?C.reverse():C}if(u){var M=this.props.segment,I=M.map(function(N){return r.apply(N,{position:_})});return ifOverflowMatches(this.props,"discard")&&some_1(I,function(N){return!r.isInRange(N)})?null:I}return null}},{key:"render",value:function(){var r=this.props,o=r.x,p=r.y,u=r.segment,l=r.xAxis,f=r.yAxis,h=r.shape,d=r.className,m=r.alwaysShow,v=r.clipPathId;warn(m===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var _=LabeledScaleHelper.create({x:l.scale,y:f.scale}),T=isNumOrStr(o),g=isNumOrStr(p),$=u&&u.length===2,E=this.getEndPoints(_,T,g,$);if(!E)return null;var b=_slicedToArray(E,2),w=b[0],S=w.x,A=w.y,O=b[1],C=O.x,M=O.y,I=ifOverflowMatches(this.props,"hidden")?"url(#".concat(v,")"):void 0,N=_objectSpread$5({clipPath:I},getPresentationAttributes(this.props),{},filterEventAttributes(this.props),{x1:S,y1:A,x2:C,y2:M});return React.createElement(Layer,{className:classNames("recharts-reference-line",d)},renderLine(h,N),Label.renderCallByParent(this.props,rectWithCoords({x1:S,y1:A,x2:C,y2:M})))}}]),e}(reactExports.PureComponent);ReferenceLine.displayName="ReferenceLine";ReferenceLine.propTypes=_objectSpread$5({},PRESENTATION_ATTRIBUTES,{viewBox:propTypesExports.shape({x:propTypesExports.number,y:propTypesExports.number,width:propTypesExports.number,height:propTypesExports.number}),xAxis:propTypesExports.object,yAxis:propTypesExports.object,isFront:propTypesExports.bool,alwaysShow:propTypesExports.bool,ifOverflow:propTypesExports.oneOf(["hidden","visible","discard","extendDomain"]),x:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),y:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),segment:propTypesExports.arrayOf(propTypesExports.shape({x:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),y:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string])})),position:propTypesExports.oneOf(["middle","start","end"]),className:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),yAxisId:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),xAxisId:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),shape:propTypesExports.func});ReferenceLine.defaultProps={isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"};const ReferenceLine$1=ReferenceLine;function _typeof$6(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$6=function(n){return typeof n}:_typeof$6=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$6(t)}function _extends$4(){return _extends$4=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$4.apply(this,arguments)}function ownKeys$4(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$4(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$4(n,!0).forEach(function(r){_defineProperty$4(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$4(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$4(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck$6(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$6(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$6(t,e,n){return e&&_defineProperties$6(t.prototype,e),n&&_defineProperties$6(t,n),t}function _possibleConstructorReturn$6(t,e){return e&&(_typeof$6(e)==="object"||typeof e=="function")?e:_assertThisInitialized$6(t)}function _assertThisInitialized$6(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$6(t){return _getPrototypeOf$6=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$6(t)}function _inherits$6(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$6(t,e)}function _setPrototypeOf$6(t,e){return _setPrototypeOf$6=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$6(t,e)}var ReferenceDot=function(t){_inherits$6(e,t);function e(){return _classCallCheck$6(this,e),_possibleConstructorReturn$6(this,_getPrototypeOf$6(e).apply(this,arguments))}return _createClass$6(e,[{key:"getCoordinate",value:function(){var r=this.props,o=r.x,p=r.y,u=r.xAxis,l=r.yAxis,f=LabeledScaleHelper.create({x:u.scale,y:l.scale}),h=f.apply({x:o,y:p},{bandAware:!0});return ifOverflowMatches(this.props,"discard")&&!f.isInRange(h)?null:h}},{key:"render",value:function(){var r=this.props,o=r.x,p=r.y,u=r.r,l=r.alwaysShow,f=r.clipPathId,h=isNumOrStr(o),d=isNumOrStr(p);if(warn(l===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!h||!d)return null;var m=this.getCoordinate();if(!m)return null;var v=m.x,_=m.y,T=this.props,g=T.shape,$=T.className,E=ifOverflowMatches(this.props,"hidden")?"url(#".concat(f,")"):void 0,b=_objectSpread$4({clipPath:E},getPresentationAttributes(this.props),{},filterEventAttributes(this.props),{cx:v,cy:_});return React.createElement(Layer,{className:classNames("recharts-reference-dot",$)},this.constructor.renderDot(g,b),Label.renderCallByParent(this.props,{x:v-u,y:_-u,width:2*u,height:2*u}))}}],[{key:"renderDot",value:function(r,o){var p;return React.isValidElement(r)?p=React.cloneElement(r,o):isFunction_1(r)?p=r(o):p=React.createElement(Dot$1,_extends$4({},o,{cx:o.cx,cy:o.cy,className:"recharts-reference-dot-dot"})),p}}]),e}(reactExports.PureComponent);ReferenceDot.displayName="ReferenceDot";ReferenceDot.propTypes=_objectSpread$4({},PRESENTATION_ATTRIBUTES,{},EVENT_ATTRIBUTES,{r:propTypesExports.number,xAxis:propTypesExports.shape({scale:propTypesExports.func}),yAxis:propTypesExports.shape({scale:propTypesExports.func}),isFront:propTypesExports.bool,alwaysShow:propTypesExports.bool,ifOverflow:propTypesExports.oneOf(["hidden","visible","discard","extendDomain"]),x:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),y:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),className:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),yAxisId:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),xAxisId:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),shape:propTypesExports.oneOfType([propTypesExports.func,propTypesExports.element]),clipPathId:propTypesExports.string});ReferenceDot.defaultProps={isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1};const ReferenceDot$1=ReferenceDot;function _typeof$5(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$5=function(n){return typeof n}:_typeof$5=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$5(t)}function _extends$3(){return _extends$3=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$3.apply(this,arguments)}function ownKeys$3(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$3(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$3(n,!0).forEach(function(r){_defineProperty$3(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$3(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$3(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck$5(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$5(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$5(t,e,n){return e&&_defineProperties$5(t.prototype,e),n&&_defineProperties$5(t,n),t}function _possibleConstructorReturn$5(t,e){return e&&(_typeof$5(e)==="object"||typeof e=="function")?e:_assertThisInitialized$5(t)}function _assertThisInitialized$5(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$5(t){return _getPrototypeOf$5=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$5(t)}function _inherits$5(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$5(t,e)}function _setPrototypeOf$5(t,e){return _setPrototypeOf$5=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$5(t,e)}var ReferenceArea=function(t){_inherits$5(e,t);function e(){return _classCallCheck$5(this,e),_possibleConstructorReturn$5(this,_getPrototypeOf$5(e).apply(this,arguments))}return _createClass$5(e,[{key:"getRect",value:function(r,o,p,u){var l=this.props,f=l.x1,h=l.x2,d=l.y1,m=l.y2,v=l.xAxis,_=l.yAxis,T=LabeledScaleHelper.create({x:v.scale,y:_.scale}),g={x:r?T.x.apply(f):T.x.rangeMin,y:p?T.y.apply(d):T.y.rangeMin},$={x:o?T.x.apply(h):T.x.rangeMax,y:u?T.y.apply(m):T.y.rangeMax};return ifOverflowMatches(this.props,"discard")&&(!T.isInRange(g)||!T.isInRange($))?null:rectWithPoints(g,$)}},{key:"render",value:function(){var r=this.props,o=r.x1,p=r.x2,u=r.y1,l=r.y2,f=r.className,h=r.alwaysShow,d=r.clipPathId;warn(h===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var m=isNumOrStr(o),v=isNumOrStr(p),_=isNumOrStr(u),T=isNumOrStr(l),g=this.props.shape;if(!m&&!v&&!_&&!T&&!g)return null;var $=this.getRect(m,v,_,T);if(!$&&!g)return null;var E=ifOverflowMatches(this.props,"hidden")?"url(#".concat(d,")"):void 0;return React.createElement(Layer,{className:classNames("recharts-reference-area",f)},this.constructor.renderRect(g,_objectSpread$3({clipPath:E},this.props,{},$)),Label.renderCallByParent(this.props,$))}}],[{key:"renderRect",value:function(r,o){var p;return React.isValidElement(r)?p=React.cloneElement(r,o):isFunction_1(r)?p=r(o):p=React.createElement(Rectangle$1,_extends$3({},o,{className:"recharts-reference-area-rect"})),p}}]),e}(reactExports.PureComponent);ReferenceArea.displayName="ReferenceArea";ReferenceArea.propTypes=_objectSpread$3({},PRESENTATION_ATTRIBUTES,{viewBox:propTypesExports.shape({x:propTypesExports.number,y:propTypesExports.number,width:propTypesExports.number,height:propTypesExports.number}),xAxis:propTypesExports.object,yAxis:propTypesExports.object,isFront:propTypesExports.bool,alwaysShow:propTypesExports.bool,ifOverflow:propTypesExports.oneOf(["hidden","visible","discard","extendDomain"]),x1:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),x2:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),y1:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),y2:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),className:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),yAxisId:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),xAxisId:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),shape:propTypesExports.oneOfType([propTypesExports.func,propTypesExports.element])});ReferenceArea.defaultProps={isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1};const ReferenceArea$1=ReferenceArea;function _typeof$4(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$4=function(n){return typeof n}:_typeof$4=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$4(t)}function _extends$2(){return _extends$2=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$2.apply(this,arguments)}function ownKeys$2(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$2(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$2(n,!0).forEach(function(r){_defineProperty$2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$2(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$2(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _objectWithoutProperties$2(t,e){if(t==null)return{};var n=_objectWithoutPropertiesLoose$2(t,e),r,o;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(o=0;o<p.length;o++)r=p[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _objectWithoutPropertiesLoose$2(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,p;for(p=0;p<r.length;p++)o=r[p],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function _classCallCheck$4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$4(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$4(t,e,n){return e&&_defineProperties$4(t.prototype,e),n&&_defineProperties$4(t,n),t}function _possibleConstructorReturn$4(t,e){return e&&(_typeof$4(e)==="object"||typeof e=="function")?e:_assertThisInitialized$4(t)}function _assertThisInitialized$4(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$4(t){return _getPrototypeOf$4=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$4(t)}function _inherits$4(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$4(t,e)}function _setPrototypeOf$4(t,e){return _setPrototypeOf$4=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$4(t,e)}var CartesianAxis=function(t){_inherits$4(e,t);function e(){return _classCallCheck$4(this,e),_possibleConstructorReturn$4(this,_getPrototypeOf$4(e).apply(this,arguments))}return _createClass$4(e,[{key:"shouldComponentUpdate",value:function(r,o){var p=r.viewBox,u=_objectWithoutProperties$2(r,["viewBox"]),l=this.props,f=l.viewBox,h=_objectWithoutProperties$2(l,["viewBox"]);return!shallowEqual(p,f)||!shallowEqual(u,h)||!shallowEqual(o,this.state)}},{key:"getTickLineCoord",value:function(r){var o=this.props,p=o.x,u=o.y,l=o.width,f=o.height,h=o.orientation,d=o.tickSize,m=o.mirror,v=o.tickMargin,_,T,g,$,E,b,w=m?-1:1,S=r.tickSize||d,A=isNumber(r.tickCoord)?r.tickCoord:r.coordinate;switch(h){case"top":_=T=r.coordinate,$=u+!m*f,g=$-w*S,b=g-w*v,E=A;break;case"left":g=$=r.coordinate,T=p+!m*l,_=T-w*S,E=_-w*v,b=A;break;case"right":g=$=r.coordinate,T=p+m*l,_=T+w*S,E=_+w*v,b=A;break;default:_=T=r.coordinate,$=u+m*f,g=$+w*S,b=g+w*v,E=A;break}return{line:{x1:_,y1:g,x2:T,y2:$},tick:{x:E,y:b}}}},{key:"getTickTextAnchor",value:function(){var r=this.props,o=r.orientation,p=r.mirror,u;switch(o){case"left":u=p?"start":"end";break;case"right":u=p?"end":"start";break;default:u="middle";break}return u}},{key:"getTickVerticalAnchor",value:function(){var r=this.props,o=r.orientation,p=r.mirror,u="end";switch(o){case"left":case"right":u="middle";break;case"top":u=p?"start":"end";break;default:u=p?"end":"start";break}return u}},{key:"renderAxisLine",value:function(){var r=this.props,o=r.x,p=r.y,u=r.width,l=r.height,f=r.orientation,h=r.axisLine,d=r.mirror,m=_objectSpread$2({},getPresentationAttributes(this.props),{fill:"none"},getPresentationAttributes(h));if(f==="top"||f==="bottom"){var v=f==="top"&&!d||f==="bottom"&&d;m=_objectSpread$2({},m,{x1:o,y1:p+v*l,x2:o+u,y2:p+v*l})}else{var _=f==="left"&&!d||f==="right"&&d;m=_objectSpread$2({},m,{x1:o+_*u,y1:p,x2:o+_*u,y2:p+l})}return React.createElement("line",_extends$2({className:"recharts-cartesian-axis-line"},m))}},{key:"renderTicks",value:function(r){var o=this,p=this.props,u=p.tickLine,l=p.stroke,f=p.tick,h=p.tickFormatter,d=p.unit,m=e.getTicks(_objectSpread$2({},this.props,{ticks:r})),v=this.getTickTextAnchor(),_=this.getTickVerticalAnchor(),T=getPresentationAttributes(this.props),g=getPresentationAttributes(f),$=_objectSpread$2({},T,{fill:"none"},getPresentationAttributes(u)),E=m.map(function(b,w){var S=o.getTickLineCoord(b),A=S.line,O=S.tick,C=_objectSpread$2({textAnchor:v,verticalAnchor:_},T,{stroke:"none",fill:l},g,{},O,{index:w,payload:b,visibleTicksCount:m.length});return React.createElement(Layer,_extends$2({className:"recharts-cartesian-axis-tick",key:"tick-".concat(w)},filterEventsOfChild(o.props,b,w)),u&&React.createElement("line",_extends$2({className:"recharts-cartesian-axis-tick-line"},$,A)),f&&o.constructor.renderTickItem(f,C,"".concat(isFunction_1(h)?h(b.value):b.value).concat(d||"")))});return React.createElement("g",{className:"recharts-cartesian-axis-ticks"},E)}},{key:"render",value:function(){var r=this.props,o=r.axisLine,p=r.width,u=r.height,l=r.ticksGenerator,f=r.className,h=r.hide;if(h)return null;var d=this.props,m=d.ticks,v=_objectWithoutProperties$2(d,["ticks"]),_=m;return isFunction_1(l)&&(_=m&&m.length>0?l(this.props):l(v)),p<=0||u<=0||!_||!_.length?null:React.createElement(Layer,{className:classNames("recharts-cartesian-axis",f)},o&&this.renderAxisLine(),this.renderTicks(_),Label.renderCallByParent(this.props))}}],[{key:"getTicks",value:function(r){var o=r.tick,p=r.ticks,u=r.viewBox,l=r.minTickGap,f=r.orientation,h=r.interval,d=r.tickFormatter,m=r.unit;return!p||!p.length||!o?[]:isNumber(h)||isSsr()?e.getNumberIntervalTicks(p,isNumber(h)?h:0):h==="preserveStartEnd"?e.getTicksStart({ticks:p,tickFormatter:d,viewBox:u,orientation:f,minTickGap:l,unit:m},!0):h==="preserveStart"?e.getTicksStart({ticks:p,tickFormatter:d,viewBox:u,orientation:f,minTickGap:l,unit:m}):e.getTicksEnd({ticks:p,tickFormatter:d,viewBox:u,orientation:f,minTickGap:l,unit:m})}},{key:"getNumberIntervalTicks",value:function(r,o){return r.filter(function(p,u){return u%(o+1)===0})}},{key:"getTicksStart",value:function(r,o){var p=r.ticks,u=r.tickFormatter,l=r.viewBox,f=r.orientation,h=r.minTickGap,d=r.unit,m=l.x,v=l.y,_=l.width,T=l.height,g=f==="top"||f==="bottom"?"width":"height",$=(p||[]).slice(),E=d&&g==="width"?getStringSize(d)[g]:0,b=$.length,w=b>=2?mathSign($[1].coordinate-$[0].coordinate):1,S,A;if(w===1?(S=g==="width"?m:v,A=g==="width"?m+_:v+T):(S=g==="width"?m+_:v+T,A=g==="width"?m:v),o){var O=p[b-1],C=isFunction_1(u)?u(O.value):O.value,M=getStringSize(C)[g]+E,I=w*(O.coordinate+w*M/2-A);$[b-1]=O=_objectSpread$2({},O,{tickCoord:I>0?O.coordinate-I*w:O.coordinate});var N=w*(O.tickCoord-w*M/2-S)>=0&&w*(O.tickCoord+w*M/2-A)<=0;N&&(A=O.tickCoord-w*(M/2+h),$[b-1]=_objectSpread$2({},O,{isShow:!0}))}for(var D=o?b-1:b,B=0;B<D;B++){var L=$[B],W=isFunction_1(u)?u(L.value):L.value,z=getStringSize(W)[g]+E;if(B===0){var U=w*(L.coordinate-w*z/2-S);$[B]=L=_objectSpread$2({},L,{tickCoord:U<0?L.coordinate-U*w:L.coordinate})}else $[B]=L=_objectSpread$2({},L,{tickCoord:L.coordinate});var G=w*(L.tickCoord-w*z/2-S)>=0&&w*(L.tickCoord+w*z/2-A)<=0;G&&(S=L.tickCoord+w*(z/2+h),$[B]=_objectSpread$2({},L,{isShow:!0}))}return $.filter(function(V){return V.isShow})}},{key:"getTicksEnd",value:function(r){var o=r.ticks,p=r.tickFormatter,u=r.viewBox,l=r.orientation,f=r.minTickGap,h=r.unit,d=u.x,m=u.y,v=u.width,_=u.height,T=l==="top"||l==="bottom"?"width":"height",g=h&&T==="width"?getStringSize(h)[T]:0,$=(o||[]).slice(),E=$.length,b=E>=2?mathSign($[1].coordinate-$[0].coordinate):1,w,S;b===1?(w=T==="width"?d:m,S=T==="width"?d+v:m+_):(w=T==="width"?d+v:m+_,S=T==="width"?d:m);for(var A=E-1;A>=0;A--){var O=$[A],C=isFunction_1(p)?p(O.value):O.value,M=getStringSize(C)[T]+g;if(A===E-1){var I=b*(O.coordinate+b*M/2-S);$[A]=O=_objectSpread$2({},O,{tickCoord:I>0?O.coordinate-I*b:O.coordinate})}else $[A]=O=_objectSpread$2({},O,{tickCoord:O.coordinate});var N=b*(O.tickCoord-b*M/2-w)>=0&&b*(O.tickCoord+b*M/2-S)<=0;N&&(S=O.tickCoord-b*(M/2+f),$[A]=_objectSpread$2({},O,{isShow:!0}))}return $.filter(function(D){return D.isShow})}},{key:"renderTickItem",value:function(r,o,p){var u;return React.isValidElement(r)?u=React.cloneElement(r,o):isFunction_1(r)?u=r(o):u=React.createElement(Text$1,_extends$2({},o,{className:"recharts-cartesian-axis-tick-value"}),p),u}}]),e}(reactExports.Component);CartesianAxis.displayName="CartesianAxis";CartesianAxis.propTypes=_objectSpread$2({},PRESENTATION_ATTRIBUTES,{},EVENT_ATTRIBUTES,{className:propTypesExports.string,x:propTypesExports.number,y:propTypesExports.number,width:propTypesExports.number,height:propTypesExports.number,orientation:propTypesExports.oneOf(["top","bottom","left","right"]),viewBox:propTypesExports.shape({x:propTypesExports.number,y:propTypesExports.number,width:propTypesExports.number,height:propTypesExports.number}),tick:propTypesExports.oneOfType([propTypesExports.bool,propTypesExports.func,propTypesExports.object,propTypesExports.element]),axisLine:propTypesExports.oneOfType([propTypesExports.bool,propTypesExports.object]),tickLine:propTypesExports.oneOfType([propTypesExports.bool,propTypesExports.object]),mirror:propTypesExports.bool,tickMargin:propTypesExports.number.isRequired,minTickGap:propTypesExports.number,ticks:propTypesExports.array,tickSize:propTypesExports.number,stroke:propTypesExports.string,tickFormatter:propTypesExports.func,ticksGenerator:propTypesExports.func,interval:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.oneOf(["preserveStart","preserveEnd","preserveStartEnd"])])});CartesianAxis.defaultProps={x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"};const CartesianAxis$1=CartesianAxis;function _typeof$3(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$3=function(n){return typeof n}:_typeof$3=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$3(t)}function _objectWithoutProperties$1(t,e){if(t==null)return{};var n=_objectWithoutPropertiesLoose$1(t,e),r,o;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(o=0;o<p.length;o++)r=p[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _objectWithoutPropertiesLoose$1(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,p;for(p=0;p<r.length;p++)o=r[p],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function _extends$1(){return _extends$1=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends$1.apply(this,arguments)}function ownKeys$1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread$1(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys$1(n,!0).forEach(function(r){_defineProperty$1(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys$1(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty$1(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck$3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$3(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$3(t,e,n){return e&&_defineProperties$3(t.prototype,e),n&&_defineProperties$3(t,n),t}function _possibleConstructorReturn$3(t,e){return e&&(_typeof$3(e)==="object"||typeof e=="function")?e:_assertThisInitialized$3(t)}function _assertThisInitialized$3(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$3(t){return _getPrototypeOf$3=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$3(t)}function _inherits$3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$3(t,e)}function _setPrototypeOf$3(t,e){return _setPrototypeOf$3=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$3(t,e)}var Bar=function(t){_inherits$3(e,t);function e(){var n,r;_classCallCheck$3(this,e);for(var o=arguments.length,p=new Array(o),u=0;u<o;u++)p[u]=arguments[u];return r=_possibleConstructorReturn$3(this,(n=_getPrototypeOf$3(e)).call.apply(n,[this].concat(p))),r.state={isAnimationFinished:!1},r.id=uniqueId("recharts-bar-"),r.cachePrevData=function(l){r.setState({prevData:l})},r.handleAnimationEnd=function(){r.setState({isAnimationFinished:!0}),r.props.onAnimationEnd()},r.handleAnimationStart=function(){r.setState({isAnimationFinished:!1}),r.props.onAnimationStart()},r}return _createClass$3(e,[{key:"componentWillReceiveProps",value:function(r){var o=this.props,p=o.animationId,u=o.data;r.animationId!==p&&this.cachePrevData(u)}},{key:"renderRectanglesStatically",value:function(r){var o=this,p=this.props.shape,u=getPresentationAttributes(this.props);return r&&r.map(function(l,f){var h=_objectSpread$1({},u,{},l,{index:f});return React.createElement(Layer,_extends$1({className:"recharts-bar-rectangle"},filterEventsOfChild(o.props,l,f),{key:"rectangle-".concat(f)}),o.constructor.renderRectangle(p,h))})}},{key:"renderRectanglesWithAnimation",value:function(){var r=this,o=this.props,p=o.data,u=o.layout,l=o.isAnimationActive,f=o.animationBegin,h=o.animationDuration,d=o.animationEasing,m=o.animationId,v=this.state.prevData;return React.createElement(Animate,{begin:f,duration:h,isActive:l,easing:d,from:{t:0},to:{t:1},key:"bar-".concat(m),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(_){var T=_.t,g=p.map(function($,E){var b=v&&v[E];if(b){var w=interpolateNumber$2(b.x,$.x),S=interpolateNumber$2(b.y,$.y),A=interpolateNumber$2(b.width,$.width),O=interpolateNumber$2(b.height,$.height);return _objectSpread$1({},$,{x:w(T),y:S(T),width:A(T),height:O(T)})}if(u==="horizontal"){var C=interpolateNumber$2(0,$.height),M=C(T);return _objectSpread$1({},$,{y:$.y+$.height-M,height:M})}var I=interpolateNumber$2(0,$.width),N=I(T);return _objectSpread$1({},$,{width:N})});return React.createElement(Layer,null,r.renderRectanglesStatically(g))})}},{key:"renderRectangles",value:function(){var r=this.props,o=r.data,p=r.isAnimationActive,u=this.state.prevData;return p&&o&&o.length&&(!u||!isEqual_1(u,o))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(o)}},{key:"renderBackground",value:function(){var r=this,o=this.props.data,p=getPresentationAttributes(this.props.background);return o.map(function(u,l){u.value;var f=u.background,h=_objectWithoutProperties$1(u,["value","background"]);if(!f)return null;var d=_objectSpread$1({},h,{fill:"#eee"},f,{},p,{},filterEventsOfChild(r.props,u,l),{index:l,key:"background-bar-".concat(l),className:"recharts-bar-background-rectangle"});return r.constructor.renderRectangle(r.props.background,d)})}},{key:"renderErrorBar",value:function(){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var r=this.props,o=r.data,p=r.xAxis,u=r.yAxis,l=r.layout,f=r.children,h=findAllByType(f,ErrorBar$1);if(!h)return null;var d=l==="vertical"?o[0].height/2:o[0].width/2;function m(v,_){return{x:v.x,y:v.y,value:v.value,errorVal:getValueByDataKey(v,_)}}return h.map(function(v,_){return React.cloneElement(v,{key:"error-bar-".concat(_),data:o,xAxis:p,yAxis:u,layout:l,offset:d,dataPointFormatter:m})})}},{key:"render",value:function(){var r=this.props,o=r.hide,p=r.data,u=r.className,l=r.xAxis,f=r.yAxis,h=r.left,d=r.top,m=r.width,v=r.height,_=r.isAnimationActive,T=r.background,g=r.id;if(o||!p||!p.length)return null;var $=this.state.isAnimationFinished,E=classNames("recharts-bar",u),b=l&&l.allowDataOverflow||f&&f.allowDataOverflow,w=isNil_1(g)?this.id:g;return React.createElement(Layer,{className:E},b?React.createElement("defs",null,React.createElement("clipPath",{id:"clipPath-".concat(w)},React.createElement("rect",{x:h,y:d,width:m,height:v}))):null,React.createElement(Layer,{className:"recharts-bar-rectangles",clipPath:b?"url(#clipPath-".concat(w,")"):null},T?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(),(!_||$)&&LabelList.renderCallByParent(this.props,p))}}],[{key:"renderRectangle",value:function(r,o){var p;return React.isValidElement(r)?p=React.cloneElement(r,o):isFunction_1(r)?p=r(o):p=React.createElement(Rectangle$1,o),p}}]),e}(reactExports.PureComponent);Bar.displayName="Bar";Bar.propTypes=_objectSpread$1({},PRESENTATION_ATTRIBUTES,{},EVENT_ATTRIBUTES,{className:propTypesExports.string,layout:propTypesExports.oneOf(["vertical","horizontal"]),xAxisId:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),yAxisId:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),yAxis:propTypesExports.object,xAxis:propTypesExports.object,stackId:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),barSize:propTypesExports.number,unit:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),name:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),dataKey:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number,propTypesExports.func]).isRequired,legendType:propTypesExports.oneOf(LEGEND_TYPES),tooltipType:propTypesExports.oneOf(TOOLTIP_TYPES),minPointSize:propTypesExports.number,maxBarSize:propTypesExports.number,hide:propTypesExports.bool,shape:propTypesExports.oneOfType([propTypesExports.func,propTypesExports.element]),data:propTypesExports.arrayOf(propTypesExports.shape({x:propTypesExports.number,y:propTypesExports.number,width:propTypesExports.number,height:propTypesExports.number,radius:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.array]),value:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string,propTypesExports.array])})),onAnimationStart:propTypesExports.func,onAnimationEnd:propTypesExports.func,animationId:propTypesExports.number,isAnimationActive:propTypesExports.bool,animationBegin:propTypesExports.number,animationDuration:propTypesExports.number,animationEasing:propTypesExports.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),id:propTypesExports.string});Bar.defaultProps={xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",isAnimationActive:!isSsr(),animationBegin:0,animationDuration:400,animationEasing:"ease",onAnimationStart:function t(){},onAnimationEnd:function t(){}};Bar.getComposedData=function(t){var e=t.props,n=t.item,r=t.barPosition,o=t.bandSize,p=t.xAxis,u=t.yAxis,l=t.xAxisTicks,f=t.yAxisTicks,h=t.stackedData,d=t.dataStartIndex,m=t.displayedData,v=t.offset,_=findPositionOfBar(r,n);if(!_)return[];var T=e.layout,g=n.props,$=g.dataKey,E=g.children,b=g.minPointSize,w=T==="horizontal"?u:p,S=h?w.scale.domain():null,A=getBaseValueOfBar({props:e,numericAxis:w}),O=findAllByType(E,Cell),C=m.map(function(M,I){var N,D,B,L,W,z;if(h?N=truncateByDomain(h[d+I],S):(N=getValueByDataKey(M,$),isArray_1(N)||(N=[A,N])),T==="horizontal"){if(D=getCateCoordinateOfBar({axis:p,ticks:l,bandSize:o,offset:_.offset,entry:M,index:I}),B=u.scale(N[1]),L=_.size,W=u.scale(N[0])-u.scale(N[1]),z={x:D,y:u.y,width:L,height:u.height},Math.abs(b)>0&&Math.abs(W)<Math.abs(b)){var U=mathSign(W||b)*(Math.abs(b)-Math.abs(W));B-=U,W+=U}}else if(D=p.scale(N[0]),B=getCateCoordinateOfBar({axis:u,ticks:f,bandSize:o,offset:_.offset,entry:M,index:I}),L=p.scale(N[1])-p.scale(N[0]),W=_.size,z={x:p.x,y:B,width:p.width,height:W},Math.abs(b)>0&&Math.abs(L)<Math.abs(b)){var G=mathSign(L||b)*(Math.abs(b)-Math.abs(L));L+=G}return _objectSpread$1({},M,{x:D,y:B,width:L,height:W,value:h?N:N[1],payload:M,background:z},O&&O[I]&&O[I].props)});return _objectSpread$1({data:C,layout:T},v)};const Bar$1=Bar;function _typeof$2(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$2=function(n){return typeof n}:_typeof$2=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$2(t)}function _classCallCheck$2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$2(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$2(t,e,n){return e&&_defineProperties$2(t.prototype,e),n&&_defineProperties$2(t,n),t}function _possibleConstructorReturn$2(t,e){return e&&(_typeof$2(e)==="object"||typeof e=="function")?e:_assertThisInitialized$2(t)}function _assertThisInitialized$2(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$2(t){return _getPrototypeOf$2=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$2(t)}function _inherits$2(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$2(t,e)}function _setPrototypeOf$2(t,e){return _setPrototypeOf$2=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$2(t,e)}var XAxis=function(t){_inherits$2(e,t);function e(){return _classCallCheck$2(this,e),_possibleConstructorReturn$2(this,_getPrototypeOf$2(e).apply(this,arguments))}return _createClass$2(e,[{key:"render",value:function(){return null}}]),e}(reactExports.PureComponent);XAxis.displayName="XAxis";XAxis.propTypes={allowDecimals:propTypesExports.bool,allowDuplicatedCategory:propTypesExports.bool,hide:propTypesExports.bool,name:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),unit:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),xAxisId:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),domain:propTypesExports.arrayOf(propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number,propTypesExports.func,propTypesExports.oneOf(["auto","dataMin","dataMax"])])),dataKey:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number,propTypesExports.func]),width:propTypesExports.number,height:propTypesExports.number,mirror:propTypesExports.bool,orientation:propTypesExports.oneOf(["top","bottom"]),type:propTypesExports.oneOf(["number","category"]),ticks:propTypesExports.array,tickCount:propTypesExports.number,tickFormatter:propTypesExports.func,padding:propTypesExports.shape({left:propTypesExports.number,right:propTypesExports.number}),allowDataOverflow:propTypesExports.bool,scale:propTypesExports.oneOfType([propTypesExports.oneOf(SCALE_TYPES),propTypesExports.func]),tick:propTypesExports.oneOfType([propTypesExports.bool,propTypesExports.func,propTypesExports.object,propTypesExports.element]),axisLine:propTypesExports.oneOfType([propTypesExports.bool,propTypesExports.object]),tickLine:propTypesExports.oneOfType([propTypesExports.bool,propTypesExports.object]),minTickGap:propTypesExports.number,tickSize:propTypesExports.number,interval:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.oneOf(["preserveStart","preserveEnd","preserveStartEnd"])]),reversed:propTypesExports.bool};XAxis.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",domain:[0,"auto"],padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0};const XAxis$1=XAxis;function _typeof$1(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof$1=function(n){return typeof n}:_typeof$1=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof$1(t)}function _classCallCheck$1(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties$1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass$1(t,e,n){return e&&_defineProperties$1(t.prototype,e),n&&_defineProperties$1(t,n),t}function _possibleConstructorReturn$1(t,e){return e&&(_typeof$1(e)==="object"||typeof e=="function")?e:_assertThisInitialized$1(t)}function _assertThisInitialized$1(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf$1(t){return _getPrototypeOf$1=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf$1(t)}function _inherits$1(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf$1(t,e)}function _setPrototypeOf$1(t,e){return _setPrototypeOf$1=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf$1(t,e)}var YAxis=function(t){_inherits$1(e,t);function e(){return _classCallCheck$1(this,e),_possibleConstructorReturn$1(this,_getPrototypeOf$1(e).apply(this,arguments))}return _createClass$1(e,[{key:"render",value:function(){return null}}]),e}(reactExports.PureComponent);YAxis.displayName="YAxis";YAxis.propTypes={allowDecimals:propTypesExports.bool,allowDuplicatedCategory:propTypesExports.bool,hide:propTypesExports.bool,name:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),unit:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),yAxisId:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),domain:propTypesExports.arrayOf(propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number,propTypesExports.func,propTypesExports.oneOf(["auto","dataMin","dataMax"])])),dataKey:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number,propTypesExports.func]),ticks:propTypesExports.array,tickCount:propTypesExports.number,tickFormatter:propTypesExports.func,width:propTypesExports.number,height:propTypesExports.number,mirror:propTypesExports.bool,orientation:propTypesExports.oneOf(["left","right"]),type:propTypesExports.oneOf(["number","category"]),padding:propTypesExports.shape({top:propTypesExports.number,bottom:propTypesExports.number}),allowDataOverflow:propTypesExports.bool,scale:propTypesExports.oneOfType([propTypesExports.oneOf(["auto","linear","pow","sqrt","log","identity","time","band","point","ordinal","quantile","quantize","utc","sequential","threshold"]),propTypesExports.func]),tick:propTypesExports.oneOfType([propTypesExports.bool,propTypesExports.func,propTypesExports.object,propTypesExports.element]),axisLine:propTypesExports.oneOfType([propTypesExports.bool,propTypesExports.object]),tickLine:propTypesExports.oneOfType([propTypesExports.bool,propTypesExports.object]),minTickGap:propTypesExports.number,tickSize:propTypesExports.number,interval:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.oneOf(["preserveStart","preserveEnd","preserveStartEnd"])]),reversed:propTypesExports.bool};YAxis.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",domain:[0,"auto"],padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1};const YAxis$1=YAxis;var baseIteratee$1=_baseIteratee,isArrayLike=isArrayLike_1,keys=keys_1;function createFind$1(t){return function(e,n,r){var o=Object(e);if(!isArrayLike(e)){var p=baseIteratee$1(n);e=keys(e),n=function(l){return p(o[l],l,o)}}var u=t(e,n,r);return u>-1?o[p?e[u]:u]:void 0}}var _createFind=createFind$1,toFinite=toFinite_1;function toInteger$1(t){var e=toFinite(t),n=e%1;return e===e?n?e-n:e:0}var toInteger_1=toInteger$1,baseFindIndex=_baseFindIndex,baseIteratee=_baseIteratee,toInteger=toInteger_1,nativeMax=Math.max;function findIndex$1(t,e,n){var r=t==null?0:t.length;if(!r)return-1;var o=n==null?0:toInteger(n);return o<0&&(o=nativeMax(r+o,0)),baseFindIndex(t,baseIteratee(e),o)}var findIndex_1=findIndex$1,createFind=_createFind,findIndex=findIndex_1,find=createFind(findIndex),find_1=find,debounce=debounce_1,isObject=isObject_1,FUNC_ERROR_TEXT="Expected a function";function throttle(t,e,n){var r=!0,o=!0;if(typeof t!="function")throw new TypeError(FUNC_ERROR_TEXT);return isObject(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),debounce(t,e,{leading:r,maxWait:e,trailing:o})}var throttle_1=throttle,detectReferenceElementsDomain=function t(e,n,r,o,p){var u=findAllByType(e,ReferenceLine$1),l=findAllByType(e,ReferenceDot$1),f=u.concat(l),h=findAllByType(e,ReferenceArea$1),d="".concat(o,"Id"),m=o[0],v=n;if(f.length&&(v=f.reduce(function(g,$){if($.props[d]===r&&ifOverflowMatches($.props,"extendDomain")&&isNumber($.props[m])){var E=$.props[m];return[Math.min(g[0],E),Math.max(g[1],E)]}return g},v)),h.length){var _="".concat(m,"1"),T="".concat(m,"2");v=h.reduce(function(g,$){if($.props[d]===r&&ifOverflowMatches($.props,"extendDomain")&&isNumber($.props[_])&&isNumber($.props[T])){var E=$.props[_],b=$.props[T];return[Math.min(g[0],E,b),Math.max(g[1],E,b)]}return g},v)}return p&&p.length&&(v=p.reduce(function(g,$){return isNumber($)?[Math.min(g[0],$),Math.max(g[1],$)]:g},v)),v},eventsExports={},events={get exports(){return eventsExports},set exports(t){eventsExports=t}},R=typeof Reflect=="object"?Reflect:null,ReflectApply=R&&typeof R.apply=="function"?R.apply:function t(e,n,r){return Function.prototype.apply.call(e,n,r)},ReflectOwnKeys;R&&typeof R.ownKeys=="function"?ReflectOwnKeys=R.ownKeys:Object.getOwnPropertySymbols?ReflectOwnKeys=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:ReflectOwnKeys=function(e){return Object.getOwnPropertyNames(e)};function ProcessEmitWarning(t){console&&console.warn&&console.warn(t)}var NumberIsNaN=Number.isNaN||function t(e){return e!==e};function EventEmitter(){EventEmitter.init.call(this)}events.exports=EventEmitter;eventsExports.once=once;EventEmitter.EventEmitter=EventEmitter;EventEmitter.prototype._events=void 0;EventEmitter.prototype._eventsCount=0;EventEmitter.prototype._maxListeners=void 0;var defaultMaxListeners=10;function checkListener(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(EventEmitter,"defaultMaxListeners",{enumerable:!0,get:function(){return defaultMaxListeners},set:function(t){if(typeof t!="number"||t<0||NumberIsNaN(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");defaultMaxListeners=t}});EventEmitter.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};EventEmitter.prototype.setMaxListeners=function t(e){if(typeof e!="number"||e<0||NumberIsNaN(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function _getMaxListeners(t){return t._maxListeners===void 0?EventEmitter.defaultMaxListeners:t._maxListeners}EventEmitter.prototype.getMaxListeners=function t(){return _getMaxListeners(this)};EventEmitter.prototype.emit=function t(e){for(var n=[],r=1;r<arguments.length;r++)n.push(arguments[r]);var o=e==="error",p=this._events;if(p!==void 0)o=o&&p.error===void 0;else if(!o)return!1;if(o){var u;if(n.length>0&&(u=n[0]),u instanceof Error)throw u;var l=new Error("Unhandled error."+(u?" ("+u.message+")":""));throw l.context=u,l}var f=p[e];if(f===void 0)return!1;if(typeof f=="function")ReflectApply(f,this,n);else for(var h=f.length,d=arrayClone(f,h),r=0;r<h;++r)ReflectApply(d[r],this,n);return!0};function _addListener(t,e,n,r){var o,p,u;if(checkListener(n),p=t._events,p===void 0?(p=t._events=Object.create(null),t._eventsCount=0):(p.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),p=t._events),u=p[e]),u===void 0)u=p[e]=n,++t._eventsCount;else if(typeof u=="function"?u=p[e]=r?[n,u]:[u,n]:r?u.unshift(n):u.push(n),o=_getMaxListeners(t),o>0&&u.length>o&&!u.warned){u.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+u.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=t,l.type=e,l.count=u.length,ProcessEmitWarning(l)}return t}EventEmitter.prototype.addListener=function t(e,n){return _addListener(this,e,n,!1)};EventEmitter.prototype.on=EventEmitter.prototype.addListener;EventEmitter.prototype.prependListener=function t(e,n){return _addListener(this,e,n,!0)};function onceWrapper(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function _onceWrap(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},o=onceWrapper.bind(r);return o.listener=n,r.wrapFn=o,o}EventEmitter.prototype.once=function t(e,n){return checkListener(n),this.on(e,_onceWrap(this,e,n)),this};EventEmitter.prototype.prependOnceListener=function t(e,n){return checkListener(n),this.prependListener(e,_onceWrap(this,e,n)),this};EventEmitter.prototype.removeListener=function t(e,n){var r,o,p,u,l;if(checkListener(n),o=this._events,o===void 0)return this;if(r=o[e],r===void 0)return this;if(r===n||r.listener===n)--this._eventsCount===0?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,r.listener||n));else if(typeof r!="function"){for(p=-1,u=r.length-1;u>=0;u--)if(r[u]===n||r[u].listener===n){l=r[u].listener,p=u;break}if(p<0)return this;p===0?r.shift():spliceOne(r,p),r.length===1&&(o[e]=r[0]),o.removeListener!==void 0&&this.emit("removeListener",e,l||n)}return this};EventEmitter.prototype.off=EventEmitter.prototype.removeListener;EventEmitter.prototype.removeAllListeners=function t(e){var n,r,o;if(r=this._events,r===void 0)return this;if(r.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):r[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete r[e]),this;if(arguments.length===0){var p=Object.keys(r),u;for(o=0;o<p.length;++o)u=p[o],u!=="removeListener"&&this.removeAllListeners(u);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=r[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(o=n.length-1;o>=0;o--)this.removeListener(e,n[o]);return this};function _listeners(t,e,n){var r=t._events;if(r===void 0)return[];var o=r[e];return o===void 0?[]:typeof o=="function"?n?[o.listener||o]:[o]:n?unwrapListeners(o):arrayClone(o,o.length)}EventEmitter.prototype.listeners=function t(e){return _listeners(this,e,!0)};EventEmitter.prototype.rawListeners=function t(e){return _listeners(this,e,!1)};EventEmitter.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):listenerCount.call(t,e)};EventEmitter.prototype.listenerCount=listenerCount;function listenerCount(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}EventEmitter.prototype.eventNames=function t(){return this._eventsCount>0?ReflectOwnKeys(this._events):[]};function arrayClone(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function spliceOne(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function unwrapListeners(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function once(t,e){return new Promise(function(n,r){function o(u){t.removeListener(e,p),r(u)}function p(){typeof t.removeListener=="function"&&t.removeListener("error",o),n([].slice.call(arguments))}eventTargetAgnosticAddListener(t,e,p,{once:!0}),e!=="error"&&addErrorHandlerIfEventEmitter(t,o,{once:!0})})}function addErrorHandlerIfEventEmitter(t,e,n){typeof t.on=="function"&&eventTargetAgnosticAddListener(t,"error",e,n)}function eventTargetAgnosticAddListener(t,e,n,r){if(typeof t.on=="function")r.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function o(p){r.once&&t.removeEventListener(e,o),n(p)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var eventCenter=new eventsExports;eventCenter.setMaxListeners&&eventCenter.setMaxListeners(10);var SYNC_EVENT="recharts.syncMouseEvents";function _typeof(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_typeof=function(n){return typeof n}:_typeof=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_typeof(t)}function _objectWithoutProperties(t,e){if(t==null)return{};var n=_objectWithoutPropertiesLoose(t,e),r,o;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(o=0;o<p.length;o++)r=p[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _objectWithoutPropertiesLoose(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,p;for(p=0;p<r.length;p++)o=r[p],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function _extends(){return _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_extends.apply(this,arguments)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys(n,!0).forEach(function(r){_defineProperty(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _possibleConstructorReturn(t,e){return e&&(_typeof(e)==="object"||typeof e=="function")?e:_assertThisInitialized(t)}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_getPrototypeOf(t)}function _assertThisInitialized(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},_setPrototypeOf(t,e)}var ORIENT_MAP={xAxis:["bottom","top"],yAxis:["left","right"]},originCoordinate={x:0,y:0},generateCategoricalChart=function t(e){var n=e.chartName,r=e.GraphicalChild,o=e.eventType,p=o===void 0?"axis":o,u=e.axisComponents,l=e.legendContent,f=e.formatAxisMap,h=e.defaultProps,d=e.propTypes,m=function(v){_inherits(_,v);function _(T){var g;_classCallCheck(this,_),g=_possibleConstructorReturn(this,_getPrototypeOf(_).call(this,T)),g.handleLegendBBoxUpdate=function(b){if(b&&g.legendInstance){var w=g.state,S=w.dataStartIndex,A=w.dataEndIndex,O=w.updateId;g.setState(g.updateStateOfAxisMapsOffsetAndStackGroups({props:g.props,dataStartIndex:S,dataEndIndex:A,updateId:O}))}},g.handleReceiveSyncEvent=function(b,w,S){var A=g.props,O=A.syncId,C=A.layout,M=g.state.updateId;if(O===b&&w!==g.uniqueChartId){var I=S.dataStartIndex,N=S.dataEndIndex;if(!isNil_1(S.dataStartIndex)||!isNil_1(S.dataEndIndex))g.setState(_objectSpread({dataStartIndex:I,dataEndIndex:N},g.updateStateOfAxisMapsOffsetAndStackGroups({props:g.props,dataStartIndex:I,dataEndIndex:N,updateId:M})));else if(isNil_1(S.activeTooltipIndex))g.setState(S);else{var D=S.chartX,B=S.chartY,L=S.activeTooltipIndex,W=g.state,z=W.offset,U=W.tooltipTicks;if(!z)return;var G=_objectSpread({},z,{x:z.left,y:z.top}),V=Math.min(D,G.x+G.width),K=Math.min(B,G.y+G.height),Z=U[L]&&U[L].value,it=g.getTooltipContent(L),ot=U[L]?{x:C==="horizontal"?U[L].coordinate:V,y:C==="horizontal"?K:U[L].coordinate}:originCoordinate;g.setState(_objectSpread({},S,{activeLabel:Z,activeCoordinate:ot,activePayload:it}))}}},g.handleBrushChange=function(b){var w=b.startIndex,S=b.endIndex;if(w!==g.state.dataStartIndex||S!==g.state.dataEndIndex){var A=g.state.updateId;g.setState(function(){return _objectSpread({dataStartIndex:w,dataEndIndex:S},g.updateStateOfAxisMapsOffsetAndStackGroups({props:g.props,dataStartIndex:w,dataEndIndex:S,updateId:A}))}),g.triggerSyncEvent({dataStartIndex:w,dataEndIndex:S})}},g.handleMouseEnter=function(b){var w=g.props.onMouseEnter,S=g.getMouseInfo(b);if(S){var A=_objectSpread({},S,{isTooltipActive:!0});g.setState(A),g.triggerSyncEvent(A),isFunction_1(w)&&w(A,b)}},g.triggeredAfterMouseMove=function(b){var w=g.props.onMouseMove,S=g.getMouseInfo(b),A=S?_objectSpread({},S,{isTooltipActive:!0}):{isTooltipActive:!1};g.setState(A),g.triggerSyncEvent(A),isFunction_1(w)&&w(A,b)},g.handleItemMouseEnter=function(b){g.setState(function(){return{isTooltipActive:!0,activeItem:b,activePayload:b.tooltipPayload,activeCoordinate:b.tooltipPosition||{x:b.cx,y:b.cy}}})},g.handleItemMouseLeave=function(){g.setState(function(){return{isTooltipActive:!1}})},g.handleMouseMove=function(b){b&&isFunction_1(b.persist)&&b.persist(),g.triggeredAfterMouseMove(b)},g.handleMouseLeave=function(b){var w=g.props.onMouseLeave,S={isTooltipActive:!1};g.setState(S),g.triggerSyncEvent(S),isFunction_1(w)&&w(S,b)},g.handleOuterEvent=function(b){var w=getReactEventByType(b);if(w&&isFunction_1(g.props[w])){var S=g.getMouseInfo(b),A=g.props[w];A(S,b)}},g.handleClick=function(b){var w=g.props.onClick;if(isFunction_1(w)){var S=g.getMouseInfo(b);w(S,b)}},g.handleMouseDown=function(b){var w=g.props.onMouseDown;if(isFunction_1(w)){var S=g.getMouseInfo(b);w(S,b)}},g.handleMouseUp=function(b){var w=g.props.onMouseUp;if(isFunction_1(w)){var S=g.getMouseInfo(b);w(S,b)}},g.handleTouchMove=function(b){b.changedTouches!=null&&b.changedTouches.length>0&&g.handleMouseMove(b.changedTouches[0])},g.handleTouchStart=function(b){b.changedTouches!=null&&b.changedTouches.length>0&&g.handleMouseDown(b.changedTouches[0])},g.handleTouchEnd=function(b){b.changedTouches!=null&&b.changedTouches.length>0&&g.handleMouseUp(b.changedTouches[0])},g.verticalCoordinatesGenerator=function(b){var w=b.xAxis,S=b.width,A=b.height,O=b.offset;return getCoordinatesOfGrid(CartesianAxis$1.getTicks(_objectSpread({},CartesianAxis$1.defaultProps,{},w,{ticks:getTicksOfAxis(w,!0),viewBox:{x:0,y:0,width:S,height:A}})),O.left,O.left+O.width)},g.horizontalCoordinatesGenerator=function(b){var w=b.yAxis,S=b.width,A=b.height,O=b.offset;return getCoordinatesOfGrid(CartesianAxis$1.getTicks(_objectSpread({},CartesianAxis$1.defaultProps,{},w,{ticks:getTicksOfAxis(w,!0),viewBox:{x:0,y:0,width:S,height:A}})),O.top,O.top+O.height)},g.axesTicksGenerator=function(b){return getTicksOfAxis(b,!0)},g.tooltipTicksGenerator=function(b){var w=getAnyElementOfObject(b),S=getTicksOfAxis(w,!1,!0);return{tooltipTicks:S,orderedTooltipTicks:sortBy_1(S,function(A){return A.coordinate}),tooltipAxis:w,tooltipAxisBandSize:getBandSizeOfAxis(w)}},g.renderCursor=function(b){var w=g.state,S=w.isTooltipActive,A=w.activeCoordinate,O=w.activePayload,C=w.offset;if(!b||!b.props.cursor||!S||!A)return null;var M=g.props.layout,I,N=Curve$1;if(n==="ScatterChart")I=A,N=Cross$1;else if(n==="BarChart")I=g.getCursorRectangle(),N=Rectangle$1;else if(M==="radial"){var D=g.getCursorPoints(),B=D.cx,L=D.cy,W=D.radius,z=D.startAngle,U=D.endAngle;I={cx:B,cy:L,startAngle:z,endAngle:U,innerRadius:W,outerRadius:W},N=Sector$1}else I={points:g.getCursorPoints()},N=Curve$1;var G=b.key||"_recharts-cursor",V=_objectSpread({stroke:"#ccc",pointerEvents:"none"},C,{},I,{},getPresentationAttributes(b.props.cursor),{payload:O,key:G,className:"recharts-tooltip-cursor"});return reactExports.isValidElement(b.props.cursor)?reactExports.cloneElement(b.props.cursor,V):reactExports.createElement(N,V)},g.renderPolarAxis=function(b,w,S){var A=b.type.axisType,O=g.state["".concat(A,"Map")],C=O[b.props["".concat(A,"Id")]];return reactExports.cloneElement(b,_objectSpread({},C,{className:A,key:b.key||"".concat(w,"-").concat(S),ticks:getTicksOfAxis(C,!0)}))},g.renderXAxis=function(b,w,S){var A=g.state.xAxisMap,O=A[b.props.xAxisId];return g.renderAxis(O,b,w,S)},g.renderYAxis=function(b,w,S){var A=g.state.yAxisMap,O=A[b.props.yAxisId];return g.renderAxis(O,b,w,S)},g.renderGrid=function(b){var w=g.state,S=w.xAxisMap,A=w.yAxisMap,O=w.offset,C=g.props,M=C.width,I=C.height,N=getAnyElementOfObject(S),D=find_1(A,function(W){return every_1(W.domain,Number.isFinite)}),B=D||getAnyElementOfObject(A),L=b.props||{};return reactExports.cloneElement(b,{key:b.key||"grid",x:isNumber(L.x)?L.x:O.left,y:isNumber(L.y)?L.y:O.top,width:isNumber(L.width)?L.width:O.width,height:isNumber(L.height)?L.height:O.height,xAxis:N,yAxis:B,offset:O,chartWidth:M,chartHeight:I,verticalCoordinatesGenerator:L.verticalCoordinatesGenerator||g.verticalCoordinatesGenerator,horizontalCoordinatesGenerator:L.horizontalCoordinatesGenerator||g.horizontalCoordinatesGenerator})},g.renderPolarGrid=function(b){var w=g.state,S=w.radiusAxisMap,A=w.angleAxisMap,O=getAnyElementOfObject(S),C=getAnyElementOfObject(A),M=C.cx,I=C.cy,N=C.innerRadius,D=C.outerRadius;return reactExports.cloneElement(b,{polarAngles:getTicksOfAxis(C,!0).map(function(B){return B.coordinate}),polarRadius:getTicksOfAxis(O,!0).map(function(B){return B.coordinate}),cx:M,cy:I,innerRadius:N,outerRadius:D,key:b.key||"polar-grid"})},g.renderBrush=function(b){var w=g.props,S=w.margin,A=w.data,O=g.state,C=O.offset,M=O.dataStartIndex,I=O.dataEndIndex,N=O.updateId;return reactExports.cloneElement(b,{key:b.key||"_recharts-brush",onChange:combineEventHandlers(g.handleBrushChange,null,b.props.onChange),data:A,x:isNumber(b.props.x)?b.props.x:C.left,y:isNumber(b.props.y)?b.props.y:C.top+C.height+C.brushBottom-(S.bottom||0),width:isNumber(b.props.width)?b.props.width:C.width,startIndex:M,endIndex:I,updateId:"brush-".concat(N)})},g.renderReferenceElement=function(b,w,S){if(!b)return null;var A=_assertThisInitialized(g),O=A.clipPathId,C=g.state,M=C.xAxisMap,I=C.yAxisMap,N=C.offset,D=b.props,B=D.xAxisId,L=D.yAxisId;return reactExports.cloneElement(b,{key:b.key||"".concat(w,"-").concat(S),xAxis:M[B],yAxis:I[L],viewBox:{x:N.left,y:N.top,width:N.width,height:N.height},clipPathId:O})},g.renderGraphicChild=function(b,w,S){var A=g.filterFormatItem(b,w,S);if(!A)return null;var O=reactExports.cloneElement(b,A.props),C=g.state,M=C.isTooltipActive,I=C.tooltipAxis,N=C.activeTooltipIndex,D=C.activeLabel,B=g.props.children,L=findChildByType(B,Tooltip$1),W=A.props,z=W.points,U=W.isRange,G=W.baseLine,V=A.item.props,K=V.activeDot,Z=V.hide,it=!Z&&M&&L&&K&&N>=0;function ot(Q){return I.dataKey(Q.payload)}if(it){var tt,rt;if(I.dataKey&&!I.allowDuplicatedCategory){var st=typeof I.dataKey=="function"?ot:"payload.".concat(I.dataKey);tt=findEntryInArray(z,st,D),rt=U&&G&&findEntryInArray(G,st,D)}else tt=z[N],rt=U&&G&&G[N];if(!isNil_1(tt))return[O].concat(_toConsumableArray(g.renderActivePoints({item:A,activePoint:tt,basePoint:rt,childIndex:N,isRange:U})))}return U?[O,null,null]:[O,null]},g.renderCustomized=function(b){return reactExports.cloneElement(b,_objectSpread({},g.props,{},g.state))};var $=g.constructor.createDefaultState(T),E=0;return g.state=_objectSpread({},$,{updateId:0},g.updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread({props:T},$,{updateId:E}))),g.uniqueChartId=isNil_1(T.id)?uniqueId("recharts"):T.id,g.clipPathId="".concat(g.uniqueChartId,"-clip"),T.throttleDelay&&(g.triggeredAfterMouseMove=throttle_1(g.triggeredAfterMouseMove,T.throttleDelay)),g}return _createClass(_,[{key:"componentDidMount",value:function(){isNil_1(this.props.syncId)||this.addListener()}},{key:"componentWillReceiveProps",value:function(g){var $=this,E=this.props,b=E.data,w=E.children,S=E.width,A=E.height,O=E.layout,C=E.stackOffset,M=E.margin,I=this.state.updateId;if(g.data!==b||g.width!==S||g.height!==A||g.layout!==O||g.stackOffset!==C||!shallowEqual(g.margin,M)){var N=this.constructor.createDefaultState(g);this.setState(_objectSpread({},N,{updateId:I+1},this.updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread({props:g},N,{updateId:I+1}))))}else if(!isChildrenEqual(g.children,w)){var D=!isNil_1(g.data),B=D?I:I+1;this.setState(function(L){return _objectSpread({updateId:B},$.updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread({props:g},L,{updateId:B})))})}isNil_1(this.props.syncId)&&!isNil_1(g.syncId)&&this.addListener(),!isNil_1(this.props.syncId)&&isNil_1(g.syncId)&&this.removeListener()}},{key:"componentWillUnmount",value:function(){isNil_1(this.props.syncId)||this.removeListener(),typeof this.triggeredAfterMouseMove.cancel=="function"&&this.triggeredAfterMouseMove.cancel()}},{key:"getAxisMap",value:function(g,$){var E=$.axisType,b=E===void 0?"xAxis":E,w=$.AxisComp,S=$.graphicalItems,A=$.stackGroups,O=$.dataStartIndex,C=$.dataEndIndex,M=g.children,I="".concat(b,"Id"),N=findAllByType(M,w),D={};return N&&N.length?D=this.getAxisMapByAxes(g,{axes:N,graphicalItems:S,axisType:b,axisIdKey:I,stackGroups:A,dataStartIndex:O,dataEndIndex:C}):S&&S.length&&(D=this.getAxisMapByItems(g,{Axis:w,graphicalItems:S,axisType:b,axisIdKey:I,stackGroups:A,dataStartIndex:O,dataEndIndex:C})),D}},{key:"getAxisMapByAxes",value:function(g,$){var E=this,b=$.axes,w=$.graphicalItems,S=$.axisType,A=$.axisIdKey,O=$.stackGroups,C=$.dataStartIndex,M=$.dataEndIndex,I=g.layout,N=g.children,D=g.stackOffset,B=isCategorialAxis(I,S),L=b.reduce(function(W,z){var U=z.props,G=U.type,V=U.dataKey,K=U.allowDataOverflow,Z=U.allowDuplicatedCategory,it=U.scale,ot=U.ticks,tt=z.props[A],rt=E.constructor.getDisplayedData(g,{graphicalItems:w.filter(function(q){return q.props[A]===tt}),dataStartIndex:C,dataEndIndex:M}),st=rt.length;if(!W[tt]){var Q,pt,ct;if(V){if(Q=getDomainOfDataByKey(rt,V,G),G==="category"&&B){var H=hasDuplicate(Q);Z&&H?(pt=Q,Q=range_1(0,st)):Z||(Q=parseDomainOfCategoryAxis(z.props.domain,Q,z).reduce(function(q,F){return q.indexOf(F)>=0?q:[].concat(_toConsumableArray(q),[F])},[]))}else if(G==="category")Z?Q=Q.filter(function(q){return q!==""&&!isNil_1(q)}):Q=parseDomainOfCategoryAxis(z.props.domain,Q,z).reduce(function(q,F){return q.indexOf(F)>=0||F===""||isNil_1(F)?q:[].concat(_toConsumableArray(q),[F])},[]);else if(G==="number"){var Y=parseErrorBarsOfAxis(rt,w.filter(function(q){return q.props[A]===tt&&!q.props.hide}),V,S);Y&&(Q=Y)}B&&(G==="number"||it!=="auto")&&(ct=getDomainOfDataByKey(rt,V,"category"))}else B?Q=range_1(0,st):O&&O[tt]&&O[tt].hasStack&&G==="number"?Q=D==="expand"?[0,1]:getDomainOfStackGroups(O[tt].stackGroups,C,M):Q=getDomainOfItemsWithSameAxis(rt,w.filter(function(q){return q.props[A]===tt&&!q.props.hide}),G,!0);return G==="number"&&(Q=detectReferenceElementsDomain(N,Q,tt,S,ot),z.props.domain&&(Q=parseSpecifiedDomain(z.props.domain,Q,K))),_objectSpread({},W,_defineProperty({},tt,_objectSpread({},z.props,{axisType:S,domain:Q,categoricalDomain:ct,duplicateDomain:pt,originalDomain:z.props.domain,isCategorial:B,layout:I})))}return W},{});return L}},{key:"getAxisMapByItems",value:function(g,$){var E=$.graphicalItems,b=$.Axis,w=$.axisType,S=$.axisIdKey,A=$.stackGroups,O=$.dataStartIndex,C=$.dataEndIndex,M=g.layout,I=g.children,N=this.constructor.getDisplayedData(g,{graphicalItems:E,dataStartIndex:O,dataEndIndex:C}),D=N.length,B=isCategorialAxis(M,w),L=-1,W=E.reduce(function(z,U){var G=U.props[S];if(!z[G]){L++;var V;return B?V=range_1(0,D):A&&A[G]&&A[G].hasStack?(V=getDomainOfStackGroups(A[G].stackGroups,O,C),V=detectReferenceElementsDomain(I,V,G,w)):(V=parseSpecifiedDomain(b.defaultProps.domain,getDomainOfItemsWithSameAxis(N,E.filter(function(K){return K.props[S]===G&&!K.props.hide}),"number"),b.defaultProps.allowDataOverflow),V=detectReferenceElementsDomain(I,V,G,w)),_objectSpread({},z,_defineProperty({},G,_objectSpread({axisType:w},b.defaultProps,{hide:!0,orientation:ORIENT_MAP[w]&&ORIENT_MAP[w][L%2],domain:V,originalDomain:b.defaultProps.domain,isCategorial:B,layout:M})))}return z},{});return W}},{key:"getActiveCoordinate",value:function(g,$,E){var b=this.props.layout,w=g.find(function(M){return M&&M.index===$});if(w){if(b==="horizontal")return{x:w.coordinate,y:E.y};if(b==="vertical")return{x:E.x,y:w.coordinate};if(b==="centric"){var S=w.coordinate,A=E.radius;return _objectSpread({},E,{},polarToCartesian(E.cx,E.cy,A,S),{angle:S,radius:A})}var O=w.coordinate,C=E.angle;return _objectSpread({},E,{},polarToCartesian(E.cx,E.cy,O,C),{angle:C,radius:O})}return originCoordinate}},{key:"getMouseInfo",value:function(g){if(!this.container)return null;var $=getOffset(this.container),E=calculateChartCoordinate(g,$),b=this.inRange(E.chartX,E.chartY);if(!b)return null;var w=this.state,S=w.xAxisMap,A=w.yAxisMap;if(p!=="axis"&&S&&A){var O=getAnyElementOfObject(S).scale,C=getAnyElementOfObject(A).scale,M=O&&O.invert?O.invert(E.chartX):null,I=C&&C.invert?C.invert(E.chartY):null;return _objectSpread({},E,{xValue:M,yValue:I})}var N=this.state,D=N.orderedTooltipTicks,B=N.tooltipAxis,L=N.tooltipTicks,W=this.calculateTooltipPos(b),z=calculateActiveTickIndex(W,D,L,B);if(z>=0&&L){var U=L[z]&&L[z].value,G=this.getTooltipContent(z,U),V=this.getActiveCoordinate(D,z,b);return _objectSpread({},E,{activeTooltipIndex:z,activeLabel:U,activePayload:G,activeCoordinate:V})}return null}},{key:"getTooltipContent",value:function(g,$){var E=this.state,b=E.graphicalItems,w=E.tooltipAxis,S=this.constructor.getDisplayedData(this.props,this.state);return g<0||!b||!b.length||g>=S.length?null:b.reduce(function(A,O){var C=O.props.hide;if(C)return A;var M=O.props,I=M.dataKey,N=M.name,D=M.unit,B=M.formatter,L=M.data,W=M.tooltipType,z;return w.dataKey&&!w.allowDuplicatedCategory?z=findEntryInArray(L||S,w.dataKey,$):z=L&&L[g]||S[g],z?[].concat(_toConsumableArray(A),[_objectSpread({},getPresentationAttributes(O),{dataKey:I,unit:D,formatter:B,name:N||I,color:getMainColorOfGraphicItem(O),value:getValueByDataKey(z,I),type:W,payload:z})]):A},[])}},{key:"getFormatItems",value:function(g,$){var E=this,b=$.graphicalItems,w=$.stackGroups,S=$.offset,A=$.updateId,O=$.dataStartIndex,C=$.dataEndIndex,M=g.barSize,I=g.layout,N=g.barGap,D=g.barCategoryGap,B=g.maxBarSize,L=this.constructor.getAxisNameByLayout(I),W=L.numericAxisName,z=L.cateAxisName,U=this.constructor.hasBar(b),G=U&&getBarSizeList({barSize:M,stackGroups:w}),V=[];return b.forEach(function(K,Z){var it=E.constructor.getDisplayedData(g,{dataStartIndex:O,dataEndIndex:C},K),ot=K.props,tt=ot.dataKey,rt=ot.maxBarSize,st=K.props["".concat(W,"Id")],Q=K.props["".concat(z,"Id")],pt=u.reduce(function(nt,at){var ut,ft=$["".concat(at.axisType,"Map")],dt=K.props["".concat(at.axisType,"Id")],ht=ft&&ft[dt];return _objectSpread({},nt,(ut={},_defineProperty(ut,at.axisType,ht),_defineProperty(ut,"".concat(at.axisType,"Ticks"),getTicksOfAxis(ht)),ut))},{}),ct=pt[z],H=pt["".concat(z,"Ticks")],Y=w&&w[st]&&w[st].hasStack&&getStackedDataOfItem(K,w[st].stackGroups),q=getBandSizeOfAxis(ct,H),F=isNil_1(rt)?B:rt,et=U&&getBarPosition({barGap:N,barCategoryGap:D,bandSize:q,sizeList:G[Q],maxBarSize:F}),X=K&&K.type&&K.type.getComposedData;if(X){var J;V.push({props:_objectSpread({},X(_objectSpread({},pt,{displayedData:it,props:g,dataKey:tt,item:K,bandSize:q,barPosition:et,offset:S,stackedData:Y,layout:I,dataStartIndex:O,dataEndIndex:C,onItemMouseLeave:combineEventHandlers(E.handleItemMouseLeave,null,K.props.onMouseLeave),onItemMouseEnter:combineEventHandlers(E.handleItemMouseEnter,null,K.props.onMouseEnter)})),(J={key:K.key||"item-".concat(Z)},_defineProperty(J,W,pt[W]),_defineProperty(J,z,pt[z]),_defineProperty(J,"animationId",A),J)),childIndex:parseChildIndex(K,g.children),item:K})}}),V}},{key:"getCursorRectangle",value:function(){var g=this.props.layout,$=this.state,E=$.activeCoordinate,b=$.offset,w=$.tooltipAxisBandSize,S=w/2;return{stroke:"none",fill:"#ccc",x:g==="horizontal"?E.x-S:b.left+.5,y:g==="horizontal"?b.top+.5:E.y-S,width:g==="horizontal"?w:b.width-1,height:g==="horizontal"?b.height-1:w}}},{key:"getCursorPoints",value:function(){var g=this.props.layout,$=this.state,E=$.activeCoordinate,b=$.offset,w,S,A,O;if(g==="horizontal")w=E.x,A=w,S=b.top,O=b.top+b.height;else if(g==="vertical")S=E.y,O=S,w=b.left,A=b.left+b.width;else if(!isNil_1(E.cx)||!isNil_1(E.cy))if(g==="centric"){var C=E.cx,M=E.cy,I=E.innerRadius,N=E.outerRadius,D=E.angle,B=polarToCartesian(C,M,I,D),L=polarToCartesian(C,M,N,D);w=B.x,S=B.y,A=L.x,O=L.y}else{var W=E.cx,z=E.cy,U=E.radius,G=E.startAngle,V=E.endAngle,K=polarToCartesian(W,z,U,G),Z=polarToCartesian(W,z,U,V);return{points:[K,Z],cx:W,cy:z,radius:U,startAngle:G,endAngle:V}}return[{x:w,y:S},{x:A,y:O}]}},{key:"calculateTooltipPos",value:function(g){var $=this.props.layout;return $==="horizontal"?g.x:$==="vertical"?g.y:$==="centric"?g.angle:g.radius}},{key:"inRange",value:function(g,$){var E=this.props.layout;if(E==="horizontal"||E==="vertical"){var b=this.state.offset,w=g>=b.left&&g<=b.left+b.width&&$>=b.top&&$<=b.top+b.height;return w?{x:g,y:$}:null}var S=this.state,A=S.angleAxisMap,O=S.radiusAxisMap;if(A&&O){var C=getAnyElementOfObject(A);return inRangeOfSector({x:g,y:$},C)}return null}},{key:"parseEventsOfWrapper",value:function(){var g=this.props.children,$=findChildByType(g,Tooltip$1),E=$&&p==="axis"?{onMouseEnter:this.handleMouseEnter,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd}:{},b=filterEventAttributes(this.props,this.handleOuterEvent);return _objectSpread({},b,{},E)}},{key:"updateStateOfAxisMapsOffsetAndStackGroups",value:function(g){var $=this,E=g.props,b=g.dataStartIndex,w=g.dataEndIndex,S=g.updateId;if(!validateWidthHeight({props:E}))return null;var A=E.children,O=E.layout,C=E.stackOffset,M=E.data,I=E.reverseStackOrder,N=this.constructor.getAxisNameByLayout(O),D=N.numericAxisName,B=N.cateAxisName,L=findAllByType(A,r),W=getStackGroupsByAxisId(M,L,"".concat(D,"Id"),"".concat(B,"Id"),C,I),z=u.reduce(function(Z,it){var ot="".concat(it.axisType,"Map");return _objectSpread({},Z,_defineProperty({},ot,$.getAxisMap(E,_objectSpread({},it,{graphicalItems:L,stackGroups:it.axisType===D&&W,dataStartIndex:b,dataEndIndex:w}))))},{}),U=this.calculateOffset(_objectSpread({},z,{props:E,graphicalItems:L}));Object.keys(z).forEach(function(Z){z[Z]=f(E,z[Z],U,Z.replace("Map",""),n)});var G=z["".concat(B,"Map")],V=this.tooltipTicksGenerator(G),K=this.getFormatItems(E,_objectSpread({},z,{dataStartIndex:b,dataEndIndex:w,updateId:S,graphicalItems:L,stackGroups:W,offset:U}));return _objectSpread({formatedGraphicalItems:K,graphicalItems:L,offset:U,stackGroups:W},V,{},z)}},{key:"addListener",value:function(){eventCenter.on(SYNC_EVENT,this.handleReceiveSyncEvent),eventCenter.setMaxListeners&&eventCenter._maxListeners&&eventCenter.setMaxListeners(eventCenter._maxListeners+1)}},{key:"removeListener",value:function(){eventCenter.removeListener(SYNC_EVENT,this.handleReceiveSyncEvent),eventCenter.setMaxListeners&&eventCenter._maxListeners&&eventCenter.setMaxListeners(eventCenter._maxListeners-1)}},{key:"calculateOffset",value:function(g){var $=g.props,E=g.graphicalItems,b=g.xAxisMap,w=b===void 0?{}:b,S=g.yAxisMap,A=S===void 0?{}:S,O=$.width,C=$.height,M=$.children,I=$.margin||{},N=findChildByType(M,Brush$1),D=findChildByType(M,Legend$1),B=Object.keys(A).reduce(function(G,V){var K=A[V],Z=K.orientation;return!K.mirror&&!K.hide?_objectSpread({},G,_defineProperty({},Z,G[Z]+K.width)):G},{left:I.left||0,right:I.right||0}),L=Object.keys(w).reduce(function(G,V){var K=w[V],Z=K.orientation;return!K.mirror&&!K.hide?_objectSpread({},G,_defineProperty({},Z,G[Z]+K.height)):G},{top:I.top||0,bottom:I.bottom||0}),W=_objectSpread({},L,{},B),z=W.bottom;if(N&&(W.bottom+=N.props.height||Brush$1.defaultProps.height),D&&this.legendInstance){var U=this.legendInstance.getBBox();W=appendOffsetOfLegend(W,E,$,U)}return _objectSpread({brushBottom:z},W,{width:O-W.left-W.right,height:C-W.top-W.bottom})}},{key:"triggerSyncEvent",value:function(g){var $=this.props.syncId;isNil_1($)||eventCenter.emit(SYNC_EVENT,$,this.uniqueChartId,g)}},{key:"filterFormatItem",value:function(g,$,E){for(var b=this.state.formatedGraphicalItems,w=0,S=b.length;w<S;w++){var A=b[w];if(A.item===g||A.props.key===g.key||$===getDisplayName(A.item.type)&&E===A.childIndex)return A}return null}},{key:"renderAxis",value:function(g,$,E,b){var w=this.props,S=w.width,A=w.height;return React.createElement(CartesianAxis$1,_extends({},g,{className:"recharts-".concat(g.axisType," ").concat(g.axisType),key:$.key||"".concat(E,"-").concat(b),viewBox:{x:0,y:0,width:S,height:A},ticksGenerator:this.axesTicksGenerator}))}},{key:"renderLegend",value:function(){var g=this,$=this.state.formatedGraphicalItems,E=this.props,b=E.children,w=E.width,S=E.height,A=this.props.margin||{},O=w-(A.left||0)-(A.right||0),C=S-(A.top||0)-(A.bottom||0),M=getLegendProps({children:b,formatedGraphicalItems:$,legendWidth:O,legendHeight:C,legendContent:l});if(!M)return null;var I=M.item,N=_objectWithoutProperties(M,["item"]);return reactExports.cloneElement(I,_objectSpread({},N,{chartWidth:w,chartHeight:S,margin:A,ref:function(B){g.legendInstance=B},onBBoxUpdate:this.handleLegendBBoxUpdate}))}},{key:"renderTooltip",value:function(){var g=this.props.children,$=findChildByType(g,Tooltip$1);if(!$)return null;var E=this.state,b=E.isTooltipActive,w=E.activeCoordinate,S=E.activePayload,A=E.activeLabel,O=E.offset;return reactExports.cloneElement($,{viewBox:_objectSpread({},O,{x:O.left,y:O.top}),active:b,label:A,payload:b?S:[],coordinate:w})}},{key:"renderActivePoints",value:function(g){var $=g.item,E=g.activePoint,b=g.basePoint,w=g.childIndex,S=g.isRange,A=[],O=$.props.key,C=$.item.props,M=C.activeDot,I=C.dataKey,N=_objectSpread({index:w,dataKey:I,cx:E.x,cy:E.y,r:4,fill:getMainColorOfGraphicItem($.item),strokeWidth:2,stroke:"#fff",payload:E.payload,value:E.value,key:"".concat(O,"-activePoint-").concat(w)},getPresentationAttributes(M),{},filterEventAttributes(M));return A.push(this.constructor.renderActiveDot(M,N,w)),b?A.push(this.constructor.renderActiveDot(M,_objectSpread({},N,{cx:b.x,cy:b.y,key:"".concat(O,"-basePoint-").concat(w)}),w)):S&&A.push(null),A}},{key:"renderClipPath",value:function(){var g=this.clipPathId,$=this.state.offset,E=$.left,b=$.top,w=$.height,S=$.width;return React.createElement("defs",null,React.createElement("clipPath",{id:g},React.createElement("rect",{x:E,y:b,height:w,width:S})))}},{key:"render",value:function(){var g=this;if(!validateWidthHeight(this))return null;var $=this.props,E=$.children,b=$.className,w=$.width,S=$.height,A=$.style,O=$.compact,C=_objectWithoutProperties($,["children","className","width","height","style","compact"]),M=getPresentationAttributes(C),I={CartesianGrid:{handler:this.renderGrid,once:!0},ReferenceArea:{handler:this.renderReferenceElement},ReferenceLine:{handler:this.renderReferenceElement},ReferenceDot:{handler:this.renderReferenceElement},XAxis:{handler:this.renderXAxis},YAxis:{handler:this.renderYAxis},Brush:{handler:this.renderBrush,once:!0},Bar:{handler:this.renderGraphicChild},Line:{handler:this.renderGraphicChild},Area:{handler:this.renderGraphicChild},Radar:{handler:this.renderGraphicChild},RadialBar:{handler:this.renderGraphicChild},Scatter:{handler:this.renderGraphicChild},Pie:{handler:this.renderGraphicChild},Funnel:{handler:this.renderGraphicChild},Tooltip:{handler:this.renderCursor,once:!0},PolarGrid:{handler:this.renderPolarGrid,once:!0},PolarAngleAxis:{handler:this.renderPolarAxis},PolarRadiusAxis:{handler:this.renderPolarAxis},Customized:{handler:this.renderCustomized}};if(O)return React.createElement(Surface,_extends({},M,{width:w,height:S}),this.renderClipPath(),renderByOrder(E,I));var N=this.parseEventsOfWrapper();return React.createElement("div",_extends({className:classNames("recharts-wrapper",b),style:_objectSpread({position:"relative",cursor:"default",width:w,height:S},A)},N,{ref:function(B){g.container=B}}),React.createElement(Surface,_extends({},M,{width:w,height:S}),this.renderClipPath(),renderByOrder(E,I)),this.renderLegend(),this.renderTooltip())}}],[{key:"getAxisNameByLayout",value:function(g){return g==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:g==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:g==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}}},{key:"renderActiveDot",value:function(g,$){var E;return reactExports.isValidElement(g)?E=reactExports.cloneElement(g,$):isFunction_1(g)?E=g($):E=React.createElement(Dot$1,$),React.createElement(Layer,{className:"recharts-active-dot",key:$.key},E)}}]),_}(reactExports.Component);return m.displayName=n,m.propTypes=_objectSpread({syncId:propTypesExports.oneOfType([propTypesExports.string,propTypesExports.number]),compact:propTypesExports.bool,width:propTypesExports.number,height:propTypesExports.number,data:propTypesExports.arrayOf(propTypesExports.object),layout:propTypesExports.oneOf(["horizontal","vertical"]),stackOffset:propTypesExports.oneOf(["sign","expand","none","wiggle","silhouette"]),throttleDelay:propTypesExports.number,margin:propTypesExports.shape({top:propTypesExports.number,right:propTypesExports.number,bottom:propTypesExports.number,left:propTypesExports.number}),barCategoryGap:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),barGap:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),barSize:propTypesExports.oneOfType([propTypesExports.number,propTypesExports.string]),maxBarSize:propTypesExports.number,style:propTypesExports.object,className:propTypesExports.string,children:propTypesExports.oneOfType([propTypesExports.arrayOf(propTypesExports.node),propTypesExports.node]),defaultShowTooltip:propTypesExports.bool,onClick:propTypesExports.func,onMouseLeave:propTypesExports.func,onMouseEnter:propTypesExports.func,onMouseMove:propTypesExports.func,onMouseDown:propTypesExports.func,onMouseUp:propTypesExports.func,reverseStackOrder:propTypesExports.bool,id:propTypesExports.string},d),m.defaultProps=_objectSpread({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1},h),m.createDefaultState=function(v){var _=v.children,T=v.defaultShowTooltip,g=findChildByType(_,Brush$1),$=g&&g.props&&g.props.startIndex||0,E=g&&g.props&&g.props.endIndex||v.data&&v.data.length-1||0;return{chartX:0,chartY:0,dataStartIndex:$,dataEndIndex:E,activeTooltipIndex:-1,isTooltipActive:isNil_1(T)?!1:T}},m.hasBar=function(v){return!v||!v.length?!1:v.some(function(_){var T=getDisplayName(_&&_.type);return T&&T.indexOf("Bar")>=0})},m.getDisplayedData=function(v,_,T){var g=_.graphicalItems,$=_.dataStartIndex,E=_.dataEndIndex,b=(g||[]).reduce(function(S,A){var O=A.props.data;return O&&O.length?[].concat(_toConsumableArray(S),_toConsumableArray(O)):S},[]);if(b&&b.length>0)return b;if(T&&T.props&&T.props.data&&T.props.data.length>0)return T.props.data;var w=v.data;return w&&w.length&&isNumber($)&&isNumber(E)?w.slice($,E+1):[]},m};const generateCategoricalChart$1=generateCategoricalChart,BarChart=generateCategoricalChart$1({chartName:"BarChart",GraphicalChild:Bar$1,axisComponents:[{axisType:"xAxis",AxisComp:XAxis$1},{axisType:"yAxis",AxisComp:YAxis$1}],formatAxisMap});class GeneralWorkReportTracker extends reactExports.PureComponent{constructor(){super(...arguments);lt(this,"state",{focusBar:null});lt(this,"onMouseMove",n=>{n.isTooltipActive?this.setState({focusBar:n.activeTooltipIndex}):this.setState({focusBar:null})})}render(){const{data:n,cms:r}=this.props,{focusBar:o}=this.state;return jsx(ResponsiveContainer$1,{children:jsxs(BarChart,{data:n,barGap:12,onMouseMove:this.onMouseMove,children:[jsx(XAxis$1,{dataKey:"name"}),jsx(Tooltip$1,{}),jsx(Legend$1,{}),jsx(Bar$1,{dataKey:r.projects,fill:`var(--${window.APP_PRIMARY_COLOR})`,children:n.map((p,u)=>jsx(Cell,{fill:`var(--${window.APP_PRIMARY_COLOR})`,fillOpacity:o===u?1:.2},JSON.stringify(p)))})]})})}}const prefix="/api/",resetDashboard=()=>({type:DASHBOARD_RESET}),dashboardStart=()=>({type:DASHBOARD_START}),dashboardSuccess=t=>({type:DASHBOARD_SUCCESS,...t}),dashboardFail=t=>({type:DASHBOARD_FAIL,error:t}),getDashboard=()=>async(t,e)=>{t(dashboardStart());const{role:n}=e().auth;try{const r=localStorage.getItem("token"),p=await(await fetch(`${prefix+n}/dashboard`,{headers:{Authorization:r}})).json();t(dashboardSuccess(p))}catch(r){console.log(r),t(dashboardFail(r))}},Dashboard$1="";class Dashboard extends reactExports.Component{constructor(){super(...arguments);lt(this,"state",{isMounted:!1})}componentDidMount(){this.props.get(),this.setState({isMounted:!0})}componentWillUnmount(){this.props.reset()}render(){const{auth:{role:n},content:{cms:{pages:{backend:{pages:{dashboard:{[n]:{icon:r,title:o,subtitle:p,blocks:u,general_report:l}}}}}}},backend:{dashboard:{loading:f,error:h,message:d,blocksData:m={},generalReport:v={},generalReportTrackerData:_=[]}}}=this.props;this.state.isMounted||(document.title=`${this.props.content.cms.pages.backend.sidebar.menu.dashboard.title} | ${document.head.querySelector('meta[name="base-title"]').content}`);let T=null;const g=jsx(Error$1,{err:h}),$=this.props.location.state?jsx(Feedback,{time:5e3,message:this.props.location.state.message}):null,E=jsx(Feedback,{message:d}),b=[{title:u.experiences,value:jsx("span",{className:"text-700 text-22",children:m.experiences}),icon:"fas fa-flask"},{title:u.skills,value:jsx("span",{className:"text-700 text-22",children:m.skills}),icon:"fas fa-chalkboard-teacher"},{title:u.projects,value:jsx("span",{className:"text-700 text-22",children:m.projects}),icon:"fas fa-project-diagram"},{title:u.technologies,value:jsx("span",{className:"text-700 text-22",children:m.technologies}),icon:"fas fa-microchip"}].map((w,S)=>jsx(Card,{...updateObject(w,{color:window.COLORS[S],addon:jsx("i",{className:`${w.icon} fa-fw text-31 text-${window.COLORS[S]}`})})},S));return T=jsxs("div",{className:"content",children:[g,$,E,jsxs("div",{className:"blocks",children:[jsx(Row,{className:"d-none d-md-flex mb-5",children:b}),jsx("div",{className:"d-md-none",children:jsx(OwlCarousel$1,{options:{items:1,center:!1,loop:!0,dots:!0},children:b})})]}),jsxs("section",{className:"general-report shadow",children:[jsx("div",{className:"icon",children:jsx("i",{className:"far fa-chart-bar"})}),jsxs("div",{className:"flex-fill",children:[jsx("div",{className:"header",children:jsxs("div",{children:[jsxs("div",{className:"title",children:[l.title,jsx("i",{className:"fas fa-info-circle"})]}),jsx("div",{className:"subtitle",children:l.subtitle}),jsx("div",{className:"bold-line"})]})}),jsx("div",{className:"body",children:jsxs("div",{className:"row align-items-center",children:[jsx("div",{className:"col-lg-4",children:jsxs("div",{className:"total-projects",children:[jsx("div",{className:"text",children:l.total_projects}),jsx("div",{className:"value",children:v.projects})]})}),jsx("div",{className:"general-report-tracker col-lg-8",children:jsx(GeneralWorkReportTracker,{data:_,cms:l})})]})})]})]})]}),jsxs("div",{className:"Dashboard",children:[jsx(PageTitle,{title:o,subtitle:p,icon:r,children:jsx(Breadcrumb,{main:o})}),jsx(Loading,{loading:this.state.isMounted&&f,isAuthenticated:!0,children:T})]})}}const mapStateToProps=t=>({...t}),mapDispatchToProps=t=>({get:()=>t(getDashboard()),reset:()=>t(resetDashboard())}),index=withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard));export{index as default};
//# sourceMappingURL=index-71a656cc.js.map

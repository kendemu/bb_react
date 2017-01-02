"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header(props) {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

		_this.state = {
			categories: []
		};
		return _this;
	}

	_createClass(Header, [{
		key: "loadCategories",
		value: function loadCategories() {
			$.ajax({
				url: this.props.url,
				dataType: 'json',
				cache: false,
				success: function (categories) {
					this.setState({ categories: categories });
				}.bind(this),
				error: function (xhr, status, err) {
					console.error(this.props.url, status, err.toString());
				}.bind(this)
			});
		}
	}, {
		key: "componentWillMount",
		value: function componentWillMount() {
			this.loadCategories();
		}
	}, {
		key: "render",
		value: function render() {
			var header = this.state.categories.map(function (menu) {
				return React.createElement(
					"a",
					{ className: "col-md-2 col-xs-4 col-sm-4", styles: "color:white;font-size:1.5em", href: "#{menu.name}" },
					menu.name
				);
			});
			return React.createElement(
				"div",
				null,
				header
			);
		}
	}]);

	return Header;
}(React.Component);
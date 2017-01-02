"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuList = function (_React$Component) {
	_inherits(MenuList, _React$Component);

	function MenuList(props) {
		_classCallCheck(this, MenuList);

		var _this = _possibleConstructorReturn(this, (MenuList.__proto__ || Object.getPrototypeOf(MenuList)).call(this, props));

		_this.state = { menulistcateg: [] };
		return _this;
	}

	_createClass(MenuList, [{
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			this.render();
		}
	}, {
		key: "render",
		value: function render() {
			var categories = this.props.categories;
			var menus = categories.map(function (category) {
				return React.createElement(
					"div",
					{ className: "row" },
					React.createElement(MenuBigList, { category: category.name })
				);
			});
			var menulist = [];
			for (var i = 0; i < Math.ceil(menus.length / 3); i++) {
				menulist.push(React.createElement(
					"div",
					{ className: "row" },
					menus[3 * (i - 1)],
					menus[3 * (i - 1) + 1],
					menus[3 * (i - 1) + 2]
				));
			}
			return React.createElement(
				"div",
				null,
				menulist
			);
		}
	}]);

	return MenuList;
}(React.Component);

MenuList.propTypes = {
	categories: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

MenuList.defaultProps = {
	categories: []
};
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuBigList = function (_React$Component) {
	_inherits(MenuBigList, _React$Component);

	function MenuBigList(props) {
		_classCallCheck(this, MenuBigList);

		var _this = _possibleConstructorReturn(this, (MenuBigList.__proto__ || Object.getPrototypeOf(MenuBigList)).call(this, props));

		_this.state = { data: [] };
		return _this;
	}

	_createClass(MenuBigList, [{
		key: "componentWillUpdate",
		value: function componentWillUpdate() {
			console.log(this.props.category);
		}
	}, {
		key: "loadMenus",
		value: function loadMenus() {
			$.ajax({
				url: "/menus?category=" + this.props.category,
				dataType: 'json',
				cache: false,
				success: function (data) {
					this.setState({ data: data });
				}.bind(this),
				error: function (xhr, status, err) {
					console.error(this.props.category, status, err.toString());
				}.bind(this)
			});
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			this.loadMenus();
		}
	}, {
		key: "render",
		value: function render() {
			console.log("MenuListCateg rendered");
			console.log(this.props.category);
			if (this.props.category !== undefined) {
				var category = this.props.category;
				var foods = this.state.data.map(function (food) {
					return React.createElement(
						"div",
						{ className: "col-md-4 col-sm-4 btn-group", "data-toggle": "buttons" },
						React.createElement(
							"div",
							{ className: "menu-details" },
							React.createElement(MenuButton, { name: food.name, price: food.price })
						)
					);
				});
				return React.createElement(
					"div",
					null,
					React.createElement(
						"h3",
						null,
						category
					),
					foods
				);
			} else {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"h3",
						null,
						"loading categories..."
					)
				);
			}
		}
	}]);

	return MenuBigList;
}(React.Component);

MenuBigList.propTypes = {
	category: React.PropTypes.string.isRequired
};
MenuBigList.defaultProps = {
	category: ""
};
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuListContainer = function (_React$Component) {
			_inherits(MenuListContainer, _React$Component);

			function MenuListContainer(props) {
						_classCallCheck(this, MenuListContainer);

						var _this = _possibleConstructorReturn(this, (MenuListContainer.__proto__ || Object.getPrototypeOf(MenuListContainer)).call(this, props));

						_this.state = {
									categories: []
						};
						return _this;
			}

			_createClass(MenuListContainer, [{
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
									console.log("MenuListContainer rendered");
									console.log(this.state.categories);
									this.loadCategories();
									return React.createElement(MenuList, { categories: this.state.categories });
						}
			}]);

			return MenuListContainer;
}(React.Component);

//ReactDOM.render(
//    <MenuListContainer url="/categories" />,
//    document.getElementById('menus')
//);
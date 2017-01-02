"use strict";

var MenuButton = React.createClass({
			displayName: "MenuButton",
			getInitialState: function getInitialState() {
						return { count: 0 };
			},

			minusNumber: function minusNumber() {
						this.setState({ count: this.state.count - 1 });
			},
			plusNumber: function plusNumber() {
						this.setState({ count: this.state.count + 1 });
			},
			render: function render() {
						var name = this.props.name;
						var price = this.props.price;
						return React.createElement(
									"label",
									{ className: "menu-list-item col-md-12 panel panel-default" },
									React.createElement(
												"div",
												{ className: "panel-body" },
												React.createElement(
															"div",
															{ className: "row" },
															React.createElement(
																		"p",
																		{ className: "pull-left col-md-9 col-xs-9 col-sm-3", styles: "font-size:1.5em" },
																		name
															),
															React.createElement(
																		"p",
																		{ className: "pull-right col-md-3 col-xs-3 col-sm-3" },
																		React.createElement(
																					"h3",
																					null,
																					price
																		)
															)
												),
												React.createElement("button", { styles: "color:white", className: "glyphicon glyphicon-plus pull-left col-md-6 col-xs-6 col-sm-6 btn btn-danger", onClick: this.plusNumber }),
												React.createElement("button", { styles: "color:white", className: "glyphicon glyphicon-minus pull-right col-md-6 col-xs-6 col-sm-6 btn btn-primary", onClick: this.minusNumber }),
												React.createElement("div", { className: "clearfix" })
									)
						);
			}
});
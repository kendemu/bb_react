var MenuButton = React.createClass({
    getInitialState(){
	return { count: 0};
    },
    minusNumber: function(){
	this.setState({count: this.state.count - 1})
    },
    plusNumber: function(){
	this.setState({count: this.state.count + 1})
    },
    render: function(){
	var name = this.props.name;
	var price = this.props.price;
	return(
	    <label className="menu-list-item col-md-12 panel panel-default">
		<div className="panel-body">
		    <div className="row">
			<p className="pull-left col-md-9 col-xs-9 col-sm-3" styles="font-size:1.5em">{name}</p>
			<p className="pull-right col-md-3 col-xs-3 col-sm-3"><h3>{price}</h3></p>
		    </div>
		    <button styles="color:white" className="glyphicon glyphicon-plus pull-left col-md-6 col-xs-6 col-sm-6 btn btn-danger" onClick={this.plusNumber}></button>
		    <button styles="color:white" className="glyphicon glyphicon-minus pull-right col-md-6 col-xs-6 col-sm-6 btn btn-primary" onClick={this.minusNumber}></button>
		    <div className="clearfix"></div>
		</div>
	    </label>
	)
    }
});


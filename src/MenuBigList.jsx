class MenuBigList extends React.Component{
    constructor(props){
	super(props);
	this.state = {data: []};
    }
    componentWillUpdate(){
	console.log(this.props.category);
    }
    loadMenus(){
	$.ajax({
	    url: "/menus?category="+ this.props.category,
	    dataType: 'json',
	    cache: false,
	    success: function(data){
		this.setState({data: data});
	    }.bind(this),
	    error: function(xhr, status, err){
		console.error(this.props.category, status, err.toString());
	    }.bind(this)
	});
    }
    componentDidMount(){
	this.loadMenus();
    }
    render(){
	console.log("MenuListCateg rendered");
	console.log(this.props.category)
	if(this.props.category !== undefined){
	    var category = this.props.category;
	    var foods = this.state.data.map(function(food){
		return (
		    <div className="col-md-4 col-sm-4 btn-group" data-toggle="buttons">
			<div className="menu-details">
			    <MenuButton name={food.name} price={food.price} />
			</div>
		    </div>
		)
	    });
	    return(
		<div>
		    <h3>{category}</h3>
		    {foods}
		</div>
	    )
	}
	else {	
	    return(
		<div>
		    <h3>loading categories...</h3>
		</div>
		)
	}
    }
}

MenuBigList.propTypes = {
    category: React.PropTypes.string.isRequired
}
MenuBigList.defaultProps = {
    category: ""
}

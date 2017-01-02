class MenuListContainer extends React.Component{
    constructor(props){
	super(props);
	this.state = {
	    categories: []
	};
    }
    loadCategories(){
	$.ajax({
	    url: this.props.url,
	    dataType: 'json',
	    cache: false,
	    success: function(categories){
		this.setState({categories: categories});
	    }.bind(this),
	    error: function(xhr, status, err){
		console.error(this.props.url, status, err.toString());
	    }.bind(this)
	})
    }
    componentWillMount(){
	this.loadCategories();
    }
    render(){
	console.log("MenuListContainer rendered");
	console.log(this.state.categories);
	this.loadCategories();
	return (
	    <MenuList categories={this.state.categories} />
	);
    }
}


//ReactDOM.render(
//    <MenuListContainer url="/categories" />,
//    document.getElementById('menus')
//);

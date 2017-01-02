class Header extends React.Component{
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
	var header = this.state.categories.map(function(menu){
	    return (
		<a className="col-md-2 col-xs-4 col-sm-4" styles="color:white;font-size:1.5em" href="#{menu.name}">{menu.name}</a>
	    )
	});
	return (
	    <div>
		{header}
	    </div>
	);
    }
}

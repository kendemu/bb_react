class MenuList extends React.Component{
    constructor(props){
	super(props);
	this.state = {menulistcateg: []};
    }
    componentDidUpdate(){
	this.render();
    }
    render(){
	var categories = this.props.categories;
	var menus = categories.map(function(category){
	    return (
		<div className="row">
		    <MenuBigList category={category.name} />
		</div>
	    )
	});
	var menulist = [];
	for(var i = 0; i < Math.ceil(menus.length/3); i++){
	    menulist.push(
		<div className="row">
		    {menus[3 * (i - 1)]}
		    {menus[3 * (i - 1) + 1]}
		    {menus[3 * (i - 1) + 2]}
		</div>
		)
	}
	return(
	    <div>
		{menulist}
	    </div>
	);
    }
}

MenuList.propTypes = {
    categories: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

MenuList.defaultProps = {
    categories: []
}
 

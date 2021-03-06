import React, { Component } from "react";
import { Button, Container, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from 'react-transition-group'


import { connect } from "react-redux";
import { getItems , deleteItems} from "../actions/ItemActions";
import PropTypes from 'prop-types'

class ShoppingList extends Component {
	componentDidMount(){

		this.props.getItems()
	}

	onDeleteClick = (id)=>{
		this.props.deleteItems(id)
	}
	render() {
		const { items } = this.props.item;
		console.log(items)
		return (
			<div>
				<Container>
                    <ListGroup>
                        <TransitionGroup className="shopping-list">
                            {items.map(({_id,name})=>(
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button className="remove-btn" color="danger" size="sm" onClick={this.onDeleteClick.bind(this,_id)}>&times;</Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
				</Container>
			</div>
		);
	}
}
ShoppingList.propTypes = {
	getItems : PropTypes.func.isRequired,
	deleteItems : PropTypes.func.isRequired,
	item : PropTypes.object.isRequired
}
const mapStateToProps = (state) =>({
	item : state.item
})

export default connect(mapStateToProps,{getItems,deleteItems})(ShoppingList);

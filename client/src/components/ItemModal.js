import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addItem} from "../actions/ItemActions";
import { v4 as uuidv4 } from 'uuid';
import  { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
class ItemModal extends Component {
    state = {
        modal : false,
        name : ""
    }

    toggle = () =>{
        this.setState({
            modal : !this.state.modal,
        })
    }

    onChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault()

        const newItem = {
            name: this.state.name
        }

        this.props.addItem(newItem)
        this.toggle()
    }
    render() {
        return (
            <div>
                <Button onClick={this.toggle} style={{marginBottom:"2rem"}} color="dark">
                    Add Modal
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">
                                    Item
                                </Label>
                                <Input type="text" name="name" id="item" placeholder="Add shopping Item" onChange={this.onChange}/>
                                <Button color="dark" style={{marginTop:"2rem"}} block >Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
	item : state.item
})

export default connect(mapStateToProps,{addItem})(ItemModal)

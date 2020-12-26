import React, { Component } from 'react'
import { Table, Button, Input } from 'semantic-ui-react';

export default class ProductFormRow extends Component {

    constructor(props) {
        super(props);
        const { product } = props;
        this.state = {
            title: '',
            type: '',
            price: '',
            quantity: '',
            ...product
        }
    }

    onChangeField = e => {
        const { name , value } = e.target;
        this.setState({ [name]: value })
    };

    submitProductForm = () => {
        this.props.onSubmit(this.state);
        this.resetFields();
    };

    resetFields = () => {
        this.setState({
            title: '',
            type: '',
            price: '',
            quantity: '',
        })
    };
    isDisabled() {
        const { title, type, price, quantity } = this.state;
        return !(title && type && price && quantity)
    }
    render() {
        const { title, type, price, quantity } = this.state;
        const { onCancel } = this.props;
        return (
            <Table.Row>
                <Table.Cell>
                    <Input placeholder='Name' type="text" name='title' value={title} onChange={this.onChangeField}/>
                </Table.Cell>
                <Table.Cell>
                    <Input placeholder='Type' type="text" name='type' value={type} onChange={this.onChangeField}/>
                </Table.Cell>
                <Table.Cell>
                    <Input placeholder='Price' type="text" name='price' value={price} onChange={this.onChangeField}/>
                </Table.Cell>
                <Table.Cell>
                    <Input placeholder='Quantity' type="text" name='quantity' value={quantity} onChange={this.onChangeField}/>
                </Table.Cell>
                <Table.Cell style={{ width: 200 }}>
                    <Button size="small" disabled={this.isDisabled()} onClick={this.submitProductForm}>Submit</Button>
                    {onCancel && <Button size="small" onClick={onCancel}>Cancel</Button> }
                </Table.Cell>
            </Table.Row>
        )
    }
}

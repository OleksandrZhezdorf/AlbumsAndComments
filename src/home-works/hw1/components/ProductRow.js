import React, { Component } from 'react';
import { Table, Icon } from 'semantic-ui-react'
import ProductFormRow from './ProductFormRow';

export default class ProductRow extends Component {
    state = {
        editMode: false
    };

    onEdit = updatedProduct => {
        this.props.onEditProduct(updatedProduct);
        this.setState({ editMode: false });
    };

    onCancel = () => {
      this.setState({ editMode: false })
    };

    componentWillUnmount() {
      alert('I\'m removed' + this.props.product.name)
    }

  render() {
        const { product, onRemoveProduct } = this.props;
        const { editMode } = this.state;
        if (editMode) return <ProductFormRow onSubmit={this.onEdit} onCancel={this.onCancel} product={product} />
        return (
          <Table.Row>
              <Table.Cell>{product.title}</Table.Cell>
              <Table.Cell>{product.type}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
              <Table.Cell>{product.quantity}</Table.Cell>
              <Table.Cell>
                  <Icon name='edit' onClick={() => this.setState({ editMode: true })} />
                  <Icon name='trash'  onClick={() => onRemoveProduct(product.id)} />
              </Table.Cell>
          </Table.Row>
        )
    }
}

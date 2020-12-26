import React from 'react'
import { Table } from 'semantic-ui-react'
import ProductRow from './ProductRow'
import ProductFormRow from './ProductFormRow'

export default function ProductList({
    products,
    onRemoveProduct,
    onAddProduct,
    onEditProduct,
}) {
    return (
      <Table striped>
          <Table.Header>
              <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Type</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell>Quantity</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              products.map(product => (
                <ProductRow
                  onRemoveProduct={onRemoveProduct}
                  onEditProduct={onEditProduct}
                  key={product.id}
                  product={product}
                />))
            }
              <ProductFormRow onSubmit={onAddProduct} />
          </Table.Body>
      </Table>
    )
}

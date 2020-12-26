import React, { Component } from 'react'
import ProductList from './components/ProductList'

export default class Week1 extends Component {
    state = {
       products: [
           {
               id: '1',
               title: 'Samsung Galaxy S10',
               type: 'device',
               price: '800$',
               quantity: '10',
           },
           {
               id: '2',
               title: 'IPhone X',
               type: 'device',
               price: '600$',
               quantity: '10',
           },
           {
               id: '3',
               title: 'Платье',
               type: 'clothes',
               price: '50$',
               quantity: '5',
           }
       ],
    };

    removeProduct = id => {
        const { products } = this.state;
        this.setState({
            products: products.filter(product => product.id !== id)
        })
    };

    addProduct = newProduct => {
        const { products } = this.state;
        this.setState({
            products: [
                ...products,
                {
                    id: Math.random().toString(8),
                    ...newProduct
                }
            ]
        })
    };

    editProduct = updatedProduct => {
        const { products } = this.state;
        this.setState({
            products: products.map(product => product.id === updatedProduct.id ? updatedProduct : product)
        })
    };

    render() {
        return (
            <div className="week1">
                    <ProductList
                        onAddProduct={this.addProduct}
                        onEditProduct={this.editProduct}
                        onRemoveProduct={this.removeProduct}
                        products={this.state.products}
                    />
            </div>
        )
    }
}

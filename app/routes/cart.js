import Route from '@ember/routing/route';

// create controllers for your query, here is hardcoded!!!
export default class CartRoute extends Route {
    model(){
        const products = [
            // imaginary products with lot off different prices
            { price: 10},
            { price: 15},
            { price: 20}
        ]
        return products
    }
    // this one is removed to controller/cart.js
    // override controller hardcoded values
    // setupController(controller, model) {
    //     // inherit ...
    //     super.setupController(controller, model)
    //     const subtotal = model.reduce((acc, product) => {
    //         return acc + product.price
    //     }, 0)
    //     controller.set(
    //         'subtotal',
    //         subtotal 
    //     )

    // }
}

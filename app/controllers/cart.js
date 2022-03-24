import Controller from '@ember/controller';

export default class CartController extends Controller {
    get subtotal() {
        return this.model.reduce((xxx, item) =>{
            return xxx + item.price
        }, 0)
    }
    get tax() {
        return 0.2 * this.subtotal
    }
    get total() {
        return this.subtotal + this.tax
    }
}

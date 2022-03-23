import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
    // to be able to see item/:item_id, we must specify the model
    model(params){
        const{
            item_id
        } = params
        return item_id
    }
}

import Product from "../models/Product";
import ProductRepository from "../repositories/ProductRepository";

export default class ProductPutService {
    private repository: ProductRepository

    constructor(repository: ProductRepository) {
        this.repository = repository
    }

    public execute(Productcode: number, 
        {buyPrice, description, lovers,sellPrice,tags,id, code}: Product,):Product {
        const TrueProduct = this.repository.findByCode(Productcode)

        if (!TrueProduct) {
            throw Error('Produto inexistente')
            
        } else {
            this.repository.putProduct({
                buyPrice,
                code,
                description,
                lovers,
                sellPrice,
                tags,
                id
            });
            return TrueProduct
        }
    }
}


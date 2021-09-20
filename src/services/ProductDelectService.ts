import ProductRepository from "../repositories/ProductRepository";

export default class ProductDeleteService {
    private repository: ProductRepository

    constructor(repository: ProductRepository) {
        this.repository = repository
    }

    public execute(code:any): typeof code{
        const TrueProduct = this.repository.findByCode(code)

        if(!TrueProduct){
            throw Error('Produto inexistente')
        }else{
            const CodeProduct = code
            this.repository.deleteproduct(code)
            return CodeProduct
        }
    }


}
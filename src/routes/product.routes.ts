import { Router } from 'express';
import ProductRepository from '../repositories/ProductRepository';
import CreateProductService from '../services/CreateProductService';
import ProductDeleteService from '../services/ProductDelectService';

const productRouter = Router();
const productRepository = new ProductRepository();

productRouter.get('/', (request, response) => {
  response.json(productRepository.findAll());
});

productRouter.post('/', (request, response) => {
  try {
    const service = new CreateProductService(productRepository);
    const {
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    } = request.body;
    const produto = service.execute({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    });
    response.status(201).json(produto);
  } catch (err : any) {
    return response.status(400).json({ Erro: err.message });
  }
});
productRouter.delete('/:code', (request, response) => {
 try{
   const service = new ProductDeleteService(productRepository);
   const code = Number(request.params.code);

   service.execute(code);
   return response.status(200).json('Exclusão concuida')
 }catch(err: any){
   return response.status(400).json({Erro: err.message})
 }
});

export default productRouter;

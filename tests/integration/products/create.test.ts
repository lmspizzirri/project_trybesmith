import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app'
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('verifica que o produto é criado com sucesso', async () => {
    // Arrange - configuro as depencias do meu test
    const { createCorrectInput } = productsMock;
    const productInstance = ProductModel.build(createCorrectInput);
    console.log(productInstance);
    sinon.stub(ProductModel, 'create').resolves(productInstance);
    // Act - ato de chamar a funcao a ser testada
    const httpResponse = await chai.request(app).post('/products').send(createCorrectInput);
    // Assert - é onde verificamos o resultado esperado
    expect(httpResponse.status).to.equal(201);
  });
});

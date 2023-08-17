import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
    it('verifica que os produtos são listados com sucesso', async () => {
      // Arrange - configuro as depencias do meu test
      const { listMockOkay } = productsMock;
      const listOfProducts = ProductModel.bulkBuild(listMockOkay);
      sinon.stub(ProductModel, 'findAll').resolves(listOfProducts);
      // Act - ato de chamar a funcao a ser testada
      const httpResponse = await chai.request(app).get('/products');
      // Assert - é onde verificamos o resultado esperado
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.be.deep.equal(listMockOkay)
    });
});

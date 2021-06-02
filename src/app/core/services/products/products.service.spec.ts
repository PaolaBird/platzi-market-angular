import {TestBed} from '@angular/core/testing';


import {ProductsService} from './products.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

describe('ProductService', () => {
  let service: ProductsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test for getAllProducts', () => {

    it('should return products list', () => {
      // Arrange
      const expectData = [
        {
          id: '1',
          image: 'assets/images/camiseta.png',
          title: 'Camiseta',
          price: 80000,
          description: 'bla bla bla bla bla'
        },
        {
          id: '2',
          image: 'assets/images/camiseta.png',
          title: 'Pantalon',
          price: 80000,
          description: 'bla bla bla bla bla'
        }
      ];

      let dataError;
      let dataResponse;

      // Act
      service.getAllProducts().subscribe(response => {
        dataResponse = response;
      }, error => {
        dataError = error;
      });

      const req = httpTestingController.expectOne(`${environment.url_api}/products`);
      req.flush(expectData);

      // Assert

      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();

    });
  });

});

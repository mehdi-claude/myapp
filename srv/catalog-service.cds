using myapp from '../db/schema';

service CatalogService {
  entity Products as projection on myapp.Products;
}
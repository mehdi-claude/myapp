namespace myapp;

entity Products {
  key ID          : Integer;
      title       : String;
      price       : Decimal;
      stock       : Integer;
      description : String;
      priceWithTax: Decimal;
      category    : Association to Categories;
}

entity Categories {
  key ID          : Integer;
      name        : String;
      description : String;
}

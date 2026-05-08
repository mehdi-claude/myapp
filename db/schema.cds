namespace myapp;

entity Products {
  key ID          : Integer;
      title       : String;
      price       : Decimal;
      category    : String;
      stock       : Integer;
      description : String;
      priceWithTax: Decimal;
}

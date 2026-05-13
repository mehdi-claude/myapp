using CatalogService as service from '../../srv/catalog-service';

annotate service.Products with @(
    UI.LineItem : [
        { $Type: 'UI.DataField', Label: 'ID',          Value: ID },
        { $Type: 'UI.DataField', Label: 'Title',       Value: title },
        { $Type: 'UI.DataField', Label: 'Price',       Value: price },
        { $Type: 'UI.DataField', Label: 'Category',    Value: category.name },
        { $Type: 'UI.DataField', Label: 'Stock',       Value: stock },
        { $Type: 'UI.DataField', Label: 'Price w Tax', Value: priceWithTax },
    ],
    UI.SelectionFields : [ category_ID, price ],
);

annotate service.Products with @(
    UI.HeaderInfo : {
        TypeName       : 'Product',
        TypeNamePlural : 'Products'
    }
);

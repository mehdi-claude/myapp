const cds = require('@sap/cds');

module.exports = class CatalogService extends cds.ApplicationService {

  async init() {

    this.before("READ", "Products", req => {
      console.log("Jemand liest Produkte!");
    });

    this.after("READ", "Products", products => {
      products.forEach(p => {
        p.priceWithTax = p.price * 1.19;
        if (p.stock < 20) {
          console.log(`Warnung: Wenig Lager fuer ${p.title}! Nur ${p.stock} Stueck!`);
        }
      });
    });

    this.before("CREATE", "Products", req => {
      const { title, price, stock } = req.data;
      if (!title) req.error(400, "Titel ist Pflichtfeld!");
      if (price <= 0) req.error(400, "Preis muss groesser als 0 sein!");
      if (stock < 0) req.error(400, "Lagerbestand kann nicht negativ sein!");
    });

    this.before("UPDATE", "Products", req => {
      const { price } = req.data;
      if (price !== undefined && (price < 1 || price > 10000)) {
        req.error(400, "Preis muss zwischen 1 und 10000 liegen!");
      }
    });

    this.before("DELETE", "Products", async req => {
      const { ID } = req.params[0];
      const product = await SELECT.one.from("Products").where({ ID });
      if (!product) {
        return req.error(404, "Produkt nicht gefunden!");
      }
      if (product.stock > 0) {
        return req.error(400, "Produkt mit Bestand kann nicht geloescht werden!");
      }
    });

    await super.init();
  }
}

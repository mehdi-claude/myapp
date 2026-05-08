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
    await super.init();
  }
}

const products = [];
const { getConnect } = require("../db");

class Product {
    constructor(title) {
        this.title = title;
    }
    async save() {
        const products = getConnect().db().collection("products");
        await products.insertOne({title: this.title})
    }

    static async fetchAll () {
        const products = getConnect().db().collection("products");
        return await products.find();
    }
}

module.exports = Product;
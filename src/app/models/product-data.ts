import { RawProductData } from "./raw-product-data.interfaces";
export class ProductData {
    item_name: string;
    item_description: string;
    image_url: string;

    constructor(data: RawProductData) {
        this.item_name = data.item_name;
        this.item_description = data.item_description;
        this.image_url = data.image;
    }

}



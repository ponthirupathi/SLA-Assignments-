//Create a class Product with name and price, and a method discountedPrice().

class Product {

    constructor(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }

        discountedPrice() {

        let p = this.price * (1 - this.discount / 100);

        console.log(`${this.name} is  ${this.price} rupees and then the final price ${p} `);

        }
      
  
    }


const shirt = new Product("Allen solly Shirt",  1000 ,25)

shirt.discountedPrice();

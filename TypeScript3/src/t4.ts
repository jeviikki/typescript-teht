interface Product {
  id: number;
  name: string;
  price: number;
}

type ProductInfo = Pick<Product, "name" | "price">

// Example usage (valid)
const productInfo: ProductInfo = { name: 'Widget', price: 19.99 };

// Example usage (invalid)
const invalidProductInfo: ProductInfo = { id: 1, name: 'Invalid Product' };

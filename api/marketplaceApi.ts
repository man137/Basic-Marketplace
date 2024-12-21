export interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Smartphone", price: 499.99 },
  { id: 3, name: "Headphones", price: 99.99 },
  { id: 4, name: "Tablet", price: 299.99 },
  { id: 5, name: "Earpods", price: 99.99 },

];

export const getProducts = async (): Promise<Product[]> => {
  //  API 
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
};

export const addProduct = async (product: Omit<Product, "id">): Promise<Product> => {
  // API call
  return new Promise((resolve) => {
    const newProduct = { ...product, id: products.length + 1 };
    products.push(newProduct);
    setTimeout(() => resolve(newProduct), 500);
  });
};

export const updateProduct = async (product: Product): Promise<Product> => {
  // API call
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      products[index] = product;
      setTimeout(() => resolve(product), 500);
    } else {
      reject(new Error("Product not found"));
    }
  });
};

export const deleteProduct = async (id: number): Promise<void> => {
  //API call
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
      products.splice(index, 1);
      setTimeout(() => resolve(), 500);
    } else {
      reject(new Error("Product not found"));
    }
  });
};


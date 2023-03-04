import appAPI from '../utils/appAPI';
class ProductService {
  getAllProduct = () => {
    return appAPI().get('/product/getAllProduct');
  };

  getProduct = (id) => {
    return appAPI().get(`product/getProductByID/${id}`);
  };

  getAllCategory = () => {
    return appAPI().get('product/getAllCategory');
  };
  getProductByCategory = (categoryID) => {
    return appAPI().get(`product/searchProduct?id_category=${categoryID}`);
  };

  getProductByKey = (key) => {
    return appAPI().get(`product/searchProduct?search=${key}`);
  };

  // Post có tải file lên
  createProduct = (product) => {
    return appAPI().post('product/addNewProduct', product, {
      headers: { 'Content-Type': 'multipart/form-data' },
      withCredentials: true,
    });
  };

  deleteProduct = (id) => {
    return appAPI().delete('product/deleteProduct', {
      data: { ID_Product: [id] },
      withCredentials: true,
    });
  };

  // Post không tải file lên
  updateProduct = (data, id) => {
    const product = { ID_Product: id, ...data };
    return appAPI().post('product/updateProduct', product, {
      withCredentials: true,
    });
  };
}

export default new ProductService();

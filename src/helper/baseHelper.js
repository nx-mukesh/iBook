class BaseHelper {
  constructor(){
    this.role = "user"
  }


  /**
   * Adds to cart function.
   *
   * @param {number} a - The first number to add.
   */
  addToCart(product) {
    return "value"+ product
  }

}
// eslint-disable-next-line import/no-anonymous-default-export
export default new BaseHelper();

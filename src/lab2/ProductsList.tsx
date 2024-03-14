type Props = {};
import { useState, useEffect } from "react";
const ProductsList = (props: Props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <section class="bg-light">
      <div class="container py-5">
        <div class="row text-center py-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Featured Product</h1>
            <p>
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
        <div class="row">
          {products.map((product: any) => (
            <div class="col-12 col-md-4 mb-4">
              <div class="card h-100">
                <a href="shop-single.html">
                  <img src={product.img} class="card-img-top" alt="..." />
                </a>
                <div class="card-body">
                  <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                    <li class="text-muted text-right">${product.price}</li>
                  </ul>
                  <a
                    href="shop-single.html"
                    class="h2 text-decoration-none text-dark"
                  >
                    {product.name}
                  </a>
                  <p class="card-text">{product.desc}</p>
                  <p class="text-muted">Reviews (24)</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductsList;

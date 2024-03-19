

const Gallery = () => {
  return (
    <section className="product" id="product">
      <div className="container">
        <h2>Our Products</h2>
        <div className="product-item">
          <img src="https://via.placeholder.com/300x200" alt="Product 1" />
          <h3>Product 1</h3>
          <p>Description of Product 1.</p>
        </div>
        <div className="product-item">
          <img src="https://via.placeholder.com/300x200" alt="Product 2" />
          <h3>Product 2</h3>
          <p>Description of Product 2.</p>
        </div>
        <div className="product-item">
          <img src="https://via.placeholder.com/300x200" alt="Product 3" />
          <h3>Product 3</h3>
          <p>Description of Product 3.</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

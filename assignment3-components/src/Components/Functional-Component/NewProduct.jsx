import Yogurt from "../../assets/yogurt.jpg";

const NewProduct = () => {
  return (
    <section className="newProduct d-flex flex-column flex-md-row justify-content-around px-3 px-md-5">

      <div className="py-5 text-center text-md-start">
        <h5 className="fs-6 fs-md-5">NEW PRODUCT</h5> {/* Smaller on mobile */}
        <h2 className="pink-color fw-bolder fs-3 fs-md-1">The Twist of Healthy Yogurt</h2>
        <h6 className="mt-4 text-color-secondary lh-base fs-7 fs-md-6">
          This website template has been designed by <br /> freewebsitetemplates.com for you, for free. You can replace all this text with your own text.
        </h6>
      </div>

      <div className="text-center text-md-start">
        <img src={Yogurt} alt="Yogurt" className="img-fluid" /> {/* Responsive image */}
      </div>

    </section>
  );
};

export default NewProduct;

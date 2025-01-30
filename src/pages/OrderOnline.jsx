import { Link } from "react-router-dom";
import Specials from "../components/Specials";

const OrderOnline = () => {
  return (
    <section className="bg-gray-500 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-yellow-400">Order Online</h1>
        <p className="mt-4 text-lg">
          Enjoy your favorite Mediterranean dishes from the comfort of your
          home. Order now and get fresh food delivered!
        </p>
        <Link
          to="/menu"
          className="inline-block mt-6 bg-yellow-500 text-black px-6 py-3 rounded-md font-bold"
        >
          View Menu & Order
        </Link>
        <div className="mt-8">
          <img
            src="/restaurant.jpg"
            alt="Order Food Online"
            className="rounded-lg shadow-md w-3/4 mx-auto"
          />
        </div>
      </div>
      <Specials />
    </section>
  );
};

export default OrderOnline;

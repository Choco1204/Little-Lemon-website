import { Link } from "react-router-dom";

const MenuButton = () => {
  return (
    <div className="text-center mt-6 mb-8">
      <Link
        to="/menu"
        className="bg-yellow-500 text-black px-6 py-2 rounded-md"
      >
        Online Menu
      </Link>
    </div>
  );
};

export default MenuButton;

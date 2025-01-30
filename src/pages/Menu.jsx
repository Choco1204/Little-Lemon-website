import Specials from "../components/Specials";

const menuItems = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    description: "Fresh lettuce, peppers, feta, olives.",
    image: "/greek-salad.jpg",
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$5.89",
    description: "Grilled bread, garlic, salt, olive oil.",
    image: "/bruchetta.svg",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.00",
    description: "Grandma’s classic lemon dessert.",
    image: "/lemon-dessert.jpg",
  },
  {
    id: 4,
    name: "Grilled Fish",
    price: "$15.99",
    description: "Freshly grilled fish with herbs.",
    image: "/restauranfood.jpg",
  },
  {
    id: 5,
    name: "Pasta Primavera",
    price: "$11.99",
    description: "Pasta with fresh vegetables.",
    image: "/restauranfood.jpg",
  },
];

const Menu = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-green-900">
          Our Menu
        </h1>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-md bg-green-100"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-bold mt-2 text-green-900">
                {item.name} <span className="text-red-500">{item.price}</span>
              </h3>
              <p className="text-gray-700 mt-1">{item.description}</p>
              <button className="mt-4 text-yellow-500">Order Now 🍽️</button>
            </div>
          ))}
        </div>
      </div>
      <Specials />
    </section>
  );
};

export default Menu;

const specials = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    description:
      "Crispy lettuce, peppers, olives, and feta cheese with garlic and rosemary croutons.",
    image: "/greek-salad.jpg",
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$5.89",
    description:
      "Grilled bread smeared with garlic and seasoned with salt and olive oil.",
    image: "/bruchetta.svg",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.00",
    description: "Grandma’s recipe, made with the freshest ingredients.",
    image: "/lemon-dessert.jpg",
  },
];

const Specials = () => {
  return (
    <section className="py-12 px-8">
      <h2 className="text-2xl font-bold text-center">This Week’s Specials!</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-6">
        {specials.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow-md">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-2">
              {item.name} <span className="text-red-500">{item.price}</span>
            </h3>
            <p className="text-gray-700 mt-1">{item.description}</p>
            <button className="mt-4 text-yellow-500">
              Order a delivery 🚴
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;

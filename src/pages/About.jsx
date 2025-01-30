import Specials from "../components/Specials";

const About = () => {
  return (
    <section className="bg-gray-500 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-yellow-400">
          About Little Lemon
        </h1>
        <p className="mt-4 text-lg">
          Little Lemon is a family-owned Mediterranean restaurant in the heart
          of Chicago. We specialize in traditional recipes with a modern twist,
          using only the freshest ingredients.
        </p>
        <div className="mt-8 flex justify-center">
          <img
            src="/chefs.jpg"
            alt="Little Lemon Restaurant"
            className="rounded-lg shadow-md w-2/3"
          />
        </div>
      </div>
      <Specials />
    </section>
  );
};

export default About;

import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-900 mb-6"
        >
          About Us
        </motion.h1>
        <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
          The Jesuit Education Office – Southern Africa Province (JEO-SAP) serves as a
          support and coordination structure for Jesuit schools across Zimbabwe,
          Zambia, Malawi, Mozambique, South Africa, and Botswana. Our mission is to
          form “men and women with and for others,” rooted in Ignatian values and a
          commitment to holistic education.
        </p>
      </section>

      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6"
          >
            Mission Statement
          </motion.h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            To advance the Kingdom of God through quality, inclusive, and values-based
            education — empowering learners to become competent, compassionate, and
            committed leaders who serve others and promote sustainable development.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Goal</h3>
          <p className="text-gray-700">
            To strengthen Jesuit education in Southern Africa by promoting excellence,
            innovation, and faith-inspired service across all schools and educational
            institutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Objectives</h3>
          <ul className="text-gray-700 space-y-3 list-disc list-inside">
            <li>Enhance teaching quality through professional development.</li>
            <li>Integrate Ignatian Pedagogy and Catholic Social Teaching in curricula.</li>
            <li>Promote safe, inclusive, values-based learning environments.</li>
            <li>Foster innovation, sustainability, and collaboration across schools.</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Jesuit Education and the Sustainable Development Goals</h3>
          <p className="text-gray-700">

Jesuit education aligns most closely with the following Sustainable Development Goals, reflecting our mission to form leaders committed to service, justice, and faith:<br></br>
<ul className="text-gray-700 space-y-3 list-disc list-inside">
<li>SDG 4 – Quality Education</li> 

<li>SDG 5 – Gender Equality</li>

<li>SDG 10 – Reduced Inequalities</li>

<li>SDG 13 – Climate Action</li>

<li>SDG 16 – Peace and Justice</li>
</ul>
Through rigorous academics, ethical formation, and social engagement, Jesuit education empowers students to make a meaningful impact in the world.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;

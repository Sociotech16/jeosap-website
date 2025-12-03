import { useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { country: "Botswana", schools: 0 },
  { country: "Eswatini", schools: 0 },
  { country: "Lesotho", schools: 0 },
  { country: "Malawi", schools: 1 },
  { country: "Mozambique", schools: 1 },
  { country: "Namibia", schools: 0 },
  { country: "South Africa", schools: 0 },
  { country: "Zambia", schools: 3 },
  { country: "Zimbabwe", schools: 18 },
];

// Example school lists (update with real data)
const schoolList = {
  Malawi: [
    "-> Secondary Shools",
    "",
    "Loyola Jesuit Secondary School (LJSS)"],
  Mozambique: [
    "->High Schools",
    "",
    "Escola Secundaria Inacio de Loyola (ESIL)"],
  Zambia: [
    "->High Schools",
    "",
    "St Ignatius College - Lusaka", 
    "Canisius Secondary School - Chikuni",
    "",
    "-> Tertiary",
    "",
    "Charles Lwanga College Of Education - Chikuni"],
  Zimbabwe: [
    "-> Primary Schools",
    "",
    "Chishawasha Primary School", 
    "Hartmann House - Harare",
    "St. Joseph’s Primary School",
    "St. Peter Claver Primary School",
    "St Lazarus Primary School - Makumbi",
    "St. George’s Primary School - Banket",
    "St. Paul’s Primary School - Musami",
    "St. Peter’s Primary School - Mbare",
    "St. Rupert Mayer Primary School - Makonde",
    "",
    "-> Secondary Schools",
    "",
    "Sacred Heart Jesuit College - Banket",
    "St. Georges College - Harare",
    "St. Ignatius College - Chishawasha",
    "St. Paul’s High School - Musami",
    "St. Peter's Kubatana High School",
    "St. Rupert Mayer High School",
    "Visitation High School",
    "St. Peter’s Secondary School - Mbare",
    "",
    "-> Tertiary Schools",
    "",
    "St Peters Kubatana"
    // ... add more until 18
  ],
};

const Network = () => {
  const [openCountry, setOpenCountry] = useState(null);

  return (
    <div className="py-16 bg-white text-center">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-blue-900 mb-10"
      >
        Our Network
      </motion.h1>

      <p className="text-gray-700 max-w-3xl mx-auto mb-10">
        The Jesuit Education Office supports a growing network of 23 schools across the
        Southern Africa Province, united by faith, excellence, and holistic education.
      </p>

      {/* Country Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-100 border border-blue-300 rounded-2xl px-6 py-8 shadow-sm w-56"
          >
            <h3 className="text-xl font-bold text-blue-800">{s.country}</h3>

            <p className="text-3xl font-semibold mt-2 text-blue-700">{s.schools}</p>
            <p className="text-gray-600">schools</p>

            {/* Show Button Only if Schools > 0 */}
            {s.schools > 0 && (
              <button
                onClick={() => setOpenCountry(s.country)}
                className="mt-4 py-1.5 px-4 bg-blue-700 text-white rounded-xl shadow hover:bg-blue-800 transition"
              >
                View Schools
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {openCountry && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">{openCountry} Schools</h2>

            <ul className="text-left space-y-2 text-gray-700 max-h-64 overflow-y-auto">
              {schoolList[openCountry]?.map((school, idx) => (
                <li key={idx} className="border-b pb-2">{school}</li>
              )) || <p>No school list available.</p>}
            </ul>

            <button
              onClick={() => setOpenCountry(null)}
              className="mt-6 w-full py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Network;

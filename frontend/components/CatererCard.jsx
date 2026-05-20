export default function CatererCard({ caterer }) {

  return (

    <div className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 hover:-translate-y-3">


      {/* IMAGE */}

      <div className="h-56 bg-gradient-to-r from-[#0D0D91] to-[#1E1EFF] flex items-center justify-center relative overflow-hidden">

        <div className="absolute w-52 h-52 bg-white/10 rounded-full"></div>

        <h2 className="relative z-10 text-white text-6xl font-bold">

          {caterer.name.charAt(0)}

        </h2>

      </div>



      {/* CONTENT */}

      <div className="p-7">


        <div className="flex items-start justify-between mb-4">

          <div>

            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              {caterer.name}
            </h2>

            <p className="text-gray-500">
              📍 {caterer.location}
            </p>

          </div>


          <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-2 rounded-xl">

            ⭐ {caterer.rating}

          </span>

        </div>



        {/* CUISINES */}

        <div className="flex flex-wrap gap-2 mb-6">

          {caterer.cuisines.map((item, index) => (

            <span
              key={index}
              className="bg-blue-100 text-[#0D0D91] text-sm px-3 py-1 rounded-full font-medium"
            >

              {item}

            </span>

          ))}

        </div>



        {/* FOOTER */}

        <div className="flex items-center justify-between">

          <div>

            <p className="text-gray-500 text-sm">
              Starting Price
            </p>

            <h3 className="text-3xl font-bold text-[#1E1EFF]">

              ₹{caterer.pricePerPlate}

            </h3>

          </div>


          <button className="bg-[#1E1EFF] hover:bg-[#1515cc] text-white px-5 py-3 rounded-2xl font-semibold transition">

            View Details

          </button>

        </div>

      </div>

    </div>

  );

}
"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import CatererCard from "@/components/CatererCard";

export default function CaterersPage() {

  const [caterers, setCaterers] = useState([]);

  const [search, setSearch] = useState("");

  const [price, setPrice] = useState("");

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetchCaterers();

  }, []);


  // const fetchCaterers = async () => {

  //   try {

  //     const res = await axios.get(
  //       "http://localhost:5000/api/caterers"
  //     );

  //     setCaterers(res.data);

  //   } catch (error) {

  //     console.log(error);

  //   } finally {

  //     setLoading(false);

  //   }

  // };

const fetchCaterers = async () => {
  try {
    const res = await fetch("/caterers.json");
    const data = await res.json();

    setCaterers(data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
  const filteredCaterers = caterers.filter((item) => {

    const matchName = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchPrice = price
      ? item.pricePerPlate <= Number(price)
      : true;

    return matchName && matchPrice;

  });


  return (

    <div className="min-h-screen bg-[#0D0D91] overflow-hidden">


      {/* NAVBAR */}

      <nav className="bg-white px-6 md:px-14 py-5 flex items-center justify-between shadow-md">

        <h1 className="text-3xl font-bold text-[#0D0D91]">
          CaterersNearMe
        </h1>


        <div className="hidden md:flex gap-10 font-medium text-gray-700">

          <a href="#" className="hover:text-[#1E1EFF]">
            Home
          </a>

          <a href="#" className="hover:text-[#1E1EFF]">
            Caterers
          </a>

          <a href="#" className="hover:text-[#1E1EFF]">
            Services
          </a>

          <a href="#" className="hover:text-[#1E1EFF]">
            Contact
          </a>

        </div>

      </nav>



      {/* HERO SECTION */}

      <section className="relative px-6 md:px-16 pt-20 pb-32">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">


          {/* LEFT SIDE */}

          <div>

            <p className="text-orange-400 font-semibold mb-4 tracking-wider">
              PREMIUM CATERING SERVICES
            </p>


            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">

              Book Perfect
              <br />
              Caterers For
              <br />
              Every Event

            </h1>


            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">

              Find the best catering services for weddings,
              birthdays, parties, corporate events and special
              occasions with premium food experience.

            </p>


            <div className="flex gap-4">

              <button className="bg-white text-[#0D0D91] px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition">

                Explore Services

              </button>


              <button className="border border-white text-white px-7 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#0D0D91] transition">

                Book Now

              </button>

            </div>

          </div>



          {/* RIGHT SIDE */}

          <div className="relative flex justify-center">

            <div className="absolute w-[380px] h-[380px] bg-blue-500 rounded-full blur-3xl opacity-30"></div>

            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop"
              alt="Food"
              className="relative z-10 rounded-[40px] shadow-2xl w-full max-w-lg object-cover"
            />

          </div>

        </div>

      </section>



      {/* SEARCH SECTION */}

      <div className="max-w-6xl mx-auto px-6 relative z-20 -mt-14">

        <div className="bg-white rounded-[35px] shadow-2xl p-8">

          <div className="grid md:grid-cols-3 gap-5">


            {/* SEARCH */}

            <div>

              <label className="block text-gray-700 font-semibold mb-3">
                Search Caterer
              </label>

              <input
                type="text"
                placeholder="Search by caterer name..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full border-2 border-gray-200 rounded-2xl p-4 outline-none focus:border-[#1E1EFF]"
              />

            </div>



            {/* FILTER */}

            <div>

              <label className="block text-gray-700 font-semibold mb-3">
                Max Price
              </label>

              <input
                type="number"
                placeholder="Enter maximum price..."
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value)
                }
                className="w-full border-2 border-gray-200 rounded-2xl p-4 outline-none focus:border-[#1E1EFF]"
              />

            </div>



            {/* BUTTON */}

            <div className="flex items-end">

              <button className="w-full bg-[#1E1EFF] hover:bg-[#1515cc] text-white rounded-2xl p-4 font-semibold transition text-lg">

                Search Caterers

              </button>

            </div>

          </div>

        </div>

      </div>



      {/* CATERERS SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-24">


        {/* TITLE */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-14">

          <div>

            <p className="text-orange-400 font-semibold mb-2">
              TOP CATERING SERVICES
            </p>

            <h2 className="text-4xl font-bold text-white">
              Popular Caterers
            </h2>

          </div>


          <p className="text-gray-300 mt-4 md:mt-0">
            {filteredCaterers.length} Caterers Available
          </p>

        </div>



        {/* LOADING */}

        {loading ? (

          <div className="flex justify-center py-20">

            <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

          </div>

        ) : (

          <>

            {filteredCaterers.length > 0 ? (

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {filteredCaterers.map((caterer) => (

                  <CatererCard
                    key={caterer._id || caterer.id}
                    caterer={caterer}
                  />

                ))}

              </div>

            ) : (

              <div className="bg-white rounded-3xl p-14 text-center">

                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  No Caterers Found
                </h2>

                <p className="text-gray-500">
                  Try changing search or price filters.
                </p>

              </div>

            )}

          </>

        )}

      </section>

    </div>

  );

}
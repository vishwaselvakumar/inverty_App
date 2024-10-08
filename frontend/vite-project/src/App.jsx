import axios from 'axios';
import { useState } from 'react';
import zodic from '../src/assets/astro4.jpg';
import aquarius from '../src/assets/signs/aquarius.jpg'
import aries from '../src/assets/signs/aries.jpg'
import cancer from '../src/assets/signs/cancer.jpg'
import capricorn from '../src/assets/signs/capricorn.jpg'
import gemini from '../src/assets/signs/gemini.jpg'
import leo from '../src/assets/signs/leo.jpg'
import Libra from '../src/assets/signs/Libra.jpg'
import pisces from '../src/assets/signs/pisces.jpg'
import sagittarius from '../src/assets/signs/sagittarius.jpg'
import scorpio from '../src/assets/signs/scorpio.jpg'
import taurus from '../src/assets/signs/taurus.jpg'
import virgo from '../src/assets/signs/virgo.jpg'
import astro3 from '../src/assets/astro3.jpg'
import ganesha from '../src/assets/ganesha.png'
import horoscope from '../src/assets/horoscope.png'
import logo from '../src/assets/LOGO.svg.png'
import contact from '../src/assets/astro.png'
import purpose from '../src/assets/purpose.png'
import sivan from '../src/assets/sivan.png'
import detail from '../src/assets/detail.png'
import sun from '../src/assets/sun.jpg'
function App() {
  const astro = [
    { src: pisces },
    { src: aries },
    { src: taurus },
    { src: gemini },
    { src: aquarius },
    { src: cancer },
    { src: capricorn },
    { src: leo },
    { src: sagittarius },
    { src: scorpio },
    { src: Libra },
    { src: virgo },
  ];
  const [astroInput, setAstroInput] = useState({
    day: 2,
    month: 4,
    year: 2003,
    hour: 4,
    min: 30,
    lat: 25.7464,
    lon: 82.6837,
    tzone: 5.5
  });

  const [astroData, setAstroData] = useState(null);

  const handleChange = (e) => {
    setAstroInput({
      ...astroInput,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/astro_details', astroInput);
      setAstroData(response.data);
    } catch (error) {
      console.error("Error fetching astrology data", error);
    }
  };

  return (
    <div>
      {/* Navbar */}



      {/* Hero Section */}
      <div className="flex flex-col items-center">
        <div
          className="h-[600px] m-3 rounded-lg shadow-lg w-full"
          style={{
            backgroundImage: `url(${zodic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
          }}
        >
          <nav className="bg-transparent p-4">
            <div className="lg:flex lg:items-center">
              {/* Logo placeholder */}
              {/* <a href="javascript:void(0)">
        <img src={logo} alt="logo" className="w-52" />
      </a> */}
            </div>
            <ul className="flex justify-end lg:space-x-12 space-x-6 ml-2 text-white font-bold text-xl">
              <li className="hover:text-gray-300">
                <a href="/">
                  <span className="rounded-lg p-1">Home</span>
                </a>
              </li>
              <li className="hover:text-gray-300">
                <a href="/">
                  <span className="rounded-lg p-1">Horoscope</span>
                </a>
              </li>
              <li className="hover:text-gray-300">
                <a href="/">
                  <span className="rounded-lg p-1">Astrology</span>
                </a>
              </li>
              <li className="hover:text-gray-300">
                <a href="/">
                  <span className="rounded-lg p-1">Contact Us</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Centered h1 text */}
          <h1
            className="text-black text-center text-2xl lg:text-3xl font-bold p-4 mb-2 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60"
            style={{
              borderRadius: '10px',
            }}
          >
            “Anyone can be a millionaire, but to become <br /> a billionaire you need an astrologer.”
          </h1>

          <div className="flex flex-col justify-center items-center lg:items-start lg:ml-24 h-full px-4">
            <h3 className="text-white text-center lg:text-left text-3xl lg:text-4xl font-bold mb-4">
              "Unlock the Mysteries of the Stars"
            </h3>
            <h6 className="text-white text-center lg:text-left text-lg lg:text-xl font-bold mb-4">
              "Discover your destiny with personalized astrology readings and insights."
            </h6>

            <button className="mt-4 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition duration-300">
              Get Started Today
            </button>
          </div>
        </div>

        <div className='flex flex-wrap pt-10 bg-gray-200'>
          {/* First section with 50% width */}
          <div className='grid grid-cols-9 gap-'>
            {/* Text Section */}
            <div className=' col-span-5 col-start-2'>
              <h1 className='text-3xl font-bold mb-4'>Why Astrology?</h1>
              <p className='text-lg'>
                Astrology helps us understand the will of God by predicting life events through the study of stars and planets. It's a science with its own methods that has inspired people for centuries, offering insights into various aspects of life. Despite changing beliefs, astrology remains relevant and continues to guide many.
              </p><br />
              <p className='text-lg'>
                Astrology focuses on the influence of cosmic objects, mainly planets and stars, on human lives. While there are 8 planets in our solar system, astrology recognizes 9 planets, called the Navagrahas. Surprisingly, Earth is not included in these planets.
              </p>
              <p className='text-lg'>
                The 9 planets in astrology are:
                <ul className='list-disc ml-7'>
                  <li>Sun (Surya)</li>
                  <li>Moon (Chandra)</li>
                  <li>Mars (Mangala)</li>
                  <li>Mercury (Budha)</li>
                  <li>Jupiter (Brihaspati)</li>
                  <li>Venus (Shukra)</li>
                  <li>Saturn (Shani)</li>
                  <li>Rahu (North Node of the Moon)</li>
                  <li>Ketu (South Node of the Moon)</li>
                </ul>
              </p>
              <p className='text-lg mb-16'>
                Some planets are considered friendly, bringing positivity, while others, like Rahu and Ketu, can cause challenges. However, the effects aren't always fixed—Ketu’s influence, for example, may also bring spiritual growth, and Jupiter may not always bring favorable outcomes.
              </p>
            </div>

            {/* Image Section */}
            <div className=' col-span-2 flex justify-end'>
              <img src={horoscope} alt="Horoscope" className='w-82 h-96 mt-32 ml-16 rounded-full' />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center bg-gray-100">
          <div
            className="w-full max-w-full p-4 bg-cover bg-center"
            style={{ backgroundImage: `url(${astro3})` }} // Make sure 'purpose' contains the correct image URL
          >
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Purpose of Astrology</h2>
            <p className="text-white mb-8 font-bold text-center">
              Astrology is a system that links human behavior and life events with the positions of celestial bodies like stars and planets. It serves several key purposes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-black bg-opacity-50 rounded-xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-4xl hover:shadow-white">
                <h3 className="text-xl font-bold text-center text-white">Self-Understanding</h3>
                <p className="text-white">Astrology helps people understand their personality, strengths, and weaknesses through their zodiac signs or birth charts.</p>
              </div>
              {/* Card 2 */}
              <div className="bg-black bg-opacity-50 rounded-xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-4xl hover:shadow-white">
                <h3 className="text-xl font-bold text-center text-white">Decision-Making</h3>
                <p className="text-white">It offers guidance on life choices like career, relationships, and timing for important events by analyzing planetary movements.</p>
              </div>
              {/* Card 3 */}
              <div className="bg-black bg-opacity-50 rounded-xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-4xl hover:shadow-white">
                <h3 className="text-xl font-bold text-center text-white">Relationship Insights</h3>
                <p className="text-white">Astrology examines compatibility between individuals, helping to understand relationship dynamics.</p>
              </div>
              {/* Card 4 */}
              <div className="bg-black bg-opacity-50 rounded-xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-4xl hover:shadow-white">
                <h3 className="text-xl font-bold text-center text-white">Timing Events</h3>
                <p className="text-white">Electional astrology is used to choose favorable dates for events like weddings or business ventures.</p>
              </div>
              {/* Card 5 */}
              <div className="bg-black bg-opacity-50 rounded-xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-4xl hover:shadow-white">
                <h3 className="text-xl font-bold text-center text-white">Spiritual Growth</h3>
                <p className="text-white">Astrology helps individuals feel connected to the universe and explore their life’s purpose.</p>
              </div>
              {/* Card 6 */}
              <div className="bg-black bg-opacity-50 rounded-xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-4xl hover:shadow-white">
                <h3 className="text-xl font-bold text-center text-white">Predictive Insight</h3>
                <p className="text-white">Astrology forecasts future trends, challenges, and opportunities using techniques like transits and progressions.</p>
              </div>

            </div>
          </div>
        </div>

        <div className={`bg-red-200 w-full`} style={{ backgroundImage: `url(${sun})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', }}>
          <h1 className="text-4xl font-bold text-center mt-20">Know Your Horoscope</h1>
          <section className="flex-1 grid grid-cols-4 gap-1 p-2 mb-20 mt-10 w-[530px] mx-auto">
            {/* First row with 4 images */}
            <div className="col-span-4 flex justify-around">
              {astro.slice(0, 4).map((tech, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="p-4 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  style={{
                    backgroundImage: 'linear-gradient(145deg, #f5f5f5, #ffffff)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <img src={tech.src} alt={tech.alt} className="h-24 w-24 rounded-md" />
                </div>
              ))}
            </div>

            {/* Second row with 2 images and empty space */}
            <div className="col-span-4 flex justify-between">
              {astro.slice(4, 6).map((tech, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="p-4 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  style={{
                    backgroundImage: 'linear-gradient(145deg, #f5f5f5, #ffffff)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <img src={tech.src} alt={tech.alt} className="h-24 w-24 rounded-md" />
                </div>
              ))}
            </div>

            {/* Third row with 2 images and empty space */}
            <div className="col-span-4 flex justify-between">
              {astro.slice(6, 8).map((tech, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="p-4 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  style={{
                    backgroundImage: 'linear-gradient(145deg, #f5f5f5, #ffffff)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <img src={tech.src} alt={tech.alt} className="h-24 w-24 rounded-md" />
                </div>
              ))}
            </div>

            {/* Fourth row with 4 images */}
            <div className="col-span-4 flex justify-around">
              {astro.slice(8, 12).map((tech, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="p-4 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  style={{
                    backgroundImage: 'linear-gradient(145deg, #f5f5f5, #ffffff)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <img src={tech.src} alt={tech.alt} className="h-24 w-24 rounded-md" />
                </div>
              ))}
            </div>

            {/* Information about zodiac signs */}

          </section>
        </div>





        {/* Form Section */}
        <div className='flex'
          style={{
            backgroundImage: `url(${astro3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '40vh',
            width: '100%'
          }}
        >
          <img src={ganesha} alt="" className='w-56 h-56 mt-20' />
          <form onSubmit={handleSubmit} className="bg- p-6 rounded-lg shadow-lg mx-auto w-4/5">
            <h2 className="text-2xl font-bold text-center mb-4 text-white">Astrology Details</h2>

            <div className="grid grid-cols-4 gap-4">
              <div className="mb-4">
                <label htmlFor="day" className="block text-sm font-medium text-gray-100">Day:</label>
                <input
                  type="number"
                  name="day"
                  value={astroInput.day}
                  onChange={handleChange}
                  placeholder="Day"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="month" className="block text-sm font-medium text-gray-100">Month:</label>
                <input
                  type="number"
                  name="month"
                  value={astroInput.month}
                  onChange={handleChange}
                  placeholder="Month"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="year" className="block text-sm font-medium text-gray-100">Year:</label>
                <input
                  type="number"
                  name="year"
                  value={astroInput.year}
                  onChange={handleChange}
                  placeholder="Year"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="hour" className="block text-sm font-medium text-gray-100">Hour:</label>
                <input
                  type="number"
                  name="hour"
                  value={astroInput.hour}
                  onChange={handleChange}
                  placeholder="Hour"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="min" className="block text-sm font-medium text-gray-100">Minute:</label>
                <input
                  type="number"
                  name="min"
                  value={astroInput.min}
                  onChange={handleChange}
                  placeholder="Minute"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="lat" className="block text-sm font-medium text-gray-100">Latitude:</label>
                <input
                  type="number"
                  name="lat"
                  value={astroInput.lat}
                  onChange={handleChange}
                  placeholder="Latitude"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="lon" className="block text-sm font-medium text-gray-100">Longitude:</label>
                <input
                  type="number"
                  name="lon"
                  value={astroInput.lon}
                  onChange={handleChange}
                  placeholder="Longitude"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="tzone" className="block text-sm font-medium text-gray-100">Time Zone:</label>
                <input
                  type="number"
                  name="tzone"
                  value={astroInput.tzone}
                  onChange={handleChange}
                  placeholder="Time Zone"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
            </div>

            <div className="mt-6">
              <button className="mt-4 w-full h-12 rounded-full flex justify-center items-center gap-3 bg-gray-500 hover:bg-gradient-to-t hover:from-purple-500 hover:to-indigo-600 hover:shadow-lg transition-all duration-300">
                <svg height="24" width="24" fill="#AAAAAA" viewBox="0 0 24 24" className="transition-all duration-300 ease-in-out">
                  <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                </svg>
                <span className="font-semibold text-gray-100 text-base transition-all">Generate</span>
              </button>
            </div>
          </form>
        </div>


        {/* Display Astrology Data */}
        <div className="flex justify-between bg-gray-200 w-full py-10">
          <div
            style={{
              backgroundImage: `url(${detail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // backgroundColor: 'skyblue'
              // opacity: '60%'
              // filter: 'blur(5%)',
              // opacity: '0.5', // To give the blurred effect some transparency
            }}
            className="p-6 rounded-lg shadow-lg max-w-5xl text-left ml-10 text-white font-bold"
          >
            <div className="mb-4">
              <h3 className="text-4xl font-bold text-center mt-0">Astrology Data</h3>
            </div>

            <div className="grid grid-cols-5 gap-4">
              <div className="border p-4 rounded transition-all duration-300">
                <label className="font-semibold">Ascendant:</label>
                <p>{astroData?.ascendant || " "}</p>
              </div>

              <div className="border p-4 rounded">
                <label className="font-semibold">Ascendant Lord:</label>
                <p>{astroData?.ascendant_lord || " "}</p>
              </div>

              <div className="border p-4 rounded">
                <label className="font-semibold">Varna:</label>
                <p>{astroData?.Varna || " "}</p>
              </div>

              <div className="border p-4 rounded">
                <label className="font-semibold">Sign:</label>
                <p>{astroData?.sign || " "}</p>
              </div>

              <div className="border p-4 rounded">
                <label className="font-semibold">Yoni:</label>
                <p>{astroData?.Yoni || " "}</p>
              </div>

              <div className="border p-4 rounded">
                <label className="font-semibold">Nadi:</label>
                <p>{astroData?.Nadi || " "}</p>
              </div>

              <div className="border p-4 rounded">
                <label className="font-semibold">Sign Lord:</label>
                <p>{astroData?.SignLord || " "}</p>
              </div>

              <div className="border p-4 rounded">
                <label className="font-semibold">Nakshatra:</label>
                <p>{astroData?.Naksahtra || " "}</p>
              </div>

              <div className="border p-4 rounded">
                <label className="font-semibold">Charan:</label>
                <p>{astroData?.Charan || " "}</p>
              </div>

              <div className="border p-4 rounded">
                <label className="font-semibold">Yog:</label>
                <p>{astroData?.Yog || " "}</p>
              </div>

              <div className="border p-4 rounded">
                <label className="font-semibold">Karan:</label>
                <p>{astroData?.Karan || " "}</p>
              </div>

              <div className="border p-4 rounded">
                <label className="font-semibold">Tithi:</label>
                <p>{astroData?.Tithi || " "}</p>
              </div>

              <div className="border p-4 rounded">
                <label className="font-semibold">Yunja:</label>
                <p>{astroData?.yunja || " "}</p>
              </div>

              <div className="border p-4 rounded">
                <label className="font-semibold">Tatva:</label>
                <p>{astroData?.tatva || " "}</p>
              </div>

              <div className="border p-4 rounded">
                <label className="font-semibold">Paya:</label>
                <p>{astroData?.paya || " "}</p>
              </div>
            </div>
          </div>

          {/* Right side image */}
          <img src={sivan} alt="Sivan Image" className="max-h-96 mr-16" />
        </div>



        {/* <div
          className="h-[300px] m-3 rounded-lg shadow-lg w-full"
          style={{
            backgroundImage: `url(${zodic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '40vh',
          }}
        ></div> */}
      </div>
      <div class="relative">
        {/* <!-- Astro image with background --> */}
        <div class="astro-bg w-full h-screen bg-cover bg-no-repeat">
          <img src={contact} alt="Astro" class="w-full h-full object-cover" />
        </div>

        {/* <!-- Contact form with transparency and positioned in the left corner --> */}
        <div class="absolute top-20 left-0 p-4 max-w-xl backdrop-blur-md font-sans ml-16 border-2 border-gray-300 bg-white bg-opacity-20 rounded-3xl">
          <h1 class="text-3xl text-gray-800 font-extrabold text-center">Contact Us</h1>
          <form class="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Name"
              class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-orange-500 border-black"
              required
            />
            <input
              type="email"
              placeholder="Email"
              class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-orange-500 border-black"
              required
            />
            <input
              type="date"
              placeholder="Date of Birth"
              class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <textarea
              placeholder="Message"
              rows="6"
              class="w-full rounded-md px-4 py-3 text-gray-800 bg-gray-100 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-orange-500"
              required
            ></textarea>
            <button
              type="submit"
              class="text-black bg-yellow-300 hover:bg-orange-600 tracking-wide rounded-md text-sm px-4 py-3 w-full font-extrabold text-3xl">
              Send
            </button>
          </form>
        </div>

      </div>


      <footer class="bg-gray-900 p-10 font-[sans-serif] tracking-wide">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="lg:flex lg:items-center">
            <a href="javascript:void(0)">
              <img src={logo} alt="logo" class="w-52" />
            </a>
          </div>

          <div class="lg:flex lg:items-center">
            <ul class="flex space-x-6">
              <li>
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                      d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="fill-gray-300 hover:fill-white w-7 h-7"
                    viewBox="0 0 24 24">
                    <path
                      d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul class="space-y-4">
              <li>
                <a href="javascript:void(0)" class="text-gray-300 hover:text-white text-sm"><strong>Email:<br /></strong> info@ultraflysolutions.com</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-gray-300 hover:text-white text-sm"><strong>Phone:<br /></strong> 91500 01089</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-gray-300 hover:text-white text-sm"><strong>Address:</strong>  <br />27/9, Nivedh Vikas, Pankaja Mills
                  Road, Puliakulam,
                  Coimbatore-641 045.</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-6 text-white">Information</h4>
            <ul class="space-y-4">
              <li>
                <a href="javascript:void(0)" class="text-gray-300 hover:text-white text-sm">Horoscope</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-gray-300 hover:text-white text-sm">Astrology</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-gray-300 hover:text-white text-sm">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <p class='text-gray-300 text-sm mt-10'>© UltraFly Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;


import axios from 'axios';
import {useState} from 'react'

function App() {
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
    <div className="flex flex-col items-center">
      <h1>Astro Details</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Day : </label>
        <input type="number" name="day" value={astroInput.day} onChange={handleChange} placeholder="Day" /><br/>
        <label htmlFor="">Month : </label>
        <input type="number" name="month" value={astroInput.month} onChange={handleChange} placeholder="Month" /><br/>
        <label htmlFor="">Year : </label>
        <input type="number" name="year" value={astroInput.year} onChange={handleChange} placeholder="Year" /><br/>
        <label htmlFor="">Hour : </label>
        <input type="number" name="hour" value={astroInput.hour} onChange={handleChange} placeholder="Hour" /><br/>
        <label htmlFor="">Minute : </label>
        <input type="number" name="min" value={astroInput.min} onChange={handleChange} placeholder="Minute" /><br/>
        <label htmlFor="">Latitude : </label>
        <input type="number" name="lat" value={astroInput.lat} onChange={handleChange} placeholder="Latitude" /><br/>
        <label htmlFor="">Longitude : </label>
        <input type="number" name="lon" value={astroInput.lon} onChange={handleChange} placeholder="Longitude" /><br/>
        <label htmlFor="">Time Zone : </label>
        <input type="number" name="tzone" value={astroInput.tzone} onChange={handleChange} placeholder="Time Zone" /><br/>
        <button type="submit">Get Astrology Details</button>


        <button className="mt-5 w-40 h-10 rounded-full flex justify-center items-center gap-3 bg-gray-900 hover:bg-gradient-to-t hover:from-purple-500 hover:to-indigo-600 hover:shadow-[inset_0px_1px_0px_rgba(255,255,255,0.4),inset_0px_-4px_0px_rgba(0,0,0,0.2),0px_0px_0px_4px_rgba(255,255,255,0.2),0px_0px_180px_0px_#9917FF] hover:translate-y-[-2px] transition-all duration-[450ms] ease-in-out cursor-pointer">
    <svg height="24" width="24" fill="#AAAAAA" viewBox="0 0 24 24" className="transition-all duration-[800ms] ease sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>
    <span className="font-semibold text-gray-400 text-base transition-all">Generate</span>
</button>

        
      </form>



      

      {astroData && (
        <div className='bg-transparent w-80 mt-8'>
          <h2 className='font-bold'>Astrology Data</h2>
          <p>Ascendant: {astroData.ascendant}</p>
          <p>Ascendant Lord: {astroData.ascendant_lord}</p>
          <p>Varna: {astroData.Varna}</p>
          <p>Sign: {astroData.sign}</p>
          
          <p>YOni : {astroData.Yoni}</p>
          <p>Nadi : {astroData.Nadi}</p>
          <p>SignLord : {astroData.SignLord}</p>
          <p>Naksahtra : {astroData.naksahtra}</p>
          <p>Charan : {astroData.Charan}</p>

          <p>Yog : {astroData.Yog}</p>
          <p>Karan : {astroData.Karan}</p>
          <p>Tithi : {astroData.Tithi}</p>
          <p>yunja : {astroData.yunja}</p>
          <p>tatva: {astroData.tatva}</p>
          <p>paya : {astroData.paya}</p>

          {/* Render other astrology details here */}
        </div>
      )}
    </div>
  );
}



export default App;

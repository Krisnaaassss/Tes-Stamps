import axios from "axios";

const API_KEY = "b3ee5ce311297a79103fabafa5876c13"; 
const JAKARTA_LAT = -6.2088;
const JAKARTA_LON = 106.8456;

async function getWeatherForecast() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${JAKARTA_LAT}&lon=${JAKARTA_LON}&units=metric&appid=${API_KEY}`;
    // mengirimkan request get ke url di atas
    const response = await axios.get(url);
    // mengambil data dari response
    const data = response.data;
    // membuat map untuk menyimpan data prediksi cuaca
    const forecasts = new Map();
    console.log("Weather Forecast:\n");

    // perulangan untuk mengambil data prediksi cuaca
    data.list.forEach((item) => {
      // membuat tanggal dari data
      const date = new Date(item.dt * 1000);
      // membuat string tanggal yang sesuai dengan format yang diinginkan
      const dateStr = date
        .toLocaleDateString("en-US", {
          weekday: "short",
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .replace(",", "");
      // jika tanggal belum ada di map, maka tambahkan ke map
      if (!forecasts.has(dateStr)) {
        forecasts.set(dateStr, item.main.temp);
      }
    });

    let count = 0;
    // perulangan untuk mencetak data prediksi cuaca
    for (const [date, temp] of forecasts) {
      // jika jumlah data yang dicetak kurang dari 5, maka cetak data
      if (count < 5) {
        console.log(`${date}: ${temp.toFixed(2)}°C`);
        count++;
      } else {
        break;
      }
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
getWeatherForecast();



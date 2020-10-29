import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  responseType: "json",
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWEwZmEwZmYzM2E5OTVmMjA1YTJkODUzNmY2NWY3ZiIsInN1YiI6IjVlNzBiYzNjY2VkYWM0MDAxNzRmZTY5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.biOSC2qObaGBWbNkpOvePM_HM8d8QtBqzOR4MRO-ks8'
});
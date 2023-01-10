import axios from "axios";

const getRandomData = async() => {
  const apiResponse = await axios.get('https://random-data-api.com/api/v2/users?size=1')
  return apiResponse
}

export {getRandomData}
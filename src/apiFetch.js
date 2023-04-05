import axios from 'axios'

const apiFetch = async () => {
  try {
    // const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en')

    
    return data
  } catch (error) {
    console.error(error)
  }
}

export default apiFetch

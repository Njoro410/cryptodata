import { useQuery } from "react-query";
import apiFetch from "./apiFetch";

function App() {
  // const { data, error, isError, isLoading } = useQuery("coins", apiFetch);
  const data = [
    {
      id: "bitcoin",
      symbol: "btc",
      name: "Bitcoin",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      current_price: 28530,
      market_cap: 551791248069,
      market_cap_rank: 1,
      fully_diluted_valuation: 599224519946,
      total_volume: 15783175322,
      high_24h: 28731,
      low_24h: 28010,
      price_change_24h: 511.62,
      price_change_percentage_24h: 1.826,
      market_cap_change_24h: 10076648875,
      market_cap_change_percentage_24h: 1.86014,
      circulating_supply: 19337687,
      total_supply: 21000000,
      max_supply: 21000000,
      ath: 69045,
      ath_change_percentage: -58.67158,
      ath_date: "2021-11-10T14:24:11.849Z",
      atl: 67.81,
      atl_change_percentage: 41981.60187,
      atl_date: "2013-07-06T00:00:00.000Z",
      roi: null,
      last_updated: "2023-04-05T08:02:52.346Z",
    },
    {
      id: "ethereum",
      symbol: "eth",
      name: "Ethereum",
      image:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      current_price: 1910.49,
      market_cap: 230198512489,
      market_cap_rank: 2,
      fully_diluted_valuation: 230198512489,
      total_volume: 12850801395,
      high_24h: 1919.23,
      low_24h: 1812.01,
      price_change_24h: 98.47,
      price_change_percentage_24h: 5.43444,
      market_cap_change_24h: 11850271350,
      market_cap_change_percentage_24h: 5.42723,
      circulating_supply: 120443137.624692,
      total_supply: 120443137.624692,
      max_supply: null,
      ath: 4878.26,
      ath_change_percentage: -60.82154,
      ath_date: "2021-11-10T14:24:19.604Z",
      atl: 0.432979,
      atl_change_percentage: 441313.55955,
      atl_date: "2015-10-20T00:00:00.000Z",
      roi: {
        times: 88.53566794930273,
        currency: "btc",
        percentage: 8853.566794930273,
      },
      last_updated: "2023-04-05T08:02:55.142Z",
    },
    {
      id: "tether",
      symbol: "usdt",
      name: "Tether",
      image:
        "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
      current_price: 1.001,
      market_cap: 80045615542,
      market_cap_rank: 3,
      fully_diluted_valuation: 80045615542,
      total_volume: 28839478422,
      high_24h: 1.003,
      low_24h: 0.995941,
      price_change_24h: 0.00076636,
      price_change_percentage_24h: -0.07666,
      market_cap_change_24h: 156907345,
      market_cap_change_percentage_24h: 0.19641,
      circulating_supply: 80004564803.0454,
      total_supply: 80004564803.0454,
      max_supply: null,
      ath: 1.32,
      ath_change_percentage: -24.38087,
      ath_date: "2018-07-24T00:00:00.000Z",
      atl: 0.572521,
      atl_change_percentage: 74.7557,
      atl_date: "2015-03-02T00:00:00.000Z",
      roi: null,
      last_updated: "2023-04-05T08:00:01.337Z",
    },
    {
      id: "binancecoin",
      symbol: "bnb",
      name: "BNB",
      image:
        "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
      current_price: 314.9,
      market_cap: 49712252789,
      market_cap_rank: 4,
      fully_diluted_valuation: 62968655266,
      total_volume: 239895071,
      high_24h: 315.64,
      low_24h: 309.73,
      price_change_24h: 4.79,
      price_change_percentage_24h: 0,
      market_cap_change_24h: 807623739,
      market_cap_change_percentage_24h: 1.65143,
      circulating_supply: 157895234,
      total_supply: 157900174,
      max_supply: 200000000,
      ath: 686.31,
      ath_change_percentage: -54.12281,
      ath_date: "2021-05-10T07:24:17.097Z",
      atl: 0.0398177,
      atl_change_percentage: 790649.39955,
      atl_date: "2017-10-19T00:00:00.000Z",
      roi: null,
      last_updated: "2023-04-05T08:02:52.099Z",
    },
  ];
  return (
    <div className="bg-gradient-to-tr from-sky-900 to-gray-800  h-screen">
      <div className="flex justify-center mx-32">
        <table className="w-full  text-left border rounded-lg overflow-hidden mt-44">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Current Price
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Change(24rs)
              </th>{" "}
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Change Percentage(24hrs)
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Highest
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lowest
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data?.map((coins, id) => (
              <tr key={coins.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={coins.image}
                    alt={coins.name}
                    className="w-12 h-12"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-extrabold text-slate-200">
                    {coins.name}({coins.symbol.toUpperCase()})
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-extrabold text-slate-200">
                    {coins.current_price}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-extrabold text-slate-200">
                    {coins.price_change_24h}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-extrabold text-slate-200">
                    <p
                      className={
                        coins.price_change_percentage_24h > 0
                          ? "inline-block whitespace-nowrap rounded-[0.27rem] bg-green-500 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline  font-bold leading-none text-green-100"
                          : coins.price_change_percentage_24h < 0 ? "inline-block whitespace-nowrap rounded-[0.27rem] bg-red-500 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline  font-bold leading-none text-red-100"
                          : "inline-block whitespace-nowrap rounded-[0.27rem] bg-slate-100 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline  font-bold leading-none text-slate-600"
                          
                      }
                    >

                      {coins.price_change_percentage_24h.toFixed(2)}%
                     
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-extrabold text-slate-200">
                    {coins.high_24h}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-extrabold text-slate-200">
                    {coins.low_24h}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

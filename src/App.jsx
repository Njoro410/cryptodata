import {  useQuery } from "react-query";
import apiFetch from "./apiFetch";
import Loading from "./Loading";
import Error from "./Error";

function App() {
 const { data, error, isError, isLoading } = useQuery("coins", apiFetch,{
    refetchInterval: 60000,
  });

  function formatToCurrency(amount) {
    return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }
  return (
    <div className="bg-gradient-to-tr from-sky-900 to-gray-800 font-Montserrat h-full ">
      <section className="text-center py-20">
      <h1 className="font-extrabold text-3xl md:text-5xl text-slate-100">YOUR ALL CRYPTO UPDATE SITE</h1>
      <h1 className="font-extrabold italic text-sm md:text-sm text-slate-100 pt-2">Updates every minute (may not load sometimes(API Limitation))</h1>
      </section>
      <div className="flex justify-center mx-32">
        <table className="w-full max-w-md text-left border rounded-lg overflow-hidden shadow-lg mb-12">
          <thead className="bg-gradient-to-tr from-sky-900 to-gray-800 rounded-lg">
            <tr>
              <th className="px-6 py-3 text-sm font-extrabold text-gray-100 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-sm font-extrabold text-gray-100 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-sm font-extrabold text-gray-100 uppercase tracking-wider">
                Current Price
              </th>
              <th className="px-6 py-3 text-sm font-extrabold text-gray-100 uppercase tracking-wider">
                Change(24rs)
              </th>{" "}
              <th className="px-6 py-3 text-sm font-extrabold text-gray-100 uppercase tracking-wider">
                Change Percentage(24hrs)
              </th>
              <th className="px-6 py-3 text-sm font-extrabold text-gray-100 uppercase tracking-wider">
                Highest
              </th>
              <th className="px-6 py-3 text-xl font-extrabold text-gray-100 uppercase tracking-wider">
                Lowest
              </th>
            </tr>
          </thead>
          {isLoading ? <Loading /> : 
          <tbody className="divide-y divide-slate-500">
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
                    {formatToCurrency(coins.current_price)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-extrabold text-slate-200">
                    {formatToCurrency(coins.price_change_24h)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-extrabold text-slate-200">
                    <p
                      className={
                        coins.price_change_percentage_24h > 0
                          ? "inline-block whitespace-nowrap rounded-[0.27rem] bg-green-500 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline  font-bold leading-none text-green-100"
                          : coins.price_change_percentage_24h < 0
                          ? "inline-block whitespace-nowrap rounded-[0.27rem] bg-red-500 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline  font-bold leading-none text-red-100"
                          : "inline-block whitespace-nowrap rounded-[0.27rem] bg-slate-100 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline  font-bold leading-none text-slate-600"
                      }
                    >
                      {coins.price_change_percentage_24h.toFixed(2)}%
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-extrabold text-slate-200">
                    {formatToCurrency(coins.high_24h)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-extrabold text-slate-200">
                    {formatToCurrency(coins.low_24h)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
}
        </table>
      </div>
    </div>
  );
}

export default App;



function App() {
  const data = [
    {
      image: "https://via.placeholder.com/150",
      name: "Product 1",
      currentPrice: "$50",
      high: "$60",
      low: "$40",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Product 2",
      currentPrice: "$70",
      high: "$80",
      low: "$60",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Product 3",
      currentPrice: "$90",
      high: "$100",
      low: "$80",
    },
  ];
  return (
    <div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black h-screen">
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
              High
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Low
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.name}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={item.image} alt={item.name} className="w-12 h-12" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{item.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{item.currentPrice}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{item.high}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{item.low}</div>
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

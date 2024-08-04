const PurchasesCard = ({ purchases }) => {
  //   console.log(purchases);
  return (
    <div
      className="mx-auto w-full md:w-[1000px] mt-[5vh] md:mt-[15vh]
   md:mb-20"
    >
      {purchases && (
        <div className="hidden w-full md:flex">
          <table className="w-full border rounded-xl">
            <thead>
              <tr className="border-b-2 border-slate-500 ">
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Items Purchased</th>
                <th>Total Amount</th>
                <th>Order Date</th>
              </tr>
            </thead>
            <tbody>
              {purchases &&
                purchases.map((purchase) => (
                  <tr key={purchase.id} className="text-center border ">
                    <td className="capitalize font-[600] text-md">
                      {purchase.buyer.name}
                    </td>
                    <td>{purchase.buyer.email}</td>
                    <td>
                      {purchase.products.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center justify-center gap-1 my-2 "
                        >
                          <p className="flex items-center justify-center w-10 h-10">
                            <img
                              className="object-cover w-full h-full "
                              src={product.thumbnail}
                              alt=""
                            />
                          </p>
                        </div>
                      ))}
                    </td>

                    <td>
                      <p className="font-[600]">
                        $
                        {Math.round(
                          purchase.products.reduce(
                            (accumulator, currentValue) =>
                              accumulator +
                              currentValue.price * currentValue.quantity,
                            0
                          )
                        )}
                      </p>
                    </td>
                    <td>
                      {purchase.timestamp.toDate().toLocaleDateString("fr")}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
      {purchases && (
        <div className="md:hidden">
          <h1 className="mb-10 text-xl text-center">List of Buyer</h1>
          {purchases.map((purchase) => (
            <div key={purchase.id}>
              {/* buyer */}

              <div>
                <h2 className="py-2 text-xl font-bold text-center bg-gray-400">
                  Buyer
                </h2>
                <h3 className="text-xl font-[600] text-center text-blue-900">
                  {purchase.buyer.name}
                </h3>
                <p className="text-sm text-center text-gray-600">
                  {purchase.buyer.email}
                </p>
              </div>
              <div className="mt-2">
                <h2 className="text-xl font-bold text-center bg-slate-100">
                  Items Purchased
                </h2>
                {purchase.products.map((product) => (
                  <div key={product.id} className="flex items-center gap-3">
                    <img
                      className="w-[100px] h-[100px] object-cover"
                      src={product.thumbnail}
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-[600] text-blue-900">
                        {product.title}
                      </p>
                      <p className="text-sm text-gray-600">
                        Price : ${product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PurchasesCard;

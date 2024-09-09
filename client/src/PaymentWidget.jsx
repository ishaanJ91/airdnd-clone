export default function PaymentWidget({ handlePayment }) {
  return (
    <>
      <div className="shadow-lg px-4 pt-6 mt-6 pb-4 border text-base border-slate-300 rounded-xl">
        <div className="flex items-baseline">
          <p className="text-2xl font-bold">Complete Payment</p>
        </div>

        <div className="border rounded-lg mt-4 border-gray-400">
          <div className="flex flex-col justify-around p-4 max-w-xs mx-auto">
            <div className="flex flex-row items-center justify-between mb-3">
              <input
                className="w-full my-4 px-4 border border-black text-sm text-black font-base rounded-lg pl-2 mb-3 flex-grow"
                type="text"
                name="cardName"
                id="cardName"
                placeholder="Full Name"
              />
              <div className="flex items-center justify-center relative w-14 h-9 border border-white border-opacity-20 rounded-md">
                <svg
                  className="text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#ff9800"
                    d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                  ></path>
                  <path
                    fill="#d50000"
                    d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                  ></path>
                  <path
                    fill="#ff3d00"
                    d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <input
                className="w-full my-4 px-4 border border-black text-sm rounded-lg text-black font-base pl-2 mb-3 flex-grow"
                type="number"
                name="cardNumber"
                id="cardNumber"
                placeholder="0000 0000 0000 0000"
              />
              <div className="flex flex-row gap-4 justify-between">
                <input
                  className="w-full my-4 px-4 border rounded-lg border-black text-sm text-black font-base pl-2 mb-3 flex-grow"
                  type="text"
                  name="expiryDate"
                  id="expiryDate"
                  placeholder="MM/YY"
                />
                <input
                  className="w-full my-4 px-4 border rounded-lg border-black text-sm text-black font-base pl-2 mb-3 flex-grow"
                  type="number"
                  maxLength={3}
                  name="cvv"
                  id="cvv"
                  placeholder="CVV"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-4">
          <button
            onClick={handlePayment}
            className="py-3 w-full bg-black text-white rounded-lg text-lg font-medium"
          >
            Pay
          </button>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput(prev => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="max-w-xs mx-auto mt-10">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <input
          type="text"
          value={input}
          className="w-full p-4 text-right text-2xl font-bold text-white bg-gray-900 rounded-lg mb-4"
          readOnly
        />
        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={() => handleButtonClick("1")}
            className="p-4 text-white bg-gray-600 rounded-lg hover:bg-gray-500"
          >
            1
          </button>
          <button
            onClick={() => handleButtonClick("2")}
            className="p-4 text-white bg-gray-600 rounded-lg hover:bg-gray-500"
          >
            2
          </button>
          <button
            onClick={() => handleButtonClick("3")}
            className="p-4 text-white bg-gray-600 rounded-lg hover:bg-gray-500"
          >
            3
          </button>
          <button
            onClick={() => handleButtonClick("+")}
            className="p-4 text-white bg-orange-600 rounded-lg hover:bg-orange-500"
          >
            +
          </button>

          <button
            onClick={() => handleButtonClick("4")}
            className="p-4 text-white bg-gray-600 rounded-lg hover:bg-gray-500"
          >
            4
          </button>
          <button
            onClick={() => handleButtonClick("5")}
            className="p-4 text-white bg-gray-600 rounded-lg hover:bg-gray-500"
          >
            5
          </button>
          <button
            onClick={() => handleButtonClick("6")}
            className="p-4 text-white bg-gray-600 rounded-lg hover:bg-gray-500"
          >
            6
          </button>
          <button
            onClick={() => handleButtonClick("-")}
            className="p-4 text-white bg-orange-600 rounded-lg hover:bg-orange-500"
          >
            -
          </button>

          <button
            onClick={() => handleButtonClick("7")}
            className="p-4 text-white bg-gray-600 rounded-lg hover:bg-gray-500"
          >
            7
          </button>
          <button
            onClick={() => handleButtonClick("8")}
            className="p-4 text-white bg-gray-600 rounded-lg hover:bg-gray-500"
          >
            8
          </button>
          <button
            onClick={() => handleButtonClick("9")}
            className="p-4 text-white bg-gray-600 rounded-lg hover:bg-gray-500"
          >
            9
          </button>
          <button
            onClick={() => handleButtonClick("*")}
            className="p-4 text-white bg-orange-600 rounded-lg hover:bg-orange-500"
          >
            *
          </button>

          <button
            onClick={() => handleButtonClick("0")}
            className="p-4 text-white bg-gray-600 rounded-lg hover:bg-gray-500 col-span-2"
          >
            0
          </button>
          <button
            onClick={() => handleButtonClick("/")}
            className="p-4 text-white bg-orange-600 rounded-lg hover:bg-orange-500"
          >
            /
          </button>
          <button
            onClick={handleClear}
            className="p-4 text-white bg-red-600 rounded-lg hover:bg-red-500"
          >
            C
          </button>

          <button
            onClick={handleCalculate}
            className="p-4 text-white bg-blue-600 rounded-lg hover:bg-blue-500 col-span-4"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

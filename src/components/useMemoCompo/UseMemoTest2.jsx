import React, { useState, useMemo, useEffect } from "react";

const TestData = [
  {
    id: "1",
    name: "kyaw",
  },
  {
    id: "2",
    name: "swar",
  },
  {
    id: "3",
    name: "htet",
  },
  {
    id: "4",
    name: "aung",
  },
  {
    id: "5",
    name: "zin",
  },
  {
    id: "6",
    name: "latt",
  },
  {
    id: "7",
    name: "Chue",
  },
  {
    id: "8",
    name: "Kyaw swar",
  },
];

const SearchComponent = () => {
  const [inputData, setInputData] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [result, setResult] = useState("");

  let ouput = async () => {
    let answer = TestData.filter((item) => {
      console.log("usememo render");
      return item.name.toLowerCase().includes(inputData.toLowerCase());
    });

    return answer;
  };

  useEffect(() => {
    ouput().then((data) => setResult(data));
  }, [searchResult]);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = () => {
    setSearchResult(inputData);
  };

  return (
    <div>
      <input
        type="text"
        value={inputData}
        onChange={handleInputChange}
        placeholder="Enter data"
      />
      <button onClick={handleSubmit}>Search</button>
      <ul>
        {result.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;

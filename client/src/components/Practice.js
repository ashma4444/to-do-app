import React, { useRef, useState } from "react";

function Practice() {
  const [cities, setCities] = useState([]);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const nameRef = useRef(null);

  const countries = [
    { name: "Nepal", cities: ["Kathmandu", "Lalitpur", "Bhaktapur"] },
    { name: "India", cities: ["New Delhi", "Mumbai"] },
  ];

  const handleChange = (country) => {
    if (country) {
      countries.map((item) => {
        if (item.name === country) {
          setCities(item.cities);
        }
      });
      document.getElementById("select2").style.display = "block";
    } else {
      document.getElementById("select2").style.display = "none";
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    console.log(userData);

    setUserData({ email: "", password: "" });

    const name = nameRef.current.value;
    console.log(name);
  };
  return (
    <>
      <h1>Practice</h1>

      <div style={{ display: "flex" }}>
        <select
          id="select1"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        >
          <option value="">--Please choose an country--</option>
          {countries.map((item, index) => {
            return (
              <option value={item.name} key={index}>
                {item.name}
              </option>
            );
          })}
        </select>

        <select
          style={{ display: "none" }}
          id="select2"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        >
          <option value="">--Please choose a city--</option>
          {cities.map((city, index) => {
            return (
              <option value={city} key={index}>
                {city}
              </option>
            );
          })}
        </select>
      </div>

      <hr />

      <form>
        {/* controlled form example */}

        <input
          type="email"
          value={userData?.email}
          onChange={(e) => {
            setUserData((prevData) => {
              return { ...prevData, email: e.target.value };
            });
          }}
        />
        <input
          type="password"
          value={userData?.password}
          onChange={(e) => {
            setUserData((prevData) => {
              return { ...prevData, password: e.target.value };
            });
          }}
        />

        {/* uncontrolled form example */}
        <input type="text" ref={nameRef} />
        <button onClick={(e) => submitForm(e)}>Submit</button>
      </form>

      <hr />
    </>
  );
}

export default Practice;

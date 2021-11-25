import { useEffect } from "react";

export default function Index() {
  useEffect(() => {}, []);

  const url = "https://1337-coffee-vicuna-4ibvfah9.ws-eu17.gitpod.io/writers";

  function getData() {
    fetch(url, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    })
      .then(function (data) {
        console.log("Request succeeded with JSON response", data);
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
  }

  return (
    <>
      <h1>Hello</h1>
      <button onClick={getData}>click</button>
    </>
  );
}

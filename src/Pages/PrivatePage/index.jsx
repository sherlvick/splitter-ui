import React from "react";
import { useEffect } from "react";

async function logUser() {
  const response = await fetch("/private-api");
  const movies = await response.json();
  console.log(movies);
}

const PrivatePage = () => {
  useEffect(() => {
    logUser();
  }, []);
  return (
    <form className="text-end" method="post" action="/logout">
      <button type="submit" className="btn btn-primary">
        Logout
      </button>
    </form>
  );
};
export default PrivatePage;

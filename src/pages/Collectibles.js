import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../index.css";

export default function Collectibles({ route }) {
  /*   let location = useLocation();
  const { searchInput, tableData } = location.state;
  const [loading, setLoading] = useState();
  const [searchTextInput, setSearchTextInput] = useState();

  useEffect(() => {
    async function fetchData() {
      setSearchTextInput(searchInput);
    }
    fetchData();
  }, [searchInput]); */

  return (
    <div className="align-middle text-center text-banner mb-24">
      <div className="h-screen flex ">
        <div className="grow space-y-10 self-start">
          THIS IS nft and collectibles PAGE
        </div>
      </div>
    </div>
  );
}
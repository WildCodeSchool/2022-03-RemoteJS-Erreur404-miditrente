import React, { useState } from "react";
import Actions from "../components/Actions";
import Filter from "../components/Filter";
import engagementData from "../datas/engagement-data";
import Button from "../components/Button";

import "./Engagement.css";

function Engagement() {
  const [value, setValue] = useState("");
  const [selection, setSelection] = useState(engagementData);
  const categories = ["Tous", "Facile", "Intermediaire", "Expert"];
  const handleClick = (button) => {
    if (button === "Tous") {
      setSelection(engagementData);
      return;
    }
    const filteredData = engagementData.filter(
      (data) => data.category === button
    );
    setSelection(filteredData);
  };

  return (
    <div className="engagement_main_tg">
      <h1 className="engagement_h1_tg">
        Agir <span>maintenant</span>{" "}
      </h1>
      <h3> Vos engagements :</h3>
      <Button categories={categories} handleClick={handleClick} />
      <Filter value={value} handleValue={setValue} />
      {selection
        .filter((name) => name.text.includes(value))
        .sort((a, b) => {
          return b.likes - a.likes;
        })
        .map((data) => (
          <Actions data={data} />
        ))}
      );
    </div>
  );
}

export default Engagement;

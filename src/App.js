import React from "react";
import EventHandlingDemo from "./exercise16/EventHandlingDemo";
import RenderAndCommitDemo from "./exercise17/RenderAndCommitDemo";
import SnapshotDemo from "./exercise18/SnapshotDemo";
import animals from "./exercise19/animals";
import AnimalCard from "./exercise19/AnimalCard";

const App = () => {
  const showAdditionalData = (additional) => {
    const details = additional ?? { notes: "No Additional Information" };
    const data = Object.entries(details)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    alert(data);
  };

  return (
    <div>
      <EventHandlingDemo />
      <RenderAndCommitDemo />
      <SnapshotDemo />
      <div style={{ padding: '30px' }}>

      <h1>Animal Information</h1>

      {animals.map((animal) => (
        <AnimalCard
          key={animal.name}
          name={animal.name}
          scientificName={animal.scientificName}
          size={animal.size}
          diet={animal.diet}
          additional={animal.additional}
          showAdditional={showAdditionalData}
        />
      ))}

    </div>
    </div>
  );
};

export default App;

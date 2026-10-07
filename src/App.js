import React from 'react';
import EventHandlingDemo from './exercise16/EventHandlingDemo';
import RenderAndCommitDemo from './exercise17/RenderAndCommitDemo';
import SnapshotDemo from './exercise18/SnapshotDemo';


const App = () => {
  return (
    <div>
      <EventHandlingDemo />
      <RenderAndCommitDemo/>
      <SnapshotDemo/>
    </div>
  );
};

export default App;

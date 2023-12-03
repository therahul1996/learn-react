import React from 'react';

function CallExample() {
  const greet = function(message) {
    console.log(`${message}, ${this.name}!`);
  };

  const person = { name: 'Alice' };

  return (
    <div>
      <button onClick={() => greet.call(person, 'Hello')}>Call Greet</button>
    </div>
  );
}

export default CallExample;

import React from 'react';
// import it
import useTypingGame from 'react-typing-game-hook';

const Typing = () => {
  // Call the hook
  const {
    states: { chars, charsState },
    actions: { insertTyping, resetTyping, deleteTyping },
  } = useTypingGame(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis alias libero accusantium, eos, commodi minus enim culpa pariatur, cum voluptatum fugiat aliquam laboriosam beatae quas quam facilis recusandae at expedita numquam nam excepturi quaerat natus inventore. Quidem iure cupiditate dolore odit voluptas dolorem aspernatur, iusto harum similique doloribus. Vero aspernatur officiis optio, reprehenderit error natus doloribus nisi magnam necessitatibus sapiente tempora blanditiis voluptatem, voluptates quae fugiat aut dolor inventore at corrupti nam labore placeat deleniti molestias explicabo! Cum, tenetur porro? Unde, cum asperiores! Reprehenderit soluta voluptate voluptas nobis nemo, error amet porro repudiandae suscipit repellendus aperiam natus illum! Porro, esse?`);

  // Capture and display!
  return (
    <h1
      onKeyDown={e => {
        const key = e.key;
        if (key === 'Escape') {
          resetTyping();
        } else if (key === 'Backspace') {
          deleteTyping(false);
        } else if (key.length === 1) {
          insertTyping(key);
        }
        e.preventDefault();
      }}
      tabIndex={0}
    >
      {chars.split('').map((char, index) => {
        let state = charsState[index];
        let color = state === 0 ? 'black' : state === 1 ? 'green' : 'red';
        return (
          <span key={char + index} style={{ color }}>
            {char}
          </span>
        );
      })}
    </h1>
  );
};

export default Typing;
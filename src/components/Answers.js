import React from 'react';

function Answers({ answers }) {
  return (
    <>
      <ul>
        {answers.length > 0 &&
          answers.map((answer, ansIndex) => {
            return (
              <li key={ansIndex} style={{ display: 'flex', gap: '10px' }}>
                <p>{answer.text}</p>
                {answer.is_true ? <p>✅</p> : <p>❌</p>}
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Answers;

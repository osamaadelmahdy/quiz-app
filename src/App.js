import QuizList from './components/QuizList';
import Data from './Data.json';

function App() {
  return (
    <div
      className="App"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <QuizList quizzes={[...Data]} />
    </div>
  );
}

export default App;

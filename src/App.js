import './App.css';
import Header from './components/Header'

import 'bootstrap/dist/css/bootstrap.min.css';
import TeacherCatalog from './pages/teacherCatalog';
function App() {
  return (
    <>
      <Header/>
      <TeacherCatalog />
    </>
  );
}

export default App;

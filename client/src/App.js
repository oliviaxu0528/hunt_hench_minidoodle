
import './App.css';
import { FilePicker } from "./functional_components/file_picker";
import { ImgComponent } from './functional_components/img_component';



function App() {
  return (
    <div>
      <FilePicker />
      <div>
        <button onClick={() => {
          alert("you clicked joel hahahahah")
        }}>upload</button>
      </div>
      <div>
        body
        <div className='container'>
          <ImgComponent />
        </div>
      </div>
      <div>
        footer
      </div>
    </div>

  );
}

export default App;

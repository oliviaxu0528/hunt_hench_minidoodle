
import './App.css';
import { FilePicker } from "./functional_components/file_picker";
import { ImgComponent } from './functional_components/img_component';



function App() {
  const urls = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Golden_Doodle_Standing_%28HD%29.jpg/1200px-Golden_Doodle_Standing_%28HD%29.jpg"
    , 2, 3, 4, 5]
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
          {urls.map((url) => {
            return <ImgComponent url={url} />
          })}
        </div>
      </div>
      <div>
        footer
      </div>
    </div>

  );
}

export default App;

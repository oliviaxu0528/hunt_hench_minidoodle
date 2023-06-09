
import './App.css';
import { FilePicker } from "./functional_components/file_picker";
import { ImgComponent } from './functional_components/img_component';



function App() {
  const urls = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Golden_Doodle_Standing_%28HD%29.jpg/1200px-Golden_Doodle_Standing_%28HD%29.jpg"
    , 2, 3, 4, 5]
  return (
    <div>
      <div className='container'>hello world!
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <span>4</span>
        <span>5</span>
        <span>6</span>

      </div>
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

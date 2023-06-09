
import './App.css';
import { FilePicker } from "./functional_components/file_picker";


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
          <span className='mockphoto'>
            span1
          </span>
          <span className='mockphoto'>
            span2
          </span>
          <span className='mockphoto'>
            span3
          </span>
          <span className='mockphoto'>
            span1
          </span>
          <span className='mockphoto'>
            span2
          </span>
          <span className='mockphoto'>
            span3
          </span>
          <span className='mockphoto'>
            span1
          </span>
          <span className='mockphoto'>
            span2
          </span>
          <span className='mockphoto'>
            span3
          </span>
        </div>
      </div>
      <div>
        footer
      </div>
    </div>

  );
}

export default App;

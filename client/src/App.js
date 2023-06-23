
import { useEffect, useState } from 'react';
import './App.css';
import { FilePicker } from "./functional_components/file_picker";
import { ImgComponent } from './functional_components/img_component';
import axios from "axios";


function App() {
  const [urls, setUrls] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(function (response) {
        // handle success
        setUrls(response.data)
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [])

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

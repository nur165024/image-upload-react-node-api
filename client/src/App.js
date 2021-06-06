import React from 'react';
import Home from './Component/Home/Home';
import ImageUpload from './Component/ImagebbAPI/ImageUpload';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Upload from './Component/ServerImage/Upload';

function App() {
  

  return (
    <Router>
      <div>
        <ul style={{ listStyleType:"none" }} className="text-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/image-bb-upload">Image BB</Link>
          </li>
          <li>
            <Link to="/server-image-upload">Image Server Upload</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/image-bb-upload">
            <ImageUpload></ImageUpload>
          </Route>
          <Route path="/server-image-upload">
            <Upload></Upload>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import image from "./pngicon.png";
import Moon from './svgicon.svg';

const App = () =><>

<h1 className={"h1"}>Hello World</h1>
<img src={image} alt="lhb image" width="300" height="100" />
<img src={Moon} alt="moon" width="300" height="200" />
</>;
export default App;

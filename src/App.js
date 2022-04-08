import './App.css';
import './style/scss/order.scss'
import './style/scss/uikit.scss'
import './style/scss/organization.scss'
import ListOrganization from "./components/ListOrganization/ListOrganization";
import CurrentOrganization from "./components/CurrentOrganization/CurrentOrganization";
import {useState} from "react";
import {getCompany} from "./server/request";
function App() {
    const [addOrganize, setAddOrganize] = useState(false);
    const [mode, setMode] = useState("ADD_CARD")

  return (
    <div className={"order-block uikit error_animation "}>
      <div className={"holder wrapper_half"}>
          {
              addOrganize ?
                  <CurrentOrganization setAddOrganize={setAddOrganize} mode={mode}/>
                  :
                  <ListOrganization setAddOrganize={setAddOrganize} setMode={setMode}/>
          }


      </div>
    </div>
  );
}

export default App;

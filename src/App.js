import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <form>
      
  <div className="input-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
    <input id="email" type="text" class="form-control" name="email:" placeholder="Email"/>
  </div>
  <div className="input-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
    <input id="password" type="password" class="form-control" name="Password:" placeholder="Password"/>
  </div>
  <div className="input-group">
    <span class="input-group-addon">Text</span>
    <input id="msg" type="text" class="form-control" name="msg" placeholder="Additional Info"/>
  </div>

</form>
    </div>
    
  );
}

export default App;

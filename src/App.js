import CarForm from "./component/CarForm";
import CarList from "./component/CarList";
import CarSearch from "./component/CarSearch";
import CarValue from "./component/CarValue";


function App(){
    return <div>
        <CarForm />
        <CarSearch/>
        <CarList />
        <CarValue />
    </div>
}
export default App;
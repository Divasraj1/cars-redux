import CarForm from "./component/CarForm";
import CarList from "./component/CarList";
import CarSearch from "./component/CarSearch";
import CarValue from "./component/CarValue";


function App(){
    return <div className="container is-fluid">
        <CarForm />
        <CarSearch/>
        <CarList />
        <CarValue />
    </div>
}
export default App;
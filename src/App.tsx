import { BrowserRouter, useRoutes } from "react-router-dom";
import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./store/index";


const App = () => {
  const RoutesWrapper = () => {
    const routes = useRoutes(Routes);
    return routes;
  };
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesWrapper />
      </BrowserRouter>
    </Provider>
   
  );
}

export default App
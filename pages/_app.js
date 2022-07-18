import NavBar from "./../components/navBar";
import { Provider } from "react-redux";
import store from "../store/configureStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

const unsubscribe = store.subscribe(() => null);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NavBar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

import { Provider } from "react-redux";
import store from "../store/configureStore";
import ScrollToTop from "react-scroll-to-top";
import NavBar from "./../components/navBar";
import Footer from "../components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

const unsubscribe = store.subscribe(() => null);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NavBar />
      <ScrollToTop smooth />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;

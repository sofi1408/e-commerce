import "../styles/globals.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../redux/reducer/rootReducer";
import thunk from "redux-thunk";
import Layout from "../components/Layout/Layout";

const store = createStore(rootReducer, applyMiddleware(thunk));

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;

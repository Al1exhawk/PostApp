import { configureStore } from "../store";
import { Provider } from "react-redux";
import withRedux from 'next-redux-wrapper';
const MyApp = ({ Component, pageProps, store }) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default withRedux(configureStore)(MyApp);
import { useEffect } from "react";
import { signIn, signUp } from "./config/firebase";
import Router from "./config/router";
import { Provider } from "react-redux";
import { store } from "./redux";

export default function App() {
  // useEffect(() => {
  //   signUp("Adem", "adem@adem.com", "12345.Aa").then(() => {
  //     console.log("Done").catch((err) => {
  //       console.log(err);
  //     });
  //   });

  //   signIn("adem@adem.com", "12345.Aa")
  //     .then(() => {
  //       console.log("Done");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

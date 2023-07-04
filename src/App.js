import { useEffect } from "react";
import { signIn, signUp } from "./config/firebase";
import Router from "./config/router";

const App = () => {
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
    <div>
      <Router />
    </div>
  );
};

export default App;

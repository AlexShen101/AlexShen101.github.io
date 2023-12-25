import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import AppContext from "../components/AppContextFolder/AppContext";
import { useRef, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [sharedState, setSharedState] = useState({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling:{
        IntervalEvent:null
      }
    }
  });
  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      <Component {...pageProps} />
      <Analytics />
    </AppContext.Provider>
  );
}

export default MyApp;

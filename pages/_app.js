import "../styles/globals.css";
import Script from "next/script";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    return (
      <Script
        id="my-script"
        dangerouslySetInnerHTML={{
          __html: `window.rumv = window.rumv || function() { (window.rumv.q = window.rumv.q || []).push(arguments) };
          (function(rum, vi,si,on) {
              var s = JSON.parse( sessionStorage.getItem('rumv') || '{"pageviews":0}' ); s.pageviews++;
              if ( s.urls && s.regex && ( s.page = eval('('+s.regex+')')( s.urls, on.pathname ) ) && !s.page.type ) {
                  return sessionStorage.setItem('rumv', JSON.stringify( s ) );
              }
              
              var head = si.querySelector('head'), js = si.createElement('script');
              js.src = 'https://cdn.jsdelivr.net/gh/Saurav404/rum-script@151232c/rum.js';
              vi.rumv.storage = s;
              head.appendChild(js);
          })('2F7D77C9C7', window, document, location, 'rum-nextjs-project.vercel.app')`,
        }}
      />
    );
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

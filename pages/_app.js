import "../styles/globals.css";
import Script from "next/script";

export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="script"
        dangerouslySetInnerHTML={{
          __html: `window.rumv = window.rumv || function() { (window.rumv.q = window.rumv.q || []).push(arguments) };
    (function(rum, vi,si,on) {
        var s = JSON.parse( sessionStorage.getItem('rumv') || '{"pageviews":0}' ); s.pageviews++;
        if ( s.urls && s.regex && ( s.page = eval('('+s.regex+')')( s.urls, on.pathname ) ) && !s.page.type ) {
            return sessionStorage.setItem('rumv', JSON.stringify( s ) );
        } 
        var head = si.querySelector('head'), js = si.createElement('script');
        js.src = 'https://cdn.jsdelivr.net/gh/Saurav404/rum-script@6fbce93/rum.js';
        vi.rumv.storage = s;
        head.appendChild(js);
    })('2F7D77C9C7', window, document, location, 'rum-nextjs-project.vercel.app')`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

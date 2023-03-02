import "../styles/globals.css";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="script"
        dangerouslySetInnerHTML={{
          __html: `window.adz = window.adz || function() { (window.adz.q = window.adz.q || []).push(arguments) };
          (function(rum, vi,si,on, d) {
              var s = JSON.parse( sessionStorage.getItem('adz') || '{"pageviews":0}' ); s.pageviews++;
              if ( s.urls && s.regex && ( s.page = eval('('+s.regex+')')( s.urls, on.pathname ) ) && !s.page.type ) {
                  return sessionStorage.setItem('adz', JSON.stringify( s ) );
              }
              
              vi.adz.storage = s;
              var head = si.querySelector('head'), js = si.createElement('script');
              js.src = "https://cdn.jsdelivr.net/gh/Saurav404/rum-script@d007e74/rum.js";
              head.appendChild(js);
          })( '9C5E5F4B26', window, document, location, 'rum-nextjs-project.vercel.app' );`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

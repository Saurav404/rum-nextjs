import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        id="my-script"
        dangerouslySetInnerHTML={{
          __html: `window.rumv = window.rumv || function() { (window.rumv.q = window.rumv.q || []).push(arguments) };
          (function(rum, vi,si,on) {
              var s = JSON.parse( sessionStorage.getItem('rumv') || '{"pageviews":0}' ); s.pageviews++;
              if ( s.urls && s.regex && ( s.page = eval('('+s.regex+')')( s.urls, on.pathname ) ) && !s.page.type ) {
                  return sessionStorage.setItem('rumv', JSON.stringify( s ) );
              }
              
              var head = si.querySelector('head'), js = si.createElement('script');
              js.src = 'https://d5yoctgpv4cpx.cloudfront.net/RUM-'+rum+'/v3-'+on.hostname+'.js';
              vi.rumv.storage = s;
              head.appendChild(js);
          })( '11302585E0', window, document, location, 'rum-nextjs.vercel.app' )`,
        }}

      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

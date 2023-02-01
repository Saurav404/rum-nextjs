import "../styles/globals.css";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="script"
        dangerouslySetInnerHTML={{
          __html: `!(function (w, d, s) {
            w.adz =
              w.adz ||
              function () {
                (w.adz.q = w.adz.q || []).push(arguments);
              };
            var l = location;
            var ss = JSON.parse(s.getItem("adz") || '{"pageviews":0}');
            ss.pageviews++;
            if (
              ss.urls &&
              ss.regex &&
              (ss.page = eval("(" + ss.regex + ")")(ss.urls, l.pathname)) &&
              !ss.page.type
            ) {
              return s.setItem("adz", JSON.stringify(ss));
            }
          
            w.adz.storage = ss;
            var js = d.createElement("script");
            js.defer = true;
            js.crossOrigin = "anonymous";
            js.src = "https://cdn.jsdelivr.net/gh/Saurav404/rum-script@717ac83/rum.js";
            d.querySelector("head").appendChild(js);
          })(window, document, sessionStorage)`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

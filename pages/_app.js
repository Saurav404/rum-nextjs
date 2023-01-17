import "../styles/globals.css";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="script"
        dangerouslySetInnerHTML={{
          __html: `window.adz =
          window.adz ||
          function () {
            (window.adz.q = window.adz.q || []).push(arguments);
          };
        (function (rum) {
          (w = window), (d = document), (l = location);
          var s = JSON.parse(sessionStorage.getItem("adz") || '{"pageviews":0}');
          s.pageviews++;
          if (
            s.urls &&
            s.regex &&
            (s.page = eval("(" + s.regex + ")")(s.urls, l.pathname)) &&
            !s.page.type
          ) {
            return sessionStorage.setItem("adz", JSON.stringify(s));
          }
        
          var head = d.querySelector("head"),
            js = d.createElement("script");
          js.src = "https://cdn.jsdelivr.net/gh/Saurav404/rum-script@de56fc5/rum.js";
          w.adz.storage = s;
          head.appendChild(js);
        })("2F7D77C9C7")`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

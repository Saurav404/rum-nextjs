import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            type="text/javascript"
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

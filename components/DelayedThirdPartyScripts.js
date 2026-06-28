import { useEffect, useState } from "react";
import Script from "next/script";

function scheduleAfterIdle(callback) {
  if (typeof window === "undefined") return undefined;

  let idleId;
  let timerId;
  let didRun = false;

  const run = () => {
    if (didRun) return;

    didRun = true;
    window.clearTimeout(timerId);
    callback();
  };

  timerId = window.setTimeout(run, 2500);

  if ("requestIdleCallback" in window) {
    idleId = window.requestIdleCallback(run, { timeout: 3500 });
  }

  return () => {
    window.clearTimeout(timerId);
    if (idleId) window.cancelIdleCallback(idleId);
  };
}

export default function DelayedThirdPartyScripts({
  gaId,
  googleAdsId,
  gtmId,
  facebookPixelId,
}) {
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => scheduleAfterIdle(() => setCanLoad(true)), []);

  if (!canLoad) return null;

  return (
    <>
      {gaId && (
        <>
          <Script
            id="ga-loader"
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script id="ga-gtag" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {googleAdsId && (
        <>
          <Script
            id="google-ads-loader"
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          />
          <Script id="google-ads-gtag" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('config', '${googleAdsId}');
            `}
          </Script>
        </>
      )}

      {gtmId && (
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
            var firstScript = document.getElementsByTagName('script')[0];
            var gtmScript = document.createElement('script');
            gtmScript.async = true;
            gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=${gtmId}';
            firstScript.parentNode.insertBefore(gtmScript, firstScript);
          `}
        </Script>
      )}

      {facebookPixelId && (
        <Script id="fb-pixel" strategy="lazyOnload">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;
            n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
            t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','${facebookPixelId}');
            fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}

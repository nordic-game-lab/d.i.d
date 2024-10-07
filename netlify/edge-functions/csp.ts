//import type { Config, Context } from "@netlify/edge-functions";

//export default async (req: Request, { cookies }: Context) => {
    //const newURL = new URL("/", req.url);
    //const res = await fetch(newURL);
    //const text = await res.text();
    //const uuid = await crypto.randomUUID();
    //return new Response(text, {
      //status: 200,
      //headers: {
        //"Content-Security-Policy": `default-src 'self' data: 'unsafe-inline' 'unsafe-eval' blob:; img-src 'self' data: 'unsafe-inline' 'unsafe-eval' blob:; script-src-elem data: 'unsafe-inline' 'unsafe-eval' blob: https://www.google.com https://www.gstatic.com 'self' https://*.sentry-cdn.com https://www.termsfeed.com https://static.nordicgamelab.org https://cdp.customer.io https://code.tidio.co https://tag.clearbitscripts.com https://app.posthog.com https://widget-v4.tidiochat.com https://x.clearbitjs.com https://us-assets.posthog.com https://js-agent.newrelic.com; style-src-elem data: 'unsafe-inline' 'unsafe-eval' blob: https://static.nordicgamelab.org 'self'; script-src data: 'unsafe-inline' 'unsafe-eval' blob:; style-src data: 'unsafe-inline' 'unsafe-eval' blob:; frame-src 'self' https://www.google.com; connect-src 'self' https://cdp.customer.io https://us.i.posthog.com https://app.clearbit.com https://bam.nr-data.net; worker-src 'self'; frame-ancestors https://*.nordicgamelab.org; report-uri https://csp.nordicgamelab.org/_cspReport?host=www.nordicgamelab.org?request-id=${uuid}; report-to csp-endpoint`,
        //"Reporting-Endpoints": `csp-endpoint="https://csp.nordicgamelab.org/_cspReport?host=www.nordicgamelab.org?request-id=${uuid}"`,
        //"ngl-request-id": uuid
      //},
    //})
//};

//export const config: Config = {
//  path: "/"
//};
# Premium weather preview

Home has a temporary Free/Premium toggle. It only switches the preview UI; it does not change account billing or subscriptions. The selection is saved locally as `wayvee-home-preview`.

Server environment in `.env.local`:

```
PUBLIC_OPENWEATHER_BASE_URL=https://api.openweathermap.org/data/2.5
PUBLIC_OPENWEATHER_API_KEY=your-key
```

Restart Vite after editing environment settings. Despite the PUBLIC prefix supplied for this integration, these settings are read by Node only; they are not exposed to Vite client code.

The weather plugin exposes `GET /api/weather?city=hanoi&type=weather` and `type=forecast`. Supported cities: `hanoi`, `danang`, `hcm`. Responses are cached for 10 minutes; concurrent identical requests share one upstream request. Requests use metric units and Vietnamese descriptions. Forecast data uses 3-hour intervals, displayed in Vietnam time, including dates when the forecast crosses midnight.

The middleware runs with `npm run dev` and `npm run preview`. For a production deployment, mount `createWeatherHandler(env)` from `server/weather.js` in a Node/Connect-compatible backend at the same origin. A static-only deployment does not run this middleware and will need a backend route. Do not put the API key into the static bundle.

Official API references: https://openweathermap.org/current and https://openweathermap.org/forecast5.

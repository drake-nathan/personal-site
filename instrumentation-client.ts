/* eslint-disable perfectionist/sort-objects */
import posthog from "posthog-js";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (!posthogKey) {
  throw new Error("Posthog key not found");
}

posthog.init(posthogKey, {
  api_host: "/ingest",
  ui_host: "https://us.posthog.com",
  // Include the defaults option as required by PostHog
  defaults: "2025-05-24",
  // Enables capturing unhandled exceptions via Error Tracking
  capture_exceptions: true,
  // Turn on debug in development mode
  debug: process.env.NODE_ENV === "development",
});

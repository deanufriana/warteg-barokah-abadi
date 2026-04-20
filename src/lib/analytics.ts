/**
 * Utility to track Google Analytics events safely.
 * @param eventName The name of the event (e.g., 'click_order_now')
 * @param params Optional object with event parameters
 */
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

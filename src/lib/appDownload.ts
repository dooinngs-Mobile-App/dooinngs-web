export const IOS_APP_STORE_URL =
  "https://apps.apple.com/gh/app/dooinngs-discover-artisans/id6755143424";

export const ANDROID_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.dooinngs.dooinngs";

export function getAppDownloadUrl(userAgent: string) {
  const normalizedUserAgent = userAgent.toLowerCase();

  if (/android/.test(normalizedUserAgent)) {
    return ANDROID_PLAY_STORE_URL;
  }

  return IOS_APP_STORE_URL;
}

export function openAppDownloadLink(target: "_self" | "_blank" = "_blank") {
  if (typeof window === "undefined") {
    return;
  }

  const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent;
  const downloadUrl = getAppDownloadUrl(userAgent);

  window.open(downloadUrl, target);
}

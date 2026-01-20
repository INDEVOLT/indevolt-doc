import React, { useEffect } from "react";
import { useLocation, useHistory } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";

const normalizeLang = (lang: string): string => lang.toLowerCase();

const BrowserRedirect = (): JSX.Element | null => {
  return <BrowserOnly>{() => <RedirectLogic />}</BrowserOnly>;
};

const RedirectLogic = () => {
  const { i18n } = useDocusaurusContext();
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    // 1. Only redirect if at the absolute root '/'
    if (pathname !== "/") return;

    // 2. Prevent redirect if user explicitly navigated here (e.g. clicked "Home" or "English")
    // 'PUSH' indicates a client-side navigation (link click)
    if (history.action === "PUSH") return;

    // 3. Prevent redirect loop if we already redirected in this session
    const storageKey = "docusaurus.i18n.hasRedirected";
    if (sessionStorage.getItem(storageKey)) return;

    // 4. Detect browser language (zh-CN -> zh)
    const browserLang = navigator.language.split("-")[0].toLowerCase();

    // 5. Check if we should redirect
    const isSupported = i18n.locales.includes(browserLang);
    const isNotDefault = browserLang !== i18n.defaultLocale;

    // Check if the user has manually chosen a language before (optional)
    const hasManualChoice = localStorage.getItem("docusaurus.i18n.prevLocale");

    if (isSupported && isNotDefault && !hasManualChoice) {
      // IMPORTANT: Use window.location.href to switch between localized apps.
      // Do NOT use history.push/replace here.
      sessionStorage.setItem(storageKey, "true");
      window.location.href = `/${browserLang}/`;
    }
  }, [pathname, i18n, history]);
  return null;
};

export default BrowserRedirect;

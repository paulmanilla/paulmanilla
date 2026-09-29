"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const EMAIL = "paulmanillabello@gmail.com";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API no disponible (permiso denegado, contexto no seguro): el email
      // sigue visible y copiable a mano, así que no hace falta mostrar un error.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="btn-outline !px-5 !py-2.5 text-sm"
      aria-label="Copy email address to clipboard"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" aria-hidden="true" />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" aria-hidden="true" />
          {EMAIL}
        </>
      )}
    </button>
  );
}

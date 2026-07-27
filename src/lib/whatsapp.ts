export const WHATSAPP_PHONE = "5531991666106";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  window.open(buildWhatsAppUrl(message), "_blank");
}

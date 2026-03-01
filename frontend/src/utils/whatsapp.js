export function normalizePhone(phoneRaw) {
  return String(phoneRaw || "").replace(/\D/g, "");
}

export function defaultWhatsAppText() {
  return (
    "Olá! Quero agendar uma avaliação no Studio Batisteli | Regeneração de Fios.\n\n" +
    "Pode me informar horários disponíveis?\n\n" +
    "Nome: ___ | Unidade/Bairro: ___ | Melhor dia/horário: ___"
  );
}

export function openWhatsApp(phoneRaw, text = defaultWhatsAppText()) {
  const phone = normalizePhone(phoneRaw);
  const message = encodeURIComponent(text);
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank", "noopener,noreferrer");
}
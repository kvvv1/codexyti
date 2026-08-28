import { buildWhatsAppUrl } from "@/lib/whatsapp";

const WhatsAppFloatButton = () => {
  return (
    <a
      href={buildWhatsAppUrl("Olá! Vim pelo site e gostaria de saber mais sobre a Codexy.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.652 4.53 1.788 6.396L4 29l7.83-1.75A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.6a9.55 9.55 0 0 1-4.87-1.34l-.35-.21-4.64 1.04 1.05-4.52-.23-.37A9.56 9.56 0 1 1 25.56 15a9.57 9.57 0 0 1-9.556 9.6Zm5.24-7.14c-.287-.144-1.696-.837-1.96-.933-.263-.096-.454-.144-.645.144-.19.288-.74.933-.907 1.125-.167.192-.334.216-.62.072-.288-.144-1.216-.448-2.318-1.43-.857-.764-1.436-1.708-1.604-1.996-.167-.288-.018-.443.126-.587.13-.129.288-.336.43-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.645-1.554-.884-2.13-.233-.56-.47-.484-.645-.492-.167-.008-.358-.01-.549-.01-.192 0-.504.072-.768.36-.263.288-1.005.982-1.005 2.395s1.029 2.777 1.172 2.969c.144.192 2.024 3.09 4.905 4.334.685.296 1.22.472 1.637.604.688.219 1.314.188 1.809.114.552-.082 1.696-.693 1.936-1.362.24-.67.24-1.243.167-1.362-.072-.12-.263-.192-.55-.336Z" />
      </svg>
    </a>
  );
};

export default WhatsAppFloatButton;

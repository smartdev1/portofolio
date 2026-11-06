import confetti from "canvas-confetti";

interface CopyOptions {
  particleCount?: number;
  spread?: number;
  origin?: { y: number };
  colors?: string[];
}

export function useCopyToClipboard(triggerToast: (msg: string) => void) {
  const copyToClipboard = async (
    text: string,
    successMessage: string,
    withConfetti?: boolean,
    confettiOptions?: CopyOptions
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      triggerToast(successMessage);
      if (withConfetti) {
        try {
          confetti({
            particleCount: confettiOptions?.particleCount ?? 30,
            spread: confettiOptions?.spread ?? 50,
            origin: confettiOptions?.origin ?? { y: 0.7 },
            colors: confettiOptions?.colors ?? ["#2563eb", "#059669", "#0f172a"],
          });
        } catch {
          // Confetti fallback — non-critical
        }
      }
    } catch {
      triggerToast(text);
    }
  };

  return { copyToClipboard };
}

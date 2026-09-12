// Resn-style Interactive Web Audio Synthesizer (Pure Web Audio API)

class SoundController {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  initContext() {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  // 1. Futuristic ambient rise / loader charge sound
  playLoaderCharge() {
    if (this.isMuted) return;
    try {
      const ctx = this.initContext();
      if (!ctx || ctx.state !== "running") return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = "sine";
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(520, now + 1.2);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(2200, now + 1.2);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.12, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.3);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 1.35);
    } catch (e) {
      console.warn("Audio play prevented:", e);
    }
  }

  // 2. Resn-style crystal reveal chime
  playRevealChime() {
    if (this.isMuted) return;
    try {
      const ctx = this.initContext();
      if (!ctx || ctx.state !== "running") return;

      const now = ctx.currentTime;
      const chords = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6

      chords.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + index * 0.04);

        gain.gain.setValueAtTime(0.001, now + index * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.1 / (index + 1), now + index * 0.04 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.1);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + index * 0.04);
        osc.stop(now + 1.15);
      });
    } catch (e) {
      console.warn("Audio chime prevented:", e);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}

export const sound = new SoundController();
export default sound;

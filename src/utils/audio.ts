/**
 * Plays a physically synthesized Himalayan Temple Bell chime using the Web Audio API.
 * Uses high-pitch chime bells layered with low-resonant bronze hums.
 */
export function playTempleBell() {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    const ctx = new AudioContextClass();
    
    // Core chime sweep (representing the initial impact of the clapper)
    const chimeOsc = ctx.createOscillator();
    const chimeGain = ctx.createGain();
    
    // Low bell body resonance (the warm bronze container vibration)
    const bodyOsc = ctx.createOscillator();
    const bodyGain = ctx.createGain();
    
    // Secondary overtone (gives the classic hand-cast bell character)
    const overtoneOsc = ctx.createOscillator();
    const overtoneGain = ctx.createGain();
    
    // Warm spring reverb filter
    const lowpass = ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.setValueAtTime(2500, ctx.currentTime);
    lowpass.Q.setValueAtTime(1, ctx.currentTime);

    // Frequencies (D-Maj pentatonic resonant scales)
    chimeOsc.type = 'sine';
    chimeOsc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    // Subtle downward pitch sweep mimicking heavy physical bronze contraction
    chimeOsc.frequency.exponentialRampToValueAtTime(550.00, ctx.currentTime + 1.5);
    
    overtoneOsc.type = 'sine';
    overtoneOsc.frequency.setValueAtTime(880.00, ctx.currentTime); // A5 (Fifth harmonic)
    overtoneOsc.frequency.exponentialRampToValueAtTime(860.00, ctx.currentTime + 1.2);
    
    bodyOsc.type = 'triangle';
    bodyOsc.frequency.setValueAtTime(146.83, ctx.currentTime); // D3 (Sub-bass drone hum)

    // Chime Envelope (sharp attack, smooth decay)
    chimeGain.gain.setValueAtTime(0.25, ctx.currentTime);
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.0);
    
    // Overtone Envelope (faster decay)
    overtoneGain.gain.setValueAtTime(0.12, ctx.currentTime);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
    
    // Body resonance Envelope (slow swell, long warm ring)
    bodyGain.gain.setValueAtTime(0.0, ctx.currentTime);
    bodyGain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.08);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

    // Signal Routing
    chimeOsc.connect(chimeGain);
    overtoneOsc.connect(overtoneGain);
    bodyOsc.connect(bodyGain);
    
    chimeGain.connect(lowpass);
    overtoneGain.connect(lowpass);
    bodyGain.connect(lowpass);
    
    lowpass.connect(ctx.destination);
    
    // Begin celestial acoustics
    chimeOsc.start();
    overtoneOsc.start();
    bodyOsc.start();
    
    // Scheduled teardown
    chimeOsc.stop(ctx.currentTime + 2.2);
    overtoneOsc.stop(ctx.currentTime + 1.5);
    bodyOsc.stop(ctx.currentTime + 2.0);
  } catch (error) {
    console.warn("Web Audio Context execution blocked or unsupported:", error);
  }
}

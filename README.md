# modal-synth

Modal synthesis represented as coupled feedback loops.

Live at www.subtleblank.com

## TODO


### cycle modulators


set tempo
- up and down arrows?
- master clock tempo
  - variable time clocks
    - adjustable integer multiple of master period

adjust node state with up/down mousing
- left/right makes it hard to keep track of changed node
- or use visual cue for node currently selected?
  - with fade out after release

make more/less cycles
- plus and minus next to master

click on node
- right click sets node as next active node?

link between successive nodes can be set to discrete/continuous
- shown by dashed or continuous line
- continuous link: discretize into small segments
  - segment size found by what's efficient, smooth

---

audio in

**why does it crash sometimes when key is pressed**

try compressor on master only
 - w large delays also

harshness controller:
- gain controller (compressor) that takes high frequency content as control signal
- slider sets desired amount of high frequency content

keyboard control
select fader w keyboard
 - highlight
 - send to pos
send fader to pos over time
 - setInterval()
reverb
adsr keyboard
 - with sliders for a, d, s, r
master channel spectrum vis
channel spectrum vis
save states
morph between states
 - morph time
 - morph curve (eg linear, step)

signal flow shown visually

control system to regulate amplitude between decay/saturation
- compressor
- control with cycle modulator

event oscillator
 - polyrythms?

chopper/tremolo (discourse)

fullscreen

rainmask into modal synth
 - audio pipe utility page?

come back from sleep


## License

CC BY 4.0

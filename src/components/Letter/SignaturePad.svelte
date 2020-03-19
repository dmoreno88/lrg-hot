<script>
    import SignaturePad from "signature_pad";
    import { PDFDocument } from 'pdf-lib';
    import {onMount, createEventDispatcher} from "svelte";

    let canvas;
    let signaturePad;

    const dispatch = createEventDispatcher();
    onMount(() => {
        signaturePad = new SignaturePad(canvas, {
            // It's Necessary to use an opaque color when saving image as JPEG;
            // this option can be omitted if only saving as PNG or SVG
            backgroundColor: 'rgb(255, 255, 255)'
            });

           

            window.onresize = resizeCanvas;

            dispatch("ready");
           
    })

    function onClear(){
        signaturePad.clear();
    }

    function onGenerate(){

        if(!signaturePad.isEmpty()) {
             const image = signaturePad.toDataURL()

            var windowContent = '<!DOCTYPE html>';
            windowContent += '<html>'
            windowContent += '<head><title>Address Letter</title></head>';
            //windowContent += '<style>img {position: absolute;} </style>'
            windowContent += '<body>'
            windowContent += '<img src="' + image + '">';
            windowContent += '</body>';
            windowContent += '</html>';
            var printWin = window.open('','_blank');
            printWin.document.open();
            printWin.document.write(windowContent);
            
            printWin.focus();
            printWin.print();
        }
       
    }

    export function resizeCanvas() {
        // When zoomed out to less than 100%, for some very strange reason,
        // some browsers report devicePixelRatio as less than 1
        // and only part of the canvas is cleared then.
        var ratio =  Math.max(window.devicePixelRatio || 1, 1);

        // This part causes the canvas to be cleared
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);

        // This library does not listen for canvas changes, so after the canvas is automatically
        // cleared by the browser, SignaturePad#isEmpty might still return false, even though the
        // canvas looks empty, because the internal data of this library wasn't cleared. To make sure
        // that the state of this library is consistent with visual state of the canvas, you
        // have to clear it manually.
        signaturePad.clear();
    }

</script>
<style>
    .signature-pad {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  font-size: 10px;
  width: 100%;
  height: 100%;
  left: 50%;
  margin-left: -300px;
  max-width: 700px;
  max-height: 460px;
  border: 1px solid #e8e8e8;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.08) inset;
  border-radius: 4px;
  padding: 16px;
}

.signature-pad::before,
.signature-pad::after {
  position: absolute;
  z-index: -1;
  content: "";
  width: 40%;
  height: 10px;
  bottom: 10px;
  background: transparent;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
}

.signature-pad::before {
  left: 20px;
  -webkit-transform: skew(-3deg) rotate(-3deg);
          transform: skew(-3deg) rotate(-3deg);
}

.signature-pad::after {
  right: 20px;
  -webkit-transform: skew(3deg) rotate(3deg);
          transform: skew(3deg) rotate(3deg);
}

.signature-pad--body {
  position: relative;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  border: 1px solid #f4f4f4;
}

.signature-pad--body
canvas {
 
  width: 100%;
  height: 100%;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.02) inset;
}

.signature-pad--footer {
  color: #C3C3C3;
  text-align: center;
  font-size: 1.2em;
  margin-top: 8px;
}

.signature-pad--actions {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-top: 8px;
}


</style>
<div id="signature-pad" class="signature-pad">
    <div class="signature-pad--body">
      <canvas  bind:this={canvas}>
      </canvas>
    </div>
    <div class="signature-pad--footer">
      <div class="description">Sign above</div>

      <div class="signature-pad--actions">
        <div>
          <button on:click={onClear} type="button" class="button clear" data-action="clear">Clear</button>
        </div>
        <div>
          <p><input type="checkbox" /> I consent to use Electronic Records and Signatures </p>'
          <button on:click={onGenerate} type="button" class="button save" >Preview Online</button>
          <button on:click={onGenerate} type="button" class="button save" >E-mail Letter</button>
        </div>
      </div>
    </div>
  </div>

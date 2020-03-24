<script>
    import SignaturePad from "signature_pad";
    import {onMount, createEventDispatcher} from "svelte";
    export let pdf;

    let canvas;
    let signaturePad;
    let main = "https://gis.lrgvdc911.org/LETTER_TEMPLATES/"

    const dispatch = createEventDispatcher();
   

     let pdfDoc;
     let url;
   
    onMount(() => {
        console.log("SIGNATURE PAD");
      

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

    async function onGenerate(){

        if(!signaturePad.isEmpty()) {
             console.log("bytes");
            
  
              url = `${main}${pdf}`;
              console.log(url);
             const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
            pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes)

             const image = signaturePad.toDataURL().split(",");

             const arrayBuffer = Uint8Array.from(atob(image[1]), c => c.charCodeAt(0))
             const pngImage = await pdfDoc.embedPng(arrayBuffer)
             const pngDims = pngImage.scale(0.5);

              const pages = pdfDoc.getPages()
              const page = pages[0];

              page.drawImage(pngImage, {
              x: page.getWidth() / 2 - pngDims.width / 2 + 75,
              y: page.getHeight() / 2 - pngDims.height + 250,
              width: pngDims.width,
              height: pngDims.height,
            })

             const pdfBytes = await pdfDoc.save()
             download(pdfBytes, pdf, "application/pdf");
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
          <p><input type="checkbox" /> English Letter</p>
          <p><input type="checkbox" /> Spanish Letter</p>
        </div>
        <div>
          <p><input type="checkbox" /> I consent to use Electronic Records and Signatures </p>
          <button on:click={onGenerate} type="button" class="button save" >Preview Online</button>
          <button on:click={onGenerate} type="button" class="button save" >E-mail Letter</button>
        </div>
      </div>
    </div>
  </div>

<script>
    import SignaturePad from "signature_pad";
    import {PDFDocument} from 'pdf-lib';
    import {onMount, createEventDispatcher} from "svelte";
    import {count} from "../store/stores.js";
    export let pdf = "";
    export let fname;
    export let record;

    let canvas;
    let element;
    let signaturePad;
    let main = "https://gis.lrgvdc911.org/LETTER_TEMPLATES/"
    let apiLetter = "https://gis.lrgvdc911.org/php/spartan/api/v2/index.php/addressticket/grabPDFESign/";
    let sendLetter = "https://gis.lrgvdc911.org/php/spartan/api/v2/sendEmail.php";
    let language;
    let errorMSG = "";
    let animate = false;
    let consent = false;
    let href;
    let isMobile = false;

    const dispatch = createEventDispatcher();
   

     let pdfDoc;
     let pdfjsLIb;
     let bufferBytes;
     let render;
     let context;

     $: url =  `${main}${pdf}`;
   
    onMount(() => {
        console.log("SIGNATURE PAD");
        var mwidth = document.body.clientWidth;
        isMobile = window.isMobile;
      
       
        render = document.createElement("CANVAS");
        context = render.getContext('2d');

        pdfjsLIb = window['pdfjs-dist/build/pdf'];
        pdfjsLIb.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.worker.min.js'//'https://mozilla.github.io/pdf.js/build/pdf.worker.js';
        
        element.scrollIntoView()

        //Setup Canvas...
        signaturePad = new SignaturePad(canvas, {
            // It's Necessary to use an opaque color when saving image as JPEG;
            // this option can be omitted if only saving as PNG or SVG
           // backgroundColor: 'rgb(255, 255, 255)'
         });

          //ON RESIZE
            window.onresize = resizeCanvas;
            resizeCanvas();
            dispatch("ready");

            download(pdf);
           
    })

   export function download(pdf){
      //DOWNLOAD THE CANVAS..
       fetch(`${main}${pdf}`).then(res => {return res.arrayBuffer();}).then((buffer) => {
           bufferBytes = buffer;
       })
   }

    function onClear(){
        signaturePad.clear();
    }

    function checkInputs() {
       let response = {"error" : false, "msg" : ""};
    

      if(signaturePad.isEmpty()) {
         response.error = true;
         response.msg = "Please sign above!";
         return response;
      }
      if(!consent) {
        response.error = true;
        response.msg = "Please check the consent box!";
        return response;
      }
      console.log(language);

      if(language == null){
        response.error  = true;
        response.msg = "Please select a language!";
        return response;
      }

      if(pdf == null){
        response.error = true;
        response.msg = "Please refresh the page!";
        return response;
      }

       return response;
    }

    async function onGenerate(){
        dispatch("loading", true);
        let option = this.dataset['index'];
        
        errorMSG = "";
        
        let Response = checkInputs();
       
        if(!Response.error) {
           canvas.classList.toggle("hide")
           dispatch("loading", true);
            var form = new FormData();
            
            var jpg = pdf.replace(".pdf", ".jpg");
            form.append("pdfName", pdf);
            form.append("jpgName", jpg);
            form.append("id", record['id_ticket']);
     
        
            pdfDoc = await PDFDocument.load(bufferBytes)

             const image = signaturePad.toDataURL().split(",");

             const arrayBuffer = Uint8Array.from(atob(image[1]), c => c.charCodeAt(0))
             const pngImage = await pdfDoc.embedPng(arrayBuffer)
             const pngDims = pngImage.scale(0.2);
             
              let pages = pdfDoc.getPages()
              let index = (language == 0) ? 1 : 0;
              let page = pages[index];
              
             
                 page.drawImage(pngImage, {
                  x: (page.getWidth() / 2),
                  y: 150,
                  width: pngDims.width,
                  height: pngDims.height,
                })

              
                page.drawText(fname,  {x: (page.getWidth() / 2),
                 y: 110,
                  size: 20,
                  lineHeight: 24,
                })

              
             
              pdfDoc.removePage(language);
             
              
              var blob = await pdfDoc.saveAsBase64()
              
              var pdfData = atob(blob);
              var loadingTask = pdfjsLib.getDocument({data: pdfData});
              form.append("pdf64", blob);


                loadingTask.promise.then(function(pdF) {
                console.log('PDF loaded');
                
                pdF.getPage(1).then(function(pge) {
                    console.log('Page loaded');
                    
                    var scale = 1.5;
                    var viewport = pge.getViewport({scale: scale});

                    // Prepare canvas using PDF page dimensions
                 
                    render.height = viewport.height;
                    render.width = viewport.width;

                  // Render PDF page into canvas context
                    var renderContext = {
                      canvasContext: context,
                      viewport: viewport
                    };
                    var renderTask = pge.render(renderContext);
                    renderTask.promise.then(async function () {
                     var jpgToPDF = render.toDataURL('image/jpeg')
                     form.append("jpg64", jpgToPDF)
                     finishResults(form, option, pdfDoc);
                      //  fetch(apiLetter, {method: 'post', body: form}).then((response) => {
                      //     processOptions(option, pdfDoc)
                          
                      //     dispatch("loading", false);
                      //     dispatch("done");
                      //  });

                    });
                });
              }, function (reason) {
                // PDF loading error
                alert("Couldn't process request please try again!")
                console.error(reason);
              });
             
        }else{
          animate = true;
          errorMSG = Response.msg;
          setTimeout(() => {animate = false}, 800);
        }
       
    }

    function finishResults(form, option, pdfDoc){
           count.update(n => n = 0); //Reset percentage..
           let timer = null;
          // 1. Create a new XMLHttpRequest object
          let xhr = new XMLHttpRequest();

          // 2. Configure it: GET-request for the URL /article/.../load
          xhr.open('POST', apiLetter, true);

         

          // 4. This will be called after the response is received
          xhr.onload = function() {
            if (xhr.status != 200) { // analyze HTTP status of the response
              dispatch("loading", false);
              dispatch("done");
              alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
               
            } else { // show the result
             // response is the server
                if(timer){
                  clearInterval(timer);
                }
                count.update(n => n = 100);

                setTimeout(() => {
                   processOptions(option, pdfDoc)
                  dispatch("loading", false);
                  dispatch("done");
                }, 350);
                
            }
          };

          xhr.upload.onprogress = function(event) {
            console.log(event);
            if (event.lengthComputable) {
              let loaded = event.loaded;
              let total  = event.total;
              let percentage = Math.floor((loaded/total) * 100);
            
             if(timer == null){
               timer = setInterval(() => {
                 count.update(n => n + 1);
               }, 600);
             }
              console.log(percentage);
              console.log(`Received ${event.loaded} of ${event.total} bytes`);
            } else {
              console.log(`Received ${event.loaded} bytes`); // no Content-Length
            }

          };

          xhr.onerror = function() {
            alert("You're request failed try again. Use Wifi if possible.");
          };

           // 3. Send the request over the network
          xhr.send(form);
    }

   async function processOptions(option, pdfDoc){
      
       if(option == 1){
            var email = prompt("Please enter your email?");
            var data = new FormData();
            data.append("pdfName", pdf);
            data.append("email", email);
            fetch(sendLetter, {method: 'post', body: data}).then((e)=>{
               alert("E-mail has been sent please check mailbox.")
            });
            }else if(option == 2){
                        
                href = await pdfDoc.saveAsBase64({ dataUri: true })
              
                var iframe = "<iframe width='100%' height='100%' src='" + href + "'></iframe>"
                var win = window.open();
                win.document.open();
                win.document.write(iframe);
                win.document.close();
                window.focus()
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
  height: 200px;
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

input[type="radio"] {
  color: red;
}

.error{
   font-size: 30px;
   color: red;
   animation: glow 1s ease-in-out infinite alternate;
}
.err{
  font-size: 30px;
  color: red !important;
}

@keyframes glow {
    0% {color: rgb(163, 9, 9)}
    25% {color: rgb(78, 0, 0)}
    50% {color: rgb(163, 9, 9)}
    65% {color: rgb(78, 0, 0)}
    80% {font-size:8px; opacity:1;}
    90% {color: rgb(78, 0, 0)}
    100% {font-size:8px;opacity:1; }
}

p{
  color: black;
}
.liAlign{
  text-align: start;
}

 @media screen and (max-width: 500px) {
    .signature-pad {
       width: auto;
       left:0;
       margin-left:0;
    }
    
 }


</style>
  <div  bind:this={element} id="signature-pad" class="signature-pad rotate-mobile">
  
    <div class="signature-pad--body">
      <canvas  bind:this={canvas}>
      </canvas>
    </div>
    <div class="signature-pad--footer">
      <div class="description">Sign above</div>

      <div class="signature-pad--actions">
        <div>
          <button on:click={onClear} type="button" class="button clear" data-action="clear">Clear</button>
           <button on:click={onGenerate} data-index="1" type="button" class="button save" >E-mail Letter</button>
          <button on:click={onGenerate} data-index="2" type="button" class="button save">
            Print Letter
          </button>
        </div>
        <div>
          <ul style="list-style: none;">
            <li>
                <input bind:value={consent} type="checkbox" /> I consent to use Electronic Records and Signatures 
            </li>
            <li class="liAlign"> 
              <input bind:group={language} value={1} name="language" type="radio" /> English Letter </li>
            <li class="liAlign">
              <input bind:group={language} value={0} name="language" type="radio" /> Spanish Letter
            </li>       
           </ul>


         
        </div>
        
      </div>
      <p class:error={animate} class="err">{errorMSG}</p>
    </div>
  </div>


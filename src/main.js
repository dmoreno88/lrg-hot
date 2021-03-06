import svelte from 'crayon-svelte';
import crayon from 'crayon';
import animate from 'crayon-animate'
import transition from 'crayon-transition'
import Home from './pages/Home.svelte';
import { ChunkGenerator } from 'svelte-spa-chunk'
import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte'
const Chunk = ChunkGenerator(ChunkComponent)


const outlet = document.getElementById('app')
const skeleton = document.getElementById('skeleton');
window.app = crayon.create() 

app.use(svelte.router(outlet))
app.use(transition.loader())
app.use(animate.defaults({
    name: transition.pushLeft,
    duration: 350
}))

app.path('/', (req, res) => {
    req.mount(Home);
})

//ADD any new paths into the website by following this code below...

app.path('/WhoWeAre', async ctx=>{
    ctx.mount(Chunk(()=> import("./pages/WhoWeAre.svelte")));
});

app.path('/UnderConstruction', async ctx=>{
    ctx.mount(Chunk(()=> import("./pages/UnderConstruction.svelte")));
});

app.path('/ContactList', async ctx=>{
    ctx.mount(Chunk(()=> import("./pages/ContactList.svelte")));
});

app.path('/PublicEducation', async ctx => {
    ctx.mount(Chunk(()=> import('./pages/PubEd.svelte')));
})

app.path('/EventRequest', async ctx => {
    ctx.mount(Chunk(()=> import('./pages/PubEventForm.svelte')));
})



app.path('/SignLetter', async ctx => {
    ctx.mount(Chunk(() => import('./pages/OpenTickets.svelte')));
});

//Call this function below to load your app....
app.load()

//Remove the skeleton loading...
//As well pop up the option to change language.
if(skeleton){
    let target = document.getElementById("gLang");
    target.style.display = "block";
    skeleton.remove();    
}


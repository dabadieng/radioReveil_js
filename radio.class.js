class Radio {
    constructor(parent) {
        //création de la div générale
        this.dom=document.createElement("div");
        parent.appendChild(this.dom);

        //liste déroulante des stations
        this.select=document.createElement("select");
        this.dom.appendChild(this.select);
        for(let i=0; i<liste.length; i++) {
            let x=document.createElement("option");
            x.innerHTML=liste[i].nom;
            x.value=liste[i].flux;
            this.select.appendChild(x);
        }
        this.select.addEventListener("change",()=>this.play());

        //lecteur audio
        this.audio=document.createElement("audio");
        this.dom.appendChild(this.audio);
        this.audio.controls=true;

        //bouton stop et play
        this.btStop=document.createElement("button");
        this.btStop.innerHTML="Stop";
        this.dom.appendChild(this.btStop);
        this.btStop.addEventListener("click",()=>this.stop());

        this.btPlay=document.createElement("button");
        this.btPlay.innerHTML="Play";
        this.dom.appendChild(this.btPlay);
        this.btPlay.addEventListener("click",()=>this.play());

    }

    stop() {
        this.audio.pause();
    }

    play() {
        this.audio.src=this.select.value;
        this.audio.play();
    }
}

let liste = [
	{
		nom: "FIP",
		flux: "http://direct.fipradio.fr/live/fip-lofi.mp3"
	},
	{
		nom: "NRJ France",
		flux: "http://cdn.nrjaudio.fm/audio1/fr/30001/mp3_128.mp3?origine=fluxradios"
	},
	{
		nom: "Nostalgie",
		flux: "http://cdn.nrjaudio.fm/audio1/fr/30601/mp3_128.mp3?origine=fluxradios"
	}
];
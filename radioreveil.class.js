class RadioReveil extends Horloge {
    constructor(parent,audiosrc) {
        super(parent,audiosrc);
        this.radio=new Radio(parent);
        this.checkbox=document.createElement("input");
        this.checkbox.type="checkbox";
        parent.appendChild(this.checkbox);
        let x=document.createElement("label");
        x.innerHTML="Alarme radio";
        parent.appendChild(x);        
    }

    affichage() {
        let t = new Date();    
        this.dom.innerHTML = deuxdigits(t.getHours()) + ":" + deuxdigits(t.getMinutes()) + ":" + deuxdigits(t.getSeconds());                
        let chaine=this.alarme.alarmeHeure.dom.value + ":" + this.alarme.alarmeMinute.dom.value + ":" + this.alarme.alarmeSeconde.dom.value;
        if (chaine==this.dom.innerHTML) {
            if (this.checkbox.checked)
                this.radio.play();
            else
                this.alarme.audioAlarme.play();
        }
            
    }
}
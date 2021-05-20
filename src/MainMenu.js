function MainMenu(){
    return (
        <div id="content" style={{width: "50%",marginLeft: "25%", boxShadow: "0px 5px 10px 2px var(--blue)"}}>
            <div className="banner" style={{backgroundColor:"white", marginLeft:"-12px", marginTop:"0",width:"102%", borderRadius: "15px"}}>
                <center>
                    <img src="img/homepage/banner.jpg" alt="banner"/>
                </center>
            </div>
            <div style={{margin: "0 30px"}}>
                <h3 style={{textAlign:"center"}}>Il progetto</h3>
                <p>Questo sito è un progetto di Educazione Civica sostenuto e realizzato da tre ragazzi dell IIS. Fermo Corni. Il tema principale è quello dei problemi ambientali che a causa dell'uomo si stanno abbattendo sul nostro pianeta e di come si
                    possano risolvere.</p>
                <p>Per strutturare il sito ci siamo basati sull'Agenda 2030, che raggruppa tutti i principali problemi attuali e soluzioni ad essi, ed abbiamo cercato online vari dati e informazione collegate a questi argomenti; con l'obbiettivo di diffondere
                    e far conoscere questi problemi che riguardano ognuno di noi e di come poter aiutare a migliorare le condizioni della Terra e la vita degli organismi che la abitano, prima che sia troppo tardi.</p>
                <h3 style={{textAlign:"center"}}>Che cos'è l'Agenda 2030?</h3>
                <p>L’Agenda 2030 per lo Sviluppo Sostenibile, adottata dall’Assemblea Generale delle Nazioni Unite nel 2015, è un quadro di riferimento utile a orientare le nostre scelte e le nostre azioni su percorsi di sostenibilità affinché la pace e
                    l’equità, la prosperità e lo stare bene diventino elementi comuni nella vita di ciascuno indipendentemente dal luogo in cui si nasce e si vive. Si tratta di un documento concreto che propone ai Paesi che lo hanno adottato la realizzazione
                    di diciassette obiettivi per lo sviluppo sostenibile (Sustainable Development Goals) che sono divenuti cruciali per la sopravvivenza dell’intera umanità. C’è un limite temporale - il 2030 - per realizzarli e ci sono dei traguardi di
                    breve, medio e lungo termine da raggiungere.</p>
                <p>La realizzazione dei 17 obiettivi ha bisogno che ciascuno di noi sviluppi competenze in termini di conoscenze, di abilità, di valori e atteggiamenti per poter essere messo nelle condizioni di trasformare il modo in cui pensiamo e agiamo
                    e per poter collaborare con altri nella realizzazione di azioni che determinano cambiamenti nel modo di produrre, di consumare, di lavorare, di muoversi, di abitare, di vivere con gli altri. Tutto questo non sarebbe possibile senza
                    un impegno dell’istruzione e della scuola.</p>
            </div>
        </div>
    );
}

export default MainMenu;


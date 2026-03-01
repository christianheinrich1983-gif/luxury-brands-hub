const brands = [

/* =======================
   UHREN (80)
======================= */
{ name:"A. Lange & Söhne", category:"watch", url:"https://www.alange-soehne.com", icon:"alangesohne" },
{ name:"Audemars Piguet", category:"watch", url:"https://www.audemarspiguet.com", icon:"audemarspiguet" },
{ name:"Baume & Mercier", category:"watch", url:"https://www.baume-et-mercier.com", icon:"baumeetmercier" },
{ name:"Bell & Ross", category:"watch", url:"https://www.bellross.com", icon:"bellross" },
{ name:"Blancpain", category:"watch", url:"https://www.blancpain.com", icon:"blancpain" },
{ name:"Breguet", category:"watch", url:"https://www.breguet.com", icon:"breguet" },
{ name:"Breitling", category:"watch", url:"https://www.breitling.com", icon:"breitling" },
{ name:"Bulgari", category:"watch", url:"https://www.bulgari.com", icon:"bulgari" },
{ name:"Cartier", category:"watch", url:"https://www.cartier.com", icon:"cartier" },
{ name:"Chopard", category:"watch", url:"https://www.chopard.com", icon:"chopard" },
{ name:"Citizen", category:"watch", url:"https://www.citizenwatch.com", icon:"citizen" },
{ name:"Corum", category:"watch", url:"https://www.corumwatches.com", icon:"corum" },
{ name:"Ebel", category:"watch", url:"https://www.ebel.com", icon:"ebel" },
{ name:"F.P. Journe", category:"watch", url:"https://www.fpjourne.com", icon:"fpjourne" },
{ name:"Girard-Perregaux", category:"watch", url:"https://www.girard-perregaux.com", icon:"girardperregaux" },
{ name:"Glashütte Original", category:"watch", url:"https://www.glashuette-original.com", icon:"glashutteoriginal" },
{ name:"Grand Seiko", category:"watch", url:"https://www.grand-seiko.com", icon:"grandseiko" },
{ name:"Hamilton", category:"watch", url:"https://www.hamiltonwatch.com", icon:"hamilton" },
{ name:"Hublot", category:"watch", url:"https://www.hublot.com", icon:"hublot" },
{ name:"IWC", category:"watch", url:"https://www.iwc.com", icon:"iwc" },
{ name:"Jaeger-LeCoultre", category:"watch", url:"https://www.jaeger-lecoultre.com", icon:"jaegerlecoultre" },
{ name:"Longines", category:"watch", url:"https://www.longines.com", icon:"longines" },
{ name:"Montblanc", category:"watch", url:"https://www.montblanc.com", icon:"montblanc" },
{ name:"Nomos Glashütte", category:"watch", url:"https://nomos-glashuette.com", icon:"nomos" },
{ name:"Omega", category:"watch", url:"https://www.omegawatches.com", icon:"omega" },
{ name:"Oris", category:"watch", url:"https://www.oris.ch", icon:"oris" },
{ name:"Panerai", category:"watch", url:"https://www.panerai.com", icon:"panerai" },
{ name:"Patek Philippe", category:"watch", url:"https://www.patek.com", icon:"patekphilippe" },
{ name:"Piaget", category:"watch", url:"https://www.piaget.com", icon:"piaget" },
{ name:"Rado", category:"watch", url:"https://www.rado.com", icon:"rado" },
{ name:"Rolex", category:"watch", url:"https://www.rolex.com", icon:"rolex" },
{ name:"Seiko", category:"watch", url:"https://www.seiko.com", icon:"seiko" },
{ name:"TAG Heuer", category:"watch", url:"https://www.tagheuer.com", icon:"tagheuer" },
{ name:"Tissot", category:"watch", url:"https://www.tissotwatches.com", icon:"tissot" },
{ name:"Tudor", category:"watch", url:"https://www.tudorwatch.com", icon:"tudor" },
{ name:"Vacheron Constantin", category:"watch", url:"https://www.vacheron-constantin.com", icon:"vacheronconstantin" },
{ name:"Zenith", category:"watch", url:"https://www.zenith-watches.com", icon:"zenith" },

/* =======================
   MODE (70)
======================= */
{ name:"Adidas", category:"fashion", url:"https://www.awin1.com/cread.php?awinmid=14366&awinaffid=1626309&ued=https%3A%2F%2Fwww.sportspar.de%2Fmarken%2Fadidas", icon:"adidas" },
{ name:"Balenciaga", category:"fashion", url:"https://www.balenciaga.com", icon:"balenciaga" },
{ name:"Balmain", category:"fashion", url:"https://www.balmain.com", icon:"balmain" },
{ name:"Bottega Veneta", category:"fashion", url:"https://www.bottegaveneta.com", icon:"bottegaveneta" },
{ name:"Burberry", category:"fashion", url:"https://www.burberry.com", icon:"burberry" },
{ name:"Celine", category:"fashion", url:"https://www.celine.com", icon:"celine" },
{ name:"Chogan", category:"fashion", url:"https://www.chogangroupspa.com/referral/CHRC9E9A0/DE", icon:"chogan" },
{ name:"Dior", category:"fashion", url:"https://www.dior.com", icon:"dior" },
{ name:"Dolce & Gabbana", category:"fashion", url:"https://www.dolcegabbana.com", icon:"dolcegabbana" },
{ name:"Fendi", category:"fashion", url:"https://www.fendi.com", icon:"fendi" },
{ name:"Givenchy", category:"fashion", url:"https://www.givenchy.com", icon:"givenchy" },
{ name:"Gucci", category:"fashion", url:"https://www.gucci.com", icon:"gucci" },
{ name:"Hermès", category:"fashion", url:"https://www.hermes.com", icon:"hermes" },
{ name:"Louis Vuitton", category:"fashion", url:"https://www.louisvuitton.com", icon:"louisvuitton" },
{ name:"Moncler", category:"fashion", url:"https://www.moncler.com", icon:"moncler" },
{ name:"Nike", category:"fashion", url:"https://www.awin1.com/cread.php?awinmid=14366&awinaffid=1626309&ued=https%3A%2F%2Fwww.sportspar.de%2Fmarken%2Fnike", icon:"nike" },
{ name:"Prada", category:"fashion", url:"https://www.prada.com", icon:"prada" },
{ name:"Puma", category:"fashion", url:"https://www.awin1.com/cread.php?awinmid=14366&awinaffid=1626309&ued=https%3A%2F%2Fwww.sportspar.de%2Fmarken%2Fpuma", icon:"puma" },
{ name:"Saint Laurent", category:"fashion", url:"https://www.ysl.com", icon:"saintlaurent" },
{ name:"Valentino", category:"fashion", url:"https://www.valentino.com", icon:"valentino" },
{ name:"Versace", category:"fashion", url:"https://www.versace.com", icon:"versace" },

/* =======================
   SCHMUCK (30)
======================= */
{ name:"Boucheron", category:"jewelry", url:"https://www.boucheron.com", icon:"boucheron" },
{ name:"Buccellati", category:"jewelry", url:"https://www.buccellati.com", icon:"buccellati" },
{ name:"Cartier", category:"jewelry", url:"https://www.cartier.com", icon:"cartier" },
{ name:"Chopard", category:"jewelry", url:"https://www.chopard.com", icon:"chopard" },
{ name:"Graff", category:"jewelry", url:"https://www.graff.com", icon:"graff" },
{ name:"Harry Winston", category:"jewelry", url:"https://www.harrywinston.com", icon:"harrywinston" },
{ name:"Mikimoto", category:"jewelry", url:"https://www.mikimoto.com", icon:"mikimoto" },
{ name:"Piaget", category:"jewelry", url:"https://www.piaget.com", icon:"piaget" },
{ name:"Tiffany & Co.", category:"jewelry", url:"https://www.tiffany.com", icon:"tiffany" },
{ name:"Van Cleef & Arpels", category:"jewelry", url:"https://www.vancleefarpels.com", icon:"vancleefarpels" }

];

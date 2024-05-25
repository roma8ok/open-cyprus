import * as label from "./label.js";

const AudioGuide = "audioGuide";
const VirtualTour = "virtualTour";
export const FieldName = {
  AudioGuide,
  VirtualTour,
};

const Places = {
  "Birthplace of Aphrodite - Petra tou Romiou": {
    description: `According to legend, this is where Aphrodite, the goddess of love and beauty, emerged from the sea foam.

    This picturesque site is renowned for its unique rock formations and stunning views of the Mediterranean Sea.
    
    The beach at Petra tou Romiou is perfect for leisurely walks and photography, especially at sunset.
    
    A must-visit for nature lovers and mythology enthusiasts alike.`,
    popularity: 16470,
    latitude: 34.66355962,
    longitude: 32.62718299,
    labels: [label.Nature, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/3PU1k6M2eGUeeZ4HA",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/250-birthplace-of-aphrodite-petra-tou-romiou?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/148-petra-tou-romiou-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Nea Pafos": {
    description: `Nea Pafos, an ancient city and one of the most important archaeological sites in Cyprus, offers a fascinating glimpse into the island’s rich history.

    Home to impressive ruins, including Roman villas with stunning mosaics, it showcases the grandeur of ancient civilizations.
    
    Visitors can explore the remnants of grand houses, theaters, and other structures that reveal the city’s past glory.
    
    Nea Pafos is a treasure trove for history enthusiasts and those interested in ancient architecture and art.`,
    popularity: 14551,
    latitude: 34.75608778,
    longitude: 32.40846725,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/nJtu7oJvYgYBk5v6A",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/239-archaeological-park-of-kato-pafos-paphos?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/da/da.nsf/All/59FFC9310818070EC225719B003A2EB8?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/128-archaeological-park-of-paphos-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Tombs of the Kings": {
    description: `The Tombs of the Kings is a monumental necropolis dating back to the 4th century BC.

    This UNESCO World Heritage site features impressive underground tombs carved out of solid rock.
    
    Despite the name, it was not the burial place for kings but rather high-ranking officials and aristocrats of the ancient city of Pafos.
    
    The site is renowned for its unique architectural design and the serene atmosphere that provides a fascinating insight into ancient burial practices.
    
    A must-see for those interested in history and archaeology.`,
    popularity: 13667,
    latitude: 34.77495273,
    longitude: 32.40722965,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/Jf9Nap5XC8vpL67w9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/253-tombs-of-the-kings?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/238DE8D409BF6077C225719B0039F785?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/153-tombs-of-the-kings-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Church of Agios Lazaros, Larnaka": {
    description: `This stunning example of Byzantine architecture is one of the most significant religious sites in Cyprus.

    Built in the 9th century, it is dedicated to Lazarus of Bethany, who, according to tradition, was resurrected by Jesus and later became the first bishop of Kition.
    
    The site houses his reputed tomb and features an intricate iconostasis and beautiful frescoes.
    
    It offers a serene and reflective atmosphere, rich in historical and spiritual significance.`,
    popularity: 8379,
    latitude: 34.91147541,
    longitude: 33.63479624,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/xhWQEQ2tutwuwSjt5",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/170-agios-lazaros-church?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/8A2AB44D662B5553C225719900325B15?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/126-agios-lazaros-church-and-ecclesiastical-museum-audio-guide",
      site: "https://www.agioslazaros.org",
      virtualTour: "",
    },
  },
  Kourion: {
    description: `This ancient city offers a fascinating glimpse into Cyprus’ rich history.

    The site is home to impressive ruins, including a grand theater, Roman baths, and beautiful mosaics.
    
    Visitors can explore the remains of public buildings and private houses that reflect the grandeur of ancient civilizations.
    
    The site is a treasure trove for history enthusiasts and those interested in ancient architecture and art.`,
    popularity: 7000,
    latitude: 34.66492583,
    longitude: 32.88423185,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/hcBG9MWoanVVdMZj7",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/221-kourion-archaeological-site?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/da/da.nsf/All/CB2E60AEDED0A248C225719B0038B505?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/129-archaeological-site-of-kourion-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Kykkos Monastery": {
    description: `Founded in the 11th century, this monastery is one of the wealthiest and most significant in Cyprus.

    It is dedicated to the Virgin Mary and is renowned for its stunning architecture and richly decorated interiors.
    
    The monastery houses a miraculous icon of the Virgin Mary, said to be painted by the Apostle Luke.
    
    Visitors can enjoy the serene atmosphere and explore the museum, which displays religious artifacts and historical treasures.`,
    popularity: 6300,
    latitude: 34.98375984,
    longitude: 32.74118426,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/UZKRw5SNAvfqJmS66",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/263-kykkos-monastery?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/145-monastery-of-kykkos-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Pafos Castle": {
    description: `This medieval castle, originally built as a Byzantine fort, has a rich and varied history.

    Over the centuries, it has been used as a fortress, a prison, and a warehouse for salt.
    
    The castle’s thick walls and impressive architecture reflect its strategic importance in defending the region.
    
    Visitors can explore the castle’s interior and enjoy panoramic views of the surrounding harbor and coastline.`,
    popularity: 4286,
    latitude: 34.75365641,
    longitude: 32.40691626,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/rQ83w9T8M1KsrhN18",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/245-pafos-paphos-castle?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/D3F770E201E1C528C225719900330DD6?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/141-medieval-castle-of-paphos-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Cyprus Medieval Museum (Lemesos Castle)": {
    description: `This historical site, now home to the Cyprus Medieval Museum, offers a fascinating journey through the island’s medieval past.

    The museum is housed in a castle that has served various purposes over the centuries, including as a fortress and prison.
    
    Exhibits include medieval armor, weapons, and artifacts that provide insight into the daily life and warfare of the time.
    
    Visitors can also explore the castle’s architecture and enjoy the detailed displays that bring Cyprus’ rich history to life.`,
    popularity: 4215,
    latitude: 34.6724152,
    longitude: 33.04156701,
    labels: [label.HistoricalLandmark, label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/b4SivyjuNAawNx638",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/223-lemesos-limassol-medieval-castle?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/5A9D613873FBB2DFC22571990020A1C0?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "https://limassol-castle.inventus.com.cy",
    },
  },
  "Hala Sultan Tekke": {
    description: `This significant religious site is one of the most important Muslim shrines in Cyprus.

    According to tradition, it is the burial place of Umm Haram, a relative of the Prophet Muhammad.
    
    The mosque, surrounded by beautiful gardens and located near a serene salt lake, offers a peaceful and reflective atmosphere.
    
    Visitors can explore the mosque’s interior, which features intricate Islamic architecture and historical artifacts.`,
    popularity: 3624,
    latitude: 34.8855202,
    longitude: 33.61003806,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/mGMpgrZSG6vLuqdE7",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/175-hala-sultan-tekke?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/da/da.nsf/All/18513FF955C9F917C225719900332619?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/138-hala-sultan-tekke-larnaka-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Kolossi Castle": {
    description: `This well-preserved medieval castle dates back to the 13th century and played a crucial role in the defense and administration of the region.

    It was originally built by the Knights of the Order of St. John and later used by the Knights Templar.
    
    The castle’s impressive architecture includes thick walls, a large keep, and a beautiful courtyard.
    
    Visitors can explore its interior and learn about its historical significance through various displays and artifacts.`,
    popularity: 3329,
    latitude: 34.66512083,
    longitude: 32.93407462,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/8fGGD1Jr7bTtZ6ESA",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/220-kolossi-medieval-castle?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/715C0A5218C174DFC225719900331A09?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/139-kolossi-medieval-castle-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Baths of Aphrodite": {
    description: `According to legend, this enchanting site is where the goddess Aphrodite bathed and met her lover, Adonis.

    The Baths of Aphrodite are nestled in a serene natural grotto, surrounded by lush greenery and vibrant flora.
    
    Visitors can enjoy the tranquil atmosphere and picturesque scenery, making it a perfect spot for a peaceful retreat.
    
    The site also offers several walking trails that allow visitors to explore the beautiful surroundings further.`,
    popularity: 3300,
    latitude: 35.05668127,
    longitude: 32.34390597,
    labels: [label.Nature, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/zM1VQU2W6cpFaMiC7",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/240-baths-of-aphrodite?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/130-baths-of-aphrodite-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Larnaka Castle": {
    description: `This historical site offers a captivating glimpse into the island’s medieval past.

    Originally built to defend the harbor, the castle has served various roles, including as a fort, a prison, and now a museum.
    
    The museum inside the castle displays artifacts from different periods of Cyprus’ history, including medieval weapons and pottery.
    
    Visitors can also explore the castle’s architecture and enjoy panoramic views of the surrounding area.`,
    popularity: 3286,
    latitude: 34.91034997,
    longitude: 33.63764958,
    labels: [label.HistoricalLandmark, label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/hYxS9DDLnsZKNmpL9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/178-larnaka-larnaca-medieval-castle?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/6613643713C00AF9C22571990032F91F?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "The Engleistra (Place of Seclusion) and the Monastery of Agios Neophytos": {
    description: `This monastery, founded by Saint Neophytos in the 12th century, is a remarkable example of religious and historical significance.

    The Engleistra, a place of seclusion carved into the mountainside, was the hermitage of the saint and features beautiful frescoes and religious artifacts.
    
    The monastery complex includes a church, a museum, and the saint’s cave, offering visitors a deep insight into the spiritual and ascetic life.
    
    The tranquil surroundings and the rich history make it a must-visit site for those interested in religious history and art.`,
    popularity: 2135,
    latitude: 34.84655622,
    longitude: 32.4462875,
    labels: [label.HistoricalLandmark, label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/oDcZr43td1xjyZjJ9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/238-agios-neophytos-monastery?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/D9ACC92F868EF3AEC2257199003296EF?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/142-monastery-of-agios-neophytos-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Cyprus Museum, Lefkosia": {
    description: `This museum is the oldest and largest archaeological museum in Cyprus, offering a comprehensive overview of the island’s rich history.

    Its extensive collection spans from the Neolithic period to the Roman era, featuring artifacts such as pottery, sculptures, and jewelry.
    
    Highlights include the impressive statues of the goddess Aphrodite and the intricate mosaics.
    
    The museum provides a deep insight into the cultural heritage and archaeological discoveries of Cyprus, making it a must-visit for history and archaeology enthusiasts.`,
    popularity: 1876,
    latitude: 35.17168132,
    longitude: 33.35571619,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/Jsm9JptLSiKvP8pT8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/113-cyprus-museum?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/da/da.nsf/All/67084F17382CF201C2257199001FE4AD?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/152-the-cyprus-museum-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Choirokoitia (Khirokitia)": {
    description: `This archaeological site is one of the most important and well-preserved Neolithic settlements in Cyprus.

    Dating back to the 7th millennium BC, it provides a fascinating insight into the early human civilization on the island.
    
    Visitors can explore the reconstructed roundhouses and learn about the daily life, architecture, and burial customs of the Neolithic inhabitants.
    
    The site’s significance and excellent state of preservation make it a valuable destination for anyone interested in ancient history and archaeology.`,
    popularity: 1453,
    latitude: 34.79643602,
    longitude: 33.34396659,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/vvpWMG2Ki8fP6jLA9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/174-choirokoitia-archaeological-site-neolithic-settlement?&cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/C8EA2288088D1EB042257A7800241510?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/132-choirokoitia-neolithic-settlement-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Kamares Aqueduct": {
    description: `This impressive aqueduct, also known as the Bekir Pasha Aqueduct, is a significant historical structure dating back to the 18th century.

    Built to supply water to the city, it features a series of elegant arches that stretch across the landscape.
    
    The aqueduct is a remarkable example of engineering and architecture, reflecting the ingenuity of its time.
    
    Visitors can walk along the remains and enjoy the scenic views, making it a popular spot for both history enthusiasts and photographers.`,
    popularity: 1345,
    latitude: 34.91359977,
    longitude: 33.60024155,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/6L1dQqn8kKCmMWaaA",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/188-kamares-aqueduct?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Agia Napa Monastery": {
    description: `This historic monastery, dating back to the 15th century, is a tranquil and spiritual retreat.

    The monastery features beautiful gardens, a central fountain, and a church with intricate frescoes and icons.
    
    It is an important religious site with a rich history, offering visitors a peaceful environment to explore and reflect.
    
    The serene atmosphere and architectural beauty make it a must-visit destination for those interested in history and spirituality.`,
    popularity: 1144,
    latitude: 34.98923662,
    longitude: 33.99942632,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/AX1TPYaGArxMat3Z6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/165-agia-napa-monastery?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/124-agia-napa-monastery-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Agia Kyriaki Chrysopolitissa": {
    description: `This site features the ruins of an early Christian basilica and the beautiful Agia Kyriaki Chrysopolitissa church, built in the 13th century.

    One of the notable features is St. Paul’s Pillar, where according to tradition, the Apostle Paul was flogged before converting the Roman governor to Christianity.
    
    The area is rich in history and offers visitors a glimpse into the religious and architectural heritage of Cyprus.
    
    The serene surroundings and historical significance make it a fascinating destination for those interested in early Christian history.`,
    popularity: 1077,
    latitude: 34.75787647,
    longitude: 32.41420739,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/163rxLSRr1qFXaPj9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/254-early-christian-basilica-st-paul-s-pillar-chrysopolitissa-agia-kyriaki-church?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Machairas Monastery": {
    description: `This historic monastery, founded in the 12th century, is dedicated to the Virgin Mary and is renowned for its stunning mountain location and serene atmosphere.

    The monastery houses a revered icon of the Virgin Mary, attributed to the Apostle Luke, which is considered miraculous.
    
    Visitors can explore the beautiful church, rich with religious artifacts and frescoes, and enjoy the peaceful surroundings that offer a retreat from the hustle and bustle of daily life.
    
    The monastery’s history and spiritual significance make it a must-visit site for those interested in religious heritage and tranquility.`,
    popularity: 1059,
    latitude: 34.94048867,
    longitude: 33.19051123,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/fQskrpXtj6vZKRhD9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/264-machairas-monastery?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/143-monastery-of-panagia-tou-machaira-audio-guide",
      site: "https://machairas.cy",
      virtualTour: "",
    },
  },
  Amathous: {
    description: `This ancient city, once one of the most important kingdoms of ancient Cyprus, offers a fascinating journey through time.

    The archaeological site includes impressive ruins such as the Temple of Aphrodite, the Agora, and the city walls, reflecting the grandeur of its past.
    
    Visitors can explore the remnants of this historic city and gain insight into the ancient civilization that thrived here.
    
    The site’s historical significance and well-preserved ruins make it a must-visit for history enthusiasts and those interested in archaeology.`,
    popularity: 1045,
    latitude: 34.7106406,
    longitude: 33.14263153,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/CWvfepW1eQKftidb7",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/217-amathous-archaeological-site?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/D20ED526826AB796C225719B00374A92?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Stavrovouni Monastery ": {
    description: `This historic monastery, perched atop a mountain, is one of the oldest in Cyprus, founded in the 4th century by Saint Helena, the mother of Emperor Constantine the Great.

    The monastery is dedicated to the Holy Cross and houses a piece of the True Cross, brought by Saint Helena.
    
    Its remote location offers breathtaking panoramic views and a serene atmosphere, making it a place of pilgrimage and spiritual reflection.
    
    Visitors can admire the monastery’s architecture and learn about its rich history and religious significance.`,
    popularity: 950,
    latitude: 34.88600417,
    longitude: 33.43537558,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/MayFX4uyY7HVL6SZ8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/180-stavrovouni-monastery?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Palaipafos (Kouklia)": {
    description: `This archaeological site, once the ancient city-kingdom of Paphos, is rich in history and mythology.

    It is home to the Sanctuary of Aphrodite, one of the most significant religious centers of the ancient world.
    
    Visitors can explore the ruins of temples, houses, and other structures that date back to the Bronze Age.
    
    The site provides a deep insight into the religious practices and daily life of ancient Cyprus, making it a fascinating destination for history enthusiasts.`,
    popularity: 944,
    latitude: 34.70830429,
    longitude: 32.57454797,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/qJhm8YJGe8qcHPg76",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/247-palaipafos-kouklia-archaeological-site?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/81C8FB61069022D242257A78002452DA?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/140-kouklia-palaipafos-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Church of Panagia (Our Lady) tis Aggeloktistis, Kiti": {
    description: `This historic church, built in the 11th century, is renowned for its stunning Byzantine architecture and beautiful mosaics.

    According to tradition, it was constructed by angels overnight, hence the name ‘Aggeloktistis’ which means ‘built by angels.’
    
    The church features a unique blend of architectural styles and houses impressive frescoes and icons.
    
    It offers a peaceful and reflective atmosphere, making it a significant site for both religious and cultural visitors.`,
    popularity: 865,
    latitude: 34.84755014,
    longitude: 33.57098562,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/PdTdJSKEu8zmVvmr5",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/172-angeloktisti-church?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/627DE5BD219220E8C22571990032B9D8?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Chrysorrogiatissa Monastery": {
    description: `Founded in the 12th century, this monastery is dedicated to Our Lady of the Golden Pomegranate.

    It is known for its beautiful architecture and serene mountain setting, providing a tranquil retreat for visitors.
    
    The monastery houses an impressive collection of religious icons and artifacts, and the church features stunning frescoes.
    
    The peaceful surroundings and historical significance make it a must-visit for those interested in religious heritage and spirituality.`,
    popularity: 824,
    latitude: 34.90995696,
    longitude: 32.61864632,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/thHtPTSNVBCjb1B9A",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/241-chrysorrogiatissa-monastery?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Thalassa Agia Napa Municipal Museum": {
    description: `This museum offers a deep dive into the marine heritage and history of Cyprus.

    Its exhibits include artifacts from the sea, such as ancient shipwrecks, marine fossils, and models of sea vessels, showcasing the island’s long relationship with the Mediterranean.
    
    Interactive displays and multimedia presentations provide an engaging experience for visitors of all ages.
    
    The museum is a must-visit for anyone interested in maritime history and the natural history of the Mediterranean region.`,
    popularity: 818,
    latitude: 34.98752387,
    longitude: 34.00260443,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/YqywV6vo1CSpV1sWA",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/98-thalassa-agia-napa-municipal-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://thalassamuseum.org.cy",
      virtualTour: "",
    },
  },
  "Cyprus Historic and Classic Motor Museum": {
    description: `This museum showcases a vast collection of historic and classic vehicles, offering a fascinating journey through automotive history.

    Exhibits include vintage cars, motorcycles, and memorabilia, highlighting the evolution of motor vehicles over the decades.
    
    Special features include rare and unique models that have played significant roles in automotive development.
    
    The museum provides an engaging experience for car enthusiasts and anyone interested in the history of transportation.`,
    popularity: 816,
    latitude: 34.66568481,
    longitude: 32.99316022,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/SC3hbethUEZ96aTQ9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/137-cyprus-historic-and-classic-motor-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://cyprusmotormuseum.com.cy",
      virtualTour: "",
    },
  },
  "Trooditissa Monastery": {
    description: `Nestled in the beautiful Troodos Mountains, this historic monastery dates back to the 13th century and is dedicated to the Virgin Mary.

    The monastery is known for its miraculous icon of the Virgin Mary, believed to grant blessings and protection.
    
    Surrounded by lush forests, the serene setting provides a peaceful retreat for visitors seeking spiritual solace and natural beauty.
    
    The monastery’s rich history and tranquil environment make it a significant destination for both religious pilgrims and nature lovers.`,
    popularity: 672,
    latitude: 34.91299026,
    longitude: 32.83842676,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/MMMe4kUFubYyJ2ZN6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/271-trooditissa-monastery?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",

      virtualTour: "",
    },
  },
  "Agia Solomoni Christian Catacomb": {
    description: `These ancient catacombs, dating back to the Hellenistic period, serve as a significant Christian pilgrimage site.

    Believed to be the burial place of Saint Solomoni, the catacombs feature a series of underground tombs and chambers adorned with frescoes and religious symbols.
    
    A notable feature is the sacred terebinth tree outside the entrance, where visitors tie pieces of cloth as offerings for healing.
    
    The site offers a fascinating glimpse into early Christian burial practices and religious traditions.`,
    popularity: 586,
    latitude: 34.76137975,
    longitude: 32.41245181,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/DkcbSRHuGVfTzJ5Y8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/236-agia-solomoni-christian-catacomb?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Agia Napa Church, Lemesos (Limassol)": {
    description: `This beautiful church, dedicated to the Virgin Mary, is a significant religious and historical landmark.

    The church is known for its impressive Byzantine architecture and stunning frescoes that adorn its interior.
    
    It serves as a spiritual center for the local community and hosts various religious ceremonies and festivals throughout the year.
    
    The serene atmosphere and rich history make it a notable destination for both worshippers and visitors interested in religious heritage.`,
    popularity: 580,
    latitude: 34.67380479,
    longitude: 33.04436678,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/xCrLB2VjQzKsp6fS8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/231-agia-napa-church-lemesos-limassol?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Agios Nikolaos ton Gaton Convent - St. Nicholas of the Cats Convent": {
    description: `This historic convent, dedicated to St. Nicholas, is famously known as the Convent of the Cats.

    According to legend, the convent was overrun with snakes, and Saint Helena, the mother of Emperor Constantine, sent a large number of cats to control the snake population.
    
    The convent is still home to many cats, making it a unique and charming place to visit.
    
    Visitors can explore the tranquil grounds, admire the ancient architecture, and learn about the fascinating history and legends associated with the site.`,
    popularity: 563,
    latitude: 34.5993437,
    longitude: 32.98665335,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/WHbTTfeFhZKrWtHU6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/216-agios-nikolaos-ton-gaton-convent-st-nicholas-of-the-cats-convent?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Cyprus Classic Motorcycle Museum": {
    description: `This museum is a paradise for motorcycle enthusiasts, showcasing a wide array of classic motorcycles from different eras.

    The collection includes rare and vintage bikes, each with its own story and historical significance.
    
    Visitors can explore the evolution of motorcycle design and technology through the carefully curated exhibits.
    
    The museum offers a unique glimpse into the world of classic motorcycles, making it a must-visit for anyone interested in automotive history.`,
    popularity: 561,
    latitude: 35.17293357,
    longitude: 33.35827529,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/JkPEsCioTx74zywb6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/129-cyprus-classic-motorcycle-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://cyclassicmotormuseum.wixsite.com/cyclassicmotormuseum",
      virtualTour: "",
    },
  },
  "Archaeological Museum of the Pafos District": {
    description: `This museum offers a comprehensive overview of the archaeological heritage of the Pafos district.

    Its exhibits span from the Neolithic period to the Middle Ages, showcasing a rich collection of artifacts, including pottery, sculptures, and tools.
    
    Highlights include significant finds from the ancient city of Nea Pafos and the surrounding areas.
    
    The museum provides valuable insights into the history and culture of the region, making it a must-visit for history enthusiasts and researchers.`,
    popularity: 535,
    latitude: 34.77173648,
    longitude: 32.43010644,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/4WEjNfCY4QStoAjj6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/156-archaeological-museum-of-the-pafos-paphos-district?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/306F2D157B5C878FC225719900205580?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Monastery of Agios Ioannis (St John) Lampadistis, Kalopanagiotis": {
    description: `This historic monastery, dedicated to St. John Lampadistis, is located in the picturesque village of Kalopanagiotis.

    The complex consists of three churches, each adorned with beautiful frescoes and religious artifacts, showcasing a blend of Byzantine and post-Byzantine architecture.
    
    The monastery is a significant pilgrimage site and a testament to the island’s rich religious heritage.
    
    Visitors can explore the serene grounds and the adjacent museum, which houses a collection of ecclesiastical treasures and artifacts.`,
    popularity: 533,
    latitude: 34.99231863,
    longitude: 32.83023115,
    labels: [label.HistoricalLandmark, label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/VdMQv1Lnw4ei9FGs8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/258-agios-ioannis-lampadistis-church?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/B842781146DBC6A9C225719900320552?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/144-monastery-of-agios-ioannis-lampadistis-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "The Leventis Municipal Museum of Nicosia": {
    description: `This museum, located in the heart of Nicosia, offers a detailed exploration of the city’s history and culture from ancient times to the present day.

    Its exhibits include artifacts, photographs, and documents that illustrate the social, cultural, and political development of Nicosia.
    
    Highlights include a collection of traditional costumes, pottery, and historical maps.
    
    The museum provides an enriching experience for visitors, offering insights into the diverse heritage and history of the Cypriot capital.`,
    popularity: 483,
    latitude: 35.1704632,
    longitude: 33.36183866,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/PNSPw1LxMkRZoCDo9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/130-leventis-municipal-museum-of-lefkosia-nicosia?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://leventismuseum.org.cy",
      virtualTour: "",
    },
  },
  "Sanctuary of Apollon Hylates": {
    description: `This ancient sanctuary was dedicated to Apollon Hylates, the god of the woodland.

    It served as a major religious center from the 8th century BC until the 4th century AD.
    
    Visitors can explore the well-preserved ruins, including the temple, baths, and other structures that provide insight into the religious practices of ancient Cyprus.
    
    The site’s tranquil setting and historical significance make it a fascinating destination for those interested in ancient history and archaeology.`,
    popularity: 465,
    latitude: 34.6735981,
    longitude: 32.86370628,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/2csX8o2HWAHvC7Bk6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/226-sanctuary-of-apollon-hylates?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Church of Panagia (Our Lady) tis Asinou, Nikitari": {
    description: `This church, dedicated to Our Lady of Asinou, is renowned for its stunning Byzantine frescoes that date back to the 12th century.

    The church’s interior is adorned with vibrant and detailed frescoes depicting scenes from the Bible, showcasing the exquisite artistry of the period.
    
    It is part of the UNESCO World Heritage site of the Painted Churches in the Troodos Region, highlighting its cultural and historical significance.
    
    Visitors can admire the intricate artwork and experience the serene and spiritual atmosphere of this historic church.`,
    popularity: 409,
    latitude: 35.04606922,
    longitude: 32.97342395,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/mMaYvEp8ai2PWmLU8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/265-panagia-asinou-church?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/8D900C402399C25242257A7800334E91?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/135-church-of-panagia-tis-asinou-or-panagia-phorviotissa-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "The Cyprus Wine Museum": {
    description: `This museum celebrates the rich history and tradition of winemaking in Cyprus, one of the oldest wine-producing regions in the world.

    Visitors can explore exhibits that trace the development of viticulture and wine production on the island from ancient times to the present day.
    
    The museum features a collection of ancient amphorae, traditional winemaking tools, and informative displays about the various grape varieties and wine regions of Cyprus.
    
    Tasting sessions are available, allowing visitors to sample some of the finest Cypriot wines and learn about their unique characteristics.`,
    popularity: 374,
    latitude: 34.67493711,
    longitude: 32.91672115,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/CP3cUDTpojDkoyPb8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/140-the-cyprus-wine-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://www.cypruswinemuseum.com",
      virtualTour: "",
    },
  },
  "Agios Georgios Alamanos Convent": {
    description: `This serene convent is dedicated to Saint George and is known for its peaceful and spiritual atmosphere.

    The convent’s history dates back to the early Christian period, and it has been a place of worship and contemplation for centuries.
    
    Visitors can explore the beautiful church, which features stunning frescoes and religious icons, and enjoy the tranquil gardens surrounding the convent.
    
    It is a significant site for those interested in religious heritage and offers a retreat from the hustle and bustle of daily life.`,
    popularity: 370,
    latitude: 34.71960012,
    longitude: 33.22696408,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/e1i7hNAk1be881Mh8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/229-agios-georgios-alamanos-convent?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Archaeological Museum of the Larnaka District": {
    description: `This museum provides an in-depth look at the rich archaeological heritage of the Larnaka district.

    Its exhibits cover various periods, from the Neolithic era to the Roman period, showcasing artifacts such as pottery, sculptures, and tools.
    
    Highlights include significant finds from the ancient city of Kition and the surrounding areas.
    
    The museum offers valuable insights into the history and culture of the region, making it an essential visit for history enthusiasts and researchers.`,
    popularity: 357,
    latitude: 34.9192226,
    longitude: 33.63352855,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/aYPq6HMEgysAGHDw5",
      visitCyprus: "",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/29D729EB7E4EE76FC2257199002074B8?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  Kition: {
    description: `This ancient archaeological site was once the city-kingdom of Kition, a major center of civilization in ancient Cyprus.

    The site features impressive ruins, including temples dedicated to various deities, city walls, and remnants of ancient houses.
    
    Visitors can explore the well-preserved structures that reflect the city’s rich history and significance.
    
    Kition offers a fascinating glimpse into the ancient world and its cultural and religious practices, making it a must-visit for history and archaeology enthusiasts.`,
    popularity: 347,
    latitude: 34.92318529,
    longitude: 33.63049488,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/nbEwkdKJ8VomWfpV6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/177-kition-archaeological-site?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/7A7351CF22898DFEC22571A4002CA21C?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Church of Agios Nikolaos tis Stegis (St. Nicholas of the Roof), Kakopetria":
    {
      description: `This Byzantine church, dedicated to St. Nicholas, is renowned for its unique architectural design with a steep-pitched roof, which gives it the name ‘St. Nicholas of the Roof.’

    Dating back to the 11th century, the church is part of the UNESCO World Heritage site of the Painted Churches in the Troodos Region.
    
    Its interior is adorned with a series of well-preserved frescoes that span several centuries, depicting various religious scenes and figures.
    
    The church offers a serene and spiritual atmosphere, making it a significant site for both religious and cultural visitors.`,
      popularity: 325,
      latitude: 34.97727446,
      longitude: 32.88954741,
      labels: [label.HistoricalLandmark, label.Free],
      links: {
        googleMaps: "https://maps.app.goo.gl/NK4RgTzmVKGGfSJA6",
        visitCyprus:
          "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/259-agios-nikolaos-tis-stegis-church?cur_lang=en-GB",
        departmentOfAntiquities:
          "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/9DF6B7E6FE549F1BC225719900314934?OpenDocument",
        audioGuide:
          "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/127-agios-nikolaos-tis-stegis-audio-guide",
        site: "",
        virtualTour: "",
      },
    },
  "Church of Agia Paraskevi, Geroskipou": {
    description: `This Byzantine church, dedicated to Agia Paraskevi, dates back to the 9th century.

    The church features a distinctive architectural style with a five-domed structure.
    
    Its interior is adorned with well-preserved frescoes that depict various religious scenes.
    
    The church is an important religious and cultural landmark, offering a serene atmosphere for visitors.`,
    popularity: 298,
    latitude: 34.7595357,
    longitude: 32.45292633,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/9dmVMX5P5JQXokk87",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/235-agia-paraskevi-byzantine-church-geroskipou-village?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/F02B680AF8F805B7C22571990032872C?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Ethnological Museum, Lefkosia (The House of Hadjigeorgakis Kornesios)": {
    description: `The Ethnological Museum, located in the historic house of Hadjigeorgakis Kornesios, offers a detailed look at the traditional Cypriot lifestyle and culture.

    The mansion, built in the 18th century, showcases beautiful architecture and period furnishings.
    
    Exhibits include traditional costumes, household items, and artifacts that reflect the daily life and customs of Cypriots in the past.
    
    The museum provides an immersive experience, allowing visitors to step back in time and explore the rich cultural heritage of Cyprus.`,
    popularity: 290,
    latitude: 35.17205867,
    longitude: 33.36701621,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/n897ReaMZ1EBuFD17",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/204-the-house-of-hatzigeorgakis-kornesios-ethnological-museum?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/da/da.nsf/All/3F038862C758F056C225719900214B07?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/137-hadjigeorgakis-kornesios-mansion-audio-guide",
      site: "",
      virtualTour:
        "https://virtualartmuseumcy.com/wp-content/uploads/ekatefinal3-html5/index.html",
    },
  },
  "Agios Georgios, Pegeia": {
    description: `This archaeological site features the remains of an early Christian basilica and other significant structures.

    The area is believed to have been an important religious center during the Byzantine period.
    
    Visitors can explore the ruins, including floor mosaics and remnants of ancient buildings, which offer a glimpse into the site’s historical significance.
    
    The site provides an interesting destination for those interested in early Christian history and archaeology.`,
    popularity: 259,
    latitude: 34.90227296,
    longitude: 32.32029832,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/v4ZkQPkbLXjqYaxcA",
      visitCyprus: "",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/969DA3E3446EF4C3C225719B003BF3AB?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Church of Archangelos Michail, Pedoulas": {
    description: `This Byzantine church, dedicated to Archangel Michael, is renowned for its stunning frescoes that date back to the 15th century.

    The church’s architecture and artwork reflect the rich cultural heritage of the Troodos region.
    
    Visitors can admire the intricate frescoes depicting various religious scenes and figures.
    
    The church is an important religious and cultural landmark, offering a serene atmosphere for contemplation and exploration.`,
    popularity: 249,
    latitude: 34.96762943,
    longitude: 32.83136699,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/KhKUVrVteconNMve9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/260-archangelos-michael-church?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/841B01BB932B5AC6C225719900322BDA?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/133-church-of-archangelos-michael-in-pedoulas-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Makronissos Tombs": {
    description: `These ancient tombs, located at Makronissos, are part of an important archaeological site.

    The site features a series of rock-cut tombs dating back to the Hellenistic and Roman periods.
    
    Visitors can explore the tombs and learn about the burial practices of ancient Cyprus.
    
    The serene surroundings and historical significance make it a fascinating destination for those interested in archaeology and ancient history.`,
    popularity: 241,
    latitude: 34.9811024,
    longitude: 33.95388811,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/ZF8CrgFmayfEsmqv8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/166-makronissos-tombs?&cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Agios Ioannis (St John’s) Cathedral": {
    description: `This cathedral, dedicated to St. John, is a significant religious and historical landmark.

    The interior of the cathedral is adorned with exquisite frescoes and religious icons that date back to the 18th century.
    
    Visitors can admire the detailed artwork and experience the serene atmosphere of this sacred site.
    
    The cathedral holds an important place in the religious and cultural heritage of Cyprus.`,
    popularity: 235,
    latitude: 35.17331573,
    longitude: 33.36775633,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/BEaWCLUQ686qsM8NA",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/189-agios-ioannis-st-john-s-cathedral?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Archaeological Museum of the Limassol District": {
    description: `This museum offers a comprehensive overview of the archaeological heritage of the Limassol district.

    Its exhibits cover various periods, from the Neolithic era to the Roman period, showcasing artifacts such as pottery, sculptures, and tools.
    
    Highlights include significant finds from the ancient cities of Amathus and Kourion.
    
    The museum provides valuable insights into the history and culture of the region, making it an essential visit for history enthusiasts and researchers.`,
    popularity: 232,
    latitude: 34.685389,
    longitude: 33.05421021,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/ew1mWgnuWdPMJrt88",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/142-archaeological-museum-of-the-lemesos-limassol-district?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/da/da.nsf/All/F326C998358D550BC225719900203AEA?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Agios Irakleidios Convent": {
    description: `This convent is dedicated to Agios Irakleidios, one of the early bishops of Cyprus and a significant figure in the island’s Christian history.

    The convent, surrounded by beautiful gardens, provides a peaceful and spiritual retreat for visitors.
    
    The church within the convent features frescoes and religious artifacts that reflect the rich heritage of the site.
    
    It offers a serene atmosphere for contemplation and exploration, making it a notable destination for those interested in religious and cultural history.`,
    popularity: 225,
    latitude: 35.02598465,
    longitude: 33.24421952,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/HcnHugfvjJ7R8mjb7",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/208-agios-irakleidios-convent?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Panagia Chrysospiliotissa Church": {
    description: `This church, dedicated to Panagia Chrysospiliotissa, is known for its unique location within a cave.

    The interior features beautiful frescoes and religious icons, creating a serene and spiritual atmosphere.
    
    The church’s setting within the cave adds to its mystical and historical significance, offering visitors a unique experience.
    
    It is a notable site for those interested in religious heritage and the unique architectural styles of Cyprus.`,
    popularity: 224,
    latitude: 35.09170041,
    longitude: 33.28238463,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/1wwXoGdTR9AuG1S3A",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/200-panagia-chrysospiliotissa-church?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Fikardou Rural Museum": {
    description: `This rural museum is located in the picturesque village of Fikardou, which has been declared an ancient monument to preserve its traditional architecture.

    The museum provides a glimpse into the rural life of Cyprus in the 18th century, showcasing traditional houses, tools, and artifacts.
    
    Visitors can explore the well-preserved stone houses and learn about the local customs and way of life.
    
    The village’s serene atmosphere and historical significance make it a charming destination for those interested in Cypriot culture and history.`,
    popularity: 196,
    latitude: 34.96001769,
    longitude: 33.17138955,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/1JtToW7qiYWPDDog6",
      visitCyprus: "",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/8865F898FAA8A275C22571990020EEAA?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Omeriye Mosque": {
    description: `This historic mosque, originally a 14th-century Augustinian church, was converted into a mosque in the 16th century.

    The mosque features a blend of Gothic and Ottoman architectural elements, reflecting its rich and diverse history.
    
    Visitors can admire the beautiful design and peaceful ambiance of the mosque.
    
    It remains an important place of worship and a significant cultural landmark in the area.`,
    popularity: 185,
    latitude: 35.17195005,
    longitude: 33.36534246,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/8ySuYF6nrBq9rXcW9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/198-omeriye-mosque?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/146-omeriye-mosque-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Panagia tou Sinti Monastery": {
    description: `This 16th-century monastery, dedicated to the Virgin Mary, is an important example of monastic architecture in Cyprus.

    The monastery is located in a picturesque setting along the Xeros River, offering a serene and tranquil atmosphere.
    
    Although it is no longer inhabited, the well-preserved buildings and the peaceful surroundings provide a glimpse into the monastic life of the past.
    
    The site is a significant cultural and historical landmark, attracting visitors interested in heritage and architecture.`,
    popularity: 173,
    latitude: 34.83634556,
    longitude: 32.63901289,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/zecxTjpmM5Rzn4Xe6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/249-panagia-tou-sinti-monastery?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://www.cyprusisland.net/cyprus-monasteries/panagia-tou-sinti-monastery",
      virtualTour: "",
    },
  },
  "Church of Panagia (Our Lady) tou Arakos, Lagoudera": {
    description: `This Byzantine church, dedicated to the Virgin Mary, is renowned for its exquisite frescoes that date back to the 12th century.

    The church is part of the UNESCO World Heritage site of the Painted Churches in the Troodos Region, known for their significant artistic and historical value.
    
    Visitors can admire the detailed frescoes depicting various religious scenes and figures.
    
    The church’s serene location in Lagoudera adds to its spiritual and cultural appeal, making it a notable destination for those interested in Byzantine art and history.`,
    popularity: 171,
    latitude: 34.96542302,
    longitude: 33.00723552,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/tmveLBXhkUUqnCFE8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/267-panagia-tou-araka-church?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/9690D7CC438FE731C2257199003197BB?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/147-panagia-tou-araka-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Faneromeni Church": {
    description: `This historic church, dedicated to the Virgin Mary, is a significant religious landmark in Nicosia.

    Built in the late 19th century, it features a blend of architectural styles, reflecting its rich history and various periods of renovation.
    
    The interior is adorned with beautiful icons, frescoes, and a striking iconostasis, offering a serene and spiritual atmosphere.
    
    The church is an important cultural and religious site, attracting visitors interested in the history and religious heritage of Cyprus.`,
    popularity: 171,
    latitude: 35.17357574,
    longitude: 33.36240142,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/u48bF6dJ5Vi4eqqq8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/193-faneromeni-church?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Church of Panagia (Our Lady) tis Podithou, Galata": {
    description: `This Byzantine church, dedicated to the Virgin Mary, was built in 1502 and is renowned for its stunning frescoes in the Italo-Byzantine style.

    The church, once part of a monastery, features a single-aisle design with a steep-pitched timber roof and a surrounding portico.
    
    As a UNESCO World Heritage site, it holds significant artistic and historical value, offering visitors a glimpse into the rich cultural heritage of Cyprus.
    
    The serene location in the village of Galata enhances its spiritual and cultural appeal.`,
    popularity: 166,
    latitude: 35.00358856,
    longitude: 32.89610652,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/AZjfZPc7epSvWeJJA",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/262-panagia-podithou-church?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/2A3436D8AF3AE0BFC22571990031D984?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/149-the-church-of-panagia-podithou-virgin-mary-of-podithou-at-galata-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Kalavasos-Tenta": {
    description: `This Neolithic settlement, dating back to 7000 BC, is one of the most significant archaeological sites on the island.

    Covered by a distinctive cone-shaped roof, the site features well-preserved structures that provide insight into early human habitation and architectural practices.
    
    Visitors can explore the remains of ancient dwellings and learn about the daily life of the Neolithic inhabitants.
    
    The site’s historical importance and unique architectural features make it a fascinating destination for those interested in early history and archaeology.`,
    popularity: 162,
    latitude: 34.75247376,
    longitude: 33.30332746,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/7q8rhfQb3dDtjAwD6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/176-kalavasos-tenta-archaeological-site?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/F9048934D768E989C225719B003413CE?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Agios Minas Convent": {
    description: `This 15th-century convent, located in the village of Vavla, features a mix of Byzantine and Gothic architectural styles.

    The convent includes a church, cloisters, and other monastic buildings, with notable paintings of Agios Georgios and Agios Minas dating back to 1757.
    
    In addition to their religious duties, the nuns at the convent practice icon painting and sell fruit and homemade preserves.
    
    The serene atmosphere and historical significance make it a fascinating destination for visitors interested in religious heritage and monastic life.`,
    popularity: 159,
    latitude: 34.84030377,
    longitude: 33.28600465,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/9c6HJg3arv25DejB8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/171-agios-minas-convent?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Pierides Museum": {
    description: `The Pierides Museum, housed in the ancestral Pierides family home built in 1815, is the oldest private museum in Cyprus.

    The museum’s collection includes artifacts from 4000 BC to the 15th century AD, showcasing the island’s economic, social, and cultural development.
    
    Highlights include Early Bronze Age pottery, Roman glassware, and medieval ceramics.
    
    The museum provides a comprehensive overview of Cyprus’s long and varied history, making it a must-visit for those interested in the island’s cultural heritage.`,
    popularity: 157,
    latitude: 34.91621428,
    longitude: 33.63633835,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/Na1f8FcvwnFxgq1r6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/111-pierides-museum-bank-of-cyprus-cultural-foundation?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "https://virtuallarnakaregion.com/PieridesMuseum/",
    },
  },
  "Ethnographic Museum - Pafos (Paphos)": {
    description: `The Ethnographic Museum in Pafos, housed in a 19th-century stone residence, offers a fascinating glimpse into the cultural heritage of Cyprus.

    The museum’s collection includes traditional costumes, carved wooden furniture, farming tools, and archaeological finds from the Chalcolithic period.
    
    Visitors can explore the beautifully preserved Gothic-style arches and gardens while learning about the island’s history through its exhibits.
    
    The museum provides a rich and immersive experience, showcasing the diverse aspects of Cypriot life and culture.`,
    popularity: 156,
    latitude: 34.77312328,
    longitude: 32.42149612,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/rjzFUnJJbBdauXTp9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/151-ethnographic-museum-pafos-paphos?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://ethnographicalmuseum.com",
      virtualTour: "",
    },
  },
  "Byzantine Museum": {
    description: `This museum, located within the walled city of Nicosia, houses the richest collection of Byzantine art in Cyprus.

    The collection includes over 200 icons dating from the 9th to the 19th centuries, as well as sacred vessels, vestments, and books.
    
    Notable exhibits include 6th-century mosaics from the church of Panagia Kanakaria.
    
    The museum provides an in-depth look at the island’s religious and artistic heritage, making it a must-visit for those interested in Byzantine art and history.`,
    popularity: 151,
    latitude: 35.17334926,
    longitude: 33.36750121,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/wuL4EcGm9wJVDiYeA",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/115-byzantine-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/131-byzantine-museum-of-the-foundation-archbishop-makarios-iii-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Famagusta Gate (Pyli Ammochostou)": {
    description: `This historical gate is one of the three entrances into the old city, originally constructed in 1567 as part of the Venetian fortifications.

    Known as ‘Porta Giuliana’ and later renamed ‘Famagusta Gate’, it opens onto the road leading to Famagusta.
    
    The gate has been restored and now serves as the Nicosia Municipal Multicultural Centre, featuring a large vaulted passage and adjacent rooms.
    
    Its impressive architecture and historical significance make it a notable landmark for visitors interested in the island’s rich past.`,
    popularity: 149,
    latitude: 35.17436629,
    longitude: 33.37095248,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/BQH45igSCWTVzvCr9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/202-famagusta-gate-pyli-ammochostou?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "St. Catherine’s Catholic Church": {
    description: `Built in 1879 by architect Friar Francesco da Monghidoro from Bologna, this church features a blend of interior baroque style and eclectic exterior design.

    The walls on the apse and its vault are decorated with neo-Byzantine frescoes, which were repainted during renovations in 1979.
    
    The church serves as an important place of worship and a historical landmark, reflecting the rich religious heritage and architectural diversity of its time.`,
    popularity: 146,
    latitude: 34.67946775,
    longitude: 33.05182451,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/7okKxanzJPLtzs2U6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/225-st-catherine-s-catholic-church?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "http://www.cypruscatholicchurch.org/limassol",
      virtualTour: "",
    },
  },
  "Cyprus Handicraft Centre - Lefkosia (Nicosia)": {
    description: `This center is dedicated to preserving and promoting traditional Cypriot folk art and crafts.

    Visitors can observe artisans at work in various crafts such as embroidery, lace making, weaving, basketry, woodcarving, pottery, and metalwork.
    
    The exhibition displays a wide range of handcrafted items, providing insight into the island’s rich cultural heritage.
    
    The center also offers the opportunity to purchase authentic Cypriot handmade goods, making it a unique destination for those interested in traditional crafts.`,
    popularity: 134,
    latitude: 35.14014619,
    longitude: 33.37317936,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/MtBKoxXw69J2Eib87",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/117-cyprus-handicraft-centre-lefkosia-nicosia?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Fyti Weaving Museum": {
    description: `This museum showcases the traditional weaving techniques of the village of Fyti, known for its unique ‘Fythkiotika’ style.

    The exhibits include a variety of intricate designs and rich colors, reflecting the village’s long history of textile production since Medieval times.
    
    Visitors can learn about the old-style loom and the craftsmanship that has been preserved for generations.
    
    The museum offers an immersive experience into the cultural heritage of Cypriot weaving.`,
    popularity: 123,
    latitude: 34.92824236,
    longitude: 32.54531576,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/fjhmK83TQ8TjzFsX6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/152-fyti-weaving-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "The Steni Museum of Village Life": {
    description: `This museum is a tribute to the villagers of Steni, showcasing their daily life from the village’s founding until the end of World War II.

    Exhibits include scenes of loom weaving, ploughing, and presentations of traditional tools, handicrafts, kitchenware, and clothing.
    
    The museum provides a comprehensive look into the rural life and culture of Cyprus during a significant period in its history.
    
    Visitors can explore the well-preserved artifacts and gain insights into the traditions and lifestyle of the Cypriot villagers.`,
    popularity: 119,
    latitude: 34.99698347,
    longitude: 32.47250969,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/6bM12eCnETSarfWn9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/158-the-steni-museum-of-village-life?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Cyprus Railways Museum": {
    description: `This museum is dedicated to preserving the history of the Cyprus Government Railway, which operated from 1905 to 1951.

    Exhibits include historical photographs, documents, and artifacts related to the railway, as well as models of trains and other equipment used during its operation.
    
    Visitors can learn about the significance of the railway in the economic and social development of Cyprus during the early 20th century.
    
    The museum provides a fascinating look into the island’s transportation history and its impact on Cypriot society.`,
    popularity: 117,
    latitude: 35.04171294,
    longitude: 32.89378131,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/BsJN9kwsCxGSSMHa9",
      visitCyprus: "",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/3F2CF6E8B9E9BF3DC2257DE7002DFE14?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "The Agia Napa Aqueduct": {
    description: `This ancient aqueduct, originally a Roman structure with later Frankish modifications, was constructed to deliver water to the local monastery and surrounding region.

    Its complex construction and maintenance required significant expertise to manage accidental breaches, clear debris, and remove chemical build-up.
    
    Substantial conservation work was carried out between 2006 and 2008, co-financed by the European Union and national sources.
    
    The aqueduct is a testament to historical engineering and an important landmark showcasing the ingenuity of ancient water management systems.`,
    popularity: 102,
    latitude: 34.98904979,
    longitude: 34.00455139,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/gGNYaRz3EZWYCwN5A",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/167-the-agia-napa-aqueduct?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Terra Santa Catholic Church": {
    description: `This historic church, also known as Santa Maria delle Grazie, combines impressive Renaissance and Baroque architectural styles.

    Founded in 1596 by Franciscan monk Callixte Martel, it was primarily built to accommodate Latin pilgrims visiting the Holy Land.
    
    The current structures date back to 1842, replacing earlier buildings.
    
    The church is known for its philanthropic tradition, with nuns running an old people’s home on the grounds.
    
    It serves as an important religious and cultural landmark, reflecting its rich history and community service.`,
    popularity: 98,
    latitude: 34.92322556,
    longitude: 33.62621265,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/ubGgtUrfdwr5mWRr8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/181-terra-santa-catholic-church?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "http://www.cypruscatholicchurch.org/larnaca",
      virtualTour: "",
    },
  },
  "Local Archaeological Kourion Museum, Episkopi": {
    description: `Housed in a traditional building that was once the residence of George McFadden, this museum showcases findings from the extensive archaeological research at Kourion.

    Opened in 1969, it features two exhibition halls displaying artifacts from various periods, including red polished ware from the Early Bronze Age, Mycenaean pottery, and golden jewelry.
    
    One of the most impressive exhibits is the skeletal remains of inhabitants who perished in the 4th-century earthquakes.
    
    The museum provides an insightful look into the rich archaeological heritage of the Kourion area.`,
    popularity: 93,
    latitude: 34.6696667,
    longitude: 32.90109433,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/YNtKmSfpM7jWsb7W9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/146-local-archaeological-kourion-museum-episkopi?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/21E14D80F55D8539C22571990020DC5C?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Holy Cross Catholic Church": {
    description: `Built in 1902, this church is located near the Pafos Gate and features a mix of architectural styles.

    Its austere design is highlighted by a rose window with the cross of Jerusalem in stained glass and the coat-of-arms of the Custody of the Holy Land.
    
    The church serves as an important religious and cultural landmark, reflecting the diverse heritage of the area.`,
    popularity: 89,
    latitude: 35.17424086,
    longitude: 33.35738278,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/3r1SRJxxC525PAAw6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/195-holy-cross-catholic-church?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "http://www.cypruscatholicchurch.org/paphos",
      virtualTour: "",
    },
  },
  "Church of Panagia (Our Lady) tou Moutoulla": {
    description: `This tiny 13th-century chapel, dedicated to the Virgin Mary, is one of the earliest examples of its type and a listed UNESCO World Heritage Site.

    The church has a steep-pitched timber roof and frescoes dating back to 1280, which are the only series from that century surviving in Cyprus and can be precisely dated.
    
    It was built and decorated through the donations of Ioannis of Moutoullas and his wife Irene, who are depicted holding a model of the church in the frescoes.
    
    The serene setting and historical significance of this church make it a notable destination for those interested in Byzantine art and architecture.`,
    popularity: 85,
    latitude: 34.9826558,
    longitude: 32.82415241,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/36AXWyucVZMS89GY7",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/268-panagia-tou-moutoulla-church?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/FB5FDD9D221C988DC2257199003216AE?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/150-the-church-of-panagia-tou-moutoulla-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Deryneia Folkloric Museum / Open Air Museum for Traditional Professions": {
    description: `This museum, housed in an old traditional residence, exhibits a collection of everyday agricultural tools and equipment used by traditional farming families of bygone times.

    Across the street is the Open Air Traditional Folk Art Museum, which showcases various traditional professions, including furniture and shoe making, carpentry, tailoring, blacksmithing, and more.
    
    The museum grounds also host exhibitions and cultural events, providing a comprehensive look into the traditional professions and rural life of Cyprus.`,
    popularity: 82,
    latitude: 35.06313669,
    longitude: 33.95767808,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/nod5izLzS38BoNMQ6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/99-deryneia-folkloric-museum-open-air-museum-for-traditional-professions?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Loutra - Ottoman Hamam": {
    description: `Located near the old marketplace in Pafos, this stone-vaulted Ottoman Hamam features three areas: a reception area, an intermediate area, and the main baths.

    Believed to have Medieval heritage despite its typical Ottoman design, it was in use until the 1950s.
    
    The Hamam was restored in 2015, preserving its historical and architectural significance.
    
    Visitors can explore the traditional bathing facilities and appreciate the craftsmanship of this well-preserved historical site.`,
    popularity: 78,
    latitude: 34.75959171,
    longitude: 32.41476286,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/dAMYrpCMF6GxV1PNA",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/242-loutra-ottoman-hamam?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Agios Panteleimon Convent": {
    description: `This 18th-century convent, with its gabled roof, is located in the Achera Valley.

    The original monastery complex included storage rooms, a laundry room, and rooms for producing sweets, although the original church and buildings no longer remain.
    
    Renovated in 1770, the church features a gilded iconostasis and icons painted by Michalis Thetallos.
    
    The convent played a humanitarian role during the National Liberation Struggle and the Turkish invasion of 1974. Today, it functions as a convent, reflecting its enduring spiritual and historical significance.`,
    popularity: 76,
    latitude: 35.05382739,
    longitude: 33.14026706,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/gbrcsaNShPB8f4Gs7",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/210-agios-panteleimon-convent?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "The Nicosia (Lefkosia) Municipal Arts Centre (NiMAC)": {
    description: `Housed in the restored building of the Old Powerhouse, NiMAC is a fine example of industrial architecture recognized with the ‘Europa Nostra’ award in 1994.

    As the oldest and largest arts center in Cyprus, it promotes fine arts and hosts a wide range of exhibitions featuring modern and contemporary art by renowned local and international artists.
    
    The center collaborates with various museums, art centers, and cultural institutions worldwide, making it a vital hub for art lovers.
    
    NiMAC’s large exhibition area and specialist publications make it an essential destination for those interested in the arts.`,
    popularity: 74,
    latitude: 35.17390043,
    longitude: 33.36643853,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/7Azv7NeMBeNiRxW66",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/133-the-nicosia-lefkosia-municipal-arts-centre-nimac?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://nimac.org.cy",
      virtualTour: "",
    },
  },
  "Local Archaeological Museum of Marion-Arsinoe, Polis Chrysochous": {
    description: `This museum is dedicated to the rich history of the ancient city-kingdom of Marion-Arsinoe.

    The exhibits are divided into two rooms: one tracing the chronological development of the area from Neolithic to Medieval times, and the other displaying artifacts from the region’s necropolis.
    
    Highlights include pottery, coins, sculptures, and other artifacts that provide insight into the area’s historical significance as a commercial center during the Classical and Hellenistic periods.
    
    The museum offers a fascinating glimpse into the past and is part of the Aphrodite Cultural Route.`,
    popularity: 71,
    latitude: 35.03565862,
    longitude: 32.42699899,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/vkBYFC1YrfeFt1J2A",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/155-local-archaeological-museum-of-marion-arsinoe-polis-chrysochous?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/CAF4EC728ABCA91CC225719900208766?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Bayraktar Mosque": {
    description: `This historic mosque was built in 1820 on the western end of Constanza Bastion, in honor of the flag carrier who first climbed the walls during the Ottoman siege of Lefkosia in 1570.

    The name ‘Bayraktar’ comes from the Turkish word for ‘flag bearer.’
    
    The mosque, restored and reopened for worship in 2003, features a blend of Ottoman architectural elements and holds significant historical importance.`,
    popularity: 70,
    latitude: 35.16912777,
    longitude: 33.36545728,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/yWJvmrwCBY5n2Wvd6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/192-bayraktar-mosque?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Local Ethnographic Museum of Geroskipou": {
    description: `This museum is housed in a traditional 18th-century building known as the ‘House of Hadjismith’.

    Founded in 1978, the museum’s large and diverse collection showcases the daily life, crafts, and activities of Cypriot folk art during the 19th and early 20th centuries.
    
    Exhibits include pottery, scarf making, rug weaving, rope making, and silk production, reflecting the rich cultural heritage of Cyprus.
    
    The building itself, once home to the British Consular Agent for western Cyprus, is listed as an Ancient Monument and adds historical significance to the museum experience.`,
    popularity: 69,
    latitude: 34.75972193,
    longitude: 32.45470545,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/Au1kjv9FKj7BUUU7A",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/153-local-ethnographic-museum-of-geroskipou?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/38CF6DFE0977E664C22571990020C289?OpenDocument",
      audioGuide: "",
      site: "https://ethnographicalmuseum.com/",
      virtualTour: "",
    },
  },
  "Archangelos Michael Trypiotis Church": {
    description: `Built in 1695 by Archbishop Germanos II, this church is a fine example of Franco-Byzantine architecture.

    The church features three naves and a dome, built with attractive, smoothed calcarenite stone.
    
    Its rich interior includes an outstanding icon influenced by a 15th-century Italian painting and several silver icons from the Ottoman period.
    
    A notable feature is the unusually wide iconostasis, adding to the church’s historical and architectural significance.`,
    popularity: 67,
    latitude: 35.17134391,
    longitude: 33.36270648,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/g8Z9WMpaVrHj13r19",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/206-archangelos-michael-trypiotis-church?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Local Museum of Traditional Embroidery and Silversmith-work, Lefkara": {
    description: `This museum, located in the picturesque village of Lefkara, showcases the renowned local crafts of embroidery and silversmithing.

    Visitors can explore a collection of intricate Lefkaritika lace, famous for its unique designs and craftsmanship.
    
    The museum also displays traditional tools and techniques used in silverwork, highlighting the village’s rich heritage in these arts.
    
    The exhibits provide a fascinating look into the cultural traditions and artisanal skills that have been preserved in Lefkara for generations.`,
    popularity: 64,
    latitude: 34.86540571,
    longitude: 33.30614905,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/tM4Ftzujj5TEqtBo6",
      visitCyprus: "",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/239C3294F30939F0C225719900210029?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Fairytale Museum": {
    description: `This museum, housed in a beautiful old mansion, is dedicated to the cultural heritage of fairy tales, legends, myths, and traditions from Cyprus and around the world.

    It features narrative tales, thematic exhibitions, educational programs, and events based on fairy tales.
    
    Visitors can learn about the evolution of fairy tales, create their own stories, and explore hidden passages and secret compartments that bring the stories to life.
    
    The museum provides a magical and immersive experience for both children and adults.`,
    popularity: 63,
    latitude: 35.17352767,
    longitude: 33.35874109,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/3zJoqWthpS3c5PWx6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/292176-fairytale-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://www.fairytalemuseum.org.cy",
      virtualTour: "",
    },
  },
  "National Struggle Museum": {
    description: `This museum is dedicated to the National Liberation Struggle of 1955-1959 against British rule.

    It houses a collection of documents, photographs, and memorabilia that tell the story of the struggle for independence.
    
    The exhibits provide an in-depth look at the events, key figures, and significant moments of the period.
    
    The museum serves as a poignant reminder of the sacrifices made for Cyprus’s independence and is an essential visit for those interested in the island’s modern history.`,
    popularity: 61,
    latitude: 35.17366966,
    longitude: 33.36813452,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/4vJyQ9kbUstNiFcy6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/134-national-struggle-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Agios Lazaros Byzantine Museum": {
    description: `Housed in the south wing of the church of Agios Lazaros, this museum displays a collection of significant religious artifacts and icons.

    Visitors can explore Byzantine icons, gospels, crosses, and other ecclesiastical treasures that reflect the rich religious heritage of the region.
    
    The church itself is a remarkable example of Byzantine architecture, standing over the tomb of St. Lazarus, who lived in Cyprus after his resurrection.
    
    The museum offers a deep insight into the island’s ecclesiastical history and art.`,
    popularity: 58,
    latitude: 34.91139317,
    longitude: 33.63453959,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/LmhtycH3J8hpeJzb6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/103-agios-lazaros-byzantine-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/126-agios-lazaros-church-and-ecclesiastical-museum-audio-guide",
      site: "",
      virtualTour: "https://virtuallarnakaregion.com/Byzantine_Museum/",
    },
  },
  "Church of Agios Varnavas and Ilarionas, Peristerona": {
    description: `This 10th-century Byzantine church is dedicated to Saints Barnabas and Hilarion.

    It features a unique architectural style with five domes arranged in a cross, making it one of the most impressive Byzantine churches on the island.
    
    Inside, visitors can admire beautiful frescoes and religious icons that reflect the church’s rich history and spiritual significance.
    
    The church’s serene location and historical importance make it a notable destination for those interested in Byzantine architecture and religious heritage.`,
    popularity: 57,
    latitude: 35.13025601,
    longitude: 33.08064744,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/zvWQEQznjnzjKbK78",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/209-church-of-agios-varnavas-and-ilarionas-saints-barnabas-and-hilarion?cur_lang=en-G",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/DC5D604B31A7BBE9C2257199003267CF?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  Tamassos: {
    description: `Tamassos was one of the most significant city-kingdoms of ancient Cyprus, renowned for its rich copper resources and strategic location.

    Archaeological discoveries at the site include the remains of the temple of Aphrodite, impressive royal tombs, and copper workshops.
    
    The site also features oversized limestone statues dating back to the 6th century BC, a testament to the city’s historical significance.
    
    Visitors can explore the remains of the city’s fortifications and gain insights into the ancient religious and industrial activities that took place here.`,
    popularity: 57,
    latitude: 35.0299995,
    longitude: 33.24472725,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/VHtQf4pSTbKnkH1n8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/201-tamasos-archaeological-site?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/AC29D500E2B17C5FC225719B0036AFAD?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Archangelos Michael Convent": {
    description: `Founded by Archbishop Nikiforos in the Byzantine period, this convent was rebuilt in 1636 and later ceded to Kykkos Monastery in 1713.

    The church features an iconostasis dating back to 1650 and a fresco of Archangel Michael from 1785.
    
    Today, the convent houses the Kykkos Monastery Research Centre, preserving its historical and spiritual heritage.
    
    The serene environment and rich history make it a significant landmark for visitors interested in Byzantine art and monastic traditions.`,
    popularity: 55,
    latitude: 35.1316758,
    longitude: 33.31097606,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/fANAqFPWuWy7AGT96",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/190-archangelos-michael-convent?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Local Archaeological Museum of Ancient Idalion": {
    description: `This museum promotes the rich archaeological finds of the Idalion region, displaying artifacts from various chronological phases of its history.

    Exhibits include pottery, tools, inscriptions, and sculptures from both older and more recent excavations.
    
    The museum serves as a visitor’s center for the surrounding archaeological site, providing insights into the area’s historical significance.
    
    It offers a comprehensive view of the ancient city’s development and its role in Cypriot history.`,
    popularity: 54,
    latitude: 35.01924186,
    longitude: 33.4233907,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/1UNubdiY188KT5RJ9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/364969-local-museum-of-ancient-idalion-in-dali-region?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/68FD3748528FD18FC22573E2003721AD?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Church of Timios Stavros (Holy Cross) tou Agiasmati, Platanistasa": {
    description: `This 15th-century church, dedicated to the Holy Cross, is renowned for its well-preserved frescoes that adorn its interior.

    The church features a steep-pitched wooden roof and is an excellent example of post-Byzantine ecclesiastical architecture.
    
    The frescoes, painted by Philip Goul, depict various religious scenes and are considered some of the finest on the island.
    
    The church is a UNESCO World Heritage site and offers visitors a glimpse into the rich religious and artistic heritage of Cyprus.`,
    popularity: 53,
    latitude: 34.97893508,
    longitude: 33.04678309,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/kaUKWxnYvkCFXvid7",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/269-stavros-tou-agiasmati-church?cur_lang=en-G",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/BD38CB1DB5F53C6FC22571990031696B?OpenDocument",
      audioGuide:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/audio-guides/160-the-church-of-the-holy-cross-of-agiasmati-in-platanistasa-audio-guide",
      site: "",
      virtualTour: "",
    },
  },
  "Ethnographic Museum of Cyprus": {
    description: `Located in the Old Archbishopric building, this museum showcases a vast collection of 19th and early 20th-century Cypriot folk art.

    Exhibits include wood-carved objects, tapestries, embroidery, pottery, and traditional Cypriot costumes.
    
    The museum, housed in a 15th-century Gothic-style building with historical significance, offers a deep dive into the daily life and cultural heritage of Cyprus.`,
    popularity: 53,
    latitude: 35.17344047,
    longitude: 33.36793244,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/Z7KwBDtndksV6gfo9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/121-ethnographic-museum-of-cyprus?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://www.cypriotstudies.org/English%20HTMLs/indexEN.html",
      virtualTour: "",
    },
  },
  "Church of the Transfiguration of the Saviour, Palaichori": {
    description: `Built in the 16th century, this church is known for its exceptional frescoes that cover its interior walls.

    The church features a unique architectural style with a pitched wooden roof.
    
    The frescoes, influenced by both Byzantine and Western art traditions, depict various religious scenes and are among the best-preserved on the island.
    
    The church’s historical and artistic significance makes it a must-visit for those interested in Cypriot religious heritage.`,
    popularity: 49,
    latitude: 34.92179977,
    longitude: 33.09471913,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/NPr6rb4vLNCtuWVH7",
      visitCyprus: "",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/09FEF352D9F1AC8AC2257199003551D5?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Church of Timios Stavros (Holy Cross), Pelendri": {
    description: `Dating back to the 12th century, this church is renowned for its beautiful frescoes that span several centuries.

    The church’s architecture is unique, with a dome and a cross-in-square plan, characteristic of Byzantine design.
    
    The frescoes, influenced by both Byzantine and Western art, depict various religious scenes and are considered some of the finest on the island.
    
    As a UNESCO World Heritage site, the church offers a deep insight into the religious and artistic heritage of Cyprus.`,
    popularity: 47,
    latitude: 34.89308608,
    longitude: 32.96627308,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/ZTv2p8vng5QU8WFJ8",
      visitCyprus: "",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/45F3E1C0EB88F33942257A7800346B6D?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Cyprus Theatre Museum": {
    description: `Located in the Panos Solomonides Cultural Centre, the Cyprus Theatre Museum opened in 2012 and offers a fascinating journey through the island’s theatrical history.

    The museum is divided into thematic sections: ‘The History,’ which covers major stages of theatre activity; ‘The Contributors,’ showcasing key aspects of theatre production; and ‘The Performance,’ displaying costumes and props from significant productions.
    
    Visitors can explore printed materials, scale models, set designs, photographs, and posters, providing a comprehensive look at the evolution of theatre in Cyprus.`,
    popularity: 46,
    latitude: 34.6824348,
    longitude: 33.04978746,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/yUzBy6SuSMAx8KWn6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/139-cyprus-theatre-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "http://www.cyprustheatremuseum.com/?lang=en",
      virtualTour: "",
    },
  },
  "Local Archaeological Museum of Palaipafos (Kouklia)": {
    description: `Housed in the medieval manor of Lusignan, this museum showcases the rich archaeological heritage of ancient Palaipafos (Kouklia).

    The exhibits include artifacts from the prehistoric to the Roman periods, reflecting the site’s significance as a major cult center dedicated to Aphrodite.
    
    Highlights include pottery, sculptures, inscriptions, and other artifacts discovered during excavations.
    
    The museum provides a comprehensive look at the history and culture of Palaipafos, making it an essential visit for those interested in ancient Cyprus.`,
    popularity: 42,
    latitude: 34.70613477,
    longitude: 32.57313198,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/WQCJum7QxxC2sWe2A",
      visitCyprus: "",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/D29999253080F9BBC2257199002134BD?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Church of Timiou Stavrou (Holy Cross) - Anogyra": {
    description: `Situated southwest of the village of Anogyra, this church is built over the foundations of an early Christian basilica.

    The current structure, dating back to the end of the 15th century, features a barrel-vaulted church with a single nave and dome.
    
    The interior is adorned with exceptional wall paintings in the Palaiologan style, showcasing the rich artistic heritage of the period.
    
    Surrounded by the traditional village of Anogyra and its carob orchards, the church and its surroundings offer a glimpse into the historical and cultural landscape of Cyprus.`,
    popularity: 37,
    latitude: 34.73085151,
    longitude: 32.73812915,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/aaEPt38eA6E6FLek8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/234-church-of-timiou-stavrou-holy-cross-anogyra?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Ecclesiastical Museum of Pafos (Paphos)": {
    description: `Located in the central square of Geroskipou, this museum houses a remarkable collection of ecclesiastical artifacts.

    Exhibits include icons, metallic objects such as censers and lamps, wood carvings, and ecclesiastical embroidery.
    
    Notable items include manuscripts and old books, with some dating back to the 15th century, as well as detached wall frescoes from the 12th century.
    
    Among the highlights is the small icon of Agia Marina, one of the oldest icons in Cyprus, dating to the pre-iconoclastic period of the 7th-8th century.`,
    popularity: 46,
    latitude: 34.76048965,
    longitude: 32.45160199,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/CMqwPztcCZbvPWGHA",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/150-ecclesiastical-museum-of-pafos-paphos?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Pafos (Paphos) Gate": {
    description: `One of the three main gates into the old city of Nicosia, Pafos Gate was part of the Venetian walls built in 1567 by engineer Giulio Savorgnano.

    The gate led southwest to Pafos, giving it its name, and replaced an earlier gate called Porta di San Domenico.
    
    During the British occupation in 1878, part of the wall near the gate was demolished to create a new opening.
    
    Today, Pafos Gate stands as a historical landmark, reflecting the rich architectural heritage of the Venetian period in Cyprus.`,
    popularity: 40,
    latitude: 35.17379901,
    longitude: 33.35732621,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/7qZsk58JvAeiTt5k9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/199-pafos-paphos-gate?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://www.nicosia.org.cy/en-GB/discover/sights/paphos-gate/",
      virtualTour: "",
    },
  },
  "Takis Pattichis Museum of Industrial Pharmacy": {
    description: `Established in 2022 by the Charalambos & Elena Pattihis Foundation, this unique museum is dedicated to the history and development of the pharmaceutical industry in Cyprus.

    The museum showcases a variety of scientific exhibits, including machinery and instruments used in the manufacturing and quality control of medicines.
    
    Visitors can explore the evolution of pharmaceutical processes and see historical books and manuals related to industrial pharmacy.
    
    Interactive displays and videos provide an engaging and educational experience, highlighting the significant contributions of Takis Pattichis to the pharmaceutical industry.`,
    popularity: 40,
    latitude: 34.67221194,
    longitude: 33.04121745,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/SGvc3bPR729YTZv76",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/360410-takis-pattichis-museum-of-industrial-pharmacy?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://www.pattichismuseum.cy/en/home/",
      virtualTour: "",
    },
  },
  Idalion: {
    description: `Idalion, an ancient city-kingdom founded in the 12th century BC, is one of the most significant archaeological sites in Cyprus.

    The city was a major center for copper production and trade, with its strategic location contributing to its prosperity.
    
    Key features of the site include the remains of fortifications, temples, and administrative buildings, providing insights into the political and economic life of ancient Cyprus.
    
    The site also houses a museum and visitor center that display artifacts discovered during excavations, including pottery, inscriptions, and tools.`,
    popularity: 39,
    latitude: 35.01583184,
    longitude: 33.42300863,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/Xaor8kpC3Vc8Kyq79",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/196-ancient-idalion-archaeological-site?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/1415F272540A21FBC22585B20028A6FE?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Agia Moni Monastery": {
    description: `Agia Moni Monastery is linked to the very origins of monasticism in Cyprus, believed to have been founded around 300 AD by Saints Nicholas and Euthychios.

    The monastery is renowned for its serene environment and historical significance.
    
    It once housed a sacred relic given to Saint Nicholas and a piece of the cloak of the Virgin Mary, which were kept at the monastery until 1754.
    
    The site remains a tranquil place of prayer and contemplation, reflecting the deep spiritual heritage of Cyprus.`,
    popularity: 38,
    latitude: 34.89928497,
    longitude: 32.61915919,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/nNpAP9GJe4hCsEpg6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/257-agia-moni-monastery?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Larnaka (Larnaca) Municipal Museum of Natural History": {
    description: `Located within the Municipal Gardens, this quaint museum showcases a variety of natural history exhibits.

    Collections include local reptiles, insects, birds, marine life, fossils, and rock formations.
    
    The marine life section features an array of international and local shells, corals, sponges, and sea creatures.
    
    A traditional Cypriot yard display includes the iconic Cyprus donkey, and another notable collection highlights the island’s insects and endemic plants.
    
    Visitors can also explore the museum virtually through the Larnaka Virtual Museums project, enhancing the educational experience with enriched material.`,
    popularity: 33,
    latitude: 34.91650035,
    longitude: 33.62692666,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/AbuF1QCfbnp6zzeP6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/108-larnaka-larnaca-municipal-museum-of-natural-history?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour:
        "https://virtuallarnakaregion.com/Museum_of_Natural_History/",
    },
  },
  "Church of Panayia Chrysokourdaliotissa, Kourdali": {
    description: `Located in the scenic village of Kourdali, this 16th-century church was originally part of a monastery dedicated to Panagia (the Virgin Mary).

    The church features a steep-pitched roof and impressive wood carvings, including an ornate iconostasis from the 16th-17th centuries.
    
    The interior walls are adorned with beautiful frescoes in the Italo-Byzantine style, depicting various religious scenes.
    
    Re-established as a monastery in 2006, the site continues to serve as a place of worship and offers visitors a glimpse into the religious and artistic heritage of Cyprus.`,
    popularity: 32,
    latitude: 34.97436403,
    longitude: 32.95058628,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/vacDsZDjq5N3yfE37",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/266-panagia-chrysokourdaliotissa-church?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://immorfou.org.cy/ιερά-μονή-παναγίας-χρυσοκουρδαλιώτι/",
      virtualTour: "",
    },
  },
  "State Gallery of Contemporary Art": {
    description: `Housed in a beautifully restored building, the State Gallery of Contemporary Art showcases a diverse collection of paintings and sculptures by 20th-century Cypriot artists.

    The gallery features works that reflect the evolution of Cypriot art, with pieces ranging from early modernist styles to contemporary expressions.
    
    Exhibitions change periodically, providing visitors with fresh perspectives on the island’s artistic heritage.
    
    The gallery is an essential destination for those interested in exploring the rich tapestry of Cypriot visual arts.`,
    popularity: 31,
    latitude: 35.16799147,
    longitude: 33.36570519,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/FEh86tUoPJGJffh78",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/128-state-gallery-of-contemporary-art?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Lemesos (Limassol) Municipal Art Gallery": {
    description: `The Lemesos Municipal Art Gallery, housed in a blend of historical and modern buildings, offers one of the largest collections of Cypriot modern art.

    With over 600 works, including paintings, sculptures, and mixed media pieces, the gallery showcases the evolution of Cypriot art from the early 20th century to the present.
    
    The old building, designed by German-Jewish architect Ginsdbury in 1938, features works by notable Cypriot artists such as Adamantios Diamantis and Telemachos Kanthos.
    
    The ground halls present contemporary pieces by emerging Cypriot artists, providing a dynamic cultural experience for visitors.`,
    popularity: 31,
    latitude: 34.68353235,
    longitude: 33.05789251,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/oTE6AEqp5PtpsYj88",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/145-lemesos-limassol-municipal-art-gallery?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Cyprus Postal Museum": {
    description: `Located within the walled city of Lefkosia (Nicosia), the Cyprus Postal Museum was founded in 1981 to exhibit the island’s rich postal history.

    The museum is housed in an old two-storey mansion and showcases a chronological collection of postage stamps, including the oldest series with Queen Victoria’s portrait and the first dedicated Cypriot series of 1928.
    
    Visitors can explore various philatelic materials, ‘first day of issue’ envelopes, and exhibits detailing the evolution of postal services, including sealing wax, weighing scales, and machinery.`,
    popularity: 28,
    latitude: 35.17104419,
    longitude: 33.36356853,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/DpwyCERDW2Cr9N447",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/120-cyprus-postal-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Municipal Historical Archives - Museum of Larnaka (Larnaca)": {
    description: `Located at the start of the Foinikoudes promenade on Europe Square, this museum is part of the Municipal Cultural Centre, housed in British Colonial buildings from 1881.

    The museum’s collection chronicles the history of life in the Larnaka region through books, documents, artifacts, and items covering politics, religion, professions, arts, science, and culture.
    
    Key exhibits include a section dedicated to the philosopher Zenon of Kition, the history of theatre, and the evolution of Larnaka’s biggest festival, ‘Kataklysmos.’
    
    Other displays feature photographs, maps, engravings, postcards, and costumes, many donated by community members.`,
    popularity: 27,
    latitude: 34.91664647,
    longitude: 33.63752755,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/9WVxpf8tnoYGozvz9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/109-municipal-historical-archives-museum-of-larnaka-larnaca?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://larnakaregion.com/directory/product/larnaka-historic-archives-museum",
      virtualTour:
        "https://virtuallarnakaregion.com/LarnakaHistoricArchivesMuseum/",
    },
  },
  "Early Christian Basilica": {
    description: `The Early Christian Basilica, located in Kato Pafos, is built on the ruins of the largest Early Byzantine basilica on the island.

    Constructed in the 4th century AD, the basilica originally had seven aisles, which were later reduced to five.
    
    The floor of the basilica was adorned with colorful mosaics, some of which are still preserved today.
    
    Within the basilica complex is St. Paul’s Pillar, where tradition holds that Saint Paul was flogged before the Roman governor Sergius Paulus converted to Christianity.
    
    The site offers a glimpse into the early Christian architectural and religious heritage of Cyprus.`,
    popularity: 25,
    latitude: 34.76239187,
    longitude: 32.41012392,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/DXV7tTpjkuHw67F88",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/254-early-christian-basilica-st-paul-s-pillar-chrysopolitissa-agia-kyriaki-church?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Cyprus Museum of Natural History": {
    description: `Located within the grounds of the Carlsberg Brewery, the Cyprus Museum of Natural History is the largest natural history exhibition in Cyprus.

    Founded by the Photos Photiades Charity, Scientific and Cultural Foundation, the museum houses approximately 2,500 exhibits.
    
    The collection includes embalmed mammals, birds, fish, reptiles, and insects, alongside rocks, minerals, semi-precious stones, shells, and fossils.
    
    This diverse array of natural specimens provides a comprehensive overview of Cyprus’s natural heritage and the island’s unique biodiversity.`,
    popularity: 25,
    latitude: 35.07558551,
    longitude: 33.38166458,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/B5AgJdTMsMemBRJH8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/118-cyprus-museum-of-natural-history?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "http://www.natmuseum.org.cy/index-en.html",
      virtualTour: "",
    },
  },
  "Medical Museum Kyriazi - Larnaka (Larnaca)": {
    description: `Housed in a traditional 1927 mansion in the center of Larnaka, the Medical Museum Kyriazi showcases the medical, healing, and health history of Cyprus, highlighting its connections through Antiquity, the Middle Ages, and the Ottoman period.

    The museum’s collection includes artifacts from Ancient Roman times to the 1980s, with a primary focus on the period between 1850-1950.
    
    Exhibits feature old medical books, framed documents, traditional pharmaceutical furniture, an X-ray machine, surgical instruments, and a fully equipped pharmacist’s display unit.
    
    Most items originate from the Larnaka area and were donated by local doctors, pharmacists, and historians.`,
    popularity: 22,
    latitude: 34.91296327,
    longitude: 33.63441259,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/zLCtPS2E2EttJaEn6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/110-medical-museum-kyriazi-larnaka-larnaca?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://www.kyriazismedical.museum",
      virtualTour: "https://virtuallarnakaregion.com/KyriazisMedicalMuseum/",
    },
  },
  "Maa-Palaiokastro (Palaeokastro)": {
    description: `Situated near the Coral Bay resort, Maa-Palaiokastro is a significant archaeological site where the first Mycenaean Greeks settled in Cyprus around 1200 BC.

    This site marks the beginning of the island’s Hellenization and provides crucial insights into the end of the Late Bronze Age in Cyprus.
    
    The settlement was fortified with imposing defensive walls, featuring two Cyclopean-style walls for protection from land and sea.
    
    The on-site museum, designed by Italian architect Andrea Bruno, showcases artifacts and offers an in-depth look at the Mycenaean colonization of Cyprus.`,
    popularity: 21,
    latitude: 34.85451817,
    longitude: 32.36353869,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/n8feRTYRFdSqKxMF6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/244-maa-palaeokastro-archaeological-site-and-museum?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/2E996F138499D655C22571960038D492?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Agios Antonios Church - Kelia village": {
    description: `Agios Antonios Church, located in Kelia village, is one of the most significant Byzantine churches in Cyprus, possibly dating back to the 9th century.

    The church is a three-aisled vaulted basilica that originally featured a dome.
    
    It houses significant wall paintings from the 9th, 11th, and 13th centuries, showcasing the rich history and religious heritage of the island.
    
    This historical landmark provides a serene and spiritual experience for visitors, highlighting the architectural and artistic achievements of Byzantine Cyprus.`,
    popularity: 21,
    latitude: 34.97562129,
    longitude: 33.62079526,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/PXJmkxRy63Ggwsjc9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/168-agios-antonios-church-kelia-village?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://agiosantonios.com",
      virtualTour: "",
    },
  },
  "Panagia Chryseleousa Church": {
    description: `Located in Empa village, Panagia Chryseleousa Church is a historic stone-built structure featuring a combination of two churches with three aisles and two domes.

    The eastern section, built in the 12th century, is a cruciform church with a dome, possibly constructed on the ruins of an earlier Christian basilica.
    
    In the 13th century, an extension was added to the west, forming a cross-in-square domed building.
    
    The church retains rare wall paintings from the 12th, 13th, 15th, and 16th centuries, including a notable depiction of the miracle of fishing.
    
    It also houses significant portable icons from the 15th and 16th centuries, showcasing the rich ecclesiastical heritage of Cyprus.`,
    popularity: 20,
    latitude: 34.80649449,
    longitude: 32.42458259,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/RHE1Ff8oiVrbGdjJA",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/248-panagia-chryseleousa-church?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Zuhuri Mosque": {
    description: `Built in the mid-19th century, Zuhuri Mosque is an important Muslim religious center in Larnaka.

    The mosque was originally part of a larger complex that included an inn (khan) and a market (bazaar), which served as a focal point for the local Muslim community.
    
    Although the minaret collapsed in the 20th century, the mosque remains a significant historical and cultural landmark.
    
    Its architectural style reflects the Ottoman influence in Cyprus, offering visitors a glimpse into the island’s diverse religious heritage`,
    popularity: 19,
    latitude: 34.9118997,
    longitude: 33.63606881,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/QWBMa2Q6iF2qppvd6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/186-zuhuri-mosque?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "The Church of the Archangelos Michael, or Panagia Theotokos": {
    description: `The Church of the Archangelos Michael, also known as Panagia Theotokos, is an important Byzantine-era church in Cyprus.

    This religious site is renowned for its impressive wall paintings dating from the 12th century, depicting significant biblical scenes and religious figures.
    
    The church showcases the rich artistic and architectural traditions of the Byzantine period, providing visitors with a unique insight into the island’s spiritual and cultural heritage.`,
    popularity: 19,
    latitude: 35.0031047,
    longitude: 32.89705019,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/fRivH5EKk5caCKUx7",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/273-the-church-of-the-archangelos-michael-or-panagia-theotokos?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Cyprus Police Museum": {
    description: `Originally founded in 1933 during the British colonial period as a Criminal Museum, the Cyprus Police Museum offers a fascinating glimpse into the history of law enforcement on the island.

    The museum’s collection includes police uniforms, arms, equipment, vehicles, and documents, along with musical instruments and photographs of the Police Band.
    
    Significant exhibits also cover the period of the Second World War and the National Liberation Struggle (1955-1959), showcasing the evolution of the Cyprus Police Force and its role in the island’s history.`,
    popularity: 19,
    latitude: 35.14479685,
    longitude: 33.37424395,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/WtroHrTJS322PQ7a9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/119-cyprus-police-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Kallinikeio Municipal Museum of Athienou": {
    description: `The Kallinikeio Municipal Museum of Athienou showcases the region’s history and cultural heritage. It features Archaeological, Ecclesiastical Art, and Ethnographic collections.

    Artifacts from ancient Athienou and icons by Kallinikos Stavrovouniotis highlight the museum’s offerings. Visitors can also explore exhibits depicting local life in the 20th century.`,
    popularity: 17,
    latitude: 35.06387875,
    longitude: 33.53905765,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/QS6AqGdyKF5WHDgz8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/105-kallinikeio-municipal-museum-of-athienou?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Church of Panagia Iamatiki": {
    description: `Situated on the outskirts of Arakapas village, the Church of Panagia Iamatiki is a three-aisled wooden-roofed church.

    It features sophisticated wall paintings from the early 16th century, representing the Italo-Byzantine style.
    
    A notable leather icon of the Virgin, believed to have curative powers, is housed in the nearby new church.`,
    popularity: 16,
    latitude: 34.84384177,
    longitude: 33.11464107,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/6TpN9oAVtH2uTgB2A",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/228-church-of-panagia-iamatiki?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Paralimni Folkloric Museum": {
    description: `Housed in a traditional 19th-century residence, the Paralimni Folkloric Museum showcases Cypriot art and everyday tools, reflecting rural life of the past.

    Visitors can explore the traditions and pastimes of previous generations.
    
    The building also serves as a multipurpose center for exhibitions and cultural events.`,
    popularity: 15,
    latitude: 35.03630526,
    longitude: 33.98317573,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/c7qs2NekDbQ6aWAN7",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/102-paralimni-folkloric-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "The Costas Argyrou Museum": {
    description: `The Costas Argyrou Museum displays the artistic legacy of Cyprus’ first recognized naive sculptor, Costas Argyrou.

    The museum features stone and wood sculptures, mosaics, and paintings, showcasing Argyrou’s creative journey until his death in 2001.
    
    The gallery, initially designed as a church, includes mosaic religious images and the cenotaphs of Argyrou and his wife.`,
    popularity: 14,
    latitude: 34.80426718,
    longitude: 33.49993045,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/BeBpaUskiJExKLsL7",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/365285-the-costas-argyrou-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://costasargyroumuseum.org",
      virtualTour: "https://virtuallarnakaregion.com/Costas-Argyrou-Museum/",
    },
  },
  "Cyprus Medical Museum": {
    description: `Housed in a beautifully preserved building from 1889, the Cyprus Medical Museum showcases the evolution of medicine on the island.

    The museum features over 100 exhibits, including the first electrocardiograph used in Cyprus, a 1965 X-ray machine, and various medical instruments.
    
    It is divided into seven sections, each highlighting a different medical specialty.`,
    popularity: 12,
    latitude: 34.69293122,
    longitude: 32.99815845,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/wfVBpghGqxq5Mcep9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/138-cyprus-medical-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Water Museum": {
    description: `Housed in the historic Limassol Water Pumping Station built in 1925, the Water Museum explores the evolution of water distribution in Cyprus.

    Exhibits include archaeological artifacts and rare instruments used for pumping and water quality testing.
    
    A short film and rich photographic material further illustrate the significance of water in the region’s history.`,
    popularity: 12,
    latitude: 34.6687478,
    longitude: 33.02726995,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/y7dhcGoMKRVup57h6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/144-water-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "The Avgorou Ethnographic Museum": {
    description: `Housed in a two-storey traditional residence from 1921, the Avgorou Ethnographic Museum offers a glimpse into the daily life of previous generations.

    Visitors can see 19th-century wood-carved furniture, costumes, silverware, and pottery.
    
    The museum also features a collection of paintings by self-taught Cypriot artists and traditional textiles and embroideries from the 18th and 19th centuries.`,
    popularity: 11,
    latitude: 35.03980994,
    longitude: 33.84016699,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/yiJ5wn6npJrrkNoaA",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/97-the-avgorou-ethnographic-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "The Pancyprian Gymnasium Museums": {
    description: `This museum offers a captivating journey through Cypriot education and culture.

    Located in the historic center of Nicosia, it features collections of old maps, weaponry, numismatics, and natural history.
    
    An impressive gothic sculpture and art gallery showcasing works by former teachers and students further enrich the experience.`,
    popularity: 10,
    latitude: 35.17401757,
    longitude: 33.36932696,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/VxSVFvYk98mcJiS3A",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/131-the-pancyprian-gymnasium-museums?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://www.nicosia.org.cy/en-GB/discover/museums/pancyprian-gymnasium/",
      virtualTour: "",
    },
  },
  "Pattichion Municipal Museum - Historical Archives of Lemesos (Limassol) - Research Centre of Lemesos":
    {
      description: `Housed in the old residence of the District Officer, this museum showcases the history and culture of Limassol from the 18th century onwards.

      Visitors can explore written and oral documents, photographs, videos, and artifacts, providing a comprehensive view of the city’s past.
      
      The museum also serves as a research center, offering digitized archives for scientists, researchers, and the public.`,
      popularity: 10,
      latitude: 34.68475208,
      longitude: 33.05493419,
      labels: [label.Museum, label.Free],
      links: {
        googleMaps: "https://maps.app.goo.gl/Dxte7au3TGqkY1eD9",
        visitCyprus:
          "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/147-pattichion-municipal-museum-historical-archives-of-lemesos-limassol-research-centre-of-lemesos?cur_lang=en-GB",
        departmentOfAntiquities: "",
        audioGuide: "",
        site: "https://www.limassol.org.cy/en/istoriko-arxeio-kentro-meleton",
        virtualTour: "",
      },
    },
  "Church of Agios Sozomenos, Galata": {
    description: `Located in the center of Galata village, the Church of Agios Sozomenos dates back to the early 16th century. This aisle-less, timber-roofed structure features a portico in the shape of the Greek letter ‘pi’.

    The church’s interior is adorned with post-Byzantine frescoes, depicting scenes from the Christological cycle and various saints. The frescoes are well-preserved and divided into two tiers, with the Virgin Mary shown between Archangels Michael and Gabriel in the apse.`,
    popularity: 9,
    latitude: 34.99641456,
    longitude: 32.89834247,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/N1pDD2gdLGT5c8iJ7",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/272-agios-sozomenos-church?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/0AD4582311E8ECF4C22571990032797C?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Agios Kirykos and Agia Ioulitti Church": {
    description: `The Church of Agios Kirykos and Agia Ioulitti is a cross-in-square domed church dating back to the 12th century.

    It has undergone numerous additions, particularly in the 15th century. Inside, you can find fragments of frescoes from the 12th and 15th centuries, offering a glimpse into its rich historical and artistic heritage.`,
    popularity: 8,
    latitude: 34.85530565,
    longitude: 32.51716752,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/ARb8t8oF5Hnj8dHVA",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/256-agios-kirykos-and-agia-ioulitti-church?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Municipal Folk Art Museum": {
    description: `The Municipal Folk Art Museum, founded in 1985, is housed in a renovated building and features over 500 exhibits across six rooms. The collection includes Cypriot folk art from the 19th and 20th centuries, showcasing urban attire, national costumes, furniture, tools, wood carvings, embroidery, and jewellery.

    Recognized with the ‘Europa Nostra’ award in 1988, the museum highlights various elements of traditional Cypriot life, offering a glimpse into the island’s rich cultural heritage.`,
    popularity: 8,
    latitude: 34.67888507,
    longitude: 33.04919432,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/eaaXtXQeP8fHGA2d7",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/143-municipal-folk-art-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://www.limassol.org.cy/en/museum-laikis-texnis",
      virtualTour: "",
    },
  },
  "Museum of the history of Cypriot Coinage": {
    description: `Founded in 1995, this museum traces Cypriot coinage from the 6th century BC to modern times. The collection includes over 500 coins, offering a chronological display of 2,600 years of numismatic history.

    Exhibits cover nine periods, showcasing coins from the ancient city-kingdoms to the modern Republic of Cyprus. Notable pieces include a Roman bronze coin symbolizing Cypriot unity.`,
    popularity: 7,
    latitude: 35.17293505,
    longitude: 33.36225781,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/WB9Txij4MxyyaXVL8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/125-museum-on-the-history-of-cypriot-coinage?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Municipal Hambis Printmaking Museum": {
    description: `This museum celebrates the art of printmaking, showcasing a wide array of prints from various periods and styles. It features exhibitions that highlight traditional and modern printmaking techniques.

    Visitors can engage with the creative process through workshops and educational programs, gaining insight into the meticulous craftsmanship of woodcuts, etchings, lithographs, and screen prints. The museum serves as a hub for both art enthusiasts and those new to the medium.`,
    popularity: 7,
    latitude: 35.17486831,
    longitude: 33.37022132,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/D3kECPE6MeMPn67q8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/364967-municipal-hambis-printmaking-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "https://printmaking.cy",
      virtualTour: "",
    },
  },
  "Royal Chapel of Agia Aikaterini (St. Catherine), Pyrga": {
    description: `This historic chapel, dating back to the 15th century, is renowned for its exquisite frescoes that depict various religious scenes. The chapel was commissioned by the Lusignan kings, reflecting the blend of Byzantine and Gothic architectural styles.

    The interior features intricate wall paintings that narrate biblical stories, showcasing the artistic excellence of the period. This chapel is a significant cultural and religious landmark, offering visitors a glimpse into the rich history and artistic heritage of Cyprus.`,
    popularity: 6,
    latitude: 34.92567176,
    longitude: 33.43118505,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/CrCGYUz3H5LzFpzY7",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/179-royal-chapel-of-agia-aikaterini-st-catherine-pyrga-village?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/40727CE6E1B36148C225719900323A59?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Church of Agios Andronikos, Polis Chrysochous": {
    description: `This historic church, built during the medieval period, is notable for its simple yet elegant architectural style. The Church of Agios Andronikos features beautiful frescoes that adorn its interior walls, reflecting the religious art of the era.

    The church serves as a significant religious site, offering visitors a peaceful retreat to appreciate its artistic and historical value. Its serene environment and historical importance make it a cherished landmark in Polis Chrysochous.`,
    popularity: 5,
    latitude: 35.03477348,
    longitude: 32.42226835,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/pgMZqPqGPKms6YC9A",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/255-agios-andronikos-church?cur_lang=en-GB",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/da/da.nsf/All/46F0E538EDC0A721C225719900324E4D?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Kampos Forest Heritage Museum": {
    description: `The Kampos Forest Heritage Museum is a hidden gem dedicated to preserving the natural and cultural heritage of the region. It offers an insightful look into the traditional forest life and the biodiversity of the area.

    Visitors can explore exhibits featuring forestry tools, historical photographs, and detailed information about the local flora and fauna. The museum aims to educate and inspire appreciation for forest conservation and the rich heritage of the Kampos area.`,
    popularity: 5,
    latitude: 35.03365601,
    longitude: 32.73733886,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/rBfZtVXV4KYADdNn9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/360457-kampos-forest-heritage-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Arsos Folk Art Museum": {
    description: `The Arsos Folk Art Museum showcases traditional Cypriot rural life and culture. The museum features exhibits of traditional costumes, household items, agricultural tools, and crafts that illustrate the daily life and customs of the past.

    Visitors can immerse themselves in the history of Arsos village, learning about its rich heritage and the craftsmanship of its inhabitants. The museum provides a detailed look into the agricultural and domestic activities that have shaped the local culture.`,
    popularity: 5,
    latitude: 34.84122057,
    longitude: 32.76874818,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/Zt7hiZ6XaSANXd2w6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/159-arsos-folk-art-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Saint George’s Church - Lazanias village": {
    description: `Built in 1855, this church features a beautifully carved wooden iconostasis, added in 1865. Unique acoustic jars are embedded in the floor to enhance sound during services. The church’s intricate designs and historical significance make it a notable landmark in the village, reflecting the rich cultural heritage of Lazanias.`,
    popularity: 4,
    latitude: 34.94880905,
    longitude: 33.17506815,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/qp3n7kJvQR21tjhN6",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/197-saint-george-s-church-lazanias-village?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Agia Anastasia Church": {
    description: `Agia Anastasia Church stands as a remarkable example of Byzantine architecture, renowned for its well-preserved frescoes and intricate iconography. The church offers a serene and spiritual atmosphere, making it a popular site for both worship and tourism.

    Visitors can explore its historical significance and enjoy the peaceful setting, which provides a glimpse into the rich religious heritage of the area. The church’s architectural beauty and spiritual ambiance are key highlights for those interested in history and culture.`,
    popularity: 7,
    latitude: 34.700919,
    longitude: 32.999997,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/q9tsd6hHi9qcuJiw5",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/230-agia-anastasia-church?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Folklore Museum ‘Kostas Kaimakliotis’ - Aradippou": {
    description: `The Folklore Museum ‘Kostas Kaimakliotis’ in Aradippou showcases traditional Cypriot life and culture. The museum features a collection of artifacts, tools, and textiles that reflect the daily life and customs of the region’s past.

    Visitors can explore exhibits that highlight agricultural practices, household items, and traditional crafts. The museum provides a valuable insight into the rich cultural heritage of Aradippou, preserving the legacy of Cypriot folklore for future generations.`,
    popularity: 3,
    latitude: 34.9516524,
    longitude: 33.58848679,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/JNiTaQL1ynTdEoaUA",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/104-folklore-museum-kostas-kaimakliotis-aradippou?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Museum of Byzantine Heritage - Palaichori Village": {
    description: `The Museum of Byzantine Heritage in Palaichori Village showcases a rich collection of Byzantine art and artifacts. It offers visitors a deep dive into the ecclesiastical history and cultural heritage of the area, highlighting exquisite icons, frescoes, and religious relics from the Byzantine period.

    The museum serves as a cultural hub, preserving and presenting the artistic achievements and spiritual traditions of Byzantine Cyprus. It stands as a testament to the village’s historical significance and the enduring legacy of Byzantine art.`,
    popularity: 3,
    latitude: 34.92249907,
    longitude: 33.09290018,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/m9m587sTFf83piYR7",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/162-museum-of-byzantine-heritage-palaichori-village?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Agios Georgios Makris Chapel": {
    description: `The Agios Georgios Makris Chapel, perched on a hill overlooking Larnaca’s salt lake, dates back to the 13th century. Originally part of the medieval village of Agrinou, it features late Byzantine architecture.

    Destroyed during the Mameluke invasions in 1426, it was later rebuilt. In the 18th and 19th centuries, it served as a monastery, with only the chapel remaining after the adjoining structures were demolished in the 20th century.`,
    popularity: 2,
    latitude: 34.91238747,
    longitude: 33.60514309,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/7bXZf9KNZYL1Wgzd7",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/187-agios-georgios-makris-chapel?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Ecclesiastical Museum - Sotira village": {
    description: `The Ecclesiastical Museum in Sotira village houses an impressive collection of religious artifacts and icons, reflecting the rich ecclesiastical history of Cyprus. The museum is located in a renovated traditional house, providing a quaint and authentic setting.

    Visitors can explore various exhibits, including intricate wood carvings, rare manuscripts, and liturgical vestments. The museum offers a glimpse into the religious and cultural heritage of the region, making it a significant stop for history and art enthusiasts.`,
    popularity: 2,
    latitude: 35.0281338,
    longitude: 33.95287692,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/GW4nzDsBUp7Z2WDMA",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/877-ecclesiastical-museum-sotira-village?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Church of Agios Mamas, Louvaras": {
    description: `The Church of Agios Mamas in Louvaras is a fine example of medieval ecclesiastical architecture in Cyprus. The church is renowned for its exquisite frescoes dating back to the 15th century, which depict various biblical scenes and saints.

    This small, yet historically rich church offers visitors a glimpse into the religious art and traditions of the time. The detailed frescoes and serene atmosphere make it a significant landmark for those interested in Cypriot heritage and Byzantine art.`,
    popularity: 1,
    latitude: 34.83750664,
    longitude: 33.04431023,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/QRojYRhZkob1s1nv7",
      visitCyprus: "",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/301CDACBD1B4C198C22571990032A9F8?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Local Archaeological Museum of Ledroi": {
    description: `Local Archaeological Museum of Ledroi” is dedicated to showcasing artifacts from the rich historical and cultural heritage of Ledra, the ancient name for Nicosia.

    Visitors can explore exhibits ranging from prehistoric times to the Roman era, providing insights into the area’s development and significance.
    
    The museum offers a unique glimpse into the local archaeology and history, making it a valuable educational resource for those interested in the ancient past of Cyprus.`,
    popularity: 0,
    latitude: 35.16614306,
    longitude: 33.35632122,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/uaR1QmNpb7rQ3SBH7",
      visitCyprus: "",
      departmentOfAntiquities:
        "http://www.culture.gov.cy/dmculture/DA/DA.nsf/All/BA132D2B1D3E932BC2258A6F00244E79?OpenDocument",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "The Medieval Walls of Lefkosia (Nicosia)": {
    description: `The Medieval Walls of Lefkosia (Nicosia) were constructed by the Venetians in the 16th century to protect the city from invaders. These circular walls feature eleven heart-shaped bastions and were initially made of mud brick.

    The Ottomans later reinforced them with stone, adding further strength to the structure. Surrounding the walls is a broad moat, which has been repurposed for modern use. Today, the moat hosts sports fields, public gardens, and an open-air sculpture exhibition, blending historical architecture with contemporary activities.`,
    popularity: 0,
    latitude: 35.16854628,
    longitude: 33.36566926,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/prRjLQBWpkf9xQ2o9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/205-the-medieval-walls-of-lefkosia-nicosia?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "St. Paul’s Anglican Church": {
    description: `St. Paul’s Anglican Church, established in the 19th century, serves as a significant place of worship for the Anglican community in Nicosia. The church’s architecture reflects a blend of Gothic Revival and traditional Cypriot styles, featuring a prominent bell tower and stained glass windows.

    The church is not only a place for regular worship but also hosts various community events and services, fostering a sense of fellowship and support among its congregants. Its historical and architectural significance makes it a notable landmark in Nicosia.`,
    popularity: 0,
    latitude: 35.16960744,
    longitude: 33.35466115,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/eFvYHEcNE5WNyxG46",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/207-st-paul-s-anglican-church?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Panagia Chrysaliniotissa Church": {
    description: `Panagia Chrysaliniotissa Church” is one of the oldest Byzantine churches in Nicosia, dating back to the 15th century. The church is dedicated to the Virgin Mary and is renowned for its stunning frescoes and intricate iconostasis, which showcase exceptional Byzantine art.

    This historical landmark is not only a place of worship but also a significant cultural and architectural treasure. It stands as a testament to the rich religious and artistic heritage of Cyprus, attracting both pilgrims and visitors interested in the island’s history.`,
    popularity: 0,
    latitude: 35.17633501,
    longitude: 33.36975532,
    labels: [label.HistoricalLandmark],
    links: {
      googleMaps: "https://maps.app.goo.gl/j5a6Wxpydy9efdrn9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/211-panagia-chrysaliniotissa-church?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Chrysaliniotissa Crafts Centre": {
    description: `“Chrysaliniotissa Crafts Centre” is a vibrant hub dedicated to traditional Cypriot crafts. Located in the heart of Nicosia, the centre offers visitors a chance to explore and purchase handmade items, including ceramics, textiles, and jewelry.

    This cultural gem not only preserves the island’s rich artistic heritage but also supports local artisans. It’s a perfect spot for those interested in authentic, high-quality crafts that reflect Cyprus’s unique cultural identity. The centre often hosts workshops and events, making it an interactive experience for all ages.`,
    popularity: 0,
    latitude: 35.17577171,
    longitude: 33.36999592,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/BiArRJokxH6LSX1i9",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/212-chrysaliniotissa-crafts-centre?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Kebir Mosque (The Great Mosque) - Lemesos (Limassol)": {
    description: `This significant historical landmark in Limassol dates back to the Ottoman period and is known for its distinctive architectural style. It has served as a place of worship for centuries and remains central to the local Muslim community.

    The site reflects the rich cultural and religious history of the region. Visitors can appreciate its historical significance and architectural beauty, which stands as a testament to the diverse heritage of Cyprus. The mosque is accessible to the public and offers a peaceful retreat in the bustling city.`,
    popularity: 0,
    latitude: 34.67310419,
    longitude: 33.04272557,
    labels: [label.HistoricalLandmark, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/9dCCcJm9ECfS35PPA",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/sites-monuments/232-kebir-mosque-the-great-mosque-lemesos-limassol?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Archbishop Makarios III Foundation Art Galleries": {
    description: `The art galleries of the Archbishop Makarios III Foundation showcase an impressive collection of Cypriot art, spanning from ancient to contemporary works. The galleries are dedicated to preserving and promoting the rich cultural heritage of Cyprus through various exhibits and events.

    Visitors can explore a diverse array of artworks, including paintings, sculptures, and artifacts that reflect the island’s historical and artistic evolution. The foundation aims to foster appreciation for Cypriot art and culture, making it a significant cultural destination.`,
    popularity: 0,
    latitude: 35.17255797,
    longitude: 33.36836885,
    labels: [label.Museum],
    links: {
      googleMaps: "https://maps.app.goo.gl/An5BWg2xNZvtu7cz8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/114-archbishop-makarios-iii-foundation-art-galleries?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Basket Weaving Museum - Ineia Village": {
    description: `The Basket Weaving Museum in Ineia Village offers a glimpse into the traditional craft of basket weaving, a significant aspect of Cypriot heritage. The museum houses a variety of handwoven baskets, tools, and exhibits that illustrate the history and techniques of this ancient craft.

    Visitors can learn about the cultural importance of basket weaving in Cyprus and see demonstrations of the weaving process. The museum aims to preserve and promote this traditional skill, making it an educational and cultural destination for all ages.`,
    popularity: 0,
    latitude: 34.95443709,
    longitude: 32.39580753,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/v8jNbGnEbj9NTNsF8",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/154-basket-weaving-museum-ineia-village?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
  "Ledron Archaeological Local Museum": {
    description: `Located in Lefkosia, this museum showcases significant archaeological finds from the local area. It offers insights into the historical and cultural development of the region through various periods.

    The exhibits include pottery, tools, and other artifacts that provide a comprehensive understanding of ancient life. The museum aims to educate visitors about the rich archaeological heritage of Lefkosia, making it a valuable cultural and educational resource.`,
    popularity: 0,
    latitude: 35.16606917,
    longitude: 33.35633566,
    labels: [label.Museum, label.Free],
    links: {
      googleMaps: "https://maps.app.goo.gl/sugNrCQqEkJedvs1A",
      visitCyprus:
        "https://www.visitcyprus.com/index.php/en/discovercyprus/culture/museums-galleries/364968-ledron-archaeological-local-museum?cur_lang=en-GB",
      departmentOfAntiquities: "",
      audioGuide: "",
      site: "",
      virtualTour: "",
    },
  },
};

export default Places;

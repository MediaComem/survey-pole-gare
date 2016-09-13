var gmVilles = [
"1123 Aclens",
"1352 Agiez",
"1860 Aigle",
"1165 Allaman",
"1304 Allens",
"1143 Apples",
"1091 Aran",
"1277 Arnex-sur-Nyon",
"1321 Arnex-sur-Orbe",
"1884 Arveyes",
"1273 Arzier-Le Muids",
"1042 Assens",
"1170 Aubonne",
"1580 Avenches",
"1338 Ballaigues",
"1144 Ballens",
"1269 Bassins",
"1446 Baulmes",
"1372 Bavois",
"1268 Begnins",
"1585 Bellerive VD",
"1092 Belmont-sur-Lausanne",
"1432 Belmont-sur-Yverdon",
"1038 Bercher",
"1149 Berolle",
"1042 Bettens",
"1880 Bex",
"1407 Bioley-Magnoux",
"1042 Bioley-Orjulaz",
"1145 Bière",
"1807 Blonay",
"1353 Bofflens",
"1279 Bogis-Bossey",
"1427 Bonvillars",
"1277 Borex",
"1041 Bottens",
"1172 Bougy-Villars",
"1063 Boulens",
"1035 Bournens",
"1034 Boussens",
"1121 Bremblens",
"1683 Brenles",
"1817 Brent",
"1053 Bretigny-sur-Morrens",
"1329 Bretonnières",
"1164 Buchillon",
"1453 Bullet",
"1195 Bursinel",
"1183 Bursins",
"1268 Burtigny",
"1030 Bussigny",
"1608 Bussigny-sur-Oron",
"1136 Bussy-Chardonney",
"1514 Bussy-sur-Moudon",
"1084 Carrouge VD",
"1824 Caux",
"1682 Cerniaz VD",
"1589 Chabrey",
"1816 Chailly-Montreux",
"1436 Chamblon",
"1832 Chamby",
"1424 Champagne",
"1537 Champtauroz",
"1443 Champvent",
"1409 Chanéaz",
"1063 Chapelle-sur-Moudon",
"1803 Chardonne",
"1279 Chavannes-de-Bogis",
"1290 Chavannes-des-Bois",
"1464 Chavannes-le-Chêne",
"1148 Chavannes-le-Veyron",
"1022 Chavannes-près-Renens",
"1512 Chavannes-sur-Moudon",
"1373 Chavornay",
"1091 Chenaux",
"1822 Chernex",
"1683 Chesalles-sur-Moudon",
"1608 Chesalles-sur-Oron",
"1400 Cheseaux-Noréaz",
"1033 Cheseaux-sur-Lausanne",
"1885 Chesières",
"1846 Chessel",
"1316 Chevilly",
"1545 Chevroux",
"1071 Chexbres",
"1134 Chigny",
"1660 Château-d'Oex",
"1610 Châtillens",
"1275 Chéserex",
"1464 Chêne-Pâquier",
"1815 Clarens",
"1127 Clarmont",
"1267 Coinsins",
"1114 Colombier VD",
"1535 Combremont-le-Grand",
"1536 Combremont-le-Petit",
"1291 Commugny",
"1426 Concise",
"1587 Constantine",
"1296 Coppet",
"1856 Corbeyrier",
"1082 Corcelles-le-Jorat",
"1426 Corcelles-près-Concise",
"1562 Corcelles-près-Payerne",
"1374 Corcelles-sur-Chavornay",
"1410 Correvon",
"1802 Corseaux",
"1804 Corsier-sur-Vevey",
"1304 Cossonay-Ville",
"1116 Cottens VD",
"1585 Cotterd",
"1299 Crans-près-Céligny",
"1299 Crans-près-Céligny",
"1263 Crassier",
"1526 Cremin",
"1023 Crissier",
"1406 Cronay",
"1322 Croy",
"1148 Cuarnens",
"1404 Cuarny",
"1588 Cudrefin",
"1053 Cugy VD",
"1096 Cully",
"1521 Curtilles",
"1306 Daillens",
"1135 Denens",
"1410 Denezy",
"1026 Denges",
"1304 Dizy",
"1041 Dommartin",
"1682 Dompierre VD",
"1580 Donatyre",
"1407 Donneloye",
"1266 Duillier",
"1195 Dully",
"1415 Démoret",
"1040 Echallens",
"1026 Echandens",
"1112 Echichens",
"1376 Eclagnens",
"1312 Eclépens",
"1612 Ecoteaux",
"1024 Ecublens VD",
"1066 Epalinges",
"1417 Epautheyres",
"1434 Ependes VD",
"1098 Epesses",
"1435 Essert-Pittet",
"1443 Essert-sous-Champvent",
"1078 Essertes",
"1186 Essertines-sur-Rolle",
"1417 Essertines-sur-Yverdon",
"1037 Etagnières",
"1163 Etoy",
"1262 Eysins",
"1595 Faoug",
"1880 Fenalet-sur-Bex",
"1809 Fenil-sur-Corsier",
"1076 Ferlens VD",
"1313 Ferreyres",
"1044 Fey",
"1420 Fiez",
"1659 Flendruz",
"1421 Fontaines-sur-Grandson",
"1423 Fontanezier",
"1072 Forel (Lavaux)",
"1526 Forel-sur-Lucens",
"1297 Founex",
"1880 Frenières-sur-Bex",
"1055 Froideville",
"1173 Féchy",
"1272 Genolier",
"1429 Giez",
"1182 Gilly",
"1188 Gimel",
"1276 Gingins",
"1271 Givrins",
"1196 Gland",
"1823 Glion",
"1124 Gollion",
"1407 Gossens",
"1376 Goumoens-la-Ville",
"1376 Goumoens-le-Jux",
"1117 Grancy",
"1543 Grandcour",
"1421 Grandevent",
"1422 Grandson",
"1091 Grandvaux",
"1523 Granges-près-Marnand",
"1274 Grens",
"1432 Gressy",
"1882 Gryon",
"1525 Henniez",
"1513 Hermenches",
"1884 Huémoz",
"1805 Jongny",
"1008 Jouxtens-Mézery",
"1326 Juriens",
"1344 L'Abbaye",
"1355 L'Abergement",
"1454 L'Auberson",
"1660 L'Etivaz",
"1148 L'Isle",
"1308 La Chaux (Cossonay)",
"1862 La Comballaz",
"1093 La Conversion",
"1148 La Coudre",
"1090 La Croix (Lutry)",
"1265 La Cure",
"1866 La Forclaz VD",
"1660 La Lécherette",
"1148 La Praz",
"1278 La Rippe",
"1356 La Russille",
"1450 La Sagne (Ste-Croix)",
"1315 La Sarraz",
"1658 La Tine",
"1814 La Tour-de-Peilz",
"1454 La Vraconnaz",
"1015 Lausanne",
"1006 Lausanne",
"1005 Lausanne",
"1012 Lausanne",
"1004 Lausanne",
"1011 Lausanne",
"1003 Lausanne",
"1010 Lausanne",
"1007 Lausanne",
"1018 Lausanne",
"1000 Lausanne 25",
"1000 Lausanne 26",
"1000 Lausanne 27",
"1892 Lavey-Village",
"1892 Lavey-les-Bains",
"1175 Lavigny",
"1348 Le Brassus",
"1450 Le Château-de-Ste-Croix",
"1345 Le Lieu",
"1801 Le Mont-Pèlerin",
"1052 Le Mont-sur-Lausanne",
"1342 Le Pont",
"1347 Le Sentier",
"1347 Le Solliat",
"1345 Le Séchey",
"1863 Le Sépey",
"1261 Le Vaud",
"1833 Les Avants",
"1346 Les Bioux",
"1343 Les Charbonnières",
"1356 Les Clées",
"1080 Les Cullayes",
"1865 Les Diablerets",
"1808 Les Monts-de-Corsier",
"1068 Les Monts-de-Pully",
"1862 Les Mosses",
"1660 Les Moulins",
"1880 Les Plans-sur-Bex",
"1880 Les Posses-sur-Bex",
"1452 Les Rasses",
"1607 Les Tavernes",
"1607 Les Thioleyres",
"1854 Leysin",
"1357 Lignerolle",
"1027 Lonay",
"1261 Longirod",
"1682 Lovatens",
"1522 Lucens",
"1184 Luins",
"1132 Lully VD",
"1307 Lussery-Villars",
"1167 Lussy-sur-Morges",
"1095 Lutry",
"1613 Maracon",
"1261 Marchissy",
"1524 Marnand",
"1063 Martherenges",
"1438 Mathod",
"1453 Mauborget",
"1148 Mauraz",
"1031 Mex VD",
"1295 Mies",
"1565 Missy",
"1148 Moiry VD",
"1146 Mollens VD",
"1073 Mollie-Margot",
"1415 Molondin",
"1125 Monnaz",
"1148 Mont-la-Ville",
"1185 Mont-sur-Rolle",
"1442 Montagny-près-Yverdon",
"1041 Montaubion-Chardonney",
"1354 Montcherand",
"1174 Montherod",
"1587 Montmagny",
"1081 Montpreveyres",
"1820 Montreux",
"1147 Montricher",
"1892 Morcles",
"1110 Morges",
"1054 Morrens VD",
"1510 Moudon",
"1787 Mur (Vully) VD",
"1428 Mutrux",
"1407 Mézery-près-Donneloye",
"1083 Mézières VD",
"1041 Naz",
"1515 Neyruz-sur-Moudon",
"1431 Novalles",
"1845 Noville",
"1260 Nyon",
"1045 Ogens",
"1580 Oleyres",
"1867 Ollon VD",
"1425 Onnens VD",
"1047 Oppens",
"1350 Orbe",
"1430 Orges",
"1341 Orient",
"1317 Orny",
"1610 Oron-la-Ville",
"1608 Oron-le-Châtel",
"1413 Orzens",
"1377 Oulens-sous-Echallens",
"1522 Oulens-sur-Lucens",
"1416 Pailly",
"1607 Palézieux",
"1607 Palézieux-Village",
"1142 Pampigny",
"1867 Panex",
"1094 Paudex",
"1530 Payerne",
"1059 Peney-le-Jorat",
"1305 Penthalaz",
"1303 Penthaz",
"1375 Penthéréaz",
"1166 Perroy",
"1063 Peyres-Possens",
"1174 Pizy",
"1041 Poliez-Pittet",
"1041 Poliez-le-Grand",
"1318 Pompaples",
"1405 Pomy",
"1408 Prahins",
"1197 Prangins",
"1324 Premier",
"1008 Prilly",
"1428 Provence",
"1028 Préverenges",
"1682 Prévonloup",
"1070 Puidoux",
"1009 Pully",
"1439 Rances",
"1020 Renens VD",
"1847 Rennaz",
"1128 Reverolle",
"1097 Riex",
"1071 Rivaz",
"1852 Roche VD",
"1180 Rolle",
"1323 Romainmôtier",
"1423 Romairon",
"1032 Romanel-sur-Lausanne",
"1122 Romanel-sur-Morges",
"1088 Ropraz",
"1513 Rossenges",
"1554 Rossens VD",
"1658 Rossinière",
"1659 Rougemont",
"1463 Rovray",
"1046 Rueyres",
"1585 Salavaux",
"1683 Sarzens",
"1534 Sassel",
"1534 Sassel",
"1189 Saubraz",
"1073 Savigny",
"1525 Seigneux",
"1304 Senarclens",
"1355 Sergey",
"1077 Servion",
"1274 Signy",
"1062 Sottens",
"1040 St-Barthélemy VD",
"1264 St-Cergue",
"1410 St-Cierges",
"1188 St-George",
"1176 St-Livres",
"1806 St-Légier-La Chiésaz",
"1187 St-Oyens",
"1162 St-Prex",
"1071 St-Saphorin (Lavaux)",
"1113 St-Saphorin-sur-Morges",
"1025 St-Sulpice VD",
"1867 St-Triphon",
"1450 Ste-Croix",
"1433 Suchy",
"1043 Sugnens",
"1036 Sullens",
"1437 Suscévaz",
"1510 Syens",
"1554 Sédeilles",
"1141 Sévery",
"1295 Tannay",
"1180 Tartegnin",
"1820 Territet",
"1410 Thierrens",
"1131 Tolochenaz",
"1552 Trey",
"1436 Treycovagnes",
"1538 Treytorrens (Payerne)",
"1270 Trélex",
"1412 Ursins",
"1441 Valeyres-sous-Montagny",
"1358 Valeyres-sous-Rances",
"1412 Valeyres-sous-Ursins",
"1586 Vallamand",
"1337 Vallorbe",
"1423 Vaugondry",
"1325 Vaulion",
"1126 Vaux-sur-Morges",
"1551 Vers-chez-Perrin",
"1864 Vers-l'Eglise",
"1800 Vevey",
"1820 Veytaux",
"1267 Vich",
"1832 Villard-sur-Chamby",
"1148 Villars-Bozon",
"1682 Villars-Bramard",
"1423 Villars-Burquin",
"1404 Villars-Epeney",
"1061 Villars-Mendraz",
"1029 Villars-Ste-Croix",
"1058 Villars-Tiercelin",
"1515 Villars-le-Comte",
"1584 Villars-le-Grand",
"1040 Villars-le-Terroir",
"1443 Villars-sous-Champvent",
"1168 Villars-sous-Yens",
"1884 Villars-sur-Ollon",
"1555 Villarzel",
"1844 Villeneuve VD",
"1096 Villette (Lavaux)",
"1184 Vinzel",
"1418 Vuarrens",
"1509 Vucherens",
"1302 Vufflens-la-Ville",
"1134 Vufflens-le-Château",
"1431 Vugelles-La Mothe",
"1610 Vuibroye",
"1445 Vuiteboeuf",
"1085 Vulliens",
"1115 Vullierens",
"1169 Yens",
"1400 Yverdon-les-Bains",
"1462 Yvonand",
"1853 Yvorne"    
];
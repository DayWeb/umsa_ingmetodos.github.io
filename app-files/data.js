var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "ENTRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.00009833885050092306,
        "pitch": 0,
        "fov": 1.2247527492323085
      },
      "linkHotspots": [
        {
          "yaw": 0.12739904796291768,
          "pitch": 0.12509366474373174,
          "rotation": 0,
          "target": "1-entrada-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.29423722198130164,
          "pitch": -0.20610505889439068,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">SALA DE EMERGENCIAS</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">El servicio en una sala de emergencias de un hospital&nbsp; no es una planta manufacturera pero, distinguiendo las características de este servicio, podemos decir que su disposición está orientada al proceso, en la que los puestos de trabajo están agrupados funcionalmente.</font></font>"
        }
      ]
    },
    {
      "id": "1-entrada-1",
      "name": "ENTRADA 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5832515057812611,
          "pitch": 0.09681362265743232,
          "rotation": 0,
          "target": "3-sala-de-espera"
        },
        {
          "yaw": -0.49096142188510683,
          "pitch": 0.06885338477095537,
          "rotation": 0,
          "target": "2-pasillo-1"
        },
        {
          "yaw": -3.098467632799135,
          "pitch": 0.48273037411625097,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pasillo-1",
      "name": "PASILLO 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4339823666182276,
          "pitch": 0.5063867117575604,
          "rotation": 0,
          "target": "8-sala-de-choque"
        },
        {
          "yaw": 1.6851137329013888,
          "pitch": 0.27204781590174676,
          "rotation": 0,
          "target": "7-pasillo-sala-de-internacion-y-choque"
        },
        {
          "yaw": -2.9838888043914444,
          "pitch": 0.3176577313563218,
          "rotation": 0,
          "target": "3-sala-de-espera"
        },
        {
          "yaw": -1.7625914754165954,
          "pitch": 0.6536383683012357,
          "rotation": 0,
          "target": "1-entrada-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sala-de-espera",
      "name": "SALA DE ESPERA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4795193071541313,
          "pitch": 0.39048906461353106,
          "rotation": 0,
          "target": "1-entrada-1"
        },
        {
          "yaw": 0.01190839982661629,
          "pitch": 0.3407659592950889,
          "rotation": 0,
          "target": "10-sala-de-espera-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3066901165135931,
          "pitch": -0.4464982315001915,
          "title": "<br>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "4-sala-de-internacion",
      "name": "SALA DE INTERNACION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1938613725631129,
          "pitch": 0.3815634438114124,
          "rotation": 0,
          "target": "5-sala-de-internacion-2"
        },
        {
          "yaw": -1.6113272918922874,
          "pitch": 0.28733560126124047,
          "rotation": 0,
          "target": "6-sala-de-internacion-3"
        },
        {
          "yaw": -2.948666629898426,
          "pitch": 0.1573764117027885,
          "rotation": 0,
          "target": "7-pasillo-sala-de-internacion-y-choque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sala-de-internacion-2",
      "name": "SALA DE INTERNACION 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9089548320436425,
          "pitch": 0.3545707628574455,
          "rotation": 0,
          "target": "4-sala-de-internacion"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-sala-de-internacion-3",
      "name": "SALA DE INTERNACION 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8949188832542223,
          "pitch": 0.17935201623987673,
          "rotation": 0,
          "target": "4-sala-de-internacion"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-pasillo-sala-de-internacion-y-choque",
      "name": "PASILLO SALA DE INTERNACION Y CHOQUE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.045319761189036356,
          "pitch": 0.33525775099922406,
          "rotation": 0,
          "target": "4-sala-de-internacion"
        },
        {
          "yaw": -3.099255621395674,
          "pitch": 0.3208780766444512,
          "rotation": 0,
          "target": "2-pasillo-1"
        },
        {
          "yaw": -0.8695393846433959,
          "pitch": 0.5449462868759092,
          "rotation": 0,
          "target": "19-vestidores-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-sala-de-choque",
      "name": "SALA DE CHOQUE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1451033984929495,
          "pitch": 0.18575079454792487,
          "rotation": 0,
          "target": "9-sala-de-choque1"
        },
        {
          "yaw": -1.3819584889843064,
          "pitch": 0.3531601726353184,
          "rotation": 0,
          "target": "2-pasillo-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-sala-de-choque1",
      "name": "SALA DE CHOQUE1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.031431444843358,
          "pitch": 0.34632775768429447,
          "rotation": 0,
          "target": "8-sala-de-choque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-sala-de-espera-1",
      "name": "SALA DE ESPERA 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6773249447555187,
          "pitch": 0.04574742639970708,
          "rotation": 0,
          "target": "3-sala-de-espera"
        },
        {
          "yaw": 1.5833095213458162,
          "pitch": 0.14348950712134112,
          "rotation": 0,
          "target": "15-triage"
        },
        {
          "yaw": 3.0074298226051814,
          "pitch": 0.15690145605862682,
          "rotation": 0,
          "target": "12-baos"
        },
        {
          "yaw": 0.6657864349892275,
          "pitch": 0.08052077059148566,
          "rotation": 0,
          "target": "11-administracion"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8328348157564225,
          "pitch": -0.03908557192705153,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">CLASIFICACION DEL TRIAGE</font></font>",
          "text": "<p style=\"margin-top: 0pt; margin-bottom: 0pt; margin-left: 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><span style=\"font-size: 14pt; font-family: Helvetica;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">1 Resucitación (</font></font><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Rojo)</font></font></span></p><p style=\"margin-top: 0pt; margin-bottom: 0pt; margin-left: 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><span style=\"font-size: 14pt; font-family: Helvetica;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">2 Emergencia caso grave </font></font><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">(</font></font><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Naranja)</font></font></span></p><p style=\"margin-top: 0pt; margin-bottom: 0pt; margin-left: 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><span style=\"font-size: 14pt; font-family: Helvetica;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">3 Emergencia moderada </font></font>&nbsp;<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">(</font></font><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Amarillo)</font></font></span></p><p style=\"margin-top: 0pt; margin-bottom: 0pt; margin-left: 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\">\n\n\n\n\n\n</p><p style=\"margin-top: 0pt; margin-bottom: 0pt; margin-left: 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><span style=\"font-size: 14pt; font-family: Helvetica;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">4 Emergencia leve </font></font><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">&nbsp; &nbsp; &nbsp;(</font></font></span><span style=\"font-size: 14pt; font-family: Calibri;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Verde)</font></font></span></p>"
        }
      ]
    },
    {
      "id": "11-administracion",
      "name": "ADMINISTRACION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.195619666746458,
          "pitch": 0.2086992895739428,
          "rotation": 0,
          "target": "10-sala-de-espera-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-baos",
      "name": "BAÑOS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7563367792884748,
          "pitch": 0.10975972251453925,
          "rotation": 0,
          "target": "13-bao-mujeres"
        },
        {
          "yaw": -0.5863164634437261,
          "pitch": 0.2279742836980283,
          "rotation": 0,
          "target": "14-bao-hombres"
        },
        {
          "yaw": -2.045394808995894,
          "pitch": 0.41179890920123796,
          "rotation": 0,
          "target": "10-sala-de-espera-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bao-mujeres",
      "name": "BAÑO MUJERES",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.489326568374379,
          "pitch": 0.21008345779972615,
          "rotation": 0,
          "target": "12-baos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bao-hombres",
      "name": "BAÑO HOMBRES",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.151445336255202,
          "pitch": -0.0031173851484531667,
          "rotation": 0,
          "target": "12-baos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-triage",
      "name": "TRIAGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3261339644282764,
          "pitch": 0.5003130880825584,
          "rotation": 0,
          "target": "10-sala-de-espera-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-pasillo-vestidores",
      "name": "PASILLO VESTIDORES",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "17-pasillo-espera-interno",
      "name": "PASILLO ESPERA INTERNO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "18-pasillo-espera-interno",
      "name": "PASILLO ESPERA INTERNO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "19-vestidores-pasillo",
      "name": "VESTIDORES PASILLO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3424478973406107,
          "pitch": 0.40982017431907636,
          "rotation": 0,
          "target": "7-pasillo-sala-de-internacion-y-choque"
        },
        {
          "yaw": 1.5557001369779515,
          "pitch": 0.42933284236474023,
          "rotation": 0,
          "target": "20-pasillo-kitchenet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-pasillo-kitchenet",
      "name": "PASILLO KITCHENET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2430746939534156,
          "pitch": 0.4006590415515028,
          "rotation": 0,
          "target": "16-pasillo-vestidores"
        },
        {
          "yaw": 0.2116277418606689,
          "pitch": 0.2525443778466965,
          "rotation": 0,
          "target": "21-pasillo-secretaria"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-pasillo-secretaria",
      "name": "PASILLO SECRETARIA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1075441526839338,
          "pitch": 0.11586176816144267,
          "rotation": 0,
          "target": "22-secretaria"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-secretaria",
      "name": "SECRETARIA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1301818885972743,
          "pitch": 0.23022581863303593,
          "rotation": 0,
          "target": "23-secretaria-1"
        },
        {
          "yaw": 1.2215303755772116,
          "pitch": 0.47822993035856776,
          "rotation": 0,
          "target": "2-pasillo-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-secretaria-1",
      "name": "SECRETARIA 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3945358213793586,
          "pitch": 0.06416544984812234,
          "rotation": 0,
          "target": "24-jefatura"
        },
        {
          "yaw": -2.9742807815647847,
          "pitch": 0.25559981277380395,
          "rotation": 0,
          "target": "22-secretaria"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-jefatura",
      "name": "JEFATURA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7062036269096321,
          "pitch": 0.36453259838440033,
          "rotation": 0,
          "target": "23-secretaria-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

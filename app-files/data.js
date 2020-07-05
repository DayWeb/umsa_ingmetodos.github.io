var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala-de-espera",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6109425391967545,
          "pitch": 0.19243536225190105,
          "rotation": 0,
          "target": "1-triage"
        },
        {
          "yaw": 0.7927743006198931,
          "pitch": 0.03453567558627846,
          "rotation": 0,
          "target": "2-entrada-emergencias"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-triage",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9170024458329493,
          "pitch": 0.16293961215920838,
          "rotation": 0,
          "target": "0-sala-de-espera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrada-emergencias",
      "name": "ENTRADA EMERGENCIAS",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.011242549426048853,
          "pitch": 0.2763340139848758,
          "rotation": 0,
          "target": "0-sala-de-espera"
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

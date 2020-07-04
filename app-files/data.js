var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-emergencias",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.18516889384116375,
          "pitch": 0.08459588657190409,
          "rotation": 0,
          "target": "1-sala-de-espera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sala-de-espera",
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
          "yaw": 2.67868118289877,
          "pitch": 0.08219705202282412,
          "rotation": 0,
          "target": "2-triage"
        },
        {
          "yaw": 0.7692271670401567,
          "pitch": 0.05141244272436829,
          "rotation": 0,
          "target": "0-entrada-emergencias"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-triage",
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
          "yaw": 1.914002340487606,
          "pitch": 0.3128510412329,
          "rotation": 6.283185307179586,
          "target": "1-sala-de-espera"
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

(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "vrPolyfillScale": 0.5,
 "children": [
  "this.MainViewer",
  "this.Container_691B6C80_7506_9D4B_41B4_89FD1E7BCC23",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821",
  "this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2",
  "this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C",
  "this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
  "this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08",
  "this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "definitions": [{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "10- Sala de Curativos 360_0104 nadir",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_06C58028_12B4_1DA4_41A4_FD3284FCFC35"
 ],
 "id": "panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1FADC324_1174_07FC_41A5_C14F6E30B437",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1FA0841E_1174_01CD_418F_00855C5C245A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "4- Recep\u00e7\u00e3o2 360_0100 nadir",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_06FDE9A9_12BC_0EA4_416E_DA160D77A8F0"
 ],
 "id": "panorama_1F986E28_1174_01F4_419C_FD410C5D7C58",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "3- Recep\u00e7\u00e3o1 360_0099 nadir",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_06DEB7CC_12BC_02FC_41B0_DAFA74D2AC16"
 ],
 "id": "panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1F986E28_1174_01F4_419C_FD410C5D7C58",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "7- Acesso 360_0108 nadir",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_06EE5285_12BC_1D6C_41B2_141457723ED3"
 ],
 "id": "panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "1- Faixada 360_0097 nadir",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_073A3E1C_12B4_059C_41A1_7FD6EA9514EB"
 ],
 "id": "panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "2- Entrada 360_0098 nadir",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_06DF6308_12BC_0364_41A2_DD5723EF99E2"
 ],
 "id": "panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 1219,
 "initialPosition": {
  "yaw": 1.82,
  "class": "PanoramaCameraPosition",
  "pitch": 8.3
 },
 "displayOriginPosition": {
  "yaw": 1.82,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 2000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "easing": "cubic_in_out",
   "duration": 4000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": 8.3,
   "targetStereographicFactor": 0
  }
 ],
 "id": "panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "11- Sala de Exames 360_0107 nadir",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_06CC71AB_12B4_7EA4_419E_FE6CB1FF9491"
 ],
 "id": "panorama_1FADC324_1174_07FC_41A5_C14F6E30B437",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "audios": [
  "this.audio_0AD9A303_1294_0364_419A_E02B893E7473"
 ],
 "thumbnailUrl": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "6- Recep\u00e7\u00e3o4 360_0102 nadir",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_06FCDA1C_12BC_0D9C_41A9_3A06B9853AFE"
 ],
 "id": "panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_t.jpg"
},
{
 "loop": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_0596B0A3_1294_1EA4_41A6_C5C0A0E325CD",
 "id": "audio_0AD9A303_1294_0364_419A_E02B893E7473",
 "autoplay": true,
 "data": {
  "label": "Audio1"
 }
},
{
 "items": [
  {
   "camera": "this.panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_camera",
   "media": "this.panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_camera",
   "media": "this.panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_camera",
   "media": "this.panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_camera",
   "media": "this.panorama_1F986E28_1174_01F4_419C_FD410C5D7C58",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_camera",
   "media": "this.panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_camera",
   "media": "this.panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_camera",
   "media": "this.panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_camera",
   "media": "this.panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1FA0841E_1174_01CD_418F_00855C5C245A_camera",
   "media": "this.panorama_1FA0841E_1174_01CD_418F_00855C5C245A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_camera",
   "media": "this.panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_camera",
   "media": "this.panorama_1FADC324_1174_07FC_41A5_C14F6E30B437",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "8- Consult\u00f3rio Dr Alexandre 360_0106 nadir",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_06F63A5D_12B4_0D9C_41A5_B12E03537BEE"
 ],
 "id": "panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1FA0841E_1174_01CD_418F_00855C5C245A",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_t.jpg"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "5- Recep\u00e7\u00e3o3 360_0101 nadir",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_06FDE713_12BC_0364_4189_9AAAC21C3E03"
 ],
 "id": "panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_t.jpg"
},
{
 "items": [
  {
   "camera": "this.panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_camera",
   "media": "this.panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_camera",
   "media": "this.panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_camera",
   "media": "this.panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_camera",
   "media": "this.panorama_1F986E28_1174_01F4_419C_FD410C5D7C58",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_camera",
   "media": "this.panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_camera",
   "media": "this.panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_camera",
   "media": "this.panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_camera",
   "media": "this.panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1FA0841E_1174_01CD_418F_00855C5C245A_camera",
   "media": "this.panorama_1FA0841E_1174_01CD_418F_00855C5C245A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_camera",
   "media": "this.panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_camera",
   "media": "this.panorama_1FADC324_1174_07FC_41A5_C14F6E30B437",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_t.jpg"
  }
 ],
 "hfovMin": "150%",
 "label": "9- Consult\u00f3rio Dra M\u00e1rcia 360_0105 nadir",
 "class": "Panorama",
 "hfov": 360,
 "overlays": [
  "this.overlay_06D50E76_12B4_05AC_4184_D3310F4B861A"
 ],
 "id": "panorama_1FA0841E_1174_01CD_418F_00855C5C245A",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_t.jpg"
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "class": "ViewerArea",
 "playbackBarBottom": 5,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_691B6C80_7506_9D4B_41B4_89FD1E7BCC23",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 330,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--- LEFT PANEL 5"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 64,
 "backgroundOpacity": 0,
 "width": 550,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": 34,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "height": 140,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--STICKER"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "height": 641,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_6ECE8198_4F7D_CE0F_41B6_C7C8D7E8FF58",
  "this.Container_6EC9F199_4F7D_CE01_41C8_1A8AEA0A382B"
 ],
 "id": "Container_6EC9D199_4F7D_CE01_41CD_90869FADC821",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, false, 0, null, null, false)",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "---INFO photo"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB"
 ],
 "id": "Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "---PANORAMA LIST"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
  "this.Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F"
 ],
 "id": "Container_6FFBDC7E_4F7E_B603_419C_369C462C516C",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "---LOCATION"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73"
 ],
 "id": "Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "---PHOTOALBUM"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_6FD227C1_4F7F_B27E_41A4_4340D943D7A5"
 ],
 "id": "Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "---FLOORPLAN"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_17522AC5_57D1_805F_41CA_96B265C364E4",
  "this.Container_17516AC5_57D1_805F_41CA_8E754787B1A2"
 ],
 "id": "Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, false, 0, null, null, false)",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "class": "IconButton",
 "height": 58,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "class": "IconButton",
 "height": 58,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "cursor": "hand"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 17.18,
   "yaw": 33.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09D62294_12F3_FD6C_41AF_ACFE7D532445",
   "yaw": 33.93,
   "pitch": -26.69,
   "distance": 100,
   "hfov": 17.18
  }
 ],
 "id": "overlay_06C58028_12B4_1DA4_41A4_FD3284FCFC35",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "class": "IconButton",
 "height": 58,
 "mode": "push",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "class": "IconButton",
 "height": 58,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "class": "IconButton",
 "height": 58,
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "cursor": "hand"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 17,
   "yaw": 10.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09D40292_12F3_FD64_4183_6BE1918DC760",
   "yaw": 10.41,
   "pitch": -14.85,
   "distance": 100,
   "hfov": 17
  }
 ],
 "id": "overlay_06FDE9A9_12BC_0EA4_416E_DA160D77A8F0",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 15.65,
   "yaw": -10.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09D3B292_12F3_FD64_41AE_20AD0206F009",
   "yaw": -10.66,
   "pitch": -11.21,
   "distance": 100,
   "hfov": 15.65
  }
 ],
 "id": "overlay_06DEB7CC_12BC_02FC_41B0_DAFA74D2AC16",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 18.55,
   "yaw": 166.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09D50293_12F3_FD64_41A8_3A9E831BB6F6",
   "yaw": 166.55,
   "pitch": -16.74,
   "distance": 100,
   "hfov": 18.55
  }
 ],
 "id": "overlay_06EE5285_12BC_1D6C_41B2_141457723ED3",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 15.08,
   "yaw": -15.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09D26291_12F3_FD64_41A7_626014EC20DE",
   "yaw": -15.24,
   "pitch": -14.05,
   "distance": 100,
   "hfov": 15.08
  }
 ],
 "id": "overlay_073A3E1C_12B4_059C_41A1_7FD6EA9514EB",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 15.8,
   "yaw": 34.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E1AC4DA_12F4_06E4_41A0_9B37FE6397E6",
   "yaw": 34.75,
   "pitch": -23.17,
   "distance": 100,
   "hfov": 15.8
  }
 ],
 "id": "overlay_06DF6308_12BC_0364_41A2_DD5723EF99E2",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 14.64,
   "yaw": -166.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E1884DD_12F4_069C_4178_689FE64A80D7",
   "yaw": -166.7,
   "pitch": -33.69,
   "distance": 100,
   "hfov": 14.64
  }
 ],
 "id": "overlay_06CC71AB_12B4_7EA4_419E_FE6CB1FF9491",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 17.31,
   "yaw": -44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09D4B293_12F3_FD64_4162_74511382FEE6",
   "yaw": -44,
   "pitch": -10.21,
   "distance": 100,
   "hfov": 17.31
  }
 ],
 "id": "overlay_06FCDA1C_12BC_0D9C_41A9_3A06B9853AFE",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "mp3Url": "media/audio_0AD9A303_1294_0364_419A_E02B893E7473.mp3",
 "class": "AudioResource",
 "oggUrl": "media/audio_0AD9A303_1294_0364_419A_E02B893E7473.ogg",
 "id": "audioresource_0596B0A3_1294_1EA4_41A6_C5C0A0E325CD"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 16.81,
   "yaw": 50.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09D56293_12F3_FD64_4190_F043EE45FFB2",
   "yaw": 50.42,
   "pitch": -17.1,
   "distance": 100,
   "hfov": 16.81
  }
 ],
 "id": "overlay_06F63A5D_12B4_0D9C_41A5_B12E03537BEE",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 15.86,
   "yaw": 8.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09D44292_12F3_FD64_419E_72FD4774EDA5",
   "yaw": 8.9,
   "pitch": -6.26,
   "distance": 100,
   "hfov": 15.86
  }
 ],
 "id": "overlay_06FDE713_12BC_0364_4189_9AAAC21C3E03",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 15.55,
   "yaw": -50.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09D5B294_12F3_FD6C_41A9_4E7C5980CE78",
   "yaw": -50.22,
   "pitch": -22.03,
   "distance": 100,
   "hfov": 15.55
  }
 ],
 "id": "overlay_06D50E76_12B4_05AC_4184_D3310F4B861A",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false
},
{
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 66,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "left": 0,
 "backgroundOpacity": 0,
 "width": 330,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "layout": "absolute",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "backgroundOpacity": 1,
 "width": 366,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 78,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "white block"
 },
 "shadow": true,
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "shadowHorizontalLength": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "backgroundOpacity": 1,
 "width": 366,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0.01
 ],
 "top": 86,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 46,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "blue block"
 },
 "shadow": true,
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 391,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "text": "LOREM IPSUM",
 "minHeight": 1,
 "propagateClick": true,
 "top": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "class": "Label",
 "height": 75,
 "fontSize": 61,
 "horizontalAlign": "left",
 "fontColor": "#000000",
 "fontStyle": "italic",
 "paddingTop": 0,
 "data": {
  "name": "text 1"
 },
 "shadow": false,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 12,
 "backgroundOpacity": 0,
 "width": 385,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "textShadowBlurRadius": 10,
 "paddingLeft": 0,
 "borderSize": 0,
 "text": "DOLOR SIT AMET, CONSECTETUR",
 "textShadowVerticalLength": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": 90,
 "verticalAlign": "top",
 "textShadowHorizontalLength": 0,
 "minWidth": 1,
 "class": "Label",
 "height": 44,
 "fontSize": 29,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "fontStyle": "italic",
 "textShadowOpacity": 1,
 "textShadowColor": "#000000",
 "paddingTop": 0,
 "data": {
  "name": "text 2"
 },
 "shadow": false,
 "fontWeight": "normal"
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "height": 110,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false,
 "layout": "horizontal"
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "width": "91.304%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "height": "85.959%",
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "layout": "vertical"
},
{
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_6ECE7198_4F7D_CE0F_41B4_ED3C974BE2A1",
  "this.Container_6ECE5198_4F7D_CE0F_416D_84774E7F2542"
 ],
 "id": "Container_6ECE8198_4F7D_CE0F_41B6_C7C8D7E8FF58",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C"
 ],
 "id": "Container_6EC9F199_4F7D_CE01_41C8_1A8AEA0A382B",
 "left": "15%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 20,
 "right": "15%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "bottom": "80%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "layout": "vertical"
},
{
 "layout": "absolute",
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
  "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9"
 ],
 "id": "Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "children": [
  "this.WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70"
 ],
 "id": "Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848"
 ],
 "id": "Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F",
 "left": "15%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 20,
 "right": "15%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "bottom": "80%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "layout": "vertical"
},
{
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1"
 ],
 "id": "Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "absolute",
 "shadowHorizontalLength": 0,
 "children": [
  "this.MapViewer",
  "this.Container_6FD207C1_4F7F_B27E_41CC_18278046BDCA"
 ],
 "id": "Container_6FD227C1_4F7F_B27E_41A4_4340D943D7A5",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_17521AC5_57D1_805F_41CD_E04DDA9C90DD",
  "this.Container_1752FAC5_57D1_805F_4193_13B2577B9D8A"
 ],
 "id": "Container_17522AC5_57D1_805F_41CA_96B265C364E4",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingRight": 0,
 "right": "15%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0"
 ],
 "id": "Container_17516AC5_57D1_805F_41CA_8E754787B1A2",
 "left": "15%",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 20,
 "right": "15%",
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "bottom": "80%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "layout": "vertical"
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1FA69C41_1174_01B4_41AF_E8A0A3B90185_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_09D62294_12F3_FD6C_41AF_ACFE7D532445",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1F986E28_1174_01F4_419C_FD410C5D7C58_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_09D40292_12F3_FD64_4183_6BE1918DC760",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1F9D4656_1174_0E5C_41AE_BBF26001C802_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_09D3B292_12F3_FD64_41AE_20AD0206F009",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1F98E4EE_1174_024D_41A4_6F0B09E5D36C_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_09D50293_12F3_FD64_41A8_3A9E831BB6F6",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1EB00EC7_1174_3EBC_41A0_03058D22E980_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_09D26291_12F3_FD64_41A7_626014EC20DE",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1FCFDF13_1174_3FD4_4189_31BD06A686D1_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_0E1AC4DA_12F4_06E4_41A0_9B37FE6397E6",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1FADC324_1174_07FC_41A5_C14F6E30B437_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_0E1884DD_12F4_069C_4178_689FE64A80D7",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1FA78DA2_1174_02F5_41AC_0F6ABBB812F0_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_09D4B293_12F3_FD64_4162_74511382FEE6",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1FA4BC4F_1174_024B_41A9_6077A7252EE0_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_09D56293_12F3_FD64_4190_F043EE45FFB2",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1F9F25F3_1174_025B_419C_D8EE0671B0CC_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_09D44292_12F3_FD64_419E_72FD4774EDA5",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1FA0841E_1174_01CD_418F_00855C5C245A_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_09D5B294_12F3_FD6C_41A9_4E7C5980CE78",
 "rowCount": 6
},
{
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "backgroundOpacity": 0.7,
 "width": 30,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#0089C8"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container blue"
 },
 "shadow": false,
 "layout": "absolute",
 "height": "100%"
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 4,
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "cursor": "hand"
},
{
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "backgroundOpacity": 1,
 "width": 300,
 "paddingBottom": 40,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 40,
 "overflow": "scroll",
 "paddingLeft": 40,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#0089C8"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 40,
 "data": {
  "name": "- Buttons set"
 },
 "shadow": false,
 "layout": "absolute",
 "height": "100%"
},
{
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "left": 280,
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "class": "IconButton",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "mode": "toggle",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "class": "IconButton",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "mode": "push",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "minWidth": 1,
 "class": "IconButton",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "mode": "push",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "cursor": "hand"
},
{
 "children": [
  "this.Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2"
 ],
 "id": "Container_6ECE7198_4F7D_CE0F_41B4_ED3C974BE2A1",
 "backgroundOpacity": 1,
 "width": "85%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "layout": "absolute",
 "height": "100%"
},
{
 "children": [
  "this.Container_6ECE4198_4F7D_CE0F_41A0_688A405FA9A1",
  "this.Container_6ECE3198_4F7D_CE0F_41B9_971123164DFE",
  "this.Container_6ECE0198_4F7D_CE0F_41C2_173DE9AC91EC"
 ],
 "id": "Container_6ECE5198_4F7D_CE0F_416D_84774E7F2542",
 "backgroundOpacity": 1,
 "width": "50%",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 50,
 "overflow": "visible",
 "paddingLeft": 50,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#0069A3",
 "minWidth": 460,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "layout": "vertical",
 "height": "100%"
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "propagateClick": false,
 "minWidth": 50,
 "class": "IconButton",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, false, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C.jpg",
 "cursor": "hand"
},
{
 "children": [
  "this.IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633"
 ],
 "id": "Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 140,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "itemVerticalAlign": "top",
 "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9",
 "left": 0,
 "playList": "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist",
 "paddingBottom": 70,
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "selectedItemLabelFontWeight": "bold",
 "width": "100%",
 "borderRadius": 5,
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColorDirection": "vertical",
 "paddingLeft": 70,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "itemPaddingBottom": 3,
 "itemThumbnailHeight": 125,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "class": "ThumbnailGrid",
 "scrollBarOpacity": 0.5,
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "gap": 26,
 "itemMaxWidth": 1000,
 "itemMode": "normal",
 "height": "92%",
 "itemLabelFontFamily": "Oswald",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemThumbnailWidth": 220,
 "itemMaxHeight": 1000,
 "paddingTop": 10,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "shadow": false,
 "itemHorizontalAlign": "center",
 "itemBorderRadius": 0,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadow": true,
 "backgroundOpacity": 0,
 "itemThumbnailShadow": false,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "paddingRight": 70,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "bottom": -0.2,
 "itemThumbnailOpacity": 1,
 "horizontalAlign": "center",
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadow": true,
 "itemHeight": 160,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "data": {
  "name": "ThumbnailList"
 },
 "itemMinWidth": 50
},
{
 "insetBorder": false,
 "id": "WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70",
 "backgroundOpacity": 1,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "height": "100%",
 "paddingTop": 0,
 "data": {
  "name": "WebFrame"
 },
 "shadow": false
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "propagateClick": false,
 "minWidth": 50,
 "class": "IconButton",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848.jpg",
 "cursor": "hand"
},
{
 "children": [
  "this.ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
  "this.IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
  "this.IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
  "this.IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F"
 ],
 "id": "Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "layout": "absolute",
 "height": "100%"
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 1,
 "class": "ViewerArea",
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "children": [
  "this.IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54"
 ],
 "id": "Container_6FD207C1_4F7F_B27E_41CC_18278046BDCA",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "height": 140,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "children": [
  "this.Image_17520AC5_57D1_805F_41CD_E7281C08A967"
 ],
 "id": "Container_17521AC5_57D1_805F_41CD_E04DDA9C90DD",
 "backgroundOpacity": 1,
 "width": "55%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "layout": "absolute",
 "height": "100%"
},
{
 "children": [
  "this.Container_1752EAC5_57D1_805F_41D2_28E2DB3AFCF5",
  "this.Container_1752DAC5_57D1_805F_41D3_AAEEE721B441",
  "this.Container_17517AC5_57D1_805F_41B5_79DEF98B730F"
 ],
 "id": "Container_1752FAC5_57D1_805F_4193_13B2577B9D8A",
 "backgroundOpacity": 1,
 "width": "45%",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 60,
 "overflow": "visible",
 "paddingLeft": 60,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#0069A3",
 "minWidth": 460,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "layout": "vertical",
 "height": "100%"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "propagateClick": false,
 "minWidth": 50,
 "class": "IconButton",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, false, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0.jpg",
 "cursor": "hand"
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "minWidth": 40,
 "class": "Image",
 "height": "25.048%",
 "horizontalAlign": "left",
 "paddingTop": 0,
 "data": {
  "name": "Image Company"
 },
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_5B1F16A9_4F08_3101_41C0_148FE9D83410",
  "this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
  "this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 6,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "26%",
 "bottom": "26%",
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 1"
 },
 "shadow": false,
 "layout": "vertical"
},
{
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "bottom",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "height": 130,
 "scrollBarVisible": "rollOver",
 "gap": 5,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container footer"
 },
 "shadow": false,
 "layout": "vertical"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "data": {
  "name": "Image"
 },
 "shadow": false,
 "scaleMode": "fit_outside"
},
{
 "id": "Container_6ECE4198_4F7D_CE0F_41A0_688A405FA9A1",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 60,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.HTMLText_6ECE2198_4F7D_CE0F_41C1_6D512C0D0B76",
  "this.Button_6ECE1198_4F7D_CE0F_41D1_D607B97BA20A"
 ],
 "id": "Container_6ECE3198_4F7D_CE0F_41B9_971123164DFE",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#E73B2C",
 "minWidth": 100,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "layout": "vertical",
 "height": "100%"
},
{
 "id": "Container_6ECE0198_4F7D_CE0F_41C2_173DE9AC91EC",
 "backgroundOpacity": 0.3,
 "width": 370,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 40,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "right": 20,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "propagateClick": false,
 "top": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "class": "IconButton",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633.jpg",
 "cursor": "hand"
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 1,
 "class": "ViewerArea",
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
 "left": 10,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "class": "IconButton",
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742.png",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "paddingBottom": 0,
 "right": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "class": "IconButton",
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2.png",
 "cursor": "hand"
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F",
 "backgroundOpacity": 0,
 "width": "10%",
 "paddingBottom": 0,
 "right": 20,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "propagateClick": false,
 "top": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "class": "IconButton",
 "height": "10%",
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F.jpg",
 "cursor": "hand"
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "right": 20,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_rollover.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "propagateClick": false,
 "top": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "class": "IconButton",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54.jpg",
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_17520AC5_57D1_805F_41CD_E7281C08A967",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_17520AC5_57D1_805F_41CD_E7281C08A967.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "bottom",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "data": {
  "name": "Image40635"
 },
 "shadow": false,
 "scaleMode": "fit_outside"
},
{
 "id": "Container_1752EAC5_57D1_805F_41D2_28E2DB3AFCF5",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "layout": "horizontal",
 "height": "5%"
},
{
 "children": [
  "this.HTMLText_1752BAC5_57D1_805F_41C3_4D3FE0C946A5",
  "this.Container_1752AAC5_57D1_805F_41C3_F3A70F1424E8"
 ],
 "id": "Container_1752DAC5_57D1_805F_41D3_AAEEE721B441",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#E73B2C",
 "minWidth": 100,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "layout": "vertical",
 "height": "100%"
},
{
 "id": "Container_17517AC5_57D1_805F_41B5_79DEF98B730F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 40,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "backgroundOpacity": 0.2,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 0.2,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "fontSize": 18,
 "label": "RECEPTION >",
 "mode": "toggle",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false); if(!this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F.get('visible')){ this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false) }; this.overlay_06DEB7CC_12BC_02FC_41B0_DAFA74D2AC16.set('enabled', true)",
 "fontColor": "#FFFFFF",
 "height": 50,
 "paddingTop": 0,
 "data": {
  "name": "Button 1 - Reception"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_5AB80F7A_40D3_00DE_41A8_8792700781B8",
  "this.Container_5AB81F7A_40D3_00DE_4193_93E255B8DA1C",
  "this.Button_5AB86F7A_40D3_00DE_41BD_D1B9EFCA70D1",
  "this.Button_5AB87F7A_40D3_00DE_41AA_215C597649E9",
  "this.Button_5AB84F7B_40D3_00DE_4195_429283488EB1",
  "this.Button_5AB85F7B_40D3_00DE_41A0_52785BEFA815",
  "this.Button_5AB8AF7B_40D3_00DE_41CD_E4BAA6CA3ED1",
  "this.Button_5AB8BF7B_40D3_00DE_41C1_48C8A4A660AA",
  "this.Button_5AB88F7B_40D3_00DE_41BD_3AF4ED80C40D",
  "this.Button_5AB89F7B_40D3_00DE_41CB_5B6BD4AD03BA"
 ],
 "id": "Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 7,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 10,
 "height": 200,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "-Level 1-1"
 },
 "shadow": false,
 "layout": "vertical",
 "scrollBarOpacity": 0
},
{
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5B1F16A9_4F08_3101_41C0_148FE9D83410",
 "backgroundOpacity": 0.2,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 0.2,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "fontSize": 18,
 "label": "ROOMS >",
 "mode": "toggle",
 "gap": 23,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "click": "if(!this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359.get('visible')){ this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "height": 50,
 "paddingTop": 0,
 "data": {
  "name": "Button 2 - Rooms"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_5C1E1373_4F3B_D701_4161_AB709172EB1F",
  "this.Container_5C1E7373_4F3B_D701_41C1_E84E9BE9E240",
  "this.Button_5C1EA374_4F3B_D707_41BE_00FEEB6D514B",
  "this.Button_5C1E8374_4F3B_D707_41C8_C8242B461C37",
  "this.Button_5C1EE375_4F3B_D701_41C9_0ED79D773CB5",
  "this.Button_5C1ED376_4F3B_D703_41C6_ED2C0CFAEEDA",
  "this.Button_5C1F3376_4F3B_D703_41D1_B5D8230D600A",
  "this.Button_5C1F6376_4F3B_D703_41CC_A886AFB8DA74",
  "this.Button_5C1F4377_4F3B_D701_41C6_00BBE5EF20C9",
  "this.Button_5C1FB377_4F3B_D701_41B8_31B63BB846ED"
 ],
 "id": "Container_5C6A33C4_4F3B_D700_41A4_C665386EA359",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 7,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 10,
 "height": 200,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "-Level 2-1"
 },
 "shadow": false,
 "layout": "vertical",
 "scrollBarOpacity": 0
},
{
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "backgroundOpacity": 0.2,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 0.2,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "fontSize": 18,
 "label": "AMENITIES >",
 "mode": "toggle",
 "gap": 23,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "click": "if(!this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359.get('visible')){ this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, false, 0, null, null, false) }; if(!this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3.get('visible')){ this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "height": 50,
 "paddingTop": 0,
 "data": {
  "name": "Button 3 - Amenities"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_5C7DCB10_4F38_571F_41B6_A2C80BEB0DB6",
  "this.Container_5C7DEB11_4F38_5701_41D1_BD9BEF92F61B",
  "this.Button_5C467B11_4F38_5701_41BD_6ADABBF10640",
  "this.Button_5C461B12_4F38_5703_41A5_2B58A57259CB",
  "this.Button_5C463B13_4F38_5701_41D3_7F808639BD58",
  "this.Button_5C47EB13_4F38_5701_41D0_849C58570FD5",
  "this.Button_5C478B14_4F38_5707_41B7_E567FC5BFF03",
  "this.Button_5C47BB14_4F38_5707_41C5_004237DF4BC7",
  "this.Button_5C475B14_4F38_5707_41B5_45CB509F3FEC",
  "this.Button_5C470B15_4F38_5701_41C8_8315EAA43F47"
 ],
 "id": "Container_5C522B60_4F38_573F_41CA_3223B2D946A3",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 7,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 10,
 "height": 200,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "-Level 3-1"
 },
 "shadow": false,
 "layout": "vertical",
 "scrollBarOpacity": 0
},
{
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "backgroundOpacity": 0.2,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 0.2,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "fontSize": 18,
 "label": "SPORTS AREA >",
 "mode": "toggle",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "click": "if(!this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F.get('visible')){ this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "height": 50,
 "paddingTop": 0,
 "data": {
  "name": "Button 4 - Sports area"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_5CB12513_4F38_7300_41C1_CF46A5DB681C",
  "this.Container_5CBEF513_4F38_7300_41CD_FE4054DD71DB",
  "this.Button_5CBE8514_4F38_7300_41C7_4C2B003C16FE",
  "this.Button_5CBEA514_4F38_7300_41C4_E7D746E7D487",
  "this.Button_5CBE4515_4F38_7300_41D1_1CA43C43E7F8",
  "this.Button_5CBE1515_4F38_7300_41B8_0BE61EE2A2AC",
  "this.Button_5CBE2516_4F38_7300_41B3_266EC752AC75",
  "this.Button_5CBFF516_4F38_7300_41C0_01CB82BCD11E",
  "this.Button_5CBF9517_4F38_7300_41BB_8710868B4E0A",
  "this.Button_5CBFA517_4F38_7300_41CC_D4157FF5A756"
 ],
 "id": "Container_5C937563_4F38_7301_41CE_2342D0CB6B4F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 7,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 10,
 "height": 200,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "-Level 4-1"
 },
 "shadow": false,
 "layout": "vertical",
 "scrollBarOpacity": 0
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "backgroundOpacity": 0.2,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 0.2,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "fontSize": 18,
 "label": "SWIMMING POOL >",
 "mode": "toggle",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "click": "if(!this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F.get('visible')){ this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "height": 50,
 "paddingTop": 0,
 "data": {
  "name": "Button 5 - Swimming"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_5CE0FDFC_4F38_7300_41BA_B59158C97EA7",
  "this.Container_5CE09DFC_4F38_7300_41C5_496587AD3AF4",
  "this.Button_5CE04DFD_4F38_7300_41CF_9AA175DB4918",
  "this.Button_5CE02DFD_4F38_7300_41AC_5CCE35E28CCE",
  "this.Button_5CE1FDFE_4F38_7300_41CB_C0EFC8517F56",
  "this.Button_5CE1BDFE_4F38_7300_41AF_930026BA5A6C",
  "this.Button_5CE17DFF_4F38_7300_41C6_8F855B436216",
  "this.Button_5CE13DFF_4F38_7300_4168_8B08D53E7557",
  "this.Button_5CEEFE00_4F38_7100_41C4_47D712DA1F96",
  "this.Button_5CEEAE00_4F38_7100_41CA_772C2B0C9596"
 ],
 "id": "Container_5CCC0E8D_4F38_7101_41A7_17785177980F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 7,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 10,
 "height": 200,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "-Level 5-1"
 },
 "shadow": false,
 "layout": "vertical",
 "scrollBarOpacity": 0
},
{
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "backgroundOpacity": 0.2,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 10,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 0.2,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "fontSize": 18,
 "label": "RESTAURANTS >",
 "mode": "toggle",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "click": "if(!this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062.get('visible')){ this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5AB8DF7C_40D3_00DA_41BF_A941DAF9AA8F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C6A33C4_4F3B_D700_41A4_C665386EA359, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "height": 50,
 "paddingTop": 0,
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_5CDED17E_4F38_5303_41CD_E7D6CF4384E1",
  "this.Container_5CDE817F_4F38_5301_41CB_1573369D710F",
  "this.Button_5CDE217F_4F38_5301_41C6_96F7478E4BCD",
  "this.Button_5CDFE180_4F38_53FF_41BA_C2AE8CF20676",
  "this.Button_5CDFA180_4F38_53FF_41B1_A82E7A427261",
  "this.Button_5CDF7181_4F38_5301_41D0_9F8175F5BACF",
  "this.Button_5CDF2181_4F38_5301_419E_50D4A975C358",
  "this.Button_5CDCF182_4F38_5303_41BA_3B4FB28D5CC6",
  "this.Button_5CDCD187_4F38_5301_41D2_1D9369EA7682",
  "this.Button_5CDC6188_4F38_530F_416D_D8C2C6CAD624"
 ],
 "id": "Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 7,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 10,
 "height": 200,
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "-Level 6-1"
 },
 "shadow": false,
 "layout": "vertical",
 "scrollBarOpacity": 0
},
{
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "backgroundOpacity": 1,
 "width": 40,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#5CA1DE"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 2,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "blue line"
 },
 "shadow": false,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "HTMLText",
 "height": 78,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false
},
{
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "bottom",
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "height": 56,
 "scrollBarVisible": "rollOver",
 "gap": 7,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container Icons 1"
 },
 "shadow": false,
 "layout": "horizontal"
},
{
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "height": 44,
 "scrollBarVisible": "rollOver",
 "gap": 7,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container Icons 2"
 },
 "shadow": false,
 "layout": "horizontal"
},
{
 "id": "HTMLText_6ECE2198_4F7D_CE0F_41C1_6D512C0D0B76",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin. </SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.66vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.82vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_6ECE1198_4F7D_CE0F_41D1_D607B97BA20A",
 "backgroundOpacity": 0.7,
 "width": 180,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderRadius": 50,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 1,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "fontSize": "2.39vh",
 "label": "LOREM IPSUM",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "height": 50,
 "paddingTop": 0,
 "data": {
  "name": "Button"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "id": "HTMLText_1752BAC5_57D1_805F_41C3_4D3FE0C946A5",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "class": "HTMLText",
 "scrollBarOpacity": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "46%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "children": [
  "this.Image_17529AC5_57D1_805F_41BD_C64BF1F259C6",
  "this.HTMLText_17528AC5_57D1_805F_41CC_502F9EE91657"
 ],
 "id": "Container_1752AAC5_57D1_805F_41C3_F3A70F1424E8",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "- content"
 },
 "shadow": false,
 "layout": "horizontal",
 "height": "75%"
},
{
 "id": "Container_5AB80F7A_40D3_00DE_41A8_8792700781B8",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_5AB81F7A_40D3_00DE_4193_93E255B8DA1C",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "height": 8,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "id": "Button_5AB86F7A_40D3_00DE_41BD_D1B9EFCA70D1",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Main Entrance",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5AB87F7A_40D3_00DE_41AA_215C597649E9",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lobby",
 "mode": "push",
 "gap": 23,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5AB84F7B_40D3_00DE_4195_429283488EB1",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "pressedLabel": "Reception",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Reception",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5AB85F7B_40D3_00DE_41A0_52785BEFA815",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Meeting Area 1",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5AB8AF7B_40D3_00DE_41CD_E4BAA6CA3ED1",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Meeting Area 2",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5AB8BF7B_40D3_00DE_41C1_48C8A4A660AA",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Bar",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5AB88F7B_40D3_00DE_41BD_3AF4ED80C40D",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Chill Out",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5AB89F7B_40D3_00DE_41CB_5B6BD4AD03BA",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Terrace",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_5C1E1373_4F3B_D701_4161_AB709172EB1F",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_5C1E7373_4F3B_D701_41C1_E84E9BE9E240",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "height": 8,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "id": "Button_5C1EA374_4F3B_D707_41BE_00FEEB6D514B",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5C1E8374_4F3B_D707_41C8_C8242B461C37",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 23,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5C1EE375_4F3B_D701_41C9_0ED79D773CB5",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "pressedLabel": "Lorem Ipsum",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5C1ED376_4F3B_D703_41C6_ED2C0CFAEEDA",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5C1F3376_4F3B_D703_41D1_B5D8230D600A",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5C1F6376_4F3B_D703_41CC_A886AFB8DA74",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5C1F4377_4F3B_D701_41C6_00BBE5EF20C9",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5C1FB377_4F3B_D701_41B8_31B63BB846ED",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_5C7DCB10_4F38_571F_41B6_A2C80BEB0DB6",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_5C7DEB11_4F38_5701_41D1_BD9BEF92F61B",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "height": 8,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "id": "Button_5C467B11_4F38_5701_41BD_6ADABBF10640",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5C461B12_4F38_5703_41A5_2B58A57259CB",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 23,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5C463B13_4F38_5701_41D3_7F808639BD58",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "pressedLabel": "Lorem Ipsum",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5C47EB13_4F38_5701_41D0_849C58570FD5",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5C478B14_4F38_5707_41B7_E567FC5BFF03",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5C47BB14_4F38_5707_41C5_004237DF4BC7",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5C475B14_4F38_5707_41B5_45CB509F3FEC",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5C470B15_4F38_5701_41C8_8315EAA43F47",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_5CB12513_4F38_7300_41C1_CF46A5DB681C",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_5CBEF513_4F38_7300_41CD_FE4054DD71DB",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "height": 8,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "id": "Button_5CBE8514_4F38_7300_41C7_4C2B003C16FE",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CBEA514_4F38_7300_41C4_E7D746E7D487",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 23,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CBE4515_4F38_7300_41D1_1CA43C43E7F8",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "pressedLabel": "Lorem Ipsum",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CBE1515_4F38_7300_41B8_0BE61EE2A2AC",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CBE2516_4F38_7300_41B3_266EC752AC75",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CBFF516_4F38_7300_41C0_01CB82BCD11E",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CBF9517_4F38_7300_41BB_8710868B4E0A",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CBFA517_4F38_7300_41CC_D4157FF5A756",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_5CE0FDFC_4F38_7300_41BA_B59158C97EA7",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_5CE09DFC_4F38_7300_41C5_496587AD3AF4",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "height": 8,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "id": "Button_5CE04DFD_4F38_7300_41CF_9AA175DB4918",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CE02DFD_4F38_7300_41AC_5CCE35E28CCE",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 23,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CE1FDFE_4F38_7300_41CB_C0EFC8517F56",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "pressedLabel": "Lorem Ipsum",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CE1BDFE_4F38_7300_41AF_930026BA5A6C",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CE17DFF_4F38_7300_41C6_8F855B436216",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CE13DFF_4F38_7300_4168_8B08D53E7557",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CEEFE00_4F38_7100_41C4_47D712DA1F96",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CEEAE00_4F38_7100_41CA_772C2B0C9596",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_5CDED17E_4F38_5303_41CD_E7D6CF4384E1",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_5CDE817F_4F38_5301_41CB_1573369D710F",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "class": "Container",
 "height": 8,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line separator"
 },
 "shadow": false,
 "layout": "absolute"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "id": "Button_5CDE217F_4F38_5301_41C6_96F7478E4BCD",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CDFE180_4F38_53FF_41BA_C2AE8CF20676",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 23,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CDFA180_4F38_53FF_41B1_A82E7A427261",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "pressedLabel": "Lorem Ipsum",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CDF7181_4F38_5301_41D0_9F8175F5BACF",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CDF2181_4F38_5301_419E_50D4A975C358",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CDCF182_4F38_5303_41BA_3B4FB28D5CC6",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CDCD187_4F38_5301_41D2_1D9369EA7682",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "id": "Button_5CDC6188_4F38_530F_416D_D8C2C6CAD624",
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "width": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverBackgroundOpacity": 0.3,
 "paddingLeft": 20,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconBeforeLabel": true,
 "minWidth": 1,
 "class": "Button",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "mode": "push",
 "gap": 5,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "shadow": false,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "class": "IconButton",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, true, 0, null, null, false); this.shareFacebook(window.location.href); this.openLink('https://www.instagram.com/giga360br/', '_blank')",
 "mode": "push",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Info"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "class": "IconButton",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, true, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Thumblist"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "class": "IconButton",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, true, 0, null, null, false); this.openLink('https://www.google.com.br/maps/place/Invase+-+Instituto+de+Cirurgia+Vascular+e+Endovascular/@-20.8297126,-49.3900551,17z/data=!3m1!4b1!4m5!3m4!1s0x94bdb2983187e9d7:0x1c645aab0e72079c!8m2!3d-20.8297305!4d-49.3878423', '_blank')",
 "mode": "push",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Location"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "class": "IconButton",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, true, 0, null, null, false); this.openLink('https://www.instagram.com/giga360br/', '_blank')",
 "mode": "push",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "class": "IconButton",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, true, 0, null, null, false)",
 "mode": "push",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Floorplan"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "class": "IconButton",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, true, 0, null, null, false); this.openLink('https://www.facebook.com/giga360br', '_blank')",
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Realtor"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "class": "IconButton",
 "height": 44,
 "click": "this.openLink('https://www.youtube.com/', '_blank'); this.openLink('https://www.youtube.com/', '_blank')",
 "mode": "push",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Video"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "backgroundOpacity": 0,
 "width": 50,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "class": "IconButton",
 "height": 50,
 "mode": "push",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "IconButton --"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "cursor": "hand"
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_17529AC5_57D1_805F_41BD_C64BF1F259C6",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_17529AC5_57D1_805F_41BD_C64BF1F259C6.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "horizontalAlign": "left",
 "paddingTop": 0,
 "data": {
  "name": "agent photo"
 },
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "id": "HTMLText_17528AC5_57D1_805F_41CC_502F9EE91657",
 "backgroundOpacity": 0,
 "width": "75%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.82vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.82vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.82vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.82vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
}],
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "existsKey": function(key){  return key in window; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getKey": function(key){  return window[key]; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "layout": "absolute",
 "height": "100%",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();

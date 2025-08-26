ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([28.120996, -21.082138, 29.956732, -19.522411]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_SilicateFCC_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SilicateFCC<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SilicateFCC_1.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [28.657785, -20.699340, 29.231808, -19.956613]
        })
    });
var lyr_Ndvi_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ndvi<br />\
    <img src="styles/legend/Ndvi_2_0.png" /> -0.4230<br />\
    <img src="styles/legend/Ndvi_2_1.png" /> -0.1187<br />\
    <img src="styles/legend/Ndvi_2_2.png" /> 0.1856<br />\
    <img src="styles/legend/Ndvi_2_3.png" /> 0.4898<br />\
    <img src="styles/legend/Ndvi_2_4.png" /> 0.7941<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Ndvi_2.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [28.657785, -20.699340, 29.231808, -19.956613]
        })
    });

lyr_GoogleSatellite_0.setVisible(true);lyr_SilicateFCC_1.setVisible(true);lyr_Ndvi_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SilicateFCC_1,lyr_Ndvi_2];

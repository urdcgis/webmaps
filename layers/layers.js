var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NTABAZINDUNATOWNSTANDS_1 = new ol.format.GeoJSON();
var features_NTABAZINDUNATOWNSTANDS_1 = format_NTABAZINDUNATOWNSTANDS_1.readFeatures(json_NTABAZINDUNATOWNSTANDS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NTABAZINDUNATOWNSTANDS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NTABAZINDUNATOWNSTANDS_1.addFeatures(features_NTABAZINDUNATOWNSTANDS_1);
var lyr_NTABAZINDUNATOWNSTANDS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NTABAZINDUNATOWNSTANDS_1, 
                style: style_NTABAZINDUNATOWNSTANDS_1,
                popuplayertitle: 'NTABAZINDUNA TOWN STANDS',
                interactive: true,
                title: '<img src="styles/legend/NTABAZINDUNATOWNSTANDS_1.png" /> NTABAZINDUNA TOWN STANDS'
            });
var format_NTABAZINDUNA_SEWER_PLANT_2 = new ol.format.GeoJSON();
var features_NTABAZINDUNA_SEWER_PLANT_2 = format_NTABAZINDUNA_SEWER_PLANT_2.readFeatures(json_NTABAZINDUNA_SEWER_PLANT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NTABAZINDUNA_SEWER_PLANT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NTABAZINDUNA_SEWER_PLANT_2.addFeatures(features_NTABAZINDUNA_SEWER_PLANT_2);
var lyr_NTABAZINDUNA_SEWER_PLANT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NTABAZINDUNA_SEWER_PLANT_2, 
                style: style_NTABAZINDUNA_SEWER_PLANT_2,
                popuplayertitle: 'NTABAZINDUNA_SEWER_PLANT',
                interactive: true,
                title: '<img src="styles/legend/NTABAZINDUNA_SEWER_PLANT_2.png" /> NTABAZINDUNA_SEWER_PLANT'
            });
var format_NTABAZINDUNA_SEWER_LINE_3 = new ol.format.GeoJSON();
var features_NTABAZINDUNA_SEWER_LINE_3 = format_NTABAZINDUNA_SEWER_LINE_3.readFeatures(json_NTABAZINDUNA_SEWER_LINE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NTABAZINDUNA_SEWER_LINE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NTABAZINDUNA_SEWER_LINE_3.addFeatures(features_NTABAZINDUNA_SEWER_LINE_3);
var lyr_NTABAZINDUNA_SEWER_LINE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NTABAZINDUNA_SEWER_LINE_3, 
                style: style_NTABAZINDUNA_SEWER_LINE_3,
                popuplayertitle: 'NTABAZINDUNA_SEWER_LINE',
                interactive: true,
                title: '<img src="styles/legend/NTABAZINDUNA_SEWER_LINE_3.png" /> NTABAZINDUNA_SEWER_LINE'
            });
var format_NTABAZINDUNA_SEWER_LINEntabazinduna_sewer_line_4 = new ol.format.GeoJSON();
var features_NTABAZINDUNA_SEWER_LINEntabazinduna_sewer_line_4 = format_NTABAZINDUNA_SEWER_LINEntabazinduna_sewer_line_4.readFeatures(json_NTABAZINDUNA_SEWER_LINEntabazinduna_sewer_line_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NTABAZINDUNA_SEWER_LINEntabazinduna_sewer_line_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NTABAZINDUNA_SEWER_LINEntabazinduna_sewer_line_4.addFeatures(features_NTABAZINDUNA_SEWER_LINEntabazinduna_sewer_line_4);
var lyr_NTABAZINDUNA_SEWER_LINEntabazinduna_sewer_line_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NTABAZINDUNA_SEWER_LINEntabazinduna_sewer_line_4, 
                style: style_NTABAZINDUNA_SEWER_LINEntabazinduna_sewer_line_4,
                popuplayertitle: 'NTABAZINDUNA_SEWER_LINE — ntabazinduna_sewer_line',
                interactive: true,
                title: '<img src="styles/legend/NTABAZINDUNA_SEWER_LINEntabazinduna_sewer_line_4.png" /> NTABAZINDUNA_SEWER_LINE — ntabazinduna_sewer_line'
            });
var format_NTABAZINDUNA_MANHOLES_5 = new ol.format.GeoJSON();
var features_NTABAZINDUNA_MANHOLES_5 = format_NTABAZINDUNA_MANHOLES_5.readFeatures(json_NTABAZINDUNA_MANHOLES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NTABAZINDUNA_MANHOLES_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NTABAZINDUNA_MANHOLES_5.addFeatures(features_NTABAZINDUNA_MANHOLES_5);
var lyr_NTABAZINDUNA_MANHOLES_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NTABAZINDUNA_MANHOLES_5, 
                style: style_NTABAZINDUNA_MANHOLES_5,
                popuplayertitle: 'NTABAZINDUNA_MANHOLES',
                interactive: true,
                title: '<img src="styles/legend/NTABAZINDUNA_MANHOLES_5.png" /> NTABAZINDUNA_MANHOLES'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_NTABAZINDUNATOWNSTANDS_1.setVisible(true);lyr_NTABAZINDUNA_SEWER_PLANT_2.setVisible(true);lyr_NTABAZINDUNA_SEWER_LINE_3.setVisible(true);lyr_NTABAZINDUNA_SEWER_LINEntabazinduna_sewer_line_4.setVisible(true);lyr_NTABAZINDUNA_MANHOLES_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_NTABAZINDUNATOWNSTANDS_1,lyr_NTABAZINDUNA_SEWER_PLANT_2,lyr_NTABAZINDUNA_SEWER_LINE_3,lyr_NTABAZINDUNA_SEWER_LINEntabazinduna_sewer_line_4,lyr_NTABAZINDUNA_MANHOLES_5];
lyr_NTABAZINDUNATOWNSTANDS_1.set('fieldAliases', {'id': 'id', 'STAND_NO': 'STAND_NO', 'id_2': 'id_2', 'stand_no_2': 'stand_no_2', });
lyr_NTABAZINDUNA_SEWER_PLANT_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'AREA': 'AREA', 'STAND_NO': 'STAND NO', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_NTABAZINDUNA_SEWER_LINE_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'Shape_Length': 'Shape_Length', });
lyr_NTABAZINDUNA_SEWER_LINEntabazinduna_sewer_line_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'id': 'id', 'Shape_Length': 'Shape_Length', });
lyr_NTABAZINDUNA_MANHOLES_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'created_at': 'created_at', 'uploaded_a': 'uploaded_a', 'Area': 'Area', 'Ward': 'Ward', 'Manhole_NU': 'Manhole_NU', 'Manhole_Di': 'Manhole_Di', 'Invert_l_m': 'Invert_l_m', 'Manhole_Ri': 'Manhole_Ri', 'Type_MATER': 'Type_MATER', 'Shape_manh': 'Shape_manh', 'Lid_dimesi': 'Lid_dimesi', 'Lid_diamet': 'Lid_diamet', 'Lid_Materi': 'Lid_Materi', 'Manhole_Co': 'Manhole_Co', 'Manhole_St': 'Manhole_St', 'F14_picture': '14_picture', 'Type_of_PI': 'Type_of_PI', 'Length_PIP': 'Length_PIP', 'Inlet_P_Di': 'Inlet_P_Di', 'Outlet_P_D': 'Outlet_P_D', 'Number_of_': 'Number_of_', 'Surroundin': 'Surroundin', 'Enumerator': 'Enumerator', 'lat_22_Upd': 'lat_22_Upd', 'long_22_Up': 'long_22_Up', 'accuracy_2': 'accuracy_2', 'UTM_Northi': 'UTM_Northi', 'UTM_Eastin': 'UTM_Eastin', 'UTM_Zone_2': 'UTM_Zone_2', 'Comments': 'Comments', });
lyr_NTABAZINDUNATOWNSTANDS_1.set('fieldImages', {'id': 'TextEdit', 'STAND_NO': 'TextEdit', 'id_2': 'TextEdit', 'stand_no_2': 'TextEdit', });
lyr_NTABAZINDUNA_SEWER_PLANT_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'Range', 'AREA': 'TextEdit', 'STAND_NO': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_NTABAZINDUNA_SEWER_LINE_3.set('fieldImages', {'OBJECTID': '', 'id': '', 'Shape_Length': '', });
lyr_NTABAZINDUNA_SEWER_LINEntabazinduna_sewer_line_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'id': 'Range', 'Shape_Length': 'TextEdit', });
lyr_NTABAZINDUNA_MANHOLES_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'created_at': 'TextEdit', 'uploaded_a': 'TextEdit', 'Area': 'TextEdit', 'Ward': 'Range', 'Manhole_NU': 'Range', 'Manhole_Di': 'Range', 'Invert_l_m': 'Range', 'Manhole_Ri': 'Range', 'Type_MATER': 'TextEdit', 'Shape_manh': 'TextEdit', 'Lid_dimesi': 'Range', 'Lid_diamet': 'Range', 'Lid_Materi': 'TextEdit', 'Manhole_Co': 'TextEdit', 'Manhole_St': 'TextEdit', 'F14_picture': 'TextEdit', 'Type_of_PI': 'TextEdit', 'Length_PIP': 'Range', 'Inlet_P_Di': 'Range', 'Outlet_P_D': 'Range', 'Number_of_': 'Range', 'Surroundin': 'TextEdit', 'Enumerator': 'TextEdit', 'lat_22_Upd': 'TextEdit', 'long_22_Up': 'TextEdit', 'accuracy_2': 'Range', 'UTM_Northi': 'Range', 'UTM_Eastin': 'Range', 'UTM_Zone_2': 'TextEdit', 'Comments': 'TextEdit', });
lyr_NTABAZINDUNATOWNSTANDS_1.set('fieldLabels', {'id': 'no label', 'STAND_NO': 'inline label - always visible', 'id_2': 'no label', 'stand_no_2': 'no label', });
lyr_NTABAZINDUNA_SEWER_PLANT_2.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'AREA': 'no label', 'STAND_NO': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_NTABAZINDUNA_SEWER_LINE_3.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'Shape_Length': 'no label', });
lyr_NTABAZINDUNA_SEWER_LINEntabazinduna_sewer_line_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'id': 'no label', 'Shape_Length': 'no label', });
lyr_NTABAZINDUNA_MANHOLES_5.set('fieldLabels', {'OBJECTID': 'no label', 'created_at': 'no label', 'uploaded_a': 'no label', 'Area': 'no label', 'Ward': 'no label', 'Manhole_NU': 'no label', 'Manhole_Di': 'no label', 'Invert_l_m': 'no label', 'Manhole_Ri': 'no label', 'Type_MATER': 'no label', 'Shape_manh': 'no label', 'Lid_dimesi': 'no label', 'Lid_diamet': 'no label', 'Lid_Materi': 'no label', 'Manhole_Co': 'no label', 'Manhole_St': 'no label', 'F14_picture': 'no label', 'Type_of_PI': 'no label', 'Length_PIP': 'no label', 'Inlet_P_Di': 'no label', 'Outlet_P_D': 'no label', 'Number_of_': 'no label', 'Surroundin': 'no label', 'Enumerator': 'no label', 'lat_22_Upd': 'no label', 'long_22_Up': 'no label', 'accuracy_2': 'no label', 'UTM_Northi': 'no label', 'UTM_Eastin': 'no label', 'UTM_Zone_2': 'no label', 'Comments': 'no label', });
lyr_NTABAZINDUNA_MANHOLES_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
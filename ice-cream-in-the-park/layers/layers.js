var wms_layers = [];


        var lyr_CartoPositronNoLabels_0 = new ol.layer.Tile({
            'title': 'Carto Positron No Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png?key=cb1_2rhk_1_1b74ad340daeddcbdd270f26'
            })
        });
var format_PrimSecRoads_1 = new ol.format.GeoJSON();
var features_PrimSecRoads_1 = format_PrimSecRoads_1.readFeatures(json_PrimSecRoads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimSecRoads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimSecRoads_1.addFeatures(features_PrimSecRoads_1);
var lyr_PrimSecRoads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrimSecRoads_1, 
                style: style_PrimSecRoads_1,
                popuplayertitle: 'PrimSecRoads',
                interactive: false,
                title: '<img src="styles/legend/PrimSecRoads_1.png" /> PrimSecRoads'
            });
var format_Grey_Outside_StCharlesCounty_2 = new ol.format.GeoJSON();
var features_Grey_Outside_StCharlesCounty_2 = format_Grey_Outside_StCharlesCounty_2.readFeatures(json_Grey_Outside_StCharlesCounty_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grey_Outside_StCharlesCounty_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grey_Outside_StCharlesCounty_2.addFeatures(features_Grey_Outside_StCharlesCounty_2);
var lyr_Grey_Outside_StCharlesCounty_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grey_Outside_StCharlesCounty_2, 
                style: style_Grey_Outside_StCharlesCounty_2,
                popuplayertitle: 'Grey_Outside_StCharlesCounty',
                interactive: false,
                title: '<img src="styles/legend/Grey_Outside_StCharlesCounty_2.png" /> Grey_Outside_StCharlesCounty'
            });
var format_MajorRoads_StCharlesCounty_3 = new ol.format.GeoJSON();
var features_MajorRoads_StCharlesCounty_3 = format_MajorRoads_StCharlesCounty_3.readFeatures(json_MajorRoads_StCharlesCounty_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorRoads_StCharlesCounty_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorRoads_StCharlesCounty_3.addFeatures(features_MajorRoads_StCharlesCounty_3);
var lyr_MajorRoads_StCharlesCounty_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorRoads_StCharlesCounty_3, 
                style: style_MajorRoads_StCharlesCounty_3,
                popuplayertitle: 'MajorRoads_StCharlesCounty',
                interactive: false,
                title: '<img src="styles/legend/MajorRoads_StCharlesCounty_3.png" /> MajorRoads_StCharlesCounty'
            });
var format_road_label_pts_4 = new ol.format.GeoJSON();
var features_road_label_pts_4 = format_road_label_pts_4.readFeatures(json_road_label_pts_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_label_pts_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_label_pts_4.addFeatures(features_road_label_pts_4);
var lyr_road_label_pts_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_label_pts_4, 
                style: style_road_label_pts_4,
                popuplayertitle: 'road_label_pts',
                interactive: false,
    title: 'road_label_pts<br />\
    <img src="styles/legend/road_label_pts_4_0.png" /> Interstate<br />\
    <img src="styles/legend/road_label_pts_4_1.png" /> State Rte<br />\
    <img src="styles/legend/road_label_pts_4_2.png" /> US Hwy<br />' });
var format_IceCreamEventspark_events_5 = new ol.format.GeoJSON();
var features_IceCreamEventspark_events_5 = format_IceCreamEventspark_events_5.readFeatures(json_IceCreamEventspark_events_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IceCreamEventspark_events_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IceCreamEventspark_events_5.addFeatures(features_IceCreamEventspark_events_5);
var lyr_IceCreamEventspark_events_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IceCreamEventspark_events_5, 
                style: style_IceCreamEventspark_events_5,
                popuplayertitle: 'IceCreamEvents - park_events',
                interactive: true,
                title: '<img src="styles/legend/IceCreamEventspark_events_5.png" /> IceCreamEvents - park_events'
            });

lyr_CartoPositronNoLabels_0.setVisible(true);lyr_PrimSecRoads_1.setVisible(true);lyr_Grey_Outside_StCharlesCounty_2.setVisible(true);lyr_MajorRoads_StCharlesCounty_3.setVisible(true);lyr_road_label_pts_4.setVisible(true);lyr_IceCreamEventspark_events_5.setVisible(true);
var layersList = [lyr_CartoPositronNoLabels_0,lyr_PrimSecRoads_1,lyr_Grey_Outside_StCharlesCounty_2,lyr_MajorRoads_StCharlesCounty_3,lyr_road_label_pts_4,lyr_IceCreamEventspark_events_5];
lyr_PrimSecRoads_1.set('fieldAliases', {'FID': 'FID', 'LINEARID': 'LINEARID', 'FULLNAME': 'FULLNAME', 'RTTYP': 'RTTYP', 'MTFCC': 'MTFCC', 'Shape__Len': 'Shape__Len', });
lyr_Grey_Outside_StCharlesCounty_2.set('fieldAliases', {'id': 'id', });
lyr_MajorRoads_StCharlesCounty_3.set('fieldAliases', {'fid': 'fid', 'LINEARID': 'LINEARID', 'FULLNAME': 'FULLNAME', 'RTTYP': 'RTTYP', 'MTFCC': 'MTFCC', 'Shape__Len': 'Shape__Len', });
lyr_road_label_pts_4.set('fieldAliases', {'fid': 'fid', 'label': 'label', 'Category': 'Category', });
lyr_IceCreamEventspark_events_5.set('fieldAliases', {'fid': 'fid', 'PARK_NAME': 'PARK_NAME', 'JURISDICTI': 'JURISDICTI', 'OWNER': 'OWNER', 'STATUS': 'STATUS', 'Acrage': 'Acrage', 'OBJECTID': 'OBJECTID', 'park_info_': 'park_info_', 'Address': 'Address', 'X': 'X', 'Y': 'Y', 'Shape.STAr': 'Shape.STAr', 'Shape.STLe': 'Shape.STLe', 'Date': 'Date', 'Order': 'Order', 'Time': 'Time', 'popup_html': 'popup_html', 'Candidates': 'Candidates', });
lyr_PrimSecRoads_1.set('fieldImages', {'FID': '', 'LINEARID': '', 'FULLNAME': '', 'RTTYP': '', 'MTFCC': '', 'Shape__Len': '', });
lyr_Grey_Outside_StCharlesCounty_2.set('fieldImages', {'id': 'TextEdit', });
lyr_MajorRoads_StCharlesCounty_3.set('fieldImages', {'fid': '', 'LINEARID': '', 'FULLNAME': '', 'RTTYP': '', 'MTFCC': '', 'Shape__Len': '', });
lyr_road_label_pts_4.set('fieldImages', {'fid': '', 'label': '', 'Category': '', });
lyr_IceCreamEventspark_events_5.set('fieldImages', {'fid': '', 'PARK_NAME': '', 'JURISDICTI': '', 'OWNER': '', 'STATUS': '', 'Acrage': '', 'OBJECTID': '', 'park_info_': '', 'Address': '', 'X': '', 'Y': '', 'Shape.STAr': '', 'Shape.STLe': '', 'Date': '', 'Order': '', 'Time': '', 'popup_html': '', 'Candidates': '', });
lyr_PrimSecRoads_1.set('fieldLabels', {'FID': 'no label', 'LINEARID': 'no label', 'FULLNAME': 'no label', 'RTTYP': 'no label', 'MTFCC': 'no label', 'Shape__Len': 'no label', });
lyr_Grey_Outside_StCharlesCounty_2.set('fieldLabels', {'id': 'no label', });
lyr_MajorRoads_StCharlesCounty_3.set('fieldLabels', {'fid': 'no label', 'LINEARID': 'no label', 'FULLNAME': 'no label', 'RTTYP': 'no label', 'MTFCC': 'no label', 'Shape__Len': 'no label', });
lyr_road_label_pts_4.set('fieldLabels', {'fid': 'no label', 'label': 'no label', 'Category': 'no label', });
lyr_IceCreamEventspark_events_5.set('fieldLabels', {'fid': 'hidden field', 'PARK_NAME': 'hidden field', 'JURISDICTI': 'hidden field', 'OWNER': 'hidden field', 'STATUS': 'hidden field', 'Acrage': 'hidden field', 'OBJECTID': 'hidden field', 'park_info_': 'hidden field', 'Address': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Shape.STAr': 'hidden field', 'Shape.STLe': 'hidden field', 'Date': 'hidden field', 'Order': 'hidden field', 'Time': 'hidden field', 'popup_html': 'no label', 'Candidates': 'hidden field', });
lyr_IceCreamEventspark_events_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
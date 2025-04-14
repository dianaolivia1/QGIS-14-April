var wms_layers = [];

var format_sumaterabarat_0 = new ol.format.GeoJSON();
var features_sumaterabarat_0 = format_sumaterabarat_0.readFeatures(json_sumaterabarat_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sumaterabarat_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sumaterabarat_0.addFeatures(features_sumaterabarat_0);
var lyr_sumaterabarat_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sumaterabarat_0, 
                style: style_sumaterabarat_0,
                popuplayertitle: 'sumatera barat',
                interactive: true,
                title: '<img src="styles/legend/sumaterabarat_0.png" /> sumatera barat'
            });

        var lyr_googlemaps_1 = new ol.layer.Tile({
            'title': 'googlemaps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Padangadm_2 = new ol.format.GeoJSON();
var features_Padangadm_2 = format_Padangadm_2.readFeatures(json_Padangadm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Padangadm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Padangadm_2.addFeatures(features_Padangadm_2);
var lyr_Padangadm_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Padangadm_2, 
                style: style_Padangadm_2,
                popuplayertitle: 'Padang adm',
                interactive: true,
                title: '<img src="styles/legend/Padangadm_2.png" /> Padang adm'
            });
var format_databanjirkelompok_3 = new ol.format.GeoJSON();
var features_databanjirkelompok_3 = format_databanjirkelompok_3.readFeatures(json_databanjirkelompok_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_databanjirkelompok_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_databanjirkelompok_3.addFeatures(features_databanjirkelompok_3);
var lyr_databanjirkelompok_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_databanjirkelompok_3, 
                style: style_databanjirkelompok_3,
                popuplayertitle: 'data banjir kelompok',
                interactive: true,
                title: '<img src="styles/legend/databanjirkelompok_3.png" /> data banjir kelompok'
            });

lyr_sumaterabarat_0.setVisible(true);lyr_googlemaps_1.setVisible(true);lyr_Padangadm_2.setVisible(true);lyr_databanjirkelompok_3.setVisible(true);
var layersList = [lyr_sumaterabarat_0,lyr_googlemaps_1,lyr_Padangadm_2,lyr_databanjirkelompok_3];
lyr_sumaterabarat_0.set('fieldAliases', {'No': 'No', 'Kode_Prov': 'Kode_Prov', 'Provinsi': 'Provinsi', });
lyr_Padangadm_2.set('fieldAliases', {'Id': 'Id', 'kecamatan': 'kecamatan', 'Pddk': 'Pddk', });
lyr_databanjirkelompok_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', 'layer': 'layer', 'path': 'path', });
lyr_sumaterabarat_0.set('fieldImages', {'No': '', 'Kode_Prov': '', 'Provinsi': '', });
lyr_Padangadm_2.set('fieldImages', {'Id': 'Range', 'kecamatan': 'TextEdit', 'Pddk': 'TextEdit', });
lyr_databanjirkelompok_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_sumaterabarat_0.set('fieldLabels', {'No': 'no label', 'Kode_Prov': 'no label', 'Provinsi': 'no label', });
lyr_Padangadm_2.set('fieldLabels', {'Id': 'no label', 'kecamatan': 'no label', 'Pddk': 'no label', });
lyr_databanjirkelompok_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_databanjirkelompok_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
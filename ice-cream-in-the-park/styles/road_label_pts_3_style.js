var size = 0;
var placement = 'point';
function categories_road_label_pts_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {case 'Interstate':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [601, 601],
                  scale: 0.03161397670549085,
                  anchor: [300.5, 300.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/I-blank.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    break;
case 'State Rte':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 9.6 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    break;
case 'US Hwy':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [600, 600],
                  scale: 0.028333333333333332,
                  anchor: [300.0, 300.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/US_blank.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    break;}};

var style_road_label_pts_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Category");
    var labelFont = "9.1px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = 'center';
    var offsetX = 0;
    var offsetY = 0;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (exp_label_road_label_pts_3_eval_expression(context) !== null) {
        labelText = String(exp_label_road_label_pts_3_eval_expression(context));
    }
    
    var style = categories_road_label_pts_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};

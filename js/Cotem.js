(function(){
return CotemConf = [{
    name: "白羊座",
    vertices: [[-29.15, -11.884999999999998, -6.420000000000009], [3.3000000000000043, 10.195000000000002, 24.149999999999995], [16.130000000000003, 11.885, 29.999999999999993], [29.15, 9.055000000000001, -30]],
    links: ["0,1,2,3"],
    cotem: "Aries",
    image:"../skyStar/image/cotem/Aries.png",
    position: new THREE.Vector3(800,0,0),
    watchPosition: new THREE.Vector3(2e3,0,0),
    cameraPosition: new THREE.Vector3(1e3,0,0),
    index: 0,
    materials: [4, 1, 4, 3],
    sizes: [2, 2, 1, 1]
}, {
    name: "金牛座",
    vertices: [[29.535, 16.245, 1.8050000000000033], [26.685, -5.145, 17.045], [-1.3350000000000002, 6.725000000000001, 23.695], [14.695, -.07499999999999929, -23.695], [-2.345, 7.0550000000000015, 10.115000000000002], [.835, 2.465, 8.735000000000003], [-3.185, 3.9250000000000007, 10.675], [-5.695, 5.655000000000001, 13.025000000000002], [-14.555, 9.885000000000002, -4.294999999999995], [-14.345, -16.244999999999997, -14.824999999999996], [-29.535, 3.0150000000000006, -1.384999999999998]],
    links: ["0,2,4,7", "1,3,5,6,7", "7,8,10"],
    cotem: "Taurus",
    image:"../skyStar/image/cotem/Taurus.png",
    rotateZ: -85,
    position: new THREE.Vector3(400,566,-400),
    watchPosition: new THREE.Vector3(1e3,1414,-1e3),
    cameraPosition: new THREE.Vector3(500,707,-500),
    index: 1,
    materials: [3, 1, 4, 3, 3, 4, 2, 3, 4, 2, 3],
    sizes: [2.5, 1, 2.5, 2, 1, 2, 1, 1, 1, 1, 1]
}, {
    name: "双子座",
    vertices: [[10.614999999999998, 26.29, 29.8], [2.044999999999998, 25.77, 6.530000000000001], [-10.495000000000001, 26.89, -2.25], [-18.955000000000002, 18.9, -5.100000000000001], [-9.605, 24.45, 28.37], [-13.965000000000002, 3.5199999999999996, 16.94], [-6.455000000000002, -7.420000000000002, 27.55], [-21.955000000000002, -24.730000000000004, -29.799999999999997], [-2.5950000000000024, -25.21, 19.59], [10.524999999999999, -24.120000000000005, .4100000000000037], [15.474999999999998, -8.190000000000001, 4.079999999999998], [10.204999999999998, 14.319999999999999, 15.310000000000002], [21.955000000000002, -21.340000000000003, -6.329999999999998], [-13.965000000000002, -26.89, 24.9], [4.105, -13.25, -25.310000000000002]],
    links: ["0,1,2,3,4", "3,5,6,7,8,9,10,11,1", "10,12", "7,13"],
    cotem: "Gemini",
    image:"../skyStar/image/cotem/Gemini.png",
    rotateZ: -25,
    position: new THREE.Vector3(400,-566,-400),
    watchPosition: new THREE.Vector3(1e3,-1414,-1e3),
    cameraPosition: new THREE.Vector3(500,-707,-500),
    index: 2,
    materials: [2, 4, 4, 3, 4, 4, 1, 1, 2, 4, 2, 3, 2, 4, 4],
    sizes: [1, 1, 2, 1, 2.5, 2, 1, 1, 1, 2, 2.5, 1, 1, 1, 1]
}, {
    name: "巨蟹座",
    vertices: [[25.405, 25.405, -15.049999999999997], [-.3550000000000004, 5.404999999999999, 20.990000000000002], [-5.945, .7249999999999991, 30], [-25.405, 1.084999999999999, 13.420000000000002], [-14.055000000000001, -25.405, -30]],
    links: ["0,1,2,3", "2,4"],
    cotem: "Cancer",
    image:"../skyStar/image/cotem/Cancer.png",
    position: new THREE.Vector3(0,0,-800),
    watchPosition: new THREE.Vector3(0,0,-2e3),
    cameraPosition: new THREE.Vector3(0,0,-1e3),
    index: 3,
    materials: [2, 4, 4, 2, 4],
    sizes: [1, 1, 1, 1, 2]
}, {
    name: "狮子座",
    vertices: [[25.265, 9.4, 2.370000000000001], [23.095, 13.35, 5.790000000000003], [13.365000000000002, 9.7, .9200000000000017], [11.034999999999997, 3.5100000000000002, 2.770000000000003], [-9.845, 8.83, 21.450000000000003], [-11.085, -.040000000000000036, 4.350000000000001], [-25.265, 1.33, 30.000000000000004], [14.524999999999999, -9.7, 7.110000000000003], [20.604999999999997, -2.28, -30]],
    links: ["0,1,2,3,4,5,6,7,8", "8,3"],
    cotem: "Lion",
    image:"../skyStar/image/cotem/Lion.png",
    rotateZ: 22,
    position: new THREE.Vector3(-400,566,-400),
    watchPosition: new THREE.Vector3(-1e3,1414,-1e3),
    cameraPosition: new THREE.Vector3(-500,707,-500),
    index: 4,
    materials: [2, 3, 2, 4, 4, 2, 4, 2, 1],
    sizes: [1, 1, 1, 1, 1, 1, 1, 1, 1]
}, {
    name: "处女座",
    vertices: [[12.57, -29.08, 27.495], [5.460000000000001, -26.31, -4.534999999999997], [3.8800000000000026, -15.35, 24.125], [9.05, -9.11, -5.475000000000001], [20.62, -2.9299999999999997, 13.515], [-17.51, -3.3899999999999997, -27.494999999999997], [-1.9100000000000001, 3.3900000000000006, 7.345000000000002], [-1.2899999999999991, 19.35, -24.695], [-3.129999999999999, 29.08, -9.434999999999995], [-20.62, 13.580000000000002, -21.195], [-13.309999999999999, 12.38, 7.575000000000003], [-14.029999999999998, 19.12, 9.675]],
    links: ["0,1,2,3,4", "2,5,6,3", "6,7,8", "5,9,10,11"],
    cotem: "Virgo",
    image:"../skyStar/image/cotem/Virgo.png",
    rotateZ: -170,
    position: new THREE.Vector3(-400,-566,-400),
    watchPosition: new THREE.Vector3(-1e3,-1414,-1e3),
    cameraPosition: new THREE.Vector3(-500,-707,-500),
    index: 5,
    materials: [4, 2, 3, 2, 2, 4, 3, 3, 2, 3, 2, 4],
    sizes: [2.5, 2, 1, 2, 2, 1, 1, 1, 2.5, 1, 2.5, 2]
}, {
    name: "天秤座",
    vertices: [[-20.625, -.9699999999999989, 30], [-21.185, 3.610000000000001, -23.480000000000004], [-15.905000000000001, 6.3900000000000015, -15.420000000000002], [-11.735, 21.11, 1.3899999999999988], [9.655000000000001, 17.220000000000002, 12.079999999999998], [20.625, -9.999999999999998, -30], [10.485, -18.47, -21.25], [11.454999999999998, -21.11, -12.780000000000001]],
    links: ["0,1,2,3,4,5,6,7", "3,5"],
    cotem: "Libra",
    image:"../skyStar/image/cotem/Libra.png",
    position: new THREE.Vector3(-800,0,0),
    watchPosition: new THREE.Vector3(-2e3,0,0),
    cameraPosition: new THREE.Vector3(-1e3,0,0),
    index: 6,
    materials: [2, 3, 3, 3, 4, 1, 3, 4],
    sizes: [1, 2, 2, 2, 1, 2, 1, 2]
}, {
    name: "天蝎座",
    vertices: [[23.64, 26.505, -1.904999999999994], [28.090000000000003, 14.844999999999995, 16.955000000000005], [29.79, 10.384999999999998, 18.015000000000004], [30, 2.754999999999999, 15.055000000000003], [16.010000000000005, 7.204999999999998, -1.2749999999999986], [11.980000000000004, 2.754999999999999, -5.5149999999999935], [15.370000000000005, -2.335000000000001, 9.535000000000004], [6.25, -8.695000000000002, 27.775000000000006], [.9500000000000028, -18.025000000000002, 27.565000000000005], [4.130000000000003, -23.325000000000003, 18.015000000000004], [-5.189999999999998, -26.505000000000003, 25.655000000000005], [-17.7, -25.655, 10.595000000000002], [-30, -21.625, -27.775], [-17.279999999999998, -16.115000000000002, 9.535000000000004], [-16.22, -12.295000000000002, 1.485000000000003]],
    links: ["0,1,2,3", "1,4,5,6,7,8,9,10,11,12,13,14"],
    cotem: "Scorpio",
    image:"../skyStar/image/cotem/Scorpio.png",
    position: new THREE.Vector3(-400,566,400),
    watchPosition: new THREE.Vector3(-1e3,1414,1e3),
    cameraPosition: new THREE.Vector3(-500,707,500),
    index: 7,
    materials: [4, 4, 4, 3, 4, 4, 4, 4, 4, 1, 1, 4, 4, 1, 2],
    sizes: [2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1]
}, {
    name: "射手座",
    vertices: [[-14.675, 3.8599999999999994, 13.339999999999996], [-8.905, 1.8999999999999986, 26.979999999999997], [-12.505, -8.440000000000001, .17999999999999972], [-19.825, -10.030000000000001, -.5500000000000043], [-20.495, -12.21, 23.599999999999998], [-6.295000000000002, -13.900000000000002, -2.3599999999999994], [.7049999999999983, -7.390000000000001, 20.22], [4.105, -7.490000000000002, 17.799999999999997], [9.534999999999997, -5.790000000000001, 2.9499999999999957], [13.055, -6.340000000000002, 28.189999999999998], [15.284999999999997, -3.490000000000002, 29.999999999999996], [20.494999999999997, -.9800000000000022, 15.869999999999997], [9.465000000000003, 7.07, 22.989999999999995], [10.165, 16.129999999999995, 7.539999999999996], [3.4750000000000014, 9.84, 18.889999999999997], [3.655000000000001, 23.14, -30], [3.8049999999999997, -3.070000000000002, 24.439999999999998], [17.325000000000003, -21.810000000000002, -15.760000000000005], [17.455, -19.040000000000003, .5399999999999991], [17.455, -19.040000000000003, .5399999999999991], [13.305, -23.14, -6.700000000000003], [-7.234999999999999, -22.03, -2.6000000000000014], [-14.755, -5.170000000000002, 24.559999999999995]],
    links: ["0,1,2,3,4", "2,5,6,7,8,9,10,11,12,13,14", "13,15", "6,16,8", "7,17,18,19", "17,20", "5,21"],
    cotem: "Sagittarius",
    image:"../skyStar/image/cotem/Sagittarius.png",
    rotateZ: 15,
    position: new THREE.Vector3(-400,-566,400),
    watchPosition: new THREE.Vector3(-1e3,-1414,1e3),
    cameraPosition: new THREE.Vector3(-500,-707,500),
    index: 8,
    materials: [2, 2, 3, 4, 4, 4, 2, 3, 4, 4, 4, 4, 1, 2, 2, 3, 4, 3, 2, 2, 2, 3, 3],
    sizes: [1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2.5, 1, 1, 1, 1, 2.5, 1, 1, 1, 2.5, 1, 1, 1]
}, {
    name: "摩羯座",
    vertices: [[-28.770000000000003, -24.305, 9.395], [-34.510000000000005, -20.695, -7.094999999999999], [-24.700000000000003, -8.384999999999998, 14.184999999999999], [-20.740000000000002, 12.755000000000003, 19.555], [-28.21, 24.305, -26.835], [7.039999999999999, -14.214999999999998, -14.755000000000003], [26.66, 4.045000000000002, -13.605000000000004], [26.6, -2.714999999999999, 26.834999999999997], [28.77, -3.9449999999999985, -3.4450000000000003], [2.0500000000000007, -7.614999999999998, -7.285000000000004]],
    links: ["0,1,2,3,4,5,6,7,8,9", "9,0"],
    cotem: "Capricornus",
    image:"../skyStar/image/cotem/Capricornus.png",
    rotateZ: 173,
    position: new THREE.Vector3(0,0,800),
    watchPosition: new THREE.Vector3(0,0,2e3),
    cameraPosition: new THREE.Vector3(0,0,1e3),
    index: 9,
    materials: [1, 4, 4, 2, 2, 4, 4, 3, 4, 2],
    sizes: [1, 2, 2, 1, 2.5, 1, 1, 2, 2, 1]
}, {
    name: "水瓶座",
    vertices: [[29.85, 11.019999999999998, 10.255000000000003], [18.669999999999995, 18.83, -13.474999999999994], [-8.270000000000003, 30, -21.735], [-14.23, 13.769999999999998, 13.315000000000003], [-19.75, 13.159999999999998, 21.735000000000003], [-24.340000000000003, 12.4, 11.325000000000003], [-29.85, -10.72, 5.965000000000003], [-23.11, -3.5200000000000014, -2.144999999999996], [-11.940000000000001, -11.170000000000002, .9150000000000027], [-12.250000000000004, -15, 11.325000000000003], [-9.950000000000003, -30, -12.094999999999999], [-5.050000000000001, 3.369999999999999, 6.575000000000003], [4.589999999999996, -3.0600000000000014, 9.485000000000003], [-22.96, -28.47, -6.125]],
    links: ["0,1,2,3,4,5,6,7,8,9,10", "3,11,12"],
    cotem: "Aquarius",
    image:"../skyStar/image/cotem/Aquarius.png",
    position: new THREE.Vector3(400,566,400),
    watchPosition: new THREE.Vector3(1e3,1414,1e3),
    cameraPosition: new THREE.Vector3(500,707,500),
    index: 10,
    materials: [3, 2, 2, 2, 3, 4, 2, 3, 4, 1, 4, 4, 4, 4],
    sizes: [2, 2, 2, 2.5, 2, 1, 2, 1, 2, 1, 2, 2, 1, 1]
}, {
    name: "双鱼座",
    vertices: [[-28.47, 20.14, 20.134999999999998], [-33.33, 15.280000000000001, 6.945], [-30, 13.89, 3.1950000000000003], [-25.7, 9.030000000000001, -.41499999999999915], [-22.92, -1.67, 3.1950000000000003], [-18.61, -23.61, -29.445], [-12.5, -10.55, -11.255000000000003], [-7.920000000000002, -1.9399999999999995, -21.255000000000003], [-1.5300000000000011, 6.11, 11.524999999999999], [8.61, 9.580000000000002, -2.2250000000000014], [11.25, 14.17, 17.085], [10.420000000000002, 14.31, 29.445], [19.58, 19.45, 6.384999999999998], [16.799999999999997, 18.75, 24.445], [30, 23.61, -1.115000000000002], [20.549999999999997, 15.700000000000001, 20.975], [13.939999999999998, 13.610000000000001, 20.975]],
    links: ["0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16", "16,11"],
    cotem: "Pisces",
    image:"../skyStar/image/cotem/Pisces.png",
    position: new THREE.Vector3(400,-566,400),
    watchPosition: new THREE.Vector3(1e3,-1414,1e3),
    cameraPosition: new THREE.Vector3(500,-707,500),
    index: 11,
    materials: [4, 2, 4, 4, 3, 3, 2, 2, 4, 3, 4, 4, 3, 2, 2, 1, 2],
    sizes: [1, 1, 2, 2, 2.5, 2, 2, 2.5, 1, 1, 2, 1, 2, 1, 1, 1, 1]
}]
}());
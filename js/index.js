var renderer, camera, scene, skybox , cotems, controls;
var cotemCubes, raycaster, mouse;
var initCameraPosition;


var initScene = function(){
	renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth,window.innerHeight);
	renderer.setClearColor(462380);
	document.getElementById('sky-canvas').appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight, 1, 11000);
	initCameraPosition = new THREE.Vector3(-684, -1313, -1343)
	camera.position.copy(initCameraPosition);

	scene = new THREE.Scene();

	controls = new THREE.TrackballControls( camera, renderer.domElement );
	controls.rotateSpeed = 0.5;
	controls.minDistance = 500;
	controls.maxDistance = 6000;

	raycaster = new THREE.Raycaster();
	mouse = new THREE.Vector2();
}

var initSkybox = function(){
	var textures = ["../skyStar/image/sky.jpg","../skyStar/image/sky.jpg",
					"../skyStar/image/sky_back.png","../skyStar/image/sky_back.png",
					"../skyStar/image/sky.jpg","../skyStar/image/sky.jpg"];
	var geometry = new THREE.BoxGeometry(4096,4096,4096)
	var textureCube = new THREE.CubeTextureLoader().load( textures );
	var shader = THREE.ShaderLib.cube;
	shader.uniforms.tCube.value = textureCube;
	var material = new THREE.ShaderMaterial({
	    fragmentShader: shader.fragmentShader,
	    vertexShader: shader.vertexShader,
	    uniforms: shader.uniforms,
	    depthWrite: false,
	    blending: THREE.NoBlending,
	    side: THREE.BackSide
	});
	skybox = new THREE.Mesh(geometry,material);
	skybox.name = "skybox";
	scene.add(skybox);
}


var starGeometry, starMaterial, stars, starNums = 200;
var initStars = function(){
	starGeometry = new THREE.Geometry();
	var map = new THREE.TextureLoader().load("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAeFBMVEUAAAACBAgEBwwHCxELEhoHDhcOGCIVICwWJDEdLTonPE0RHCcaKTcgMkI4UWYeLz8sQFEmOEhMaIEvRVciNkaZtsl/nrVUcIk2TGAvSl9bepJFYHY9VmzB2eanwtRzkqvm9PnM4u1riqNjgZk/XHWNqsH6//+50OBE0LCDAAAEC0lEQVR42u2aCVPjMAyFUZw4Z5O06X1wtBz//x+uLNlV2Q7H7ERTmPUHQ+sUeM/Plu0G7iKRSCQSiUQikUgkEhkJuPu/Afr4Pr83/o/6CbfNAD69rD/YksBNBkY7evjHBFRdwdeWQCFhaV/nAtdGsKU2EF5OAoArQ+NHDtcJALcZSUACGQ9JPQhIG5DEORCvIBFoOAAnIYoJ6pOBd1f4uVoGgHAb2EAiMYBJEIUy9F0UA0AkBLlgV9RS0JehDf0OnTcIarIwG1JaiGTkOXUWQ3XWp0vGSACg54C0gz4nwDFQAxCR13EQxJ1uZghuIeDQ2g3OUz05O8iyzARSZ4S+R2+LTBI/1yl2JEP8lzTN8CqXgx4owA5YHFVT+UIzgT3qeaBJTwZQ0jrwAcXx0Q0G66uS+AmPknWd53mN2NTWNuirHwaBJj1KFkXRNE2BoBObGodq/4OJJEVsXjRd102QrmnKPDWcgE4FcAIBdJDnTn9aEfPJtLRUj8oVABB2gSwvy3IyHTaOvhr6wlpNfUkgceD8r8u+qob2GWk37XpS0BzQ2gglAF//ts6bqt3vZ9vtdjWb7apJWdS0Coi6TgKJCfrdtF1tj8vl8uG43ffTrsktBaAJ6nsDTn9oV8vFPfJy2q2reYkGtPQlAd5/U1uU877dnV7enp6eDouH1X4gA+cqefcxjryD5yAl4AysHhaHx9fHp/vl9nmY4xDwVpSwBwHGW4LAT8O0LrpqPSMDr84AJVD7pZAAYtz1D84GMhyD6Xp2RAOPmAAOQT+hBCQCGYux1wEATIAM7E7Lt8Ph8LY4ztoKy5CqgNTHHYLQDZB1KK3RwLBfLV8Wi8XL8rQbpmVhUyP6405BeT/EHrgMqnZ1Oh0fcBlY7frOjYBkP/o2DJeFYGgOdNV+9zxz7FpcinMKYPz+gzzxPnwdFt2w3mzW7bpt203V9w1OQWA0VqCzFQ4gwzGY9rgP03bc9/NyUuYmqEv3NayE3aDBY0iHWzI+TOZYg0WeGlDaCyWBcBp2ZeBpyqYpXQ1anASSgJaRcBywtSXqOmcsn8p1E+Aa4DK0aZqRpiXoRI4GjOJ9Q1kKUMnJGyILTnxb8TjkP8EYlud36CwrbxCV5qFYcJIkRvrsgCqTH/Gqqjz23wMeFg29T5RuEIkFlrp4+5U4wmVfJSpVyLDSZczgRyLxl1UdeB25ASIGgHQhFIpa/88yAuvxAkGv6N0fgZCuwHriQ65oOKC6v/rV1P4reVAKQBQE8cAGGIUMProHHo5Ll6+q3KiEz4IF0SWkOab8F3slfPQT+hYkAbEhp0h9efUEZEZ9nYDO3zS/K68HfHOQFE3Aj/ongh9qISYAN3dwc/0fQIwgEolEIpFIJBKJ/E7+AIJjJo2y+HjdAAAAAElFTkSuQmCC");
	for (var i = 0; i < starNums ; i++){		
		var vector = new THREE.Vector3();
		vector.x = 3000 * Math.random() - 1500,
	    vector.y = 3000 * Math.random() - 1500,
	    vector.z = 3000 * Math.random() - 1500,
	    starGeometry.vertices.push(vector);
	}
	starMaterial = new THREE.PointsMaterial({
	    size: 100 * Math.random() + 100,
	    color: new THREE.Color(16777215),
	    map: map,
	    blending: THREE.AdditiveBlending,
	    opacity: .7,
	    depthTest: false,
	    transparent: true
	}),
	stars = new THREE.Points(starGeometry,starMaterial);
	scene.add(stars);
}
var initCotems = function(){
	cotems = CreateCotem.init();
	for(var i = 0 ; i < cotems.length; i++){
		scene.add(cotems[i].group);
	}
	cotemCubes = CreateCotem.getCotemCube();
	cotemImages = CreateCotem.getCotemImage();
}

var focus = false;
var focusCotem = function(e){
	focus = !focus;
	e = e || window.event;
	e.preventDefault();
	mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
	raycaster.setFromCamera(mouse, camera);
	var intersects = raycaster.intersectObjects(cotemImages,true),
		selectedCube, selectedCotem;
    if (intersects.length > 0){
    	selectedCube = intersects[0].object;
    	selectedCotem = cotems[selectedCube.index];
    	var postion = selectedCotem.cameraPosition;  
    	
		if(focus){
	    	selectedCotem.show();
	    	new TWEEN.Tween( camera.position )
	    		.to( { x:postion.x ,y:postion.y, z:postion.z }, 1000 )
	    		.easing( TWEEN.Easing.Exponential.InOut )
	    		.start();
		}else{
			selectedCotem.hide();
			new TWEEN.Tween( camera.position )
				.to( { x:initCameraPosition.x ,y:initCameraPosition.y, z:initCameraPosition.z }, 1000 )
				.easing( TWEEN.Easing.Exponential.InOut )
				.start();
		}	
    }
}

var bindListener = function(){
	document.addEventListener('click',focusCotem,false);
}

var starUpdate = function(){
	var v, speedx = 1, speedy = 1, speedz = 1;
    for (var i = 0; i < starNums; i++){
        v = starGeometry.vertices[i];
        v.x += speedx;
        v.y += speedy;
        v.z += speedz;
        v.x = v.x > 1500 ? -1500 : v.x;
        v.y = v.y > 1500 ? -1500 : v.y;
        v.z = v.z > 1500 ? -1500 : v.z;
        if(i > 100){
        	speedx = 2;
        	speedy = 3;
        	speedz = 3;
        }
    }
    starGeometry.verticesNeedUpdate = true;
}

var update = function(){
	starUpdate();
	CreateCotem.updateTimeline(.05);
	TWEEN.update();
	controls.update();
}
window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60)
}
var animate = function(){
	requestAnimFrame(animate);
	update();
	render();
}

var render = function(){
	renderer.render(scene, camera);
}

var fresh =  function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

initScene();
initSkybox();
initStars();
initCotems();
bindListener();
animate();
window.addEventListener('resize',fresh);

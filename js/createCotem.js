(function(){
	function Cotem(options){
		this.options = options;
	    this.group = new THREE.Group();
	    this.particleSystem = null ;
	    this.particles = null ;
	    this.cube = null ;
	    this.cotem = null ;
	    this.line = null ;
	    this.text = null ;
	    this.position = null ;
	    this.roration = null ;
	    this.image = options.image;
	    this.vertices = [];
	    this.name = options.name;
	    this.cameraPosition = options.cameraPosition;
	    this.size = options.size || 8;
	    this.color = options.color || 16777215;
	    this.id = options.index;
	    this.build();
	    this.hide()
	};
	var createLine = function(link,vertices){
	    var geometry = new THREE.Geometry();
	    var lineMaterial = new THREE.LineBasicMaterial({
		    color: 16777215,
		    depthTest: false,
		    transparent: true,
		    opacity: .5,
		    linewidth: 1,
		    polygonOffset: true 
		});
	    var links = link.split(",");
	    for (var i = 0; i < links.length; i++){
	        geometry.vertices.push(vertices[links[i]]);
	    }
	    return new THREE.Line(geometry,lineMaterial)
	}
	var textToCanvas = function(txt){
		var image = new Image();  
		var canvas = document.createElement('canvas');
		canvas.width = 512;
		canvas.height = 512;
		var ctx = canvas.getContext("2d");
		ctx.font = "35px sans-serif";
		ctx.fillStyle = "#ffffff";
		ctx.fillText(txt, 250, 250);
		return canvas.toDataURL("image/png");  
	}
	var cotems = [], 
		cotemCubes = [],
		cotemImages = [],
		pointMaterial;
	var starTexture = [
		'data:image/png;base64,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',
		'data:image/png;base64,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',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAeFBMVEUAAAACBgkDCQ0ECxEGDhUGEBgIExwOIC4LGyYSKDcJFyEZNEcWL0EhQFYnR1wdOk9QcYUxU2oqPEkgLzhDaH4uTmQWIit7na9oiZ1cfY89X3U6Wm4+VWOsxtKKq7s2SVZvkqReg5dJY3PK3eWcuMdKaH39///f7O/iGy/IAAAE/UlEQVR42u2ah3LbMBBEdUQhCUpUsySruaX9/x9m7wAEilImmYBkksHapuixZ/bhGiDas6KioqKioqKioqKif1w0m1y/ifA/+NO0AHCcGoDo7ruRRdDkAJQiTxPkoCJK/lOEoBICmhKgirY0CQApVRF0UxDjilQkwFc1RQhUJKCYjnFFlf5CUCkmmMWPcYQIaA2CCOBRxhzMGvIEVeXTMXIxKqeNEMA+oozTkBRenDNGEJRmgWRIAPr23uyttYygDYtjAA0WAaL7zY+2eyMExvCrxAC6ARgMIcw/t3XWMQIi4ZjE1+JwbZDySyK13VrnnIVwDQQDRSD53hLsN41zjbO4NFayoH8UgUztSRGBuP2V2WxhDQiHCwNA+MGgp2Y4Q2Er0PvnuqnrxskFZWCNIuh2vdnHE4V2r7j97POmqWGOi8QgAKRMDTGbSPodABbaXtoIILnwAHHVQ/infVBZzv3luW7B0AqHs1wCSX4wUf5pUMnsN0h90711dQAAgQeISVLQEAAQ4s/jj03PlxbuLatujMaatZIWEUhmkR7MmgFIGZ6BDRbfrTawns/buQAobQCAqwmzOXcNEBMobgCeADVs397YHWprFzYF7V+U8mMhfwqU+NcQnBfHHgDdsgMAoBwEe5Gfi8OUALy49OA8/7Dq4M8AzAQ1LFDoapZbsbtCBDjyXdc/npeLXd+1QeAKDZHfPZz/dASA/XKxOL6sz6f1ohNxMXA15I4+UfTX3l4yMId/v1s9Pa6OD+u+XywWy467waIf859QA0Bavw/A7mH1dD0cXlendQ9/Cb8JJ8TsEDEIaDfuwZYB1g+PT++uT4fXB2Rhzv5OejAhUP443FTBcscAH6+H1xPakf3j0cBvWkNAxDBYJuh6AFw/XQ/H8wL27O/CaVkFhGFywdOYJyFS8PpyeH99WZ3RiewfAHwaRDQABCltHda/6Nenh9Xx8f3LeSclyAkIEdDJPzMCSQBcPV+i8fq+353Or4edTIFWEEwIwPft/xSCSLbDhruQRzDUL3YvH2DO8gcTnarwRjkOqBTOY2En6NgSN/PT45JLMJahCfG/s6c/W358GqNsAwkC+8tddzzJ4mUf4m1ZZ188BSkjde7gC7U1bmw9b9fHTmYA4Gx4y6woyS+d/tCfM+APOzwFWJxwfHIWVhdJvzXheF4piKCsDwVUrC7FPs41vucQiLZfdQIAPnyqdCz2mc/0bDCe82RD8OZYrm44GW+XCIDfMzr3VhDXEwUEMEhCGAAIm7d5APA1oLx1HoT7ig5BUIr7TQAwl/EuJQKANe9b9eAc1kKegL0NbJRy8g61u7QASEM4I0HwvU8JosCpVpWV/qufN86mx0XZHhn9YIBTJa1GMw9gjHPt814yEAkEcjaQiAV/ATB8DAPBZoNXSMH7512Qa0+scFMp0o6nn7H1pokBIGhYAgEgD6AYgIfTdssVIAADE5AH4FuYKcvdUCELWwd37z84ApGvMLY2Pu1a7/fhHDI0AX0BIIU7reHpCQyTJII4CfPHIAZAyl0CQOxsXDSXIAVnyk5AXwMg7sGR0oOq2xmSn0CWFwCkE9Ie8fUZxBsP4k8J5Hboxrt71/wA6caHIQB97U7DQNAtwFR/QL+9Gf1vp7BLGfAUYysBBKJxEZIfTf4vPBSRxhX9Lf/D9IsA/4vt38jyN4WiqKioqKioqKioqKjoX9ZnCOgz7N8EW4sAAAAASUVORK5CYII=',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAeFBMVEUAAAACBAgEBwwHCxELEhoHDhcOGCIVICwWJDEdLTonPE0RHCcaKTcgMkI4UWYeLz8sQFEmOEhMaIEvRVciNkaZtsl/nrVUcIk2TGAvSl9bepJFYHY9VmzB2eanwtRzkqvm9PnM4u1riqNjgZk/XHWNqsH6//+50OBE0LCDAAAEC0lEQVR42u2aCVPjMAyFUZw4Z5O06X1wtBz//x+uLNlV2Q7H7ERTmPUHQ+sUeM/Plu0G7iKRSCQSiUQikUgkEhkJuPu/Afr4Pr83/o/6CbfNAD69rD/YksBNBkY7evjHBFRdwdeWQCFhaV/nAtdGsKU2EF5OAoArQ+NHDtcJALcZSUACGQ9JPQhIG5DEORCvIBFoOAAnIYoJ6pOBd1f4uVoGgHAb2EAiMYBJEIUy9F0UA0AkBLlgV9RS0JehDf0OnTcIarIwG1JaiGTkOXUWQ3XWp0vGSACg54C0gz4nwDFQAxCR13EQxJ1uZghuIeDQ2g3OUz05O8iyzARSZ4S+R2+LTBI/1yl2JEP8lzTN8CqXgx4owA5YHFVT+UIzgT3qeaBJTwZQ0jrwAcXx0Q0G66uS+AmPknWd53mN2NTWNuirHwaBJj1KFkXRNE2BoBObGodq/4OJJEVsXjRd102QrmnKPDWcgE4FcAIBdJDnTn9aEfPJtLRUj8oVABB2gSwvy3IyHTaOvhr6wlpNfUkgceD8r8u+qob2GWk37XpS0BzQ2gglAF//ts6bqt3vZ9vtdjWb7apJWdS0Coi6TgKJCfrdtF1tj8vl8uG43ffTrsktBaAJ6nsDTn9oV8vFPfJy2q2reYkGtPQlAd5/U1uU877dnV7enp6eDouH1X4gA+cqefcxjryD5yAl4AysHhaHx9fHp/vl9nmY4xDwVpSwBwHGW4LAT8O0LrpqPSMDr84AJVD7pZAAYtz1D84GMhyD6Xp2RAOPmAAOQT+hBCQCGYux1wEATIAM7E7Lt8Ph8LY4ztoKy5CqgNTHHYLQDZB1KK3RwLBfLV8Wi8XL8rQbpmVhUyP6405BeT/EHrgMqnZ1Oh0fcBlY7frOjYBkP/o2DJeFYGgOdNV+9zxz7FpcinMKYPz+gzzxPnwdFt2w3mzW7bpt203V9w1OQWA0VqCzFQ4gwzGY9rgP03bc9/NyUuYmqEv3NayE3aDBY0iHWzI+TOZYg0WeGlDaCyWBcBp2ZeBpyqYpXQ1anASSgJaRcBywtSXqOmcsn8p1E+Aa4DK0aZqRpiXoRI4GjOJ9Q1kKUMnJGyILTnxb8TjkP8EYlud36CwrbxCV5qFYcJIkRvrsgCqTH/Gqqjz23wMeFg29T5RuEIkFlrp4+5U4wmVfJSpVyLDSZczgRyLxl1UdeB25ASIGgHQhFIpa/88yAuvxAkGv6N0fgZCuwHriQ65oOKC6v/rV1P4reVAKQBQE8cAGGIUMProHHo5Ll6+q3KiEz4IF0SWkOab8F3slfPQT+hYkAbEhp0h9efUEZEZ9nYDO3zS/K68HfHOQFE3Aj/ongh9qISYAN3dwc/0fQIwgEolEIpFIJBKJ/E7+AIJjJo2y+HjdAAAAAElFTkSuQmCC'
	];
	Cotem.prototype.build = function(){
		var _v = this.vertices; 
		var v = this.options.vertices;
		for(var i = 0; i < v.length; i++){
			_v[i] = (new THREE.Vector3()).fromArray(v[i]);
		}
		this.vertices = _v;
		this.position = this.options.position;
		this.watchPosition = this.options.watchPosition;
		this.links = this.options.links;
		this.buildStar();
		this.buildCube();
		this.buildText();
		this.buildLine();
		this.buildCotem();
		cotems.push(this);
		cotemCubes.push(this.cube);
		this.group.position.copy(this.options.position);
		this.group.lookAt(this.cameraPosition)
	}
	Cotem.prototype.buildStar = function(){
		var vertices = this.vertices, 
			positions = new Float32Array(3 * vertices.length), 
			singleSizes = new Float32Array(vertices.length), 
			idxs = new Float32Array(vertices.length), 
			matids = new Float32Array(vertices.length), 
			geometry, 
			sizes = this.options.sizes, 
			materials = this.options.materials;
		for (var i = 0; i < vertices.length; i++){
			geometry = new THREE.BufferGeometry();
		    positions[3 * i] = vertices[i].x;
		    positions[3 * i + 1] = vertices[i].y;
		    positions[3 * i + 2] = vertices[i].z;
		    singleSizes[i] = this.size * sizes[i];
		    matids[i] = materials[i];
		    idxs[i] = i;
		    geometry.addAttribute("position", new THREE.BufferAttribute(positions,3));
		    geometry.addAttribute("idx", new THREE.BufferAttribute(idxs,1));
		    geometry.addAttribute("matid", new THREE.BufferAttribute(matids,1));
		    geometry.addAttribute("size", new THREE.BufferAttribute(singleSizes,1));
		}
		
		this.particleSystem = new THREE.Points(geometry,pointMaterial);
		this.group.add(this.particleSystem)
	}
	Cotem.prototype.buildCube = function() {
	    var vertices = this.vertices,    	
	    	xmax = vertices[0].x,
	    	xmin = vertices[0].x,
	    	ymax = vertices[0].y,
	    	ymin = vertices[0].y,
	    	zmax = vertices[0].z,
	    	zmin = vertices[0].z;
	    for (var i = vertices.length - 1; i > 1; i--){
	        xmin = Math.min(vertices[i].x, xmin);
	        xmax = Math.max(vertices[i].x, xmax);
	        ymin = Math.min(vertices[i].y, ymin);
	        ymax = Math.max(vertices[i].y, ymax);
	        zmin = Math.min(vertices[i].z, zmin);
	        zmax = Math.max(vertices[i].z, zmax);
	    }
	    var cubeGeometry = new THREE.BoxGeometry(2 * Math.abs(xmax - xmin),2 * Math.abs(ymax - ymin),2 * Math.abs(zmax - zmin)),
	        cubeMaterial= new THREE.MeshBasicMaterial({
	        	color: THREE.NoColors,
	        	blending: THREE.NormalBlending
	    	}),
	    cube = new THREE.Mesh(cubeGeometry,cubeMaterial);
	    cube.visible = false;
	    cube._width = xmax - xmin;
	    cube._height = ymax - ymin;
	    cube.index = this.id;
	    cube.name = this.name;
	    this.cube = cube;
	    this.group.add(cube);
	}
	Cotem.prototype.buildText = function(){		
		var map = new THREE.TextureLoader().load(textToCanvas(this.options.name));
        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(0,0,0));
        var material = new THREE.PointsMaterial({
		    size: 512,
		    depthTest: false,
		    map: map,
		    blending: THREE.AdditiveBlending,
		    transparent: true
		})
        var text = new THREE.Points(geometry,material);
		this.text = text;
		this.group.add(text);
	}
	Cotem.prototype.buildLine = function(){
		var line, 
			lineGroup = new THREE.Group();
		for (var i = 0; i < this.links.length; i++){
			line = createLine(this.links[i], this.vertices);
		    lineGroup.add(line);
		}
		    
		this.line = lineGroup;
		this.group.add(lineGroup);
	}
	Cotem.prototype.buildCotem = function() {
	    var texture = new THREE.TextureLoader().load(this.image),
	        material = new THREE.MeshBasicMaterial({
		        map: texture,
		        blending: THREE.AdditiveBlending,
		        side: THREE.DoubleSide,
		        transparent: true
		    }),
	      	size = 72,
	        geometry = new THREE.PlaneBufferGeometry(size,size,8),
	        cotemImage = new THREE.Mesh(geometry,material);
		cotemImage.position.copy(this.cube.position);
		cotemImage.scale.multiplyScalar(1);
	    this.cotem = cotemImage;
	    cotemImage.index = this.id;
	    cotemImages.push(cotemImage);
	    this.group.add(cotemImage)
	}
	Cotem.prototype.show = function() {
		var _this = this;
	 	setTimeout(function(){
	 		_this.line.visible = true;
	 		// _this.cotem.visible = true;
	 		// _this.cube.visible = false;
	 		// _this.text.visible = false;
	 	},800);
	}
	Cotem.prototype.hide = function() {
	    // this.cotem.visible = true;
	    this.line.visible = false;
	    // this.cube.visible = false;
	    // this.text.visible = true;
	}

	return CreateCotem = {
		init: function(){
			pointMaterial = new THREE.ShaderMaterial({
			    uniforms: {
			        texture1: {
			            type: "t",
			            value: new THREE.TextureLoader().load(starTexture[0])
			        },
			        texture2: {
			            type: "t",
			            value: new THREE.TextureLoader().load(starTexture[1])
			        },
			        texture3: {
			            type: "t",
			            value: new THREE.TextureLoader().load(starTexture[2])
			        },
			        texture4: {
			            type: "t",
			            value: new THREE.TextureLoader().load(starTexture[3])
			        },
			        timeline: {
			            type: "f",
			            value: 0
			        }
			    },
			    vertexShader: document.getElementById("vertex-shader").textContent,
			    fragmentShader: document.getElementById("fragment-shader").textContent,
			    blending: THREE.AdditiveBlending,
			    depthTest: false,
			    transparent: true
			});
			for(var i = 0 ; i < CotemConf.length; i++){
				new Cotem(CotemConf[i]);
			}
			return cotems;
		},
		buildCotem : function() {
            for (var i = 0; i < cotems.length; i++)
                cotems[i].buildCotem();
        },
        getCotemCube : function(){
        	return cotemCubes;
        },
        getCotemImage: function(){
        	return cotemImages;
        },
        updateTimeline: function(e){
        	pointMaterial.uniforms.timeline.value += e;
        }
	}
}());
$(document).ready(function() {
	var pagenow = 0;
	var navEnable = true;
	var lock = true;
	var pageone = function() {

	}
	pageone.prototype.mainIntroduce = function() {
		this.introTimer = 0;
		this.introTimer2 = 0;
		this.text = "Hello Dear Visitor, welcome to my personal website. My name is Danny ShanYu. I am a website designer and website engineer. To know more? please scroll down!";
		(function(e) {
			e.introInterval = setInterval(function() {
				if (e.introTimer < e.text.length)
					e.introTimer++;
				if (e.text.toString().substring(e.introTimer - 1, e.introTimer) == "!" ||
					e.text.toString().substring(e.introTimer - 1, e.introTimer) == "?" ||
					e.text.toString().substring(e.introTimer - 1, e.introTimer) == "," ||
					e.text.toString().substring(e.introTimer - 1, e.introTimer) == ".") {
					if (e.introTimer2 < 10) {
						if (e.introTimer != e.text.length)
							e.introTimer--;
						e.introTimer2 += 0.25;
					} else {
						e.introTimer2 = 0;
					}
					if (parseInt(e.introTimer2) % 2 == 1) {
						$("#introduce").text(e.text.toString().substring(0, e.introTimer + 1) + "__");
					} else {
						$("#introduce").text(e.text.toString().substring(0, e.introTimer + 1));
					}
				} else {
					$("#introduce").text(e.text.toString().substring(0, e.introTimer));
				}
				if (e.introTimer == e.text.length) {
					//clearInterval(introInterval);
				}
			}, 50);
		})(this);

	}
	pageone.prototype.fadeIn = function() {
		$(".page").hide();
		$("#page0").show();
		this.mainIntroduce0 = new this.mainIntroduce();
	}
	pageone.prototype.reshow = function(callback) {
		$(".page").hide();
		$("#page0").show();
		$("#introduce").hide();
		$("#title-container").hide();
		$("#face").hide();
		$("#introduce").fadeIn(300);
		$("#title-container").fadeIn(300);
		$("#face").fadeIn(300, function() {
			if (callback) {
				callback();
			}
		});
		$("#introduce").text(this.mainIntroduce0.text);
		$("#introduce").hide();
		$("#introduce").fadeIn();

		//this.mainIntroduce0 = new this.mainIntroduce();
	}
	pageone.prototype.fadeOut = function(callback) {
		clearInterval(this.mainIntroduce0.introInterval);
		$("#introduce").animate({
			marginLeft: "690px",
			opacity: 0
		}, 300, function() {
			$("#title-container").animate({
				marginTop: "110px",
				opacity: 0
			}, 300, function() {
				$("#face").animate({
					marginLeft: "-5px",
					opacity: 0
				}, 300, function() {
					$("#page0").hide();
					$("#introduce").css({
						marginLeft: "680px",
						opacity: 1
					});
					$("#title-container").css({
						marginTop: "125px",
						opacity: 1
					});
					$("#face").css({
						marginLeft: "100px",
						opacity: 1
					})

					if (callback != null)
						callback();
				});
			});
		});
	}
	var pagetwo = function() {

	}
	pagetwo.prototype.skillbar = function(obj, percent) {
		$(obj).find(".skill-bar-cover").css("marginLeft", 310 * percent + "px");
		$(obj).find(".skill-bar-cover-2").css("marginLeft", parseInt(190 + 310 * percent) + "px");
		$(obj).find(".skill-bar-cover-2").css("width", parseInt(310 - 310 * percent + 1) + "px");
		this.skillbarTimer = 0;
		(function(e) {
			e.skillBarInterval = setInterval(function() {
				if (e.skillbarTimer == 8) {
					var text = $(obj).find(".binary-text").text();
					var text = text.toString();
					var num = text.substring(0, text.length - 1);
					var rad = Math.floor(Math.random() * 2);
					var num = rad + "" + num;

					$(obj).find(".binary-text").text(num);
					e.skillbarTimer = 0;
				}
				$(".binary-text").css("marginLeft", parseInt(e.skillbarTimer - 8) + "px");
				e.skillbarTimer++;
			}, 8);
		})(this);
	}
	pagetwo.prototype.reshow = pagetwo.prototype.fadeIn = function(callback) {
		$(".page").hide();
		$("#page1").show();
		$(".skill-point-each").css("paddingTop", "20px");
		$(".skill-point-each").css("opacity", 0);
		var skillFadeIn = function(i) {
			$(".skill-point-each:eq(" + i + ")").animate({
				"paddingTop": "0px",
				"opacity": 1
			}, 300, function() {
				if (i < 3) {
					skillFadeIn(i + 1);
				} else {
					if (callback != null) {
						callback();
					}
				}
			})
		}
		this.skillbar0 = new this.skillbar($(".frontend"), 0.95);
		this.skillbar1 = new this.skillbar($(".backend"), 0.8);
		this.skillbar2 = new this.skillbar($(".design"), 0.6);
		this.skillbar3 = new this.skillbar($(".tech"), 0.6);
		$("#page1 .main-title").css({
			"marginTop": "60px",
			"opacity": 0
		});
		$("#page1 .main-title").animate({
			"marginTop": "50px",
			"opacity": 1
		}, 300, function() {
			skillFadeIn(0);
		})

	}
	pagetwo.prototype.fadeOut = function(callback) {
		if (this.skillbar0) {
			clearInterval(this.skillbar0.skillBarInterval);
		}
		if (this.skillbar1) {
			clearInterval(this.skillbar1.skillBarInterval);
		}
		if (this.skillbar2) {
			clearInterval(this.skillbar2.skillBarInterval);
		}
		if (this.skillbar3) {
			clearInterval(this.skillbar3.skillBarInterval);
		}
		for(var i = 0 ; i<4;i++){
			if(i!=3){
				$(".skill-point-each:eq("+i+")").animate({
					"marginTop": "-20px",
					"opacity": 0
				}, 300);
			}else{
				$(".skill-point-each:eq("+i+")").animate({
					"marginTop": "-20px",
					"opacity": 0
				}, 300, function() {
					$("#page1 .main-title").animate({
						"marginTop": "40px",
						"opacity": 0
					}, 300, function() {
						$("#page1").hide();
						$(".skill-point-each").css({
							"marginTop": "0px",
							"opacity": 1
						});
						$("#page1 .main-title").css({
							"marginTop": "50px",
							"opacity": 1
						});
						if (callback != null) {
							callback();
						}
					})
				})
			}
		}
	}
	var pagethree = function() {
		this.pics = [
			{
				"pics":"1.png",
				"intros":"I follow the tutorial on tutsplus.com and finish my first website",
				"link":"http://dannyshan.me/practice1"
			},
			{
				"pics":"2-2.png",
				"intros":"This is my second practice website. <br/>"+
				"I used 960 grid and practice the usage of form element while building this website.",
				"link":"http://dannyshan.me/practice2/home.html"
			},
			{
				"pics":"5-2.png",
				"intros":"This is a practice website for using jquery animate.",
				"link":"http://dannyshan.me/photoslider"
			},
			{
				"pics":"8-2.png",
				"intros":"The project for the Database Lesson, <br/>using ajax and a theme similar to Microsoft outlook website",
				"link":"http://dannyshan.me/database"
			},
			{
				"pics":"8-1.png",
				"intros":"The project for the Database Lesson, <br/>using ajax and a theme similar to Microsoft outlook website",
				"link":"http://dannyshan.me/database/login.html"
			},
			
			{
				"pics":"9-2.png",
				"intros":"The project for the Multimedia Lesson, <br/>using html5 video element and mysql database<br/>"
				+"I also use the first version of my html video barrage class in this project",
				"link":""
			},
			{
				"pics":"9-1.png",
				"intros":"The project for the Multimedia Lesson, <br/>using html5 video element and mysql database<br/>"
				+"I also use the first version of my html video barrage class in this project",
				"link":""
			},
			{
				"pics":"20-2.png",
				"intros":"These are small websites I made for my girl friend and I hope she likes them",
				"link":""
			},
			{
				"pics":"20-1.png",
				"intros":"These are small websites I made for my girl friend and I hope she likes them",
				"link":""
			},
			{
				"pics":"10.png",
				"intros":"A commercial website made for Shanghai Youth League Committee",
				"link":"http://dannyshan.me/tuanwei"
			},
			{
				"pics":"14-1.png",
				"intros":"The online testing website used for a talent competition. <br/>Using php and mysql for backend. <br/>"+
				"Above 400 students participate and the website worked well",
				"link":"http://stu.fudan.edu.cn/ztalents"
			},
			{
				"pics":"13-1.png",
				"intros":"Build the html5 video barrage system.<br/>"+
				"It's adaptive to both a live broadcast and a recorded video <br/>"+
				"it's also adaptive to full-screen play.(picture's from Internet)",
				"link":""
			},
			{
				"pics":"7-2.png",
				"intros":"The stu event platform. I am the PM and the frontend programmer of this website.<br/>"+
				"It includes a main page, detail page, personal-publising page, <br/>organization-publishing page, and organization-modify page",
				"link":"http://stu.fudan.edu.cn/event/addevent.html"
			},
			{
				"pics":"7-1.png",
				"intros":"The stu event platform. I am the PM and the frontend programmer of this website.<br/>"+
				"It includes a main page, detail page, personal-publising page, <br/>organization-publishing page, and organization-modify page",
				"link":"http://stu.fudan.edu.cn/event"
			},
			{
				"pics":"16-1.png",
				"intros":"The showing page for STU 13th anniversary, <br/>"+
				"using Parallax scrolling and html5 canvas animation <br/>"+
				"the trajectory of the paper plane is calculated based on the Bias curve",
				"link":"http://stu.fudan.edu.cn/timeline2014"
			}
		],
		this.picnum;
		this.arrowAllow = true;
	};

	pagethree.prototype.fadeIn = pagethree.prototype.reshow  = function(callback){
		$(".page").hide();
		$("#page2").show();
		if(this.picnum==null){
			this.picnum = this.pics.length-1;
		}
		if(this.pics[this.picnum].link!=""){
			$("#work-wrap #work-img").addClass("link");
			$("#work-wrap #work-img").attr("link",this.pics[this.picnum].link);
		}
		$("#work-wrap #work-img").css("background-image","url('./img/"+this.pics[this.picnum].pics+"')");
		$("#work-wrap #img-intro p").html(this.pics[this.picnum].intros);
		
		$("#page2 .main-title").css({
			"marginTop": "60px",
			"opacity": 0
		});
		$("#work-wrap").css({
			"paddingTop":"10px",
			"opacity": 0
		});
		$("#page2 .main-title").animate({
			"marginTop": "50px",
			"opacity": 1
		}, 300, function() {
			$("#work-wrap").animate({
				"paddingTop":"0px",
				"opacity": 1
			},300,function(){
				if (callback) {
					callback();
				}
			});
		});
		var time = 800;
		(function(e){
			$("#right-arrow").on("click",function(){
				if(e.arrowAllow == true){
					e.arrowAllow = false;
					e.picnum--;
					if(e.picnum<0){
						e.picnum = e.pics.length-1;
					}
					if(e.pics[e.picnum].link!=""){
						$("#work-wrap #work-img").after("<div id='work-img-next' class='img-class link' link='"+e.pics[e.picnum].link+"'></div>");
					}
					else{
						$("#work-wrap #work-img").after("<div id='work-img-next' class='img-class'></div>");
					}
					$("#work-wrap #img-intro p").html(e.pics[e.picnum].intros);
					$("#work-wrap #work-img-next").css("marginLeft","40px");
					$("#work-wrap #work-img-next").css("background-image","url('./img/"+e.pics[e.picnum].pics+"')");
					$("#work-wrap #work-img-next").css("background-position","left center");
					$("#work-wrap #work-img-next").css("width","0px");
					$("#work-wrap #work-img").css({
						"background-position":"right center",
					});
					$("#work-wrap #work-img").animate({
						"width":"0px"
					},time,"linear",function(){
						$("#work-wrap #work-img-next").animate({
							"width":"634px"
						},200)
						$("#work-wrap #work-img").animate({
							"marginLeft":"40px"
						},200,"linear",function(){
							$("#work-wrap #work-img").remove();
							$("#work-wrap #work-img-next").css("marginLeft","80px");
							$("#work-wrap #work-img-next").attr("id","work-img");
							e.arrowAllow = true;
						});
					});
					setTimeout(function(){
						$("#work-wrap #work-img-next").animate({
							"width":"594px"
						},time*(1-40/634),"linear");
					},time*40/634);
				}
				
			})
		})(this);
		(function(e){
			$("#left-arrow").on("click",function(){
				if(e.arrowAllow == true){
					e.arrowAllow  = false;
					e.picnum++;
					if(e.picnum>=e.pics.length){
						e.picnum = 0;
					}
					if(e.pics[e.picnum].link!=""){
						$("#work-wrap #work-img").before("<div id='work-img-next' class='img-class link' link='"+e.pics[e.picnum].link+"'></div>");
					}
					else{
						$("#work-wrap #work-img").before("<div id='work-img-next' class='img-class'></div>");
					}
					$("#work-wrap #img-intro p").html(e.pics[e.picnum].intros);
					$("#work-wrap #work-img-next").css("marginRight","40px");
					$("#work-wrap #work-img-next").css("marginLeft","40px");
					$("#work-wrap #work-img-next").css("background-image","url('./img/"+e.pics[e.picnum].pics+"')");
					$("#work-wrap #work-img-next").css("background-position","right center");
					$("#work-wrap #work-img-next").css("width","0px");
					$("#work-wrap #work-img").css({
						"background-position":"left center",
						"marginLeft":"0px"
					});
					$("#work-wrap #work-img").animate({
						"width":"0px"
					},time,"linear",function(){
						$("#work-wrap #work-img-next").animate({
							"width":"634px"
						},200)
						$("#work-wrap #work-img").remove();
						$("#work-wrap #work-img-next").animate({
							"marginLeft":"80px"
						},200,"linear",function(){
							$("#work-wrap #work-img-next").attr("id","work-img");
							$("#work-img").css({"marginRight":"0px"});
							e.arrowAllow = true;
						});
					});
					$("#work-img-next").animate({
						"marginLeft":"80px"
					},time*40/634,"linear",function(){
						$("#work-wrap #work-img-next").animate({
							"width":"598px"
						},time*(1-40/634),"linear");
					})
				}
				
			})
		})(this);
		
	}
	pagethree.prototype.fadeOut = function(callback) {
		$("#work-wrap").animate({
			"marginTop": "-20px",
			"opacity":0
		},300,function(){
			$("#page2 .main-title").animate({
				"marginTop": "40px",
				"opacity": 0
			},300,function(){
				$("#work-wrap").css("marginTop","0px");
				$("#page2").hide();
				if (callback) {
					callback();
				}
			})
		});
		
	}
	var pagefour = function() {

	};
	pagefour.prototype.reshow = pagefour.prototype.fadeIn = function(callback) {
		$(".page").hide();
		$("#nav-icon-mask").css("background-image", "url('./img/nav-icon-mask-grey.png')");
		$("#page3").fadeIn(400, function() {
			if (callback != null)
				callback();
		});
		allRandom = true;
		this.randomCount = [];
		this.randomNumArray = [];
		for (var i = 0; i < 100; i++) {
			this.randomNumArray.push(new this.randomNum(this));
		}
	}
	pagefour.prototype.fadeOut = function(callback) {
		$("#nav-icon-mask").css("background-image", "url('./img/nav-icon-mask.png')");
		allRandom = false;
		$("#page3").fadeOut(400, function() {
			$(".random-num").remove();
			if (callback != null)
				callback();
		})
	}
	pagefour.prototype.randomNum = function(obj) {
		(function(e, obj) {
			setTimeout(function() {
				if (allRandom == true) {
					var x = Math.random() * (parseInt($("#page3").css("width")) - 100);
					var y = Math.random() * (parseInt($("#page3").css("height")) - 50);
					var numLength = 5 + Math.random() * 5;
					var random = "";
					for (var i = 0; i < numLength; i++) {
						random = random + "" + Math.floor(Math.random() * 2);
					}
					var count;
					for (var i = 0; i < obj.randomCount.length; i++) {
						if (obj.randomCount[i] == null) {
							count = i;
							break;
						}
					}
					if (count == null) {
						count = i;
					}
					$("#page3").append("<div id='random-num-" + count + "' class='random-num'>" + random + "</div>");
					$("#random-num-" + count).css({
						"marginLeft": parseInt(x) + "px",
						"marginTop": parseInt(y) + "px"
					})
					$("#random-num-" + count).css("opacity", "0");
					$("#random-num-" + count).css("font-size", parseInt(10 + Math.random() * 4) + "px");

					$("#random-num-" + count).animate({
						"opacity": "0.4"
					}, 400, function() {
						(function(count, i) {
							setTimeout(function() {
								$("#random-num-" + count).animate({
									"opacity": "0"
								}, 400, function() {
									$("#random-num-" + count).remove();
									obj.randomCount[count] = null;
								});
							}, Math.random() * 5000);
						})(count, i)
					});
					obj.randomCount[count] = true;
					obj.randomNum(obj);
				}
			}, Math.random() * 5000);
		})(this, obj);
	}
	var navTo = function(i, force) {
		//$(".page").hide();
		//$("#page"+i).show();
		if (force == true || navEnable == true) {
			$("#nav-icon-circle").stop(true, false);
			$("#nav-icon-circle").animate({
				marginTop: parseInt(16 * i) + "px"
			}, "fast", "linear");
		}
	}
	var getNavNum = function(obj) {
		var obj = mouseCoords(obj);
		var divobj = GetObjPos($("#nav-icon")[0]);
		var xdiff = obj.x - divobj.x;
		var ydiff = obj.y - divobj.y;
		var i = -1;
		if (xdiff >= 0 && xdiff <= 12 && ydiff >= 0 && ydiff <= 60) {
			if (ydiff >= 0 && ydiff <= 14) {
				var i = 0;
			}
			if (ydiff > 14 && ydiff <= 30) {
				var i = 1;
			}
			if (ydiff > 30 && ydiff <= 46) {
				var i = 2;
			}
			if (ydiff > 46 && ydiff <= 60) {
				var i = 3;
			}
		}
		return i;
	}
	var rollDown = function() {
		if (pagenow < 3) {
			var prevpage = pagenow;
			var nextpage = pagenow + 1;
			pageArray[prevpage].fadeOut(function() {
				pageArray[nextpage].fadeIn(function() {
					
					navEnable = true;
				})
			})
			pagenow++;
		}
		else{
			navEnable = true;
		}
	}
	var rollUp = function() {
		if (pagenow > 0) {
			var prevpage = pagenow;
			var nextpage = pagenow - 1;
			pageArray[prevpage].fadeOut(function() {
				pageArray[nextpage].reshow(function() {
					navEnable = true;
				});
			})
			pagenow--;
		}
		else{
			navEnable = true;
		}
	}
	var bind = function() {
		$("#nav-icon-mask").on("mousemove", function(e) {
			var i = getNavNum(e);
			if (i != -1)
				navTo(i);

			$("#nav-icon-mask").on("mouseout", function() {
				navTo(pagenow);
			});
		});
		$("#nav-icon-mask").on("click", function(e) {
			if (navEnable == true) {
				var i = getNavNum(e);
				if (i != -1 && i != pagenow) {
					navEnable = false;
					var pageTemp = pagenow;
					pagenow = i;
					pageArray[pageTemp].fadeOut(function() {
						pageArray[i].reshow(function() {
							navEnable = true;
						})
					})
				}

			}
		})
		$(document).on("mousewheel", function(e, delta) {
			if (navEnable == true) {
				navEnable = false;
				if (delta == -1) { //下滚
					rollDown();
				} else { //上滚
					rollUp();
				}
				navTo(pagenow, true);
			}
		})

		$(document).keydown(function(e) {
			if (navEnable == true) {

				navEnable = false;
				if(e.keyCode==40){
					rollDown();
				}
				if(e.keyCode==38){
					rollUp();
				}
				navTo(pagenow, true);
			}
		})
		$(document).on("click",".link",function(){
			window.open($(this).attr("link"));
		})
		$(".skill-detail-icon").on("click", function() {
			if ($(this).attr("src") == "./img/skill-detail-icon.png") {
				$(this).attr("src", "./img/skill-detail-icon-less.png");
				$(this).parent().animate({
					"marginTop": "-10px"
				}, 300, function() {
					$(this).find(".sub-title").css("marginBottom", "9px");
					$(this).next().hide();
					$(this).next().next().fadeIn(400, function() {

					});
				});
			} else {
				$(this).attr("src", "./img/skill-detail-icon.png");
				$(this).parent().next().next().hide();
				$(this).parent().animate({
					"marginTop": "0px"
				}, 300, function() {
					$(this).find(".sub-title").css("marginBottom", "18px");
					$(this).next().fadeIn(400);

				});
			}

		})
	};

	function mouseCoords(ev) {
		if (ev.pageX || ev.pageY) {
			return {
				x: ev.pageX,
				y: ev.pageY
			};
		}
		return {
			x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
			y: ev.clientY + document.body.scrollTop - document.body.clientTop
		};
	}

	function CPos(x, y) {
		this.x = x;
		this.y = y;
	}

	function GetObjPos(ATarget) {
		var target = ATarget;
		var pos = new CPos(target.offsetLeft, target.offsetTop);
		var target = target.offsetParent;
		while (target) {
			pos.x += target.offsetLeft;
			pos.y += target.offsetTop;
			target = target.offsetParent
		}
		return pos;
	}
	var pageOne = new pageone();
	var pageTwo = new pagetwo();
	var pageThree = new pagethree();
	for(var i = 0;i<pageThree.pics.length;i++){
		var img = new Image(); 
		img.src = "./img/"+pageThree.pics[i].pics;
	}
	var pageFour = new pagefour();
	pageArray = [];
	pageArray.push(pageOne, pageTwo, pageThree, pageFour);
	pageOne.fadeIn();
	bind();


})
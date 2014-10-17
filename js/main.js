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
				callback = null;
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
						callback = null;
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
		$(".skill-point-each").animate({
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
					callback = null;
				}
			})
		})
	}
	var pagethree = function() {

	};
	pagethree.prototype.reshow = pagethree.prototype.fadeIn = function(callback) {
		$("#page2").show();
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
		})

		
	}
	pagethree.prototype.fadeOut = function(callback) {
		$("#page2").hide();
		if (callback) {
			callback();
		}
	}
	var pagefour = function() {

	};
	pagefour.prototype.reshow = pagefour.prototype.fadeIn = function(callback) {
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
	var pageFour = new pagefour();
	pageArray = [];
	pageArray.push(pageOne, pageTwo, pageThree, pageFour);
	pageOne.fadeIn();
	bind();


})
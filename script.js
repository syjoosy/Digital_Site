// var base = 60;
//    var clocktimer,dateObj,dh,dm,ds,ms;
//    var readout='';
//    var h=1,m=1,tm=1,s=0,ts=0,ms=0,init=0;

//    //функция для очистки поля
//    function ClearСlock() {
//         clearTimeout(clocktimer);
//         h=1;m=1;tm=1;s=0;ts=0;ms=0;
//         init=0;
//         readout='00:00:00.00';
//         document.MyForm.stopwatch.value=readout;
//    }

//
// var activate;
// var startButton;
//
// function trim(string) { return string.replace (/\s+/g, " ").replace(/(^\s*)|(\s*)$/g, ''); }
// var init=0;
// var startDate;
// var clocktimer;
// var kolvo = 1;
//
// function clearALL() {
//   clearFields();
//   document.getElementById('marker').innerHTML = '';
// }
//
// function executeTimer(kolvo) {
//   var thisDate = new Date();
//   var t = thisDate.getTime() - startDate.getTime();
//   var ms = t%1000; t-=ms; ms=Math.floor(ms/10);
//   t = Math.floor (t/1000);
//   var s = t%60; t-=s;
//   t = Math.floor (t/60);
//   var m = t%60; t-=m;
//   t = Math.floor (t/60);
//   var h = t%60;
//   if (h<10) h='0'+h;
//   if (m<10) m='0'+m;
//   if (s<10) s='0'+s;
//   if (ms<10) ms='0'+ms;
//   // var clockform = "clockform_" + 2;
//   // var clock = "clock_" + 2;
//   // console.log(clockform)
//   // console.log(clock)
//   document.clockform.clock.value = h + ':' + m + ':' + s + '.' + ms;
//   clocktimer = setTimeout("executeTimer()",10);
// }
//
// function startTIME(kolvo) {
//   kolvo = 1;
//   let line = document.querySelector(".line");
//   let time = document.querySelector(".time");
//   let triangle = document.querySelector(".triangle");
//   let pause = document.querySelector(".pause");
//   let square = document.querySelector(".square");
//   let square_white = document.querySelector(".square-white");
//   console.log("startTIME")
//
//   if(!activate){
//
//     square.style.visibility="hidden";
//     square_white.style.visibility="visible";
//     triangle.style.visibility="hidden";
//     pause.style.visibility="visible";
//     time.style.color="#FFFFFF";
//     line.style.background="#FFFFFF";
//
//     startButton.value = "Pause";
//     activate = !activate;
//     if(startDate == undefined) startDate = new Date();
//     executeTimer(kolvo);
//     return;
//
//   }
//   else {
//     square.style.visibility="visible";
//     square_white.style.visibility="hidden";
//     triangle.style.visibility="visible";
//     pause.style.visibility="hidden";
//     time.style.color="#9E9E9E";
//     line.style.background="#9E9E9E";
//     startButton.value = "Start";
//     activate = !activate;
//     clearTimeout(clocktimer);
//     return;
//   }
// }
//
// function startTIME_original() {
//   if(!activate){
//     startButton.value = "Pause";
//     activate = !activate;
//     if(startDate == undefined) startDate = new Date();
//     executeTimer();
//     return;
//
//   }
//   else {
//     startButton.value = "Start";
//     activate = !activate;
//     clearTimeout(clocktimer);
//     return;
//   }
// }
//
//
// function stopALL(){
//   console.log("stopALL")
//   let line = document.querySelector(".line");
//   let time = document.querySelector(".time");
//   let triangle = document.querySelector(".triangle");
//   let pause = document.querySelector(".pause");
//   let square = document.querySelector(".square");
//   let square_white = document.querySelector(".square-white");
//   square.style.visibility="visible";
//   square_white.style.visibility="hidden";
//   triangle.style.visibility="visible";
//   pause.style.visibility="hidden";
//   time.style.color="#9E9E9E";
//   line.style.background="#696969";
//   clearTimeout(clocktimer);
//   startDate = undefined;
//   document.clockform.clock.value='00:00:00.00';
//   startButton.value = "Start";
//   activate = false;
// }
//
//
// function stopALL_original() {
// square.style.visibility="visible";
//   square_white.style.visibility="hidden";
//   triangle.style.visibility="visible";
//   pause.style.visibility="hidden";
//   time.style.color="#9E9E9E";
//   line.style.background="#696969";
//   clearTimeout(clocktimer);
//   startDate = undefined;
//   document.clockform.clock.value='00:00:00.00';
//   startButton.value = "Start";
//   activate = false;
// }
//
//
// function addTimer() {
//   console.log("addTimer")
//    kolvo++;
//    var newdiv = document.createElement("div");
//    newdiv.classList.add("timer");
//         newdiv.innerHTML = '<form name="clockform_'+ kolvo +'" class="mini-timer">\n<p>\n<input name="clock_'+ kolvo +'" size="12" maxlength="12" value="00:00:00.00" disabled="true" class="time">\n<img src="Vector.png" alt="ERROR" class="line">\n<button name="starter_'+ kolvo +'" type="button" value="Start" onclick="startTIME()" class="triangle"><img src="triangle.png" alt="ERROR"><\/button>\n<button name="starter_'+ kolvo +'" type="button" value="Start" onclick="startTIME()" class="pause"><img src="pause.png" alt="ERROR" style="padding: 0px 4px 0 0"><img src="pause.png" alt="ERROR"><\/button>\n<button name="stop_'+ kolvo +'" type="button" value="Stop" onclick="stopALL()" class="square"><img src="square.png" alt="ERROR"><\/button>\n<button name="stop_'+ kolvo +'" type="button" value="Stop" onclick="stopALL()" class="square-white"><img src="square-white.png" alt="ERROR"><\/button>\n<\/p>\n<\/form>';
//          //newdiv.appendTo('div#quest');
//          document.getElementById("big-timer").appendChild(newdiv);
//          return false;
// }
//
// window.onload = function() {
//   startButton = document.getElementsByName("starter")[0];
//   document.clockform.clock.value='00:00:00.00';
//   activate = false;
// }
console.log("Start script")
class StickyNavigation {

	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() {
			self.onTabClick(event, $(this));
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}

	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}

	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}

	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}

	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		}
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}

	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}

	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}

}

new StickyNavigation();

$(window).scroll(function() {
  var winHeight = $(window).height();
  var docHeight = $(document).height();
  var winScrolled = $(window).scrollTop();
  var docScrolled = $(document).scrollTop();
  var scrollPercent = 140 * winScrolled / (docHeight - winHeight);
  var main = $('#main').css('width', scrollPercent /1.1);
  $('#main').css('width', scrollPercent /1.1 + "%");
});


$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
  });


$(document).ready(function() {
	var windowHeight = $(window).height();

	$(document).on('scroll', function() {
		$('.trio').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('green')
			}
		});
	});
});

// Garden Gnome Software - Skin
// Pano2VR 7.1.9/20995
// Filename: YJHKHKHJKHJ.ggsk
// Generated 2025-06-10T02:59:26

function pano2vrSkin(player,base) {
	player.addVariable('opt_3d_preview', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_thumbnails', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._thumbnails_toggle=document.createElement('div');
		els=me._thumbnails_toggle__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN4PSIzMiIgY3k9IjMyIiByPSIyNyIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxyZWN0IHdpZHRoPSIxMC42NyIgaGVpZ2h0PSIxMC42NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2'+
			'U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4IiB5PSIzNy4zMyIgeD0iMTYiLz4KICA8cmVjdCB3aWR0aD0iMTAuNjciIGhlaWdodD0iMTAuNjciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweCIgeT0iMzcuMzMiIHg9IjM3LjMzIi8+CiAgPHJlY3Qgd2lkdGg9IjEwLjY3IiBoZWlnaHQ9IjEwLjY3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoycHgiIHk9IjE2IiB4PSIxNiIvPgogIDxyZWN0IHdpZHRoPSIx'+
			'MC42NyIgaGVpZ2h0PSIxMC42NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4IiB5PSIxNiIgeD0iMzcuMzMiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnails_toggle__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnails_toggle__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIgY3g9IjMyIiByPSIyNyIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxyZWN0IGhlaWdodD0iMTAuNjciIHdpZHRoPSIxMC42NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2'+
			'U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5PSIzNy4zMyIgeD0iMTYiLz4KICA8cmVjdCBoZWlnaHQ9IjEwLjY3IiB3aWR0aD0iMTAuNjciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeT0iMzcuMzMiIHg9IjM3LjMzIi8+CiAgPHJlY3QgaGVpZ2h0PSIxMC42NyIgd2lkdGg9IjEwLjY3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0'+
			'cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHk9IjE2IiB4PSIxNiIvPgogIDxyZWN0IGhlaWdodD0iMTAuNjciIHdpZHRoPSIxMC42NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5PSIxNiIgeD0iMzcuMzMiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnails_toggle__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnails_toggle";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_toggle.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails_toggle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_toggle.style.transition='';
				if (me._thumbnails_toggle.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_toggle.style.visibility="hidden";
					me._thumbnails_toggle.ggVisible=false;
				}
				else {
					me._thumbnails_toggle.style.visibility=(Number(me._thumbnails_toggle.style.opacity)>0||!me._thumbnails_toggle.style.opacity)?'inherit':'hidden';
					me._thumbnails_toggle.ggVisible=true;
				}
			}
		}
		me._thumbnails_toggle.logicBlock_visible();
		me._thumbnails_toggle.onclick=function (e) {
			player.setVariableValue('vis_thumbnails', !player.getVariableValue('vis_thumbnails'));
		}
		me._thumbnails_toggle.onmouseenter=function (e) {
			me._thumbnails_toggle__img.style.visibility='hidden';
			me._thumbnails_toggle__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnails_toggle']=true;
		}
		me._thumbnails_toggle.onmouseleave=function (e) {
			me._thumbnails_toggle__img.style.visibility='inherit';
			me._thumbnails_toggle__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnails_toggle']=false;
		}
		me._thumbnails_toggle.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._thumbnails_toggle);
		el=me._thumbnails_background_blur=document.createElement('div');
		el.ggId="thumbnails_background_blur";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_background_blur.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails_background_blur.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_background_blur.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_background_blur.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_background_blur.style.transition='';
				if (me._thumbnails_background_blur.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_background_blur.style.visibility=(Number(me._thumbnails_background_blur.style.opacity)>0||!me._thumbnails_background_blur.style.opacity)?'inherit':'hidden';
					me._thumbnails_background_blur.ggVisible=true;
				}
				else {
					me._thumbnails_background_blur.style.visibility="hidden";
					me._thumbnails_background_blur.ggVisible=false;
				}
			}
		}
		me._thumbnails_background_blur.logicBlock_visible();
		me._thumbnails_background_blur.onclick=function (e) {
			player.setVariableValue('vis_thumbnails', false);
		}
		me._thumbnails_background_blur.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._thumbnails_background_blur);
		el=me._thumbnails_fullscreen=document.createElement('div');
		el.ggId="thumbnails_fullscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : 85%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails') == true)) && 
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fullscreen.style.transition='';
				if (me._thumbnails_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fullscreen.style.visibility=(Number(me._thumbnails_fullscreen.style.opacity)>0||!me._thumbnails_fullscreen.style.opacity)?'inherit':'hidden';
					me._thumbnails_fullscreen.ggVisible=true;
				}
				else {
					me._thumbnails_fullscreen.style.visibility="hidden";
					me._thumbnails_fullscreen.ggVisible=false;
				}
			}
		}
		me._thumbnails_fullscreen.logicBlock_visible();
		me._thumbnails_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_fs_scroller=document.createElement('div');
		els=me._thumbnails_fs_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 127px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 127px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnails_fs_scroller.ggScrollByX = function(diffX) {
			if(!me._thumbnails_fs_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnails_fs_scroller.ggHPercentVisible >= 1.0) return;
			me._thumbnails_fs_scroller.ggScrollPosX = (me._thumbnails_fs_scroller__horScrollFg.offsetLeft + diffX);
			me._thumbnails_fs_scroller.ggScrollPosX = Math.max(me._thumbnails_fs_scroller.ggScrollPosX, 0);
			me._thumbnails_fs_scroller.ggScrollPosX = Math.min(me._thumbnails_fs_scroller.ggScrollPosX, me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
			me._thumbnails_fs_scroller__horScrollFg.style.left = me._thumbnails_fs_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosX / (me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
			me._thumbnails_fs_scroller__content.style.left = -(Math.round((me._thumbnails_fs_scroller.ggContentWidth * (1.0 - me._thumbnails_fs_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentLeftOffset + 'px';
			me._thumbnails_fs_scroller.ggScrollPosXPercent = (me._thumbnails_fs_scroller__horScrollFg.offsetLeft / me._thumbnails_fs_scroller__horScrollBg.offsetWidth);
		}
		me._thumbnails_fs_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnails_fs_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnails_fs_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnails_fs_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnails_fs_scroller.ggScrollPosX >= me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth)) {
					me._thumbnails_fs_scroller.ggScrollPosX = Math.min(me._thumbnails_fs_scroller.ggScrollPosX, me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnails_fs_scroller.ggScrollPosX <= 0)) {
					me._thumbnails_fs_scroller.ggScrollPosX = Math.max(me._thumbnails_fs_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnails_fs_scroller__horScrollFg.style.left = me._thumbnails_fs_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosX / (me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
			me._thumbnails_fs_scroller__content.style.left = -(Math.round((me._thumbnails_fs_scroller.ggContentWidth * (1.0 - me._thumbnails_fs_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentLeftOffset + 'px';
			me._thumbnails_fs_scroller.ggScrollPosXPercent = (me._thumbnails_fs_scroller__horScrollFg.offsetLeft / me._thumbnails_fs_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnails_fs_scroller.ggScrollByY = function(diffY) {
			if(!me._thumbnails_fs_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnails_fs_scroller.ggVPercentVisible >= 1.0) return;
			me._thumbnails_fs_scroller.ggScrollPosY = (me._thumbnails_fs_scroller__vertScrollFg.offsetTop + diffY);
			me._thumbnails_fs_scroller.ggScrollPosY = Math.max(me._thumbnails_fs_scroller.ggScrollPosY, 0);
			me._thumbnails_fs_scroller.ggScrollPosY = Math.min(me._thumbnails_fs_scroller.ggScrollPosY, me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_fs_scroller__vertScrollFg.style.top = me._thumbnails_fs_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosY / (me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_fs_scroller__content.style.top = -(Math.round((me._thumbnails_fs_scroller.ggContentHeight * (1.0 - me._thumbnails_fs_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentTopOffset + 'px';
			me._thumbnails_fs_scroller.ggScrollPosYPercent = (me._thumbnails_fs_scroller__vertScrollFg.offsetTop / me._thumbnails_fs_scroller__vertScrollBg.offsetHeight);
		}
		me._thumbnails_fs_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnails_fs_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnails_fs_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnails_fs_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnails_fs_scroller.ggScrollPosY >= me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight)) {
					me._thumbnails_fs_scroller.ggScrollPosY = Math.min(me._thumbnails_fs_scroller.ggScrollPosY, me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnails_fs_scroller.ggScrollPosY <= 0)) {
					me._thumbnails_fs_scroller.ggScrollPosY = Math.max(me._thumbnails_fs_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnails_fs_scroller__vertScrollFg.style.top = me._thumbnails_fs_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosY / (me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_fs_scroller__content.style.top = -(Math.round((me._thumbnails_fs_scroller.ggContentHeight * (1.0 - me._thumbnails_fs_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentTopOffset + 'px';
			me._thumbnails_fs_scroller.ggScrollPosYPercent = (me._thumbnails_fs_scroller__vertScrollFg.offsetTop / me._thumbnails_fs_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnails_fs_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnails_fs_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnails_fs_scroller.ggHPercentVisible);
					me._thumbnails_fs_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnails_fs_scroller.clientWidth - (me._thumbnails_fs_scroller.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnails_fs_scroller.clientWidth - (me._thumbnails_fs_scroller.ggVertScrollVisible ? 5 : 0))) * me._thumbnails_fs_scroller.ggHPercentVisible);
					me._thumbnails_fs_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnails_fs_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnails_fs_scroller.ggVPercentVisible);
					me._thumbnails_fs_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnails_fs_scroller.clientHeight - (me._thumbnails_fs_scroller.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnails_fs_scroller.clientHeight - (me._thumbnails_fs_scroller.ggHorScrollVisible ? 5 : 0))) * me._thumbnails_fs_scroller.ggVPercentVisible);
					me._thumbnails_fs_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnails_fs_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnails_fs_scroller.ggDragInertiaX *= 0.96;
				me._thumbnails_fs_scroller.ggDragInertiaY *= 0.96;
				me._thumbnails_fs_scroller.ggScrollByX(me._thumbnails_fs_scroller.ggDragInertiaX);
				me._thumbnails_fs_scroller.ggScrollByY(me._thumbnails_fs_scroller.ggDragInertiaY);
				if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnails_fs_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnails_fs_scroller__content.onmouseup = null;
			me._thumbnails_fs_scroller__content.onmousemove = null;
			me._thumbnails_fs_scroller__content.ontouchend = null;
			me._thumbnails_fs_scroller__content.ontouchmove = null;
			me._thumbnails_fs_scroller__content.onpointerup = null;
			me._thumbnails_fs_scroller__content.onpointermove = null;
			setTimeout(function() { me._thumbnails_fs_scroller.ggIsDragging = false; }, 100);
		}
		me._thumbnails_fs_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnails_fs_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnails_fs_scroller.ggDragStartY) > 10) me._thumbnails_fs_scroller.ggIsDragging = true;
			var diffX = (eventX - me._thumbnails_fs_scroller.ggDragLastX) * me._thumbnails_fs_scroller.ggHPercentVisible;
			var diffY = (eventY - me._thumbnails_fs_scroller.ggDragLastY) * me._thumbnails_fs_scroller.ggVPercentVisible;
			me._thumbnails_fs_scroller.ggDragInertiaX = -diffX;
			me._thumbnails_fs_scroller.ggDragInertiaY = -diffY;
			me._thumbnails_fs_scroller.ggDragLastX = eventX;
			me._thumbnails_fs_scroller.ggDragLastY = eventY;
			me._thumbnails_fs_scroller.ggScrollByX(-diffX);
			me._thumbnails_fs_scroller.ggScrollByY(-diffY);
		}
		me._thumbnails_fs_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnails_fs_scroller.ggDragLastX = me._thumbnails_fs_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnails_fs_scroller.ggDragLastY = me._thumbnails_fs_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnails_fs_scroller__content.onmouseup = me._thumbnails_fs_scroller__content.mousetouchend;
			me._thumbnails_fs_scroller__content.ontouchend = me._thumbnails_fs_scroller__content.mousetouchend;
			me._thumbnails_fs_scroller__content.onmousemove = me._thumbnails_fs_scroller__content.mousetouchmove;
			me._thumbnails_fs_scroller__content.ontouchmove = me._thumbnails_fs_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnails_fs_scroller__content.onpointerup = me._thumbnails_fs_scroller__content.ontouchend;
				me._thumbnails_fs_scroller__content.onpointermove = me._thumbnails_fs_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnails_fs_scroller__content.mousetouchstart;
		els.ontouchstart = me._thumbnails_fs_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnails_fs_scroller__content.mousetouchstart;
		}
		elHorScrollBg = me._thumbnails_fs_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 495px; height: 5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnails_fs_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 495px; height: 5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnails_fs_scroller.ggScrollPosX = 0;
		me._thumbnails_fs_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnails_fs_scroller.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_fs_scroller.ggDragInertiaX *= 0.96;
					me._thumbnails_fs_scroller.ggScrollByX(me._thumbnails_fs_scroller.ggDragInertiaX);
					if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnails_fs_scroller.ggDragLastX;
				me._thumbnails_fs_scroller.ggDragInertiaX = diffX;
				me._thumbnails_fs_scroller.ggDragLastX = e.clientX;
				me._thumbnails_fs_scroller.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnails_fs_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_fs_scroller.ggDragInertiaX *= 0.96;
					me._thumbnails_fs_scroller.ggScrollByX(me._thumbnails_fs_scroller.ggDragInertiaX);
					if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnails_fs_scroller.ggDragLastX;
				me._thumbnails_fs_scroller.ggDragInertiaX = diffX;
				me._thumbnails_fs_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnails_fs_scroller.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnails_fs_scroller.ggScrollWidth;
			if (e.offsetX < me._thumbnails_fs_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnails_fs_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnails_fs_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnails_fs_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnails_fs_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnails_fs_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnails_fs_scroller.ggScrollByXSmooth(30 * me._thumbnails_fs_scroller.ggHPercentVisible * wheelDelta);
		});
		elVertScrollBg = me._thumbnails_fs_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 347px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnails_fs_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 347px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnails_fs_scroller.ggScrollPosY = 0;
		me._thumbnails_fs_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnails_fs_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_fs_scroller.ggDragInertiaY *= 0.96;
					me._thumbnails_fs_scroller.ggScrollByY(me._thumbnails_fs_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnails_fs_scroller.ggDragLastY;
				me._thumbnails_fs_scroller.ggDragInertiaY = diffY;
				me._thumbnails_fs_scroller.ggDragLastY = e.clientY;
				me._thumbnails_fs_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnails_fs_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_fs_scroller.ggDragInertiaY *= 0.96;
					me._thumbnails_fs_scroller.ggScrollByY(me._thumbnails_fs_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnails_fs_scroller.ggDragLastY;
				me._thumbnails_fs_scroller.ggDragInertiaY = diffY;
				me._thumbnails_fs_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnails_fs_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnails_fs_scroller.ggScrollHeight;
			if (e.offsetY < me._thumbnails_fs_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnails_fs_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnails_fs_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnails_fs_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnails_fs_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnails_fs_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnails_fs_scroller.ggScrollByYSmooth(30 * me._thumbnails_fs_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnails_fs_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnails_fs_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% -  54px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 34px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_scroller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fs_scroller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fs_scroller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fs_scroller.style.transition='';
				if (me._thumbnails_fs_scroller.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fs_scroller.style.visibility="hidden";
					me._thumbnails_fs_scroller.ggVisible=false;
				}
				else {
					me._thumbnails_fs_scroller.style.visibility=(Number(me._thumbnails_fs_scroller.style.opacity)>0||!me._thumbnails_fs_scroller.style.opacity)?'inherit':'hidden';
					me._thumbnails_fs_scroller.ggVisible=true;
				}
			}
		}
		me._thumbnails_fs_scroller.logicBlock_visible();
		me._thumbnails_fs_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._thumbnails_fs_scroller.ggScrollPosX / me._thumbnails_fs_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._thumbnails_fs_scroller.ggScrollPosY / me._thumbnails_fs_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnails_fs_scroller__horScrollBg.style.visibility = 'inherit';
					me._thumbnails_fs_scroller__horScrollFg.style.visibility = 'inherit';
					me._thumbnails_fs_scroller.ggHorScrollVisible = true;
				} else {
					me._thumbnails_fs_scroller__horScrollBg.style.visibility = 'hidden';
					me._thumbnails_fs_scroller__horScrollFg.style.visibility = 'hidden';
					me._thumbnails_fs_scroller.ggHorScrollVisible = false;
				}
				if ((me._thumbnails_fs_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 5) || (!me._thumbnails_fs_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnails_fs_scroller__vertScrollBg.style.visibility = 'inherit';
					me._thumbnails_fs_scroller__vertScrollFg.style.visibility = 'inherit';
					me._thumbnails_fs_scroller.ggVertScrollVisible = true;
					if (!me._thumbnails_fs_scroller.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me._thumbnails_fs_scroller__vertScrollBg.getBoundingClientRect().width)) {
						me._thumbnails_fs_scroller__horScrollBg.style.visibility = 'inherit';
						me._thumbnails_fs_scroller__horScrollFg.style.visibility = 'inherit';
						me._thumbnails_fs_scroller.ggHorScrollVisible = true;
					}
				} else {
					me._thumbnails_fs_scroller__vertScrollBg.style.visibility = 'hidden';
					me._thumbnails_fs_scroller__vertScrollFg.style.visibility = 'hidden';
					me._thumbnails_fs_scroller.ggVertScrollVisible = false;
				}
				if(me._thumbnails_fs_scroller.ggHorScrollVisible) {
					me._thumbnails_fs_scroller.ggAvailableHeight = me._thumbnails_fs_scroller.clientHeight - 5;
					if (me._thumbnails_fs_scroller.ggVertScrollVisible) {
						me._thumbnails_fs_scroller.ggAvailableWidth = me._thumbnails_fs_scroller.clientWidth - 5;
						me._thumbnails_fs_scroller.ggAvailableWidthWithScale = me._thumbnails_fs_scroller.getBoundingClientRect().width - me._thumbnails_fs_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnails_fs_scroller.ggAvailableWidth = me._thumbnails_fs_scroller.clientWidth;
						me._thumbnails_fs_scroller.ggAvailableWidthWithScale = me._thumbnails_fs_scroller.getBoundingClientRect().width;
					}
					me._thumbnails_fs_scroller__horScrollBg.style.width = me._thumbnails_fs_scroller.ggAvailableWidth + 'px';
					me._thumbnails_fs_scroller.ggHPercentVisible = contentWidth != 0 ? me._thumbnails_fs_scroller.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnails_fs_scroller.ggHPercentVisible > 1.0) me._thumbnails_fs_scroller.ggHPercentVisible = 1.0;
					me._thumbnails_fs_scroller.ggScrollWidth = Math.round(me._thumbnails_fs_scroller__horScrollBg.offsetWidth * me._thumbnails_fs_scroller.ggHPercentVisible);
					me._thumbnails_fs_scroller__horScrollFg.style.width = me._thumbnails_fs_scroller.ggScrollWidth + 'px';
					me._thumbnails_fs_scroller.ggScrollPosX = me._thumbnails_fs_scroller.ggScrollPosXPercent * me._thumbnails_fs_scroller.ggAvailableWidth;
					me._thumbnails_fs_scroller.ggScrollPosX = Math.min(me._thumbnails_fs_scroller.ggScrollPosX, me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
					me._thumbnails_fs_scroller__horScrollFg.style.left = me._thumbnails_fs_scroller.ggScrollPosX + 'px';
					if (me._thumbnails_fs_scroller.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosX / (me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
						me._thumbnails_fs_scroller__content.style.left = -(Math.round((me._thumbnails_fs_scroller.ggContentWidth * (1.0 - me._thumbnails_fs_scroller.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnails_fs_scroller.ggAvailableHeight = me._thumbnails_fs_scroller.clientHeight;
					me._thumbnails_fs_scroller.ggScrollPosX = 0;
					me._thumbnails_fs_scroller.ggScrollPosXPercent = 0.0;
					me._thumbnails_fs_scroller__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me._thumbnails_fs_scroller.ggVertScrollVisible) {
					me._thumbnails_fs_scroller.ggAvailableWidth = me._thumbnails_fs_scroller.clientWidth - 5;
					if (me._thumbnails_fs_scroller.ggHorScrollVisible) {
						me._thumbnails_fs_scroller.ggAvailableHeight = me._thumbnails_fs_scroller.clientHeight - 5;
						me._thumbnails_fs_scroller.ggAvailableHeightWithScale = me._thumbnails_fs_scroller.getBoundingClientRect().height - me._thumbnails_fs_scroller__vertScrollBg.getBoundingClientRect().width;
						me._thumbnails_fs_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnails_fs_scroller.ggAvailableHeight = me._thumbnails_fs_scroller.clientHeight;
						me._thumbnails_fs_scroller.ggAvailableHeightWithScale = me._thumbnails_fs_scroller.getBoundingClientRect().height;
						me._thumbnails_fs_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnails_fs_scroller__vertScrollBg.style.height = me._thumbnails_fs_scroller.ggAvailableHeight + 'px';
					me._thumbnails_fs_scroller.ggVPercentVisible = contentHeight != 0 ? me._thumbnails_fs_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnails_fs_scroller.ggVPercentVisible > 1.0) me._thumbnails_fs_scroller.ggVPercentVisible = 1.0;
					me._thumbnails_fs_scroller.ggScrollHeight =  Math.round(me._thumbnails_fs_scroller__vertScrollBg.offsetHeight * me._thumbnails_fs_scroller.ggVPercentVisible);
					me._thumbnails_fs_scroller__vertScrollFg.style.height = me._thumbnails_fs_scroller.ggScrollHeight + 'px';
					me._thumbnails_fs_scroller.ggScrollPosY = me._thumbnails_fs_scroller.ggScrollPosYPercent * me._thumbnails_fs_scroller.ggAvailableHeight;
					me._thumbnails_fs_scroller.ggScrollPosY = Math.min(me._thumbnails_fs_scroller.ggScrollPosY, me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
					me._thumbnails_fs_scroller__vertScrollFg.style.top = me._thumbnails_fs_scroller.ggScrollPosY + 'px';
					if (me._thumbnails_fs_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosY / (me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
						me._thumbnails_fs_scroller__content.style.top = -(Math.round((me._thumbnails_fs_scroller.ggContentHeight * (1.0 - me._thumbnails_fs_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnails_fs_scroller.ggAvailableWidth = me._thumbnails_fs_scroller.clientWidth;
					me._thumbnails_fs_scroller.ggScrollPosY = 0;
					me._thumbnails_fs_scroller.ggScrollPosYPercent = 0.0;
					me._thumbnails_fs_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnails_fs_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnails_fs_scroller.ggHorScrollVisible || vertScrollWasVisible != me._thumbnails_fs_scroller.ggVertScrollVisible) {
					skin.updateSize(me._thumbnails_fs_scroller);
					me._thumbnails_fs_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnails_fs_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 128;
		el.ggHeight = 128;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnails_fs_cloner.ggUpdating == true) return;
			me._thumbnails_fs_cloner.ggUpdating = true;
			var el=me._thumbnails_fs_cloner;
			var curNumCols = 0;
			var parentWidth = me._thumbnails_fs_cloner.parentNode.classList.contains('ggskin_subelement') ? (me._thumbnails_fs_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._thumbnails_fs_cloner.parentNode.parentNode.ggAvailableWidth : me._thumbnails_fs_cloner.parentNode.parentNode.clientWidth) : me._thumbnails_fs_cloner.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._thumbnails_fs_cloner.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._thumbnails_fs_cloner.offsetLeft) * me._thumbnails_fs_cloner.ggNumRepeat / 100.0) / me._thumbnails_fs_cloner.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnails_fs_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnails_fs_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbnails_fs_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnails_fs_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnails_fs_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnails_fs_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnails_fs_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnails_fs_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnails_fs_cloner.ggWidth + 'px';
				parameter.height=me._thumbnails_fs_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnails_fs_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._thumbnails_fs_cloner.ggNodeCount = me._thumbnails_fs_cloner.ggNumFilterPassed;
			me._thumbnails_fs_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnails_fs_cloner.parentNode && me._thumbnails_fs_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnails_fs_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnails_fs_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnails_fs_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnails_fs_cloner.childNodes.length; i++) {
				var child=me._thumbnails_fs_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnails_fs_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnails_fs_cloner.ggUpdate();
		}
		me._thumbnails_fs_scroller__content.appendChild(me._thumbnails_fs_cloner);
		me._thumbnails_fullscreen.appendChild(me._thumbnails_fs_scroller);
		el=me._thumbnails_fs_close=document.createElement('div');
		els=me._thumbnails_fs_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB5Mj0iNDMuMzEiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4Mj0iNDMuMzEiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHkyPSI0My4zMSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgyPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_fs_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnails_fs_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIgY3g9IjMyIiByPSIyNyIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeTI9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3'+
			'Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeDI9IjQzLjMxIi8+CiAgPGxpbmUgeDE9IjQzLjMxIiB5Mj0iNDMuMzEiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4Mj0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnails_fs_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnails_fs_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_close.onclick=function (e) {
			player.setVariableValue('vis_thumbnails', false);
		}
		me._thumbnails_fs_close.onmouseenter=function (e) {
			me._thumbnails_fs_close__img.style.visibility='hidden';
			me._thumbnails_fs_close__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnails_fs_close']=true;
		}
		me._thumbnails_fs_close.onmouseleave=function (e) {
			me._thumbnails_fs_close__img.style.visibility='inherit';
			me._thumbnails_fs_close__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnails_fs_close']=false;
		}
		me._thumbnails_fs_close.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fullscreen.appendChild(me._thumbnails_fs_close);
		me.divSkin.appendChild(me._thumbnails_fullscreen);
		el=me._thumbnails_fullscreen_phone=document.createElement('div');
		el.ggId="thumbnails_fullscreen_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 40px);';
		hs+='left : calc(50% - ((calc(100% - 40px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 40px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fullscreen_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails_fullscreen_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails') == true)) && 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fullscreen_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fullscreen_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fullscreen_phone.style.transition='';
				if (me._thumbnails_fullscreen_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fullscreen_phone.style.visibility=(Number(me._thumbnails_fullscreen_phone.style.opacity)>0||!me._thumbnails_fullscreen_phone.style.opacity)?'inherit':'hidden';
					me._thumbnails_fullscreen_phone.ggVisible=true;
				}
				else {
					me._thumbnails_fullscreen_phone.style.visibility="hidden";
					me._thumbnails_fullscreen_phone.ggVisible=false;
				}
			}
		}
		me._thumbnails_fullscreen_phone.logicBlock_visible();
		me._thumbnails_fullscreen_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_scroller_phone=document.createElement('div');
		els=me._thumbnails_scroller_phone__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 127px;';
		hs+='left : 50%;';
		hs+='margin-left : -63.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 127px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnails_scroller_phone.ggScrollByX = function(diffX) {
			if(!me._thumbnails_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnails_scroller_phone.ggHPercentVisible >= 1.0) return;
			me._thumbnails_scroller_phone.ggScrollPosX = (me._thumbnails_scroller_phone__horScrollFg.offsetLeft + diffX);
			me._thumbnails_scroller_phone.ggScrollPosX = Math.max(me._thumbnails_scroller_phone.ggScrollPosX, 0);
			me._thumbnails_scroller_phone.ggScrollPosX = Math.min(me._thumbnails_scroller_phone.ggScrollPosX, me._thumbnails_scroller_phone__horScrollBg.offsetWidth - me._thumbnails_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnails_scroller_phone__horScrollFg.style.left = me._thumbnails_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnails_scroller_phone.ggScrollPosX / (me._thumbnails_scroller_phone__horScrollBg.offsetWidth - me._thumbnails_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnails_scroller_phone__content.style.left = -(Math.round((me._thumbnails_scroller_phone.ggContentWidth * (1.0 - me._thumbnails_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnails_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnails_scroller_phone.ggScrollPosXPercent = (me._thumbnails_scroller_phone__horScrollFg.offsetLeft / me._thumbnails_scroller_phone__horScrollBg.offsetWidth);
		}
		me._thumbnails_scroller_phone.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnails_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnails_scroller_phone.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnails_scroller_phone.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnails_scroller_phone.ggScrollPosX >= me._thumbnails_scroller_phone__horScrollBg.offsetWidth - me._thumbnails_scroller_phone__horScrollFg.offsetWidth)) {
					me._thumbnails_scroller_phone.ggScrollPosX = Math.min(me._thumbnails_scroller_phone.ggScrollPosX, me._thumbnails_scroller_phone__horScrollBg.offsetWidth - me._thumbnails_scroller_phone__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnails_scroller_phone.ggScrollPosX <= 0)) {
					me._thumbnails_scroller_phone.ggScrollPosX = Math.max(me._thumbnails_scroller_phone.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnails_scroller_phone__horScrollFg.style.left = me._thumbnails_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnails_scroller_phone.ggScrollPosX / (me._thumbnails_scroller_phone__horScrollBg.offsetWidth - me._thumbnails_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnails_scroller_phone__content.style.left = -(Math.round((me._thumbnails_scroller_phone.ggContentWidth * (1.0 - me._thumbnails_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnails_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnails_scroller_phone.ggScrollPosXPercent = (me._thumbnails_scroller_phone__horScrollFg.offsetLeft / me._thumbnails_scroller_phone__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnails_scroller_phone.ggScrollByY = function(diffY) {
			if(!me._thumbnails_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnails_scroller_phone.ggVPercentVisible >= 1.0) return;
			me._thumbnails_scroller_phone.ggScrollPosY = (me._thumbnails_scroller_phone__vertScrollFg.offsetTop + diffY);
			me._thumbnails_scroller_phone.ggScrollPosY = Math.max(me._thumbnails_scroller_phone.ggScrollPosY, 0);
			me._thumbnails_scroller_phone.ggScrollPosY = Math.min(me._thumbnails_scroller_phone.ggScrollPosY, me._thumbnails_scroller_phone__vertScrollBg.offsetHeight - me._thumbnails_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnails_scroller_phone__vertScrollFg.style.top = me._thumbnails_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnails_scroller_phone.ggScrollPosY / (me._thumbnails_scroller_phone__vertScrollBg.offsetHeight - me._thumbnails_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnails_scroller_phone__content.style.top = -(Math.round((me._thumbnails_scroller_phone.ggContentHeight * (1.0 - me._thumbnails_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnails_scroller_phone.ggScrollPosYPercent = (me._thumbnails_scroller_phone__vertScrollFg.offsetTop / me._thumbnails_scroller_phone__vertScrollBg.offsetHeight);
		}
		me._thumbnails_scroller_phone.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnails_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnails_scroller_phone.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnails_scroller_phone.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnails_scroller_phone.ggScrollPosY >= me._thumbnails_scroller_phone__vertScrollBg.offsetHeight - me._thumbnails_scroller_phone__vertScrollFg.offsetHeight)) {
					me._thumbnails_scroller_phone.ggScrollPosY = Math.min(me._thumbnails_scroller_phone.ggScrollPosY, me._thumbnails_scroller_phone__vertScrollBg.offsetHeight - me._thumbnails_scroller_phone__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnails_scroller_phone.ggScrollPosY <= 0)) {
					me._thumbnails_scroller_phone.ggScrollPosY = Math.max(me._thumbnails_scroller_phone.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnails_scroller_phone__vertScrollFg.style.top = me._thumbnails_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnails_scroller_phone.ggScrollPosY / (me._thumbnails_scroller_phone__vertScrollBg.offsetHeight - me._thumbnails_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnails_scroller_phone__content.style.top = -(Math.round((me._thumbnails_scroller_phone.ggContentHeight * (1.0 - me._thumbnails_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnails_scroller_phone.ggScrollPosYPercent = (me._thumbnails_scroller_phone__vertScrollFg.offsetTop / me._thumbnails_scroller_phone__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnails_scroller_phone.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnails_scroller_phone.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnails_scroller_phone.ggHPercentVisible);
					me._thumbnails_scroller_phone.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnails_scroller_phone.clientWidth - (me._thumbnails_scroller_phone.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnails_scroller_phone.clientWidth - (me._thumbnails_scroller_phone.ggVertScrollVisible ? 8 : 0))) * me._thumbnails_scroller_phone.ggHPercentVisible);
					me._thumbnails_scroller_phone.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnails_scroller_phone.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnails_scroller_phone.ggVPercentVisible);
					me._thumbnails_scroller_phone.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnails_scroller_phone.clientHeight - (me._thumbnails_scroller_phone.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnails_scroller_phone.clientHeight - (me._thumbnails_scroller_phone.ggHorScrollVisible ? 8 : 0))) * me._thumbnails_scroller_phone.ggVPercentVisible);
					me._thumbnails_scroller_phone.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnails_scroller_phone__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnails_scroller_phone.ggDragInertiaX *= 0.96;
				me._thumbnails_scroller_phone.ggDragInertiaY *= 0.96;
				me._thumbnails_scroller_phone.ggScrollByX(me._thumbnails_scroller_phone.ggDragInertiaX);
				me._thumbnails_scroller_phone.ggScrollByY(me._thumbnails_scroller_phone.ggDragInertiaY);
				if (Math.abs(me._thumbnails_scroller_phone.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnails_scroller_phone.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnails_scroller_phone__content.onmouseup = null;
			me._thumbnails_scroller_phone__content.onmousemove = null;
			me._thumbnails_scroller_phone__content.ontouchend = null;
			me._thumbnails_scroller_phone__content.ontouchmove = null;
			me._thumbnails_scroller_phone__content.onpointerup = null;
			me._thumbnails_scroller_phone__content.onpointermove = null;
			setTimeout(function() { me._thumbnails_scroller_phone.ggIsDragging = false; }, 100);
		}
		me._thumbnails_scroller_phone__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnails_scroller_phone.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnails_scroller_phone.ggDragStartY) > 10) me._thumbnails_scroller_phone.ggIsDragging = true;
			var diffX = (eventX - me._thumbnails_scroller_phone.ggDragLastX) * me._thumbnails_scroller_phone.ggHPercentVisible;
			var diffY = (eventY - me._thumbnails_scroller_phone.ggDragLastY) * me._thumbnails_scroller_phone.ggVPercentVisible;
			me._thumbnails_scroller_phone.ggDragInertiaX = -diffX;
			me._thumbnails_scroller_phone.ggDragInertiaY = -diffY;
			me._thumbnails_scroller_phone.ggDragLastX = eventX;
			me._thumbnails_scroller_phone.ggDragLastY = eventY;
			me._thumbnails_scroller_phone.ggScrollByX(-diffX);
			me._thumbnails_scroller_phone.ggScrollByY(-diffY);
		}
		me._thumbnails_scroller_phone__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnails_scroller_phone.ggDragLastX = me._thumbnails_scroller_phone.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnails_scroller_phone.ggDragLastY = me._thumbnails_scroller_phone.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnails_scroller_phone__content.onmouseup = me._thumbnails_scroller_phone__content.mousetouchend;
			me._thumbnails_scroller_phone__content.ontouchend = me._thumbnails_scroller_phone__content.mousetouchend;
			me._thumbnails_scroller_phone__content.onmousemove = me._thumbnails_scroller_phone__content.mousetouchmove;
			me._thumbnails_scroller_phone__content.ontouchmove = me._thumbnails_scroller_phone__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnails_scroller_phone__content.onpointerup = me._thumbnails_scroller_phone__content.ontouchend;
				me._thumbnails_scroller_phone__content.onpointermove = me._thumbnails_scroller_phone__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnails_scroller_phone__content.mousetouchstart;
		els.ontouchstart = me._thumbnails_scroller_phone__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnails_scroller_phone__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnails_scroller_phone__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 356px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnails_scroller_phone__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 356px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnails_scroller_phone.ggScrollPosY = 0;
		me._thumbnails_scroller_phone.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnails_scroller_phone.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnails_scroller_phone.ggScrollByY(me._thumbnails_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnails_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnails_scroller_phone.ggDragLastY;
				me._thumbnails_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnails_scroller_phone.ggDragLastY = e.clientY;
				me._thumbnails_scroller_phone.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnails_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnails_scroller_phone.ggScrollByY(me._thumbnails_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnails_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnails_scroller_phone.ggDragLastY;
				me._thumbnails_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnails_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnails_scroller_phone.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnails_scroller_phone.ggScrollHeight;
			if (e.offsetY < me._thumbnails_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnails_scroller_phone.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnails_scroller_phone__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnails_scroller_phone.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnails_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnails_scroller_phone.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnails_scroller_phone.ggScrollByYSmooth(30 * me._thumbnails_scroller_phone.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnails_scroller_phone__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnails_scroller_phone";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 70px);';
		hs+='left : calc(50% - ((calc(100% - 40px) + 0px) / 2) + 1px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_scroller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_scroller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_scroller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_scroller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_scroller_phone.style.transition='';
				if (me._thumbnails_scroller_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_scroller_phone.style.visibility=(Number(me._thumbnails_scroller_phone.style.opacity)>0||!me._thumbnails_scroller_phone.style.opacity)?'inherit':'hidden';
					me._thumbnails_scroller_phone.ggVisible=true;
				}
				else {
					me._thumbnails_scroller_phone.style.visibility="hidden";
					me._thumbnails_scroller_phone.ggVisible=false;
				}
			}
		}
		me._thumbnails_scroller_phone.logicBlock_visible();
		me._thumbnails_scroller_phone.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnails_scroller_phone.ggScrollPosY / me._thumbnails_scroller_phone.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnails_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnails_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnails_scroller_phone__vertScrollBg.style.visibility = 'inherit';
					me._thumbnails_scroller_phone__vertScrollFg.style.visibility = 'inherit';
					me._thumbnails_scroller_phone.ggVertScrollVisible = true;
				} else {
					me._thumbnails_scroller_phone__vertScrollBg.style.visibility = 'hidden';
					me._thumbnails_scroller_phone__vertScrollFg.style.visibility = 'hidden';
					me._thumbnails_scroller_phone.ggVertScrollVisible = false;
				}
				if(me._thumbnails_scroller_phone.ggVertScrollVisible) {
					me._thumbnails_scroller_phone.ggAvailableWidth = me._thumbnails_scroller_phone.clientWidth - 8;
					if (me._thumbnails_scroller_phone.ggHorScrollVisible) {
						me._thumbnails_scroller_phone.ggAvailableHeight = me._thumbnails_scroller_phone.clientHeight - 8;
						me._thumbnails_scroller_phone.ggAvailableHeightWithScale = me._thumbnails_scroller_phone.getBoundingClientRect().height - me._thumbnails_scroller_phone__vertScrollBg.getBoundingClientRect().width;
						me._thumbnails_scroller_phone__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnails_scroller_phone.ggAvailableHeight = me._thumbnails_scroller_phone.clientHeight;
						me._thumbnails_scroller_phone.ggAvailableHeightWithScale = me._thumbnails_scroller_phone.getBoundingClientRect().height;
						me._thumbnails_scroller_phone__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnails_scroller_phone__vertScrollBg.style.height = me._thumbnails_scroller_phone.ggAvailableHeight + 'px';
					me._thumbnails_scroller_phone.ggVPercentVisible = contentHeight != 0 ? me._thumbnails_scroller_phone.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnails_scroller_phone.ggVPercentVisible > 1.0) me._thumbnails_scroller_phone.ggVPercentVisible = 1.0;
					me._thumbnails_scroller_phone.ggScrollHeight =  Math.round(me._thumbnails_scroller_phone__vertScrollBg.offsetHeight * me._thumbnails_scroller_phone.ggVPercentVisible);
					me._thumbnails_scroller_phone__vertScrollFg.style.height = me._thumbnails_scroller_phone.ggScrollHeight + 'px';
					me._thumbnails_scroller_phone.ggScrollPosY = me._thumbnails_scroller_phone.ggScrollPosYPercent * me._thumbnails_scroller_phone.ggAvailableHeight;
					me._thumbnails_scroller_phone.ggScrollPosY = Math.min(me._thumbnails_scroller_phone.ggScrollPosY, me._thumbnails_scroller_phone__vertScrollBg.offsetHeight - me._thumbnails_scroller_phone__vertScrollFg.offsetHeight);
					me._thumbnails_scroller_phone__vertScrollFg.style.top = me._thumbnails_scroller_phone.ggScrollPosY + 'px';
					if (me._thumbnails_scroller_phone.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnails_scroller_phone.ggScrollPosY / (me._thumbnails_scroller_phone__vertScrollBg.offsetHeight - me._thumbnails_scroller_phone__vertScrollFg.offsetHeight);
						me._thumbnails_scroller_phone__content.style.top = -(Math.round((me._thumbnails_scroller_phone.ggContentHeight * (1.0 - me._thumbnails_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_scroller_phone.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnails_scroller_phone.ggAvailableWidth = me._thumbnails_scroller_phone.clientWidth;
					me._thumbnails_scroller_phone.ggScrollPosY = 0;
					me._thumbnails_scroller_phone.ggScrollPosYPercent = 0.0;
					me._thumbnails_scroller_phone__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnails_scroller_phone__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnails_scroller_phone.ggHorScrollVisible || vertScrollWasVisible != me._thumbnails_scroller_phone.ggVertScrollVisible) {
					skin.updateSize(me._thumbnails_scroller_phone);
					me._thumbnails_scroller_phone.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 128;
		el.ggHeight = 128;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone.ggUpdating == true) return;
			me._node_cloner_phone.ggUpdating = true;
			var el=me._node_cloner_phone;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone.parentNode.parentNode.clientWidth) : me._node_cloner_phone.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone.offsetLeft) * me._node_cloner_phone.ggNumRepeat / 100.0) / me._node_cloner_phone.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone.ggWidth + 'px';
				parameter.height=me._node_cloner_phone.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone.ggNodeCount = me._node_cloner_phone.ggNumFilterPassed;
			me._node_cloner_phone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone.parentNode && me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_phone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone.childNodes.length; i++) {
				var child=me._node_cloner_phone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone.ggUpdate();
		}
		me._thumbnails_scroller_phone__content.appendChild(me._node_cloner_phone);
		me._thumbnails_fullscreen_phone.appendChild(me._thumbnails_scroller_phone);
		el=me._thumbnails_fs_phone_close=document.createElement('div');
		els=me._thumbnails_fs_phone_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB5Mj0iNDMuMzEiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB4Mj0iNDMuMzEiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHkyPSI0My4zMSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHgyPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_fs_phone_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnails_fs_phone_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIgY3g9IjMyIiByPSIyNyIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeTI9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3'+
			'Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeDI9IjQzLjMxIi8+CiAgPGxpbmUgeDE9IjQzLjMxIiB5Mj0iNDMuMzEiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB4Mj0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnails_fs_phone_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnails_fs_phone_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_phone_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_phone_close.onclick=function (e) {
			player.setVariableValue('vis_thumbnails', false);
		}
		me._thumbnails_fs_phone_close.onmouseenter=function (e) {
			me._thumbnails_fs_phone_close__img.style.visibility='hidden';
			me._thumbnails_fs_phone_close__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnails_fs_phone_close']=true;
		}
		me._thumbnails_fs_phone_close.onmouseleave=function (e) {
			me._thumbnails_fs_phone_close__img.style.visibility='inherit';
			me._thumbnails_fs_phone_close__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnails_fs_phone_close']=false;
		}
		me._thumbnails_fs_phone_close.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fullscreen_phone.appendChild(me._thumbnails_fs_phone_close);
		me.divSkin.appendChild(me._thumbnails_fullscreen_phone);
		el=me._local_fonts=document.createElement('div');
		el.ggId="local_fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._local_fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._local_fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._local_fonts);
		me._thumbnails_toggle.logicBlock_visible();
		me.elementMouseOver['thumbnails_toggle']=false;
		me._thumbnails_background_blur.logicBlock_visible();
		me._thumbnails_fullscreen.logicBlock_visible();
		me._thumbnails_fs_scroller.logicBlock_visible();
		me.elementMouseOver['thumbnails_fs_close']=false;
		me._thumbnails_fullscreen_phone.logicBlock_visible();
		me._thumbnails_scroller_phone.logicBlock_visible();
		me.elementMouseOver['thumbnails_fs_phone_close']=false;
		el = me._local_fonts;
		;
		player.addListener('activehotspotchanged', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
			for(var i = 0; i < me._thumbnails_fs_cloner.ggInstances.length; i++) {
				me._thumbnails_fs_cloner.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbnails_fs_cloner.ggInstances.length; i++) {
				me._thumbnails_fs_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me._thumbnails_toggle.logicBlock_visible();
			me._thumbnails_background_blur.logicBlock_visible();
			me._thumbnails_fullscreen.logicBlock_visible();
			me._thumbnails_fs_scroller.logicBlock_visible();
			me._thumbnails_fs_cloner.ggUpdateConditionNodeChange();
			me._thumbnails_fullscreen_phone.logicBlock_visible();
			me._thumbnails_scroller_phone.logicBlock_visible();
			me._node_cloner_phone.ggUpdateConditionNodeChange();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._thumbnails_fs_cloner.ggInstances.length; i++) {
				me._thumbnails_fs_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_configloaded(event);
			}
			for(var i = 0; i < me._thumbnails_fs_cloner.ggInstances.length; i++) {
				me._thumbnails_fs_cloner.ggInstances[i].ggEvent_configloaded(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me._thumbnails_toggle.logicBlock_visible();
			me._thumbnails_background_blur.logicBlock_visible();
			me._thumbnails_fullscreen.logicBlock_visible();
			me._thumbnails_fs_scroller.ggUpdatePosition();
			me._thumbnails_fs_scroller.logicBlock_visible();
			me._thumbnails_fullscreen_phone.logicBlock_visible();
			me._thumbnails_scroller_phone.ggUpdatePosition();
			me._thumbnails_scroller_phone.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_phone.logicBlock();
		});
		player.addListener('varchanged_opt_3d_preview', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_opt_3d_preview();
				}
			}
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._thumbnails_fullscreen.logicBlock_visible();
			me._thumbnails_fs_scroller.logicBlock_visible();
			me._thumbnails_fullscreen_phone.logicBlock_visible();
			me._thumbnails_scroller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbnails', function(event) {
			me._thumbnails_toggle.logicBlock_visible();
			me._thumbnails_background_blur.logicBlock_visible();
			me._thumbnails_fullscreen.logicBlock_visible();
			me._thumbnails_fullscreen_phone.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._thumbnails_fs_cloner.ggUpdate();
			me._node_cloner_phone.ggUpdate();
		});
	};
	function SkinCloner_node_cloner_phone_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_node_image_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_node_image_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_node_image_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_node_image_phone_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 8px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_node_image_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 112px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_node_image_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_node_image_phone.onclick=function (e) {
			if (me._thumbnail_node_image_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnails', false);
		}
		me._thumbnail_node_image_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_node_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_node_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_node_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_node_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(40,40,40,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 33%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_node_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_node_title_phone.ggUpdateText();
		el.appendChild(els);
		me._thumbnail_node_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_node_title_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_node_title_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_node_title_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_node_title_phone.style.transition='';
				if (me._thumbnail_node_title_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_node_title_phone.style.visibility="hidden";
					me._thumbnail_node_title_phone.ggVisible=false;
				}
				else {
					me._thumbnail_node_title_phone.style.visibility=(Number(me._thumbnail_node_title_phone.style.opacity)>0||!me._thumbnail_node_title_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_node_title_phone.ggVisible=true;
				}
			}
		}
		me._thumbnail_node_title_phone.logicBlock_visible();
		me._thumbnail_node_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_node_image_phone.appendChild(me._thumbnail_node_title_phone);
		el=me._thumbnail_node_active_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_node_active_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_node_active_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 4px solid #e6e6e6;';
		hs+='border-radius : 8px;';
		hs+='cursor : default;';
		hs+='height : 104px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_node_active_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_node_active_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._thumbnail_node_active_phone.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_node_active_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_node_active_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_node_active_phone.style.transition='';
				if (me._thumbnail_node_active_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_node_active_phone.style.visibility=(Number(me._thumbnail_node_active_phone.style.opacity)>0||!me._thumbnail_node_active_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_node_active_phone.ggVisible=true;
				}
				else {
					me._thumbnail_node_active_phone.style.visibility="hidden";
					me._thumbnail_node_active_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_node_active_phone.logicBlock_visible();
		me._thumbnail_node_active_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_node_image_phone.appendChild(me._thumbnail_node_active_phone);
		me.__div.appendChild(me._thumbnail_node_image_phone);
		el=me._thumbnail_visited_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiNFNkU2RTY7c3Ryb2tlLXdpZHRoOjY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxnIGlkPSJoaWdobGlnaHQiPgogIDxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIGNsYXNzPSJzdDAiIHI9IjMxIi8+CiA8L2c+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBjbGFzcz0ic3QxIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEi'+
			'PgogIDxwb2x5bGluZSBwb2ludHM9IjE4LjYsMjYuNyAzMC45LDQ4IDQ5LjQsMTYgICIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnail_visited_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited_phone.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited_phone.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited_phone.style.transition='';
				if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited_phone.style.visibility=(Number(me._thumbnail_visited_phone.style.opacity)>0||!me._thumbnail_visited_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited_phone.ggVisible=true;
				}
				else {
					me._thumbnail_visited_phone.style.visibility="hidden";
					me._thumbnail_visited_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited_phone.logicBlock_visible();
		me._thumbnail_visited_phone.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited_phone);
		me._thumbnail_node_title_phone.logicBlock_visible();
		me._thumbnail_node_active_phone.logicBlock_visible();
		me._thumbnail_visited_phone.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function(event) {
				me._thumbnail_node_title_phone.logicBlock_visible();
			};
			me.ggEvent_changenode=function(event) {
				me._thumbnail_node_title_phone.logicBlock_visible();
				me._thumbnail_node_active_phone.logicBlock_visible();
				me._thumbnail_visited_phone.logicBlock_visible();
				me._thumbnail_visited_phone.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited_phone.logicBlock_visible();
			};
			me.ggEvent_configloaded=function(event) {
				me._thumbnail_node_title_phone.logicBlock_visible();
			};
	};
	function SkinCloner_thumbnails_fs_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnails_fs_node_image=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_node_image;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_fs_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_node_image_phone_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 8px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnails_fs_node_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 112px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_node_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnails_fs_node_image.onclick=function (e) {
			if (me._thumbnails_fs_node_image.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnails', false);
		}
		me._thumbnails_fs_node_image.onmouseenter=function (e) {
			me.elementMouseOver['thumbnails_fs_node_image']=true;
			me._thumbnails_fs_node_title.logicBlock_visible();
		}
		me._thumbnails_fs_node_image.onmouseleave=function (e) {
			me.elementMouseOver['thumbnails_fs_node_image']=false;
			me._thumbnails_fs_node_title.logicBlock_visible();
		}
		me._thumbnails_fs_node_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_fs_node_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_node_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_fs_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnails_fs_node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(40,40,40,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 33%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnails_fs_node_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnails_fs_node_title.ggUpdateText();
		el.appendChild(els);
		me._thumbnails_fs_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title != "")) && 
				((me.elementMouseOver['thumbnails_fs_node_image'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fs_node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fs_node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fs_node_title.style.transition='';
				if (me._thumbnails_fs_node_title.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fs_node_title.style.visibility=(Number(me._thumbnails_fs_node_title.style.opacity)>0||!me._thumbnails_fs_node_title.style.opacity)?'inherit':'hidden';
					me._thumbnails_fs_node_title.ggVisible=true;
				}
				else {
					me._thumbnails_fs_node_title.style.visibility="hidden";
					me._thumbnails_fs_node_title.ggVisible=false;
				}
			}
		}
		me._thumbnails_fs_node_title.logicBlock_visible();
		me._thumbnails_fs_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fs_node_image.appendChild(me._thumbnails_fs_node_title);
		el=me._thumbnails_fs_node_active=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_node_active;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnails_fs_node_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 4px solid #e6e6e6;';
		hs+='border-radius : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 104px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_node_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_node_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._thumbnails_fs_node_active.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fs_node_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fs_node_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fs_node_active.style.transition='';
				if (me._thumbnails_fs_node_active.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fs_node_active.style.visibility=(Number(me._thumbnails_fs_node_active.style.opacity)>0||!me._thumbnails_fs_node_active.style.opacity)?'inherit':'hidden';
					me._thumbnails_fs_node_active.ggVisible=true;
				}
				else {
					me._thumbnails_fs_node_active.style.visibility="hidden";
					me._thumbnails_fs_node_active.ggVisible=false;
				}
			}
		}
		me._thumbnails_fs_node_active.logicBlock_visible();
		me._thumbnails_fs_node_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fs_node_image.appendChild(me._thumbnails_fs_node_active);
		me.__div.appendChild(me._thumbnails_fs_node_image);
		el=me._thumbnails_fs_visited=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_visited;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_fs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiNFNkU2RTY7c3Ryb2tlLXdpZHRoOjY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxnIGlkPSJoaWdobGlnaHQiPgogIDxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIGNsYXNzPSJzdDAiIHI9IjMxIi8+CiA8L2c+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBjbGFzcz0ic3QxIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEi'+
			'PgogIDxwb2x5bGluZSBwb2ludHM9IjE4LjYsMjYuNyAzMC45LDQ4IDQ5LjQsMTYgICIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_fs_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnails_fs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='height : 18px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnails_fs_visited.ggElementNodeId()) == true)) || 
				((me._thumbnails_fs_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fs_visited.style.transition='';
				if (me._thumbnails_fs_visited.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fs_visited.style.visibility=(Number(me._thumbnails_fs_visited.style.opacity)>0||!me._thumbnails_fs_visited.style.opacity)?'inherit':'hidden';
					me._thumbnails_fs_visited.ggVisible=true;
				}
				else {
					me._thumbnails_fs_visited.style.visibility="hidden";
					me._thumbnails_fs_visited.ggVisible=false;
				}
			}
		}
		me._thumbnails_fs_visited.logicBlock_visible();
		me._thumbnails_fs_visited.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnails_fs_visited);
		me.elementMouseOver['thumbnails_fs_node_image']=false;
		me._thumbnails_fs_node_title.logicBlock_visible();
		me._thumbnails_fs_node_active.logicBlock_visible();
		me._thumbnails_fs_visited.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function(event) {
				me._thumbnails_fs_node_title.logicBlock_visible();
			};
			me.ggEvent_changenode=function(event) {
				me._thumbnails_fs_node_title.logicBlock_visible();
				me._thumbnails_fs_node_active.logicBlock_visible();
				me._thumbnails_fs_visited.logicBlock_visible();
				me._thumbnails_fs_visited.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnails_fs_visited.logicBlock_visible();
			};
			me.ggEvent_configloaded=function(event) {
				me._thumbnails_fs_node_title.logicBlock_visible();
			};
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 71px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdm'+
			'Vyc2lvbj0iMS4wIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEgICBjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAgICBTMS43LDQ3MywzNC45LDQzOS43eiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white_lower.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white_lower.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateVisible == 0) {
					me._chevron_white_lower.style.visibility="hidden";
					me._chevron_white_lower.ggVisible=false;
				}
				else {
					me._chevron_white_lower.style.visibility=(Number(me._chevron_white_lower.style.opacity)>0||!me._chevron_white_lower.style.opacity)?'inherit':'hidden';
					me._chevron_white_lower.ggVisible=true;
				}
			}
		}
		me._chevron_white_lower.logicBlock_visible();
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.logicBlock_alpha();
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdm'+
			'Vyc2lvbj0iMS4wIj4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcgICBjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateVisible == 0) {
					me._chevron_black.style.visibility="hidden";
					me._chevron_black.ggVisible=false;
				}
				else {
					me._chevron_black.style.visibility=(Number(me._chevron_black.style.opacity)>0||!me._chevron_black.style.opacity)?'inherit':'hidden';
					me._chevron_black.ggVisible=true;
				}
			}
		}
		me._chevron_black.logicBlock_visible();
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.logicBlock_alpha();
		me._chevron_black.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdm'+
			'Vyc2lvbj0iMS4wIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEgICBjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAgICBTMS43LDQ3MywzNC45LDQzOS43eiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._chevron_white__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.logicBlock_alpha();
		me._chevron_white.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #000000; transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style.transition='opacity 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 505);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.logicBlock_alpha();
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._hs_tt.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hs_tt.ggUpdateText();
		player.addListener('changenode', function() {
			me._hs_tt.ggUpdateText();
		});
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style.transition='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.logicBlock_visible();
		me._hs_tt.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		el=me._hs_visited=document.createElement('div');
		els=me._hs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTI0MCAzMzIgMTMwIDEzMDsiIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSIgdmVyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAuMy0wLjgsMC41LTEu'+
			'MiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LDAuNSwxLjMsMC41Yz'+
			'AuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._hs_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._hs_visited.ggIsActive() == true)) || 
				((player.nodeVisited(me._hs_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited.style.transition='';
				if (me._hs_visited.ggCurrentLogicStateVisible == 0) {
					me._hs_visited.style.visibility=(Number(me._hs_visited.style.opacity)>0||!me._hs_visited.style.opacity)?'inherit':'hidden';
					me._hs_visited.ggVisible=true;
				}
				else {
					me._hs_visited.style.visibility="hidden";
					me._hs_visited.ggVisible=false;
				}
			}
		}
		me._hs_visited.logicBlock_visible();
		me._hs_visited.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_visited);
		me._ht_node.appendChild(me._hs_preview_image);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 1px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_3d.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_3d.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_3d.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style.transition='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.logicBlock_visible();
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		el=me.__3d_code=document.createElement('div');
		el.ggId="_3d_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3d_code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3d_code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__3d_code);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage.ggAltText));
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage.ggText_untranslated = img;
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage.ggSubElement.style.width = '0px';
			me._ht_node_customimage.ggSubElement.style.height = '0px';
			me._ht_node_customimage.ggSubElement.src='';
			me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage.ggText != player._(me._ht_node_customimage.ggText_untranslated)) {
				me._ht_node_customimage.ggText = player._(me._ht_node_customimage.ggText_untranslated);
				me._ht_node_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style.transition='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage.ggSubElement.src='';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.logicBlock_visible();
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentWidth < me._ht_node_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage.scrollLeft=currentWidth / 2 - me._ht_node_customimage.clientWidth / 2;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentHeight < me._ht_node_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage.scrollTop=currentHeight / 2 - me._ht_node_customimage.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		me.elementMouseOver['ht_node']=false;
		me._chevron_white_lower.logicBlock_visible();
		me._chevron_white_lower.logicBlock_alpha();
		me._chevron_black.logicBlock_visible();
		me._chevron_black.logicBlock_alpha();
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha();
		me._hs_preview_image.logicBlock_alpha();
		me._hs_tt.logicBlock_visible();
		me._hs_visited.logicBlock_visible();
		me._tt_ht_3d.logicBlock_visible();
		el = me.__3d_code;
		javascript:"";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'translate3d(0px,0px,-1000px) perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._hs_visited.logicBlock_visible();
				me._hs_visited.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._hs_visited.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_varchanged_opt_3d_preview=function() {
				me._hs_preview_image.logicBlock_alpha();
				me._tt_ht_3d.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }@font-face { font-family: "Open Sans"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/open-sans-latin-regular.woff2") format("woff2"); } @font-face { font-family: "Open Sans"; font-style: normal; font-weight: 600; src: local(""), url("$(skinbase)fonts/open-sans-latin-600.woff2") format("woff2"); } @font-face { font-family: "Open Sans"; font-style: normal; font-weight: 700; src: local(""), url("$(skinbase)fonts/open-sans-latin-700.woff2") format("woff2"); } .open_sans { font-family: "Open Sans"; }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};
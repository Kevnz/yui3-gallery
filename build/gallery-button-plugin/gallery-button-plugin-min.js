YUI.add("gallery-button-plugin",function(c){var e=function(){},l="yui3-button",k=l+"-toggle",f=l+"-selected",b=l+"-group-exclusive",i="selected",j="click",h="button."+k,m="button."+f,d="aria-pressed",a=1,g=2;e._selectedGetter=function(){switch(this._toggleType){case a:return this._toggleSelected;case g:return this._selectedToggle;default:return c.Node.DEFAULT_GETTER.call(this,i);}};e._selectedSetter=function(n){var o=null;switch(this._toggleType){case a:this[n?"addClass":"removeClass"](f);this[n?"setAttribute":"removeAttribute"](d,true);this._toggleSelected=!!n;break;case g:if(n){o=c.one(n);o.set(i,true);this._selectedToggle=(o.get(i)?o:null);}else{this._selectedToggle=null;}this.all(h).each(function(p){if(p!==o){p.set(i,false);}});break;default:c.Node.DEFAULT_SETTER.call(this,i,n);break;}return n;};e._addToggleButton=function(n){n._toggleType=a;n.set(i,n.hasClass(f));n.on(j,function(){this.set(i,!this.get(i));});};e._addButtonGroup=function(n){n._toggleType=g;n.set(i,c.one(m));n.delegate(j,function(o){var p=o.target;o.container.set(i,p.get(i)?p:null);},h);};e.addToggles=function(n){n=c.one(n||"body");n.all(h).each(e._addToggleButton);n.all("."+b).each(e._addButtonGroup);};c.Node.ATTRS[i]={getter:e._selectedGetter,setter:e._selectedSetter};c.ButtonPlugin=e;},"gallery-2012.03.28-20-16",{requires:["node","cssbutton"],skinnable:false});
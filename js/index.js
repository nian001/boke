$(function(){
	var banner = {
		$bannerNext: null,
		$bannerPrve: null,
		$bannerBox: null,
		$imgs: null,
		$bars: null,
		_index: 0,
		init: function(time){
			var _this = this;
			_this.$bannerBox = $("#banner-box");
			_this.$imgs = _this.$bannerBox.find(".banner-imgs>li.banner-img-item");
			_this.$bars = _this.$bannerBox.find(".banner-bars>li");
			_this.$bannerNext = $("#banner-next");
			_this.$bannerPrve = $("#banner-prve");
			_this._index = 0;
			timer = setInterval(function(){
				_this.bannerNext();
			}, time);
			_this.event(timer);
		},
		event: function(timer){
			var _this = this;
			_this.$bars.click(function(){
				_this._index = $(this).index();
				_this.bannerAnimate(_this._index);
			});
			_this.$bannerPrve.click(function(){
				_this.bannerPrve();
			});
			_this.$bannerNext.click(function(){
				_this.bannerNext();
			});
			_this.$bannerBox.mouseover(function(){
				clearInterval(timer);
				timer = null;
			});
			_this.$bannerBox.mouseout(function(){
				timer = setInterval(function(){
					_this.bannerNext();
				}, 3000);
			});
		},
		bannerPrve: function(){
			var _index = this._index;
			--_index;
			this._index = _index < 0 ? 4 : _index;
			this.bannerAnimate(this._index);
		},
		bannerNext: function(){
			var _index = this._index;
			++_index;
			this._index = _index > 4 ? 0 : _index;
			this.bannerAnimate(this._index);
		},
		bannerAnimate: function(_index){
			var _class = "active";
			this.$imgs.removeClass(_class).eq(_index).addClass(_class);
			this.$bars.removeClass(_class).eq(_index).addClass(_class);
		}
	}

	banner.init(5000);
});
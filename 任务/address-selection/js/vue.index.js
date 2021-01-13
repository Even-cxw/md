var vm = new Vue({
	el: ".vueBox",
	data: {
		// 地址
		citys_list: [{
				flex: 1,
				values: [],
				className: 'city_provinces',
			}, {
				divider: true,
				content: '-',
				className: 'city_divider'
			}, {
				flex: 1,
				values: [],
				className: 'city_cities'
			}
		],
		cityVisible: false, //城市选择器弹出框是否可见 
		city_temp: '', // 暂作缓存，取消按钮不赋值给city_name
		city_name: '中国-台湾', //城市三级地址 省-市-县
	},

	created: function() {
		// 设置城市初始值
		this.citys_list[0].values = citysData.provinces;
		this.citys_list[2].values = citysData.provinces[0].cities;
	},
	methods: {
		// 城市弹窗
		showCitys: function() {
			this.cityVisible = true
		},
		cityChange: function(picker, values) {
			if (picker.getSlotValue(0)) {
				console.log('picker.getSlotValue(0)', picker.getSlotValue(0));
				this.citys_list[2].values = picker.getSlotValue(0).cities;
				this.city_temp = picker.getSlotValue(0).name + '-' + picker.getSlotValue(1).name
			} else {
				this.city_temp = '中国-台湾'
			}
		},
		selectCity: function(bool) {
			console.log('bool', bool) //确认按钮、取消按钮
			this.city_name = bool ? this.city_temp : this.city_name
			this.cityVisible = false
		},
	},
});

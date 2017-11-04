//省对象
var Province = function (_siteID, _provinceID, _provinceName) {
    this.siteID = _siteID;
    this.provinceID = _provinceID;
    this.provinceName = _provinceName;
}

//市对象
var City = function (_siteID, _provinceID, _cityID, _cityName) {
    this.siteID = _siteID;
    this.provinceID = _provinceID;
    this.cityID = _cityID;
    this.cityName = _cityName;
}

var AreaSelect = {
    // 省
    allProvinces : null,
    init : function () {
        this._arrayToObject();
        this._buildPage();
        var self = this;
        $("input[name=areaZH]").focus(function () {
            $(".panel").show();
            $(".province").show();
            $(".city").hide();
        })
        $(document.body).click(function (e) {
            if ($(e.target).attr("name") != "areaZH") {
                $(".panel").hide();
            }
        });
        $('.panel').click(function(e){
            e.stopPropagation();
        })
    },
    // 将数组转为对象存储
    _arrayToObject : function () {
        this.allProvinces = [];
        for (var i = 0; i < provinces.length; i++) {
            var siteID = provinces[i][0];
            var provinceID = provinces[i][1];
            var provinceName = provinces[i][2];
            var province = new Province(siteID, provinceID, provinceName);
            var cities = this._findCityByProvinceID(provinceID);
            province.cities = cities;
            this.allProvinces.push(province);
        }
    },
    // 通过省ID查找市
    _findCityByProvinceID : function (provinceID) {
        var cityArr = [];
        for (var i = 0; i < cities.length; i++) {
            if (cities[i][1] === provinceID) {
                var siteID = cities[i][0];
                var provinceID = cities[i][1];
                var cityID = cities[i][2];
                var cityName = cities[i][3];
                var city = new City(siteID, provinceID, cityID, cityName);
                cityArr.push(city);
            }
        }
        return cityArr;
    },
    // 查找所有省
    _buildPage : function () {
        // 生成页面
        var provinceString = "";
        for (var i = 0; i < this.allProvinces.length; i++){
            var province = this.allProvinces[i];
            provinceString += "<button type='button' class='btn btn-link' id=\""+province.siteID+"\">"+province.provinceName+"</button>";
        }
        $(".province").html(provinceString);
        var self = this;
        // 待插入省级内容后绑定事件
        $(".province button").bind("click", function () {
            var proName = $(this).text(), 
                proId = $(this).attr("id"),
                provinceObj = self.findProvinceByName(proName),
                cities = "";
            for (var i = 0; i < provinceObj.cities.length; i++) {
                var siteID = provinceObj.cities[i].siteID;
                var cityName = provinceObj.cities[i].cityName;
                cities += "<div class='checkbox'><label><input type='checkbox' name='city' value='"+cityName+":"+siteID+"'>"+cityName+"</label></div>";
            }
			// 如果是省，则在前面加上省名
			if (provinceObj.cities.length > 1) {
				cities = "<div class='checkbox'><label><input type='checkbox' name='city' value='"+proName+":"+proId+"'>"+proName+"</label></div>" + cities;
			}
            cities += "<br><button type='button' class='btn btn-primary' name='ok'><span class='glyphicon glyphicon-ok'></span>确定</button>";
            cities += "<button type='button' class='btn btn-default' name='cancel'><span class='glyphicon glyphicon-remove'></span>取消</button>";
            cities += "<button type='button' class='btn btn-info' name='okAndContinue'>保存并继续选择</button>";
            $(".province").hide();
            //add '全选'
            if ($(".panel-title input[name=all]").length==0) {
                $(".panel-title").append("<span class='checkbox checkbox-inline' style='margin-top:0px;'><label><input type=\"checkbox\" name=\"all\" value=\"all\" />全选</label></span>");
            }
            $(".city").html(cities).show();
			$(".panel-title input[name=all]").click(function () {
				$(".city input[type='checkbox']").each(function(i,item){
                    $(item).click();
                });
				
			});
            $(".city button[name=ok]").click(function () {
                self.save();
                $(".panel").hide();
            });
            $(".city button[name=cancel]").click(self.cancel);
            $(".city button[name=okAndContinue]").click(function () {
                self.saveAndContinue();
            });
        });
    },
    // 根据省级名称，查找对应的下级市
    findProvinceByName : function (province) {
        if (!province)
            return null;
        var _province = null;
        for (var i = 0; i < this.allProvinces.length; i++) {
            if (province === this.allProvinces[i].provinceName) {
                _province = this.allProvinces[i];
                break;
            }
        }
        
        return _province;
    },
    save : function () {
        var areaZH = $.trim($("input[name=areaZH]").val());
        //console.log(areaZH);
        var resultStr = "";
        $(".city input[type=checkbox]").each(function(index, item){
            if ($(item).prop('checked')){
                resultStr += $(this).val() + ",";
            }
        });
        // 去掉末尾逗号
        if (resultStr.indexOf(',') != -1)
            resultStr = resultStr.substring(0, resultStr.length-1);
        
        //得到所有的值 ，包括名称和ID，并分别保存到两个表单中
        //注意：数据格式为==>  武汉市：1,潜江市:3,
        var areaName = "", areaID = "";
        var resultArr = resultStr.split(',');
        for (var i=0; i<resultArr.length; i++){
            var city = resultArr[i].split(':');
            // 因为可以重复选择，所以要判断选择的值是否已经存在，存在就跳过
            if (areaZH && areaZH.indexOf(city[0]) != -1)
                continue;
            areaName += city[0] + ',';
            areaID += city[1] + ',';
        }
        //console.log(areaName)
        if (areaName.indexOf(',') != -1)
            areaName = areaName.substring(0, areaName.length-1);
        if (areaID.indexOf(',') != -1)
            areaID = areaID.substring(0, areaID.length-1);
        // 追加内容
        if (areaName && areaZH ) {
            areaName = $("input[name=areaZH]").val() + "," + areaName;
            areaID = $("input[name=areaID]").val() + "," + areaID;
        }
        if (areaName) {
            $("input[name=areaZH]").val(areaName);
            $("input[name=areaID]").val(areaID);
        }
    },
    cancel : function () {
        $(".panel").hide();
    },
    saveAndContinue : function () {
        this.save();
        $(".city").hide();
        $(".province").show();
    },
    // 根据DOM递归查找指定的class对象
    /*findParentByClass : function (dom, klass) {
        if (dom.className.indexOf(klass) != -1) {
            return dom;
        }else{
            if (dom.parentElement)
                return this.findParentByClass(dom.parentElement, klass);
            else
                return null;
        }
    }*/
};

$(function () {
    AreaSelect.init();
});
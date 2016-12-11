/**
 * Created by Round on 2016/12/9.
 */
'use strict'

angular.module("formApp",[]) //若是不传递第二个参数的话,就不是注册模块.而是获取formApp模块
        .controller("formController",["$scope",function($scope){
            //给$scope绑定数据和行为
            $scope.userdata={};

            $scope.submitForm= function () {
                console.log($scope.userdata)
                if($scope.signUpForm.$invalid){
                    console.log("出错啦");
                }else{
                    console.log("注册成功!")
                }

            };
        }])
        .directive("compare",function()
        {
            var o={};
            o.strict='AE';
            o.scope={
                orgText:'=compare'

            };
            o.require='ngModel';
            o.link=function(sco,ele,att,con)
            {
                con.$validators.compare= function (v)
                {
                    return v==sco.orgText;
                }
                sco.$watch('orgText',function()
                {
                    con.$validate();
                })
            };
            return o;



        });;
/**
 * Created by Round on 2016/12/10.
 */
'use strict'
angular.module("formApp",[])
       .controller("MainController", ["$scope", function($scope){
           $scope.userdata={};

           $scope.submitForm=function()
           {
               console.log($scope.userdata);//必须是$scope.userdata;
               if($scope.signUpForm.$invalid)
               {
                   console.log(" 提交出错啦!")
               }else
               {
                   console.log("成功提交!")
               }
           }
       }])
    .directive("compare", function () {
        var o={};
        o.strict='AE';
        o.scope={
            orgText:"=compare"
        }
        o.require='ngModel';
        o.link= function (sco,ele,att,con) {
            con.$validators.compare= function(v) {
                return v == sco.orgText;
            };
            sco.$watch("orgText",function(){
                con.$validate();
            });
        };
        return o;
    });


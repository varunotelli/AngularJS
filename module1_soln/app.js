(function()
{
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope)
{
	$scope.msgtext={
		color:"blue"
	};
	$scope.lunch="";
	$scope.lunchlist=[];
	$scope.number=null;
	$scope.msg="";



	$scope.message=function()
	{
		$scope.lunchlist=$scope.lunch.split(',');
		$scope.number=$scope.lunchlist.length;
		if($scope.lunch==="")
			{
			$scope.msg="Please enter data first!";
			$scope.msgtext.color="red";
			$scope.msgtext.border="1px solid red";

			}
		else if($scope.number<=3)
			{
				$scope.msgtext.color="green";
				$scope.msgtext.border="1px solid green";
			$scope.msg="Enjoy!";
		}
		else {
			$scope.msgtext.color="green";
			$scope.msgtext.border="1px solid green";
			$scope.msg="Too much!";
		}

	};

};
})();

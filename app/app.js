angular.module('myApp', [])

angular.module('myApp').controller('pancakeCtrl', ($scope)=>{
    $scope.name = 'pancakeCtrl';

    const basicPancake = {
        background: 'lightgray',
        width: '20px',
        height: '20px'
    }

    $scope.newPancake = Object.assign({}, basicPancake);

    $scope.pancakes =[
        {background:'lightgray', width:'20px', height:'20px'},
        {background:'yellow', width:'40px', height:'20px'},
        {background:'green', width:'60px', height:'20px'},
        {background:'purple', width:'80px', height:'20px'},
        {background:'pink', width:'100px', height:'20px'},
        {background:'red', width:'120px', height:'20px'},
        {background:'turquoise', width:'140px', height:'20px'},
        {background:'orange', width:'180px', height:'20px'},
        {background:'blue', width:'200px', height:'20px'},
        {background:'orange', width:'180px', height:'20px'},
        {background:'turquoise', width:'140px', height:'20px'},
        {background:'red', width:'120px', height:'20px'},
        {background:'pink', width:'100px', height:'20px'},
        {background:'purple', width:'80px', height:'20px'},
        {background:'green', width:'60px', height:'20px'},
        {background:'yellow', width:'40px', height:'20px'},
        {background:'lightgray', width:'20px', height:'20px'},
    ]

    $scope.addPancake = ()=>{
        $scope.pancakes.push($scope.newPancake);
        $scope.newPancake = Object.assign({}, basicPancake)
    }
}) 
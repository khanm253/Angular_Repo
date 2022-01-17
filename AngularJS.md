### Two way data binding

    <body ng-app>

        <input ng-model="elem" />
        <p>{{ elem }}</p>

    </body>

### Expressions

    <body ng-oninit="number=2"> // Same as attributes in the component

        <input ng-model="elem" />
        <p>{{ number }}</p>

    </body>

### Directives : ng-repeat

    <body ng-oninit="numbers=[1,3,4]"> // Same as *ngFor

        <ul ng-repeat="number in numbers">
            <li>
                {{ number }}
            </li>
        </ul>

    </body>

### Modules

    var myApp = angular.module('myApp', [])

    set ng-app = "myApp"

    myApp.config, myApp.run, myApp.controller //All helper functions

### Controller

    myApp.controller('AppController', function($scope){
        $scope.message = "Message"
    });

    <div ng-controller="AppController">
        <p>{{ messsage }}<p>
    </div>

### Filters //Like pipes

    <input ng-model="search">   
    <ul ng-repeat="ninja in ninjas| orderBy: 'name'| filter: search">
        <li>
            {{ ninja.name }} - {{ ninja.rate | currency : '$' }}
        </li>
    </ul>

### Ng-include

    <ng-include src="smth.html"><ng-include>

    or 

    <header ng-include="smth.html"><header>
    
### Directives: ng-show/ ng-hide (Basically ngIf)

    ng-show="true" //loads element into DOM

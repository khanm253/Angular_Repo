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


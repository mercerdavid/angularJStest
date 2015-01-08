(function () {
    var app = angular.module('store', ['product' , 'specification']);

    app.controller('StoreController', function () {
        this.products = gems;
    });
    app.controller('PanelController', function () {
            this.tab = 1

            this.selectTab = function (setTab) {
                this.tab = setTab;
            }
            this.isSelected = function (checkTab) {
                return this.tab === checkTab;
            }
        }
    );

    var gems = [{
        name: 'Dodecahedron',
        price: 2.95,
        description: ' . . . ',
        canPurchase: true,
        soldOut: false,
        images: [
            "images/index.jpg",
            "images/index1.jpg",
            "images/index2.jpg",
        ],
        specifications: '1x2x3 (CM)',
        reviews: [
            {
                stars: 5,
                body: "I love cake",
                author: "Khan@thefickle"
            },
            {
                stars: 1,
                body: "I love cake",
                author: "Khan@thefickle"
            },
            {
                stars: 3,
                body: "I love cake",
                author: "Khan@thefickle"
            }
        ]
    },
        {
            name: 'DoobieBlips',
            price: 13.44,
            description: 'Oh only the best , the best oh the best really the best, quality beyond compare',
            canPurchase: true,
            soldOut: false,
            images: [
                "images/index.jpg",
                "images/index1.jpg",
                "images/index2.jpg",
            ],
            specifications: '4x5x6 (CM)',
            reviews: [
                {
                    stars: 2,
                    body: "I love cakex",
                    author: "Khan@thefickle"
                },
                {
                    stars: 4,
                    body: "I love cakey",
                    author: "Khan@thefickle"
                },
                {
                    stars: 2,
                    body: "I love cakez",
                    author: "Khan@thefickle"
                }
            ]
        }

    ]

})();
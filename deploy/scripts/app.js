var app = angular.module('angularApp', ['ngResource']);


app.factory('trumpData', ['$http', function ($http) {
    var promise;

    return {
        async: function () {
            if (!promise) {
                promise = $http.jsonp('https://www.federalregister.gov/api/v1/documents.json?conditions%5Bcorrection%5D=0&conditions%5Bpresident%5D=donald-trump&conditions%5Bpresidential_document_type_id%5D=2&conditions%5Btype%5D=PRESDOCU&fields%5B%5D=citation&fields%5B%5D=document_number&fields%5B%5D=end_page&fields%5B%5D=executive_order_notes&fields%5B%5D=executive_order_number&fields%5B%5D=html_url&fields%5B%5D=pdf_url&fields%5B%5D=publication_date&fields%5B%5D=signing_date&fields%5B%5D=start_page&fields%5B%5D=title&fields%5B%5D=full_text_xml_url&fields%5B%5D=body_html_url&fields%5B%5D=json_url&order=oldest&per_page=1000&callback=JSON_CALLBACK').then(function (response) {
                    return response.data;
                });
            }
            return promise;
        }
    }
}]);


app.controller('trumpCtrl', ['$scope', 'trumpData',  function($scope, trumpData) {

    var date = new Date(2017,00,20);
    $scope.onehundredthday = new Date(date);

    $scope.onehundredthday.setDate($scope.onehundredthday.getDate() + 100);

    trumpData.async().then(function (d){

        $scope.trump = d;

    });

}]);

app.factory('clintonData', ['$http', function ($http) {
    var promise;

    return {
        async: function () {
            if (!promise) {
                promise = $http.jsonp('https://www.federalregister.gov/api/v1/documents.json?conditions%5Bcorrection%5D=0&conditions%5Bpresident%5D=william-j-clinton&conditions%5Bpresidential_document_type_id%5D=2&conditions%5Btype%5D=PRESDOCU&fields%5B%5D=citation&fields%5B%5D=document_number&fields%5B%5D=end_page&fields%5B%5D=executive_order_notes&fields%5B%5D=executive_order_number&fields%5B%5D=html_url&fields%5B%5D=pdf_url&fields%5B%5D=publication_date&fields%5B%5D=signing_date&fields%5B%5D=start_page&fields%5B%5D=title&fields%5B%5D=full_text_xml_url&fields%5B%5D=body_html_url&fields%5B%5D=json_url&order=oldest&per_page=1000&callback=JSON_CALLBACK').then(function (response) {
                    return response.data;
                });
            }
            return promise;
        }
    }
}]);

app.controller('clintonCtrl', ['$scope', 'clintonData',  function($scope, clintonData) {

    var date = new Date(1993,00,20);
    $scope.onehundredthday = new Date(date);

    $scope.onehundredthday.setDate($scope.onehundredthday.getDate() + 100);

    clintonData.async().then(function (d){

        $scope.clinton = d;

        console.log($scope.clinton);

        $scope.clintonTotal = [
            {title:'Ethics Commitments by Executive Branch Appointees', signing_date: '1993-01-20', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12834.pdf'},
            {title:'Establishment of the National Economic Council', signing_date: '1993-01-25', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12835.pdf' },
            {title:'Revocation of Certain Executive Orders Concerning Federal Contracting', signing_date: '1993-02-01', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12836.pdf'},
            {title:'Deficit Control and Productivity Improvement in the Administration of the Federal Government', signing_date: '1993-02-10', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12837.pdf' },
            {title:'Termination and Limitation of Federal Advisory Committees', signing_date: '1993-02-10', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12838.pdf'},
            {title:'Reduction of 100,000 Federal positions', signing_date: '1993-02-10', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12839.pdf' },
            {title:'Nuclear Cooperation With EURATOM', signing_date: '1993-03-09', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12840.pdf'},
            {title:'Adjustments to level IV and V of the Executive Schedule', signing_date: '1993-03-09', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12841.pdf' },
            {title:'International Development Law Institute', signing_date: '1993-03-29', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12842.pdf'},
            {title:'Procurement requirements and policies for Federal agencies for ozone-depleting substances', signing_date: '1993-04-21', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12843.pdf' },
            {title:'Federal use of Alternative fueled vehicless', signing_date: '1993-04-21', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12844.pdf'},
            {title:'Requiring agencies to purchase energy efficient computer equipment', signing_date: '1993-04-21', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12845.pdf'},
            {title:'Additional measures with respect to the Federal Republic of Yugoslavia (Serbia and Montenegro)', signing_date: '1993-05-17', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12846.pdf'},
            {title:'Amending Executive Order No. 11423', signing_date: '1993-05-17', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12847.pdf'},
            {title:'Federal plan to break the cycle of homelessness', signing_date: '1993-05-19', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12848.pdf' },
            {title:'Implementation of agreement with the European Community on Government procurement', signing_date: '1993-05-25', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12849.pdf'},
            {title:"Conditions for renewal of Most-Favored-Nation Status for the People's Republic of China in 1994", signing_date: '1993-05-28', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12850.pdf' },
            {title:'Administration of Proliferation Sanctions, Middle East Arms Control, and Related Congressional Reporting Responsibilities', signing_date: '1993-06-11', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12851.pdf'},
            {title:"President's Council on Sustainable Development", signing_date: '1993-06-29', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12852.pdf' },
            {title:'Blocking Government of Haiti Property and Prohibiting Transactions With Haiti', signing_date: '1993-06-30', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12853.pdf'},
            {title:'Implementation of the Cuban Democracy Act', signing_date: '1993-07-04', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12854.pdf'},
            {title:'Amendment to Executive Order 12852', signing_date: '1993-07-19', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12855.pdf' },
            {title:'Federal Compliance With Right-to-Know Laws and Pollution Prevention Requirements', signing_date: '1993-08-03', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12856.pdf'},
            {title:'Budget Control', signing_date: '1993-08-04', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12857.pdf' },
            {title:'Deficit Reduction Fund', signing_date: '1993-08-04', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12858.pdf'},
            {title:'Establishment of the Domestic Policy Council', signing_date: '1993-08-16', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12859.pdf' },
            {title:'Adding members to the Committee on Foreign Investment in the United States', signing_date: '1993-09-03', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12860.pdf'},
            {title:'Elimination of one-half of Executive Branch internal regulations', signing_date: '1993-09-11', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12861.pdf' },
            {title:'Setting Customer Service Standards', signing_date: '1993-09-11', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12862.pdf'},
            {title:"President's Foreign Intelligence Advisory Board", signing_date: '1993-09-13', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12863.pdf' },
            {title:'United States Advisory Council on the National Information Infrastructure', signing_date: '1993-09-15', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12864.pdf'},
            {title:'Prohibiting Certain Transactions Involving UNITA', signing_date: '1993-09-26', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12865.pdf' },
            {title:'Regulatory Planning and Review', signing_date: '1993-09-30', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12866.pdf'},
            {title:'Termination of emergency authority for certain export controls', signing_date: '1993-09-30', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12867.pdf' },
            {title:'Measures to restrict the participation by United States persons in weapons proliferation activities', signing_date: '1993-09-30', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12868.pdf'},
            {title:'Continuance of certain Federal advisory committees', signing_date: '1993-09-30', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12869.pdf' },
            {title:'Trade Promotion Coordinating Committee', signing_date: '1993-09-30', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12870.pdf'},
            {title:'Labor-Management Partnerships', signing_date: '1993-10-01', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12871.pdf' },
            {title:'Blocking property of persons obstructing democratization in Haiti', signing_date: '1993-10-18', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12872.pdf'},
            {title:'Federal acquisition, recycling, and waste prevention', signing_date: '1993-10-20', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12873.pdf' },
            {title:'Establishing an emergency board to investigate a dispute between the Long Island Rail Road and certain of its employees represented by the United Transportation Union', signing_date: '1993-10-20', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12874.pdf'},
            {title:'Enhancing the Intergovernmental Partnership', signing_date: '1993-10-26', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12875.pdf' },
            {title:'Historically black colleges and universities', signing_date: '1993-11-01', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12876.pdf'},
            {title:'Amendment to Executive Order 12569', signing_date: '1993-11-03', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12877.pdf' },
            {title:'Bipartisan Commission on Entitlement Reform', signing_date: '1993-11-05', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12878.pdf'},
            {title:'Order of succession of officers to act as Secretary of the Navy', signing_date: '1993-11-08', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12879.pdf' },
            {title:'National Drug Control Program', signing_date: '1993-11-16', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12880.pdf'},
            {title:'Establishment of the National Science and Technology Council', signing_date: '1993-11-23', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12881.pdf' },
            {title:"President's Committee of Advisors on Science and Technology", signing_date: '1993-11-23', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12882.pdf'},
            {title:'Delegating a Federal Pay Administration Authority', signing_date: '1993-11-29', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12883.pdf' },
            {title:'Delegation of functions under the Freedom Support Act and related provisions of the Foreign Operations, Export Financing and Related Programs Appropriations Act', signing_date: '1993-12-01', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12884.pdf'},
            {title:'Amendment to Executive Order No. 12829', signing_date: '1993-12-14', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12885.pdf'},
            {title:'Adjustments of rates of pay and allowances for the Uniformed Services', signing_date: '1993-12-23', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12886.pdf' },
            {title:'Amending Executive Order No. 12878', signing_date: '1993-12-30', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12887.pdf'},
            {title:'Amendments to the Manual for Courts-Martial, United States, 1984', signing_date: '1993-12-23', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12888.pdf' },
            {title:'Implementation of the North American Free Trade Agreement', signing_date: '1993-12-27', pdf_url: 'https://www.archives.gov/federal-register/executive-orders/pdf/12889.pdf'},
        ];

        angular.forEach($scope.clinton.results, function(value){
            $scope.clintonTotal.push(value);
        });

    });

}]);

app.factory('bushData', ['$http', function ($http) {
    var promise;

    return {
        async: function () {
            if (!promise) {
                promise = $http.jsonp('https://www.federalregister.gov/api/v1/documents.json?conditions%5Bcorrection%5D=0&conditions%5Bpresident%5D=george-w-bush&conditions%5Bpresidential_document_type_id%5D=2&conditions%5Btype%5D=PRESDOCU&fields%5B%5D=citation&fields%5B%5D=document_number&fields%5B%5D=end_page&fields%5B%5D=executive_order_notes&fields%5B%5D=executive_order_number&fields%5B%5D=html_url&fields%5B%5D=pdf_url&fields%5B%5D=publication_date&fields%5B%5D=signing_date&fields%5B%5D=start_page&fields%5B%5D=title&fields%5B%5D=full_text_xml_url&fields%5B%5D=body_html_url&fields%5B%5D=json_url&order=oldest&per_page=1000&callback=JSON_CALLBACK').then(function (response) {
                    return response.data;
                });
            }
            return promise;
        }
    }
}]);

app.controller('bushCtrl', ['$scope', 'bushData',  function($scope, bushData) {

    var date = new Date(2001,00,20);
    $scope.onehundredthday = new Date(date);

    $scope.onehundredthday.setDate($scope.onehundredthday.getDate() + 100);

    bushData.async().then(function (d){

        $scope.bush = d;

    });

}]);

app.factory('obamaData', ['$http', function ($http) {
    var promise;

    return {
        async: function () {
            if (!promise) {
                promise = $http.jsonp('https://www.federalregister.gov/api/v1/documents.json?conditions%5Bcorrection%5D=0&conditions%5Bpresident%5D=barack-obama&conditions%5Bpresidential_document_type_id%5D=2&conditions%5Btype%5D=PRESDOCU&fields%5B%5D=citation&fields%5B%5D=document_number&fields%5B%5D=end_page&fields%5B%5D=executive_order_notes&fields%5B%5D=executive_order_number&fields%5B%5D=html_url&fields%5B%5D=pdf_url&fields%5B%5D=publication_date&fields%5B%5D=signing_date&fields%5B%5D=start_page&fields%5B%5D=title&fields%5B%5D=full_text_xml_url&fields%5B%5D=body_html_url&fields%5B%5D=json_url&order=oldest&per_page=1000&callback=JSON_CALLBACK').then(function (response) {
                    return response.data;
                });
            }
            return promise;
        }
    }
}]);

app.controller('obamaCtrl', ['$scope', 'obamaData',  function($scope, obamaData) {

    var date = new Date(2009,00,20);
    $scope.onehundredthday = new Date(date);

    $scope.onehundredthday.setDate($scope.onehundredthday.getDate() + 100);

    obamaData.async().then(function (d){

        $scope.obama = d;

    });

}]);

app.directive('onTouch', function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            var ontouchFn = scope.$eval(attrs.onTouch);
            elm.bind('touchstart', function(evt) {
                scope.$apply(function() {
                    ontouchFn.call(scope, evt.which);
                });
            });
            elm.bind('touchend', function(evt){
                scope.$apply(function() {
                    ontouchFn.call(scope, evt.which);
                });
            });
        }
    };
});
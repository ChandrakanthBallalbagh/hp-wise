angular
    .module('sample.products')
    .directive("ngFiles", ngFiles);

ngFiles.$inject = ['$parse'];

function ngFiles($parse) {
    return {
        restrict: 'A',
        link: function fn_link(scope, element, attrs) {
            console.log("inside directive");
            var onChange = $parse(attrs.ngFiles);
            element.on('change', function(event) {
                onChange(scope, { $files: event.target.files });
            });
        }
    }
}

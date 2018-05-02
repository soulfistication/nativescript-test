"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var http = require("http");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var ViewModel = /** @class */ (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        var _this = _super.call(this) || this;
        _this.message = "Hello nodevember.";
        _this.posts = new observable_array_1.ObservableArray([]);
        _this.getPosts();
        return _this;
    }
    ViewModel.prototype.getPosts = function () {
        var _this = this;
        http.getJSON("https://www.reddit.com/r/aww.json")
            .then(function (response) {
            var children = response.data.children;
            children.forEach(function (item) {
                _this.posts.push({
                    title: item.data.title,
                    thumbnail: item.data.thumbnail,
                    user: item.data.author,
                    votes: item.data.ups,
                    url: item.data.url
                });
            });
        });
    };
    return ViewModel;
}(observable_1.Observable));
exports.ViewModel = ViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLDJCQUE2QjtBQUM3Qiw0RkFBMEY7QUFFMUY7SUFBK0IsNkJBQVU7SUFNckM7UUFBQSxZQUNJLGlCQUFPLFNBS1Y7UUFSRCxhQUFPLEdBQVcsbUJBQW1CLENBQUM7UUFLbEMsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGtDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFckMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOztJQUNwQixDQUFDO0lBRU8sNEJBQVEsR0FBaEI7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1DQUFtQyxDQUFDO2FBQzVDLElBQUksQ0FBQyxVQUFDLFFBQWE7WUFFaEIsSUFBSSxRQUFRLEdBQWUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFFbEQsUUFBUSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7Z0JBQ2xCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNaLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7b0JBQ3RCLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7b0JBQzlCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07b0JBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7b0JBQ3BCLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7aUJBQ3JCLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBL0JELENBQStCLHVCQUFVLEdBK0J4QztBQS9CWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xuXG5leHBvcnQgY2xhc3MgVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cbiAgICBwb3N0czogT2JzZXJ2YWJsZUFycmF5PGFueT5cblxuICAgIG1lc3NhZ2U6IHN0cmluZyA9IFwiSGVsbG8gbm9kZXZlbWJlci5cIjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMucG9zdHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcblxuICAgICAgICB0aGlzLmdldFBvc3RzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRQb3N0cygpIHtcbiAgICAgICAgaHR0cC5nZXRKU09OKFwiaHR0cHM6Ly93d3cucmVkZGl0LmNvbS9yL2F3dy5qc29uXCIpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gPEFycmF5PGFueT4+cmVzcG9uc2UuZGF0YS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0uZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbDogaXRlbS5kYXRhLnRodW1ibmFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IGl0ZW0uZGF0YS5hdXRob3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB2b3RlczogaXRlbS5kYXRhLnVwcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogaXRlbS5kYXRhLnVybFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
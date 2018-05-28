"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var http = require("http");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var ViewModel = /** @class */ (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        var _this = _super.call(this) || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLDJCQUE2QjtBQUM3Qiw0RkFBMEY7QUFFMUY7SUFBK0IsNkJBQVU7SUFJckM7UUFBQSxZQUNJLGlCQUFPLFNBS1Y7UUFIRyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0NBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVyQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O0lBQ3BCLENBQUM7SUFFTyw0QkFBUSxHQUFoQjtRQUFBLGlCQWdCQztRQWZHLElBQUksQ0FBQyxPQUFPLENBQUMsbUNBQW1DLENBQUM7YUFDNUMsSUFBSSxDQUFDLFVBQUMsUUFBYTtZQUVoQixJQUFJLFFBQVEsR0FBZSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUVsRCxRQUFRLENBQUMsT0FBTyxDQUFFLFVBQUEsSUFBSTtnQkFDbEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztvQkFDdEIsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztvQkFDOUIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtvQkFDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztvQkFDcEIsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztpQkFDckIsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUE3QkQsQ0FBK0IsdUJBQVUsR0E2QnhDO0FBN0JZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIHBvc3RzOiBPYnNlcnZhYmxlQXJyYXk8YW55PlxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5wb3N0cyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoW10pO1xuXG4gICAgICAgIHRoaXMuZ2V0UG9zdHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFBvc3RzKCkge1xuICAgICAgICBodHRwLmdldEpTT04oXCJodHRwczovL3d3dy5yZWRkaXQuY29tL3IvYXd3Lmpzb25cIilcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSA8QXJyYXk8YW55Pj5yZXNwb25zZS5kYXRhLmNoaWxkcmVuO1xuXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5kYXRhLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsOiBpdGVtLmRhdGEudGh1bWJuYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogaXRlbS5kYXRhLmF1dGhvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvdGVzOiBpdGVtLmRhdGEudXBzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBpdGVtLmRhdGEudXJsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
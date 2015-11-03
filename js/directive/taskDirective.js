/**
 * Created by marco_cadima on 8/4/14.
 */

app.directive('taskDirective', function () {

    return {
        template: "<div class='col-md-1'>" +
        "<input type='checkbox' ng-model='task.status'/>" +
        "</div>" +
            "<div class='col-md-10'>" +
                "<span class='my-span'>{{task.description}}</span>" +
            "</div>" +
            "<div class='col-md-1' >" +
                "<button type='button' class='btn btn-danger btn-xs' ng-click='deleteTask(task)'>" +
                    "<span class='glyphicon glyphicon-remove'></span>"+
                "</button>" +
            "</div>"
    };
});


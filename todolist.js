var todoList = (function () {

    function modify(obj, callback) {
        $.post("http://10.10.10.96:8080/jsonEx/todo/modify", obj, function (data) {
            console.log(data);
            callback(data.result);
        }, "json");
    }


    function remove(pk, callback) {
        $.post("http://10.10.10.96:8080/jsonEx/todo/remove", {pk: pk}, function (data) {
            console.log(data);
            callback(data.result);
        }, "json");
    }

    function getAll(callback) {
        $.getJSON("http://10.10.10.96:8080/jsonEx/todo/all", function (list) {
            console.log(list);
            callback(list);
        });
    }

    // var arr = [];
    // var pk = 0;

    //closer
    function add(obj, callback) {
        //두개 중 아무거나 해도 상관없음.
        //obj.pk = pk++;
        // obj['pk'] = pk++;
        //
        // arr.push(obj);
        // callback(obj.pk);

        //서버에다 데이터를 POST 방식으로 보낼 수 있게 변경해보자
        $.post("http://10.10.10.96:8080/jsonEx/todo/add", {title: obj}, function (data) {
            console.log(data);
            callback(data.pk);
        }, "json");
    }

    return {
        add: add,
        getAll: getAll,
        remove: remove,
        modify: modify
    }

})();
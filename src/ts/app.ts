/// <reference path="../../typings/tsd.d.ts" />

$(() => {
    var promise = $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/v1/entries',
        dataType: 'json',
        async: true
    });

    promise.done(data => {
        console.log('done');
        console.log(data);
    });

    $('#post-action').on('click', e => {
        var promise = $.ajax({
            type: 'post',
            url: 'http://localhost:3000/api/v1/entries',
            dataType: 'json',
            data: {
                entries: {
                    title: 'hoge',
                    content: 'hogehoge'
                }
            },
            async: true
        });

        promise.done(data => {
            console.log('done');
            console.log(data);
        });
    });
});

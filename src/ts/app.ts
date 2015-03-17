/// <reference path="../../typings/tsd.d.ts" />

declare var faker: any;

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
        var date: Date = new Date();
        var promise = $.ajax({
            type: 'post',
            url: 'http://localhost:3000/api/v1/entries',
            dataType: 'json',
            data: {
                entries: {
                    title: 'hoge_' + date.getTime(),
                    content: 'content_' + date.getTime()
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

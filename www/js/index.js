var app = {
    /** コンストラクタ  */
    initialize: function () {
        $('.button').on('click', function(){
            var click =  $(this).data('id');
                        
            $('#selected').text(click);
        });
    }
};

app.initialize();

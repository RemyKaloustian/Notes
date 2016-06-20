$(function () { //DOM Ready 


    notie.input({
        type: 'email',
        placeholder: 'name@example.com',
    prefilledValue: 'jane@doe.com'
}, 'Please enter your email address:', 'Submit', 'Cancel', 'email', 'name@example.com', function(valueEntered) {
    notie.alert(1, 'You entered: ' + valueEntered, 2);
});

    //$(".gridster ul").gridster({
    //    widget_margins: [0, 0],
    //    widget_base_dimensions: [0, 0]
    //});

});
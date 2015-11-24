<script type="text/javascript">
//
// Push notification
//
(function() {

    document.addEventListener('deviceready', function() {
        var oldPushNotification = window.PushNotification;
        window.PushNotification.init = function(options) {
            if (options.android) {
                options.android.senderID = "741175631277";
            }
            var pgdevPush = new oldPushNotification.PushNotification(options);
            pgdevPush.on('registration', function(data) {
                console.log('Device Push ID: \n' + data.registrationId);
            });
            return pgdevPush;
        };
    });

})(window);
</script>

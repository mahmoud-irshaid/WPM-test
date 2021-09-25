export default function LocalServiceWorkerRegister() {

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('serviceWorker.js').then(function (registration) {
                console.log('Worker registration successful', registration.scope);


                window.addEventListener('beforeinstallprompt', event => {
                    event.preventDefault();
                    var button = document.querySelector('button');
                    button.removeAttribute('hidden');
                    button.addEventListener('click', () => {
                      event.prompt();
                      button.setAttribute('disabled', true);
                    });
                  });

            }, function (err) {
                console.log('Worker registration failed', err);
            }).catch(function (err) {
                console.log(err);
            });
        });
    } else {
        console.log('Service Worker is not supported by browser.');
    }
}